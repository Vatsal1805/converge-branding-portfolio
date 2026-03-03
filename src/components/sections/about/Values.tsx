"use client";

import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
    {
        title: "Precision",
        description: "Every pixel, every prompt, and every strategic decision is made with obsessive attention to detail."
    },
    {
        title: "Eco-Conscious",
        description: "By moving production to the AI cloud, we eliminate the heavy carbon footprint of physical shoots."
    },
    {
        title: "Bold Elegance",
        description: "We don't follow trends. We set the standard for a cinematic, timeless luxury aesthetic."
    }
];

export default function Values() {
    const revealRef = useScrollReveal({ stagger: 0.15, selector: ".value-card" });

    return (
        <SectionWrapper className="bg-secondary/20">
            <div className="mb-12">
                <span className="eyebrow">OUR CORE VALUES</span>
                <h2 className="section-title">The Converge Philosophy</h2>
            </div>

            <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, i) => (
                    <div key={i} className="value-card p-10 border border-white/[0.05] rounded-card bg-secondary/10 group transition-all duration-300 hover:border-accent/40">
                        <h3 className="font-syne font-bold text-[24px] text-white mb-4 transition-colors group-hover:text-accent">
                            {value.title}
                        </h3>
                        <p className="font-dm font-light text-muted leading-relaxed">
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
