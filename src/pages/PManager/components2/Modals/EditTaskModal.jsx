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
import { repeatOutline } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import DatePicker from "@/components/date-picker";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function EditTaskModal({ task, users, modal, setModal, form }) {
  console.log(task);
  console.log(task.repeat_task_count == 0 ? "0" : "1");
  const params = useParams();
  const navigation = useNavigation();
  const [repeticion, setRepeticion] = useState(
    task?.repeat_task_count == 1 ? "0" : "1",
  );

  const arrayUsers = [];
  arrayFillUsers(users.data, arrayUsers);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  useEffect(() => {
    setRepeticion(task.repeat);
  }, [task]);

  function arrayFillUsers(data, array) {
    data.forEach((element) => {
      array.push({
        label: `${element.name} ${element.last_name} ${element.second_last_name}`,
        value: element.id,
      });
    });
  }

  return (
    <div>
      <Dialog open={modal} onOpenChange={setModal}>
        <DialogContent>
          <DialogHeader className="flex flex-col gap-6">
            <DialogTitle>Editar Actividad {task.name}</DialogTitle>
          </DialogHeader>

          <Form
            className="flex flex-col gap-2"
            id="task-form"
            action={form.route}
            method="post"
          >
            {/* selector de task */}
            <div className="flex gap-2">
              <div className="cursor-pointer rounded-lg bg-[#5B89FF1F] px-3 py-2 text-[10px] text-primarioBotones">
                Actividad
              </div>

              <Input
                className="hidden"
                name="type"
                type="text"
                value={0}
                readOnly
              />
            </div>

            {/* form parte 1 */}
            <div className="grid grid-cols-6 gap-4 rounded-lg p-4">
              <div className="col-span-4">
                <InputRouter
                  name="name"
                  placeholder="Título"
                  defaultVal={task.name}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="flex flex-col ">
                  <p className="pb-1 text-[11px] font-light text-grisHeading">
                    Prioridad
                  </p>
                  <Select name="priority" defaultValue={task.priority + ""}>
                    <SelectTrigger className="rounded-lg border-0 border-b bg-gris text-grisSubText !ring-0 !ring-offset-0 focus:border-primarioBotones">
                      <SelectValue placeholder="Prioridad" />
                    </SelectTrigger>
                    <SelectContent className="text-grisText">
                      <SelectItem value="1">Baja</SelectItem>
                      <SelectItem value="2">Media</SelectItem>
                      <SelectItem value="3">Urgente</SelectItem>
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
                  defaultVal={{
                    label: task.assigned?.name,
                    value: task.assigned?.id,
                  }}
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
                    <DatePicker name="star_date" defaultVal={task.start} />
                  </div>
                  <div className="col-span-4">
                    <InputRouter
                      type="textarea"
                      name="description"
                      placeholder="Descripción"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-2">
                    <DatePicker name="star_date" defaultVal={task.start} />
                  </div>
                  <div className="col-span-2">
                    <DatePicker name="end_date" defaultVal={task.end} />
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
                      defaultVal={task.description}
                    />
                  </div>
                </>
              )}
            </div>

            <Input
              type="hidden"
              className="hidden"
              name="action"
              value="edit-task"
              hidden
            />
            <Input
              type="hidden"
              className="hidden"
              name="task_id"
              value={task.id}
              hidden
            />

            <DialogFooter>
              <Button
                className="bg-primario px-10"
                type="submit"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Guardar"}
              </Button>
            </DialogFooter>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditTaskModal;
