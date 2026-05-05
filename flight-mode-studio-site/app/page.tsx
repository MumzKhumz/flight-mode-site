"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  name: string;
  price: string;
  videos: string;
  features: string[];
  button: string;
  variant: "yellow" | "blue" | "orange";
  label?: string;
  highlight?: boolean;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff7e8] text-black">
      <Header />
      <HeroSection />
      <PricingSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-[#fff7e8]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3 font-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/logo.png"
              alt="Flight Mode Studio"
              width={50}
              height={50}
              className="rounded-full border-2 border-black"
            />
          </motion.div>
          <span>Flight Mode Studio</span>
        </a>

        <a
          href="#pricing"
          className="rounded-full border-2 border-black bg-black px-5 py-2 text-sm font-black text-white transition hover:-translate-y-1"
        >
          Get content
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-5 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Big brand content, small business pricing.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-xl font-semibold">
          High-quality short-form videos delivered monthly.
        </p>

        <a
          href="#pricing"
          className="mt-8 inline-block rounded-full border-2 border-black bg-yellow-300 px-6 py-3 font-black transition hover:-translate-y-1"
        >
          View pricing
        </a>
      </motion.div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-[#efe8ea] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Simple plans for content that moves
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl font-semibold text-black/60">
            Choose your monthly content engine and scale when you’re ready.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          <PricingCard
            name="Starter"
            price="R2,500"
            videos="1 video / month"
            features={[
              "AI-powered production",
              "Human-edited final cut",
              "3–5 day delivery",
            ]}
            button="Choose Starter"
            variant="yellow"
          />

          <PricingCard
            label="Most popular"
            name="Growth"
            price="R6,000"
            videos="3 videos / month"
            features={[
              "Priority delivery",
              "Social-ready edits",
              "Creative direction",
            ]}
            button="Choose Growth"
            variant="blue"
            highlight
          />

          <PricingCard
            name="Scale"
            price="R10,000"
            videos="6 videos / month"
            features={[
              "Fastest delivery",
              "Campaign-ready",
              "Monthly planning",
            ]}
            button="Choose Scale"
            variant="orange"
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  label,
  price,
  videos,
  features,
  button,
  variant,
  highlight,
}: CardProps) {
  const variantClass = {
    yellow: "pricing-card card--yellow text-black",
    blue: "pricing-card card--blue text-white",
    orange: "pricing-card card--orange text-white",
  }[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`${variantClass} ${highlight ? "md:-translate-y-6" : ""}`}
    >
      <div>
        {label && (
          <span className="mb-4 inline-block rounded-full bg-white/25 px-4 py-1 text-xs font-black uppercase tracking-widest backdrop-blur">
            {label}
          </span>
        )}

        <h3>{name}</h3>
        <div className="price">{price}</div>
        <p className={variant === "yellow" ? "text-black/70" : "text-white/90"}>
          {videos}
        </p>

        <div className="panel">
          <ul className="space-y-3 font-semibold">
            {features.map((feature) => (
              <li key={feature}>✓ {feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <a href="#call" className="btn mt-8">
        {button}
      </a>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="bg-black px-5 py-10 text-center text-white">
      <p className="font-black">Flight Mode Studio © 2026</p>
    </footer>
  );
}



