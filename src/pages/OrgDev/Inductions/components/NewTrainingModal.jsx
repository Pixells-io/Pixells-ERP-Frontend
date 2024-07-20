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
import InputRouter from "@/layouts/Masters/FormComponents/input";
import DatePicker from "@/components/date-picker";

function NewTrainingModal({ modal, setModal, users, areas, positions }) {
  const [initialData, setInitialData] = useState(1);
  const [inputShow, setinputShow] = useState(initialData);

  const typeOptions = [
    {
      label: "Online",
      value: "Online",
    },
    {
      label: "Presential",
      value: "Presential",
    },
  ];

  const typeTrainingOptions = [
    {
      label: "Area",
      value: "Area",
    },
    {
      label: "Position",
      value: "Position",
    },
    {
      label: "User",
      value: "User",
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
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border border-b px-8 py-4">
          <DialogTitle className="font-poppins">Create Training</DialogTitle>
        </DialogHeader>
        <Form
          id="training-create-form"
          className="flex h-auto flex-col gap-0 px-8"
          action="/org-development/capacitation"
          method="post"
        >
          <input
            type="text"
            hidden
            className="hidden"
            name="action"
            value="1"
            readOnly
          />
          <div className="flex flex-col gap-4 p-4 font-roboto">
            <div className="flex flex-col gap-4 font-light">
              <InputRouter
                name="name"
                type="text"
                placeholder="Name of the Training"
              />
              <select
                name="type"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                onChange={(e) => setinputShow(e.target.value)}
              >
                <option value="1">Area</option>
                <option value="2">Position</option>
                <option value="3">User</option>
              </select>
              {inputShow == "1" ? (
                <SelectMultiple
                  name={"areas"}
                  placeholder={"Select the areas"}
                  options={optionsAreas}
                />
              ) : inputShow == "2" ? (
                <SelectMultiple
                  name={"positions"}
                  placeholder={"Select the positions"}
                  options={optionsPositions}
                />
              ) : (
                <SelectMultiple
                  name={"users"}
                  placeholder={"Select the users"}
                  options={optionsUsers}
                />
              )}

              <SelectRouter
                name={"class_type"}
                placeholder={"Type of class"}
                options={typeOptions}
              />
              <InputRouter
                name="location"
                type="text"
                placeholder="Location of the Training"
              />
              <InputRouter
                name="teacher_name"
                type="text"
                placeholder="Name of the teacher"
              />
              <InputRouter
                name="teacher_last_name"
                type="text"
                placeholder="Last name of the teacher"
              />
              <InputRouter
                name="teacher_second_last_name"
                type="text"
                placeholder="Second last name of the teacher"
              />
              <DatePicker name="class_date" placeholder="Date" />
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto px-8 pb-4">
          <Button
            form="training-create-form"
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewTrainingModal;
