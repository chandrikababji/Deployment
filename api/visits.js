// Visitor counter for the portfolio (Vercel serverless function).
// GET  /api/visits  -> returns the current count
// POST /api/visits  -> adds one visit and returns the new count
//
// The count is stored in Upstash Redis. Connect it once in Vercel:
// Project > Storage > Upstash (Redis) > Connect. Vercel then adds the
// environment variables for you. This project uses the "PORT_FOLIO" prefix:
// PORT_FOLIO_KV_REST_API_URL and PORT_FOLIO_KV_REST_API_TOKEN.

const KEY = "portfolio:visits";

export default async function handler(req, res) {
  const env = process.env;
  const url = env.PORT_FOLIO_KV_REST_API_URL || env.KV_REST_API_URL || env.UPSTASH_REDIS_REST_URL;
  const token = env.PORT_FOLIO_KV_REST_API_TOKEN || env.KV_REST_API_TOKEN || env.UPSTASH_REDIS_REST_TOKEN;

  res.setHeader("Cache-Control", "no-store");

  if (!url || !token) {
    return res.status(503).json({ error: "Counter storage is not connected" });
  }
  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const command = req.method === "POST" ? `incr/${KEY}` : `get/${KEY}`;

  try {
    const r = await fetch(`${url}/${command}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!r.ok) throw new Error(`Redis responded ${r.status}`);
    const data = await r.json();
    return res.status(200).json({ count: Number(data.result) || 0 });
  } catch (err) {
    return res.status(502).json({ error: "Could not reach counter storage" });
  }
}
