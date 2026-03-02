"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        name: "Zupitar Fashion",
        category: "Editorial",
        image:
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    },
    {
        name: "Nexora Wear",
        category: "AI Creative",
        image:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    },
    {
        name: "LuxLabel Co",
        category: "Branding",
        image:
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    },
    {
        name: "Aether Style",
        category: "Campaigns",
        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
        name: "Vogue AI",
        category: "AI Fashion",
        image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    },
    {
        name: "Ethereal Silk",
        category: "Luxe Design",
        image:
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    },
];

export default function FeaturedWork() {
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentCards = cardsRef.current;
        if (!currentCards) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        const cards = currentCards.querySelectorAll(".project-card");

        gsap.fromTo(
            cards,
            { opacity: 0, y: 80, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: currentCards,
                    start: "top 80%",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => {
                if (t.trigger === currentCards) t.kill();
            });
        };
    }, []);

    return (
        <SectionWrapper>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4 animate-in">
                <div>
                    <span className="eyebrow">FEATURED PROJECTS</span>
                    <h2 className="section-title">Work That Speaks</h2>
                </div>
                <Button variant="ghost" href="/work">
                    Explore All Work →
                </Button>
            </div>

            <div
                ref={cardsRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="project-card group relative overflow-hidden rounded-card h-[280px] md:h-[320px] lg:h-[360px] max-h-[380px] border border-white/[0.07]"
                        data-cursor="project"
                        data-magnetic
                    >
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/95" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span className="text-accent text-[10px] uppercase tracking-[2px] font-dm font-medium">
                                {project.category}
                            </span>
                            <h3 className="font-syne font-bold text-[22px] text-white mt-1">
                                {project.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
