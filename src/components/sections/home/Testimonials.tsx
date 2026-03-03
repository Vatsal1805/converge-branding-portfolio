"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        initial: "J",
        name: "Julianna Vane",
        role: "Creative Director, Haus of Luxe",
        quote:
            "Converge elevated our brand presence beyond what we thought possible. Their attention to detail and understanding of luxury aesthetics is unmatched in the industry.",
    },
    {
        initial: "M",
        name: "Marcus Thorne",
        role: "Founder, NEXA Collective",
        quote:
            "Working with Converge was a transformative experience. They didn&apos;t just create a brand — they built an entire visual universe that resonates with our audience on every level.",
    },
    {
        initial: "E",
        name: "Elena Rossi",
        role: "Marketing Lead, Zupitar",
        quote:
            "The AI photography capabilities are truly next-generation. Converge delivered editorial-quality visuals that would have cost us ten times more through traditional methods.",
    },
];

const logos = [
    "HAUS OF LUXE",
    "NEXA",
    "ZUPITAR",
    "AURELIA",
    "VELVET NOIR",
    "CHROME CO",
];

export default function Testimonials() {
    const [active, setActive] = useState(1);
    const [paused, setPaused] = useState(false);
    const cardsRef = useRef<HTMLDivElement>(null);

    // Auto-rotate
    useEffect(() => {
        if (paused) return;
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [paused]);

    useEffect(() => {
        const element = cardsRef.current;
        if (!element) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        const cards = element.querySelectorAll(".testimonial-card");
        const anim = gsap.fromTo(
            cards,
            { opacity: 0, y: 60, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                },
            }
        );

        return () => {
            anim.kill();
            ScrollTrigger.getAll().forEach((t) => {
                if (t.trigger === element) t.kill();
            });
        };
    }, []);

    return (
        <SectionWrapper>
            <div className="mb-12 animate-in">
                <span className="eyebrow">TRUSTED BY BRANDS</span>
                <h2 className="section-title">What Brands Say</h2>
            </div>

            {/* Client logos */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-[16px] md:gap-8 pb-8 mb-10 border-b border-white/[0.06] animate-in">
                {logos.map((logo) => (
                    <span
                        key={logo}
                        className="w-[calc(33.333%-11px)] lg:w-auto text-center font-syne font-bold text-[12px] md:text-[14px] text-white/30 tracking-[2px] uppercase transition-all duration-300 hover:text-white/80"
                    >
                        {logo}
                    </span>
                ))}
            </div>

            {/* Testimonial cards */}
            <div
                ref={cardsRef}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className={`testimonial-card card-base p-6 md:p-8 h-auto max-h-[320px] flex flex-col transition-all duration-500 ${active === i
                            ? "border-accent/30 shadow-[0_0_40px_rgba(232,65,65,0.08)]"
                            : "border-white/[0.07]"
                            }`}
                        data-cursor="project"
                    >
                        {/* Quote icon */}
                        <svg
                            className="text-accent/40 mb-4 flex-shrink-0"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>

                        <p className="font-dm font-light text-[15px] text-white/70 italic leading-[1.7] flex-1 mb-4">
                            &ldquo;{t.quote}&rdquo;
                        </p>

                        <div className="flex items-center gap-3 mt-auto">
                            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                                <span className="font-syne font-bold text-accent text-[14px]">
                                    {t.initial}
                                </span>
                            </div>
                            <div>
                                <p className="font-syne font-semibold text-[14px] text-white">
                                    {t.name}
                                </p>
                                <p className="font-dm text-[12px] text-muted">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
