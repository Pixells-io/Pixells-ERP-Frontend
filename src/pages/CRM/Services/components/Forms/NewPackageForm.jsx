import React, { useState, useEffect } from "react";

import { Form } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import FormInput from "@/layouts/CRM/components/Form/FormInput";
import SelectServices from "../SelectServices";

const packageInputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
  },
];

function NewPackageForm({ modalPackage, setModalPackage, info }) {
  return (
    <Dialog open={modalPackage} onOpenChange={setModalPackage}>
      <DialogContent className="sm:max-w-[480px] overflow-auto ">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create New Package</DialogTitle>
        </DialogHeader>
        <Form
          id="package-services-form"
          className="flex flex-col gap-4"
          action="/crm/services"
          method="post"
        >
          <div className="flex flex-col gap-4 font-roboto bg-[#F6F6F6] rounded-lg p-4">
            <div className="text-[#696974] text-lg font-normal">
              Information
            </div>
            <div className="flex flex-col font-light gap-4 pb-4">
              <input type="hidden" name="type" value={3} />
              {packageInputs?.map((input, i) => (
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
            {info?.map((category, i) => {
              // console.log(category);
              return (
                <div>
                  <div className="text-[#696974] text-lg font-normal">
                    {category.category["name"]}
                  </div>
                  <div className="flex flex-col font-light gap-4 pb-4">
                    <div className="flex grid gap-2 grid-cols-4">
                      {category[0]?.services?.map((service, i) => (
                        <SelectServices service={service} key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Form>
        <DialogFooter>
          <Button
            form="package-services-form"
            className="font-roboto font-semibold text-xs justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewPackageForm;
