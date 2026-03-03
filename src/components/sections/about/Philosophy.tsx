import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Philosophy() {
    return (
        <SectionWrapper className="bg-secondary/20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                <div className="w-full lg:w-1/3 text-left">
                    <span className="eyebrow block mb-4">OUR PHILOSOPHY</span>
                    <h2 className="font-syne font-bold text-[36px] lg:text-[48px] text-white leading-[1.1] tracking-[-1px]">
                        The New Standard of Visuals.
                    </h2>
                </div>
                <div className="w-full lg:w-2/3 space-y-6 text-left">
                    <p className="font-dm text-muted text-[16px] lg:text-[18px] leading-relaxed">
                        We reject the notion that artificial intelligence removes the soul from art. When wielded by world-class art directors, AI becomes the most powerful brush ever invented. It doesn&apos;t replace vision; it amplifies it without the logistical bounds of physical production.
                    </p>
                    <p className="font-dm text-muted text-[16px] lg:text-[18px] leading-relaxed">
                        Our philosophy is deeply rooted in cinematic composition, luxury minimalism, and editorial storytelling. Every detail—from the way light spills across a garment to the tension in a brand&apos;s typography—is meticulously crafted to evoke an emotional response and elevate brand perception.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
