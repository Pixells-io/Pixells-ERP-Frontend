import React, { useState } from "react";
import NavigationHeader from "@/components/navigation-header";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { add, searchOutline } from "ionicons/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectTab from "./Tabs/ProjectTab";
import StatusTab from "./Tabs/StatusTab";
import { useLoaderData } from "react-router-dom";
import {
  destroyTask,
  editSharedTask,
  editTask,
  saveSharedTask,
} from "@/layouts/PManager/utils";

function AllActivities() {
  const { tasks, users, positions, areas } = useLoaderData();
  return (
    <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 overflow-auto bg-[#FBFBFB] px-14 py-3">
      {/* navigation inside */}
      <NavigationHeader />
      {/* top content */}
      <div className="flex items-center gap-8">
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
      <h2 className="font-poppins text-xl font-bold text-[#44444F]">
        {"Todas las Actividades " + tasks?.data?.workspace ||
          "Las Actividades No Cargaron Correctamente"}
      </h2>

      <Tabs
        defaultValue="project"
        className="flex flex-col overflow-auto rounded-lg bg-blancoBg pt-2"
      >
        <div className="flex justify-between">
          <TabsList className="flex w-fit gap-x-2 rounded-none bg-blancoBg px-0">
            <TabsTrigger
              className="h-[30px] rounded-xl px-2 font-roboto text-xs font-normal text-black data-[state=active]:bg-[#F1F1F1] data-[state=active]:shadow-none"
              value="project"
            >
              POR PROYECTO
            </TabsTrigger>
            <TabsTrigger
              className="h-[30px] rounded-xl px-2 font-roboto text-xs font-normal text-black data-[state=active]:bg-[#F1F1F1] data-[state=active]:shadow-none"
              value="status"
            >
              ESTATUS
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-x-4">
            <div className="flex items-center justify-center">
              <IonIcon
                icon={searchOutline}
                className="h-6 w-6 text-[#CCCCCC]"
              />
            </div>
          </div>
        </div>
        <TabsContent value="project" className="">
          <ProjectTab
            tasks={tasks.data}
            users={users.data}
            positions={positions.data}
            areas={areas.data}
          />
        </TabsContent>
        <TabsContent value="status" className="overflow-auto">
          <StatusTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AllActivities;

export async function Action({ params, request }) {
  const data = await request.formData();
  const action = data.get("action");
  switch (action) {
    case "edit-task":
      await editTask(data);
      return redirect(`/project-manager2/activities/${params.id}`);

    case "delete-task":
      await destroyTask(data);
      return redirect(`/project-manager2/activities/${params.id}`);

    case "share-task":
      await saveSharedTask(data);
      return redirect(`/project-manager2/activities/${params.id}`);

    case "edit-shared-task":
      await editSharedTask(data);
      return redirect(`/project-manager2/activities/${params.id}`);

    default:
      return redirect(`/project-manager2/activities/${params.id}`);
  }
}
