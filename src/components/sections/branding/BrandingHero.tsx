"use client";

import React, { useEffect, useRef } from "react";
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
        <section className="relative pt-[120px] pb-[60px] md:pt-[160px] md:pb-[80px] overflow-hidden">
            <div className="max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
                <span className="eyebrow mb-6 block">STRATEGIC BRANDING</span>
                <h1
                    ref={headlineRef}
                    className="font-syne font-extrabold text-hero leading-[1] tracking-[-3px] text-textWhite mb-8"
                >
                    Building Visual <span className="text-accent">Empires.</span>
                </h1>
                <p
                    ref={subtextRef}
                    className="font-dm font-light text-[18px] text-muted max-w-[600px] mx-auto leading-relaxed"
                >
                    We don&apos;t just design logos. We architect comprehensive visual identities that command attention and define categories.
                </p>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full" />
            </div>
        </section>
    );
}
