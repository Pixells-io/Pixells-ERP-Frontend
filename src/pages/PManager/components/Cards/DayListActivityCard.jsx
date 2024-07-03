import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  attachOutline,
  calendarOutline,
  checkmarkCircleOutline,
  ellipse,
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

function DayListActivityCard({ task, index }) {
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
    <div
      className={
        task.progress === 1
          ? "flex h-[130px] w-[370px] shrink-0 gap-2 rounded-lg border-2 border-[#00A259] bg-[#f8f8f8] p-2 shadow"
          : "flex h-[130px] w-[370px] shrink-0 gap-2 rounded-lg bg-[#f8f8f8] p-2 shadow"
      }
    >
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
      <div className="flex h-full items-center justify-center px-2 font-poppins text-xs font-medium text-grisHeading">
        {index + 1}
      </div>
      <div className="flex flex-col items-center justify-between">
        <Avatar className="size-10">
          <AvatarImage src={task?.creator.img} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <p className="text-[10px] text-grisHeading">Creador</p>
        <div className="flex w-[80px] flex-col items-center justify-center">
          <div className="flex w-full justify-center overflow-scroll">
            <Avatar className="size-6">
              <AvatarImage src={task?.creator.img} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <Avatar className="size-6">
              <AvatarImage src={task?.creator.img} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <Avatar className="size-6">
              <AvatarImage src={task?.creator.img} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <Avatar className="size-6">
              <AvatarImage src={task?.creator.img} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
          </div>

          <p className="text-[9px] text-[#ABABAB]">Responsables</p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between px-2">
        <div>
          <div className="flex justify-between">
            <p className="font-poppins text-[10px] font-semibold text-grisHeading">
              Nombre de Actividad
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <IonIcon
                  icon={ellipsisHorizontal}
                  className="flex h-5 w-5 text-grisDisabled"
                ></IonIcon>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <button
                    type="button"
                    className="w-full text-left"
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
                    className="w-full text-left"
                    onClick={() => openDestroyTaskModal(task?.id)}
                  >
                    Destroy
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <span className="text-xs text-grisHeading">{task?.name}</span>
        </div>
        <div className="flex items-center gap-2 pb-1">
          <div>
            {task.priority === 1 ? (
              <div className="flex items-center gap-1">
                <IonIcon icon={ellipse} className="text-xs text-[#00A259]" />
                <span className="text-sm text-grisHeading">Low</span>
              </div>
            ) : task.priority === 2 ? (
              <div className="flex items-center gap-1">
                <IonIcon icon={ellipse} className="text-xs text-primario" />
                <span className="text-sm text-grisHeading">Half</span>
              </div>
            ) : task.priority === 3 ? (
              <div className="flex items-center gap-1">
                <IonIcon icon={ellipse} className="text-xs text-[#FAA364]" />
                <span className="text-sm text-grisHeading">Important</span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <IonIcon icon={ellipse} className="text-xs text-[#D7586B]" />
                <span className="text-sm text-grisHeading">Urgent</span>
              </div>
            )}
          </div>
          <div>
            {task.progress === 1 ? (
              <span className="rounded-2xl border border-[#00A259] px-2 text-sm font-normal text-[#00A259]">
                Completado
              </span>
            ) : (
              <span className="rounded-2xl border border-[#FAA364] px-2 text-sm font-normal text-[#FAA364]">
                Pendiente
              </span>
            )}
          </div>
          <div>
            {task.progress === 1 ? (
              <span className="rounded-full bg-[#f0f0f0] px-2 py-1 text-[10px] text-[#BDBDBD]">
                Complete
              </span>
            ) : (
              <button
                type="button"
                onClick={() =>
                  openCompleteTaskModal(task.id, task.name, task.description)
                }
                className="rounded-2xl border border-grisHeading px-2 text-sm font-normal text-grisHeading"
              >
                Complete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayListActivityCard;
