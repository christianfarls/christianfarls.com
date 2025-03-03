"use client";

import { useState } from "react";
import PROJECTS from "../../data/projects";
import { AspectRatio } from "../../components/ui/aspect-ratio";

interface Project {
    name: string;
    description: string;
    previewImage: string;
    repoUrl: string;
    liveLink?: string;
    tags: string[];
    date: string;
}

function ProjectCard({ project }: { project: Project }) {
    const [showDescription, setShowDescription] = useState(false);

    // Format the date to only display month and year
    const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    return (
        <div className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main overflow-hidden">
            <AspectRatio ratio={16 / 9}>
                <img
                    className="object-cover w-full h-full"
                    src={project.previewImage}
                    alt={project.name}
                />
            </AspectRatio>
            <div className="p-2">
                <h2 className="text-xl font-heading sm:text-2xl">{project.name}</h2>
                <p className="text-xs text-muted-foreground">{formattedDate}</p>

                
                <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                
                <button
                    className="mt-2 flex items-center gap-1 text-sm font-bold"
                    onClick={() => setShowDescription((prev) => !prev)}
                >
                    <span>{showDescription ? "Hide Description" : "Read Description"}</span>
                    <span>{showDescription ? "↑" : "↓"}</span>
                </button>
                {showDescription && (
                    <p className="mt-2 text-text text-sm">{project.description}</p>
                )}
                
                <div className="mt-4 flex flex-wrap items-center gap-2">
                    <a
                        className="block text-center border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-white px-2 py-1 text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>

                    {project.liveLink && (
                        <a
                            className="block text-center border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-white px-2 py-1 text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn More
                        </a>
                    )}
                </div>
                
            </div>
        </div>
    );
}


export default function Projects() {
    const [activeTag, setActiveTag] = useState("All");

    // Create a unique list of tags from the projects data
    // @ts-ignore
    const allTags = ["All", ...new Set(PROJECTS.flatMap((project) => project.tags))];

    // Filter the projects based on the active tag.
    let filteredProjects =
        activeTag === "All"
            ? PROJECTS
            : PROJECTS.filter((project) => project.tags.includes(activeTag));

    // Sort projects by date descending (most recent first)
    filteredProjects = filteredProjects.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div>
            <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Projects</h1>

            {/* Filter Tabs */}
            <div className="mb-6 flex flex-wrap gap-2">
                {allTags.map((tag, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTag(tag)}
                        className={`px-3 py-1 border rounded-md transition-colors ${
                            activeTag === tag ? "bg-blue-500 text-white" : "bg-white text-black"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                {filteredProjects.map((project, id) => (
                    <ProjectCard key={id} project={project} />
                ))}
            </div>
        </div>
    );
}
