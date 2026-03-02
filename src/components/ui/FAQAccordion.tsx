"use client";

import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="border border-white/[0.07] rounded-card overflow-hidden transition-colors duration-300 hover:border-white/[0.12]"
                >
                    <button
                        className="w-full flex items-center justify-between px-6 py-5 text-left"
                        onClick={() => toggle(i)}
                    >
                        <span className="font-syne font-semibold text-[17px] text-textWhite pr-4">
                            {item.question}
                        </span>
                        <span
                            className={`flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""
                                }`}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            >
                                <line x1="7" y1="0" x2="7" y2="14" />
                                <line x1="0" y1="7" x2="14" y2="7" />
                            </svg>
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p className="px-6 pb-5 text-[15px] font-dm font-light text-muted leading-[1.7]">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
