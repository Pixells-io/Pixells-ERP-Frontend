import React, { useState } from "react";
import NavigationHeader from "@/components/navigation-header";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { add, searchOutline } from "ionicons/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListTab from "./Tabs/ListTab";
import StatusTab from "./Tabs/StatusTab";
import BoardTab from "./Tabs/BoardTab";
import { useLoaderData } from "react-router-dom";

function AllProjects() {
  const { proyects } = useLoaderData();
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
        defaultValue="list"
        className="flex flex-col overflow-auto rounded-lg bg-blancoBg pt-2"
      >
        <div className="flex justify-between">
          <TabsList className="flex w-fit gap-x-2 rounded-none bg-blancoBg px-0">
            <TabsTrigger
              className="h-[30px] rounded-xl px-2 font-roboto text-xs font-normal text-black data-[state=active]:bg-[#F1F1F1] data-[state=active]:shadow-none"
              value="list"
            >
              LISTA
            </TabsTrigger>
            <TabsTrigger
              className="h-[30px] rounded-xl px-2 font-roboto text-xs font-normal text-black data-[state=active]:bg-[#F1F1F1] data-[state=active]:shadow-none"
              value="status"
            >
              ESTATUS
            </TabsTrigger>
            <TabsTrigger
              className="h-[30px] rounded-xl px-2 font-roboto text-xs font-normal text-black data-[state=active]:bg-[#F1F1F1] data-[state=active]:shadow-none"
              value="board"
            >
              BOARD
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
        <TabsContent value="list" className="">
          <ListTab proyects={proyects.data} />
        </TabsContent>
        <TabsContent value="status" className="overflow-auto">
          <StatusTab proyects={proyects.data.info} />
        </TabsContent>
        <TabsContent value="board" className="overflow-auto">
          <BoardTab proyects={proyects.data.info} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AllProjects;
