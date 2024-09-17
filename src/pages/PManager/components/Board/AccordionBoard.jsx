import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import { IonIcon } from "@ionic/react";
import {
  checkmarkCircleOutline,
  create,
  informationCircle,
  trash,
} from "ionicons/icons";

import SwipeToRevealActions from "react-swipe-to-reveal-actions/dist/esm/SwipeToRevealActions";
import EditTask from "../Modal/EditTask";

const PRIORITY = [
  { value: 1, color: "#F9D994" },
  { value: 2, color: "#F9B894" },
  { value: 3, color: "#D7586B" },
  { value: 4, color: "#000000" },
];

function AccordionBoard({
  task,
  task_count,
  task_query,
  creator,
  assigned,
  percent,
  setModal,
  setTasksModal,
  openCompleteTaskModal,
  openDestroyTaskModal,
  setProjectInfo,
  setModalProject,
  openEditModalTask,
  edit,
  destroy,
  id,
  users,
}) {
  function checkColor(value) {
    const navigate = useNavigate();
    const color = PRIORITY.filter((prio) => prio.value == value);
    return color[0]?.color;
  }

  return (
    <SwipeToRevealActions
      hideDotsButton="false"
      height={"94px"}
      actionButtons={
        task.type == 1
          ? [
              {
                content: (
                  <Link to={`/project-manager/${id}/projects/${task?.id}`}>
                    <IonIcon
                      icon={informationCircle}
                      className="h-5 w-5 text-grisHeading"
                    />
                  </Link>
                ),
                onClick: () =>
                  openCompleteTaskModal(
                    task?.id,
                    task?.name,
                    task?.description,
                  ),
                // onClick: () => {},
              },
              {
                content: (
                  <IonIcon icon={trash} className="h-5 w-5 text-grisHeading" />
                ),
                // onClick: () =>
                // 	openCompleteTaskModal(task?.id, task?.name, task?.description),
                onClick: () => {
                  setProjectInfo(task);
                  setModalProject(true);
                },
              },
            ]
          : [
              {
                content: (
                  <IonIcon
                    icon={checkmarkCircleOutline}
                    className="h-5 w-5 text-grisHeading"
                  />
                ),
                onClick: () =>
                  openCompleteTaskModal(
                    task?.id,
                    task?.name,
                    task?.description,
                  ),
                // onClick: () => alert("Pressed the COMPLETE button"),
              },
              {
                content: (
                  <IonIcon icon={create} className="h-5 w-5 text-grisHeading" />
                ),
                onClick: () =>
                  openEditModalTask(
                    task?.id,
                    task?.name,
                    task?.description,
                    task?.priority,
                    task?.start,
                  ),

                // onClick: () => alert("Pressed the EDIT button"),
              },
              {
                content: (
                  <IonIcon icon={trash} className="h-5 w-5 text-grisHeading" />
                ),
                onClick: () => openDestroyTaskModal(task?.id),
                // onClick: () => alert("Pressed the DELETE button"),
              },
            ]
      }
      actionButtonMinWidth={40}
    >
      <div className="flex w-full items-center border-t-[1px] bg-blancoBg px-2">
        <div className="flex w-2/4 flex-col py-2">
          {checkColor(task?.priority) !== "#000000" ? (
            <div className="flex items-center gap-2">
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
                  className="line-clamp-1 text-ellipsis text-[12px] font-normal text-grisHeading"
                  title={task?.name}
                >
                  {task?.name}
                </p>
                {task?.type == 0 ? (
                  <>
                    {task_count > 1 ? (
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
                    ) : null}
                  </>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 py-1">
              <div className="flex items-center gap-6">
                <p
                  className="line-clamp-1 text-ellipsis rounded-lg px-[4px] text-[12px] font-normal text-grisHeading outline outline-1 outline-offset-[4px] outline-[#D7586B]"
                  title={task?.name}
                >
                  {task?.name}
                </p>
                {task?.type == 0 ? (
                  <>
                    {task_count > 1 ? (
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
                    ) : null}
                  </>
                ) : null}
              </div>
            </div>
          )}

          <p className="text-[12px] font-normal text-grisHeading">
            {task?.type == 0 ? "Tarea" : "Proyecto"}
          </p>

          <div>
            <p className="text-[12px] font-normal text-grisHeading">
              {task?.end}
            </p>
          </div>
        </div>

        <div className="flex w-2/4">
          <div className="flex w-full flex-col justify-center gap-2">
            {percent == 100 ? (
              <Badge className="bg-green-200 text-green-500 hover:bg-green-100">
                <p className="text-[11px] font-semibold">{"Completed"}</p>
              </Badge>
            ) : (
              <Badge className="bg-orange-200 text-[#FAA364] hover:bg-orange-100">
                <p className="text-[11px] font-semibold">{"Pending"}</p>
              </Badge>
            )}

            {task?.type == 0 && (
              <div className="flex justify-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={task?.assigned?.image} />
                  <AvatarFallback>??</AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>

          <div className="flex w-full flex-col px-1">
            <div className="flex justify-center">
              <Avatar className="h-6 w-6">
                <AvatarImage src={task?.creator?.image} />
                <AvatarFallback>??</AvatarFallback>
              </Avatar>
            </div>

            {task?.type == 1 ? (
              <div className="flex w-full flex-col items-center px-2">
                <p className="w-full text-right text-[8px] font-normal text-grisHeading">
                  {Number(percent).toFixed(2)}%
                </p>
                <Progress
                  value={percent}
                  className="h-[4px] bg-grisDisabled fill-primario"
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className="hidden">
          {task?.type == 0 ? (
            <div className="flex justify-end">
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
                {edit && <EditTask users={users} task={task} csfId={""} />}
                {destroy && (
                  <IonIcon
                    icon={trash}
                    onClick={() => openDestroyTaskModal(task?.id)}
                    className="h-5 w-5"
                  ></IonIcon>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-end">
              <div className="flex items-center gap-2 text-[#696974]">
                <Link to={`/project-manager/${id}/projects/${task?.id}`}>
                  <IonIcon
                    icon={informationCircle}
                    className="size-5"
                  ></IonIcon>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setProjectInfo(task);
                    setModalProject(true);
                  }}
                >
                  <IonIcon icon={trash} className="size-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </SwipeToRevealActions>
  );
}

export default AccordionBoard;
