import React, { useState, useEffect } from "react";

import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import FormInput from "@/layouts/CRM/components/Form/FormInput";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const businessInputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
  },
  {
    name: "description",
    type: "text",
    placeholder: "Description",
  },
  {
    name: "color",
    type: "color",
    placeholder: "Color",
  },
];

const contactInputs = [
  {
    name: "participants",
    type: "text",
    placeholder: "Select participants",
  },
];

const categoryInputs = [
  {
    name: "process",
    type: "text",
    placeholder: "Step 1 - Title",
  },
  {
    name: "process_action",
    type: "text",
    placeholder: "Action",
  },
];

function NewServiceForm({
  modalServices,
  setModalServices,
  categories,
  positions,
}) {
  const navigation = useNavigation();
  const selectCategories = [];
  const selectResponsible = [];

  useEffect(() => {
    if (navigation.state === "idle") {
      setModalServices(false);
    }
  }, [navigation.state]);

  arrayFillCategories(categories, selectCategories);
  arrayFillResponsible(positions, selectResponsible);

  function arrayFillCategories(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.name,
        value: element.id,
        placeholder: element.name,
      });
    });
  }

  function arrayFillResponsible(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.position_name,
        value: element.id,
        placeholder: element.position_name,
      });
    });
  }

  return (
    <Dialog open={modalServices} onOpenChange={setModalServices}>
      <DialogContent className="h-[650px] overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b">
          <DialogTitle className="p-8 font-poppins">
            Create New Service
          </DialogTitle>
        </DialogHeader>
        <Form
          id="service-form"
          className="flex flex-col gap-4 px-8"
          action="/crm/services"
          method="post"
        >
          <input type="hidden" name="type" value={1} />
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Service Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              <div className="">
                <SelectRouter
                  name={"category"}
                  placeholder={"Category"}
                  options={selectCategories}
                />
              </div>
              <InputRouter name="name" type="text" placeholder="Name" />
              <InputRouter
                name="description"
                type="text"
                placeholder="Description"
              />
              <InputRouter name="color" type="color" placeholder="Color" />
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Responsible
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              <div className="">
                <SelectRouter
                  name={"position_id"}
                  placeholder={"Responsable position"}
                  options={selectResponsible}
                />
              </div>

              <SelectRouter
                name="participants"
                placeholder="Select participants"
                // options={}
                isMulti={true}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">Process</div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              <InputRouter
                name="process"
                type="text"
                placeholder="Step 1 - Title"
              />
              <InputRouter
                name="process_action"
                type="text"
                placeholder="Action"
              />
            </div>
          </div>
        </Form>
        <DialogFooter className="px-8 pb-4">
          <Button
            form="service-form"
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewServiceForm;
