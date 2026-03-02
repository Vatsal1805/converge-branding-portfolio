"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export function useMagneticHover() {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const card = (e.currentTarget as HTMLElement);
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (y / rect.height) * -8;
        const rotateY = (x / rect.width) * 8;

        gsap.to(card, {
            rotateX,
            rotateY,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 1000,
        });
    }, []);

    const handleMouseLeave = useCallback((e: MouseEvent) => {
        const card = (e.currentTarget as HTMLElement);
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
        });
    }, []);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;
        if (window.innerWidth < 768) return;

        const cards = container.querySelectorAll("[data-magnetic]");

        cards.forEach((card) => {
            (card as HTMLElement).addEventListener("mousemove", handleMouseMove as EventListener);
            (card as HTMLElement).addEventListener("mouseleave", handleMouseLeave as EventListener);
        });

        return () => {
            cards.forEach((card) => {
                (card as HTMLElement).removeEventListener("mousemove", handleMouseMove as EventListener);
                (card as HTMLElement).removeEventListener("mouseleave", handleMouseLeave as EventListener);
            });
        };
    }, [handleMouseMove, handleMouseLeave]);

    return ref;
}
