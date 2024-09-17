import React from "react";
import { Link } from "react-router-dom";

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

const PRIORITY = [
  { value: 1, color: "#F9D994" },
  { value: 2, color: "#F9B894" },
  { value: 3, color: "#D7586B" },
  { value: 4, color: "#000000" },
];

function AccordionMobile({
  task,
  openCompleteTaskModal,
  openEditModalTask,
  openDestroyTaskModal,
}) {
  function checkColor(value) {
    const color = PRIORITY.filter((prio) => prio.value == value);
    return color[0]?.color;
  }

  return (
    <SwipeToRevealActions
      hideDotsButton="false"
      height={"66px"}
      actionButtons={[
        {
          content: (
            <IonIcon
              icon={checkmarkCircleOutline}
              className="h-5 w-5 text-grisHeading"
            />
          ),
          onClick: () =>
            openCompleteTaskModal(task?.id, task?.name, task?.description),
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
      ]}
      actionButtonMinWidth={40}
    >
      <div className="grid w-full grid-cols-6 items-center border-t-[1px] bg-blancoBg px-2 text-right">
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

        <div className="text-rigth col-span-2 md:col-span-1">
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
        ) : null}

        <div className="col-span-2 text-center">
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

        <div className="col-span-2 flex justify-center">
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
          <div className="col-span-1 hidden justify-end md:flex">
            <div className="flex items-center gap-2 text-[#696974]">
              <IonIcon
                icon={checkmarkCircleOutline}
                className="h-5 w-5"
                onClick={() =>
                  openCompleteTaskModal(task?.id, task?.name, task?.description)
                }
              />
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
              />
              <IonIcon
                icon={trash}
                onClick={() => openDestroyTaskModal(task?.id)}
                className="h-5 w-5"
              />
            </div>
          </div>
        ) : (
          <div className="col-span-1 flex justify-end">
            <div className="flex items-center gap-2 text-[#696974]">
              <Link
                to={`/project-manager/${task.task_id}/projects/${task?.id}`}
              >
                <IonIcon icon={informationCircle} className="h-5 w-5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </SwipeToRevealActions>
  );
}

export default AccordionMobile;
