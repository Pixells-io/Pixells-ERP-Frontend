import React from "react";
import { Label } from "@/components/ui/label";
import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Button } from "@/components/ui/button";

const InvoiceForm = ({ facturacionData, setFacturacionData }) => {
  const handleInputChange = (e) => {
    setFacturacionData({ ...facturacionData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex w-full flex-col space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center">
          <Label className="mt-2 w-32 font-roboto text-[14px] text-gris2" htmlFor="regimenFiscal">
            Régimen Fisc.
          </Label>
          <InputRouter
            name="regimenFiscal"
            value={facturacionData.regimenFiscal}
            onChange={handleInputChange}
            className="ml-2 w-full"
          />
        </div>
        <div className="flex items-center">
          <Label className="mt-2 w-32 font-roboto text-[14px] text-gris2" htmlFor="metodoPago">
            Método Pago
          </Label>
          <InputRouter
            name="metodoPago"
            value={facturacionData.metodoPago}
            onChange={handleInputChange}
            className="ml-2 w-full"
          />
        </div>
        <div className="flex items-center">
          <Label className="mt-2 w-32 font-roboto text-[14px] text-gris2" htmlFor="formaPago">
            Forma Pago
          </Label>
          <InputRouter
            name="formaPago"
            value={facturacionData.formaPago}
            onChange={handleInputChange}
            className="ml-2 w-full"
          />
        </div>
        <div className="flex items-center">
          <Label className="mt-2 w-32 font-roboto text-[14px] text-gris2" htmlFor="usoCFDI">
            Uso CFDI
          </Label>
          <InputRouter
            name="usoCFDI"
            value={facturacionData.usoCFDI}
            onChange={handleInputChange}
            className="ml-2 w-full"
          />
        </div>
        <div className="flex items-center">
          <Label className="mt-2 w-32 font-roboto text-[14px] text-gris2" htmlFor="email">
            E-mail
          </Label>
          <InputRouter
            name="email"
            type="email"
            value={facturacionData.email}
            onChange={handleInputChange}
            className="ml-2 w-full"
          />
        </div>
        <div className="flex items-center justify-end col-span-3">
          <Button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full border-none bg-transparent hover:bg-blancoBox"
          >
            <IonIcon icon={addCircle} className="text-xl text-primario" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
