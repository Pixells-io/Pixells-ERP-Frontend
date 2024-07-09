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
import SelectServices from "../SelectServices";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const packageInputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
  },
];

function NewPackageForm({ modalPackage, setModalPackage, info }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModalPackage(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modalPackage} onOpenChange={setModalPackage}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[480px]">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle className="font-poppins">Create New Package</DialogTitle>
        </DialogHeader>
        <Form
          id="package-services-form"
          className="flex flex-col gap-4 px-6"
          action="/crm/services"
          method="post"
          encType="multipart/form-data"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(e.key);
              e.preventDefault();
            }
          }}
        >
          <div className="flex flex-col gap-4 rounded-lg px-6 py-2 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              <input type="hidden" name="type" value={3} hidden readOnly />
              {packageInputs?.map((input, i) => (
                <InputRouter
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
            </div>
          </div>
          <div className="border-b"></div>
          <div className="flex flex-col gap-4 rounded-lg px-6 font-roboto">
            {info?.map((category, i) => {
              return (
                <div key={i} className="flex flex-col gap-3">
                  <div className="text-lg font-normal text-[#696974]">
                    {category?.category["name"]}
                  </div>
                  <div className="flex flex-col gap-4 pb-4 font-light">
                    <div className="flex grid-cols-4 gap-2">
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
        <DialogFooter className="px-6 pb-4">
          <Button
            form="package-services-form"
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

export default NewPackageForm;
