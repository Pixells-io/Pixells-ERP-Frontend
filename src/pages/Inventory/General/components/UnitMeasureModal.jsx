import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const MeasureButton = ({ value, selectedValue, onClick, children }) => (
  <Button
    className={`w-[70px] flex-shrink-0 rounded-full border text-xs transition-colors ${
      value === selectedValue
        ? "border-[#5B89FF] bg-[#5B89FF] text-white"
        : "border-gray-300 bg-white text-gray-600 hover:border-transparent hover:bg-[#5B89FF] hover:text-white"
    }`}
    onClick={() => onClick(value)}
  >
    {children}
  </Button>
);

const MeasureSection = ({ label, options, selectedValue, onSelect }) => (
  <div className="flex items-center space-x-4 border-b border-[#E8E8E8] p-2 pb-6">
    <Label className="w-32 flex-shrink-0 font-roboto text-sm text-gray-600">
      {label}
    </Label>
    <div className="flex-grow overflow-x-auto">
      <div className="flex space-x-2 whitespace-nowrap pt-3">
        {options.map((option) => (
          <MeasureButton
            key={option}
            value={option}
            selectedValue={selectedValue}
            onClick={onSelect}
          >
            {option}
          </MeasureButton>
        ))}
      </div>
    </div>
  </div>
);

const UnitMeasure = ({ onSelect, initialValue }) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => setSelectedValue(value);
  const handleClose = () => {
    onSelect(selectedValue);
    setIsOpen(false);
  };

  const sections = [
    { label: "Unidad", options: ["Unidad", "Docenas", "24 Pack"] },
    { label: "Peso", options: ["kg", "g", "oz", "lb", "t"] },
    { label: "Tiempo trabajo", options: ["Horas", "Días"] },
    {
      label: "Longitud",
      options: ["mm", "cm", "in", "ft", "yd", "m", "km", "mi"],
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-[#5B89FF] hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-[#5B89FF] focus:ring-opacity-50 active:bg-[#5B89FF] active:bg-opacity-20"
        onClick={() => setIsOpen(true)}
      >
        <IonIcon icon={informationCircle} className="h-5 w-5 text-[#5B89FF]" />
      </Button>
      <DialogContent className="pb-0 pl-1 pr-1 pt-0">
        <DialogHeader className="border-b bg-blancoForms px-6 py-4">
          <DialogTitle className="font-poppins text-base font-semibold text-grisHeading">
            Unidades de Medida
          </DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        <div className="max-h-[40vh] overflow-y-auto">
          {sections.map((section) => (
            <MeasureSection
              key={section.label}
              label={section.label}
              options={section.options}
              selectedValue={selectedValue}
              onSelect={handleSelect}
            />
          ))}
        </div>
        <div className="flex justify-end p-8">
          <Button
            type="button"
            className="rounded-full bg-[#5B89FF] px-6 py-3 text-sm text-white hover:bg-[#4A70CC]"
            onClick={handleClose}
          >
            Listo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UnitMeasure;
