import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreditForm = ({condicionData, setcondicionData}) => {
  const handleSelectChange = (field, value) => {
    setcondicionData((condicionData) => ({
      ...condicionData,
      [field]: value
    }));
  };

  const selectClass =
    "rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones border-none bg-grisBg w-[200px]";

  return (
    <div className="max-w-md">
      <div className="flex items-center justify-between mb-4">
        <label className="text-sm text-gray-500">Condiciones</label>
        <Select value={condicionData.condiciones} onValueChange={(value) => handleSelectChange('condiciones', value)}>
          <SelectTrigger className={selectClass}>
            <SelectValue placeholder="Selecciona" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Opción 1</SelectItem>
            <SelectItem value="option2">Opción 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between mb-4">
        <label className="text-sm text-gray-500">% intereses por retraso</label>
        <Select value={condicionData.interesesPorRetraso} onValueChange={(value) => handleSelectChange('interesesPorRetraso', value)}>
          <SelectTrigger className={selectClass}>
            <SelectValue placeholder="Selecciona" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Opción 1</SelectItem>
            <SelectItem value="option2">Opción 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between mb-4">
        <label className="text-sm text-gray-500">Días de crédito</label>
        <Select value={condicionData.diasDeCredito} onValueChange={(value) => handleSelectChange('diasDeCredito', value)}>
          <SelectTrigger className={selectClass}>
            <SelectValue placeholder="Selecciona" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Opción 1</SelectItem>
            <SelectItem value="option2">Opción 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between mb-4">
        <label className="text-sm text-gray-500">Límite de crédito</label>
        <Select value={condicionData.limiteDeCredito} onValueChange={(value) => handleSelectChange('limiteDeCredito', value)}>
          <SelectTrigger className={selectClass}>
            <SelectValue placeholder="Selecciona" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Opción 1</SelectItem>
            <SelectItem value="option2">Opción 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CreditForm;