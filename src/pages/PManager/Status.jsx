import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  attachOutline,
  calendarOutline,
  checkmarkCircleOutline,
  chevronBack,
  chevronForward,
  ellipsisHorizontal,
  listCircleOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Progress } from "@/components/ui/progress";
import { useLoaderData } from "react-router-dom";
import ActivityKanbanCard from "./components/Cards/ActivityKanbanCard";

function Status() {
  const { data } = useLoaderData();
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
        </div>

        {/* top content sub */}
        <div className="flex items-center gap-32 pl-3 pt-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-poppins text-2xl font-bold text-[#44444F]">
              Status
            </h2>
            <span className="text-sm font-medium text-grisText">
              Activities
            </span>
          </div>
        </div>

        {/* outlet */}
        <div className="flex h-full justify-center overflow-auto rounded-3xl bg-blancoBg p-4">
          <div className="flex gap-3">
            <div className="flex w-[320px] flex-col rounded-lg bg-grisBg">
              <div className="rounded-t-lg bg-[#D7586B]">
                <p className="py-1 text-center text-sm font-bold text-[#F5F5F5]">
                  VENCIDAS
                </p>
              </div>
              <div className="overflow-scroll">
                {data?.expirated.map((task, i) => (
                  <ActivityKanbanCard task={task} key={i} />
                ))}
              </div>
            </div>

            <div className="flex w-[320px] flex-col rounded-lg bg-grisBg">
              <div className="rounded-t-lg bg-[#FAA364]">
                <p className="py-1 text-center text-sm font-bold text-[#F5F5F5]">
                  PENDIENTES
                </p>
              </div>
              <div className="overflow-scroll">
                {data?.pending.map((task, i) => (
                  <ActivityKanbanCard task={task} key={i} />
                ))}
              </div>
            </div>

            <div className="flex w-[320px] flex-col rounded-lg bg-grisBg">
              <div className="rounded-t-lg bg-[#00A259]">
                <p className="py-1 text-center text-sm font-bold text-[#F5F5F5]">
                  COMPLETADAS
                </p>
              </div>
              <div className="overflow-scroll">
                {data?.complete.map((task, i) => (
                  <ActivityKanbanCard task={task} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
