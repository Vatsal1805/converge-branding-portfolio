"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
    { label: "Founded", value: "2023" },
    { label: "Global Clients", value: "100+" },
    { label: "Awards Won", value: "12" },
    { label: "Team Size", value: "24" }
];

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
            <div className="max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-left lg:text-center">
                <span className="eyebrow mb-6 block lg:inline-block w-full">ABOUT CONVERGE</span>
                <h1
                    ref={headlineRef}
                    className="font-syne font-extrabold text-[clamp(44px,8vw,72px)] md:text-[80px] lg:text-[100px] leading-[0.9] tracking-[-3px] lg:tracking-[-4px] text-white max-w-[900px] mx-auto mb-16"
                >
                    Redefining Luxury For The Digital Age.
                </h1>

                {/* Stats Card */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-y border-white/[0.05] py-8 lg:py-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col gap-2 text-left lg:text-center">
                            <span className="font-syne font-bold text-[32px] md:text-[40px] text-white">
                                {stat.value}
                            </span>
                            <span className="font-dm text-[12px] text-muted uppercase tracking-[2px]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
