"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WorkHero() {
    const headlineRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced || !headlineRef.current) return;

        gsap.fromTo(
            headlineRef.current,
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power4.inOut" }
        );
    }, []);

    return (
        <section className="py-[60px] md:py-[80px] lg:py-[120px] text-center">
            <div className="max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
                <span className="eyebrow">OUR WORK</span>
                <h1
                    ref={headlineRef}
                    className="font-syne font-extrabold text-[clamp(40px,10vw,56px)] lg:text-[clamp(60px,8vw,100px)] leading-[1] tracking-[-3px] text-textWhite mb-5"
                    style={{
                        background: "linear-gradient(to bottom, #F5F0EC, rgba(245,240,236,0.2))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        clipPath: "inset(0 100% 0 0)",
                    }}
                >
                    Work That Speaks
                </h1>
                <p className="section-subtitle mx-auto text-center">
                    High-end branding and AI fashion photography for ambitious brands.
                </p>
            </div>
        </section>
    );
}
