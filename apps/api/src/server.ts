const port = Number(process.env.PORT || 8787);
const startedAt = new Date().toISOString();

Bun.serve({
  port,
  hostname: "0.0.0.0",
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/api/health" || url.pathname === "/health") {
      return Response.json({
        ok: true,
        service: "Bun Full-stack Monorepo",
        author: "Urmate",
        theme: "Citrus Console",
        startedAt,
      });
    }

    return Response.json({ ok: false, error: "Route not found", path: url.pathname }, { status: 404 });
  },
});

console.log("Bun Full-stack Monorepo API listening on http://0.0.0.0:" + port);
