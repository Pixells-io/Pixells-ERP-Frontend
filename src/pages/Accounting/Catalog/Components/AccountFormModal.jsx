import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";
import { Form, useParams } from "react-router-dom";

const AccountFormModal = () => {
  const { level } = useParams();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IonIcon
          icon={addCircleOutline}
          size="large"
          className="h-7 w-7 cursor-pointer text-blue-500"
        />
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-auto sm:max-w-[425px]">
        <div className="-mx-6 border-b pb-4 pl-0">
          <DialogHeader className="px-6">
            <DialogTitle className="font-poppins text-sm font-semibold text-grisHeading">
              Agregar Cuenta Contable
            </DialogTitle>
          </DialogHeader>
        </div>
        <DialogDescription className="hidden"></DialogDescription>
        <Form action={`/accounting/${level}`} method="post" className="px-4">
          <input
            type="hidden"
            hidden
            className="hidden"
            name="type_option"
            value={"save_accountingAccount"}
            readOnly
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="rubro"
                className="font-roboto text-[14px] font-light text-grisText"
              >
                Rubro
              </Label>
              <InputRouter id="rubro" name="rubro" type="text" />
            </div>
            <div>
              <Label
                htmlFor="accounting_account"
                className="font-roboto text-[14px] font-light text-grisText"
              >
                Cuenta contable
              </Label>
              <InputRouter id="accounting_account" name="accounting_account" type="text" />
            </div>
            <div>
              <Label
                htmlFor="level"
                className="font-roboto text-[14px] font-light text-grisText"
              >
                Nivel
              </Label>
              <InputRouter id="level" name="level" type="text" />
            </div>
            <div className="w-full pt-2">
              <Label
                htmlFor="currency"
                className="font-roboto text-[14px] font-light text-grisText"
              >
                Moneda
              </Label>
              <SelectField
                name="currency"
                options={[
                  { label: "MXN", value: "MXN" },
                  { label: "USD", value: "USD" },
                ]}
                placeholder="Moneda"
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="mt-4">
            <Label
              htmlFor="name"
              className="font-roboto text-[14px] font-light text-grisText"
            >
              Nombre
            </Label>
            <InputRouter id="name" name="name" type="text" />
          </div>

          <div className="mt-4">
            <Label
              htmlFor="saldo"
              className="font-roboto text-[14px] font-light text-grisText"
            >
              Saldo
            </Label>
            <InputRouter id="saldo" name="saldo" type="number" />
          </div>

          <div className="mt-4">
            <Label
              htmlFor="type_of_account"
              className="font-roboto text-[14px] font-light text-grisText"
            >
              Tipo de Cuenta
            </Label>
            <SelectField
              name="type_of_account"
              options={[]}
              placeholder="Tipo de Cuenta"
            />
          </div>

          <div className="mt-4">
            <Label
              htmlFor="sat_code"
              className="font-roboto text-[14px] font-light text-grisText"
            >
              Código Agrupador SAT (Contabilidad Electrónica)
            </Label>
            <InputRouter id="sat_code" name="sat_code" type="text" />
          </div>

          <div className="mt-4">
            <Label
              htmlFor="description"
              className="font-roboto text-[14px] font-light text-grisText"
            >
              Descripción
            </Label>
            <InputRouter id="description" name="description" type="text" />
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              type="submit"
              className="rounded-full bg-primarioBotones px-8"
            >
              Guardar
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AccountFormModal;
