import React, { useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { IonIcon } from "@ionic/react";
import { addCircle, addCircleOutline } from "ionicons/icons";

function NewObjectiveForm({ open, setOpen, areas }) {
  const navigation = useNavigation();
  console.log(areas);

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  const areaArray = [];

  arrayFillAreas(areas, areaArray);

  function arrayFillAreas(data, array) {
    data.forEach((element) => {
      array.push({
        label: element.nombre,
        value: element.id,
      });
    });
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogTrigger className="flex items-center justify-center rounded-full border-2 !outline-none !ring-0">
          <IonIcon
            icon={addCircleOutline}
            className="h-6 w-6 text-primarioBotones"
          />
        </DialogTrigger> */}
        <DialogContent className="p-0">
          <DialogHeader className="flex border-b px-8 py-6">
            <DialogTitle className="">Agregar Objetivo Estratégico</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 rounded-lg px-12">
            <Form
              className="flex flex-col gap-4"
              id="objective-form"
              action="/project-manager"
              method="post"
            >
              <InputRouter name="objetivo" placeholder="Nombre del Objetivo" />

              <SelectRouter
                name="area"
                placeholder="Select Area"
                options={areaArray}
              />
              <div className="flex self-end pb-4">
                <Button className="bg-primario px-8" type="submit">
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NewObjectiveForm;
