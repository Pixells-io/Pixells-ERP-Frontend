import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import DayListActivityCard from "./components/Cards/DayListActivityCard";
import { createPusherClient } from "@/lib/pusher";
import { getTodayActivity } from "@/lib/actions";
import NavigationHeader from "@/components/navigation-header";

function Today() {
  const { data } = useLoaderData();

  const [todayData, setTodayData] = useState(data);

  async function getTodayData() {
    let newData = await getTodayActivity();

    setTodayData(newData);
  }

  const pusherClient = createPusherClient();

  useEffect(() => {
    pusherClient.subscribe("private-get-pm-today");

    pusherClient.bind("fill-pm-today", ({ message }) => {
      getTodayData();
    });

    return () => {
      pusherClient.unsubscribe("private-get-pm-today");
    };
  }, []);

  function changeInputToday(projectId) {
    // console.log(projectId);
  }

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              PROJECT MANAGER
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#8F8F8F]">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 Activities</div>
          </div>
        </div>

        {/* top content sub */}
        <div className="flex items-center gap-32 pl-3 pt-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              Day List
            </h2>
            <span className="text-xs font-normal text-grisText">
              Activities
            </span>
          </div>
        </div>

        {/* outlet */}
        <div className="h-full justify-center overflow-auto rounded-xl bg-[#FBFBFB] p-6">
          <Tabs defaultValue="today" className="h-full w-full overflow-auto">
            <TabsList className="mb-5 w-full bg-transparent">
              <div className="flex w-full">
                <div className="flex gap-2 rounded-full border border-[#D7D7D7] px-2 py-1">
                  <TabsTrigger
                    className="rounded-full p-3 data-[state=active]:bg-blancoBox"
                    value="today"
                  >
                    <span className="font-roboto text-base font-medium text-grisHeading">
                      Today
                    </span>
                    <span className="ml-4 font-poppins text-sm font-normal text-grisSubText">
                      {todayData.today_date}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger
                    className="rounded-full p-3 data-[state=active]:bg-blancoBox"
                    value="yesterday"
                  >
                    <span className="font-roboto text-base font-medium text-grisHeading">
                      Yesterday
                    </span>
                    <span className="ml-4 font-poppins text-sm font-normal text-grisSubText">
                      {todayData.yesterday_date}
                    </span>
                  </TabsTrigger>
                </div>
              </div>
            </TabsList>
            <TabsContent value="today" className="flex flex-wrap gap-6">
              {todayData.today?.map((task, i) => (
                <DayListActivityCard task={task} key={i} index={i} />
              ))}
            </TabsContent>
            <TabsContent value="yesterday" className="flex flex-wrap gap-6">
              {todayData.yesterday?.map((task, i) => (
                <DayListActivityCard task={task} key={i} index={i} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Today;
