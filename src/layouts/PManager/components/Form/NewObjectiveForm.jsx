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

const yearsOption = [
  {
    label: "2024",
    value: "2024",
  },
  {
    label: "2025",
    value: "2025",
  },
  {
    label: "2026",
    value: "2026",
  },
  {
    label: "2027",
    value: "2027",
  },
  {
    label: "2028",
    value: "2028",
  },
  {
    label: "2029",
    value: "2029",
  },
  {
    label: "2030",
    value: "2030",
  },
  {
    label: "2031",
    value: "2031",
  },
  {
    label: "2032",
    value: "2032",
  },
  {
    label: "2033",
    value: "2033",
  },
  {
    label: "2034",
    value: "2034",
  },
];

function NewObjectiveForm({ open, setOpen, areas }) {
  const navigation = useNavigation();

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
            <input
              type="text"
              className="hidden"
              hidden
              readOnly
              name="action"
              value="create-objective"
            />
            <InputRouter name="objetivo" placeholder="Nombre del Objetivo" />
            <SelectRouter
              name={"year"}
              placeholder={"Year"}
              options={yearsOption}
              // onChange={(e) => updateAcademicField(i, e)}
              // value={academicInfo[i].academic_grade}
            />
            <SelectRouter
              name="area"
              placeholder="Select Area"
              options={areaArray}
              isMulti={true}
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
  );
}

export default NewObjectiveForm;
