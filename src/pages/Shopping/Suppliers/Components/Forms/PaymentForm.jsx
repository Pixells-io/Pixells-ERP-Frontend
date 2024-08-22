import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Clase común para los SelectTrigger
const selectClass = "w-[200px] rounded-xl border border-transparent bg-grisBg placeholder:text-grisHeading placeholder:text-xs text-grisSubText focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

const CreditForm = ({ condicionData, setcondicionData, isDisabled }) => {
  // Maneja el cambio del valor del select
  const handleSelectChange = (field, value) => {
    setcondicionData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  return (
    <div className="max-w-md">
      {[
        { label: 'Condiciones', field: 'conditions' },
        { label: '% intereses por retraso', field: 'interest' },
        { label: 'Días de crédito', field: 'days_of_credit' },
        { label: 'Límite de crédito', field: 'credit_limit' }
      ].map(({ label, field }) => (
        <div className="flex items-center justify-between mb-4" key={field}>
          <label htmlFor={field} className="font-roboto text-[14px] text-gris2">
            {label}
          </label>
          <Select
            id={field}
            value={condicionData[field]}
            onValueChange={(value) => handleSelectChange(field, value)}
            name={field}
            disabled={isDisabled}
          >
            <SelectTrigger className={selectClass}>
              <SelectValue placeholder="Selecciona" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Opción 1</SelectItem>
              <SelectItem value="option2">Opción 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  );
};

export default CreditForm;
