import React, { useEffect, useState } from "react";
import Select from "react-select";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { add, closeCircle } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const DAYS = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
];

function FormCreateArea({ modal, setModal }) {
  const [processValue, setProcessValue] = useState([]);
  const navigation = useNavigation();
  const [processInputs, setProcessInputs] = useState([
    {
      proceso: "",
    },
  ]);

  function addProcessField() {
    const processInput = {
      proceso: "",
    };

    setProcessInputs([...processInputs, processInput]);
  }

  function removeProcessField(index) {
    const newFields = processInputs.filter((item, i) => index !== i);
    setProcessInputs(newFields);
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
            Crear área
          </DialogTitle>
        </DialogHeader>
        <Form
          id="area-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          action="/organization"
          method="POST"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <input
                type="text"
                name="action"
                value="create-area"
                hidden
                readOnly
              />
              <InputRouter
                name="nombre"
                type="text"
                placeholder="Nombre de área"
                required={true}
              />
              <InputRouter
                name="descripcion"
                type="text"
                placeholder="Descripción de área"
                required={true}
              />
              <input
                name="procesos_del_area"
                type="text"
                className="hidden"
                readOnly
                value={processValue}
              />
              <div className="flex w-full items-center gap-3">
                <div className="flex w-full flex-col gap-3">
                  {processInputs?.map((input, i) => (
                    <div key={i} className="flex w-full gap-3">
                      <InputRouter name="proceso" placeholder="Proceso" />
                      {i >= 1 ? (
                        <button
                          type="button"
                          className="flex items-center"
                          onClick={() => removeProcessField(i)}
                        >
                          <IonIcon
                            icon={closeCircle}
                            size=""
                            className="h-5 w-5 text-grisDisabled hover:text-grisText"
                          ></IonIcon>
                        </button>
                      ) : (
                        <div className="w-5"></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex self-center">
                  {processInputs?.length <= 4 ? (
                    <button
                      className="flex h-6 w-6 items-center rounded-full bg-primario"
                      onClick={() => addProcessField()}
                      type="button"
                    >
                      <IonIcon
                        icon={add}
                        size="large"
                        className="text-white"
                      ></IonIcon>
                    </button>
                  ) : (
                    <div className="w-6"></div>
                  )}
                </div>
              </div>

              <Select
                name="tipo_horario"
                placeholder={"Días laborables"}
                options={DAYS}
                isMulti={true}
              />
              <InputRouter name="inicio" type="time" placeholder="Inicio" />
              <InputRouter name="fin" type="time" placeholder="Fin" />
            </div>
          </div>
        </Form>
        <DialogFooter className="px-10 pb-6">
          <Button
            form="area-form"
            disabled={navigation.state === "submitting"}
            className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateArea;
