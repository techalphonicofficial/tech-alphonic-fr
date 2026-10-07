"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects({ projects }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="relative bg-white px-5 py-5 sm:px-8">

      <div className="mx-auto max-w-[1500px]">

        {/* Header */}

        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#53AFBE]">
              Selected Projects
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
              Work that speaks
              <span className="text-[#53AFBE]"> for itself.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#6B7280]">
            A selection of digital products, platforms and experiences
            created for businesses ready to grow.
          </p>

        </div>

        {/* Projects */}

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
}