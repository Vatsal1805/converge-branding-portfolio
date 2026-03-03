"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project, getNextProject } from "@/data/projects";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StatCounter from "@/components/ui/StatCounter";
import CTABanner from "@/components/ui/CTABanner";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────── PROJECT HERO ─────────────────── */
function ProjectHero({ project }: { project: Project }) {
    const nameRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!nameRef.current) return;
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        gsap.fromTo(
            nameRef.current,
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power4.inOut", delay: 0.3 }
        );
    }, []);

    return (
        <section className="relative h-screen flex items-end overflow-hidden -mt-[80px]">
            {/* BG */}
            <div className="absolute inset-0">
                <Image
                    src={project.heroImage}
                    alt={project.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.65)" }} />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px] pb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div>
                    <span className="inline-block bg-accent text-white text-[10px] font-dm font-bold uppercase tracking-[2px] px-3 py-1 rounded-full mb-4">
                        {project.category}
                    </span>
                    <h1
                        ref={nameRef}
                        className="font-syne font-extrabold text-[clamp(40px,8vw,100px)] leading-[0.95] tracking-[-3px] text-white mb-3"
                        style={{ clipPath: "inset(0 100% 0 0)" }}
                    >
                        {project.name}
                    </h1>
                    <p className="font-dm font-light text-[18px] text-white/60">{project.tagline}</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center lg:justify-end">
                    {project.services.map((s) => (
                        <span key={s} className="text-[11px] font-dm text-white/70 border border-white/20 rounded-full px-3 py-1 whitespace-nowrap">
                            {s}
                        </span>
                    ))}
                    <span className="text-[11px] font-dm text-accent border border-accent/40 rounded-full px-3 py-1">{project.year}</span>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
                <span className="text-[10px] font-dm text-white/60 uppercase tracking-[3px]">Scroll</span>
                <div className="w-[1px] h-8 bg-white/30 animate-pulse" />
            </div>
        </section>
    );
}

/* ─────────────────── PROJECT OVERVIEW ─────────────────── */
function ProjectOverview({ project }: { project: Project }) {
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!imgRef.current) return;
        if (window.innerWidth < 768) return;
        gsap.fromTo(
            imgRef.current,
            { clipPath: "inset(100% 0 0 0)" },
            {
                clipPath: "inset(0% 0 0 0)",
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: imgRef.current, start: "top 80%" },
            }
        );
    }, []);

    return (
        <SectionWrapper>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                <div ref={imgRef} className="w-full lg:w-[55%]">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/[0.05]">
                        <Image src={project.galleryImages[0]} alt={project.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
                    </div>
                </div>
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                    <span className="eyebrow mb-4">ABOUT THE PROJECT</span>
                    <p className="font-dm font-light text-[17px] text-muted leading-relaxed mb-8">{project.description}</p>
                    <div className="w-full h-[1px] bg-white/[0.06] mb-8" />
                    <h4 className="font-syne font-bold text-[14px] text-white uppercase tracking-wider mb-4">Services</h4>
                    <ul className="space-y-3 mb-8">
                        {project.services.map((s) => (
                            <li key={s} className="flex items-center gap-3 font-dm text-[15px] text-muted">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                                {s}
                            </li>
                        ))}
                    </ul>
                    <Button variant="primary" href="/contact">Book a Similar Project →</Button>
                </div>
            </div>
        </SectionWrapper>
    );
}

