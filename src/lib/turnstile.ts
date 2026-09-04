/**
 * Server-side verification of a Cloudflare Turnstile token. Must be called
 * from the server only — a client-side "verified" flag can never be trusted.
 */
export async function verifyTurnstileToken(
  token: string,
  remoteIp: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return false;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: token,
          remoteip: remoteIp,
        }),
      },
    );
    const data: { success?: boolean } = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification request failed", error);
    return false;
  }
}
