"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
} from "lucide-react";

export default function OurWorkHero({ data }) {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#F8FAFC]">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#53AFBE]/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#FEB449]/10 blur-[130px]" />

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-[720px] max-w-[1500px] items-center px-5 py-24 sm:px-8 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-20">

          {/* LEFT */}

          <div className="max-w-3xl">

            <div className="animate-[fadeInUp_0.7s_ease-out_forwards] opacity-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#53AFBE]/25 bg-white/70 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-[#53AFBE] shadow-sm backdrop-blur-xl sm:text-xs">
                <Sparkles size={13} />
                {data.eyebrow}
              </span>
            </div>

            <h1 className="mt-7 animate-[fadeInUp_0.8s_0.1s_ease-out_forwards] text-5xl font-black leading-[0.98] tracking-[-0.045em] text-[#111827] opacity-0 sm:text-6xl lg:text-7xl xl:text-[82px]">
              {data.title}
            </h1>

            <p className="mt-7 max-w-2xl animate-[fadeInUp_0.8s_0.2s_ease-out_forwards] text-base leading-8 text-[#6B7280] opacity-0 sm:text-lg">
              {data.description}
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-col gap-3 animate-[fadeInUp_0.8s_0.3s_ease-out_forwards] opacity-0 sm:flex-row">

              <Link
                href={data.primaryCta.href}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FE5C36] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FE5C36]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FE5C36]/30"
              >
                {data.primaryCta.label}

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                href={data.secondaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#111827]/10 bg-white/70 px-6 py-3.5 text-sm font-bold text-[#111827] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#53AFBE]/30 hover:text-[#53AFBE]"
              >
                {data.secondaryCta.label}

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

            {/* Scroll */}

            <div className="mt-14 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#9CA3AF] sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#111827]/10 bg-white">
                <ArrowDown size={14} />
              </span>

              Explore our work
            </div>

          </div>

          {/* RIGHT VISUAL */}

          <div className="relative mx-auto w-full max-w-[570px]">

            {/* Main Browser */}

            <div className="relative z-20 rotate-[2deg] overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_35px_100px_rgba(17,24,39,0.16)] transition-transform duration-700 hover:rotate-0">

              {/* Browser Header */}

              <div className="flex h-12 items-center gap-2 border-b border-[#111827]/5 px-5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FE5C36]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEB449]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#53AFBE]" />

                <div className="ml-4 h-6 flex-1 rounded-full bg-[#F8FAFC]" />
              </div>

              {/* Website Preview */}

              <div className="relative aspect-[4/3] overflow-hidden bg-[#111827]">

                <div className="absolute inset-0 bg-gradient-to-br from-[#53AFBE]/60 via-[#111827] to-[#FE5C36]/30" />

                <div className="absolute left-7 top-7 h-4 w-24 rounded-full bg-white/30" />

                <div className="absolute left-7 top-20 max-w-[280px]">
                  <div className="h-7 w-64 rounded-md bg-white/90" />
                  <div className="mt-3 h-7 w-44 rounded-md bg-[#53AFBE]" />

                  <div className="mt-6 h-3 w-52 rounded-full bg-white/20" />
                  <div className="mt-2 h-3 w-40 rounded-full bg-white/15" />

                  <div className="mt-7 h-10 w-32 rounded-full bg-[#FE5C36]" />
                </div>
                {/* Floating UI */}
                <div className="absolute bottom-7 right-7 w-36 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                  <div className="h-2 w-16 rounded-full bg-white/30" />
                  <div className="mt-3 text-2xl font-black text-white">
                    +84%
                  </div>
                  <div className="mt-1 text-[9px] uppercase tracking-wider text-white/50">
                    Growth
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-9 -left-6 z-30 w-48 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-2xl backdrop-blur-2xl sm:-left-10 sm:w-56">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">
                Our approach
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-bold text-[#111827]">
                  Strategy
                </span>

                <span className="text-xs font-bold text-[#53AFBE]">
                  01
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#111827]/5">
                <div className="h-full w-[85%] rounded-full bg-[#53AFBE]" />
              </div>
            </div>

            {/* Glow */}

            <div className="absolute -inset-10 -z-10 rounded-full bg-[#53AFBE]/10 blur-3xl" />

          </div>

        </div>
      </div>
    </section>
  );
}