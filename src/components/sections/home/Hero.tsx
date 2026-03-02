"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import StatCounter from "@/components/ui/StatCounter";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const eyebrowRef = useRef<HTMLSpanElement>(null);
    const line1Ref = useRef<HTMLDivElement>(null);
    const line2Ref = useRef<HTMLDivElement>(null);
    const line3Ref = useRef<HTMLDivElement>(null);
    const subtextRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const orbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentHero = heroRef.current;
        if (!currentHero) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        // Effect 12 — Page Load Sequence
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            eyebrowRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            0.2
        )
            .fromTo(
                line1Ref.current,
                { clipPath: "inset(0 100% 0 0)" },
                { clipPath: "inset(0 0% 0 0)", duration: 0.8, ease: "power4.inOut" },
                0.4
            )
            .fromTo(
                line2Ref.current,
                { clipPath: "inset(0 100% 0 0)" },
                { clipPath: "inset(0 0% 0 0)", duration: 0.8, ease: "power4.inOut" },
                0.55
            )
            .fromTo(
                line3Ref.current,
                { clipPath: "inset(0 100% 0 0)" },
                { clipPath: "inset(0 0% 0 0)", duration: 0.8, ease: "power4.inOut" },
                0.7
            )
            .fromTo(
                subtextRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                0.85
            )
            .fromTo(
                buttonsRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                },
                1.0
            )
            .fromTo(
                statsRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                1.2
            )
            .fromTo(
                orbRef.current,
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, duration: 1 },
                1.4
            );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden -mt-[80px] pt-[80px]"
        >
            {/* Background layers */}
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 noise-bg" />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(192,57,43,0.2) 0%, transparent 70%)",
                }}
            />
            {/* Pulsing red orb */}
            <div
                ref={orbRef}
                className="absolute w-[300px] h-[300px] opacity-0 animate-morph animate-pulse-glow"
                style={{
                    background:
                        "radial-gradient(circle, rgba(232,65,65,0.3) 0%, transparent 70%)",
                    filter: "blur(100px)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-content mx-auto w-full">
                {/* Eyebrow */}
                <span
                    ref={eyebrowRef}
                    className="eyebrow opacity-0 mb-6 block"
                >
                    EST. 2023 — CONVERGE DIGITALS
                </span>

                {/* Headline */}
                <div className="space-y-0 mb-5">
                    <div ref={line1Ref} className="will-change-transform" style={{ clipPath: "inset(0 100% 0 0)" }}>
                        <h1 className="font-syne font-extrabold text-hero leading-[0.92] tracking-[-3px] text-textWhite whitespace-nowrap">
                            WE BRAND.
                        </h1>
                    </div>
                    <div ref={line2Ref} className="will-change-transform" style={{ clipPath: "inset(0 100% 0 0)" }}>
                        <h1
                            className="font-syne font-extrabold text-hero leading-[0.92] tracking-[-3px] whitespace-nowrap"
                            style={{
                                WebkitTextStroke: "1.5px #F5F0EC",
                                color: "transparent",
                            }}
                        >
                            WE SHOOT.
                        </h1>
                    </div>
                    <div ref={line3Ref} className="will-change-transform" style={{ clipPath: "inset(0 100% 0 0)" }}>
                        <h1 className="font-syne font-extrabold text-hero leading-[0.92] tracking-[-3px] text-accent whitespace-nowrap">
                            WE ELEVATE.
                        </h1>
                    </div>
                </div>

                {/* Subtext */}
                <p
                    ref={subtextRef}
                    className="font-dm font-light text-[17px] text-muted max-w-[500px] mx-auto leading-relaxed opacity-0 mb-7"
                >
                    A luxury creative agency specializing in high-end branding and AI
                    fashion photography.
                </p>

                {/* Buttons */}
                <div
                    ref={buttonsRef}
                    className="flex justify-center gap-4 opacity-0 mb-10"
                >
                    <Button variant="primary" href="/contact">
                        Book a Free Call
                    </Button>
                    <Button variant="ghost" href="/work">
                        Explore Work
                    </Button>
                </div>

                {/* Divider */}
                <div className="w-full max-w-[600px] mx-auto h-[1px] bg-white/[0.08] mb-10" />

                {/* Stats */}
                <div
                    ref={statsRef}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-[60px] opacity-0"
                >
                    <StatCounter value={120} suffix="+" label="Brands Elevated" />
                    <div className="hidden sm:block w-[1px] h-10 bg-white/10" />
                    <StatCounter value={50} suffix="K+" label="Visuals Delivered" />
                    <div className="hidden sm:block w-[1px] h-10 bg-white/10" />
                    <StatCounter value={98} suffix="%" label="Client Retention" />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[10px] tracking-[3px] uppercase text-[#555] font-dm">
                    Scroll to explore
                </span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent" />
            </div>
        </section>
    );
}
