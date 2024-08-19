import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IonIcon } from "@ionic/react";
import { createOutline, trashOutline } from "ionicons/icons";
import DeleteTask from "@/layouts/PManager/components/TaskModals/DeleteTask";
import EditShowTask from "@/layouts/PManager/components/TaskModals/EditShowTask";

function TaskListModal({ modal, setModal, tasks }) {
  const [taskId, setTaskId] = useState(false);
  const [taskName, setTaskName] = useState(false);
  const [taskDescription, setTaskDescription] = useState(false);
  const [taskPriority, setTaskPriority] = useState(false);
  const [taskStart, setTaskStart] = useState(false);
  const [destroyTaskModal, setDestroyTaskModal] = useState(false);
  const [editTaskModal, setEditTaskModal] = useState(false);

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
    <Dialog open={modal} onOpenChange={setModal}>
      <DeleteTask
        modal={destroyTaskModal}
        setModal={setDestroyTaskModal}
        taskId={taskId}
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
      <DialogContent className="flex max-h-[350px] max-w-[250px] flex-col bg-[#F0F0F0] p-0">
        <DialogHeader className="px-8 py-4">
          <DialogTitle>
            <p className="text-center text-xs font-medium text-grisText">
              Activity Repetitions &bull; <br /> {tasks[0]?.name}
            </p>
          </DialogTitle>
        </DialogHeader>
        <div className="flex h-full flex-col gap-2 overflow-y-scroll pb-4">
          {tasks !== "" &&
            tasks?.map((task, i) => (
              <div
                key={i}
                className="group grid grid-cols-2 px-6 hover:bg-gris"
              >
                <div className="col-span-1 flex items-center justify-center p-2 text-[11px] text-grisText">
                  {task?.start}
                </div>
                <div className="col-span-1 flex items-center justify-center gap-2 p-2">
                  <button type="button">
                    <IonIcon
                      icon={createOutline}
                      className="h-4 w-4 text-grisText"
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
                  </button>
                  <button type="button" className="">
                    <IonIcon
                      icon={trashOutline}
                      className="h-4 w-4 text-grisText"
                      onClick={() => openDestroyTaskModal(task?.id)}
                    />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TaskListModal;
