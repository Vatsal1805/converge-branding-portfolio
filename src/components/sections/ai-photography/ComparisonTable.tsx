"use client";

import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const rows = [
    { metric: "Production Time", traditional: "4-8 Weeks", converge: "1-2 Weeks" },
    { metric: "Budget Required", traditional: "₹25K-₹100K+", converge: "₹5K-₹45K" },
    { metric: "Locations", traditional: "Limited Travel", converge: "Unlimited Global" },
    { metric: "Model Casting", traditional: "Physical Sessions", converge: "AI Synthesized" },
    { metric: "Scalability", traditional: "Fixed Count", converge: "On-Demand Infinity" },
];

export default function ComparisonTable() {
    return (
        <SectionWrapper>
            <div className="text-center mb-12 animate-in">
                <span className="eyebrow">WHY AI</span>
                <h2 className="section-title">Traditional Shoot VS Converge AI</h2>
            </div>

            <div className="max-w-[900px] mx-auto overflow-x-auto animate-in">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="text-left py-4 px-4 md:px-6 font-syne font-bold text-[14px] text-muted uppercase tracking-wider border-b border-white/10">
                                Key Metrics
                            </th>
                            <th className="text-left py-4 px-4 md:px-6 font-syne font-bold text-[14px] text-muted uppercase tracking-wider border-b border-white/10 bg-white/[0.04]">
                                Traditional Shoot
                            </th>
                            <th className="text-left py-4 px-4 md:px-6 font-syne font-bold text-[14px] text-accent uppercase tracking-wider border-b border-white/10 bg-accent/[0.08]">
                                Converge AI
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i} className="border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors">
                                <td className="py-4 px-4 md:px-6 font-dm text-[15px] text-textWhite font-medium">
                                    {row.metric}
                                </td>
                                <td className="py-4 px-4 md:px-6 font-dm text-[15px] text-muted bg-white/[0.04]">
                                    <span className="text-red-400 mr-2">✗</span>
                                    {row.traditional}
                                </td>
                                <td className="py-4 px-4 md:px-6 font-dm text-[15px] text-textWhite bg-accent/[0.08]">
                                    <span className="text-green-400 mr-2">✓</span>
                                    {row.converge}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </SectionWrapper>
    );
}
