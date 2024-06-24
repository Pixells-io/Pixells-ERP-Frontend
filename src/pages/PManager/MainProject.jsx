import React from "react";
import { redirect, useLoaderData, useParams } from "react-router-dom";
import ProjectTable from "./components/ProjectTable";
import { saveNewPhase } from "./utils";

function MainProject() {
  const params = useParams();
  return (
    <div className="flex h-full w-full flex-col rounded-lg bg-blancoBg">
      <div className="flex justify-between px-8 py-4">
        <p className="font-poppins text-[22px] font-bold text-grisHeading">
          Project Name
        </p>
        <p>Search</p>
      </div>
      <div className="border-b"></div>
      <ProjectTable />
    </div>
  );
}

export default MainProject;

export async function Action({ params, request }) {
  const formData = await request.formData();

  await saveNewPhase(formData);

  return redirect(`/project-manager/${params.id}/projects/${params.projectId}`);
}
