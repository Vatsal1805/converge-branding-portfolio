export interface ProjectMetric {
    value: string;
    suffix: string;
    label: string;
}

export interface ProjectProcess {
    number: string;
    title: string;
    description: string;
}

export interface Project {
    slug: string;
    name: string;
    category: string;
    year: string;
    tagline: string;
    description: string;
    heroImage: string;
    galleryImages: string[];
    services: string[];
    metrics: ProjectMetric[];
    process: ProjectProcess[];
    nextProject: string;
}

export const projects: Project[] = [
    {
        slug: "zupitar-fashion",
        name: "Zupitar Fashion",
        category: "Branding",
        year: "2024",
        tagline: "Redefining luxury streetwear identity",
        description: "Zupitar Fashion came to us as a fledgling streetwear label with bold ambitions but no visual cohesion. We architected an end-to-end brand identity—from wordmark to packaging—that positioned them as the definitive voice of luxury street culture. The result was a brand that commands shelf space and social feeds in equal measure.",
        heroImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80",
            "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80",
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80",
            "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&q=80",
        ],
        services: ["Brand Identity", "Visual Direction", "Brand Collateral"],
        metrics: [
            { value: "45", suffix: "%", label: "Brand Recall" },
            { value: "2400", suffix: "+", label: "New Leads" },
            { value: "3", suffix: "x", label: "Social Growth" },
        ],
        process: [
            { number: "01", title: "Discovery", description: "Deep-dive workshops into the streetwear market, competitor audit, and audience persona mapping to find Zupitar's ownable position." },
            { number: "02", title: "Design", description: "Crafted a modular identity system including a custom wordmark, monogram, color palette, and comprehensive brand guidelines." },
            { number: "03", title: "Launch", description: "Rolled out across digital, packaging, and retail with a coordinated social campaign that drove immediate traction." },
        ],
        nextProject: "nexora-wear",
    },
    {
        slug: "nexora-wear",
        name: "Nexora Wear",
        category: "AI Photography",
        year: "2024",
        tagline: "High fashion meets AI precision",
        description: "Nexora Wear needed a full seasonal lookbook in under two weeks—an impossible task with traditional photography. Using our proprietary AI pipeline, we generated over 50,000 high-fidelity fashion images, each indistinguishable from a real editorial shoot, at a fraction of the cost and timeline.",
        heroImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80",
            "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=900&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80",
        ],
        services: ["AI Photography", "Visual Strategy"],
        metrics: [
            { value: "50", suffix: "K+", label: "AI Images" },
            { value: "3", suffix: "x", label: "Faster Delivery" },
            { value: "90", suffix: "%", label: "Cost Saved" },
        ],
        process: [
            { number: "01", title: "Discovery", description: "Analyzed Nexora's brand DNA, seasonal themes, and target demographics to guide the AI art direction." },
            { number: "02", title: "Design", description: "Developed custom AI prompts and fine-tuned models to match the editorial quality standards of luxury fashion." },
            { number: "03", title: "Launch", description: "Delivered the complete lookbook and digital asset library optimized for web, social, and print channels." },
        ],
        nextProject: "luxlabel-co",
    },
    {
        slug: "luxlabel-co",
        name: "LuxLabel Co",
        category: "Campaigns",
        year: "2024",
        tagline: "Global digital luxury rollout",
        description: "LuxLabel Co was preparing a global product launch and needed a campaign that felt equally powerful in Tokyo, Paris, and New York. We developed a unified creative strategy spanning paid media, influencer activations, and a bespoke micro-site that drove their app into the Top 10 in three markets simultaneously.",
        heroImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1600&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80",
            "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=900&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
            "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=900&q=80",
        ],
        services: ["Campaign Strategy", "Brand Identity"],
        metrics: [
            { value: "60", suffix: "%", label: "Awareness Lift" },
            { value: "5", suffix: "x", label: "Social Growth" },
            { value: "10", suffix: "", label: "Top App Rank" },
        ],
        process: [
            { number: "01", title: "Discovery", description: "Market research across three key regions to understand cultural nuance and digital behavior patterns." },
            { number: "02", title: "Design", description: "Created a modular campaign system that localized creative while maintaining global brand consistency." },
            { number: "03", title: "Launch", description: "Coordinated simultaneous rollout across paid, organic, and influencer channels in 10 markets." },
        ],
        nextProject: "aether-style",
    },
    {
        slug: "aether-style",
        name: "Aether Style",
        category: "Branding",
        year: "2023",
        tagline: "Minimalist aesthetic evolution",
        description: "Aether Style had outgrown its original identity. We stripped the brand back to its essence and rebuilt it with a minimalist, systems-driven approach—a flexible visual language that scales beautifully from a single social tile to a full flagship retail environment.",
        heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80",
        ],
        services: ["Brand Identity", "Brand Consulting"],
        metrics: [
            { value: "38", suffix: "%", label: "Brand Recall" },
            { value: "2", suffix: "x", label: "Revenue Growth" },
            { value: "95", suffix: "%", label: "Client Satisfaction" },
        ],
        process: [
            { number: "01", title: "Discovery", description: "Conducted stakeholder interviews and a comprehensive brand audit to identify core equities worth preserving." },
            { number: "02", title: "Design", description: "Developed a refined minimalist identity system with geometric precision and intentional white space." },
            { number: "03", title: "Launch", description: "Phased rollout across digital touchpoints followed by physical retail with zero brand equity loss." },
        ],
        nextProject: "vogue-ai",
    },
    {
        slug: "vogue-ai",
        name: "Vogue AI",
        category: "AI Photography",
        year: "2024",
        tagline: "Future of fashion journalism",
        description: "Vogue AI pushed us to the absolute frontier of what AI image generation can achieve. We produced over 100,000 editorial-quality fashion shots in 48 hours—images so compelling they were indistinguishable from work by the world's top fashion photographers.",
        heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80",
            "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&q=80",
            "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80",
        ],
        services: ["AI Photography", "Visual Direction"],
        metrics: [
            { value: "100", suffix: "K+", label: "Shots Generated" },
            { value: "48", suffix: "hr", label: "Delivery Time" },
            { value: "10", suffix: "x", label: "Scale Factor" },
        ],
        process: [
            { number: "01", title: "Discovery", description: "Studied decades of fashion editorial to codify the visual grammar of high-end photography into AI prompts." },
            { number: "02", title: "Design", description: "Built and fine-tuned bespoke models that captured lighting, texture, and emotion at editorial fidelity." },
            { number: "03", title: "Launch", description: "Delivered a searchable, tagged digital asset library with rights-cleared imagery ready for publication." },
        ],
        nextProject: "ethereal-silk",
    },
    {
        slug: "ethereal-silk",
        name: "Ethereal Silk",
        category: "Campaigns",
        year: "2023",
        tagline: "Digital luxury textile showcase",
        description: "Ethereal Silk needed to translate the tactile luxury of their textiles into a purely digital experience. We conceived a multi-platform campaign that used macro AI photography, immersive video, and interactive product pages to make audiences feel the fabric through their screens.",
        heroImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80",
            "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=900&q=80",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
        ],
        services: ["Campaign Strategy", "Visual Direction"],
        metrics: [
            { value: "55", suffix: "%", label: "Engagement Lift" },
            { value: "3", suffix: "x", label: "Sales Growth" },
            { value: "15", suffix: "", label: "Global Markets" },
        ],
        process: [
            { number: "01", title: "Discovery", description: "Explored how luxury textile brands communicate materiality in digital-first environments." },
            { number: "02", title: "Design", description: "Crafted a sensory campaign using macro photography, motion design, and interactive web experiences." },
            { number: "03", title: "Launch", description: "Deployed across e-commerce, social, and digital OOH in 15 international markets." },
        ],
        nextProject: "nova-brand",
    },
    {
        slug: "nova-brand",
        name: "Nova Brand",
        category: "Branding",
        year: "2023",
        tagline: "Identity for new age retail",
        description: "Nova Brand needed an identity that could bridge the gap between physical retail and the metaverse. We created a future-proof visual system with 3D-ready assets, adaptive color schemes, and a typography system that works as beautifully in AR as it does on a shopping bag.",
        heroImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80",
            "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=900&q=80",
        ],
        services: ["Brand Identity", "Brand Consulting"],
        metrics: [
            { value: "50", suffix: "%", label: "Brand Recall" },
            { value: "4", suffix: "x", label: "Revenue Growth" },
            { value: "12", suffix: "", label: "Markets Entered" },
        ],
        process: [
            { number: "01", title: "Discovery", description: "Mapped the intersection of physical retail trends and emerging metaverse commerce opportunities." },
            { number: "02", title: "Design", description: "Built a dual-native identity system with 2D and 3D asset libraries designed for omnichannel deployment." },
            { number: "03", title: "Launch", description: "Simultaneous launch across 12 physical markets and two metaverse platforms with unified brand presence." },
        ],
        nextProject: "chrome-collective",
    },
    {
        slug: "chrome-collective",
        name: "Chrome Collective",
        category: "AI Photography",
        year: "2024",
        tagline: "Synthetic chrome visual study",
        description: "Chrome Collective challenged us to create an entire product photography suite using nothing but AI. The brief: hyper-realistic chrome and metallic textures that feel cold, precise, and undeniably luxury. We delivered 25,000+ images across 8 regional markets in just 5 days.",
        heroImage: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1600&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80",
        ],
        services: ["AI Photography", "Product Visual Strategy"],
        metrics: [
            { value: "25", suffix: "K+", label: "Images Created" },
            { value: "5", suffix: "", label: "Days to Deliver" },
            { value: "8", suffix: "", label: "Markets Served" },
        ],
        process: [
            { number: "01", title: "Discovery", description: "Studied chrome materiality and luxury product photography conventions to build precise AI training data." },
            { number: "02", title: "Design", description: "Engineered custom diffusion models specialized in metallic surface rendering and studio lighting simulation." },
            { number: "03", title: "Launch", description: "Delivered region-specific asset packages optimized for e-commerce, social, and print production." },
        ],
        nextProject: "velvet-noir",
    },
    {
        slug: "velvet-noir",
        name: "Velvet Noir",
        category: "Campaigns",
        year: "2024",
        tagline: "Dark aesthetic luxury campaign",
        description: "Velvet Noir's campaign was built around a single concept: darkness as luxury. We crafted a moody, cinematic visual world using AI-generated imagery, atmospheric video content, and an immersive web experience that drove a 6x return on ad spend across 20 cities.",
        heroImage: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=1600&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=900&q=80",
            "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80",
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80",
        ],
        services: ["Campaign Strategy", "Visual Direction"],
        metrics: [
            { value: "70", suffix: "%", label: "Awareness Lift" },
            { value: "6", suffix: "x", label: "Ad ROI" },
            { value: "20", suffix: "", label: "Cities Reached" },
        ],
        process: [
            { number: "01", title: "Discovery", description: "Explored the psychology of dark aesthetics in luxury branding and mapped competitor white space." },
            { number: "02", title: "Design", description: "Created a cinematic visual system using AI imagery, atmospheric motion design, and immersive web storytelling." },
            { number: "03", title: "Launch", description: "Orchestrated a phased city-by-city rollout with geo-targeted creative across paid and organic channels." },
        ],
        nextProject: "zupitar-fashion",
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
    const current = getProjectBySlug(slug);
    if (!current) return undefined;
    return getProjectBySlug(current.nextProject);
}
