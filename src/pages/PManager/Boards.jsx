import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Board from "./Board";

function Boards() {
  const params = useParams();
  const goals = useLoaderData();
  const tabDefault = goals?.data[0]?.name;

  return (
    <Tabs defaultValue={tabDefault} className="w-full">
      <TabsList>
        {goals?.data?.map((goal, i) => (
          <TabsTrigger key={i} value={goal.name}>
            {goal.name}
          </TabsTrigger>
        ))}
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      {goals?.data?.map((goal, i) => (
        <div key={i} className="flex w-full">
          <TabsContent value={goal.name} className="w-full">
            <Board goal={goal} />
          </TabsContent>
        </div>
      ))}
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default Boards;
