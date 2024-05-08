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
      <DialogContent className="sm:max-w-[425px] overflow-auto h-[650px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create New Service</DialogTitle>
        </DialogHeader>
        <Form
          id="service-form"
          className="flex flex-col gap-4"
          action="/crm/services"
          method="post"
        >
          <input type="hidden" name="type" value={1} />
          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="text-[#696974] text-lg font-normal">
              Service Information
            </div>
            <div className="flex flex-col font-light gap-4 pb-4">
              <div className="">
                <SelectRouter
                  name={"category"}
                  placeholder={"Category"}
                  options={selectCategories}
                />
              </div>
              {businessInputs?.map((input, i) => (
                <FormInput
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="text-[#696974] text-lg font-normal">
              Responsible
            </div>
            <div className="flex flex-col font-light gap-4 pb-4">
              <div className="">
                <SelectRouter
                  name={"position_id"}
                  placeholder={"Position"}
                  options={selectResponsible}
                />
              </div>
              {contactInputs?.map((input, i) => (
                <FormInput
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="text-[#696974] text-lg font-normal">Process</div>
            <div className="flex flex-col font-light gap-4 pb-4">
              {categoryInputs?.map((input, i) => (
                <FormInput
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
            </div>
          </div>
        </Form>
        <DialogFooter>
          <Button
            form="service-form"
            className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
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
