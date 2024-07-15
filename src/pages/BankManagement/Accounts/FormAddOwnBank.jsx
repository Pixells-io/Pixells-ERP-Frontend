import React, { useEffect, useState } from "react";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function FormAddOwnBank({ modal, setModal }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Banco Propio
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
        <Form
          id="own-bank-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          //   action="/organization"
          method="post"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-8 font-light">
              <div className="flex flex-col gap-3">
                <div className="text-sm font-normal text-[#696974]">
                  Información Inicial
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-6">
                    <SelectRouter
                      name="register_country"
                      options={[
                        { label: "México", value: "MX" },
                        { label: "EUA", value: "EUA" },
                      ]}
                      placeholder="País"
                    />

                    <InputRouter
                      name="register_bankKey"
                      type="text"
                      placeholder="Clave del Banco"
                    />
                  </div>
                  <div className="pl-2 text-xs text-grisSubText">
                    Banco Nacional del México
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-sm font-normal text-[#696974]">
                  Datos del Banco Propio
                </div>
                <SelectRouter
                  name="register_society"
                  options={[]}
                  placeholder="Sociedad"
                />
                <div className="flex gap-6">
                  <InputRouter
                    name="register_bankId"
                    type="text"
                    placeholder="ID del Banco"
                  />
                  <InputRouter
                    name="register_bankName"
                    type="text"
                    placeholder="Nombre del Banco Propio"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-sm font-normal text-[#696974]">
                  Comunicación
                </div>
                <div className="flex gap-6">
                  <InputRouter
                    name="register_phoneNumber"
                    type="text"
                    placeholder="Teléfono"
                  />
                  <InputRouter
                    name="register_email"
                    type="text"
                    placeholder="Correo"
                  />
                </div>
              </div>
            </div>
          </div>
        </Form>
        </DialogDescription>
        <DialogFooter className="px-10 pb-6">
          <Button
            form="own-bank-form"
            className="h-8 justify-normal rounded-lg rounded-xl bg-primarioBotones px-6 text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormAddOwnBank;
