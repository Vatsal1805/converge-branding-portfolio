"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export function useLocomotiveScroll() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.innerWidth < 768) return;

        let scrollInstance: LocomotiveScroll | null = null;
        const currentContainer = containerRef.current;

        const initScroll = async () => {
            try {
                const LocScroll = (await import("locomotive-scroll")).default;

                if (!currentContainer) return;

                scrollInstance = new LocScroll({
                    el: currentContainer,
                    smooth: true,
                    multiplier: 0.8,
                    class: "is-revealed",
                });

                // Let GSAP ScrollTrigger know about Locomotive
                const { ScrollTrigger } = await import("gsap/ScrollTrigger");
                const gsap = (await import("gsap")).default;
                gsap.registerPlugin(ScrollTrigger);

                ScrollTrigger.scrollerProxy(currentContainer, {
                    scrollTop(value?: number) {
                        if (scrollInstance) {
                            if (value !== undefined) {
                                scrollInstance.scrollTo(value, { duration: 0, disableLerp: true });
                                return;
                            }
                            return scrollInstance.scroll.instance.scroll.y;
                        }
                        return 0;
                    },
                    getBoundingClientRect() {
                        return {
                            top: 0,
                            left: 0,
                            width: window.innerWidth,
                            height: window.innerHeight,
                        };
                    },
                    pinType: currentContainer.style.transform
                        ? "transform"
                        : "fixed",
                });

                scrollInstance.on("scroll", ScrollTrigger.update);
                ScrollTrigger.addEventListener("refresh", () =>
                    scrollInstance?.update()
                );
                ScrollTrigger.refresh();
            } catch (e) {
                console.warn("Locomotive Scroll failed to initialize:", e);
            }
        };

        initScroll();

        return () => {
            if (scrollInstance) {
                scrollInstance.destroy();
            }
        };
    }, []);

    return containerRef;
}
