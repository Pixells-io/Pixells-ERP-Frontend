import React, { useEffect } from "react";

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
import SelectField from "@/layouts/Masters/FormComponents/SelectField";

function FormAddOwnBank({ modal, setModal }) {
  const navigation = useNavigation();

  
  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 max-h-[80vh] sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Banco Propio
          </DialogTitle>
        </DialogHeader>
        <Form
          id="own-bank-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          action="/bank-management"
          method="post"
        >
          <input type="hidden" hidden name="type" value={"save_bank"} />
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-8 font-light">
              <div className="flex flex-col gap-3">
                <div className="text-sm font-normal text-[#696974]">
                  Información Inicial
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-6">
                    <div className="w-full pt-4">
                      <SelectField
                        name="country"
                        options={[
                          { label: "México", value: "MX" },
                          { label: "EUA", value: "EUA" },
                        ]}
                        placeholder="País"
                      />
                    </div>
                    <InputRouter
                      name="bank_string"
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
                <SelectField
                  name="type"
                  options={[
                    {label: "Sociedad 1", value: "soc1"},
                    {label: "Sociedad 2", value: "soc2"},
                  ]}
                  placeholder="Sociedad"
                />
                <div className="flex gap-6">
                  <InputRouter
                    name="bank_id"
                    type="text"
                    placeholder="ID del Banco"
                  />
                  <InputRouter
                    name="name"
                    type="text"
                    placeholder="Nombre del Banco Propio"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-sm font-normal text-[#696974]">
                  Comunicación
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <InputRouter
                    name="phone"
                    type="text"
                    placeholder="Teléfono"
                  />
                  <InputRouter
                    name="mail"
                    type="email"
                    placeholder="Correo"
                  />
                  <InputRouter
                    name="street"
                    type="text"
                    placeholder="Calle"
                  />
                  <div className="flex gap-x-2">
                    <InputRouter
                      name="int"
                      type="number"
                      placeholder="Int"
                    />
                    <InputRouter
                      name="ext"
                      type="number"
                      placeholder="Ext"
                    />
                  </div>
                  <InputRouter
                    name="cologne"
                    type="text"
                    placeholder="Colonia"
                  />
                </div>
              </div>
            </div>
          </div>
        </Form>
        <DialogDescription className="hidden"></DialogDescription>
        <DialogFooter className="px-10 pb-6">
          <Button
            form="own-bank-form"
            className="h-8 justify-normal rounded-lg rounded-xl bg-primarioBotones px-6 text-xs font-semibold"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}

          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormAddOwnBank;
