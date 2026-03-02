"use client";

import WorkHero from "@/components/sections/work/WorkHero";
import ProjectGrid from "@/components/sections/work/ProjectGrid";

// Note: metadata export must be in a server component or handled via generateMetadata
// For client component pages, we use head tags or move metadata to a separate file

export default function WorkPage() {
    return (
        <>
            <WorkHero />
            <ProjectGrid />
        </>
    );
}
