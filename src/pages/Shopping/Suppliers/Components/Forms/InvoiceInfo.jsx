import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Form, useNavigation } from "react-router-dom";

const InvoiceInfo = ({
  invoiceData,
  setInvoiceData,
  onDelete,
  isDisabled,
  invoices,
  supplier_id,
}) => {
  const handleInputChange = (e) => {
    setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value });
  };
  const navigation = useNavigation();

  const inputClass =
    "w-[300px] rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";

  return (
    <div className="w-full">
      <Form
        method="post"
        action={"/shopping/supplier/edit/" + supplier_id}
        id="invoice-form"
        name="invoice-name"
      >
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          <input type="hidden" hidden name="supplier_id" value={supplier_id} />
          <input
            type="hidden"
            hidden
            name="billing_id"
            value={invoiceData?.id}
          />
          <input type="hidden" hidden name="type" value={"invoceInformation"} />
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="regimen_fiscal"
              >
                Régimen Fisc.
              </Label>
            </div>
            <div className="col-span-9">
              <InputRouter
                name="regimen_fiscal"
                value={invoiceData.regimen_fiscal}
                onChange={handleInputChange}
                placeholder=""
                className={inputClass}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="metodo_pago"
              >
                Método Pago
              </Label>
            </div>
            <div className="col-span-9">
              <InputRouter
                name="metodo_pago"
                value={invoiceData.metodo_pago}
                onChange={handleInputChange}
                placeholder=""
                className={inputClass}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="forma_pago"
              >
                Forma Pago
              </Label>
            </div>
            <div className="col-span-9">
              <InputRouter
                name="forma_pago"
                value={invoiceData.forma_pago}
                onChange={handleInputChange}
                placeholder=""
                className={inputClass}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="uso_cfdi"
              >
                Uso CFD!
              </Label>
            </div>
            <div className="col-span-9">
              <InputRouter
                name="uso_cfdi"
                value={invoiceData.uso_cfdi}
                onChange={handleInputChange}
                placeholder=""
                className={inputClass}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 items-center">
            <div className="col-span-3">
              <Label
                className="w-32 font-roboto text-xs font-light text-gris2"
                htmlFor="email"
              >
                Email
              </Label>
            </div>
            <div className="col-span-9">
              <InputRouter
                name="email"
                value={invoiceData.email}
                onChange={handleInputChange}
                placeholder=""
                className={inputClass}
                disabled={isDisabled}
              />
            </div>
          </div>
        </div>

        {invoices.length > 0 && (
          <div className="mt-2 flex w-full justify-end pr-2">
            <Button
              className="rounded-3xl bg-primarioBotones"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
            </Button>
          </div>
        )}
      </Form>

      <Form
        method="post"
        action={"/shopping/supplier/edit/" + supplier_id}
        id="delete-invoice-form"
        name="delete-invoice-form"
      >
        <input type="hidden" hidden name="billing_id" value={invoiceData?.id} />
        <input type="hidden" hidden name="type" value={"destroy_invoice"} />
        {invoices.length > 1 && !!invoiceData?.id && (
          <div className="col-span-3 flex justify-start pt-4">
            <Button
              type="submit"
              className="w-[100px] rounded-full border-[0.5px] border-[#D7586B] bg-transparent hover:bg-transparent"
              // onClick={onDelete}
              disabled={navigation.state === "submitting"}
            >
              <span className="font-roboto text-[14px] text-[#D7586B]">
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Eliminar"}
              </span>
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default InvoiceInfo;
