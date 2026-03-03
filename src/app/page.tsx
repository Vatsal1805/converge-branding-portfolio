"use client";

import Hero from "@/components/sections/home/Hero";
import Marquee from "@/components/ui/Marquee";
import Services from "@/components/sections/home/Services";
import FeaturedWork from "@/components/sections/home/FeaturedWork";
import Testimonials from "@/components/sections/home/Testimonials";
import CTABanner from "@/components/ui/CTABanner";

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Marquee */}
      <Marquee />

      {/* Section 3 — Services */}
      <Services />

      {/* Section 4 — Featured Work */}
      <FeaturedWork />

      {/* Section 5 — Testimonials */}
      <Testimonials />

      {/* Section 6 — CTA Banner */}
      <CTABanner />
    </>
  );
}
