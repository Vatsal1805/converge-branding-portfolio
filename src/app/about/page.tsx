"use client";

import AboutHero from "@/components/sections/about/AboutHero";
import Story from "@/components/sections/about/Story";
import Studio from "@/components/sections/about/Studio";
import Philosophy from "@/components/sections/about/Philosophy";
import Values from "@/components/sections/about/Values";
import Button from "@/components/ui/Button";

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <Story />
            <Studio />
            <Philosophy />
            <Values />

            {/* CTA Section */}
            <section className="py-[60px] text-center">
                <div className="max-w-[700px] mx-auto px-6">
                    <h2 className="section-title mb-8">Let&apos;s write your brand&apos;s next chapter together.</h2>
                    <Button variant="primary" href="/contact">Apply to Work With Us</Button>
                </div>
            </section>
        </>
    );
}
