"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    noPadding?: boolean;
    noMaxWidth?: boolean;
    noDivider?: boolean;
    fullBleed?: boolean;
}

export default function SectionWrapper({
    children,
    className = "",
    id,
    noPadding = false,
    noMaxWidth = false,
    noDivider = false,
    fullBleed = false,
}: SectionWrapperProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentSection = sectionRef.current;
        const currentDivider = dividerRef.current;

        if (!currentSection) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;

        // Section entrance animation (Effect 3)
        const isMobile = window.innerWidth < 768;
        const elements = currentSection.querySelectorAll(".animate-in");
        elements.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: isMobile ? 30 : 60, scale: 0.97 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: isMobile ? 0.6 : 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        // Section divider line draw (Effect 10)
        if (currentDivider) {
            gsap.fromTo(
                currentDivider,
                { scaleX: 0, transformOrigin: "left" },
                {
                    scaleX: 1,
                    duration: 1.2,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: currentDivider,
                        start: "top 90%",
                    },
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach((t) => {
                if (
                    t.trigger &&
                    (currentSection.contains(t.trigger as Node) ||
                        t.trigger === currentDivider)
                ) {
                    t.kill();
                }
            });
        };
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                id={id}
                className={`
          ${noPadding
                        ? ""
                        : "py-[60px] md:py-[80px] lg:py-[120px]"
                    }
          ${fullBleed ? "" : ""}
          ${className}
        `}
            >
                <div
                    className={`
            ${noMaxWidth
                            ? ""
                            : "max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px]"
                        }
          `}
                >
                    {children}
                </div>
            </section>
            {!noDivider && (
                <div
                    ref={dividerRef}
                    className="section-divider mx-[24px] md:mx-[40px] lg:mx-[80px]"
                />
            )}
        </>
    );
}
