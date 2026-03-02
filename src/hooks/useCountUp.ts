"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useCountUp(
    target: number,
    suffix: string = "",
    duration: number = 1500
) {
    const ref = useRef<HTMLSpanElement>(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        if (!ref.current || triggered) return;

        const trigger = ScrollTrigger.create({
            trigger: ref.current,
            start: "top 80%",
            once: true,
            onEnter: () => {
                setTriggered(true);
                const el = ref.current!;
                const start = performance.now();

                const update = (now: number) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * target).toString();
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        el.textContent = target + suffix;
                    }
                };

                requestAnimationFrame(update);
            },
        });

        return () => {
            trigger.kill();
        };
    }, [target, suffix, duration, triggered]);

    return ref;
}
