"use client";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FAQAccordion from "@/components/ui/FAQAccordion";

const faqs = [
    { question: "What is your typical project timeline?", answer: "Most branding projects take 6-8 weeks. AI photography campaigns can be executed in 2-3 weeks depending on the scope and complexity." },
    { question: "Do you offer standalone AI photography?", answer: "Yes. While we prefer comprehensive brand partnerships, we do offer standalone AI editorial shoots for established luxury brands." },
    { question: "What is the investment required?", answer: "Our complete branding packages start at $15k. AI photography campaigns start at $5k. We tailor bespoke solutions based on your specific strategic needs." },
    { question: "How does the AI process work?", answer: "You provide the product data or reference images. Our art directors conceptualize the scene, and our AI artists generate the environments, lighting, and models, resulting in pixel-perfect editorial imagery." }
];

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <SectionWrapper noPadding className="pb-[120px]">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
                    <div className="w-full">
                        <ContactForm />
                    </div>
                    <div className="w-full">
                        <ContactInfo />
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-secondary/20">
                <div className="mb-12 text-center">
                    <span className="eyebrow">COMMON QUESTIONS</span>
                    <h2 className="section-title">Frequently Asked</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
                    <FAQAccordion items={faqs.slice(0, 2)} />
                    <FAQAccordion items={faqs.slice(2, 4)} />
                </div>
            </SectionWrapper>
        </>
    );
}
