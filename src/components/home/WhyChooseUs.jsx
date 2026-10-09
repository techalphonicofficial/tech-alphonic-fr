"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Target,
  LineChart,
  Zap,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Creative That Delivers",
    description:
      "We blend stunning aesthetics with data-driven design to create digital experiences that truly convert.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Client-First Approach",
    description:
      "Your goals are our priority. We maintain transparent communication and collaborate closely at every step.",
    icon: Users,
  },
  {
    id: 3,
    title: "Proven Track Record",
    description:
      "We have consistently delivered award-winning solutions for startups and enterprises alike.",
    icon: Target,
  },
  {
    id: 4,
    title: "Strategic & Results-Driven",
    description:
      "Every decision we make is backed by analytics and strategic planning to maximize your ROI.",
    icon: LineChart,
  },
  {
    id: 5,
    title: "Fast & Reliable",
    description:
      "We use cutting-edge frameworks to ensure lightning-fast load times and bulletproof reliability.",
    icon: Zap,
  },
  {
    id: 6,
    title: "Trusted by 100+ Brands",
    description:
      "Join the growing list of industry leaders who trust us to elevate their digital presence.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-12 xl:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        {/* Header Section */}
        <div className="relative mb-12 text-center xl:mb-16">
          {/* Faded Background Text */}
          <h1 className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[4rem] font-black uppercase tracking-widest text-slate-100 sm:text-[5rem] lg:text-[7rem] xl:text-[8rem]">
            Why Choose Us
          </h1>
          {/* Foreground Title */}
          <h2 className="relative z-10 text-3xl font-extrabold uppercase tracking-tight text-text sm:text-4xl lg:text-5xl">
            Why Choose Us
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-stretch lg:gap-6 xl:gap-8">

          {/* LEFT COLUMN (Features 1-3) */}
          <div className="flex w-full flex-col gap-8 sm:gap-10 lg:w-[30%] lg:justify-between lg:py-4">
            {features.slice(0, 3).map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md sm:mb-4 sm:h-14 sm:w-14">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                </div>
                {/* Text */}
                <h3 className="mb-2 text-lg font-bold text-text sm:text-xl">
                  {feature.id}. {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CENTER COLUMN (Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex w-full items-center justify-center lg:w-[35%]"
          >
            <div className="relative h-[400px] w-full max-w-[450px] overflow-hidden rounded-[2rem] shadow-xl xl:h-[480px]">
              <img
                src="https://picsum.photos/seed/agency/800/1200"
                alt="Our Workspace"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN (Features 4-6) */}
          <div className="flex w-full flex-col gap-8 sm:gap-10 lg:w-[30%] lg:justify-between lg:py-4">
            {features.slice(3, 6).map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md sm:mb-4 sm:h-14 sm:w-14">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                </div>
                {/* Text */}
                <h3 className="mb-2 text-lg font-bold text-text sm:text-xl">
                  {feature.id}. {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
