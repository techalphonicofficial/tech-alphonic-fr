"use client";

import React from "react";
import { Award, CheckCircle2, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "10+",
    label: "Years of Experience",
    icon: Award,
  },
  {
    value: "1.5k",
    label: "Projects Complete",
    icon: CheckCircle2,
  },
  {
    value: "60+",
    label: "Team Members",
    icon: Users,
  },
  {
    value: "100%",
    label: "Satisfied Clients",
    icon: ShieldCheck,
  },
];

export default function TrustedByAndStats() {
  return (
    <section className="my-10 sm:my-12 lg:my-16 w-full border-t border-b border-border bg-[#F7F7F5]/60">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-center gap-4 sm:gap-5"
              >
                {/* Subtle bordered icon box with orange icon accent */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-white text-primary shadow-sm sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>

                {/* Stat Value and Description */}
                <div>
                  <div className="font-sans text-2xl font-extrabold tracking-tight text-dark sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
