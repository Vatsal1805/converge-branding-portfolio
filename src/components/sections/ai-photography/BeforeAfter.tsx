"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function BeforeAfter() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [sliderPos, setSliderPos] = useState(50);
    const isDragging = useRef(false);

    const updateSlider = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(percent);
    }, []);

    const handleMouseDown = () => { isDragging.current = true; };
    const handleMouseUp = () => { isDragging.current = false; };
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging.current) updateSlider(e.clientX);
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        updateSlider(e.touches[0].clientX);
    };

    return (
        <SectionWrapper>
            <div className="text-center mb-12 animate-in">
                <span className="eyebrow">BEFORE & AFTER</span>
                <h2 className="section-title">Raw To Refined</h2>
                <p className="section-subtitle mx-auto text-center">
                    Witness the precision of our high-fidelity AI upscaling.
                </p>
            </div>

            <div
                ref={containerRef}
                className="relative aspect-video max-w-[900px] mx-auto rounded-xl overflow-hidden border border-white/[0.07] select-none"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
            >
                {/* After (full image) */}
                <Image
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80"
                    alt="AI Enhanced"
                    fill
                    className="object-cover"
                    sizes="900px"
                />

                {/* Before (clipped) */}
                <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80"
                        alt="Original raw"
                        fill
                        className="object-cover grayscale brightness-75"
                        sizes="900px"
                    />
                </div>

                {/* Slider line */}
                <div
                    className="absolute top-0 bottom-0 w-[2px] bg-accent z-10"
                    style={{ left: `${sliderPos}%` }}
                />

                {/* Draggable handle */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent border-2 border-white flex items-center justify-center z-20"
                    style={{ left: `${sliderPos}%`, cursor: "ew-resize" }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                        <path d="M5 3l-4 5 4 5M11 3l4 5-4 5" stroke="white" strokeWidth="1.5" fill="none" />
                    </svg>
                </div>

                {/* Labels */}
                <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded-full z-10">
                    <span className="text-[11px] font-dm font-medium text-white uppercase tracking-wider">RAW</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-accent px-3 py-1 rounded-full z-10">
                    <span className="text-[11px] font-dm font-medium text-white uppercase tracking-wider">CONVERGE AI</span>
                </div>
            </div>
        </SectionWrapper>
    );
}
