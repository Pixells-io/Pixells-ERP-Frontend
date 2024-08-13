import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import InputField from "@/layouts/Masters/FormComponents/InputField";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

const options = [
  { label: "Opción 1", value: "opcion1" },
  { label: "Opción 2", value: "opcion2" },
  { label: "Opción 3", value: "opcion3" },
];

const SelectDetails = ({ id, client, rfc, phone, dtcreate, dtexpiry, isEditable }) => {
  const [documentNumber, setDocumentNumber] = useState(id || "1");
  const [selectedClient, setSelectedClient] = useState(client || "");
  const [selectedRFC, setSelectedRFC] = useState(rfc || "");
  const [selectedPhone, setSelectedPhone] = useState(phone || "");
  const [selectedCreation, setSelectedCreation] = useState(dtcreate || "");
  const [selectedExpiry, setSelectedExpiry] = useState(dtexpiry || "");

  // Manejador de cambios general
  const handleChange = (value, name) => {
    if (isEditable) {
      switch (name) {
        case 'cliente':
          setSelectedClient(value);
          break;
        case 'rfc':
          setSelectedRFC(value);
          break;
        case 'telefono':
          setSelectedPhone(value);
          break;
        case 'creacion':
          setSelectedCreation(value);
          break;
        case 'vencimiento':
          setSelectedExpiry(value);
          break;
        default:
          console.warn('Nombre no reconocido');
          break;
      }
    }
  };

  return (
    <div className="flex flex-wrap space-x-4 gap-4">
      <div className="flex flex-col w-10">
        <Label className="mb-1 font-roboto text-sm text-grisText">No.</Label>
        <InputField
          name="documentNumber"
          value={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
          readOnly
        />
      </div>
      <div className="flex-1">
        <Label className="mb-1 font-roboto text-sm text-grisText">Cliente</Label>
        <SelectField
          name="cliente"
          placeholder="Seleccionar"
          options={options}
          value={selectedClient}
          onValueChange={(value) => handleChange(value, 'cliente')}
          disabled={!isEditable}
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
          value={selectedRFC}
          onValueChange={(value) => handleChange(value, 'rfc')}
          disabled={!isEditable}
        />
      </div>
      <div className="flex-1">
        <Label className="mb-1 font-roboto text-sm text-grisText">Teléfono</Label>
        <SelectField
          name="telefono"
          placeholder="Seleccionar"
          options={options}
          value={selectedPhone}
          onValueChange={(value) => handleChange(value, 'telefono')}
          disabled={!isEditable}
        />
      </div>
      <div className="flex-1">
        <Label className="mb-1 font-roboto text-sm text-grisText">Creación</Label>
        <SelectField
          name="creacion"
          placeholder="Seleccionar"
          options={options}
          value={selectedCreation}
          onValueChange={(value) => handleChange(value, 'creacion')}
          disabled={!isEditable}
        />
      </div>
      <div className="flex-1">
        <Label className="mb-1 font-roboto text-sm text-grisText">Vencimiento</Label>
        <SelectField
          name="vencimiento"
          placeholder="Seleccionar"
          options={options}
          value={selectedExpiry}
          onValueChange={(value) => handleChange(value, 'vencimiento')}
          disabled={!isEditable}
        />
      </div>
    </div>
  );
};

export default SelectDetails;
