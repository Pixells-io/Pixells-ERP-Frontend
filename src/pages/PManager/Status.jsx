import React, { useEffect, useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";

import { createPusherClient } from "@/lib/pusher";
import { getMonthKanban } from "@/lib/actions";
import { completeActivity, completeTask, editTask } from "./utils";

import NavigationHeader from "@/components/navigation-header";
import ActivityKanbanCard from "./components/Cards/ActivityKanbanCard";

function Status() {
  const { data } = useLoaderData();
  const [statusData, setstatusData] = useState(data);

  async function getStatusData() {
    let { data } = await getMonthKanban();

    setstatusData(data);
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
    <div className="flex h-full w-full overflow-auto">
      <div className="ml-0 flex w-full flex-col space-y-2 overflow-hidden rounded-lg bg-gris px-4 py-4 md:ml-4 md:px-8">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            PROJECT MANAGER
          </h2>
          <div className="flex items-center gap-3 text-[#8F8F8F]">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 Activities</div>
          </div>
        </div>

        {/* top content sub */}
        <div className="flex items-center gap-32 pl-3 pt-0 md:pt-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              Status
            </h2>
            <span className="text-xs font-normal text-grisText">
              Activities
            </span>
          </div>
        </div>

        {/* outlet */}
        <div className="flex h-full justify-normal overflow-auto rounded-3xl bg-blancoBg p-4 md:justify-center">
          <div className="flex gap-3">
            <div className="flex w-[320px] flex-col rounded-lg bg-grisBg">
              <div className="rounded-t-lg bg-[#D7586B]">
                <p className="py-1 text-center text-sm font-bold text-[#F5F5F5]">
                  VENCIDAS
                </p>
              </div>
              <div className="overflow-y-scroll">
                {statusData?.expirated?.map((task, i) => (
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
              <div className="overflow-y-scroll">
                {statusData?.pending?.map((task, i) => (
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
                {statusData?.complete?.map((task, i) => (
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
  const action = data.get("action");

  switch (action) {
    case "complete-task":
      await completeTask(data);
      return redirect("/project-manager/status");
    case "complete-activity":
      await completeActivity(data);
      return redirect("/project-manager/status");
    case "edit-task":
      await editTask(data);
      return redirect("/project-manager/status");
  }

  return redirect("/project-manager/status");
}
