"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Story() {
    const revealRef = useScrollReveal();

    return (
        <SectionWrapper>
            <div ref={revealRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative aspect-[4/5] rounded-card overflow-hidden border border-white/[0.05]">
                    <Image
                        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
                        alt="Agency culture"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
                <div>
                    <h2 className="section-title mb-8">Our Story</h2>
                    <div className="space-y-6 text-muted font-dm text-[17px] leading-relaxed">
                        <p>
                            Founded in 2023, Converge Digitals emerged from a single observation: the traditional fashion photography model was broken. It was slow, expensive, and environmentally unsustainable.
                        </p>
                        <p>
                            We saw an opportunity to bridge the gap between high-end luxury branding and the frontier of Artificial Intelligence. By training proprietary models on human-led artistic direction, we&apos;ve created a new paradigm for visual content creation.
                        </p>
                        <p>
                            Today, we serve ambitious brands globally, helping them command attention in a crowded digital landscape through a unique mix of strategic depth and technological precision.
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
