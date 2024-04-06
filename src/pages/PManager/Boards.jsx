import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Board from "./Board";

function Boards() {
  const params = useParams();
  const goals = useLoaderData();
  const tabDefault = goals?.data[0]?.name;

  return (
    <Tabs defaultValue={tabDefault} className="w-full bg-blancoBg rounded-xl">
      <TabsList className="bg-blancoBg flex 2 w-fit rounded-none ml-4">
        {goals?.data?.map((goal, i) => (
          <TabsTrigger
            key={i}
            value={goal.name}
            className="border-b rounded-none text-sm text-grisSubText data-[state=active]:text-primarioBotones  data-[state=active]:font-semibold font-normal data-[state=active]:shadow-none data-[state=active]:bg-blancoBg data-[state=active]:border-primarioBotones"
          >
            {goal.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {goals?.data?.map((goal, i) => (
        <div key={i} className="flex w-full">
          <TabsContent value={goal.name} className="w-full">
            <Board goal={goal} />
          </TabsContent>
        </div>
      ))}
    </Tabs>
  );
}

export default Boards;
