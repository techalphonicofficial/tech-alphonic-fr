"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const processSteps = [
  {
    id: "01",
    title: "Discover",
    description:
      "We dive deep into your business goals, target audience, and market landscape to create a strategic roadmap tailored to your digital vision.",
    image: "https://picsum.photos/seed/discover/800/1000",
  },
  {
    id: "02",
    title: "Plan",
    description:
      "Our UX/UI experts craft intuitive, aesthetically pleasing architectures that engage users and elevate your brand identity before writing a single line of code.",
    image: "https://picsum.photos/seed/plan/800/1000",
  },
  {
    id: "03",
    title: "Experience",
    description:
      "Using cutting-edge technologies, our developers build robust, scalable solutions, rigorously testing every feature for peak performance and seamless UX.",
    image: "https://picsum.photos/seed/experience/800/1000",
  },
  {
    id: "04",
    title: "Complete",
    description:
      "We ensure a seamless deployment, followed by continuous monitoring, optimization, and digital marketing strategies to drive real, lasting growth.",
    image: "https://picsum.photos/seed/complete/800/1000",
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);
  const activeStepRef = useRef(0);

  // Pin the entire section for 400vh to give ample scroll duration
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 112px", "end end"],
  });

  // Responsive, critically-damped spring to remove mouse-wheel rigidness without feeling laggy
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 42,
    mass: 0.05,
    restDelta: 0.0001,
  });

  // Create a comfortable buffer at top and bottom so the animation rests cleanly when locking/unlocking
  const bufferedProgress = useTransform(scrollYProgress, [0.06, 0.94], [0, 1]);

  // Use the buffered progress for state updates with ref guard to avoid render thrashing
  useMotionValueEvent(bufferedProgress, "change", (latest) => {
    const step = Math.min(
      Math.floor(latest * processSteps.length),
      processSteps.length - 1
    );
    if (step !== activeStepRef.current) {
      setPrevStep(activeStepRef.current);
      activeStepRef.current = step;
      setActiveStep(step);
    }
  });

  const sectionHeight = `${processSteps.length * 100}vh`;

  return (
    <>
      {/* =======================================================
          DESKTOP LAYOUT (Sticky Scroll-Linked)
      ======================================================= */}
      <section
        ref={containerRef}
        className="relative hidden bg-white lg:block"
        style={{ height: sectionHeight }}
      >
        {/* 
          Account for the 112px fixed navbar so content doesn't go under it.
          Center the content perfectly in the remaining viewport height.
          Added transform-gpu to force hardware acceleration for silky smooth pinning.
        */}
        <div className="sticky left-0 right-0 top-[112px] flex h-[calc(100vh-112px)] w-full flex-col justify-center overflow-hidden px-12 transform-gpu will-change-transform">
          <div className="mx-auto flex h-full w-full max-w-[1400px] flex-row items-center justify-between gap-12 xl:gap-16">

            {/* LEFT SIDE: Content */}
            <div className="flex w-[45%] flex-col justify-center">
              <div className="mb-10 xl:mb-16">
                <h2 className="text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-text xl:text-[3.2rem]">
                  How We Turn Ideas Into <br /> Real, Lasting Impact
                </h2>
              </div>

              <div className="relative ml-2 pl-12 border-l border-slate-200">
                {/* Timeline Progress Line */}
                <motion.div
                  className="absolute bottom-0 left-[-1px] top-0 w-[2px] origin-top bg-primary"
                  style={{ scaleY: smoothProgress }}
                />

                {processSteps.map((step, index) => {
                  const isActive = activeStep === index;
                  const isPast = activeStep > index;

                  return (
                    <div key={step.id} className="relative mb-6 last:mb-0 xl:mb-8">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[56px] top-2 flex h-5 w-5 items-center justify-center">
                        <motion.div
                          initial={false}
                          animate={{
                            scale: isActive ? 1.2 : 1,
                            backgroundColor:
                              isActive || isPast
                                ? "var(--primary)"
                                : "#CBD5E1",
                          }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10 h-3 w-3 rounded-full"
                        />
                        {/* Soft glow for active state */}
                        {isActive && (
                          <div className="absolute inset-0 z-0 animate-pulse rounded-full border-2 border-primary/20 bg-primary/10" />
                        )}
                      </div>

                      {/* Text Content */}
                      <div
                        className={`transition-all duration-500 ease-out ${isActive
                            ? "opacity-100"
                            : "opacity-40 hover:opacity-60"
                          }`}
                      >
                        <h3 className="text-xl font-bold tracking-tight text-text sm:text-2xl xl:text-3xl">
                          {step.id}. {step.title}
                        </h3>

                        {/* Accordion Description */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? 8 : 0,
                          }}
                          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-base leading-relaxed text-muted xl:text-lg">
                            {step.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE: Image Gallery */}
            <div className="flex h-[60vh] max-h-[550px] w-[50%] items-center justify-center xl:max-h-[650px]">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
                <AnimatePresence initial={false} custom={activeStep > prevStep ? 1 : -1}>
                  <motion.div
                    key={activeStep}
                    custom={activeStep > prevStep ? 1 : -1}
                    initial={(dir) => ({
                      clipPath: dir > 0 ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 0% 0%)",
                      scale: dir > 0 ? 1.2 : 0.8,
                      opacity: dir > 0 ? 1 : 0,
                      zIndex: dir > 0 ? 2 : 0,
                    })}
                    animate={{
                      clipPath: "inset(0% 0% 0% 0%)",
                      scale: 1,
                      opacity: 1,
                      zIndex: 1,
                    }}
                    exit={(dir) => ({
                      clipPath: dir > 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
                      scale: dir > 0 ? 0.8 : 1.2,
                      opacity: dir > 0 ? 0 : 1,
                      zIndex: dir > 0 ? 0 : 2,
                    })}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute inset-0 h-full w-full"
                  >
                    <img
                      src={processSteps[activeStep].image}
                      alt={processSteps[activeStep].title}
                      className="h-full w-full object-cover transform-gpu will-change-transform"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Inner shadow overlay for depth */}
                <div className="absolute z-10 inset-0 pointer-events-none bg-gradient-to-t from-[#111827]/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================
          MOBILE LAYOUT (Natural Scroll)
      ======================================================= */}
      <section className="relative block bg-white px-5 py-20 sm:px-8 lg:hidden">
        <div className="mx-auto max-w-2xl">
          <div className="mb-16">
            <h2 className="text-[2.5rem] sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-text">
              How We Turn Ideas Into <br className="hidden sm:block" /> Real, Lasting Impact
            </h2>
          </div>

          <div className="relative ml-2 border-l border-slate-200 pl-8">
            {processSteps.map((step, index) => {
              // Mobile relies on natural document flow, so we just render them all stacked
              return (
                <div key={step.id} className="relative mb-16 last:mb-0">
                  {/* Dot */}
                  <div className="absolute -left-[38px] top-2 flex h-4 w-4 items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="mb-4 text-2xl font-bold tracking-tight text-text sm:text-3xl">
                      {step.id}. {step.title}
                    </h3>
                    <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg">
                      {step.description}
                    </p>

                    {/* Inline Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
