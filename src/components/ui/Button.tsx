"use client";

import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "ghost" | "cta";

interface ButtonProps {
    variant?: ButtonVariant;
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit";
    disabled?: boolean;
    fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-accent text-white hover:bg-orange hover:translate-y-[-3px] hover:shadow-[0_20px_40px_rgba(232,65,65,0.3)]",
    ghost:
        "bg-transparent border border-white/25 text-white hover:border-white hover:bg-white/5",
    cta:
        "bg-white text-accent hover:scale-[1.03] hover:shadow-xl",
};

export default function Button({
    variant = "primary",
    children,
    href,
    onClick,
    className = "",
    type = "button",
    disabled = false,
    fullWidth = false,
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-full px-8 py-[14px] text-[13px] font-medium tracking-wide uppercase transition-all duration-300 ease-out font-dm whitespace-nowrap";

    const classes = `${baseStyles} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
            {children}
        </button>
    );
}
