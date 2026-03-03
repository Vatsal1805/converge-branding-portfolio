"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function BrandingHero() {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subtextRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
            headlineRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.2 }
        ).fromTo(
            subtextRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
        );
    }, []);

    return (
        <section className="relative pt-[120px] pb-[60px] md:pt-[160px] md:pb-[80px] overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 max-w-content mx-auto">
            <div className="w-full lg:w-1/2 px-[24px] md:px-[40px] lg:pl-[80px] lg:pr-[40px] text-left">
                <span className="eyebrow mb-6 block">STRATEGIC BRANDING</span>
                <h1
                    ref={headlineRef}
                    className="font-syne font-extrabold text-[clamp(40px,8vw,64px)] lg:text-hero leading-[1] tracking-[-3px] text-textWhite mb-8"
                >
                    Building Visual <span className="text-accent">Empires.</span>
                </h1>
                <p
                    ref={subtextRef}
                    className="font-dm font-light text-[18px] text-muted max-w-[600px] leading-relaxed"
                >
                    We don&apos;t just design logos. We architect comprehensive visual identities that command attention and define categories.
                </p>
            </div>

            <div className="w-full lg:w-1/2 px-[24px] md:px-[40px] lg:pr-[80px] lg:pl-[40px]">
                <div className="relative w-full h-[280px] lg:h-[500px] rounded-card overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000&q=80"
                        alt="Branding Design"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full" />
            </div>
        </section>
    );
}
