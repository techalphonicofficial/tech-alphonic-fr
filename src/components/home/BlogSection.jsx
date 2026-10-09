"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    date: "May 28, 2026",
    title: "Driving Digital Success: Why Partnering with the Best Website Development Company in San Diego Is a Game-Changer",
    excerpt: "In the current day, a business website is as vital to...",
    image: "https://www.techalphonic.com/wp-content/uploads/2026/05/Driving-Digital-Success.webp",
    link: "/blog/driving-digital-success-why-partnering-with-the-best-website-development-company-in-san-diego-is-a-game-changer",
  },
  {
    id: 2,
    date: "May 28, 2026",
    title: "Top 10 Best AI SEO Tools in 2026: The Most Comprehensive Guide for Smarter Search Optimization",
    excerpt: "The world of digital marketing evolves at a rapid pace, mostly...",
    image: "https://www.techalphonic.com/wp-content/uploads/2026/05/Best-AI-SEO.webp",
    link: "/blog/top-10-best-ai-seo-tools-in-2026-the-most-comprehensive-guide-for-smarter-search-optimization",
  },
  {
    id: 3,
    date: "May 28, 2026",
    title: "Local SEO Services in Noida—Complete Guide for Small Businesses",
    excerpt: "Noida’s digital ecosystem is developing at turbo speed. Thousands of businesses...",
    image: "https://www.techalphonic.com/wp-content/uploads/2026/05/Local-SEO-Services-.webp",
    link: "/blog/local-seo-services-in-noida-complete-guide-for-small-businesses-2",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

export default function BlogSection() {
  return (
    <section className="py-10 sm:py-16 w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-text sm:text-5xl"
          >
            Insights That Drive Digital Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg text-muted"
          >
            Discover expert articles on SEO, AI, Digital Marketing, Web Development, and business growth strategies from Tech Alphonic.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              className="group flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-50/50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-transparent" />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-primary shadow-sm backdrop-blur-md">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {post.date}
                  </div>
                </div>
              </div>

              {/* Content Box */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-2 text-xl font-bold leading-snug tracking-tight text-dark line-clamp-2 transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    href={post.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary/80"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
