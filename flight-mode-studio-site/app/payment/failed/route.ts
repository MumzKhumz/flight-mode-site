import { htmlResponse, paymentPage } from "../page-html";

export const dynamic = "force-static";

export function GET() {
  return htmlResponse(
    paymentPage(
      "Payment didn't go through",
      "That payment <em>didn't go through.</em>",
      "Nothing was charged. You can try again, or email hello@flightmodestudio.co.za and we'll sort it out.",
      { href: "/#pricing", label: "Back to plans" },
    ),
  );
}
