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

function ModalShowArea({ modal, setModal, area }) {
  const [disabled, setDisabled] = useState(true);
  console.log(area?.area);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Area
          </DialogTitle>
        </DialogHeader>
        <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
          <div className="flex w-full flex-col gap-3 pb-4 font-light">
            <Button
              className=""
              variant="ghost"
              onClick={() => setDisabled(!disabled)}
            >
              <IonIcon
                icon={create}
                size="large"
                className="text-grisText"
              ></IonIcon>
            </Button>
            <InputRouter
              name="nombre"
              type="text"
              placeholder="Name of the area"
              defaultVal={area.area?.nombre}
              disabled={disabled}
            />
            <InputRouter
              name="descripcion"
              type="text"
              placeholder="Description of the area"
              defaultVal={area.area?.nombre}
              disabled={disabled}
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
            <div className="flex w-full items-center gap-3">
              <div className="flex w-full flex-col gap-3"></div>
              <div className="flex self-center"></div>
            </div>
            <InputRouter name="inicio" type="time" placeholder="Start" />
            <InputRouter name="fin" type="time" placeholder="End" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ModalShowArea;
