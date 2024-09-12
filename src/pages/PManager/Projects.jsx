import React, { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { useLoaderData } from "react-router-dom";

function Projects() {
  const { data } = useLoaderData();

  return (
    <div className="flex h-full w-full overflow-auto rounded-2xl bg-blancoBg p-10">
      <div className="flex h-fit flex-wrap items-center gap-8">
        {data?.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
