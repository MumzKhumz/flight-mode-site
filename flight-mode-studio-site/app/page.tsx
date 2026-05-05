"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
return ( <main className="min-h-screen bg-[#fff7e8] text-black">

```
  {/* HEADER */}
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
        className="rounded-full border-2 border-black bg-black px-5 py-2 text-sm font-black text-white"
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
      <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-7xl">
        Big brand content, small business pricing.
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-xl font-semibold">
        High-quality short-form videos delivered monthly.
      </p>

      <a
        href="#pricing"
        className="mt-8 inline-block rounded-full border-2 border-black bg-yellow-300 px-6 py-3 font-black"
      >
        View pricing
      </a>
    </motion.div>
  </section>

  {/* PRICING */}
  <section id="pricing" className="bg-[#eee7e7] px-5 py-24">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-14 text-center text-5xl font-black md:text-7xl">
        Simple plans for content that moves
      </h2>

      <div className="grid gap-7 md:grid-cols-3">

        <Card
          price="R2,500"
          videos="1 video / month"
          features={["AI-powered production", "Human-edited", "3–5 day delivery"]}
          button="Choose Starter"
          gradient="from-yellow-300 via-orange-400 to-pink-500"
          text="text-black"
          buttonStyle="bg-black text-white"
        />

        <Card
          label="Most popular"
          price="R6,000"
          videos="3 videos / month"
          features={["Priority delivery", "Social-ready edits", "Creative direction"]}
          button="Choose Growth"
          gradient="from-blue-700 via-violet-600 to-lime-300"
          text="text-white"
          buttonStyle="bg-white text-black"
          highlight
        />

        <Card
          price="R10,000"
          videos="6 videos / month"
          features={["Fastest delivery", "Campaign-ready", "Monthly planning"]}
          button="Choose Scale"
          gradient="from-orange-500 via-red-500 to-blue-700"
          text="text-white"
          buttonStyle="bg-white text-black"
        />

      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="bg-black px-5 py-10 text-center text-white">
    <p className="font-black">Flight Mode Studio © 2026</p>
  </footer>

</main>
```

);
}

function Card({
label,
price,
videos,
features,
button,
gradient,
text,
buttonStyle,
highlight,
}: any) {
return (
<div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 shadow-2xl ${gradient} ${text} ${highlight ? "md:-translate-y-6" : ""}`}>

```
  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/25 blur-2xl" />
  <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-purple-500/25 blur-2xl" />

  <div className="relative z-10">
    {label && (
      <span className="mb-4 inline-block rounded-full bg-white/25 px-4 py-1 text-xs font-black">
        {label}
      </span>
    )}

    <h3 className="text-5xl font-black">{price}</h3>
    <p className="mt-2 font-bold">{videos}</p>

    <ul className="mt-7 space-y-3 font-semibold">
      {features.map((f: string) => (
        <li key={f}>✓ {f}</li>
      ))}
    </ul>

    <a
      href="#call"
      className={`mt-8 inline-block rounded-full px-6 py-3 font-black ${buttonStyle}`}
    >
      {button}
    </a>
  </div>
</div>
```

);
}


