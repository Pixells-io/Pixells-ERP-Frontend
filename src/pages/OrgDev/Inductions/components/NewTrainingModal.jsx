import React, { useState, useEffect } from "react";

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
import InputRouter from "@/layouts/Masters/FormComponents/input";
import DatePicker from "@/components/date-picker";
import { Label } from "@/components/ui/label";

function NewTrainingModal({ modal, setModal, users, areas, positions }) {
  const [initialData, setInitialData] = useState(1);
  const [inputShow, setinputShow] = useState(initialData);
  const [mode, setMode] = useState("0");

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
      label: "Técnica del área",
      value: "Técnica del área",
    },
    {
      label: "Técnica del puesto",
      value: "Técnica del puesto",
    },
    {
      label: "Seguridad, Higiene y Medio Ambiente",
      value: "Seguridad, Higiene y Medio Ambiente",
    },
    {
      label: "Desarrollo Humano",
      value: "Desarrollo Humano",
    },
    {
      label: "Habilidades Gerenciales",
      value: "Habilidades Gerenciales",
    },
  ];

  const typeTrainingOptions = [
    {
      label: "Área",
      value: "1",
    },
    {
      label: "Posición",
      value: "2",
    },
    {
      label: "Usuario",
      value: "3",
    },
  ];

  const optionsAreas = [];
  const optionsPositions = [];
  const optionsUsers = [];

  arrayFillAreas(areas, optionsAreas);
  arrayFillPositions(positions, optionsPositions);
  arrayFillUsers(users, optionsUsers);

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

  function arrayFillUsers(data, array) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      array.push({
        label: element.name + " " + element.last_name,
        value: element.id,
      });
    }
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="flex max-h-[500px] flex-col p-0 sm:max-w-[425px]">
        <DialogHeader className="border border-b px-8 py-4">
          <DialogTitle className="font-poppins">Crear Capacitación</DialogTitle>
        </DialogHeader>
        <Form
          id="training-create-form"
          className="flex h-full flex-col gap-0 overflow-y-scroll px-8"
          action="/org-development/capacitation"
          method="post"
        >
          <input
            type="text"
            className="hidden"
            hidden
            name="action"
            value="1"
            readOnly
          />
          <div className="flex flex-col gap-4 p-4 font-roboto">
            <div className="flex flex-col gap-4 font-light">
              <InputRouter
                name="name"
                type="text"
                placeholder="Nombre de la capacitación"
              />

              <SelectRouter
                options={typeTrainingOptions}
                name={"type"}
                defaultVal={{ label: "Área", value: "1" }}
                onChange={(e) => setinputShow(e.value)}
              />
              {inputShow == "1" ? (
                <SelectRouter
                  name={"areas"}
                  placeholder={"Seleccione las áreas"}
                  options={optionsAreas}
                  isMulti={true}
                />
              ) : inputShow == "2" ? (
                <SelectRouter
                  name={"positions"}
                  placeholder={"Seleccione las posiciones"}
                  options={optionsPositions}
                  isMulti={true}
                />
              ) : (
                <SelectRouter
                  name={"users"}
                  placeholder={"Seleccione los usuarios"}
                  options={optionsUsers}
                  isMulti={true}
                />
              )}

              <SelectRouter
                name={"class_type"}
                placeholder={"Tipo de capacitación"}
                options={typeOptions}
              />

              <SelectRouter
                name={"mode"}
                placeholder={"Modalidad"}
                onChange={(e) => {
                  setMode(e.value);
                }}
                options={[
                  { label: "Presencial", value: "1" },
                  { label: "Virtual", value: "2" },
                ]}
              />

              <SelectRouter
                name={"mode_type"}
                placeholder={"Tipo de Modalidad"}
                options={[
                  { label: "Interna", value: "1" },
                  { label: "Externa", value: "2" },
                ]}
              />

              <InputRouter
                name="location"
                type="text"
                placeholder={
                  mode == "1"
                    ? "Lugar de la capacitación"
                    : mode == "2"
                      ? "Link de la capacitación"
                      : "Seleccione Modalidad"
                }
              />
              <InputRouter
                name="teacher_name"
                type="text"
                placeholder="Nombre del capacitador"
              />
              <Label className="flex w-full flex-col gap-2">
                <p className="pl-1 text-[11px] font-light text-grisHeading">
                  Fecha de la capacitación
                </p>
                <DatePicker name="class_date" placeholder="Fecha" />
              </Label>
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto px-8 pb-4">
          <Button
            form="training-create-form"
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

export default NewTrainingModal;
