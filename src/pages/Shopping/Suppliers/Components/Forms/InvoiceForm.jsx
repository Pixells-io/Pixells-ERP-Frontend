import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const InvoiceForm = ({ facturacionData, setFacturacionData }) => {
  const handleInputChange = (e) => {
    setFacturacionData({ ...facturacionData, [e.target.name]: e.target.value });
  };


  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4 p-4">
      <div className="flex items-center justify-between mb-4">
      <Label className="font-roboto text-sm text-grisText" htmlFor="regimenFiscal">Régimen Fisc.</Label>
          <InputRouter
            name="regimenFiscal"
            value={facturacionData.regimenFiscal}
            onChange={handleInputChange}
            placeholder="Ingresa"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <Label className="font-roboto text-sm text-grisText" htmlFor="metodoPago">Método Pago</Label>
          <InputRouter
            name="metodoPago"
            value={facturacionData.metodoPago}
            onChange={handleInputChange}
            placeholder="Ingresa"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <Label className="font-roboto text-sm text-grisText" htmlFor="formaPago">Forma Pago</Label>
          <InputRouter
            name="formaPago"
            value={facturacionData.formaPago}
            onChange={handleInputChange}
            placeholder="Ingresa"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <Label className="font-roboto text-sm text-grisText" htmlFor="usoCFDI">Uso CFDI</Label>
          <InputRouter
            name="usoCFDI"
            value={facturacionData.usoCFDI}
            onChange={handleInputChange}
            placeholder="Ingresa"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <Label className="font-roboto text-sm text-grisText" htmlFor="email">E-mail</Label>
          <InputRouter
            name="email"
            type="email"
            value={facturacionData.email}
            onChange={handleInputChange}
            placeholder="Ingresa"
          />
        </div>
        <div className="flex items-center justify-end">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border-none bg-transparent hover:bg-blancoBox">
            <IonIcon icon={addCircle} className="text-xl text-primario" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
