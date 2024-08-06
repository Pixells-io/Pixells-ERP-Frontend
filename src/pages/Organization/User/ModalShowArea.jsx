import React, { useEffect, useState } from "react";
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
import { add, closeCircle, create } from "ionicons/icons";

import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const DAYS = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
];

function ModalShowArea({ modal, setModal, area }) {
  const [processInputs, setProcessInputs] = useState(area.process);
  const navigation = useNavigation();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setProcessInputs(area.process);
  }, [area]);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
      setDisabled(true);
    }
  }, [navigation.state]);

  const selectedDays = [];

  arrayFillDays(area.turn, selectedDays);

  function arrayFillDays(data, array) {
    data?.forEach((element) => {
      array.push({
        label: element.day,
        value: element.day,
      });
    });
  }

  function removeProcessField(index) {
    const newFields = processInputs.filter((item, i) => index !== i);
    setProcessInputs(newFields);
  }

  function addProcessField() {
    const processInput = {
      process: "",
    };

    setProcessInputs([...processInputs, processInput]);
  }

  function editProcessInput(e, index) {
    const newFields = processInputs.map((inputs, i) =>
      i === index ? { process: e.target.value } : inputs,
    );
    setProcessInputs(newFields);
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Area
          </DialogTitle>
        </DialogHeader>
        <Form
          id="area-edit-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          action="/organization"
          method="POST"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <div className="flex justify-between gap-3">
                <input
                  type="text"
                  name="action"
                  value="edit-area"
                  hidden
                  readOnly
                />
                <input
                  type="text"
                  name="area_id"
                  value={area.area?.id}
                  hidden
                  readOnly
                />

                <InputRouter
                  name="nombre"
                  type="text"
                  placeholder="Name of the area"
                  defaultVal={area.area?.nombre}
                  disabled={disabled}
                />
                <Button
                  className="w-16"
                  variant="ghost"
                  onClick={() => setDisabled(!disabled)}
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
                name="descripcion"
                type="text"
                placeholder="Description of the area"
                defaultVal={area.area?.descripcion}
                disabled={disabled}
              />

              {processInputs?.map((item, i) => (
                <div key={i} className="flex gap-4" id={`process` + i}>
                  <InputRouter
                    name="proceso"
                    type="text"
                    placeholder="Process"
                    value={processInputs[i].process}
                    disabled={disabled}
                    onChange={(e) => editProcessInput(e, i)}
                  />
                  <button
                    type="button"
                    onClick={() => removeProcessField(i)}
                    className="flex items-center"
                  >
                    <IonIcon
                      icon={closeCircle}
                      className="h-5 w-5 text-grisDisabled hover:text-grisText"
                    ></IonIcon>
                  </button>
                </div>
              ))}
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

              <SelectRouter
                name="tipo_horario"
                placeholder="Working Days"
                options={DAYS}
                isMulti={true}
                disabled={disabled}
                defaultVal={selectedDays}
              />
              <InputRouter
                name="inicio"
                type="time"
                placeholder="Description of the area"
                defaultVal={area.area?.inicio}
                disabled={disabled}
              />
              <InputRouter
                name="fin"
                type="time"
                placeholder="Description of the area"
                defaultVal={area.area?.fin}
                disabled={disabled}
              />
            </div>
          </div>
          {disabled === true ? (
            ""
          ) : (
            <DialogFooter className="px-10 pb-6">
              <Button
                className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Save"}
              </Button>
            </DialogFooter>
          )}
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalShowArea;
