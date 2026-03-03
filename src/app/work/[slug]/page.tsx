import { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { projects, getProjectBySlug } from "@/data/projects";

const ProjectPageClient = dynamic(
    () => import("@/components/sections/work/ProjectPageClient"),
    { ssr: true }
);

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = getProjectBySlug(params.slug);
    if (!project) return { title: "Project Not Found | Converge Digitals" };

    return {
        title: `${project.name} | Converge Digitals`,
        description: project.tagline,
        openGraph: {
            title: project.name,
            description: project.tagline,
            images: [{ url: project.heroImage }],
        },
    };
}

export default function ProjectPage({ params }: Props) {
    const project = getProjectBySlug(params.slug);
    if (!project) notFound();

    return <ProjectPageClient project={project} />;
}
