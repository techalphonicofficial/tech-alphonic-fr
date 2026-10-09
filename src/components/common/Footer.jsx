"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const footerData = {
  company: {
    name: "TechAlphonic",
    description:
      "Your trusted IT partner for digital transformation, development, marketing, automation and creative solutions.",
  },

  navigation: [
    {
      title: "Company",
      links: [
        {
          label: "About Us",
          href: "/about-us",
        },
        {
          label: "Our Work",
          href: "/our-work",
        },
        {
          label: "Packages",
          href: "/packages",
        },
        {
          label: "Blog",
          href: "/blog",
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
    },

    {
      title: "Services",
      links: [
        {
          label: "Digital Marketing",
          href: "/services/digital-marketing",
        },
        {
          label: "Web Development",
          href: "/services/web-development",
        },
        {
          label: "Mobile App Development",
          href: "/services/mobile-development",
        },
        {
          label: "Branding",
          href: "/services/branding",
        },
        {
          label: "AI Automation",
          href: "/services/ai-automation",
        },
      ],
    },

    {
      title: "Expertise",
      links: [
        {
          label: "WordPress",
          href: "/services/wordpress",
        },
        {
          label: "Shopify",
          href: "/services/shopify",
        },
        {
          label: "React",
          href: "/services/react",
        },
        {
          label: "React Native",
          href: "/services/react-native",
        },
        {
          label: "Java Development",
          href: "/services/java",
        },
      ],
    },
  ],

  contact: {
    email: "info@techalphonic.com",
    phone: "+91 00000 00000",
    address: "India",
  },

  socialMedia: [
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebookF,
    },
    {
      name: "YouTube",
      href: "#",
      icon: FaYoutube,
    },
  ],
};

function Footer() {
  const router = useRouter();

  /* =========================================================
      SCROLL TO TOP
  ========================================================== */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
      FOOTER NAVIGATION
      Route change + scroll to top
  ========================================================== */

  const handleNavigation = (href) => {
    // Navigate to selected page
    router.push(href);

    // Scroll to top smoothly
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <>
      {/* =========================================================
          CTA SECTION (GRAY BACKGROUND)
      ========================================================== */}
      <section className="relative border-t border-b border-border bg-[#F7F7F5] py-16 sm:py-20 lg:py-24 text-dark">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white px-6 py-10 shadow-sm sm:px-10 lg:px-14 lg:py-14">
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* CTA Content */}
              <div className="max-w-2xl">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Let&apos;s Build Something
                </span>

                <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl">
                  Have an idea? <br />
                  <span className="text-primary italic">
                    Let&apos;s make it happen.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                  From strategy to execution, we help businesses build
                  powerful digital experiences that are designed to grow.
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                scroll={true}
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-primary px-7 py-4 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e65c00] hover:shadow-lg hover:shadow-primary/30"
              >
                <span>Start a Project</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}
      <footer className="relative overflow-hidden bg-[#111111] text-white">

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            {/* =====================================================
              BRAND / ABOUT
          ====================================================== */}

            <div className="lg:col-span-4">
              {/* Logo */}

              <Link
                href="/"
                scroll={true}
                className="group inline-flex items-center gap-3 rounded-sm bg-white p-5"
              >
                <img
                  className="h-12 w-auto animate-logo-in"
                  src="/logo.png"
                  alt="Tech Alphonic Logo"
                />
              </Link>

              {/* Description */}

              <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
                {footerData.company.description}
              </p>

              {/* =================================================
                CONTACT DETAILS
            ================================================== */}

              <div className="mt-7 space-y-3">
                {/* Email */}

                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                    <Mail size={16} />
                  </span>

                  <span>{footerData.contact.email}</span>
                </a>

                {/* Phone */}

                <a
                  href={`tel:${footerData.contact.phone}`}
                  className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                    <Phone size={16} />
                  </span>

                  <span>{footerData.contact.phone}</span>
                </a>

                {/* Address */}

                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <MapPin size={16} />
                  </span>

                  <span>{footerData.contact.address}</span>
                </div>
              </div>
            </div>

            {/* =====================================================
              FOOTER NAVIGATION
          ====================================================== */}

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:pl-10">
              {footerData.navigation.map((column) => (
                <div key={column.title}>
                  <h3 className="mb-5 text-sm font-bold text-white">
                    {column.title}
                  </h3>

                  <ul className="space-y-3.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <button
                          type="button"
                          onClick={() => handleNavigation(link.href)}
                          className="group inline-flex items-center gap-1 text-left text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-[#53AFBE]"
                        >
                          {link.label}

                          <ArrowUpRight
                            size={13}
                            className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
            BOTTOM FOOTER
        ========================================================== */}

          <div className="mt-14 border-t border-white/10 pt-7">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Copyright */}

              <p className="text-xs leading-6 text-gray-500">
                © {new Date().getFullYear()} TechAlphonic. All rights reserved.
              </p>

              {/* Legal Links */}

              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/privacy-policy"
                  scroll={true}
                  className="text-xs text-gray-500 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms-and-conditions"
                  scroll={true}
                  className="text-xs text-gray-500 transition-colors hover:text-white"
                >
                  Terms &amp; Conditions
                </Link>
              </div>

              {/* =================================================
                SOCIAL + BACK TO TOP
            ================================================== */}

              <div className="flex items-center gap-2">
                {footerData.socialMedia.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#53AFBE]/40 hover:bg-[#53AFBE]/10 hover:text-[#53AFBE]"
                    >
                      <Icon
                        size={15}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  );
                })}

                {/* Back To Top */}

                <button
                  type="button"
                  onClick={scrollToTop}
                  aria-label="Back to top"
                  className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#53AFBE] text-white shadow-lg shadow-[#53AFBE]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#479eac]"
                >
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
          BOTTOM ACCENT
      ========================================================== */}

        <div className="h-1 w-full bg-primary" />
      </footer>
    </>
  );
}

export default Footer;