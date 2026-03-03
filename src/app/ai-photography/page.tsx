"use client";

import AIHero from "@/components/sections/ai-photography/AIHero";
import Process from "@/components/sections/ai-photography/Process";
import Gallery from "@/components/sections/ai-photography/Gallery";
import BeforeAfter from "@/components/sections/ai-photography/BeforeAfter";
import ComparisonTable from "@/components/sections/ai-photography/ComparisonTable";
import CTABanner from "@/components/ui/CTABanner";

export default function AIPhotographyPage() {
    return (
        <>
            <AIHero />
            <Process />
            <Gallery />
            <BeforeAfter />
            <ComparisonTable />
            <CTABanner />
        </>
    );
}
