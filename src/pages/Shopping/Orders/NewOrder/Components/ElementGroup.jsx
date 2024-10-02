import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const InputsGroup = ({
  documentNumber,
  setDocumentNumber,
  selectedWarehouse,
  setSelectedWarehouse,
  selectedCostCenter,
  setSelectedCostCenter,
  isEditable,
  infoSelects,
}) => {
  const handleWarehouseChange = (value) => {
    if (isEditable) setSelectedWarehouse(value);
  };

  const handleCostCenterChange = (value) => {
    if (isEditable) setSelectedCostCenter(value);
  };

  return (
    <div className="flex w-full justify-between space-x-4">
      <InputForm
        placeholder="Número de Documento"
        type="text"
        name="document_number"
        value={documentNumber}
        onChange={(e) => isEditable && setDocumentNumber(e.target.value)}
        disabled={!isEditable}
        required={true}
      />

      <div className="w-full">
        <SelectRouter
          name="inventory_id"
          options={infoSelects?.inventories}
          placeholder="Almacén"
          onChange={handleWarehouseChange}
          value={selectedWarehouse}
          disabled={!isEditable}
          required={true}
        />
      </div>

      <div className="w-full">
        <SelectRouter
          name="center"
          options={infoSelects?.cost_center}
          placeholder="Centro de Costos"
          onChange={handleCostCenterChange}
          value={selectedCostCenter}
          disabled={!isEditable}
          required={true}
        />
      </div>
    </div>
  );
};

export default InputsGroup;
