"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Their creativity, technical expertise and dedication made a huge difference to our business.",
    author: "Rakesh Sharma",
    role: "Founder, TravelVista",
  },
  {
    id: 2,
    quote:
      "Tech Alphonic transformed our digital infrastructure and increased our online conversion rate by over 140% in just four months.",
    author: "Priya Nair",
    role: "VP of Marketing, NexaCorp",
  },
  {
    id: 3,
    quote:
      "Outstanding execution from strategy to launch. The team delivers enterprise-grade software on schedule with zero compromises on UX.",
    author: "Amitabh Sen",
    role: "Chief Technology Officer, FinEdge Solutions",
  },
  {
    id: 4,
    quote:
      "Their strategic branding and web engineering gave our product the exact premium market position we needed to secure Series A funding.",
    author: "Sneha Kapoor",
    role: "Co-Founder & COO, OmniScale",
  },
];

export default function TestimonialsNewsletter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play carousel every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 4000);
  };

  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 30 : -30,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -30 : 30,
    }),
  };

  return (
    <section className="border-t border-border bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          
          {/* =========================================================
              LEFT COLUMN: Testimonials Carousel
          ========================================================== */}
          <div
            className="relative flex flex-col justify-between"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Quote Icon */}
              <div className="shrink-0 text-dark">
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 fill-current" />
              </div>

              {/* Review Content Carousel */}
              <div className="min-h-[140px] sm:min-h-[160px] flex-1">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Review Quote */}
                    <p className="text-lg font-medium leading-relaxed text-dark sm:text-xl lg:text-2xl">
                      {current.quote}
                    </p>

                    {/* Author & Role */}
                    <div className="mt-6">
                      <p className="text-sm font-bold text-dark sm:text-base">
                        &ndash; {current.author}
                      </p>
                      <p className="mt-0.5 text-xs font-medium text-muted sm:text-sm">
                        {current.role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Carousel Navigation Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-5 sm:ml-14 sm:mt-6">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? "w-7 bg-primary"
                        : "w-2 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-dark transition-colors duration-200 hover:border-dark hover:bg-neutral-50 active:scale-95"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next review"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-dark transition-colors duration-200 hover:border-dark hover:bg-neutral-50 active:scale-95"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Newsletter Subscription
          ========================================================== */}
          <div className="lg:border-l lg:border-border lg:pl-12 xl:pl-16">
            <h3 className="font-sans text-xl font-bold tracking-tight text-dark sm:text-2xl lg:text-[1.65rem]">
              Stay updated with insights <br className="hidden sm:inline" />
              and growth tips.
            </h3>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center gap-2.5 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <span>Thank you for subscribing! We&apos;ll keep you updated.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
                  {/* Email Input */}
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-border bg-white px-4 py-3.5 text-sm text-dark placeholder-neutral-400 outline-none transition-all duration-200 focus:border-dark focus:ring-1 focus:ring-dark sm:rounded-r-none"
                    />
                  </div>

                  {/* Subscribe Button */}
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#e65c00] active:scale-[0.99] sm:rounded-l-none sm:border-l-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
