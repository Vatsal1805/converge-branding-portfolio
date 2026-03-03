import React from "react";
import Link from "next/link";

const services = [
    "Brand Identity",
    "AI Fashion Photography",
    "Visual Direction",
    "Brand Collateral",
    "Product Visual Strategy",
    "Brand Consulting",
];

const company = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Process", href: "/branding" },
];

const connect = [
    { label: "Instagram", href: "https://instagram.com/convergedigitals" },
    { label: "LinkedIn", href: "https://linkedin.com/company/convergedigitals" },
    { label: "Twitter / X", href: "https://x.com/convergedigitals" },
    { label: "Behance", href: "https://behance.net/convergedigitals" },
];

function SocialIcon({
    type,
    href,
}: {
    type: "instagram" | "linkedin" | "twitter" | "behance";
    href: string;
}) {
    const icons: Record<string, React.ReactNode> = {
        instagram: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
        ),
        linkedin: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        twitter: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        behance: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
            </svg>
        ),
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-accent hover:text-accent"
            aria-label={type}
        >
            {icons[type]}
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] border-t border-white/[0.08]">
            <div className="max-w-content mx-auto px-[24px] md:px-[40px] lg:px-[80px] pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[40px]">
                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Col 1: Logo + Tagline + Social */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="font-syne font-extrabold text-[22px] text-white">
                                Converge<span className="text-accent">.</span>
                            </span>
                        </Link>
                        <p className="text-[14px] text-muted font-dm font-light leading-relaxed">
                            A cinematic luxury agency bridging branding and AI photography.
                        </p>
                        <div className="flex gap-3">
                            <SocialIcon type="instagram" href="https://instagram.com/convergedigitals" />
                            <SocialIcon type="linkedin" href="https://linkedin.com/company/convergedigitals" />
                            <SocialIcon type="twitter" href="https://x.com/convergedigitals" />
                            <SocialIcon type="behance" href="https://behance.net/convergedigitals" />
                        </div>
                    </div>

                    {/* Col 2: Services */}
                    <div>
                        <h4 className="eyebrow mb-6 !text-white/40">SERVICES</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-[14px] text-muted font-dm font-light hover:text-white transition-colors cursor-default">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Company */}
                    <div>
                        <h4 className="eyebrow mb-6 !text-white/40">COMPANY</h4>
                        <ul className="space-y-3">
                            {company.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-[14px] text-muted font-dm font-light hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Connect */}
                    <div>
                        <h4 className="eyebrow mb-6 !text-white/40">CONNECT</h4>
                        <ul className="space-y-3">
                            {connect.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[14px] text-muted font-dm font-light hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] font-dm text-muted">
                        © 2025 Converge Digitals. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <span className="text-[11px] font-dm text-muted hover:text-white transition-colors cursor-pointer">
                            Privacy Policy
                        </span>
                        <span className="text-[11px] font-dm text-muted">·</span>
                        <span className="text-[11px] font-dm text-muted hover:text-white transition-colors cursor-pointer">
                            Terms of Service
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
