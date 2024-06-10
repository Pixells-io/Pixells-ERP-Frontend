import React, { useState } from "react";
import Select from "react-select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IonIcon } from "@ionic/react";
import { add, closeCircle, create } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Button } from "@/components/ui/button";
import { Form } from "react-router-dom";

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
  const [disabled, setDisabled] = useState(true);

  const selectedDays = [];

  arrayFillDays(area.turn, selectedDays);

  // console.log(area.process);

  function arrayFillDays(data, array) {
    data?.forEach((element) => {
      array.push({
        label: element.day,
        value: element.day,
      });
    });
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
          action="/area-edit"
          method="post"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <div className="flex gap-3">
                <input type="hidden" name="area_id" value={area.area?.id} />
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
              {area.process?.map((item, i) => (
                <InputRouter
                  name="proceso"
                  type="text"
                  placeholder="Process"
                  defaultVal={item.process}
                  disabled={disabled}
                  key={i}
                />
              ))}
              <Select
                name="tipo_horario"
                placeholder={"Working Days"}
                options={DAYS}
                isMulti={true}
                disabled={disabled}
                defaultValue={selectedDays}
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
        </Form>
        {disabled === true ? (
          ""
        ) : (
          <DialogFooter className="px-10 pb-6">
            <Button
              form="area-edit-form"
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
            >
              Save
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ModalShowArea;
