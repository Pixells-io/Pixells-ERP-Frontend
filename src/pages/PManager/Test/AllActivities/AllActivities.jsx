import React, { useState } from "react";
import NavigationHeader from "@/components/navigation-header";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { add, searchOutline } from "ionicons/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectTab from "./Tabs/ProjectTab";
import StatusTab from "./Tabs/StatusTab";
import { useLoaderData } from "react-router-dom";

function AllActivities() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 overflow-auto bg-[#FBFBFB] px-14 py-3">
      {/* navigation inside */}
      <NavigationHeader />
      {/* top content */}
      <div className="flex items-center gap-8">
        <h2 className="font-poppins text-xl font-bold text-[#44444F]">
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
        OBJETIVO
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
            <TabsTrigger
              className="h-[30px] rounded-xl px-2 font-roboto text-xs font-normal text-black data-[state=active]:bg-[#F1F1F1] data-[state=active]:shadow-none"
              value="finish"
            >
              TERMINADO
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-x-4">
            <div className="flex items-center justify-center">
              <IonIcon
                icon={searchOutline}
                className="h-6 w-6 text-[#CCCCCC]"
              />
            </div>

            <Button
              type={"button"}
              className="flex h-[30px] items-center justify-center rounded-xl bg-[#00A9B3] px-3 hover:bg-[#00A9B3]"
            >
              <span className="text-xs font-medium">Compartir</span>
            </Button>
            <Button
              type={"button"}
              className="flex h-[30px] items-center justify-center rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
            >
              <IonIcon icon={add} className="h-4 w-4" />
              <span className="text-xs font-medium">Nuevo</span>
            </Button>
          </div>
        </div>
        <TabsContent value="project" className="">
          <ProjectTab />
        </TabsContent>
        <TabsContent value="status" className="overflow-auto">
          <StatusTab />
        </TabsContent>
        <TabsContent value="finish" className="overflow-auto"></TabsContent>
      </Tabs>
    </div>
  );
}

export default AllActivities;
