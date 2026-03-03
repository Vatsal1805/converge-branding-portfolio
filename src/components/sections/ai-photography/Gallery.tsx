"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const aiProjects = projects.filter((p) => p.category === "AI Photography");

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
                        {aiProjects.map((project, i) => (
                            <Link
                                key={project.slug}
                                href={`/work/${project.slug}`}
                                className={`relative flex-shrink-0 overflow-hidden rounded-card group block ${i === 0 ? "w-[600px] h-[500px]" : i === aiProjects.length - 1 ? "w-[500px] h-[400px]" : "w-[350px] h-[450px]"
                                    }`}
                                data-cursor="project"
                            >
                                <Image
                                    src={project.heroImage}
                                    alt={project.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.06]"
                                    sizes="600px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                                    <h3 className="font-syne font-bold text-[20px] text-white">{project.name}</h3>
                                    <p className="font-dm text-[13px] text-white/70 mt-1">{project.tagline}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile & Tablet — Vertical scroll fallback */}
            <div className="lg:hidden px-[24px] md:px-[40px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {aiProjects.map((project) => (
                    <Link key={project.slug} href={`/work/${project.slug}`} className="relative overflow-hidden rounded-card h-[280px] lg:h-[320px] group block">
                        <Image src={project.heroImage} alt={project.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                            <h3 className="font-syne font-bold text-[18px] md:text-[20px] text-white">{project.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
