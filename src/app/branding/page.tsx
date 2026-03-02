"use client";

import BrandingHero from "@/components/sections/branding/BrandingHero";
import CaseStudies from "@/components/sections/branding/CaseStudies";
import Timeline from "@/components/sections/branding/Timeline";
import Button from "@/components/ui/Button";

export default function BrandingPage() {
    return (
        <>
            <BrandingHero />
            <CaseStudies />
            <Timeline />

            {/* Metrics Small Grid */}
            <section className="py-[60px] border-y border-white/[0.06]">
                <div className="max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <span className="font-syne font-bold text-[32px] text-white block">150+</span>
                            <span className="text-[10px] text-muted tracking-[2px] uppercase">Identities Created</span>
                        </div>
                        <div className="text-center">
                            <span className="font-syne font-bold text-[32px] text-white block">12</span>
                            <span className="text-[10px] text-muted tracking-[2px] uppercase">Award Nominations</span>
                        </div>
                        <div className="text-center">
                            <span className="font-syne font-bold text-[32px] text-white block">48h</span>
                            <span className="text-[10px] text-muted tracking-[2px] uppercase">First Draft TTR</span>
                        </div>
                        <div className="text-center">
                            <span className="font-syne font-bold text-[32px] text-white block">100%</span>
                            <span className="text-[10px] text-muted tracking-[2px] uppercase">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-[60px] text-center">
                <div className="max-w-[800px] mx-auto px-6">
                    <h2 className="section-title mb-8">Ready to define your legacy?</h2>
                    <Button variant="primary" href="/contact">Start Your Rebrand</Button>
                </div>
            </section>
        </>
    );
}
