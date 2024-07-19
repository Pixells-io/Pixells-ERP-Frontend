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
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import SelectMultiple from "@/components/ui/selectMultiple";

function NewInductionModal({ modal, setModal, positions, areas }) {
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
      <DialogContent className="overflow-auto sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create Induction</DialogTitle>
        </DialogHeader>
        <Form
          id="induction-create-form"
          className="flex h-auto flex-col gap-0"
          action="/org-development/induction"
          method="post"
        >
          <div className="flex flex-col gap-4 rounded-lg bg-[#F6F6F6] p-4 font-roboto">
            <input
              type="text"
              hidden
              readOnly
              className="hidden"
              value="1"
              name="action"
            />
            <div className="flex flex-col gap-4 pb-4 font-light">
              <FormInput
                name="name"
                type="text"
                placeholder="Name of the Induction"
              />
              <FormInput
                name="description"
                type="text"
                placeholder="Description of the Induction"
              />
              <SelectRouter
                name={"tipo"}
                placeholder={"Type of Induction"}
                options={typeOptions}
              />
              <SelectRouter
                name={"responsable"}
                placeholder={"Select a responsable position"}
                options={optionsPositions}
              />
              <SelectMultiple
                name={"areas"}
                placeholder={"Select the areas"}
                options={optionsAreas}
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto">
          <Button
            form="induction-create-form"
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewInductionModal;
