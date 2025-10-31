export async function POST(request: Request) {
  try {
    const backend = process.env.BACKEND_URL || "http://localhost:8080";
    const body = await request.json();
    const res = await fetch(`${backend}/otp/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    return new Response(text, {
      status: res.status,
      headers: { "Content-Type": res.headers.get("content-type") || "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || "proxy error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


