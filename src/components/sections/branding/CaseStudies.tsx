"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const caseStudies = [
    {
        title: "Aurelia Luxe",
        category: "Rebranding • 2024",
        description: "A complete visual transformation for a heritage jewelry brand, resulting in a 40% increase in digital sales.",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
        stats: "40% Sales Growth"
    },
    {
        title: "Vanguard Tech",
        category: "Identity • 2023",
        description: "Positioning a silicon valley startup as the leader in sustainable computing through a bold, tech-forward identity.",
        image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=800&q=80",
        stats: "Series B Funded"
    }
];

export default function CaseStudies() {
    const revealRef = useScrollReveal({ stagger: 0.2, selector: ".case-study-card" });

    return (
        <SectionWrapper>
            <div className="mb-12">
                <span className="eyebrow">CASE STUDIES</span>
                <h2 className="section-title text-white">Identity In Action</h2>
            </div>

            <div ref={revealRef} className="flex flex-col gap-16 lg:gap-24">
                {caseStudies.map((study, i) => (
                    <div key={i} className={`case-study-card group cursor-pointer flex flex-col lg:flex-row items-center gap-6 lg:gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full aspect-video lg:aspect-[4/3] overflow-hidden rounded-card border border-white/[0.05]">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute top-4 right-4 bg-accent text-white font-dm text-[11px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    {study.stats}
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col gap-2">
                            <span className="text-accent text-[12px] font-dm tracking-[2px] uppercase">{study.category}</span>
                            <h3 className="font-syne font-bold text-[28px] text-white group-hover:text-accent transition-colors">
                                {study.title}
                            </h3>
                            <p className="font-dm font-light text-muted leading-relaxed">
                                {study.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
