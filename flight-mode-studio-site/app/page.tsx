"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
Play,
Send,
} from "lucide-react";

export default function Home() {
return ( <main>

```
  {/* HEADER */}
  <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/90 backdrop-blur">
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
            className="rounded-full border-2 border-ink shadow-hard"
          />
        </motion.div>
        <span>Flight Mode Studio</span>
      </a>

      <div className="hidden items-center gap-6 text-sm font-bold md:flex">
        <a href="#work" className="hover:underline">How it works</a>
        <a href="#pricing" className="hover:underline">Pricing</a>
        <a href="#faq" className="hover:underline">FAQ</a>
      </div>

      <a
        href="#pricing"
        className="rounded-full border-2 border-ink bg-ink px-5 py-2 text-sm font-black text-paper hover:bg-clay"
      >
        Get content
      </a>

    </nav>
  </header>

  {/* HERO SECTION */}
  <section id="top" className="mx-auto max-w-7xl px-5 py-24">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-black">
        Big brand content, small business pricing.
      </h1>
      <p className="mt-4 text-lg font-semibold">
        High-quality short-form videos delivered monthly.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="#pricing"
          className="rounded-full border-2 border-ink bg-butter px-6 py-3 font-black"
        >
          View pricing
        </a>
        <a
          href="#call"
          className="rounded-full border-2 border-ink px-6 py-3 font-black"
        >
          Book a call
        </a>
      </div>
    </motion.div>
  </section>

  {/* FOOTER */}
  <footer className="border-t-2 border-ink bg-ink px-5 py-10 text-paper">
    <div className="mx-auto max-w-7xl">
      <p className="font-black">Flight Mode Studio © 2026</p>
    </div>
  </footer>

</main>

);
}
