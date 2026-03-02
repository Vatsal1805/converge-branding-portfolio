"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutHero() {
    const headlineRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.fromTo(
            headlineRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
        );
    }, []);

    return (
        <section className="pt-[160px] pb-[80px] bg-background">
            <div className="max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
                <span className="eyebrow mb-6 block">ABOUT CONVERGE</span>
                <h1
                    ref={headlineRef}
                    className="font-syne font-extrabold text-[72px] md:text-[100px] leading-[0.9] tracking-[-4px] text-white max-w-[900px]"
                >
                    Redefining Luxury For The Digital Age.
                </h1>
            </div>
        </section>
    );
}
