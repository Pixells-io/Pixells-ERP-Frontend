import React, { useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import SelectRouter from "@/layouts/Masters/FormComponents/select";
import SelectMultiple from "@/components/ui/selectMultiple";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function NewInductionModal({ modal, setModal, positions, areas }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  const typeOptions = [
    {
      label: "General",
      value: "General",
    },
    {
      label: "Position",
      value: "Position",
    },
  ];

  const optionsAreas = [];
  const optionsPositions = [];

  arrayFillAreas(areas, optionsAreas);
  arrayFillPositions(positions, optionsPositions);

  function arrayFillAreas(data, array) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      array.push({
        label: element.nombre,
        value: element.id,
      });
    }
  }

  function arrayFillPositions(data, array) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      array.push({
        label: element.position_name,
        value: element.id,
      });
    }
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="h-[500px] overflow-auto sm:max-w-[425px]">
        <div className="-mx-6 border-b pb-2 pl-2">
          <DialogHeader className="px-6">
            <DialogTitle className="font-poppins">Crear Inducción</DialogTitle>
          </DialogHeader>
        </div>
        <Form
          id="induction-create-form"
          className="flex h-auto flex-col gap-0"
          action="/org-development/induction"
          method="post"
        >
          <input type="hidden" name="action" value="1" />
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4 font-light">
              <InputRouter
                name="name"
                type="text"
                placeholder="Nombre de la inducción"
              />
              <InputRouter
                name="description"
                type="text"
                placeholder="Descripción de la inducción"
              />
              <SelectRouter
                name={"tipo"}
                placeholder={"Tipo de inducción"}
                options={typeOptions}
              />
              <SelectRouter
                name={"responsable"}
                placeholder={"Seleccione un puesto de responsabilidad"}
                options={optionsPositions}
              />
              <SelectMultiple
                name={"areas"}
                placeholder={"Seleccione las áreas"}
                options={optionsAreas}
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto">
          <Button
            form="induction-create-form"
            disabled={navigation.state === "submitting"}
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewInductionModal;
