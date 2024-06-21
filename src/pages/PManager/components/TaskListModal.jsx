import React from "react";

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

function TaskListModal({ modal, setModal, tasks }) {
  // console.log(tasks);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-w-[200px] bg-[#F0F0F0] p-0">
        <DialogHeader className="px-8 py-4">
          <DialogTitle>
            <p className="text-center text-xs font-medium text-grisText">
              Repeticiones de Actividad &bull; {tasks[0]?.name}
            </p>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 pb-4">
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
                    />
                  </button>
                  <button type="button" className="">
                    <IonIcon
                      icon={trashOutline}
                      className="h-4 w-4 text-grisText"
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
