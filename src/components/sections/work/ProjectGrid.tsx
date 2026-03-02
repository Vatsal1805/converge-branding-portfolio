"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const allProjects = [
    { name: "Zupitar Fashion", category: "Branding", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80" },
    { name: "Nexora Wear", category: "AI Photography", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" },
    { name: "LuxLabel Co", category: "Campaigns", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80" },
    { name: "Aether Style", category: "Branding", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
    { name: "Vogue AI", category: "AI Photography", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" },
    { name: "Ethereal Silk", category: "Campaigns", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80" },
    { name: "Nova Brand", category: "Branding", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80" },
    { name: "Chrome Collective", category: "AI Photography", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80" },
    { name: "Velvet Noir", category: "Campaigns", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80" },
];

const filters = ["All", "Branding", "AI Photography", "Campaigns"];

export default function ProjectGrid() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const filtered = activeFilter === "All"
        ? allProjects
        : allProjects.filter((p) => p.category === activeFilter);

    const visible = filtered.slice(0, visibleCount);

    // Sliding tab indicator
    useEffect(() => {
        if (!tabsRef.current || !indicatorRef.current) return;
        const activeTab = tabsRef.current.querySelector(`[data-filter="${activeFilter}"]`) as HTMLElement;
        if (!activeTab) return;

        gsap.to(indicatorRef.current, {
            x: activeTab.offsetLeft,
            width: activeTab.offsetWidth,
            duration: 0.4,
            ease: "power2.out",
        });
    }, [activeFilter]);

    // Animate cards on filter change
    useEffect(() => {
        if (!gridRef.current) return;
        const cards = gridRef.current.querySelectorAll(".project-card");

        gsap.fromTo(
            cards,
            { opacity: 0, y: 40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: "power3.out" }
        );
    }, [activeFilter, visibleCount]);

    const handleFilter = (filter: string) => {
        setActiveFilter(filter);
        setVisibleCount(6);
    };

    return (
        <section className="pb-[60px] md:pb-[80px] lg:pb-[120px]">
            <div className="max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
                {/* Filter Tabs */}
                <div className="flex justify-center mb-12">
                    <div
                        ref={tabsRef}
                        className="relative inline-flex bg-secondary rounded-full p-1 border border-white/[0.07]"
                    >
                        <div
                            ref={indicatorRef}
                            className="absolute top-1 left-0 h-[calc(100%-8px)] bg-accent rounded-full transition-none"
                            style={{ width: 0 }}
                        />
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                data-filter={filter}
                                onClick={() => handleFilter(filter)}
                                className={`relative z-10 px-5 py-2 text-[12px] uppercase tracking-[2px] font-dm font-medium rounded-full transition-colors duration-300 whitespace-nowrap ${activeFilter === filter ? "text-white" : "text-muted hover:text-white"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visible.map((project, i) => (
                        <div
                            key={`${project.name}-${i}`}
                            className="project-card group relative overflow-hidden rounded-card h-[280px] md:h-[320px] lg:h-[360px] max-h-[380px] border border-white/[0.07]"
                            data-cursor="project"
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
                                <p className="font-dm font-light text-[13px] text-muted mt-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                                    View project details →
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                {visibleCount < filtered.length && (
                    <div className="flex justify-center mt-12">
                        <Button variant="ghost" onClick={() => setVisibleCount((c) => c + 3)}>
                            Load More
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
