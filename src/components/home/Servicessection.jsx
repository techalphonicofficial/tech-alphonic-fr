"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { servicesData } from "@/config/servicesData";
import ServiceCard from "./ServiceCard";

function Card({ card, index, total, progress, activeCard }) {
  const start = index / total;
  const end = (index + 1) / total;
  const slot = end - start;

  const buffer = slot * 0.5;

  const enterStart = Math.max(0, start - buffer);
  const enterEnd = Math.min(1, start + buffer);

  const blurClearPoint = enterStart + (enterEnd - enterStart) * 0.5;

  // When the next card enters and completely covers this card
  const nextStart = (index + 1) / total;
  const nextEnterEnd = Math.min(1, nextStart + buffer);
  const isLast = index === total - 1;

  // Position: smooth vertical slide
  const y = useTransform(
    progress,
    [enterStart, enterEnd],
    [index === 0 ? "0%" : "100%", "0%"]
  );

  // Blur: smooth entry clearance
  const blur = useTransform(
    progress,
    [enterStart, blurClearPoint],
    [index === 0 ? "blur(0px)" : "blur(10px)", "blur(0px)"]
  );

  // Opacity: hide previous cards once covered by the next card so it looks like exactly one card
  const opacity = useTransform(
    progress,
    index === 0
      ? [0, Math.max(0, nextEnterEnd - 0.015), nextEnterEnd, 1]
      : isLast
        ? [0, Math.max(0, enterStart - 0.005), enterStart, 1]
        : [
          0,
          Math.max(0, enterStart - 0.005),
          enterStart,
          Math.max(enterStart + 0.001, nextEnterEnd - 0.015),
          nextEnterEnd,
          1,
        ],
    index === 0
      ? [1, 1, 0, 0]
      : isLast
        ? [0, 0, 1, 1]
        : [0, 0, 1, 1, 0, 0]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-auto"
      style={{
        y,
        filter: blur,
        opacity,
        zIndex: index + 1,
        willChange: "transform, filter, opacity",
      }}
    >
      {/* LEFT SIDE LARGE COUNTING */}
      <div className="absolute -left-2 top-0 z-20 hidden -translate-x-full lg:block">
        <motion.span
          animate={{
            opacity: activeCard === index ? 1 : 0,
            x: activeCard === index ? 0 : -15,
            scale: activeCard === index ? 1 : 0.9,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block text-7xl font-extrabold leading-none tracking-tighter text-primary xl:text-8xl"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </div>

      <ServiceCard service={card} index={index} />
    </motion.div>
  );
}

function Servicessection() {
  const cards = servicesData.items;

  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Create a 5% buffer at the top and bottom of the scroll container
  // so the animation rests for a moment when locking and unlocking.
  const bufferedProgress = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  // Smooth scroll progress for the cards
  const progress = useSpring(bufferedProgress, {
    stiffness: 260,
    damping: 38,
    mass: 0.6,
    restDelta: 0.0005,
  });

  // Use raw buffered progress for instant state updates without spring lag
  useMotionValueEvent(bufferedProgress, "change", (value) => {
    if (!cards.length) return;

    const index = Math.min(
      Math.floor(value * cards.length),
      cards.length - 1
    );

    setActiveCard(index);
  });

  if (!cards.length) return null;

  const sectionHeight = `${cards.length * 100}vh`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-100"
      style={{ height: sectionHeight }}
    >
      <div className="sticky left-0 right-0 top-[112px] flex h-[calc(100vh-112px)] w-full items-center justify-center overflow-hidden px-4 sm:px-6 transform-gpu will-change-transform">
        <div className="w-full max-w-6xl">
          <div className="relative h-[480px] sm:h-[500px] lg:h-[520px]">
            {cards.map((card, index) => (
              <Card
                key={`${card.id}-${index}`}
                card={card}
                index={index}
                total={cards.length}
                progress={progress}
                activeCard={activeCard}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicessection;