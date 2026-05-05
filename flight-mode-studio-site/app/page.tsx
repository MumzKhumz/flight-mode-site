"use client";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clapperboard,
  Clock3,
  Sparkles,
  Zap,
  BadgeCheck,
  Repeat,
  Megaphone,
  MessageSquareText,
  Play,
  Send,
} from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "R2,500",
    note: "Best for getting consistent",
    videos: "1 video / month",
    features: ["AI-powered production", "Human-edited final cut", "3–5 day delivery", "Basic revisions"],
  },
  {
    name: "Growth",
    price: "R6,000",
    note: "Most popular for growing brands",
    videos: "3 videos / month",
    popular: true,
    features: ["Social + ad-ready videos", "Priority turnaround", "Performance-focused edits", "Creative direction included"],
  },
  {
    name: "Scale",
    price: "R10,000",
    note: "For brands ready to push volume",
    videos: "6 videos / month",
    features: ["Advanced edits + variations", "Fastest turnaround", "Campaign-ready creatives", "Monthly creative planning"],
  },
];

const benefits = [
  ["Affordable", "No massive shoot days or R20k+ production bills.", Sparkles],
  ["Fast turnaround", "Get ready-to-post content in 3–5 days, not weeks.", Clock3],
  ["Always-on output", "Stay visible every month with consistent videos.", Repeat],
  ["Built for social", "Made for Instagram, TikTok, Facebook, and ads.", Megaphone],
  ["AI-powered speed", "More content, faster production, lower cost.", Zap],
  ["Human polish", "AI-assisted, edited and quality-checked by humans.", BadgeCheck],
];

const faqs = [
  ["Who is this for?", "Small businesses, e-commerce brands, creators, coaches, and growing companies that need consistent content without hiring a full team."],
  ["How fast do I get my videos?", "Most videos are delivered in 3–5 working days once your brief is approved."],
  ["Is everything AI-generated?", "No. We use AI to speed up scripting, visuals, ideation, and production, then refine the final piece with human editing."],
  ["Can I use the videos for ads?", "Yes. Growth and Scale are especially built for brands that want social content and paid ad creatives."],
  ["Can I request a bigger campaign?", "Yes. Campaign bursts are available for launches, paid ads, product drops, and seasonal pushes."],
  ["Can I cancel or pause?", "Yes. The model is flexible, but we recommend staying consistent for at least three months to see stronger results."],
];

