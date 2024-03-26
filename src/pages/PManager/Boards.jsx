import React from "react";
import { useLoaderData } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Board from "./Board";
import { saveNewCsf } from "./utils";

function Boards() {
  const goals = useLoaderData();

  return (
    <Tabs defaultValue="account" className="w-full">
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

export async function Action({}) {
  const data = await request.formData();

  const validation = await saveNewCsf(data);
  console.log(validation);

  // if (validation) {
  //     return validation;
  // }

  return redirect(`/project-manager/${params.id}`);
}
