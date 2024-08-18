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
import { add, closeCircle, removeCircle } from "ionicons/icons";
import { Input } from "@/components/ui/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function FormEditTickets({
  modal,
  setModal,
  id,
  name,
  description,
  importance,
  category,
}) {
  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.state === "idle") {
      setProcessInputs([
        {
          area_id: "",
          user_id: "",
        },
      ]);
      setModal(false);
    }
  }, [navigation.state]);

  const [processValue, setProcessValue] = useState([]);
  const [processInputs, setProcessInputs] = useState([
    {
      area_id: "",
      user_id: "",
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

  const handleChangeArea = (event, index) => {
    setProcessInputs(
      processInputs.map((item, i) =>
        i === index
          ? { ...item, area_id: { value: event.value, label: event.label } }
          : item,
      ),
    );
  };

  const handleChangeUser = (event, index) => {
    const newInputs = [...processInputs];
    newInputs[index].user_id = { value: event.value, label: event.label };
    newInputs[index].value = event.value;
    setProcessInputs(newInputs);
  };

  useEffect(() => {
    const values = processInputs.map((input, i) => input.value);
    setProcessValue(values);
  }, [processInputs]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="w-full sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Editar Ticket</DialogTitle>
        </DialogHeader>
        <Form
          id="ticket-form"
          className="flex h-auto flex-col gap-0"
          action="/tickets"
          method="post"
        >
          <input type="hidden" name="type" value={3} />
          <input type="hidden" name="ticket_id" value={id} />
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex max-h-[500px] flex-col gap-4 overflow-scroll pb-4 font-light">
              <InputRouter
                name="issue"
                type="text"
                defaultVal={name}
                placeholder="Tema"
              />
              <InputRouter
                name="description"
                type="text"
                defaultVal={description}
                placeholder="Descripción"
              />
              <SelectRouter
                name={"importance"}
                placeholder={"Importancia"}
                defaultVal={importance}
                options={importanceValues}
              />
              <SelectRouter
                name={"category_ticket"}
                placeholder={"Categoría"}
                defaultVal={category}
                options={categoryValues}
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto">
          <Button
            form="ticket-form"
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

export default FormEditTickets;
