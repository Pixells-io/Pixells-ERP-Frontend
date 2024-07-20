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

import { checkmarkCircleOutline, create, ellipse, trash } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import ModalDestroyCompleted from "./components/ModalDestroyCompleted";

const HEADERS = [
  { name: "ACTIVITY" },
  { name: "TYPE" },
  { name: "PROGRESS" },
  { name: "EXPIRATION" },
  { name: "RESPONSABLE" },
  { name: "CSF" },
  { name: "GOAL" },
  { name: "STATUS" },
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
  const [destroyTaskModal, setDestroyTaskModal] = useState(false);

  const { data } = {
    code: 200,
    message: "The query was successful",
    data: {
      year: "2024",
      month: "July",
      days: [
        {
          day: 31,
          task: [
            {
              id: 27,
              name: "Tarea 1",
              description: "comer saludable",
              type: "0",
              type_name: "Task",
              start: "2024-07-31",
              progress: 0,
              priority: 3,
              inicial_fce: "Pr",
              fce: "Prueba ",
              goal: "Meta Prueba ?",
              inicial_goal: "Me",
              assigned: {
                id: 1,
                img: "https://demoback.pixells.io/storage/Uz0lKfOV2rczQVPhEcV1OAVjhTXAwg6WosUqZk5D.png",
                name: "Luis Daniel Rios Barba",
              },
              creator: {
                id: 1,
                img: "https://demoback.pixells.io/storage/Uz0lKfOV2rczQVPhEcV1OAVjhTXAwg6WosUqZk5D.png",
                name: "Luis Daniel Rios Barba",
              },
            },
          ],
          task_count: 1,
          title: "Tarea 1",
          priority: 3,
        },
      ],
    },
  };

  const [activitiesData, setActivitiesData] = useState(data);

  function openDestroyTaskModal(taskId) {
    setTaskId(taskId);
    setDestroyTaskModal(true);
  }

  function checkColor(value) {
    const color = PRIORITY.filter((prio) => prio.value == value);
    return color[0].color;
  }

  return (
    <div className="flex h-full flex-col overflow-auto rounded-2xl bg-blancoBg p-4">
      <ModalDestroyCompleted
        modal={destroyTaskModal}
        setModal={setDestroyTaskModal}
        taskId={taskId}
      />

      <div className="grid grid-cols-11 border-b border-grisDisabled pb-4 text-right">
        {HEADERS?.map((header, i) => (
          <div
            key={i}
            className={
              header?.name === "ACTIVITY"
                ? "col-span-2 text-left"
                : "col-span-1"
            }
          >
            <p className="px-2 text-sm font-semibold text-gris2">
              {header?.name}
            </p>
          </div>
        ))}
      </div>
      <div>
        {activitiesData?.days?.map((day, i) => (
          <Accordion key={i} type="single" collapsible className="">
            <AccordionItem value={`item-${day.id}`}>
              <AccordionTrigger className="group flex px-4 !no-underline">
                <div className="w-2/12 text-start">
                  <span className="font-poppins text-base font-medium text-grisHeading">
                    {day.day}
                  </span>
                  <span className="ml-2 font-poppins text-xs font-normal uppercase text-grisSubText">
                    {activitiesData?.month}
                  </span>
                </div>

                <div className="flex w-full group-aria-expanded:hidden">
                  <div className="w-1/12 text-start">
                    {day?.priority == 1 ? (
                      <div>
                        <IonIcon
                          icon={ellipse}
                          className="mr-2 text-xs text-[#F9D994]"
                        />
                      </div>
                    ) : day?.priority == 2 ? (
                      <div>
                        <IonIcon
                          icon={ellipse}
                          className="mr-2 text-xs text-[#F9B894]"
                        />
                      </div>
                    ) : day?.priority == 3 ? (
                      <div>
                        <IonIcon
                          icon={ellipse}
                          className="mr-2 text-xs text-[#D7586B]"
                        />
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  {day?.priority == 4 ? (
                    <div className="w-5/12 text-start">
                      <span className="rounded-xl border border-[#D7586B] px-4 py-2 font-roboto text-xs font-normal text-grisHeading">
                        {day?.title}
                      </span>
                    </div>
                  ) : (
                    <div className="w-5/12 text-start">
                      <span className="font-roboto text-xs font-normal text-grisHeading">
                        {day?.title}
                      </span>
                    </div>
                  )}
                  <div className="w-1/12 text-start">
                    {day?.task_count > 1 ? (
                      <span className="font-roboto text-xs font-normal text-grisSubText">
                        + {day?.task_count} more
                      </span>
                    ) : (
                      <span className="font-roboto text-xs font-normal text-grisSubText">
                        Show More
                      </span>
                    )}
                  </div>
                  <div className="w-3/12"></div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {day?.task.map((task, i) => (
                  <div
                    key={i}
                    className="grid h-12 grid-cols-11 items-center gap-y-6 border-t-[1px] pr-2 text-right"
                  >
                    {checkColor(task?.priority) !== "#000000" ? (
                      <div className="col-span-2 flex items-center gap-2 text-left">
                        <p
                          className="flex text-4xl"
                          style={{
                            color: checkColor(task?.priority),
                          }}
                        >
                          &bull;
                        </p>
                        <div className="flex items-center gap-6">
                          <p
                            className="line-clamp-1 text-[12px] font-normal text-grisHeading"
                            title={task?.name}
                          >
                            {task?.name}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="col-span-2 ml-4 flex items-center gap-2 py-1 text-left">
                        <div className="flex items-center gap-6">
                          <p
                            className="line-clamp-1 rounded-lg px-[4px] text-[12px] font-normal text-grisHeading outline outline-1 outline-offset-[4px] outline-[#D7586B]"
                            title={task?.name}
                          >
                            {task?.name}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="text-rigth col-span-1">
                      <p className="pr-4 text-[12px] font-normal text-grisHeading">
                        {task?.type == 0 ? "Task" : "Project"}
                      </p>
                    </div>

                    {task?.type == 1 ? (
                      <div className="col-span-1 flex flex-col items-center px-2 text-left">
                        <p className="w-full text-right text-[8px] font-normal text-grisHeading">
                          {task?.progress}%
                        </p>
                        <Progress
                          value={task?.progress}
                          className="h-[4px] bg-grisDisabled fill-primario"
                        />
                      </div>
                    ) : (
                      <div className="col-span-1 flex flex-col items-center px-2 text-left"></div>
                    )}
                    <div className="col-span-1 text-center">
                      <p className="text-[12px] font-normal text-grisHeading">
                        {task?.start}
                      </p>
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                      <div className="flex gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={task?.assigned?.img} />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                      </div>
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
                    <div className="col-span-1 flex justify-end">
                      <Badge className="bg-orange-200 text-[#FAA364] hover:bg-orange-100">
                        <p className="text-[11px] font-semibold">
                          {task?.status || "Pending"}
                        </p>
                      </Badge>
                    </div>
                    <div className="col-span-1 mr-4 flex justify-end">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={task?.creator?.img} />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                    </div>
                    {task?.type == 0 ? (
                      <div className="col-span-1 flex justify-end">
                        <div className="flex items-center gap-2 text-[#696974]">
                          <IonIcon
                            icon={trash}
                            onClick={() => openDestroyTaskModal(task?.id)}
                            className="h-5 w-5"
                          ></IonIcon>
                        </div>
                      </div>
                    ) : (
                      <div className="col-span-1 flex justify-end">
                        <div className="flex items-center gap-2 text-[#696974]">
                          <Link
                            to={`/project-manager/${id}/projects/${task?.id}`}
                          >
                            <IonIcon
                              icon={informationCircle}
                              className="h-5 w-5"
                            ></IonIcon>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Completed;
