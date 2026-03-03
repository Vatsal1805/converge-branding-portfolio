"use client";

import React from "react";

export default function ContactInfo() {
    return (
        <div className="space-y-12 animate-in" style={{ animationDelay: "0.2s" }}>
            <div>
                <h3 className="font-syne font-bold text-[14px] text-accent uppercase tracking-widest mb-4">Direct Contact</h3>
                <p className="font-syne font-bold text-[18px] md:text-[24px] text-white group cursor-pointer break-all">
                    hello@convergedigitals.com
                </p>
                <p className="font-dm text-muted mt-2">+91 22 4900 2100</p>
            </div>

            <div>
                <h3 className="font-syne font-bold text-[14px] text-accent uppercase tracking-widest mb-4">Headquarters</h3>
                <p className="font-dm text-[18px] text-white leading-relaxed">
                    Level 5, Creative Park<br />
                    Bandra Kurla Complex<br />
                    Mumbai, 400051
                </p>
            </div>

            <div>
                <h3 className="font-syne font-bold text-[14px] text-accent uppercase tracking-widest mb-4">Social Presence</h3>
                <div className="flex flex-col gap-3">
                    <a href="#" className="font-dm text-muted hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="font-dm text-muted hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="font-dm text-muted hover:text-white transition-colors">Behance</a>
                </div>
            </div>
        </div>
    );
}
