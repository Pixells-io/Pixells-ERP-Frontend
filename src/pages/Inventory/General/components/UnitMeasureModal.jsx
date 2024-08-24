import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const MeasureButton = ({ value, selectedValue, onClick, children }) => (
  <Button
    className={`w-[70px] rounded-full border border-gris2 bg-white px-4 py-2 text-[14px] text-gris2 hover:border-transparent hover:bg-[#5B89FF] hover:text-[#FBFBFB] ${
      value === selectedValue ? "border-[#5B89FF] bg-[#5B89FF] text-[#FBFBFB]" : ""
    }`}
    onClick={() => onClick(value)}
  >
    {children}
  </Button>
);

const MeasureSection = ({ label, options, selectedValue, onSelect }) => (
  <div className="flex items-center space-x-4 border-b-[0.5px] border-b-[#E8E8E8] p-2 pb-6">
    <Label className="w-32 flex-shrink-0 font-roboto text-[14px] text-gris2">
      {label}
    </Label>
    <div className="flex flex-wrap gap-2">
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
);

const UnitMeasure = ({ onSelect, initialValue }) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => setSelectedValue(value);
  const handleClose = () => {
    onSelect(selectedValue);
    setIsOpen(false);
  };

  //SECTION OF UNITMEASURE
  const sections = [
    { label: "Unidad", options: ["Unidad", "Docenas", "24 Pack"] },
    { label: "Peso", options: ["kg", "g", "oz", "lb", "t"] },
    { label: "Tiempo trabajo", options: ["Horas", "Días"] },
    { label: "Longitud", options: ["mm", "cm", "in", "ft", "yd", "m", "km", "mi"] },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
        onClick={() => setIsOpen(true)}
      >
        <IonIcon
          icon={informationCircle}
          className="h-5 w-5 text-primarioBotones"
        />
      </Button>
      <DialogContent className="max-h-[90vh] overflow-auto sm:max-w-[550px]">
        <DialogHeader className="px-6 border-b pb-4">
          <DialogTitle className="font-poppins text-[14px] font-semibold text-[#44444F]">
            Unidades de Medida
          </DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        {/*AREA BUTTONS*/}
        {sections.map((section) => (
          <MeasureSection
            key={section.label}
            label={section.label}
            options={section.options}
            selectedValue={selectedValue}
            onSelect={handleSelect}
          />
        ))}
        <div className="flex justify-end p-8">
          {/*UNIT MEASURE*/}
          <Button
            type="button"
            className="items-center rounded-full bg-[#5B89FF] px-6 py-3 text-[14px] hover:bg-[#5B89FF]"
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