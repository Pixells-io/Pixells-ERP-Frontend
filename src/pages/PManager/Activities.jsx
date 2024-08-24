import React, { useEffect, useState } from "react";
import { Link, redirect, useLoaderData, useParams } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import NavigationHeader from "@/components/navigation-header";

import {
  checkmarkCircleOutline,
  create,
  ellipse,
  informationCircle,
  trash,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import DeleteTask from "@/layouts/PManager/components/TaskModals/DeleteTask";
import CompleteTask from "@/layouts/PManager/components/TaskModals/CompleteTask";
import EditShowTask from "@/layouts/PManager/components/TaskModals/EditShowTask";

import { getMonthActivity } from "@/lib/actions";
import { createPusherClient } from "@/lib/pusher";

import { completeTask, destroyTask, editTask } from "./utils";

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

function Activities() {
  const { data } = useLoaderData();
  const { id } = useParams();

  const [activitiesData, setActivitiesData] = useState(data);

  async function getActivitiesData() {
    let { data } = await getMonthActivity();

    setActivitiesData(data);
  }

  const pusherClient = createPusherClient();

  useEffect(() => {
    pusherClient.subscribe("private-get-pm-activities");

    pusherClient.bind("fill-pm-activities", ({ message }) => {
      getActivitiesData();
    });

    return () => {
      pusherClient.unsubscribe("private-get-pm-activities");
    };
  }, []);

  //Web Socket

  function checkColor(value) {
    const color = PRIORITY.filter((prio) => prio.value == value);
    return color[0]?.color;
  }

  const [taskId, setTaskId] = useState(false);
  const [destroyTaskModal, setDestroyTaskModal] = useState(false);
  const [taskName, setTaskName] = useState(false);
  const [taskDescription, setTaskDescription] = useState(false);
  const [taskPriority, setTaskPriority] = useState(false);
  const [taskStart, setTaskStart] = useState(false);
  const [editTaskModal, setEditTaskModal] = useState(false);
  const [completeTaskModal, setCompleteTaskModal] = useState(false);

  function openCompleteTaskModal(taskId, name, description) {
    setTaskId(taskId);
    setTaskName(name);
    setTaskDescription(description);
    setCompleteTaskModal(true);
  }

  function openEditModalTask(taskId, name, description, priority, start) {
    setTaskId(taskId);
    setTaskName(name);
    setTaskDescription(description);
    setTaskPriority(priority);
    setTaskStart(start);
    setEditTaskModal(true);
  }

  function openDestroyTaskModal(taskId) {
    setTaskId(taskId);
    setDestroyTaskModal(true);
  }

  return (
    <div className="flex w-full overflow-scroll">
      <DeleteTask
        modal={destroyTaskModal}
        setModal={setDestroyTaskModal}
        taskId={taskId}
        action={"/project-manager/activities"}
        actionInput="delete-task"
      />
      <CompleteTask
        modal={completeTaskModal}
        setModal={setCompleteTaskModal}
        taskId={taskId}
        name={taskName}
        description={taskDescription}
        action={"/project-manager/activities"}
        actionInput="complete-task"
      />
      <EditShowTask
        modal={editTaskModal}
        setModal={setEditTaskModal}
        taskId={taskId}
        name={taskName}
        description={taskDescription}
        priority={taskPriority}
        start={taskStart}
        action={"/project-manager/activities"}
        actionInput="edit-task"
      />
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
              Activities
            </h2>
            <span className="text-xs font-medium text-grisText">General</span>
          </div>
        </div>

        <div className="flex h-full flex-col overflow-auto rounded-2xl bg-blancoBg p-4">
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
                        {day?.day}
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
                                icon={checkmarkCircleOutline}
                                className="h-5 w-5"
                                onClick={() =>
                                  openCompleteTaskModal(
                                    task?.id,
                                    task?.name,
                                    task?.description,
                                  )
                                }
                              ></IonIcon>
                              <IonIcon
                                icon={create}
                                className="h-5 w-5"
                                onClick={() =>
                                  openEditModalTask(
                                    task?.id,
                                    task?.name,
                                    task?.description,
                                    task?.priority,
                                    task?.start,
                                  )
                                }
                              ></IonIcon>
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
                                to={`/project-manager/${task.task_id}/projects/${task?.id}`}
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
      </div>
    </div>
  );
}

export default Activities;

export async function Action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "complete-task":
      completeTask(data);
      return redirect("/project-manager/activities");
    case "edit-task":
      editTask(data);
      return redirect("/project-manager/activities");
    case "delete-task":
      destroyTask(data);
      return redirect("/project-manager/activities");
  }
}
