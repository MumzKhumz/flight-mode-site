// Small standalone page in the homepage's style, used after a Yoco payment.
export function paymentPage(title: string, heading: string, body: string, cta: { href: string; label: string }) {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — Flight Mode Studio</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&family=DM+Sans:opsz,wght@9..40,300..700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: #1a4a3a; color: #fff; min-height: 100vh; display: flex; flex-direction: column; -webkit-font-smoothing: antialiased; }
  nav { padding: 0 40px; height: 64px; display: flex; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 18px; color: #fff; text-decoration: none; letter-spacing: -0.5px; }
  .logo span, h1 em { color: #c84b1a; }
  main { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 80px 40px; max-width: 760px; }
  h1 { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(36px, 5vw, 60px); line-height: 1.05; letter-spacing: -1.5px; margin-bottom: 20px; }
  h1 em { font-style: italic; }
  p { font-size: 17px; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 36px; max-width: 520px; }
  a.btn { display: inline-flex; align-self: flex-start; background: #c84b1a; color: #fff; font-weight: 600; font-size: 15px; padding: 16px 32px; border-radius: 100px; text-decoration: none; }
  a.btn:hover { background: #a83a10; }
  @media (max-width: 768px) { nav, main { padding-left: 20px; padding-right: 20px; } }
</style></head>
<body>
<nav><a href="/" class="logo">FMS<span>.</span></a></nav>
<main>
  <h1>${heading}</h1>
  <p>${body}</p>
  <a href="${cta.href}" class="btn">${cta.label}</a>
</main>
</body></html>`;
}

export function htmlResponse(html: string) {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
