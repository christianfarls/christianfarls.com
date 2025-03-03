"use client";

import { useState } from "react";
import PROJECTS from "../../data/projects";
import { AspectRatio } from "../../components/ui/aspect-ratio";

function ProjectCard({ project }) {
    // Toggle state for showing/hiding the description
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main overflow-hidden">
            <AspectRatio ratio={1}>
                <img
                    className="object-cover w-full h-full"
                    src={project.previewImage}
                    alt={project.name}
                />
            </AspectRatio>
            <div className="p-2">
                <h2 className="text-xl font-heading sm:text-2xl">{project.name}</h2>

                {/* Dropdown button to toggle description */}
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

                <a
                    className="mt-4 block text-center border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-white px-2 py-1 text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <div>
            <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Projects</h1>

            {/* Updated grid layout for fewer columns, making each container wider */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECTS.map((project, id) => (
                    <ProjectCard key={id} project={project} />
                ))}
            </div>
        </div>
    );
}
