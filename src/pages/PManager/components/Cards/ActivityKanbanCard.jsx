import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  attachOutline,
  calendarOutline,
  checkmarkCircleOutline,
  ellipsisHorizontal,
  listCircleOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteTask from "@/layouts/PManager/components/TaskModals/DeleteTask";
import CompleteTask from "@/layouts/PManager/components/TaskModals/CompleteTask";
import EditShowTask from "@/layouts/PManager/components/TaskModals/EditShowTask";

function ActivityKanbanCard({ task, actions }) {
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

  console.log(task);

  return (
    <div className="m-4 flex flex-col gap-2 rounded-lg border border-grisDisabled bg-blancoBg px-4 py-3">
      <DeleteTask
        modal={destroyTaskModal}
        setModal={setDestroyTaskModal}
        taskId={taskId}
      />
      <CompleteTask
        modal={completeTaskModal}
        setModal={setCompleteTaskModal}
        taskId={taskId}
        name={taskName}
        description={taskDescription}
      />
      <EditShowTask
        modal={editTaskModal}
        setModal={setEditTaskModal}
        taskId={taskId}
        name={taskName}
        description={taskDescription}
        priority={taskPriority}
        start={taskStart}
      />
      <div className="flex items-center justify-between">
        <p
          className="line-clamp-1 font-poppins text-[15px] font-semibold"
          title={task.name}
        >
          {task.name}
        </p>
        {actions === true ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <IonIcon
                icon={ellipsisHorizontal}
                className="h-5 w-5 text-grisDisabled"
              ></IonIcon>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="w-full hover:cursor-pointer">
                <button
                  type="button"
                  onClick={() =>
                    openCompleteTaskModal(
                      task?.id,
                      task?.name,
                      task?.description,
                    )
                  }
                >
                  Complete
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() =>
                    openEditModalTask(
                      task?.id,
                      task?.name,
                      task?.description,
                      task?.priority,
                      task?.start,
                    )
                  }
                >
                  Edit
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  type="button"
                  onClick={() => openDestroyTaskModal(task?.id)}
                >
                  Destroy
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <></>
        )}
      </div>
      <div className="flex items-center gap-2 text-grisText">
        {task.type === "1" ? (
          <>
            <IonIcon icon={listCircleOutline} className="h-5 w-5"></IonIcon>
            <p className="text-[12px] font-normal">Proyecto Macro</p>
          </>
        ) : (
          <>
            <IonIcon
              icon={checkmarkCircleOutline}
              className="h-5 w-5"
            ></IonIcon>
            <p className="text-[12px] font-normal">Activity</p>
          </>
        )}
      </div>
      <div className="flex items-center gap-4 text-grisText">
        <div className="flex">
          {task.type === "1" ? (
            <>
              <IonIcon icon={attachOutline} className="h-5 w-5"></IonIcon>
              <p className="text-[12px]">12</p>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#F1F1F5] px-4 py-1">
          <IonIcon icon={calendarOutline} className="h-5 w-5"></IonIcon>
          <p className="text-[12px]"> {task.date} </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {actions === true ? (
          <>
            <p className="self-end pr-2 text-[8px] text-[#CCCCCC]">
              Incomplete
            </p>
            <Progress value="0" className="h-1" />
          </>
        ) : (
          <>
            <p className="self-end pr-2 text-[8px] text-[#CCCCCC]">Complete</p>
            <Progress value="100" className="h-1" />
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src={task.assigned.img} alt="@shadcn" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default ActivityKanbanCard;
