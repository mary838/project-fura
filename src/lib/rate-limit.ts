/**
 * In-memory sliding-window rate limiter, keyed by client IP.
 *
 * This is a single-process Map, not a shared store. It resets on server
 * restart and does not coordinate across multiple server instances — fine
 * for this low-traffic marketing site, but if this ever runs on more than
 * one Next.js instance behind a load balancer, replace it with a shared
 * store (e.g. Upstash Redis + @upstash/ratelimit) so limits apply globally
 * instead of per-instance.
 */

type Window = { count: number; resetAt: number };

const buckets = new Map<string, Window>();

function hit(key: string, limit: number, windowMs: number, now: number): boolean {
  const bucket = buckets.get(key);
  if (!bucket || now >= bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;

/**
 * Enforces 5 requests/minute and 20 requests/hour per IP.
 * Returns `true` if the request is allowed, `false` if it should be rejected
 * with HTTP 429.
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const withinMinute = hit(`${ip}:m`, 5, MINUTE, now);
  const withinHour = hit(`${ip}:h`, 20, HOUR, now);
  return withinMinute && withinHour;
}

/** Periodically drop expired buckets so the Map doesn't grow unbounded. */
setInterval(
  () => {
    const now = Date.now();
    for (const [key, bucket] of buckets) {
      if (now >= bucket.resetAt) buckets.delete(key);
    }
  },
  10 * MINUTE,
).unref?.();
