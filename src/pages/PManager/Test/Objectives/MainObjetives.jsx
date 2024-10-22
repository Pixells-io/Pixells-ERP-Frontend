import React, { useState } from "react";
import {
  NavLink,
  redirect,
  useLoaderData,
  useParams,
  useSubmit,
} from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { ellipsisVertical, searchOutline } from "ionicons/icons";

import NavigationHeader from "@/components/navigation-header";
import ObjectiveAll from "./ObjectiveAll";

import EditProjectModal from "../../components2/Modals/EditProjectModal";

import {
  completeActivity,
  deleteActivity,
  deletePhase,
  deleteProject,
  editActivityUser,
  editProject,
  newActivity,
  newPhase,
} from "@/layouts/PManager/utils";

function MainObjetives() {
  const { project, users } = useLoaderData();
  const params = useParams();
  const submit = useSubmit();
  const [editModal, setEditModal] = useState(false);
  return (
    <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 overflow-auto bg-[#FBFBFB] py-3 font-roboto">
      <EditProjectModal
        modal={editModal}
        setModal={setEditModal}
        objective={project?.data?.project}
      />

      <div className="px-14">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}
      </div>
      <div className="flex items-center gap-8 px-14">
        <h2 className="font-poppins font-bold text-[#44444F]">
          PROJECT MANAGER
        </h2>
        <div className="flex items-center gap-3 text-[#8F8F8F]">
          <div className="text-xs">3 Objetivos</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">27 Activities</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">8 Proyectos</div>
        </div>
      </div>
      <h2 className="px-14 font-poppins text-xl font-bold text-[#44444F]">
        {project?.data?.objective_name || "Proyecto No Cargo Correctamente"}
      </h2>

      <div className="flex overflow-auto px-14">
        <div className="flex w-3/5 flex-row gap-x-2 overflow-auto py-1">
          {project?.data?.all_projects?.map((nav, index) => (
            <NavLink
              key={index}
              to={`/project-manager2/project/${nav.id}`}
              className={({ isActive }) =>
                isActive
                  ? "min-w-fit rounded-[10px] bg-[#F1F1F1] px-3 py-1.5 text-xs font-normal text-grisHeading"
                  : "min-w-fit rounded-[10px] px-3 py-1.5 text-xs font-normal text-grisSubText"
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
        <div className="flex w-2/5 items-center justify-end gap-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex">
              <IonIcon
                icon={ellipsisVertical}
                className={`h-6 w-6 text-grisSubText`}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setEditModal(true)}>
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  submit(
                    {
                      action: "delete-project",
                      project_id: project?.data?.project?.id,
                    },
                    {
                      method: "post",
                      action: `/project-manager2/project/${params.id}`,
                    },
                  )
                }
              >
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center justify-center">
            <IonIcon icon={searchOutline} className="h-6 w-6 text-[#CCCCCC]" />
          </div>

          <Button
            type={"button"}
            className="flex h-[30px] items-center justify-center rounded-xl bg-[#00A9B3] px-3 hover:bg-[#00A9B3]"
          >
            <span className="text-xs font-medium">Compartir</span>
          </Button>
        </div>
      </div>
      <ObjectiveAll project={project.data} users={users.data} />
    </div>
  );
}

export default MainObjetives;

export async function Action({ params, request }) {
  const formData = await request.formData();
  const action = formData.get("action");

  switch (action) {
    case "phase":
      await newPhase(formData);
      return redirect(`/project-manager2/project/${params.id}`);

    // case "edit-phase":
    //   await editPhase(formData);
    //   return redirect(
    //     `/project-manager/${params.id}/projects/${params.projectId}`,
    //   );

    case "delete-phase":
      await deletePhase(formData);
      return redirect(`/project-manager2/project/${params.id}`);

    case "activity":
      await newActivity(formData);
      return redirect(`/project-manager2/project/${params.id}`);

    case "edit":
      await editActivityUser(formData);
      return redirect(`/project-manager2/project/${params.id}`);

    // case "file":
    //   await editActivityFile(formData);
    //   return redirect(
    //     `/project-manager/${params.id}/projects/${params.projectId}`,
    //   );

    case "activity_check":
      await completeActivity(formData);
      return redirect(`/project-manager2/project/${params.id}`);

    case "delete-activity":
      await deleteActivity(formData);
      return redirect(`/project-manager2/project/${params.id}`);

    case "edit-project":
      await editProject(formData);
      return redirect(`/project-manager2/project/${params.id}`);

    case "delete-project":
      const { data } = await deleteProject(formData);
      return redirect(`/project-manager2/${data?.objective_id}`);

    // case "delete-document":
    //   await deleteDocument(formData);
    //   return redirect(
    //     `/project-manager/${params.id}/projects/${params.projectId}`,
    //   );

    // case "remove-assigned":
    //   await removeAssignedActivity(formData);
    //   return redirect(
    //     `/project-manager/${params.id}/projects/${params.projectId}`,
    //   );

    default:
      return redirect(`/project-manager2/project/${params.id}`);
  }
}
