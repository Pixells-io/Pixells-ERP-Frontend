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
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function FormCreateResponsible({ modal, setModal, ticket, areas, users }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  const areasOptions = [];
  const usersOptions = [];

  arrayFillAreas(areas, areasOptions);
  arrayFillUsers(users, usersOptions);

  function arrayFillAreas(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.nombre,
        value: element.id,
        placeholder: "0",
      });
    });
  }

  function arrayFillUsers(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label:
          element.name +
          " " +
          element.last_name +
          " " +
          element.second_last_name,
        value: element.id,
        placeholder: "0",
      });
    });
  }
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="h-auto overflow-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create Responsible</DialogTitle>
        </DialogHeader>
        <Form
          id="ticket-responsible-form"
          className="flex h-auto flex-col gap-0"
          action={`/tickets/${ticket}`}
          method="post"
        >
          <input type="hidden" name="form" value={3} />
          <input type="hidden" name="ticket_id" value={ticket} />
          <div className="flex">
            <div className="mr-2 w-2/4">
              <SelectRouter
                name={"area_id"}
                placeholder={"Area"}
                options={areasOptions}
              />
            </div>
            <div className="ml-2 w-2/4">
              <SelectRouter
                name={"user_id"}
                placeholder={"Responsable"}
                options={usersOptions}
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="h-auto">
          <Button
            form="ticket-responsible-form"
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateResponsible;
