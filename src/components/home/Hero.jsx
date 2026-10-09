"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const headingLines = [
  { text: "Ideas that", isOrange: false, isItalic: false },
  { text: "build brands.", isOrange: true, isItalic: true },
  { text: "Strategies that", isOrange: false, isItalic: false },
  { text: "drive growth.", isOrange: false, isItalic: false },
];

function HeadingLine({ line, index, scrollProgress, shouldReduceMotion }) {
  // Staggered scroll sink thresholds matching Minimal Goods:
  // Line 0 sinks first, followed cleanly by Line 1, Line 2, and Line 3
  const startY = index * 0.09;
  const endY = startY + 0.25;

  // Pure vertical movement through the overflow-hidden mask (no opacity fade, crisp typography)
  const y = useTransform(
    scrollProgress,
    [startY, endY],
    ["0%", "108%"]
  );

  return (
    <span className="block overflow-hidden pr-2 -mr-2">
      {/* Scroll layer: sinks down into the mask when scrolling down, glides up when returning */}
      <motion.span
        className="block will-change-transform"
        style={shouldReduceMotion ? {} : { y }}
      >
        {/* Entrance layer: masked upward reveal sequence on page load */}
        <motion.span
          className={`block will-change-transform ${
            line.isOrange ? "text-primary" : ""
          } ${line.isItalic ? "italic" : ""}`}
          initial={shouldReduceMotion ? { y: "0%" } : { y: "108%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.85,
            delay: shouldReduceMotion ? 0 : 0.12 + index * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {line.text}
        </motion.span>
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Responsive, silky spring with ultra-low mass for direct 1-to-1 scroll scrub like Minimal Goods
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 32,
    mass: 0.12,
    restDelta: 0.0005,
  });

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-10 pb-0 sm:px-8 sm:pt-14 sm:pb-0 lg:px-12 lg:pt-16 lg:pb-0 xl:pt-20 xl:pb-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">

          {/* =========================================================
              LEFT COLUMN: Editorial Typography & CTAs
          ========================================================== */}
          <div className="flex flex-col justify-center">
            {/* Small Orange Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-[13px]"
            >
              Digital Marketing &amp; Web Development Agency
            </motion.p>

            {/* Main Editorial Heading with Scroll & Entrance Reveal */}
            <h1 className="mt-5 font-serif text-[2.75rem] font-bold leading-[1.08] tracking-[-0.02em] text-dark sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.75rem]">
              <span className="sr-only">
                Ideas that build brands. Strategies that drive growth.
              </span>
              <span aria-hidden="true" className="block">
                {headingLines.map((line, index) => (
                  <HeadingLine
                    key={line.text}
                    line={line}
                    index={index}
                    scrollProgress={smoothProgress}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                ))}
              </span>
            </h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.68,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8"
            >
              We combine creativity, technology and data to deliver marketing
              and websites that perform, engage and convert.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4 lg:mt-10"
            >
              {/* Primary Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e65c00] hover:shadow-lg hover:shadow-primary/30 sm:text-base"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary Button */}
              <Link
                href="/our-work"
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-dark bg-white px-7 py-3.5 text-sm font-bold text-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F7F7F5] sm:text-base"
              >
                <span>Explore Our Work</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Large Architectural Corporate Photography
          ========================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            {/* Clean rectangular container with subtle corner radius */}
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[1/1] max-h-[580px] lg:max-h-[640px] w-full overflow-hidden rounded-xl border border-border bg-[#F7F7F5] shadow-2xl shadow-black/5">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85"
                alt="Modern corporate architecture representing innovation and structure"
                className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
              />

              {/* Very subtle editorial gradient overlay for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
            </div>

            {/* Subtle Circular Editorial Stamp / Badge */}
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 z-10 hidden sm:flex h-28 w-28 lg:h-32 lg:w-32 items-center justify-center rounded-full border border-border/80 bg-white/95 p-2 shadow-lg backdrop-blur-md"
            >
              <svg
                className="h-full w-full animate-[spin_24s_linear_infinite]"
                viewBox="0 0 100 100"
              >
                <path
                  id="heroCirclePath"
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  fill="none"
                />
                <text className="text-[9px] font-bold uppercase tracking-[0.24em] fill-dark">
                  <textPath href="#heroCirclePath" startOffset="0%">
                    • DESIGN THAT MATTERS • WEBSITES THAT GROW
                  </textPath>
                </text>
              </svg>
              {/* Subtle orange accent center dot */}
              <div className="absolute h-2.5 w-2.5 rounded-full bg-primary" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}