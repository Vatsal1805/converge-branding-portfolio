"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function CTABanner() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="cta-gradient py-[48px] md:py-[60px] lg:py-[80px] px-[24px] md:px-[40px] lg:px-[80px] text-center relative">
                {/* Dot pattern overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        opacity: 0.15,
                        backgroundImage:
                            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)",
                        backgroundSize: "32px 32px",
                    }}
                />

                <div className="relative z-10 max-w-[800px] mx-auto">
                    <h2 className="font-syne font-extrabold text-[clamp(32px,4vw,64px)] text-white leading-[1.08] mb-4 md:mb-6">
                        Ready to build your brand&apos;s visual empire?
                    </h2>
                    <p className="font-dm font-light text-[16px] md:text-[18px] text-white/75 mb-8">
                        Join the elite. Book a free 30-minute strategy call.
                    </p>
                    <div className="flex justify-center mt-8">
                        <Button variant="cta" href="/contact" className="min-w-[200px] font-syne font-bold text-[15px] px-10 py-4">
                            Book a Free Call
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
