import React, { useState, useEffect } from "react";

import { Form } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormInput from "@/layouts/CRM/components/Form/FormInput";

import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { Input } from "@/components/ui/input";

function FormCreateArea({ modal, setModal }) {
  const [processValue, setProcessValue] = useState([]);
  const [processInputs, setProcessInputs] = useState([
    {
      name: "proceso",
      type: "text",
      placeholder: "Process of the area",
      value: "",
    },
  ]);

  const handleChange = (event, index) => {
    const { value } = event.target;
    const newInputs = [...processInputs];
    newInputs[index].value = value;
    setProcessInputs(newInputs);
  };

  useEffect(() => {
    const values = processInputs.map((input, i) => input.value);
    setProcessValue(values);
  }, [processInputs]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="sm:max-w-[425px] overflow-auto">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create Area</DialogTitle>
        </DialogHeader>
        <Form
          id="area-form"
          className="flex flex-col gap-0 h-auto"
          action="/organization"
          method="post"
        >
          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="flex flex-col font-light gap-4 pb-4">
              <FormInput
                name="nombre"
                type="text"
                placeholder="Name of the area"
              />
              <FormInput
                name="descripcion"
                type="text"
                placeholder="Description of the area"
              />
              <input
                name="procesos_del_area"
                type="text"
                className="hidden"
                readOnly
                value={processValue}
              />
              {processInputs?.map((input, i) => (
                <Input
                  className="border-0 border-b border-grisSubText focus:border-primarioBotones focus:border-b-2 rounded-none bg-transparent !ring-0 !ring-offset-0"
                  key={i}
                  name={input.name}
                  type={input.text}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={(e) => handleChange(e, i)}
                />
              ))}
              <button
                onClick={() =>
                  setProcessInputs([
                    ...processInputs,
                    {
                      name: "proceso",
                      type: "text",
                      placeholder: "Process of the area",
                    },
                  ])
                }
                type="button"
                className="flex self-end bg-primario rounded-full h-6 w-6 items-center"
              >
                <IonIcon
                  icon={add}
                  size="large"
                  className="text-white"
                ></IonIcon>
              </button>

              <FormInput
                name="tipo_horario"
                type="text"
                placeholder="Type of turn"
              />
              <FormInput name="inicio" type="time" placeholder="Start" />
              <FormInput name="fin" type="time" placeholder="End" />
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto">
          <Button
            form="area-form"
            className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateArea;
