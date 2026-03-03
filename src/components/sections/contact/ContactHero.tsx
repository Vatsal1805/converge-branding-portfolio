"use client";

import React from "react";

export default function ContactHero() {
    return (
        <section className="pt-[140px] pb-[60px] md:pt-[180px] md:pb-[80px]">
            <div className="max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
                <span className="eyebrow mb-6 block">GET IN TOUCH</span>
                <h1 className="font-syne font-extrabold text-[clamp(36px,8vw,90px)] leading-[1.05] tracking-[-2px] md:tracking-[-3px] text-white break-words">
                    Let&apos;s Create <span className="text-accent">Something Extraordinary.</span>
                </h1>
            </div>
        </section>
    );
}
