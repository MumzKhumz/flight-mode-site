import { NextRequest, NextResponse } from "next/server";

// Monthly plan prices in cents (ZAR). Kept on the server so the amount
// can't be changed from the browser.
const PLANS: Record<string, { name: string; amount: number }> = {
  starter: { name: "Starter plan (1 video / month)", amount: 300000 },
  growth: { name: "Growth plan (3 videos / month)", amount: 600000 },
  scale: { name: "Scale plan (6 videos / month)", amount: 1000000 },
};

const CALENDLY = "https://calendly.com/fms-meet";

export const dynamic = "force-dynamic";

// Creates a Yoco checkout for the chosen plan and sends the visitor to
// Yoco's hosted payment page.
export async function GET(req: NextRequest) {
  const plan = PLANS[req.nextUrl.searchParams.get("plan") ?? ""];
  const secretKey = process.env.YOCO_SECRET_KEY;

  // Until Yoco is set up (or for an unknown plan), fall back to booking a call.
  if (!plan || !secretKey) {
    return NextResponse.redirect(CALENDLY, 303);
  }

  const origin = req.nextUrl.origin;
  const failed = NextResponse.redirect(new URL("/payment/failed/", origin), 303);

  let res: Response;
  try {
    res = await fetch("https://payments.yoco.com/api/checkouts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: plan.amount,
        currency: "ZAR",
        successUrl: `${origin}/payment/success/`,
        cancelUrl: `${origin}/#pricing`,
        failureUrl: `${origin}/payment/failed/`,
        metadata: { plan: plan.name },
        lineItems: [
          {
            displayName: plan.name,
            quantity: 1,
            pricingDetails: { price: plan.amount },
          },
        ],
      }),
    });
  } catch (err) {
    console.error("Yoco checkout request failed", err);
    return failed;
  }

  if (!res.ok) {
    console.error("Yoco checkout failed", res.status, await res.text());
    return failed;
  }

  const { redirectUrl } = await res.json();
  return NextResponse.redirect(redirectUrl, 303);
}
