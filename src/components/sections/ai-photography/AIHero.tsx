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
            <div className="absolute inset-0 bg-[#080808]">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 50%, rgba(232,65,65,0.15) 0%, transparent 60%)",
                    }}
                />
                <Image
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=80"
                    alt="AI Photography cinematic background"
                    fill
                    className="object-cover z-0"
                    style={{ mixBlendMode: 'luminosity', opacity: 0.5 }}
                    priority
                />
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: "linear-gradient(to bottom, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0.8) 100%)"
                    }}
                />
            </div>

            <div className="relative z-10 text-center px-[24px] md:px-[40px] lg:px-[80px] max-w-content mx-auto w-full">
                <span className="eyebrow mb-6 block">AI POWERED PHOTOGRAPHY</span>

                <div className="mb-5 w-full">
                    <div ref={line1Ref} className="will-change-transform" style={{ clipPath: "inset(0 100% 0 0)" }}>
                        <h1 className="font-syne font-extrabold text-[clamp(32px,9vw,48px)] md:text-[clamp(44px,8vw,64px)] lg:text-[clamp(56px,8vw,96px)] leading-[0.92] tracking-[-2px] md:tracking-[-3px] text-textWhite whitespace-normal lg:whitespace-nowrap w-full text-center">
                            PHOTOSHOOTS
                        </h1>
                    </div>
                    <div ref={line2Ref} className="will-change-transform" style={{ clipPath: "inset(0 100% 0 0)" }}>
                        <h1 className="font-syne font-extrabold text-[clamp(32px,9vw,48px)] md:text-[clamp(44px,8vw,64px)] lg:text-[clamp(56px,8vw,96px)] leading-[0.92] tracking-[-2px] md:tracking-[-3px] text-accent whitespace-normal lg:whitespace-nowrap w-full text-center">
                            REIMAGINED.
                        </h1>
                    </div>
                </div>

                <p className="section-subtitle mx-auto text-center mb-7 max-w-full md:max-w-[560px] px-0 break-words">
                    Eliminate logistics of traditional production. High-end editorial AI photography tailored for luxury brands.
                </p>

                <div className="flex justify-center">
                    <Button variant="primary" href="/contact">Book an AI Shoot</Button>
                </div>
            </div>
        </section>
    );
}
