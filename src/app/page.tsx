"use client";

import Hero from "@/components/sections/home/Hero";
import Marquee from "@/components/ui/Marquee";
import Services from "@/components/sections/home/Services";
import FeaturedWork from "@/components/sections/home/FeaturedWork";
import Testimonials from "@/components/sections/home/Testimonials";
import Button from "@/components/ui/Button";

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
      <section className="relative w-full overflow-hidden">
        <div
          className="py-[40px] md:py-[50px] px-[24px] md:px-[40px] lg:px-[80px] text-center relative"
          style={{
            background:
              "linear-gradient(-45deg, #C0392B, #E84141, #E85D26, #C0392B)",
            backgroundSize: "400% 400%",
            animation: "gradient-shift 8s ease infinite",
          }}
        >
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-[800px] mx-auto">
            <h2 className="font-syne font-extrabold text-white leading-[1.05] mb-4 md:mb-6"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Ready to build your brand&apos;s visual empire?
            </h2>
            <p className="font-dm font-light text-[16px] md:text-[18px] text-white/75 mb-8 md:mb-10">
              Join the elite. Book a free 30-minute strategy call.
            </p>
            <Button variant="cta" href="/contact">
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
