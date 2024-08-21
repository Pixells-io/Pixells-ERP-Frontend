import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

const UnitMeasure = ({ onSelect, initialValue }) => {
    const [selectedValue, setSelectedValue] = useState(initialValue);

    const handleSelect = (value) => {
      setSelectedValue(value);
      onSelect(value);
    };

  return (
    <Dialog>
    <DialogTrigger asChild>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Elegir
      </button>
    </DialogTrigger>
    <DialogContent className="bg-white p-6 rounded-xl shadow-lg focus:outline-none">
      <div className="grid grid-cols-3 gap-4">
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${
            selectedValue === 'Unidad' ? 'bg-blue-600' : ''
          }`}
          onClick={() => handleSelect('Unidad')}
        >
          Unidad
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${
            selectedValue === 'Docena' ? 'bg-blue-600' : ''
          }`}
          onClick={() => handleSelect('Docena')}
        >
          Docena
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${
            selectedValue === '24 Pack' ? 'bg-blue-600' : ''
          }`}
          onClick={() => handleSelect('24 Pack')}
        >
          24 Pack
        </button>
      </div>
    </DialogContent>
  </Dialog>
  );
};

export default UnitMeasure;