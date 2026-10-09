"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    ChevronDown,
    Menu,
    ArrowRight,
} from "lucide-react";

import { navigation } from "@/config/navigation";
import DesktopMegaMenu from "./DesktopMegaMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const router = useRouter();

    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    /* =========================================================
       NAVIGATION HANDLER
       Route change + scroll to top
    ========================================================== */

    const handleNavigation = (href) => {
        // Immediately close dropdown
        setActiveMenu(null);

        // Close mobile menu
        setMobileMenuOpen(false);

        if (!href || href === "#") return;

        // Navigate
        router.push(href);

        // Scroll to top
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 50);
    };
    /* =========================================================
       DESKTOP DROPDOWN
    ========================================================== */

    const handleMenuEnter = (label) => {
        setActiveMenu(label);
    };

    const handleDesktopLeave = () => {
        setActiveMenu(null);
    };

    /* =========================================================
       MOBILE MENU
    ========================================================== */

    const handleMobileOpen = () => {
        setMobileMenuOpen(true);

        // Important:
        // Desktop dropdown should never remain open
        setActiveMenu(null);
    };

    const handleMobileClose = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* =====================================================
                TOP ACCENT LINE
            ====================================================== */}

            <div className="h-[2px] w-full bg-gradient-to-r from-primary via-secondary to-accent" />

            {/* =====================================================
                HEADER
            ====================================================== */}

            <header
                className="sticky top-0 z-[80] w-full border-b border-dark/10 bg-white/90 backdrop-blur-2xl"
                onMouseLeave={handleDesktopLeave}
            >
                <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-5 sm:px-6 lg:px-8">

                    {/* =================================================
                        LOGO
                    ================================================== */}

                    <button
                        type="button"
                        onClick={() => handleNavigation("/")}
                        className="group cursor-pointer flex shrink-0 items-center gap-2.5 animate-logo-in"
                        aria-label="Go to homepage"
                    >
                        <img
                            className="h-12"
                            src="/logo.png"
                            alt="Tech Alphonic Logo"
                        />
                    </button>

                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================== */}

                    <nav className="hidden h-full items-center xl:flex">
                        {navigation.map((item) => {
                            const hasChildren =
                                Array.isArray(item.children) &&
                                item.children.length > 0;

                            const isActive =
                                activeMenu === item.label;

                            /* =========================================
                               NORMAL LINK
                               No children = no dropdown
                            ========================================== */

                            if (!hasChildren) {
                                return (
                                    <button
                                        key={item.label}
                                        type="button"
                                        onClick={() =>
                                            handleNavigation(item.href)
                                        }
                                        onMouseEnter={() => {
                                            setActiveMenu(null);
                                        }}
                                        className="group relative flex h-full items-center px-4 text-[13px] font-semibold text-text transition-colors duration-300 hover:text-primary"
                                    >
                                        {item.label}

                                        <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-center scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                                    </button>
                                );
                            }

                            /* =========================================
                               DROPDOWN LINK
                               Has children = arrow + dropdown
                            ========================================== */

                            return (
                                <button
                                    key={item.label}
                                    type="button"
                                    onMouseEnter={() =>
                                        handleMenuEnter(item.label)
                                    }
                                    onFocus={() =>
                                        handleMenuEnter(item.label)
                                    }
                                    onClick={() =>
                                        setActiveMenu((current) =>
                                            current === item.label
                                                ? null
                                                : item.label
                                        )
                                    }
                                    className={`group relative flex h-full items-center gap-1.5 px-4 text-[13px] font-semibold transition-colors duration-300 ${isActive
                                        ? "text-primary"
                                        : "text-text hover:text-primary"
                                        }`}
                                    aria-expanded={isActive}
                                    aria-haspopup="true"
                                >
                                    {item.label}

                                    {/* Arrow ONLY for dropdown items */}

                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-300 ${isActive
                                            ? "rotate-180"
                                            : ""
                                            }`}
                                    />

                                    {/* Active underline */}

                                    <span
                                        className={`absolute  bottom-0 left-4 right-4 h-[2px] origin-center rounded-full bg-primary transition-transform duration-300 ${isActive
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </nav>

                    {/* =================================================
                        DESKTOP ACTIONS
                    ================================================== */}

                    <div className="hidden items-center gap-3 xl:flex">

                        {/* CTA */}

                        <button
                            type="button"
                            onClick={() =>
                                handleNavigation("/contact")
                            }
                            className="group flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e65c00] hover:shadow-lg hover:shadow-primary/30"
                        >
                            Get a Free Proposal

                            <ArrowRight
                                size={14}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </div>

                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================== */}

                    <button
                        type="button"
                        onClick={handleMobileOpen}
                        className="flex  h-11 w-11 items-center justify-center rounded-xl border border-dark/10 bg-white text-dark shadow-sm transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:text-primary active:scale-95 xl:hidden"
                        aria-label="Open navigation menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <Menu size={21} />
                    </button>
                </div>

                {/* =====================================================
                    DESKTOP MEGA MENU
                ====================================================== */}

                <DesktopMegaMenu
                    item={navigation.find(
                        (item) => item.label === activeMenu
                    )}
                    open={Boolean(activeMenu)}
                    onNavigate={handleNavigation}
                />
            </header>

            {/* =========================================================
                MOBILE MENU
            ========================================================== */}

            <MobileMenu
                navigation={navigation}
                open={mobileMenuOpen}
                onClose={handleMobileClose}
            />
        </>
    );
}