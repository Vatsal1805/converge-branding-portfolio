"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => setStatus("success"), 2000);
    };

    if (status === "success") {
        return (
            <div className="p-12 bg-secondary/20 rounded-card border border-accent/30 text-center animate-in">
                <h3 className="font-syne font-bold text-[32px] text-white mb-4">Message Sent.</h3>
                <p className="font-dm text-muted">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="mt-8 text-accent font-dm text-[14px] uppercase tracking-wider hover:text-white transition-colors">
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 animate-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-dm font-bold text-muted uppercase tracking-widest ml-1">Full Name</label>
                    <input
                        required
                        type="text"
                        className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors font-dm"
                        placeholder="John Doe"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-dm font-bold text-muted uppercase tracking-widest ml-1">Email Address</label>
                    <input
                        required
                        type="email"
                        className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors font-dm"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-[11px] font-dm font-bold text-muted uppercase tracking-widest ml-1">Service Required</label>
                <select className="bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors font-dm appearance-none">
                    <option>Luxury Branding</option>
                    <option>AI Fashion Photography</option>
                    <option>Visual Identity</option>
                    <option>Brand Consultation</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-[11px] font-dm font-bold text-muted uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                    required
                    rows={5}
                    className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors font-dm resize-none"
                    placeholder="Tell us about your project..."
                />
            </div>

            <Button type="submit" variant="primary" fullWidth disabled={status === "loading"}>
                {status === "loading" ? "Processing..." : "Submit Inquiry"}
            </Button>
        </form>
    );
}
