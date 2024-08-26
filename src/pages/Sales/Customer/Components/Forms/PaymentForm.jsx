import React from "react";
import InputRouter from "@/layouts/Masters/FormComponents/input";

// Clase común para los SelectTrigger
const selectClass =
  "w-[200px] rounded-xl border border-transparent bg-grisBg placeholder:text-grisHeading placeholder:text-xs text-grisSubText focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

const CreditForm = ({ condicionData, setcondicionData, isDisabled }) => {
  // Maneja el cambio del valor del select
  const handleSelectChange = (field, value) => {
    setcondicionData((prevData) => ({
      ...prevData,
      [field]: value.target.value,
    }));
  };

  return (
    <div className="grid max-w-md grid-cols-1 gap-2">
      {[
        { label: "Condiciones", field: "conditions", type: "text" },
        { label: "% intereses por retraso", field: "interest", type: "number" },
        { label: "Días de crédito", field: "days_of_credit", type: "number" },
        { label: "Límite de crédito", field: "credit_limit", type: "number" },
      ].map(({ label, field, type }) => (
        <div key={field} className="grid grid-cols-2">
          <div className="mb-4 flex items-center justify-between">
            <label
              htmlFor={field}
              className="font-roboto text-[14px] text-gris2"
            >
              {label}
            </label>
          </div>
          <div>
            <InputRouter
              name={field}
              value={condicionData[field]}
              onChange={(value) => handleSelectChange(field, value)}
              className={selectClass}
              type={type}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreditForm;
