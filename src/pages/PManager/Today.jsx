import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

import {
  chevronBack,
  chevronForward,
  ellipsisHorizontal,
  searchOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { useLoaderData } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import DayListActivityCard from "./components/Cards/DayListActivityCard";

function Today() {
  const { data } = useLoaderData();

  function changeInputToday(projectId) {
    console.log(projectId);
  }

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            project manager
          </div>
        </div>

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
                <div className="w-4/5 gap-4">
                  <TabsTrigger
                    className="rounded-xl p-3 data-[state=active]:bg-blancoBox"
                    value="today"
                  >
                    <span className="font-roboto text-base font-medium text-grisHeading">
                      Today
                    </span>
                    <span className="ml-4 font-poppins text-sm font-normal text-grisSubText">
                      {data.today_date}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger
                    className="rounded-xl p-3 data-[state=active]:bg-blancoBox"
                    value="yesterday"
                  >
                    <span className="font-roboto text-base font-medium text-grisHeading">
                      Yesterday
                    </span>
                    <span className="ml-4 font-poppins text-sm font-normal text-grisSubText">
                      {data.yesterday_date}
                    </span>
                  </TabsTrigger>
                </div>
              </div>
            </TabsList>
            <TabsContent value="today" className="flex gap-6">
              {data.today?.map((task, i) => (
                <DayListActivityCard task={task} />
              ))}
            </TabsContent>
            <TabsContent value="yesterday" className="flex gap-6">
              {data.yesterday?.map((task, i) => (
                <DayListActivityCard task={task} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Today;
