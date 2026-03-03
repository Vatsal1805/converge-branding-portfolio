"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/ai-photography", label: "AI Photography" },
    { href: "/branding", label: "Branding" },
    { href: "/about", label: "About" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] h-[80px] flex items-center transition-all duration-400 ease-out ${scrolled
                ? "bg-[rgba(8,8,8,0.92)] backdrop-blur-[20px] border-b border-white/[0.06]"
                : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="max-w-content mx-auto w-full px-[24px] md:px-[40px] lg:px-[80px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <span className="font-syne font-extrabold text-[22px] text-white tracking-tight">
                        Converge <span className="text-accent">Digitals</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative text-[13px] uppercase tracking-[2px] font-dm font-normal transition-colors duration-300 group ${pathname === link.href
                                ? "text-white"
                                : "text-textWhite/65 hover:text-white"
                                }`}
                        >
                            {link.label}
                            <span
                                className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-transform duration-300 origin-left ${pathname === link.href
                                    ? "w-full scale-x-100"
                                    : "w-full scale-x-0 group-hover:scale-x-100"
                                    }`}
                            />
                        </Link>
                    ))}
                </div>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:block">
                        <Button variant="primary" href="/contact">
                            Book a Call
                        </Button>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="lg:hidden flex flex-col gap-[5px] w-7"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                                }`}
                        />
                        <span
                            className={`h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`lg:hidden fixed top-[80px] left-0 right-0 bg-[rgba(8,8,8,0.97)] backdrop-blur-[20px] border-b border-white/[0.06] transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-[24px] py-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-[14px] uppercase tracking-[2px] font-dm transition-colors ${pathname === link.href
                                ? "text-white"
                                : "text-textWhite/65 hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="primary" href="/contact">
                        Book a Call
                    </Button>
                </div>
            </div>
        </nav>
    );
}
