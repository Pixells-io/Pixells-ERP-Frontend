import React, { Fragment, useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import {
  checkmarkCircleOutline,
  chevronBack,
  chevronForward,
  create,
  ellipse,
  trash,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link, redirect, useLoaderData } from "react-router-dom";
import NavigationHeader from "@/components/navigation-header";
import DestroyActivityCardComplete from "./components/Cards/DestroyActivityCard";
import { destroyActivity } from "./utils";

const HEADERS = [
  { name: "ACTIVITY" },
  { name: "TYPE" },
  { name: "EXPIRATION" },
  { name: "CSF" },
  { name: "GOAL" },
  { name: "CREATED" },
  { name: "ACTIONS" },
];

const PRIORITY = [
  { value: 1, color: "#F9D994" },
  { value: 2, color: "#F9B894" },
  { value: 3, color: "#D7586B" },
  { value: 4, color: "#000000" },
];

function Completed() {
  const [taskId, setTaskId] = useState(false);
  const [taskType, setTaskType] = useState(false);
  const [destroyTaskModal, setDestroyTaskModal] = useState(false);
  const { data } = useLoaderData();

  const [activitiesData, setActivitiesData] = useState(data);

  function openDestroyTaskModal(taskId, type) {
    setTaskId(taskId);
    setTaskType(type);
    setDestroyTaskModal(true);
  }

  return (
    <div className="flex h-full w-full overflow-auto">
      <div className="ml-0 flex w-full flex-col space-y-2 overflow-hidden rounded-lg bg-gris px-4 py-4 md:ml-4 md:px-8">
        {/* navigation inside */}
        <NavigationHeader />
        <DestroyActivityCardComplete
          modal={destroyTaskModal}
          setModal={setDestroyTaskModal}
          id={taskId}
          type={taskType}
        />

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
              Completed
            </h2>
            <span className="text-xs font-normal text-grisText">
              Activities and Task
            </span>
          </div>
        </div>

        {/* outlet */}
        <div className="flex h-full justify-center overflow-auto rounded-3xl bg-blancoBg p-4">
          <div className="flex h-full flex-col overflow-auto rounded-2xl bg-blancoBg p-0 md:p-4">
            <div className="hidden grid-cols-11 border-b border-grisDisabled pb-4 text-right md:grid">
              {HEADERS?.map((header, i) => (
                <div
                  key={i}
                  className={
                    header?.name === "ACTIVITY"
                      ? "col-span-5 text-left"
                      : "col-span-1"
                  }
                >
                  <p className="px-2 text-sm font-semibold text-gris2">
                    {header?.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="overflow-auto">
              {data.map((task, i) => (
                <div
                  key={i}
                  className="grid h-20 grid-cols-7 items-center gap-y-0 border-t-[1px] pr-0 text-right md:h-12 md:grid-cols-11 md:gap-y-6 md:pr-2"
                >
                  <div className="text-rigth col-span-3 text-left md:col-span-5">
                    <p className="pr-4 text-[12px] font-normal text-grisHeading">
                      {task?.name}
                    </p>
                  </div>
                  <div className="text-rigth col-span-1">
                    <p className="pr-4 text-[12px] font-normal text-grisHeading">
                      {task?.type}
                    </p>
                  </div>

                  <div className="col-span-3 text-center md:col-span-1">
                    <p className="text-[12px] font-normal text-grisHeading">
                      {task?.expiration}
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <p
                      className="flex size-7 items-center justify-center rounded-full border border-primarioBotones text-[11px] font-light uppercase text-primarioBotones"
                      title={task?.fce}
                    >
                      {task?.inicial_fce}
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <p
                      className="flex size-7 items-center justify-center rounded-full border border-primarioBotones text-[11px] font-light uppercase text-primarioBotones"
                      title={task?.goal}
                    >
                      {task?.inicial_goal}
                    </p>
                  </div>
                  <div className="col-span-1 mr-0 flex justify-end md:mr-4">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={task?.creator?.img} />
                      <AvatarFallback></AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <div className="flex items-center gap-2 text-[#696974]">
                      <IonIcon
                        icon={trash}
                        onClick={() =>
                          openDestroyTaskModal(task?.id, task?.type)
                        }
                        className="h-5 w-5"
                      ></IonIcon>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed;

export async function Action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "Activity":
      await destroyActivity(1, data.get("id"));
      return redirect("/project-manager/completed");

    case "Task":
      await destroyActivity(2, data.get("id"));
      return redirect("/project-manager/completed");
  }

  return 1;
}
