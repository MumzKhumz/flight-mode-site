"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        <a href="#pricing" className="hover:underline">Pricing</a>
      </div>

      <a
        href="#pricing"
        className="rounded-full border-2 border-ink bg-ink px-5 py-2 text-sm font-black text-paper hover:bg-clay"
      >
        Get content
      </a>

    </nav>
  </header>

  {/* HERO */}
  <section id="top" className="mx-auto max-w-7xl px-5 py-24 text-center">
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

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="#pricing"
          className="rounded-full border-2 border-ink bg-butter px-6 py-3 font-black"
        >
          View pricing
        </a>
      </div>
    </motion.div>
  </section>

  {/* PRICING */}
  <section id="pricing" className="bg-[#eee7e7] px-5 py-24">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-14 text-center text-5xl font-black">
        Simple plans for content that moves
      </h2>

      <div className="grid gap-7 md:grid-cols-3">

        {/* Starter */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 p-8 text-black shadow-2xl">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-purple-500/30 blur-2xl" />

          <div className="relative z-10">
            <h3 className="text-4xl font-black">R2,500</h3>
            <p className="mt-2 font-bold">1 video / month</p>

            <ul className="mt-6 space-y-2 font-semibold">
              <li>✓ AI-powered production</li>
              <li>✓ Human-edited</li>
              <li>✓ 3–5 day delivery</li>
            </ul>

            <a
              href="#call"
              className="mt-6 inline-block rounded-full bg-black px-6 py-3 font-black text-white"
            >
              Choose Starter
            </a>
          </div>
        </div>

        {/* Growth */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-violet-600 to-lime-300 p-8 text-white shadow-2xl md:-translate-y-6">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime-300/40 blur-2xl" />

          <div className="relative z-10">
            <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold">
              Most popular
            </span>
            <h3 className="text-4xl font-black">R6,000</h3>
            <p className="mt-2 font-bold">3 videos / month</p>

            <ul className="mt-6 space-y-2 font-semibold">
              <li>✓ Priority delivery</li>
              <li>✓ Social-ready edits</li>
              <li>✓ Creative direction</li>
            </ul>

            <a
              href="#call"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-black text-black"
            >
              Choose Growth
            </a>
          </div>
        </div>

        {/* Scale */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-500 via-red-500 to-blue-700 p-8 text-white shadow-2xl">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/40 blur-2xl" />

          <div className="relative z-10">
            <h3 className="text-4xl font-black">R10,000</h3>
            <p className="mt-2 font-bold">6 videos / month</p>

            <ul className="mt-6 space-y-2 font-semibold">
              <li>✓ Fastest delivery</li>
              <li>✓ Campaign-ready</li>
              <li>✓ Monthly planning</li>
            </ul>

            <a
              href="#call"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-black text-black"
            >
              Choose Scale
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="border-t-2 border-ink bg-ink px-5 py-10 text-paper text-center">
    <p className="font-black">Flight Mode Studio © 2026</p>
  </footer>

</main>
);
}

