export async function DELETE(request: Request) {
  try {
    const backend = process.env.BACKEND_URL || "http://localhost:8088";
    const auth = request.headers.get("authorization") || "";
    const res = await fetch(`${backend}/api/device-tokens/clear`, {
      method: "DELETE",
      headers: {
        ...(auth ? { Authorization: auth } : {}),
      },
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


