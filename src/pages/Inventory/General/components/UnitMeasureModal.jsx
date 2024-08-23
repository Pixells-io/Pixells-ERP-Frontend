import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


/*Component Button value='units',selectedValue=new value, children=label button */
const MeasureButton = ({ value, selectedValue, onClick, children }) => (
  <Button
    className={`w-[70px] rounded-full border border-gris2 bg-white px-4 py-2 text-[14px] text-gris2 hover:border-transparent hover:bg-[#5B89FF] hover:text-[#FBFBFB] ${
      value === selectedValue
        ? "border-[#5B89FF] bg-[#5B89FF] text-[#FBFBFB]"
        : ""
    }`}
    onClick={() => onClick(value)}
  >
    {children}
  </Button>
);

//SECTION ABOUT UNIT MEASURE
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

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handleClose = () => {
    onSelect(selectedValue);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-auto sm:max-w-[550px]">
        <div className="-mx-6 border-b pb-4 pl-0">
          <DialogHeader className="px-6">
            <DialogTitle className="font-poppins text-[14px] font-semibold text-[#44444F]">
              Unidades de Medida
            </DialogTitle>
          </DialogHeader>
          {/*WARNING ABOUT DESCRIPTION*/}
          <DialogDescription></DialogDescription>
        </div>

        <MeasureSection
          label="Unidad"
          options={["Unidad", "Docenas", "24 Pack"]}
          selectedValue={selectedValue}
          onSelect={handleSelect}
        />

        <MeasureSection
          label="Peso"
          options={["kg", "g", "oz", "lb", "t"]}
          selectedValue={selectedValue}
          onSelect={handleSelect}
        />

        <MeasureSection
          label="Tiempo trabajo"
          options={["Horas", "Días"]}
          selectedValue={selectedValue}
          onSelect={handleSelect}
        />
        <MeasureSection
          label="Longitud"
          options={["mm", "cm", "in", "ft", "yd", "m", "km", "mi"]}
          selectedValue={selectedValue}
          onSelect={handleSelect}
        />
        <div className="flex justify-end p-8">
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
