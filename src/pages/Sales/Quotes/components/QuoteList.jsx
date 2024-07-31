//  const [documentNumber,setDocumentNumber]=useState(1);
import React, { useState, useCallback } from "react";
import SelectField from "./ui/select";
import InputField from "./ui/Input";
import QuoteTable from "./Tabs/QuoteDataTable";

const labels = ["Cliente", "RFC", "Teléfono", "Creación", "Vencimiento"];

const QuoteList = ({ setSubtotal }) => {
  const [documentNumber,setDocumentNumber]=useState(1);
  const [selectValues, setSelectValues] = useState({
    select1: "",
    select2: "",
    select3: "",
    select4: "",
    select5: "",
  });

  const handleSelectChange = useCallback((value, num) => {
    setSelectValues((prev) => ({
      ...prev,
      [`select${num}`]: value,
    }));
  }, []);

  const handleTotalChange = useCallback((newTotal) => {
    setSubtotal(newTotal);
  }, [setSubtotal]);

  return (
    <div className="rounded-xl bg-white p-4">
      <div className="flex items-start space-x-4">
        <div className="flex-grow grid grid-cols-4 gap-4">
          {labels.slice(0, 4).map((label, index) => (
            <SelectField
              key={index}
              label={label}
              id={`select${index + 1}`}
              value={selectValues[`select${index + 1}`]}
              onChange={(value) => handleSelectChange(value, index + 1)}
              showAddIcon={index === 0}
            />
          ))}
          <div className="col-span-1 col-start-4 row-start-3">
            <SelectField
              label={labels[4]}
              value={selectValues.select5}
              onChange={(value) => handleSelectChange(value, 5)}
            />
          </div>
        </div>
        <div className="w-20">
          <InputField
            label="No"
            id="documentNumber"
            value={documentNumber}
            onChange={(e) => setDocumentNumber(e.target.value)}
            readOnly
            placeholder="Número automático"
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
