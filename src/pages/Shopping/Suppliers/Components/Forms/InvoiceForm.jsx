import React from "react";
import { Label } from "@/components/ui/label";
import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Button } from "@/components/ui/button";

const InvoiceForm = ({ facturacionData, setFacturacionData, isDisabled }) => {
  const handleInputChange = (e) => {
    setFacturacionData({ ...facturacionData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex w-full flex-col space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center">
          <Label className="w-32 font-roboto text-[14px] text-gris2" htmlFor="regimen_fiscal">
            Régimen Fisc.
          </Label>
          <InputRouter
            name="regimen_fiscal"
            value={facturacionData.regimen_fiscal}
            onChange={handleInputChange}
            placeholder="Ingresa"
            className="ml-2 w-full"
            disabled={isDisabled}
          />
        </div>
        <div className="flex items-center">
          <Label className="w-32 font-roboto text-[14px] text-gris2" htmlFor="metodo_pago">
            Método Pago
          </Label>
          <InputRouter
            name="metodo_pago"
            value={facturacionData.metodo_pago}
            onChange={handleInputChange}
            placeholder="Ingresa"
            className="ml-2 w-full"
            disabled={isDisabled}
          />
        </div>
        <div className="flex items-center">
          <Label className="w-32 font-roboto text-[14px] text-gris2" htmlFor="forma_pago">
            Forma Pago
          </Label>
          <InputRouter
            name="forma_pago"
            value={facturacionData.forma_pago}
            onChange={handleInputChange}
            placeholder="Ingresa"
            className="ml-2 w-full"
            disabled={isDisabled}
          />
        </div>
        <div className="flex items-center">
          <Label className="w-32 font-roboto text-[14px] text-gris2" htmlFor="uso_cfdi">
            Uso CFDI
          </Label>
          <InputRouter
            name="uso_cfdi"
            value={facturacionData.uso_cfdi}
            onChange={handleInputChange}
            placeholder="Ingresa"
            className="ml-2 w-full"
            disabled={isDisabled}
          />
        </div>
        <div className="flex items-center">
          <Label className="w-32 font-roboto text-[14px] text-gris2" htmlFor="email">
            E-mail
          </Label>
          <InputRouter
            name="email"
            type="email"
            value={facturacionData.email}
            onChange={handleInputChange}
            placeholder="Ingresa"
            className="ml-2 w-full"
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
