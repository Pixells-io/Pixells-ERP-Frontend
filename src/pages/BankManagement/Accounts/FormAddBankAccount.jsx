import React, { Fragment, useEffect, useState } from "react";
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
import SelectField from "@/layouts/Masters/FormComponents/SelectField";

function FormAddBankAccount({ modal, setModal }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Cuenta Bancaria
          </DialogTitle>
        </DialogHeader>
        <Form
          id="bank-account-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          //   action="/organization"
          method="post"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-8 font-light">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-6">
                    <SelectField
                      name="register_society"
                      options={[]}
                      placeholder="País"
                      className="border-gris2-transparent w-full rounded rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
                    />
                    <SelectField
                      name="register_ownBank"
                      options={[]}
                      placeholder="Banco Propio"
                      className="border-gris2-transparent w-full rounded rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
                    />
                  </div>
                  <div className="flex gap-6">
                    <div className="basis-1/3">
                      <InputRouter
                        name="register_accountId"
                        type="text"
                        placeholder="ID Cuenta"
                      />
                    </div>
                    <div className="basis-full">
                      <InputRouter
                        name="register_accountName"
                        type="text"
                        placeholder="Nombre de la Cuenta"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-sm font-normal text-[#696974]">
                  Datos de la Cuenta Bancaria
                </div>
                <div className="flex gap-2">
                  <div className="basis-1/2">
                    <InputRouter
                      name="register_accountName"
                      type="text"
                      placeholder="Nombre de cuenta"
                    />
                  </div>
                  <div className="basis-1/2 pt-5">
                    <SelectField
                      name="register_accountingAccount"
                      options={[]}
                      placeholder="Cuenta Contable"
                      className="border-gris2-transparent w-full rounded rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
                    />
                  </div>
                  <div className="basis-auto pt-5">
                    <SelectField
                      name="register_currency"
                      options={[
                        { label: "MXN", value: "MXN" },
                        { label: "DLLS", value: "DLLS" },
                      ]}
                      placeholder="Moneda"
                      className="border-gris2-transparent w-full rounded rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-3/5">
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-sm font-normal text-[#696974]">
                        Datos del Banco Propio
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <p className="text-xs text-grisText">País</p>
                      <p className="text-xs font-normal text-grisSubText">
                        Mex
                      </p>
                      <p className="text-xs text-grisText">Clave de Banco</p>
                      <p className="text-xs font-normal text-grisSubText">
                        002
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-3/5">
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-sm font-normal text-[#696974]">
                        Dirección del Banco
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <p className="text-xs text-grisText">Calle</p>
                      <p className="text-xs font-normal text-grisSubText">
                        San Pedro Luna
                      </p>
                      <p className="text-xs text-grisText">Int.</p>
                      <p className="text-xs font-normal text-grisSubText">
                        234
                      </p>
                      <p className="text-xs text-grisText">Ext.</p>
                      <p className="text-xs font-normal text-grisSubText">01</p>
                      <p className="text-xs text-grisText">Colonia</p>
                      <p className="text-xs font-normal text-grisSubText">
                        Lomas de tlaloc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
        <DialogDescription></DialogDescription>
        <DialogFooter className="px-10 pb-6">
          <Button
            form="bank-account-form"
            className="h-8 justify-normal rounded-lg rounded-xl bg-primarioBotones px-6 text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormAddBankAccount;
