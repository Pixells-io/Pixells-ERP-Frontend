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

function DayListActivityCard({ task }) {
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
    <div
      className={
        task.progress === 1
          ? "w-1/3 rounded-2xl border-2 border-[#00A259] bg-[#f2f2f2] p-2 shadow-sm"
          : "w-1/3 rounded-2xl border-2 border-[#cdcdcd] bg-[#f2f2f2] p-2 shadow-sm"
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
      <div className="flex w-full">
        <div className="w-3/12">
          <img
            src={task.creator?.img}
            className="h-10 w-10 rounded-full"
            alt={task.creator?.name}
          />
          <span className="font-roboto text-sm font-normal text-grisHeading">
            Creator
          </span>
        </div>
        <div className="flex w-9/12">
          <div className="w-5/6">
            <span className="font-poppins text-xs font-semibold leading-4 text-grisHeading">
              Activity Name
            </span>
            <br />
            <span className="font-roboto text-sm font-normal leading-4 text-grisHeading">
              {task.name}
            </span>
          </div>
          <div className="w-1/6">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <IonIcon
                  icon={ellipsisHorizontal}
                  className="h-5 w-5 text-grisDisabled"
                ></IonIcon>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
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
          </div>
        </div>
      </div>
      <div className="m-2 flex">
        <div className="w-1/5">{/* RESPONSABLES IMG */}</div>
        <div className="flex gap-4">
          {/*  */}
          {task.priority === 1 ? (
            <div>
              <IonIcon icon={ellipse} className="mr-2 text-xs text-[#00A259]" />
              <span className="font-roboto text-sm font-normal leading-4 text-grisHeading">
                Low
              </span>
            </div>
          ) : task.priority === 2 ? (
            <div>
              <IonIcon icon={ellipse} className="mr-2 text-xs text-primario" />
              <span className="font-roboto text-sm font-normal leading-4 text-grisHeading">
                Half
              </span>
            </div>
          ) : task.priority === 3 ? (
            <div>
              <IonIcon icon={ellipse} className="mr-2 text-xs text-[#FAA364]" />
              <span className="font-roboto text-sm font-normal leading-4 text-grisHeading">
                Important
              </span>
            </div>
          ) : (
            <div>
              <IonIcon icon={ellipse} className="mr-2 text-xs text-[#D7586B]" />
              <span className="font-roboto text-sm font-normal leading-4 text-grisHeading">
                Urgent
              </span>
            </div>
          )}
          {/* SHOW STATUS */}
          {task.progress === 1 ? (
            <span className="rounded-2xl border border-[#00A259] px-2 text-sm font-normal text-[#00A259]">
              Completado
            </span>
          ) : (
            <span className="rounded-2xl border border-[#FAA364] px-2 text-sm font-normal text-[#FAA364]">
              Pendiente
            </span>
          )}
          {/* COMPLETE BUTTON */}
          {task.progress === 1 ? (
            <span>Complete</span>
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
  );
}

export default DayListActivityCard;
