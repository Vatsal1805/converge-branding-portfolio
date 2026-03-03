"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Brand Identity",
        description:
            "Complete visual identity systems and brand guidelines for luxury brands.",
        image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    },
    {
        title: "AI Fashion Photography",
        description:
            "Next-generation shoots powered by AI model training and precision.",
        image:
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
    },
    {
        title: "Visual Direction",
        description:
            "Creative direction for campaigns across all digital and physical touchpoints.",
        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    },
    {
        title: "Brand Collateral",
        description:
            "Premium print and digital assets tailored to your brand's vision.",
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80",
    },
    {
        title: "Product Visual Strategy",
        description:
            "AI-powered product photography and styling for market dominance.",
        image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    },
    {
        title: "Brand Consulting",
        description:
            "Expert positioning, audience strategy and sustainable brand growth.",
        image:
            "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&q=80",
    },
];

export default function Services() {
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentCards = cardsRef.current;
        if (!currentCards) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        const cards = currentCards.querySelectorAll(".service-card");

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
            <div className="mb-12 animate-in">
                <span className="eyebrow">WHAT WE DO</span>
                <h2 className="section-title">Services That Set Brands Apart</h2>
            </div>

            <div
                ref={cardsRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="service-card card-base p-0 flex flex-col min-h-[280px] lg:min-h-[320px] max-h-[420px]"
                        data-magnetic
                    >
                        <div className="relative h-[180px] lg:h-[220px] overflow-hidden rounded-t-card">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                        <div className="p-[20px] lg:p-[32px] flex-1">
                            <h3 className="font-syne font-bold text-[20px] text-textWhite mb-3">
                                {service.title}
                            </h3>
                            <p className="font-dm font-light text-[15px] text-muted leading-[1.7]">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
