"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: "01",
        title: "TRAIN",
        description: "We train custom AI models on your brand's unique aesthetics and product lines.",
    },
    {
        number: "02",
        title: "GENERATE",
        description: "Advanced prompt engineering creates thousands of high-fashion variations across any location.",
    },
    {
        number: "03",
        title: "DELIVER",
        description: "In-house retouchers deliver editorial-ready files for web and print in 48 hours.",
    },
];

export default function Process() {
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentCards = cardsRef.current;
        if (!currentCards) return;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        const cards = currentCards.querySelectorAll(".process-card");
        gsap.fromTo(cards, { opacity: 0, y: 80, scale: 0.95 }, {
            opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: currentCards, start: "top 80%" },
        });

        return () => { ScrollTrigger.getAll().forEach((t) => { if (t.trigger === currentCards) t.kill(); }); };
    }, []);

    return (
        <SectionWrapper>
            <div className="mb-12 animate-in">
                <span className="eyebrow">THE PROCESS</span>
                <h2 className="section-title">How It Works</h2>
            </div>

            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Dashed connecting line — desktop only */}
                <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-[1px] border-t border-dashed border-white/10 -translate-y-1/2 z-0" />

                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="process-card card-base p-8 relative z-10 group transition-all duration-300 hover:border-accent/30"
                    >
                        <span className="font-syne font-extrabold text-[40px] text-accent mb-4 block transition-transform duration-300 group-hover:scale-110">
                            {step.number}
                        </span>
                        <h3 className="font-syne font-bold text-[22px] text-textWhite uppercase mb-3 tracking-wide">
                            {step.title}
                        </h3>
                        <p className="font-dm font-light text-[15px] text-muted leading-[1.7]">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
