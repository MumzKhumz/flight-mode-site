import { readFileSync } from "fs";
import { join } from "path";

// The international page is a standalone HTML page with its own styles, so it is
// served as-is rather than through the app layout.
export const dynamic = "force-static";

const html = readFileSync(join(process.cwd(), "app/global/global.html"), "utf8");

export function GET() {
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
