"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProgressBar() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!barRef.current) return;

        const st = ScrollTrigger.create({
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
            animation: gsap.to(barRef.current, {
                scaleX: 1,
                ease: "none",
            }),
        });

        return () => {
            st.kill();
        };
    }, []);

    return (
        <div
            ref={barRef}
            className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left"
            style={{
                background: "linear-gradient(to right, #E84141, #E85D26)",
                transform: "scaleX(0)",
                willChange: "transform",
            }}
        />
    );
}
