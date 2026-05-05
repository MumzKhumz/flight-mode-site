"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  label?: string;
  price: string;
  videos: string;
  features: string[];
  button: string;
  gradient: string;
  text: string;
  buttonStyle: string;
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
          className="rounded-full border-2 border-black bg-black px-5 py-2 text-sm font-black text-white transition-colors hover:bg-gray-800"
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
        {/* Hero content */}
      </motion.div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 text-center">
      {/* Pricing content */}
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Footer content */}
    </footer>
  );
}




