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
import FormInput from "@/layouts/CRM/components/Form/FormInput";

import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { Input } from "@/components/ui/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function FormCreateTickets({ modal, setModal, areas, users }) {
  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  const [processValue, setProcessValue] = useState([]);
  const [processInputs, setProcessInputs] = useState([
    {
      name: "proceso",
      type: "text",
      placeholder: "Process of the area",
      value: "",
    },
  ]);

  const importanceValues = [
    {
      label: "Low",
      value: 1,
    },
    {
      label: "Medium",
      value: 2,
    },
    {
      label: "High",
      value: 3,
    },
  ];

  const categoryValues = [
    {
      label: "Hardware",
      value: "Hardware",
    },
    {
      label: "Phone replacement",
      value: "Phone replacement",
    },
    {
      label: "New Phone",
      value: "New Phone",
    },
    {
      label: "PC Maintenance",
      value: "PC Maintenance",
    },
    {
      label: "New PC",
      value: "New PC",
    },
    {
      label: "Scanners",
      value: "Scanners",
    },
    {
      label: "Software",
      value: "Software",
    },
    {
      label: "Facilities",
      value: "Facilities",
    },
    {
      label: "Reinstallations",
      value: "Reinstallations",
    },
    {
      label: "Discharge",
      value: "Discharge",
    },
    {
      label: "Homecare",
      value: "Homecare",
    },
    {
      label: "Maintenance",
      value: "Maintenance",
    },
    {
      label: "Store",
      value: "Store",
    },
    {
      label: "Systems",
      value: "Systems",
    },
    {
      label: "Product delivery",
      value: "Product delivery",
    },
  ];

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
      <DialogContent className="overflow-auto sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create Ticket</DialogTitle>
        </DialogHeader>
        <Form
          id="ticket-form"
          className="flex h-auto flex-col gap-0"
          action="/tickets"
          method="post"
        >
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex flex-col gap-4 pb-4 font-light">
              {processInputs?.map((input, i) => (
                <div className="flex" key={i}>
                  <div className="mr-2 w-2/4">
                    <SelectRouter
                      name={"area_id"}
                      placeholder={"Area"}
                      options={areas}
                    />
                  </div>
                  <div className="ml-2 w-2/4">
                    <SelectRouter
                      name={"user_id"}
                      placeholder={"Responsable"}
                      options={users}
                    />
                  </div>
                </div>
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
                className="flex h-6 w-6 items-center self-end rounded-full bg-primario"
              >
                <IonIcon
                  icon={add}
                  size="large"
                  className="text-white"
                ></IonIcon>
              </button>
              <InputRouter name="issue" type="text" placeholder="Issue" />
              <InputRouter
                name="description"
                type="text"
                placeholder="Description"
              />
              <SelectRouter
                name={"importance"}
                placeholder={"Importance"}
                options={importanceValues}
              />
              <SelectRouter
                name={"category_ticket"}
                placeholder={"Category"}
                options={categoryValues}
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto">
          <Button
            form="ticket-form"
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateTickets;
