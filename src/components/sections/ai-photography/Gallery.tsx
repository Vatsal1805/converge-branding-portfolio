"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80", alt: "AI Fashion Editorial 1", title: "Ethereal Collection" },
    { src: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=900&q=80", alt: "AI Fashion Editorial 2", title: "Street Couture" },
    { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80", alt: "AI Fashion Editorial 3", title: "Modern Luxe" },
    { src: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&q=80", alt: "AI Fashion Editorial 4", title: "Neo Classic" },
    { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80", alt: "AI Fashion Editorial 5", title: "Avant Garde" },
];

export default function Gallery() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const currentSection = sectionRef.current;
        const currentTrack = trackRef.current;

        if (!currentSection || !currentTrack) return;
        if (window.innerWidth < 1024) return;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        const ctx = gsap.context(() => {
            gsap.to(currentTrack, {
                x: () => -(currentTrack.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: currentSection,
                    start: "top 120px",
                    end: () => "+=" + currentTrack.scrollWidth,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, currentSection);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <>
            {/* Header before pinned section */}
            <SectionWrapper noDivider>
                <div className="mb-0 animate-in">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <span className="eyebrow">THE GALLERY</span>
                            <h2 className="section-title">AI Fashion Gallery</h2>
                        </div>
                        <a href="/work" className="font-dm text-[13px] text-accent uppercase tracking-[2px] hover:text-orange transition-colors">
                            SEE ALL PROJECTS
                        </a>
                    </div>
                </div>
            </SectionWrapper>

            {/* Desktop — Horizontal Scroll */}
            <div className="hidden lg:block">
                <div ref={sectionRef} className="overflow-hidden attach-scroll">
                    <div ref={trackRef} className="flex gap-6 pl-[80px] will-change-transform" style={{ width: "fit-content" }}>
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                className={`relative flex-shrink-0 overflow-hidden rounded-card group ${i === 0 ? "w-[600px] h-[500px]" : i === 4 ? "w-[500px] h-[400px]" : "w-[350px] h-[450px]"
                                    }`}
                                data-cursor="project"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.06]"
                                    sizes="600px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                                    <h3 className="font-syne font-bold text-[20px] text-white">{img.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile & Tablet — Vertical scroll fallback */}
            <div className="lg:hidden px-[24px] md:px-[40px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {galleryImages.map((img, i) => (
                    <div key={i} className="relative overflow-hidden rounded-card h-[280px] lg:h-[320px] group">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                            <h3 className="font-syne font-bold text-[18px] md:text-[20px] text-white">{img.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
