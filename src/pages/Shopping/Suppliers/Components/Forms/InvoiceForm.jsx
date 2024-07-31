import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";

const InvoiceForm = ({ facturacionData, setFacturacionData }) => {
  const handleInputChange = (e) => {
    setFacturacionData({ ...facturacionData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="regimenFiscal">Régimen Fisc.</Label>
          <Input
            id="regimenFiscal"
            name="regimenFiscal"
            className={inputClass}
            value={facturacionData.regimenFiscal}
            onChange={handleInputChange}
            placeholder="Ingresa"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="metodoPago">Método Pago</Label>
          <Input
            id="metodoPago"
            name="metodoPago"
            className={inputClass}
            value={facturacionData.metodoPago}
            onChange={handleInputChange}
            placeholder="Ingresa"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="formaPago">Forma Pago</Label>
          <Input
            id="formaPago"
            name="formaPago"
            className={inputClass}
            value={facturacionData.formaPago}
            onChange={handleInputChange}
            placeholder="Ingresa"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="usoCFDI">Uso CFDI</Label>
          <Input
            id="usoCFDI"
            name="usoCFDI"
            className={inputClass}
            value={facturacionData.usoCFDI}
            onChange={handleInputChange}
            placeholder="Ingresa"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            className={inputClass}
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
