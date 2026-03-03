"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
    stagger?: number;
    selector?: string;
    y?: number;
}

export function useScrollReveal({
    stagger = 0.1,
    selector = ".animate-in",
    y = 60,
}: ScrollRevealOptions = {}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        const items = element.querySelectorAll(selector);
        if (!items.length) return;

        const isMobile = window.innerWidth < 768;
        const actualY = isMobile ? Math.min(y, 30) : y;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                items,
                { opacity: 0, y: actualY, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: isMobile ? 0.6 : 1,
                    stagger: stagger,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        return () => {
            ctx.revert();
        };
    }, [selector, stagger, y]);

    return containerRef;
}
