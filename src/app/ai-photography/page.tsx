"use client";

import AIHero from "@/components/sections/ai-photography/AIHero";
import Process from "@/components/sections/ai-photography/Process";
import Gallery from "@/components/sections/ai-photography/Gallery";
import BeforeAfter from "@/components/sections/ai-photography/BeforeAfter";
import ComparisonTable from "@/components/sections/ai-photography/ComparisonTable";
import Button from "@/components/ui/Button";

export default function AIPhotographyPage() {
    return (
        <>
            <AIHero />
            <Process />
            <Gallery />
            <BeforeAfter />
            <ComparisonTable />

            {/* CTA Banner */}
            <section className="relative w-full overflow-hidden">
                <div
                    className="py-[100px] px-[24px] md:px-[40px] lg:px-[80px] text-center relative"
                    style={{
                        background: "linear-gradient(-45deg, #C0392B, #E84141, #E85D26, #C0392B)",
                        backgroundSize: "400% 400%",
                        animation: "gradient-shift 8s ease infinite",
                    }}
                >
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                    <div className="relative z-10 max-w-[800px] mx-auto">
                        <h2 className="font-syne font-extrabold text-white leading-[1.05] mb-6" style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
                            Ready to transform your brand&apos;s photography?
                        </h2>
                        <p className="font-dm font-light text-[18px] text-white/75 mb-10">
                            Join the elite. Book a free 30-minute strategy call.
                        </p>
                        <Button variant="cta" href="/contact">Book a Free Call</Button>
                    </div>
                </div>
            </section>
        </>
    );
}
