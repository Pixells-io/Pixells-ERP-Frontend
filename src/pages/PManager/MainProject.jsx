import React, { useEffect, useState } from "react";
import {
  Form,
  redirect,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ProjectTable from "./components/ProjectTable";
import {
  completeActivity,
  deleteActivity,
  deletePhase,
  deleteProject,
  editActivityFile,
  editActivityUser,
  editPhase,
  editProject,
  saveNewActivitty,
  saveNewPhase,
} from "./utils";

import { IonIcon } from "@ionic/react";
import { ellipsisHorizontal } from "ionicons/icons";
import ProjectDestroy from "./components/ProjectDestroy";

function MainProject() {
  const params = useParams();
  const navigation = useNavigation();
  const { project } = useLoaderData();
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);

  // Reset Edit
  useEffect(() => {
    setEdit(false);
  }, [params.id]);

  //Modal Effect
  useEffect(() => {
    if (navigation.state === "idle") {
      setEdit(false);
    }
  }, [navigation.state]);

  return (
    <div className="flex h-full w-full flex-col overflow-scroll rounded-lg bg-blancoBg">
      <div className="flex items-center justify-between px-8 py-4">
        <ProjectDestroy
          modal={open}
          setModal={setOpen}
          name={project?.data.project.name}
          projectId={project?.data.project.id}
        />
        {!edit ? (
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            {project?.data?.project?.name}
          </h2>
        ) : (
          <Form
            action={`/project-manager/${params.id}/projects/${params.projectId}`}
            method="post"
            id="edit-project"
            className="flex gap-3"
          >
            <input
              name="name"
              type="text"
              defaultValue={project.data?.project.name}
              className="font-poppins text-xl font-bold text-[#44444F]"
            />
            <input
              name="project_id"
              type="text"
              hidden
              className="hidden"
              value={project.data.project?.id}
              readOnly
            />
            <input
              type="text"
              hidden
              className="hidden"
              name="action"
              value="edit-project"
              readOnly
            />
            <button
              type="submit"
              className="rounded-xl border border-primarioBotones px-4 py-1 font-medium text-primarioBotones hover:bg-primarioBotones hover:text-white"
            >
              Edit
            </button>
          </Form>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IonIcon
              icon={ellipsisHorizontal}
              className="size-6 text-[#44444F]"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setEdit(!edit)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpen(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="border-b"></div>
      <ProjectTable />
    </div>
  );
}

export default MainProject;

export async function Action({ params, request }) {
  const formData = await request.formData();
  const action = formData.get("action");

  switch (action) {
    case "phase":
      await saveNewPhase(formData);
      return redirect(
        `/project-manager/${params.id}/projects/${params.projectId}`,
      );

    case "edit-phase":
      await editPhase(formData);
      return redirect(
        `/project-manager/${params.id}/projects/${params.projectId}`,
      );

    case "delete-phase":
      await deletePhase(formData);
      return redirect(
        `/project-manager/${params.id}/projects/${params.projectId}`,
      );

    case "activity":
      await saveNewActivitty(formData);
      return redirect(
        `/project-manager/${params.id}/projects/${params.projectId}`,
      );

    case "edit":
      await editActivityUser(formData);
      return redirect(
        `/project-manager/${params.id}/projects/${params.projectId}`,
      );

    case "file":
      await editActivityFile(formData);
      return redirect(
        `/project-manager/${params.id}/projects/${params.projectId}`,
      );

    case "activity_check":
      await completeActivity(formData);
      return redirect(
        `/project-manager/${params.id}/projects/${params.projectId}`,
      );

    case "delete-activity":
      await deleteActivity(formData);
      return redirect(
        `/project-manager/${params.id}/projects/${params.projectId}`,
      );

    case "edit-project":
      await editProject(formData);
      return redirect(
        `/project-manager/${params.id}/projects/${params.projectId}`,
      );

    case "delete-project":
      await deleteProject(formData);
      return redirect(`/project-manager/${params.id}`);
  }
}
