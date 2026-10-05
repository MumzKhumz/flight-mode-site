import { htmlResponse, paymentPage } from "../page-html";

export const dynamic = "force-static";

export function GET() {
  return htmlResponse(
    paymentPage(
      "Payment received",
      "You're <em>cleared for takeoff.</em>",
      "Thanks, your payment went through. Book a quick kickoff call so we can get your first brief going.",
      { href: "https://calendly.com/fms-meet", label: "Book your kickoff call →" },
    ),
  );
}
