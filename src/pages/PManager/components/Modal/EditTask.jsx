import React, { useEffect, useState } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { informationCircle, repeatOutline } from "ionicons/icons";

import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import DatePicker from "@/components/date-picker";

function EditTask({ users, csfId, task }) {
  const params = useParams();
  const [modal, setModal] = useState(false);
  const [responsable, setResponsable] = useState("");
  const [repeticion, setRepeticion] = useState(task?.repeat + "");

  const navigation = useNavigation();

  const arrayUsers = [];
  const userSelected = {
    label: task?.creator?.name,
    value: task?.creator?.id,
  };

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  arrayFillUsers(users, arrayUsers);

  function arrayFillUsers(data, array) {
    data.forEach((element) => {
      array.push({
        label: `${element.name} ${element.last_name} ${element.second_last_name}`,
        value: element.id,
      });
    });
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger>
        <IonIcon icon={informationCircle} className="flex size-5" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-6">
          <DialogTitle>Editar Tarea</DialogTitle>
        </DialogHeader>

        <Form
          className="flex flex-col gap-2"
          id="task-form"
          action={`/project-manager/${params.id}`}
          method="post"
        >
          {/* form parte 1 */}
          <div className="grid grid-cols-6 gap-4 rounded-lg p-4">
            <div className="col-span-4">
              <InputRouter
                name="name"
                placeholder="Título"
                defaultVal={task?.name}
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="flex flex-col ">
                <p className="pb-1 text-[11px] font-light text-grisHeading">
                  Prioridad
                </p>
                <Select name="priority" defaultValue={task.priority + ""}>
                  <SelectTrigger className="rounded-lg border-0 border-b bg-gris text-grisSubText !ring-0 !ring-offset-0 focus:border-primarioBotones">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="text-grisText">
                    <SelectItem value="1">Baja</SelectItem>
                    <SelectItem value="2">Media</SelectItem>
                    <SelectItem value="3">Importante</SelectItem>
                    <SelectItem value="4">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </label>
            </div>
          </div>

          {/* form parte 2 */}
          <div className="grid w-full grid-cols-6 gap-4 rounded-lg px-4">
            <div className="col-span-4">
              <SelectRouter
                name="userId"
                placeholder={"Responsable"}
                options={arrayUsers}
                defaultVal={userSelected}
              />
            </div>

            <div className="col-span-2"></div>

            <Select
              name="repeat"
              value={repeticion}
              onValueChange={(value) => setRepeticion(value)}
            >
              <SelectTrigger className="col-span-2 rounded-lg border-0 border-b bg-gris text-grisSubText !ring-0 !ring-offset-0 focus:border-primarioBotones">
                <div className="flex items-center gap-2">
                  <IonIcon className="" icon={repeatOutline}></IonIcon>
                  <SelectValue placeholder="Repetición" />
                </div>
              </SelectTrigger>
              <SelectContent className="text-grisText">
                <SelectItem value="0">No</SelectItem>
                <SelectItem value="1">Si</SelectItem>
              </SelectContent>
            </Select>

            {repeticion && repeticion == "0" ? (
              <>
                <div className="col-span-2">
                  {/* <input type="date" name="star_date" /> */}
                  <DatePicker name="end" defaultVal={task?.end} />
                </div>
                <div className="col-span-4">
                  {/* <Textarea
                    name="description"
                    placeholder="Descripción"
                    className="bg-blancoBox"
                  /> */}
                  <InputRouter
                    type="textarea"
                    name="description"
                    placeholder="Descripción"
                    defaultVal={task?.description}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="col-span-2">
                  {/* <input type="date" name="star_date" /> */}
                  <DatePicker name="start" defaultVal={task?.start} />
                </div>
                <div className="col-span-2">
                  {/* <input type="date" name="end_date" /> */}
                  <DatePicker name="end" defaultVal={task?.end} />
                </div>

                <Select name="sequence">
                  <SelectTrigger className="col-span-4 rounded-lg border-0 border-b bg-gris text-grisSubText !ring-0 !ring-offset-0 focus:border-primarioBotones">
                    <div className="flex items-center gap-2">
                      <SelectValue
                        placeholder="¿Cada cuanto se repite?"
                        className="placeholder:text-[10px]"
                      />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="text-grisText">
                    <SelectItem value="1">1 day</SelectItem>
                    <SelectItem value="2">7 days</SelectItem>
                    <SelectItem value="3">15 days</SelectItem>
                    <SelectItem value="4">30 days</SelectItem>
                  </SelectContent>
                </Select>
                <div className="col-span-2"></div>
                <div className="col-span-4">
                  <InputRouter
                    type="textarea"
                    name="description"
                    placeholder="Descripción"
                    defaultVal={task?.description}
                  />
                </div>
              </>
            )}
          </div>

          <input
            className="hidden"
            name="action"
            value="edit-task"
            readOnly
            hidden
          />
          <input
            className="hidden"
            name="task_id"
            value={task?.id}
            readOnly
            hidden
          />

          <DialogFooter>
            <Button
              className="bg-primario px-10"
              type="submit"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? "Submitting..." : "Editar"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditTask;
