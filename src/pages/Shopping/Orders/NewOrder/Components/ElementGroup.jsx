import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const InputsGroup = ({ 
  documentNumber, 
  setDocumentNumber, 
  selectedWarehouse, 
  setSelectedWarehouse, 
  selectedCostCenter, 
  setSelectedCostCenter,
  isEditable 
}) => {
  
  const handleWarehouseChange = (value) => {
    if (isEditable) setSelectedWarehouse(value);
  };

  const handleCostCenterChange = (value) => {
    if (isEditable) setSelectedCostCenter(value);
  };

  return (
    <div className="rounded-xl bg-white p-4">
      <div className="flex justify-between w-full space-x-4">
        <Input 
          className="rounded-lg focus-visible:ring-2 focus-visible:ring-primario focus-visible:ring-offset-2 focus-visible:outline-none"
          placeholder="Número de Documento"
          type="text"
          name="ndocument"
          value={documentNumber}
          onChange={(e) => isEditable && setDocumentNumber(e.target.value)} 
          disabled={!isEditable} 
        />
        <Select 
          value={selectedWarehouse} 
          onValueChange={handleWarehouseChange} 
          disabled={!isEditable} 
        >
          <SelectTrigger name="warehouse" className="rounded-lg focus:ring-2 focus:ring-primario focus:ring-offset-2 focus:outline-none">
            <SelectValue placeholder="Seleccionar Almacén" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="almacen1">Almacén Central</SelectItem>
            <SelectItem value="almacen2">Almacén Norte</SelectItem>
            <SelectItem value="almacen3">Almacén Sur</SelectItem>
          </SelectContent>
        </Select>
        <Select 
          value={selectedCostCenter} 
          onValueChange={handleCostCenterChange} // Ensure onValueChange is always defined
          disabled={!isEditable}
        >
          <SelectTrigger name="ccenter" className="rounded-lg focus:ring-2 focus:ring-primario focus:ring-offset-2 focus:outline-none">
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
}

export default InputsGroup;
