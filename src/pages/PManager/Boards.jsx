import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Board from "./Board";
import { pusherClient } from "@/lib/pusher";
import { getGoalsMaster } from "@/lib/actions";

function Boards() {
  const location = useLocation();
  const { id } = useParams();
  const { goals, users, goalsMaster } = useLoaderData();
  const tabDefault = goals?.data[0]?.name;
  const [urlId, setUrlId] = useState(id);
  const [PMdata, setPMdata] = useState(goalsMaster?.data);

  useEffect(() => {
    setUrlId(id);

    pusherClient.subscribe(`private-pm-get-objetive.${urlId}`);

    pusherClient.bind("fill-pm-objetive", ({ objetive }) => {
      getPMinfoFuncion(objetive);
    });

    async function getPMinfoFuncion(id) {
      const newData = await getGoalsMaster(id);
      setPMdata(newData.data);
    }

    return () => {
      pusherClient.unsubscribe(`private-pm-get-objetive.${urlId}`);
    };
  }, [location, urlId]);

  useEffect(() => {
    async function getGoals() {
      let newData = await getGoalsMaster(id);
      setPMdata(newData.data);
    }

    getGoals();
  }, [id]);

  return (
    <>
      {/* <Tabs
        defaultValue={tabDefault}
        className="w-full bg-blancoBg rounded-xl overflow-scroll"
      >
        <TabsList className="bg-blancoBg flex 2 w-fit rounded-none ml-4">
          {goals?.data?.map((goal, i) => (
            <TabsTrigger
              key={i}
              value={goal.name}
              className="border-b rounded-none text-sm text-grisSubText data-[state=active]:text-primarioBotones data-[state=active]:font-semibold font-normal data-[state=active]:shadow-none data-[state=active]:bg-blancoBg data-[state=active]:border-primarioBotones"
            >
              {goal.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {goals?.data?.map((goal, i) => (
          <div key={i} className="flex w-full">
            <TabsContent value={goal.name} className="w-full">
              <Board goal={goal} users={users.data} csfs={csfs.data} />
            </TabsContent>
          </div>
        ))}
      </Tabs> */}
      <Tabs
        defaultValue={tabDefault}
        className="w-full overflow-scroll rounded-xl bg-blancoBg"
      >
        <TabsList className="2 ml-4 flex w-fit rounded-none bg-blancoBg">
          {PMdata?.map(({ goal }, i) => (
            <TabsTrigger
              key={i}
              value={goal.name}
              className="rounded-none border-b text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              {goal.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {PMdata?.map(({ fces, goal }, i) => (
          <div key={i} className="flex w-full">
            <TabsContent value={goal.name} className="w-full">
              <Board goal={goal} users={users.data} csfs={fces} />
            </TabsContent>
          </div>
        ))}
      </Tabs>
    </>
  );
}

export default Boards;
