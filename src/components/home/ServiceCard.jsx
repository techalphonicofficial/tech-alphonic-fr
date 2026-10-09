import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

function ServiceCard({ service, index }) {
  const isImageFirst = index % 2 === 1;

  return (
    <div className="group relative mx-auto w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_24px_60px_-25px_rgba(17,24,39,0.22)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_30px_75px_-25px_rgba(17,24,39,0.28)]">

      {/* =========================================================
          TOP-LEFT BUSINESS CARD ACCENT
      ========================================================= */}

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-36 w-36 sm:h-44 sm:w-44">

        {/* Light teal base */}
        <div
          className="absolute inset-0 bg-[#26a4a4]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />

        {/* Yellow + Coral accent */}
        <div
          className="absolute -left-3 -top-3 h-32 w-32 sm:h-40 sm:w-40"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
            background:
              "linear-gradient(135deg, #FEB449 0%, #FE5C36 100%)",
          }}
        />

        {/* White cut */}
        <div
          className="absolute -left-5 -top-5 h-32 w-32 rounded-br-[4rem] bg-white sm:h-40 sm:w-40"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />

        {/* Final light teal diagonal */}
        <div
          className="absolute left-0 top-0 h-24 w-24 bg-[#26a4a4] transition-transform duration-700 group-hover:scale-110 sm:h-28 sm:w-28"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />
      </div>

      {/* =========================================================
          TOP-RIGHT PAPER FOLD
      ========================================================= */}

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-24 w-28 opacity-60">

        <div
          className="absolute right-0 top-0 h-full w-full bg-slate-100"
          style={{
            clipPath: "polygon(35% 0, 100% 0, 100% 100%)",
          }}
        />

        <div
          className="absolute right-3 top-0 h-20 w-16 bg-slate-200/70"
          style={{
            clipPath: "polygon(45% 0, 100% 0, 100% 70%)",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className={`relative grid min-h-[480px] sm:grid-cols-2 ${isImageFirst ? "sm:[&>*:first-child]:order-2" : ""
          }`}
      >

        {/* =======================================================
            TEXT SIDE
        ======================================================= */}

        <div className="relative flex flex-col justify-between overflow-hidden p-8 pt-20 sm:p-10 sm:pt-20 lg:p-12 lg:pt-24">

          {/* Background number */}
          <div className="pointer-events-none absolute -bottom-10 -right-3 select-none text-[9rem] font-black leading-none tracking-tighter text-[#111827]/[0.035] transition-transform duration-700 group-hover:scale-105">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Bottom decorative geometry */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-40 opacity-40">

            <div
              className="absolute inset-0 bg-slate-100"
              style={{
                clipPath: "polygon(0 100%, 0 45%, 65% 100%)",
              }}
            />

            <div
              className="absolute bottom-0 left-0 h-20 w-28 bg-[#26a4a4]/20"
              style={{
                clipPath: "polygon(0 100%, 0 55%, 55% 100%)",
              }}
            />
          </div>

          <div className="relative z-10">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#53AFBE]/20 bg-[#53AFBE]/[0.06] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#53AFBE]">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#53AFBE] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#53AFBE]" />
              </span>

              {service.badge}
            </div>

            {/* Heading */}
            <h3 className="mt-6 max-w-xl text-3xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-[2.6rem]">
              {service.title}
            </h3>

            {/* Accent line */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#FE5C36]" />
              <span className="h-1 w-5 rounded-full bg-[#FEB449]" />
            </div>

            {/* Description */}
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#6B7280]">
              {service.description}
            </p>

            {/* Feature */}
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#6B7280]">

              <Sparkles className="h-4 w-4 text-[#26a4a4]" />

              <span>
                Premium solutions tailored for your business
              </span>

            </div>
          </div>

          {/* =====================================================
              CTA
          ===================================================== */}

          <div className="relative z-10 mt-8">

            <button className="group/btn inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:gap-4 hover:bg-[#53AFBE] hover:shadow-xl hover:shadow-[#53AFBE]/20">

              <span>
                Explore service
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/btn:bg-white/20">

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />

              </span>

            </button>
          </div>

        </div>

        {/* =======================================================
            IMAGE SIDE
        ======================================================= */}

        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[480px]">

          {/* Image */}
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />

          {/* Subtle image overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#111827]/40 via-transparent to-[#53AFBE]/10" />

          {/* =====================================================
              IMAGE TOP LEFT ACCENT
          ===================================================== */}

          <div className="pointer-events-none absolute left-0 top-0 h-28 w-28">

            {/* Light teal base */}
            <div
              className="absolute inset-0 bg-[#26a4a4]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
              }}
            />

            {/* Yellow + Coral */}
            <div
              className="absolute left-0 top-0 h-20 w-20 bg-gradient-to-br from-[#FEB449] to-[#FE5C36]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
              }}
            />
          </div>

          {/* =====================================================
              BOTTOM RIGHT BUSINESS CARD CORNER
          ===================================================== */}

          <div className="pointer-events-none absolute bottom-0 right-0 h-36 w-36 sm:h-44 sm:w-44">

            {/* Light teal base */}
            <div
              className="absolute inset-0 bg-[#26a4a4]"
              style={{
                clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
              }}
            />

            {/* Yellow + Coral */}
            <div
              className="absolute bottom-0 right-0 h-32 w-32 sm:h-40 sm:w-40"
              style={{
                clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
                background:
                  "linear-gradient(315deg, #FEB449 0%, #FE5C36 100%)",
              }}
            />

            {/* White cut */}
            <div
              className="absolute bottom-0 right-0 h-28 w-28 rounded-tl-[4rem] bg-white/95 sm:h-36 sm:w-36"
              style={{
                clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
              }}
            />

            {/* Final light teal */}
            <div
              className="absolute bottom-0 right-0 h-24 w-24 bg-[#26a4a4] transition-transform duration-700 group-hover:scale-110"
              style={{
                clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
              }}
            />
          </div>

          {/* =====================================================
              GLASS INFO
          ===================================================== */}

          <div className="absolute inset-x-6 bottom-6 z-10 rounded-2xl border border-white/20 bg-[#111827]/35 p-4 backdrop-blur-xl transition-all duration-500 group-hover:bg-[#111827]/45">

            <div className="flex items-center justify-between gap-4">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                  TechAlphonic
                </p>

                <p className="mt-1 text-sm font-semibold leading-5 text-white">
                  Digital solutions that move businesses forward
                </p>

              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#53AFBE]">

                <ArrowUpRight className="h-5 w-5" />

              </div>

            </div>
          </div>

          {/* =====================================================
              IMAGE SHINE
          ===================================================== */}

          <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 group-hover:left-[120%] group-hover:opacity-100" />

        </div>
      </div>
    </div>
  );
}

export default ServiceCard;