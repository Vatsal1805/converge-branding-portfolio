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

            <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {timeline.map((step, i) => (
                    <div key={i} className="timeline-item group">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="font-syne font-extrabold text-[40px] text-accent/20 group-hover:text-accent transition-colors duration-500">
                                {step.phase}
                            </span>
                            <div className="h-[1px] flex-1 bg-white/[0.08]" />
                        </div>
                        <h3 className="font-syne font-bold text-[20px] text-white mb-4 uppercase tracking-wide">
                            {step.title}
                        </h3>
                        <ul className="space-y-3">
                            {step.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-muted font-dm text-[14px]">
                                    <span className="w-1 h-1 bg-accent rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
