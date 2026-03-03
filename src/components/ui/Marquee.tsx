"use client";

import React from "react";

const marqueeText =
    "BRANDING • AI PHOTOGRAPHY • VISUAL IDENTITY • FASHION SHOOTS • BRAND STRATEGY • AI SHOOTS • ";

export default function Marquee() {
    return (
        <div className="w-full bg-accent overflow-hidden py-[12px] group">
            {/* Row 1 — scrolls LEFT */}
            <div className="flex whitespace-nowrap animate-marquee-left group-hover:[animation-duration:60s]">
                <span className="font-syne font-bold text-[11px] md:text-[12px] text-white tracking-[3px] uppercase px-2">
                    {marqueeText}
                </span>
                <span className="font-syne font-bold text-[11px] md:text-[12px] text-white tracking-[3px] uppercase px-2">
                    {marqueeText}
                </span>
                <span className="font-syne font-bold text-[11px] md:text-[12px] text-white tracking-[3px] uppercase px-2">
                    {marqueeText}
                </span>
                <span className="font-syne font-bold text-[11px] md:text-[12px] text-white tracking-[3px] uppercase px-2">
                    {marqueeText}
                </span>
            </div>
            {/* Row 2 — scrolls RIGHT */}
            <div className="flex whitespace-nowrap animate-marquee-right group-hover:[animation-duration:60s] mt-2">
                <span className="font-syne font-bold text-[11px] md:text-[12px] text-white tracking-[3px] uppercase px-2">
                    {marqueeText}
                </span>
                <span className="font-syne font-bold text-[11px] md:text-[12px] text-white tracking-[3px] uppercase px-2">
                    {marqueeText}
                </span>
                <span className="font-syne font-bold text-[11px] md:text-[12px] text-white tracking-[3px] uppercase px-2">
                    {marqueeText}
                </span>
                <span className="font-syne font-bold text-[11px] md:text-[12px] text-white tracking-[3px] uppercase px-2">
                    {marqueeText}
                </span>
            </div>
        </div>
    );
}
