import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectMultiple from "@/components/ui/selectMultiple";

function FormShowMeet({ modal, setModal, info }) {
  const optionsUsers = [];

  //arrayFillUsers(users, optionsUsers);

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
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Show Meet
          </DialogTitle>
        </DialogHeader>

        <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
          <div className="flex w-full flex-col gap-3 pb-4 font-light">
            <InputRouter name="name" type="text" placeholder="Add Title" />
            <div className="flex gap-4">
              <InputRouter name="date" type="date" placeholder="Add Date" />
              <InputRouter name="start" type="time" placeholder="Start" />
              <InputRouter name="end" type="time" placeholder="End" />
            </div>
            <SelectMultiple
              name={"users"}
              placeholder={"Select Users"}
              options={optionsUsers}
            />
            <div className="flex gap-4">
              <InputRouter name="place" type="text" placeholder="Add Place" />
              <InputRouter name="meet_url" type="text" placeholder="Meet URL" />
            </div>
            <InputRouter
              name="description"
              type="text"
              placeholder="Add Description"
            />
          </div>
        </div>
        <DialogFooter className="px-10 pb-6">
          <Button
            type="button"
            className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormShowMeet;
