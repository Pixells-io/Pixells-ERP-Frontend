import React, { useState } from "react";
import ProjectCard from "./components/ProjectCard";

function Projects() {
  return (
    <div className="flex h-full overflow-auto bg-blancoBg p-10">
      <div className="flex h-fit flex-wrap items-center gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
