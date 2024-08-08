import React, { useState, useCallback } from "react";
import { Label } from "@/components/ui/label";
import InputField from "@/layouts/Masters/FormComponents/InputField";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import QuoteTable from "./Tabs/QuoteDataTable";

const options = [
  {
    label: "Opción 1",
    value: "opcion1",
  },
  {
    label: "Opción 2",
    value: "opcion2",
  },
  {
    label: "Opción 3",
    value: "opcion3",
  },
];

const QuoteList = ({ setSubtotal }) => {
  const [documentNumber, setDocumentNumber] = useState("1");
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedRFC, setSelectedRFC] = useState("");
  const [selectedPhone, setSelectedPhone] = useState("");
  const [selectedCreation, setSelectedCreation] = useState("");
  const [selectedExpiry, setSelectedExpiry] = useState("");

  const handleTotalChange = useCallback(
    (newTotal) => {
      setSubtotal(newTotal);
    },
    [setSubtotal],
  );

  return (
    <div className="rounded-xl bg-white p-4">
      <div className="flex flex-wrap space-x-4 gap-4">
        <div className="flex flex-col w-10 ">
          <Label className="mb-1 font-roboto text-sm text-grisText">No.</Label>
          <InputField
            name="documentNumber"
            value={documentNumber}
            onChange={(e) => setDocumentNumber(e.target.value)}
            readOnly={true}
          />
        </div>
        <div className="flex-1">
          <Label className="mb-1 font-roboto text-sm text-grisText">Cliente</Label>
          <SelectField
            name="cliente"
            placeholder="Seleccionar"
            options={options}
            onChange={(value) => setSelectedClient(value)}
            value={selectedClient}
          />
        </div>
        <div className="flex pt-4 items-center justify-center">
          <IonIcon
            size="small"
            icon={addCircleOutline}
            className="text-primarioBotones"
          />
        </div>
        <div className="flex-1">
          <Label className="mb-1 font-roboto text-sm text-grisText">RFC:</Label>
          <SelectField
            name="rfc"
            placeholder="Seleccionar"
            options={options}
            onChange={(value) => setSelectedRFC(value)}
            value={selectedRFC}
          />
        </div>
        <div className="flex-1">
          <Label className="mb-1 font-roboto text-sm text-grisText">Teléfono</Label>
          <SelectField
            name="telefono"
            placeholder="Seleccionar"
            options={options}
            onChange={(value) => setSelectedPhone(value)}
            value={selectedPhone}
          />
        </div>
        <div className="flex-1">
          <Label className="mb-1 font-roboto text-sm text-grisText">Creación</Label>
          <SelectField
            name="creacion"
            placeholder="Seleccionar"
            options={options}
            onChange={(value) => setSelectedCreation(value)}
            value={selectedCreation}
          />
        </div>
        <div className="flex-1">
          <Label className="mb-1 font-roboto text-sm text-grisText">Vencimiento</Label>
          <SelectField
            name="vencimiento"
            placeholder="Seleccionar"
            options={options}
            onChange={(value) => setSelectedExpiry(value)}
            value={selectedExpiry}
          />
        </div>
      </div>

      <div className="mt-6">
        <QuoteTable onTotalChange={handleTotalChange} />
      </div>
    </div>
  );
};

export default QuoteList;