/* ─────────────────── PROJECT RESULTS ─────────────────── */
function ProjectResults({ project }: { project: Project }) {
    return (
        <SectionWrapper className="bg-secondary/20">
            <div className="mb-12">
                <span className="eyebrow">THE IMPACT</span>
                <h2 className="section-title">Results That Speak</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.metrics.map((m, i) => (
                    <div key={i} className="card-base p-10 text-center group hover:border-accent/30 transition-colors duration-300">
                        <StatCounter value={parseInt(m.value)} suffix={m.suffix} label={m.label} />
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}

/* ─────────────────── GALLERY + LIGHTBOX ─────────────────── */
function ProjectGallery({ project }: { project: Project }) {
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!galleryRef.current) return;
        const imgs = galleryRef.current.querySelectorAll(".gallery-img");
        imgs.forEach((img) => {
            gsap.fromTo(
                img,
                { clipPath: "inset(100% 0 0 0)", opacity: 0 },
                {
                    clipPath: "inset(0% 0 0 0)",
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: { trigger: img, start: "top 85%" },
                }
            );
        });
    }, []);

    const closeLightbox = useCallback(() => setLightboxIdx(null), []);

    useEffect(() => {
        if (lightboxIdx === null) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") setLightboxIdx((prev) => (prev !== null ? (prev + 1) % project.galleryImages.length : null));
            if (e.key === "ArrowLeft") setLightboxIdx((prev) => (prev !== null ? (prev - 1 + project.galleryImages.length) % project.galleryImages.length : null));
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [lightboxIdx, project.galleryImages.length, closeLightbox]);

    return (
        <SectionWrapper>
            <div className="mb-12">
                <span className="eyebrow">PROJECT GALLERY</span>
                <h2 className="section-title">Visual Showcase</h2>
            </div>

            <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.galleryImages.map((img, i) => (
                    <div
                        key={i}
                        className={`gallery-img relative overflow-hidden rounded-card cursor-pointer group border border-white/[0.05] ${i === 0 || i === 3 ? "h-[320px] md:h-[400px]" : "h-[260px] md:h-[300px]"}`}
                        onClick={() => setLightboxIdx(i)}
                    >
                        <Image
                            src={img}
                            alt={`${project.name} gallery ${i + 1}`}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.04]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {lightboxIdx !== null && (
                <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white text-[28px] font-light z-10 w-10 h-10 flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        ✕
                    </button>
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-[32px] z-10 w-12 h-12 flex items-center justify-center"
                        onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + project.galleryImages.length) % project.galleryImages.length); }}
                    >
                        ‹
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-[32px] z-10 w-12 h-12 flex items-center justify-center"
                        onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % project.galleryImages.length); }}
                    >
                        ›
                    </button>
                    <div className="relative w-[90vw] h-[80vh] max-w-[1200px]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={project.galleryImages[lightboxIdx]}
                            alt={`${project.name} gallery full`}
                            fill
                            className="object-contain"
                            sizes="90vw"
                        />
                    </div>
                </div>
            )}
        </SectionWrapper>
    );
}

/* ─────────────────── PROJECT PROCESS ─────────────────── */
function ProjectProcess({ project }: { project: Project }) {
    return (
        <SectionWrapper className="bg-secondary/20">
            <div className="mb-12">
                <span className="eyebrow">OUR APPROACH</span>
                <h2 className="section-title">How We Did It</h2>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Dashed connecting line (desktop) */}
                <div className="hidden md:block absolute top-[40px] left-[16.67%] right-[16.67%] h-[1px] border-t border-dashed border-white/10 z-0" />

                {project.process.map((step, i) => (
                    <div key={i} className="relative z-10 text-center group">
                        <div className="w-[64px] h-[64px] mx-auto mb-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <span className="font-syne font-extrabold text-[20px] text-accent">{step.number}</span>
                        </div>
                        <h3 className="font-syne font-bold text-[20px] text-white mb-3 uppercase tracking-wide">{step.title}</h3>
                        <p className="font-dm font-light text-[15px] text-muted leading-relaxed max-w-[320px] mx-auto">{step.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}

/* ─────────────────── NEXT PROJECT ─────────────────── */
function NextProjectCard({ project }: { project: Project }) {
    const next = getNextProject(project.slug);
    if (!next) return null;

    return (
        <section className="py-[60px] md:py-[80px] lg:py-[120px]">
            <div className="max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
                <Link href={`/work/${next.slug}`} className="block group">
                    <div className="relative overflow-hidden rounded-card h-[300px] md:h-[400px] border border-white/[0.07]">
                        <Image
                            src={next.heroImage}
                            alt={next.name}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-[0.6] brightness-[0.35]"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-8 md:px-16">
                            <div className="text-center lg:text-left">
                                <span className="text-accent text-[11px] font-dm font-bold uppercase tracking-[3px] block mb-3">NEXT PROJECT</span>
                                <h2 className="font-syne font-extrabold text-[clamp(32px,6vw,64px)] text-white leading-[1] tracking-[-2px] mb-2">{next.name}</h2>
                                <span className="inline-block text-[11px] font-dm text-white/50 border border-white/20 rounded-full px-3 py-1">{next.category}</span>
                            </div>
                            <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full border border-white/20 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 mt-6 lg:mt-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}

/* ─────────────────── MAIN PAGE COMPONENT ─────────────────── */
export default function ProjectPageClient({ project }: { project: Project }) {
    return (
        <>
            <ProjectHero project={project} />
            <ProjectOverview project={project} />
            <ProjectResults project={project} />
            <ProjectGallery project={project} />
            <ProjectProcess project={project} />
            <NextProjectCard project={project} />
            <CTABanner />
        </>
    );
}
