"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatCounterProps {
    value: number;
    suffix?: string;
    label: string;
    duration?: number;
}

export default function StatCounter({
    value,
    suffix = "",
    label,
    duration = 1500,
}: StatCounterProps) {
    const numberRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!containerRef.current || hasAnimated) return;

        const trigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
            onEnter: () => {
                if (!numberRef.current) return;
                setHasAnimated(true);
                const el = numberRef.current;
                const start = performance.now();

                const update = (now: number) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * value).toString();
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        el.textContent = value + suffix;
                    }
                };

                requestAnimationFrame(update);
            },
        });

        return () => {
            trigger.kill();
        };
    }, [value, suffix, duration, hasAnimated]);

    return (
        <div ref={containerRef} className="text-center">
            <span
                ref={numberRef}
                className="font-syne font-extrabold text-[48px] text-white block"
            >
                0
            </span>
            <span className="text-[10px] font-dm text-muted tracking-[2px] uppercase mt-1 block">
                {label}
            </span>
        </div>
    );
}
