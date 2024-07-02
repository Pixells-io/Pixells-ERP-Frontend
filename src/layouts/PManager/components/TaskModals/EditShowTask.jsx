import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { IonIcon } from "@ionic/react";
import { create } from "ionicons/icons";

function EditShowTask({
  modal,
  setModal,
  taskId,
  name,
  description,
  priority,
  start,
}) {
  const navigation = useNavigation();
  const [editTaskInputs, setEditTaskInputs] = useState(true);

  let priorityInputLabel = "";

  //Priority Input
  switch (priority) {
    case 1:
      priorityInputLabel = "Baja";
      break;
    case 2:
      priorityInputLabel = "Media";
      break;
    case 3:
      priorityInputLabel = "Importante";
      break;
    case 4:
      priorityInputLabel = "Urgente";
      break;
  }

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Show Task
          </DialogTitle>
        </DialogHeader>
        <Form
          className="flex h-full w-full flex-col gap-3 px-6"
          action="/project-manager/activities"
          method="post"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <input type="hidden" value={taskId} name="task_id" />
              <input type="hidden" value={2} name="type_of_request" />
              <div className="flex gap-4">
                <InputRouter
                  type="text"
                  placeholder="Name of the area"
                  name="name"
                  disabled={editTaskInputs}
                  defaultVal={name}
                />
                <Button
                  className="w-16"
                  variant="ghost"
                  onClick={() => setEditTaskInputs(!editTaskInputs)}
                  type="button"
                >
                  <IonIcon
                    icon={create}
                    size="large"
                    className="text-grisText"
                  ></IonIcon>
                </Button>
              </div>
              <InputRouter
                type="text"
                placeholder="Name of the area"
                name="description"
                disabled={editTaskInputs}
                defaultVal={description}
              />
              <Select name="priority">
                <SelectTrigger className="rounded-lg border-0 border-b bg-gris text-grisSubText !ring-0 !ring-offset-0 focus:border-primarioBotones">
                  <SelectValue placeholder={priorityInputLabel} />
                </SelectTrigger>
                <SelectContent className="text-grisText">
                  <SelectItem value="1">Baja</SelectItem>
                  <SelectItem value="2">Media</SelectItem>
                  <SelectItem value="3">Importante</SelectItem>
                  <SelectItem value="4">Urgente</SelectItem>
                </SelectContent>
              </Select>
              <InputRouter
                name="start"
                defaultVal={start}
                disabled={editTaskInputs}
                type="date"
                placeholder="Comment"
              />
            </div>
          </div>
          <DialogFooter className="px-10 pb-6">
            {editTaskInputs === true ? (
              ""
            ) : (
              <Button
                type="submit"
                className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
              >
                Save
              </Button>
            )}
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditShowTask;
