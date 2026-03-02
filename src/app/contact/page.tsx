"use client";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <SectionWrapper noPadding className="pb-[120px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </SectionWrapper>
        </>
    );
}
