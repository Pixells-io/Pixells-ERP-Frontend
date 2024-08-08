import React, { useEffect, useState } from "react";

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
import { getMonthKanban } from "@/lib/actions";
import { createPusherClient } from "@/lib/pusher";
import { completeActivity } from "./utils";
import NavigationHeader from "@/components/navigation-header";

function Status() {
  const { data } = useLoaderData();
  const [statusData, setstatusData] = useState(data);

  async function getStatusData() {
    let newData = await getMonthKanban();

    setstatusData(newData);
  }

  const pusherClient = createPusherClient();

  useEffect(() => {
    pusherClient.subscribe("private-get-pm-status");

    pusherClient.bind("fill-pm-status", ({ message }) => {
      getStatusData();
    });

    return () => {
      pusherClient.unsubscribe("private-get-pm-status");
    };
  }, []);

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
                {statusData?.expirated.map((task, i) => (
                  <ActivityKanbanCard task={task} actions={true} key={i} />
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
                {statusData?.pending.map((task, i) => (
                  <ActivityKanbanCard task={task} actions={true} key={i} />
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
                {statusData?.complete.map((task, i) => (
                  <ActivityKanbanCard task={task} actions={false} key={i} />
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

export async function Action({ request }) {
  const data = await request.formData();

  completeActivity(data);

  return "1";
}
