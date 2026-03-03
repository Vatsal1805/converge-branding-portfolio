import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const capabilities = [
    "Brand Strategy & Architecture",
    "Visual Identity Systems",
    "AI Fashion Photography",
    "Creative Direction",
    "Digital Campaign Production",
    "Motion & 3D Interactive"
];

export default function Studio() {
    return (
        <SectionWrapper>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                <div className="w-full lg:w-1/3 text-left">
                    <span className="eyebrow block mb-4">THE STUDIO</span>
                    <h2 className="font-syne font-bold text-[36px] lg:text-[48px] text-white leading-[1.1] tracking-[-1px]">
                        Where Strategy Meets AI Innovation.
                    </h2>
                </div>
                <div className="w-full lg:w-2/3">
                    <p className="font-dm text-muted text-[16px] lg:text-[18px] leading-relaxed mb-10 max-w-2xl text-left">
                        Our studio operates at the bleeding edge of technology and high-end design. We believe that true luxury requires an uncompromising dedication to visual excellence. By pairing human creative genius with proprietary artificial intelligence models, we deliver work that feels timeless yet entirely unprecedented.
                    </p>

                    <h3 className="font-syne font-bold text-[18px] text-white mb-6 uppercase tracking-wider text-left">Capabilities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {capabilities.map((cap, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                                <span className="font-dm text-muted text-[15px]">{cap}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
