import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import InputForm from "@/components/InputForm/InputForm";

const InputsGroup = ({
  documentNumber,
  setDocumentNumber,
  selectedWarehouse,
  setSelectedWarehouse,
  selectedCostCenter,
  setSelectedCostCenter,
  isEditable,
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
        <p className="mb-1 text-[10px] font-normal text-grisText">Almacén</p>
        <Select
          value={selectedWarehouse}
          onValueChange={handleWarehouseChange}
          disabled={!isEditable}
          name="inventory_id"
          required={true}
        >
          <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
            <SelectValue placeholder="Seleccionar Almacén" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Almacén Central</SelectItem>
            <SelectItem value="2">Almacén Norte</SelectItem>
            <SelectItem value="3">Almacén Sur</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        <p className="mb-1 text-[10px] font-normal text-grisText">
          Centro de Costos
        </p>
        <Select
          value={selectedCostCenter}
          onValueChange={handleCostCenterChange}
          disabled={!isEditable}
          required={true}
        >
          <SelectTrigger
            name="ccenter"
            className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones"
          >
            <SelectValue placeholder="Seleccionar Centro de Costos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cc1">Centro de Costos 001</SelectItem>
            <SelectItem value="cc2">Centro de Costos 002</SelectItem>
            <SelectItem value="cc3">Centro de Costos 003</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default InputsGroup;
