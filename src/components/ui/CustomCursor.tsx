"use client";

import React, { useRef, useEffect, useState } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [cursorText, setCursorText] = useState("");
    const mousePos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const ringSize = useRef(40);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.innerWidth < 768) return;

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isLink = target.closest("a, button, [role='button']");
            const isProjectCard = target.closest("[data-cursor='project']");

            if (isProjectCard) {
                ringSize.current = 80;
                setCursorText("VIEW");
            } else if (isLink) {
                ringSize.current = 60;
                setCursorText("");
            } else {
                ringSize.current = 40;
                setCursorText("");
            }
        };

        const animate = () => {
            const lerp = 0.12;
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

            if (ringRef.current) {
                const size = ringSize.current;
                ringRef.current.style.width = `${size}px`;
                ringRef.current.style.height = `${size}px`;
                ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        const raf = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="hidden md:block fixed top-0 left-0 w-[10px] h-[10px] bg-accent rounded-full pointer-events-none z-[999]"
                style={{ willChange: "transform" }}
            />
            <div
                ref={ringRef}
                className="hidden md:flex fixed top-0 left-0 w-10 h-10 border-[1.5px] border-accent rounded-full pointer-events-none z-[998] items-center justify-center mix-blend-difference transition-[width,height] duration-300"
                style={{ willChange: "transform" }}
            >
                {cursorText && (
                    <span className="text-[10px] uppercase tracking-wider text-white font-dm font-medium">
                        {cursorText}
                    </span>
                )}
            </div>
        </>
    );
}
