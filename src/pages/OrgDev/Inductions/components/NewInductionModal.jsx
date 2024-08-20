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
import InputRouter from "@/layouts/Masters/FormComponents/input";

function NewInductionModal({ modal, setModal, positions, areas, users }) {
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
      label: "Area Technique",
      value: "Area Technique",
    },
    {
      label: "Position Technique",
      value: "Position Technique",
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

  const selectUsers = [];

  arrayFillUsers(users, selectUsers);

  function arrayFillUsers(data, array) {
    let dataParse = data;

    dataParse.forEach((element) => {
      array.push({
        label:
          element.name +
          " " +
          element.last_name +
          " " +
          element.second_last_name,
        value: element.id,
      });
    });
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="h-[500px] overflow-auto sm:max-w-[425px]">
        <div className="-mx-6 border-b pb-2 pl-2">
          <DialogHeader className="px-6">
            <DialogTitle className="font-poppins">Create Induction</DialogTitle>
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
                placeholder="Induction Name"
              />
              <SelectRouter
                name={"tipo"}
                placeholder={"Induction type"}
                options={typeOptions}
              />
              <SelectRouter
                name={"areas"}
                placeholder={"Select areas"}
                options={optionsAreas}
                isMulti={true}
              />
              <SelectRouter
                name={"responsable"}
                placeholder={"Select a responsible"}
                options={selectUsers}
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
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewInductionModal;
