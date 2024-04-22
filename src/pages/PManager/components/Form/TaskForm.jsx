import React, { useState } from "react";
import { Form } from "react-router-dom";

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
import { Textarea } from "@/components/ui/textarea";

import DateInput from "./DateInput";

import { IonIcon } from "@ionic/react";
import { personOutline, repeatOutline } from "ionicons/icons";

function TaskForm({ users, csfId }) {
  const [selectTaskType, setSelectTaskType] = useState("tarea");
  const [repeticion, setRepeticion] = useState("1");

  // console.log(users);

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="w-5 h-5 border-2 text-primarioBotones border-primarioBotones rounded-full flex items-center justify-center text-lg">
            +
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex flex-col gap-6">
            <DialogTitle>Agregar Tarea</DialogTitle>
            <Form
              className="flex flex-col gap-2"
              id="task-form"
              action={`/project-manager/${csfId}`}
              method="post"
            >
              {/* selector de task */}
              <div className="flex gap-2">
                <div
                  onClick={() => setSelectTaskType("tarea")}
                  className={
                    selectTaskType === "tarea"
                      ? "bg-[#5B89FF1F] text-[10px] text-primarioBotones px-3 py-2 rounded-lg cursor-pointer"
                      : "bg-gris text-[10px] text-grisSubText px-3 py-2 rounded-lg font-light cursor-pointer"
                  }
                >
                  Tarea
                </div>
                <div
                  onClick={() => setSelectTaskType("proyecto")}
                  className={
                    selectTaskType === "proyecto"
                      ? "bg-[#5B89FF1F] text-[10px] text-primarioBotones px-3 py-2 rounded-lg cursor-pointer"
                      : "bg-gris text-[10px] text-grisSubText px-3 py-2 rounded-lg font-light cursor-pointer"
                  }
                >
                  Proyecto
                </div>
                <Input
                  className="hidden"
                  name="type"
                  type="text"
                  value={selectTaskType == "tarea" ? 0 : 1}
                  readOnly
                />
              </div>

              {/* form parte 1 */}
              <div className="bg-gris rounded-lg p-4 grid grid-cols-6 gap-4">
                <div className="col-span-4">
                  <Input
                    name="name"
                    placeholder="Título"
                    className="placeholder-grisSubText rounded-none border-0 border-b bg-gris focus:border-primarioBotones !ring-0 !ring-offset-0"
                  />
                </div>
                <div className="col-span-2">
                  <Select name="priority">
                    <SelectTrigger className="text-grisSubText rounded-none border-0 border-b bg-gris focus:border-primarioBotones !ring-0 !ring-offset-0">
                      <SelectValue placeholder="Prioridad" />
                    </SelectTrigger>
                    <SelectContent className="text-grisText">
                      <SelectItem value="1">Baja</SelectItem>
                      <SelectItem value="2">Media</SelectItem>
                      <SelectItem value="3">Importante</SelectItem>
                      <SelectItem value="4">Urgente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* form parte 2 */}
              {selectTaskType && selectTaskType === "proyecto" ? (
                <div className="bg-gris rounded-lg p-4 grid grid-cols-6 gap-4">
                  <div className="col-span-4">
                    <Textarea
                      name="description"
                      placeholder="Descripción"
                      className="bg-blancoBox"
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-gris rounded-lg p-4 grid grid-cols-6 gap-4">
                  <Select name="userId">
                    <SelectTrigger className="col-span-4 text-grisSubText rounded-none border-0 border-b bg-gris focus:border-primarioBotones !ring-0 !ring-offset-0">
                      <div className="flex items-center gap-2">
                        <IonIcon className="" icon={personOutline}></IonIcon>
                        <SelectValue placeholder="Responsable" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="text-grisText">
                      {users?.map((user, i) => (
                        <SelectItem key={user.id} value={user.id}>
                          <p>
                            {user.name}
                            {user.last_name} {user.second_last_name}
                          </p>
                        </SelectItem>
                      ))}
                      <SelectItem value="900">Pedro</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="col-span-2"></div>

                  <Select
                    name="repeat"
                    onValueChange={(value) => setRepeticion(value)}
                  >
                    <SelectTrigger className="col-span-2 text-grisSubText rounded-none border-0 border-b bg-gris focus:border-primarioBotones !ring-0 !ring-offset-0">
                      <div className="flex items-center gap-2">
                        <IonIcon className="" icon={repeatOutline}></IonIcon>
                        <SelectValue placeholder="Repetición" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="text-grisText">
                      <SelectItem value="1">No</SelectItem>
                      <SelectItem value="0">Si</SelectItem>
                    </SelectContent>
                  </Select>

                  {repeticion && repeticion === "1" ? (
                    <>
                      <div className="col-span-2">
                        <DateInput name={"start_date"} />
                      </div>
                      <div className="col-span-4">
                        <Textarea
                          name="description"
                          placeholder="Descripción"
                          className="bg-blancoBox"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-span-2">
                        <DateInput name={"start_date"} />
                      </div>
                      <div className="col-span-2">
                        <DateInput name={"end_date"} />
                      </div>

                      <Select name="sequence">
                        <SelectTrigger className="col-span-4 text-grisSubText rounded-none border-0 border-b bg-gris focus:border-primarioBotones !ring-0 !ring-offset-0">
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
                        <Textarea
                          name="description"
                          placeholder="Descripción"
                          className="bg-blancoBox"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              <Input className="hidden" name="action" value="task" readOnly />
              <Input className="hidden" name="fce_id" value={csfId} readOnly />
            </Form>
          </DialogHeader>
          <DialogFooter>
            <Button
              form="task-form"
              className="bg-primario px-10"
              type="submit"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TaskForm;
