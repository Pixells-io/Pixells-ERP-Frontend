import React, { useState } from "react";
import { Form, Link, useParams, useSubmit } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import TaskForm from "./components/Form/TaskForm";

import {
  checkmarkCircleOutline,
  create,
  informationCircle,
  trash,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import TaskListModal from "./components/TaskListModal";

const HEADERS = [
  { name: "CSF" },
  { name: "ACTIVITY" },
  { name: "TYPE" },
  { name: "PROGRESS" },
  { name: "EXPIRATION" },
  { name: "RESPONSABLE" },
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

function Board({ goal, users, csfs }) {
  const { id } = useParams();
  const submit = useSubmit();
  const [csfInput, setCsfInput] = useState("");
  const [modal, setModal] = useState(false);
  const [tasksModal, setTasksModal] = useState("");

  function onInputEnter(e) {
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setCsfInput("");
    }
  }

  function checkColor(value) {
    const color = PRIORITY.filter((prio) => prio.value == value);
    return color[0].color;
  }

  return (
    <div className="flex h-full flex-col overflow-auto bg-blancoBg p-4">
      <TaskListModal modal={modal} setModal={setModal} tasks={tasksModal} />
      <div className="grid grid-cols-10 text-right">
        {HEADERS?.map((header, i) => (
          <div
            key={i}
            className={
              header?.name === "ACTIVITY"
                ? "col-span-2"
                : "" || header?.name === "CSF"
                  ? "pl-2 text-left"
                  : "pl-4 text-center"
            }
          >
            <p className="px-2 text-sm font-semibold text-gris2">
              {header.name}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid h-12 grid-cols-10 items-center gap-y-6 border-b px-1 text-right">
        <div className="col-span-10">
          <Form
            onKeyDown={onInputEnter}
            id="csf-form"
            action={`/project-manager/${goal.strategic_objetive_id}`}
            method="post"
            name="csf"
          >
            <input
              type="text"
              name="csf"
              placeholder="+ CRITICAL SUCCES FACTOR"
              className="flex w-full rounded-full bg-blancoBg px-4 py-2 font-roboto text-grisSubText caret-primario outline-none placeholder:text-sm placeholder:font-normal placeholder:text-grisSubText focus:border-2 focus:border-primario"
              value={csfInput}
              onChange={(e) => setCsfInput(e.target.value)}
            />

            <input className="hidden" name="action" value="csf" readOnly />
            <input className="hidden" name="goalId" value={goal.id} readOnly />
          </Form>
        </div>
      </div>
      <div className="h-full overflow-auto">
        {csfs?.map(({ fce, tasks }, i) => (
          <Accordion key={i} type="single" collapsible className="">
            <AccordionItem value={`item-${fce?.id}`}>
              <AccordionTrigger className="justify-normal gap-2 border-b bg-blancoBg px-4 hover:no-underline">
                <p className="text-sm font-medium text-primario">
                  {fce?.name.toUpperCase()}
                </p>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primario text-sm font-medium text-white">
                  {tasks?.length}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <div className="grid h-12 grid-cols-10 items-center px-1">
                  <div className="col-span-2 flex justify-end">
                    <TaskForm users={users} csfId={fce.id} />
                  </div>
                </div>
                {tasks?.map(
                  ({ task, task_count, task_query, creator, assigned }, i) => (
                    <div
                      key={i}
                      className="grid h-12 grid-cols-10 items-center gap-y-6 border-t-[1px] pr-2 text-right"
                    >
                      <div></div>
                      {checkColor(task?.priority) !== "#000000" ? (
                        <div className="col-span-2 flex items-center justify-between gap-2">
                          <p
                            className="flex text-4xl"
                            style={{
                              color: checkColor(task?.priority),
                            }}
                          >
                            &bull;
                          </p>
                          <div className="flex items-center gap-6">
                            <p className="flex text-[12px] font-normal text-grisHeading">
                              {task?.name}
                            </p>
                            {task?.type == 0 ? (
                              <button
                                type="button"
                                onClick={() => {
                                  setModal(true);
                                  setTasksModal(task_query);
                                }}
                              >
                                <p className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200">
                                  {task_count}
                                </p>
                              </button>
                            ) : (
                              <div className="h-5 w-5"></div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="col-span-2 flex items-center justify-end gap-2 py-1">
                          <div className="flex items-center gap-6">
                            <p className="flex rounded-lg px-[4px] text-[12px] font-normal text-grisHeading outline outline-1 outline-offset-[4px] outline-[#D7586B]">
                              {task?.name}
                            </p>
                            {task?.type == 0 ? (
                              <button
                                type="button"
                                onClick={() => {
                                  setModal(true);
                                  setTasksModal(task_query);
                                }}
                              >
                                <p className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200">
                                  {task_count}
                                </p>
                              </button>
                            ) : (
                              <div className="h-5 w-5"></div>
                            )}
                          </div>
                        </div>
                      )}

                      <div>
                        <p className="pr-4 text-[12px] font-normal text-grisHeading">
                          {task?.type == 0 ? "Task" : "Project"}
                        </p>
                      </div>
                      {task?.type == 1 ? (
                        <div className="flex flex-col items-center px-2">
                          <p className="w-full text-right text-[8px] font-normal text-grisHeading">
                            {task?.progress}%
                          </p>
                          <Progress
                            value={task?.progress}
                            className="h-[4px] bg-grisDisabled fill-primario"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center px-2"></div>
                      )}
                      <div>
                        <p className="text-[12px] font-normal text-grisHeading">
                          {task?.end}
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-end gap-2">
                          <div className="">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={task?.assigned?.user_image} />
                              <AvatarFallback>??</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Badge className="bg-orange-200 text-[#FAA364] hover:bg-orange-100">
                          <p className="text-[11px] font-semibold">
                            {task?.status || "Pending"}
                          </p>
                        </Badge>
                      </div>
                      <div className="flex justify-center pl-10">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={task?.creator?.user_image} />
                          <AvatarFallback>??</AvatarFallback>
                        </Avatar>
                      </div>
                      {task?.type == 0 ? (
                        <div className="flex justify-center">
                          <div className="flex items-center gap-2 text-[#696974]">
                            <IonIcon
                              icon={checkmarkCircleOutline}
                              className="h-5 w-5"
                            ></IonIcon>
                            <IonIcon
                              icon={create}
                              className="h-5 w-5"
                            ></IonIcon>
                            <IonIcon icon={trash} className="h-5 w-5"></IonIcon>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
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
                      {/* <div>
                      <div className="flex items-center gap-2 text-[#696974]">
                        <IonIcon
                          icon={checkmarkCircleOutline}
                          className="w-5 h-5"
                        ></IonIcon>
                        <IonIcon icon={create} className="w-5 h-5"></IonIcon>
                        <IonIcon icon={trash} className="w-5 h-5"></IonIcon>
                      </div>
                    </div> */}
                    </div>
                  ),
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Board;
