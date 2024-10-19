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
import { add, repeatOutline } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import DatePicker from "@/components/date-picker";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function NewTaskModal({ users, objective_id }) {
  const params = useParams();
  const [modal, setModal] = useState(false);
  const [responsable, setResponsable] = useState("");
  const [selectTaskType, setSelectTaskType] = useState("activity");
  const [repeticion, setRepeticion] = useState("1");

  const navigation = useNavigation();

  const arrayUsers = [];

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  arrayFillUsers(users.data, arrayUsers);

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
        <DialogTrigger className="flex h-8 w-20 items-center justify-center gap-1 rounded-lg bg-primarioBotones text-xs text-white">
          <IonIcon icon={add} className="size-4 shrink-0" />
          Nuevo
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex flex-col gap-6">
            <DialogTitle>Agregar Actividad/Proyecto</DialogTitle>
          </DialogHeader>

          <Form
            className="flex flex-col gap-2"
            id="task-form"
            action={`/project-manager2/${params.id}`}
            method="post"
          >
            {/* selector de task */}
            <div className="flex gap-2">
              <div
                onClick={() => setSelectTaskType("activity")}
                className={
                  selectTaskType === "activity"
                    ? "cursor-pointer rounded-lg bg-[#5B89FF1F] px-3 py-2 text-[10px] text-primarioBotones"
                    : "cursor-pointer rounded-lg bg-gris px-3 py-2 text-[10px] font-light text-grisSubText"
                }
              >
                Actividad
              </div>
              <div
                onClick={() => setSelectTaskType("proyecto")}
                className={
                  selectTaskType === "proyecto"
                    ? "cursor-pointer rounded-lg bg-[#5B89FF1F] px-3 py-2 text-[10px] text-primarioBotones"
                    : "cursor-pointer rounded-lg bg-gris px-3 py-2 text-[10px] font-light text-grisSubText"
                }
              >
                Proyecto
              </div>
              <Input
                className="hidden"
                name="type"
                type="text"
                value={selectTaskType == "activity" ? 0 : 1}
                readOnly
              />
            </div>

            {/* form parte 1 */}
            <div className="grid grid-cols-6 gap-4 rounded-lg p-4">
              <div className="col-span-4">
                <InputRouter name="name" placeholder="Título" />
              </div>
              <div className="col-span-2">
                <label htmlFor="flex flex-col ">
                  <p className="pb-1 text-[11px] font-light text-grisHeading">
                    Prioridad
                  </p>
                  <Select name="priority">
                    <SelectTrigger className="rounded-lg border-0 border-b bg-gris text-grisSubText !ring-0 !ring-offset-0 focus:border-primarioBotones">
                      <SelectValue placeholder="Prioridad" />
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
            {selectTaskType && selectTaskType == "proyecto" ? (
              <div className="grid grid-cols-6 gap-4 rounded-lg px-4">
                <div className="col-span-4">
                  <InputRouter
                    type="textarea"
                    name="description"
                    placeholder="Descripción"
                  />
                </div>
              </div>
            ) : (
              <div className="grid w-full grid-cols-6 gap-4 rounded-lg px-4">
                <div className="col-span-4">
                  <SelectRouter
                    name="userId"
                    placeholder={"Responsable"}
                    options={arrayUsers}
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

                {repeticion && repeticion === "0" ? (
                  <>
                    <div className="col-span-2">
                      <DatePicker name="star_date" />
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
                      <DatePicker name="star_date" />
                    </div>
                    <div className="col-span-2">
                      <DatePicker name="end_date" />
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
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            <Input
              type="hidden"
              className="hidden"
              name="action"
              value="create-task"
              hidden
            />
            <Input
              type="hidden"
              className="hidden"
              name="objective_id"
              value={objective_id}
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

export default NewTaskModal;
