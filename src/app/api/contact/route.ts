import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { checkRateLimit } from "@/lib/rate-limit";
import { SITE_HOST } from "@/lib/site";
import { verifyTurnstileToken } from "@/lib/turnstile";

export const runtime = "nodejs";

/**
 * Rejects CRLF / URL-encoded CRLF so user input can never inject extra
 * headers or lines into anything built from it downstream.
 */
const noHeaderInjection = (value: string) => !/[\r\n]|%0d|%0a/i.test(value);

const contactSchema = z
  .object({
    email: z.string().trim().email().max(254).refine(noHeaderInjection),
    turnstileToken: z.string().min(1).max(2048),
  })
  .strict();

const MAX_BODY_BYTES = 10_000;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/** Only accept requests that came from this site's own front end. */
function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true; // same-origin browser navigations omit Origin
  return origin === request.nextUrl.origin;
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json(
      { success: false, message: "Unable to send email." },
      { status: 403 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { success: false, message: "Request too large." },
      { status: 413 },
    );
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json(
        { success: false, message: "Request too large." },
        { status: 413 },
      );
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 },
    );
  }
  const { email, turnstileToken } = parsed.data;

  const turnstileOk = await verifyTurnstileToken(turnstileToken, ip);
  if (!turnstileOk) {
    return NextResponse.json(
      { success: false, message: "Verification failed. Please try again." },
      { status: 403 },
    );
  }

  const emailHost = process.env.EMAIL_HOST;
  const emailPort = Number(process.env.EMAIL_PORT ?? 587);
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL ?? emailUser;
  if (!emailHost || !emailUser || !emailPass || !receiverEmail) {
    console.error("Contact form is missing required email environment variables");
    return NextResponse.json(
      { success: false, message: "Unable to send email." },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailPort === 465,
      auth: { user: emailUser, pass: emailPass },
    });

    await transporter.sendMail({
      from: `"Fura Habitech" <${emailUser}>`,
      // Destination is fixed server-side — never taken from the request,
      // so this endpoint can't be used as an open relay.
      to: receiverEmail,
      replyTo: email,
      // Explicit domain so Nodemailer doesn't fall back to this machine's
      // hostname (e.g. "localhost") when generating the Message-ID header.
      messageId: `<${Date.now()}.${Math.random().toString(36).slice(2)}@${SITE_HOST}>`,
      subject: `New contact request from ${SITE_HOST}`,
      html: `<p>A visitor asked to be contacted at: <strong>${escapeHtml(email)}</strong></p>`,
    });
  } catch (error) {
    console.error("Email send failed", error);
    return NextResponse.json(
      { success: false, message: "Unable to send email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, message: "Thanks — we'll be in touch." });
}
