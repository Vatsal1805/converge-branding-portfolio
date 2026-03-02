"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Button from "@/components/ui/Button";

export default function AIHero() {
    const line1Ref = useRef<HTMLDivElement>(null);
    const line2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });
        tl.fromTo(line1Ref.current, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1 }, 0.3)
            .fromTo(line2Ref.current, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1 }, 0.5);

        return () => { tl.kill(); };
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-[80px] pt-[80px]">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=80"
                    alt="AI Photography cinematic background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-content mx-auto">
                <span className="eyebrow mb-6 block">AI POWERED PHOTOGRAPHY</span>

                <div className="mb-5">
                    <div ref={line1Ref} className="will-change-transform" style={{ clipPath: "inset(0 100% 0 0)" }}>
                        <h1 className="font-syne font-extrabold text-hero leading-[0.92] tracking-[-3px] text-textWhite whitespace-nowrap">
                            PHOTOSHOOTS
                        </h1>
                    </div>
                    <div ref={line2Ref} className="will-change-transform" style={{ clipPath: "inset(0 100% 0 0)" }}>
                        <h1 className="font-syne font-extrabold text-hero leading-[0.92] tracking-[-3px] text-accent whitespace-nowrap">
                            REIMAGINED.
                        </h1>
                    </div>
                </div>

                <p className="section-subtitle mx-auto text-center mb-7 max-w-[560px]">
                    Eliminate logistics of traditional production. High-end editorial AI photography tailored for luxury brands.
                </p>

                <div className="flex justify-center gap-4">
                    <Button variant="primary" href="/contact">Book an AI Shoot</Button>
                    <Button variant="ghost" href="/work">View Portfolio</Button>
                </div>
            </div>
        </section>
    );
}