function Button({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "secondary" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-black transition hover:-translate-y-1 hover:shadow-hard ${
        variant === "primary" ? "bg-butter text-ink" : "bg-paper text-ink"
      }`}
    >
      {children} <ArrowRight size={16} />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex rounded-full border-2 border-ink bg-paper px-4 py-2 text-xs font-black uppercase tracking-[0.22em] shadow-hard">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="texture min-h-screen overflow-hidden bg-cream text-ink">
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3 font-black">
  <Image
    src="/logo.png"
    alt="Flight Mode Studio"
    width={50}
    height={50}
    className="rounded-full border-2 border-ink shadow-hard"
  />
  <span>Flight Mode Studio</span>
</a>
            <span>Flight Mode Studio</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold md:flex">
            <a href="#work" className="hover:underline">How it works</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
          <a href="#pricing" className="rounded-full border-2 border-ink bg-ink px-5 py-2 text-sm font-black text-paper hover:bg-clay">Get content</a>
        </nav>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pt-24">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-2 font-black shadow-hard">
            <Sparkles size={17} /> AI Content Studio for small businesses
          </div>
          <h1 className="font-serif text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
            Big brand content, small business pricing.
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-semibold leading-relaxed md:text-2xl">
            High-quality short-form videos for small businesses and growing brands — delivered every month using AI-powered production and human creative polish.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#pricing">View pricing</Button>
            <Button href="#call" variant="secondary">Book a call</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black">
            {["No big shoots", "3–5 day delivery", "Social + ads ready", "Cancel or pause"].map((item) => (
              <span key={item} className="rounded-full border-2 border-ink bg-paper px-4 py-2">✓ {item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, rotate: 3, scale: 0.96 }} animate={{ opacity: 1, rotate: -2, scale: 1 }} transition={{ duration: 0.75, delay: 0.1 }} className="relative">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-blob border-2 border-ink bg-butter" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full border-2 border-ink bg-mint" />
          <div className="relative rounded-[2.2rem] border-4 border-ink bg-paper p-5 shadow-hard">
            <div className="rounded-[1.6rem] border-2 border-ink bg-ink p-4 text-paper">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-clay px-3 py-1 text-xs font-black">NOW EDITING</span>
                <Clapperboard />
              </div>
              <div className="grid gap-3">
                {[
                  ["TikTok product teaser", "Ready in 2 days"],
                  ["Instagram reel ad", "Script approved"],
                  ["Founder story video", "In polish"],
                ].map(([title, status]) => (
                  <div key={title} className="rounded-2xl border-2 border-paper/50 bg-paper p-4 text-ink">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-butter"><Play size={18} fill="currentColor" /></div>
                      <div>
                        <p className="font-black">{title}</p>
                        <p className="text-sm font-bold opacity-70">{status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-y-2 border-ink bg-ink py-4 text-paper">
        <div className="flex whitespace-nowrap marquee-track gap-10 text-lg font-black uppercase tracking-widest">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-10">
              <span>AI-powered</span><span>•</span><span>Short-form video</span><span>•</span><span>3–5 day delivery</span><span>•</span><span>Small business friendly</span><span>•</span><span>Social + ads ready</span><span>•</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <SectionLabel>Why it exists</SectionLabel>
            <h2 className="font-serif text-5xl font-black leading-tight md:text-7xl">Content should not feel like a full production.</h2>
          </div>
          <div className="grid gap-4 text-xl font-bold leading-relaxed">
            <p className="rounded-3xl border-2 border-ink bg-paper p-6 shadow-hard">Traditional shoots are expensive, slow, and hard to repeat every month.</p>
            <p className="rounded-3xl border-2 border-ink bg-peach p-6 shadow-hard">Flight Mode Studio gives your brand a simple monthly content engine: brief it, we create it, you post it.</p>
          </div>
        </div>
      </section>

      <section id="work" className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="max-w-4xl font-serif text-5xl font-black md:text-7xl">A ridiculously simple way to get content every month.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Subscribe", "Choose the monthly plan that fits your business."],
              ["02", "Send your brief", "Share your idea, product, promo, or campaign angle."],
              ["03", "We create", "AI-assisted production, editing, optimisation, and polish."],
              ["04", "Post & grow", "Receive ready-to-use videos for socials and ads."],
            ].map(([num, title, copy]) => (
              <div key={num} className="card-tilt rounded-[2rem] border-2 border-ink bg-cream p-6 shadow-hard">
                <div className="mb-8 text-5xl font-black text-clay">{num}</div>
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-3 font-semibold leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionLabel>Why small businesses love us</SectionLabel>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-4xl font-serif text-5xl font-black md:text-7xl">Made for brands that need speed, volume, and results.</h2>
          <p className="max-w-sm text-lg font-bold">Stop waiting weeks for content. Start building a repeatable content rhythm your audience can actually see.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map(([title, copy, Icon]) => (
            <div key={title as string} className="rounded-[2rem] border-2 border-ink bg-paper p-6 shadow-hard transition hover:-translate-y-1">
              <Icon className="mb-6" size={34} />
              <h3 className="text-2xl font-black">{title as string}</h3>
              <p className="mt-3 font-semibold leading-relaxed">{copy as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="border-y-2 border-ink bg-ink py-24 text-paper">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <div className="mb-4 inline-flex rounded-full border-2 border-paper bg-clay px-4 py-2 text-xs font-black uppercase tracking-[0.22em] shadow-hard">Pricing</div>
            <h2 className="font-serif text-5xl font-black md:text-7xl">Simple monthly plans.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-xl font-semibold opacity-90">Start small, stay consistent, scale when you are ready.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.map((plan) => (
              <div key={plan.name} className={`relative rounded-[2rem] border-2 p-7 shadow-hard ${plan.popular ? "border-butter bg-butter text-ink md:-translate-y-5" : "border-paper bg-paper text-ink"}`}>
                {plan.popular && <span className="absolute -top-4 left-7 rounded-full border-2 border-ink bg-clay px-4 py-1 text-xs font-black text-paper">MOST POPULAR</span>}
                <h3 className="text-3xl font-black">{plan.name}</h3>
                <p className="mt-2 font-bold opacity-75">{plan.note}</p>
                <div className="mt-8 flex items-end gap-1">
                  <span className="font-serif text-6xl font-black">{plan.price}</span>
                  <span className="pb-2 font-black">/mo</span>
                </div>
                <p className="mt-4 rounded-2xl border-2 border-ink bg-cream px-4 py-3 font-black">{plan.videos}</p>
                <ul className="mt-7 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 font-bold"><Check className="shrink-0" /> {feature}</li>
                  ))}
                </ul>
                <a href="#call" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink px-5 py-3 font-black text-paper transition hover:-translate-y-1 hover:bg-clay">Choose {plan.name}</a>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border-2 border-paper bg-clay p-7 shadow-hard md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-3xl font-black">Need a launch push?</h3>
              <p className="mt-2 text-lg font-semibold">Campaign bursts available for product drops, paid ads, launches, and seasonal content.</p>
            </div>
            <p className="mt-6 rounded-full border-2 border-paper bg-ink px-6 py-3 text-xl font-black md:mt-0">R30k – R60k</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="rounded-[2.5rem] border-4 border-ink bg-paper p-8 shadow-hard md:p-12">
          <SectionLabel>Who it is for</SectionLabel>
          <h2 className="max-w-4xl font-serif text-5xl font-black md:text-7xl">For brands that need to show up more often.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {["Small businesses", "E-commerce", "Coaches", "Creators", "Growing brands"].map((item) => (
              <div key={item} className="rounded-3xl border-2 border-ink bg-cream p-5 text-center text-xl font-black">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-paper py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-serif text-5xl font-black md:text-7xl">Questions before takeoff?</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-3xl border-2 border-ink bg-cream p-6 shadow-hard">
                <summary className="cursor-pointer list-none text-xl font-black">{q}</summary>
                <p className="mt-4 font-semibold leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="call" className="mx-auto max-w-7xl px-5 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-ink bg-butter p-8 shadow-hard md:p-14">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-2 border-ink bg-peach" />
          <div className="relative max-w-3xl">
            <SectionLabel>Ready?</SectionLabel>
            <h2 className="font-serif text-5xl font-black md:text-7xl">Let’s turn your business into a content machine.</h2>
            <p className="mt-5 text-xl font-bold leading-relaxed">Get consistent, high-quality videos without expensive shoots, long delays, or content panic.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:hello@flightmodestudio.co?subject=I%20want%20monthly%20content" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-3 font-black text-paper transition hover:-translate-y-1 hover:bg-clay"><Send size={17} /> Email us</a>
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-paper px-6 py-3 font-black transition hover:-translate-y-1 hover:shadow-hard">See plans</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-ink bg-ink px-5 py-10 text-paper">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <p className="font-black">Flight Mode Studio © 2026</p>
          <p className="font-semibold opacity-80">Affordable, high-quality content for small businesses and growing brands.</p>
        </div>
      </footer>
    </main>
  );
}
