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

function FormCreateTickets({ modal, setModal, areas, users }) {
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
    console.log(event.value);
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
          <DialogTitle className="font-poppins">Create Ticket</DialogTitle>
        </DialogHeader>
        <Form
          id="ticket-form"
          className="flex h-auto flex-col gap-0"
          action="/tickets"
          method="post"
        >
          <input type="hidden" name="type" value={1} />
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex max-h-[500px] flex-col gap-4 overflow-scroll pb-4 font-light">
              {processInputs?.map((input, i) => (
                <div className="flex w-full items-center gap-2" key={i}>
                  <div className="flex w-1/2">
                    <SelectRouter
                      name={"area_id"}
                      placeholder={"Area"}
                      options={areas}
                      value={input.area_id}
                      onChange={(e) => handleChangeArea(e, i)}
                    />
                  </div>
                  <div className="flex w-1/2">
                    <SelectRouter
                      name={"user_id"}
                      placeholder={"Responsable"}
                      options={users}
                      value={input.user_id}
                      onChange={(e) => handleChangeUser(e, i)}
                    />
                  </div>
                  {i == 0 ? (
                    <div className="w-[44px]"></div>
                  ) : (
                    <div
                      className="flex cursor-pointer items-center pl-2"
                      onClick={() => {
                        setProcessInputs(
                          processInputs.filter((input, idx) => idx !== i),
                        );
                      }}
                    >
                      <IonIcon
                        src={closeCircle}
                        className="size-6 text-grisSubText"
                      />
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() =>
                  setProcessInputs([
                    ...processInputs,
                    {
                      area_id: "",
                      user_id: "",
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

export default FormCreateTickets;
