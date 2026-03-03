"use client";

import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
    {
        phase: "01",
        title: "Discovery & Strategy",
        items: ["Market Audits", "Competitor Analysis", "Brand Positioning", "Audience Persona"]
    },
    {
        phase: "02",
        title: "Visual Architecture",
        items: ["Logo Design", "Color Theory", "Typography System", "Motion Guidelines"]
    },
    {
        phase: "03",
        title: "Brand ecosystem",
        items: ["Packaging", "Digital Presence", "Social Framework", "Investor Deck"]
    },
    {
        phase: "04",
        title: "The Launch",
        items: ["Brand Guidelines", "Asset Handover", "Marketing Support", "Post-Launch Audit"]
    }
];

export default function Timeline() {
    const revealRef = useScrollReveal({ stagger: 0.1, selector: ".timeline-item" });

    return (
        <SectionWrapper className="bg-secondary/30">
            <div className="mb-16">
                <span className="eyebrow">OUR PROCESS</span>
                <h2 className="section-title">From Concept to Icon</h2>
            </div>

            <div ref={revealRef} className="relative max-w-5xl mx-auto">
                {/* Center Line for Desktop */}
                <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-white/[0.08] -translate-x-1/2" />

                <div className="flex flex-col gap-12 lg:gap-0">
                    {timeline.map((step, i) => (
                        <div key={i} className="timeline-item group relative flex flex-col lg:flex-row lg:h-[280px]">
                            {/* Desktop Timeline Dot */}
                            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border border-accent/50 z-10 transition-colors duration-500 group-hover:bg-accent" />

                            {/* Content */}
                            <div className={`w-full lg:w-1/2 flex flex-row lg:flex-col gap-6 lg:gap-0 lg:justify-center ${i % 2 === 0 ? 'lg:pr-16 lg:items-end' : 'lg:order-last lg:pl-16'}`}>
                                {/* Mobile Phase Number */}
                                <div className="lg:hidden flex-shrink-0 mt-1 w-12 text-center">
                                    <span className="font-syne font-extrabold text-[32px] text-accent/20 group-hover:text-accent transition-colors duration-500 leading-none">
                                        {step.phase}
                                    </span>
                                </div>

                                <div className={`w-full ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <div className={`hidden lg:flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                        <span className="font-syne font-extrabold text-[40px] text-accent/20 group-hover:text-accent transition-colors duration-500">
                                            {step.phase}
                                        </span>
                                    </div>
                                    <h3 className="font-syne font-bold text-[20px] text-white mb-4 uppercase tracking-wide">
                                        {step.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {step.items.map((item, idx) => (
                                            <li key={idx} className={`flex items-center gap-2 text-muted font-dm text-[14px] ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                                <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Empty Space filler */}
                            <div className={`hidden lg:block w-1/2 ${i % 2 === 0 ? 'lg:order-last' : 'lg:order-first'}`} />
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
