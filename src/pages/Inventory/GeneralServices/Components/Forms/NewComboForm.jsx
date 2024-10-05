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
import SelectServices from "../SelectService";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const packageInputs = [
  { name: "name", type: "text", placeholder: "Nombre" },
  { name: "description", type: "text", placeholder: "Descripcion" },
  { name: "price", type: "number", placeholder: "Precio" },
];

function NewComboForm({ modalPackage, setModalPackage, info }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModalPackage(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modalPackage} onOpenChange={setModalPackage}>
      <DialogContent className="p-0 sm:max-w-[480px]">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle className="font-poppins">Crear Nuevo Combo</DialogTitle>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-y-auto">
          <Form
            id="package-services-form"
            className="flex flex-col gap-4 px-6"
            action="/inventory/general-services"
            method="post"
            encType="multipart/form-data"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          >
            <div className="flex flex-col gap-4 rounded-lg py-2 font-roboto">
              <div className="text-lg font-normal text-[#696974]">
                Informacion
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
            <div className="flex flex-col gap-4 rounded-lg font-roboto">
              {info?.map((category, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="text-lg font-normal text-[#696974]">
                    {category?.category["name"]}
                  </div>
                  <div className="overflow-x-auto pb-4">
                    <div className="flex gap-2 pb-2" style={{ minWidth: "max-content" }}>
                      {category[0]?.services?.map((service, i) => (
                        <SelectServices service={service} key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Form>
        </div>
        <DialogFooter className="px-6 py-4">
          <Button
            form="package-services-form"
            className="justify-normal rounded-lg bg-primarioBotones px-6 font-roboto text-xs font-semibold"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewComboForm;