import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { informationCircle } from "ionicons/icons";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const MeasureButton = ({ value, selectedValue, onClick, children }) => (
  <Button
    className={`w-[60px] rounded-full border border-gris2 bg-white px-4 py-2 text-[14px] text-gris2 hover:border-transparent hover:bg-[#5B89FF] hover:text-[#FBFBFB] ${
      value === selectedValue
        ? "border-[#5B89FF] bg-[#5B89FF] text-[#FBFBFB]"
        : ""
    }`}
    onClick={() => onClick(value)} // Se pasa el valor al hacer clic
  >
    {children}
  </Button>
);

const UnitMeasure = ({ onSelect, initialValue }) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handleClose = () => {
    onSelect(selectedValue);
    setIsOpen(false); // Cierra el diálogo
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          onClick={() => setIsOpen(true)} // Abre el diálogo al hacer clic
        >
          <IonIcon
            icon={informationCircle}
            className="h-5 w-5 text-primarioBotones"
          />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-h-[90vh] overflow-auto sm:max-w-[550px]"
      >
        <div className="-mx-6 border-b pb-4 pl-0">
          <DialogHeader className="px-6">
            <DialogTitle className="font-poppins text-[14px] font-semibold text-[#44444F]">
              Unidades de Medida
            </DialogTitle>
          </DialogHeader>
          <DialogDescription hidden></DialogDescription>
        </div>
        <div className="flex justify-start space-x-4 border-b-[0.5px] border-b-[#E8E8E8] p-2 pb-6">
          <Label className="pt-2 font-roboto text-[14px] text-gris2">
            Unidad
          </Label>
          <div className="flex w-full flex-wrap gap-2">
            {["Unidad", "Docenas", "24 Pack"].map((unit) => (
              <MeasureButton
                key={unit}
                value={unit}
                selectedValue={selectedValue}
                onClick={handleSelect}
              >
                {unit}
              </MeasureButton>
            ))}
          </div>
        </div>
        <div className="flex justify-start space-x-4 border-b-[0.5px] border-b-[#E8E8E8] p-2 pb-6">
          <Label className="pt-2 font-roboto text-[14px] text-gris2">
            Peso
          </Label>
          {["kg", "g", "oz", "lb", "t"].map((weight) => (
            <MeasureButton
              key={weight}
              value={weight}
              selectedValue={selectedValue}
              onClick={handleSelect}
            >
              {weight}
            </MeasureButton>
          ))}
        </div>
        <div className="flex justify-start space-x-4 border-b-[0.5px] border-b-[#E8E8E8] p-2 pb-6">
          <Label className="pt-2 font-roboto text-[14px] text-gris2">
            Tiempo trabajo
          </Label>
          {["Horas", "Días"].map((time) => (
            <MeasureButton
              key={time}
              value={time}
              selectedValue={selectedValue}
              onClick={handleSelect}
            >
              {time}
            </MeasureButton>
          ))}
        </div>
        <div className="flex justify-start space-x-4 border-b-[0.5px] border-b-[#E8E8E8] p-2 pb-6">
          <Label className="pt-2 font-roboto text-[14px] text-gris2">
            Longitud
          </Label>
          <div className="flex w-full flex-wrap gap-2">
            {["mm", "cm", "in", "ft", "yd", "m", "km", "mi"].map((length) => (
              <MeasureButton
                key={length}
                value={length}
                selectedValue={selectedValue}
                onClick={handleSelect}
              >
                {length}
              </MeasureButton>
            ))}
          </div>
        </div>
        <div className="flex justify-end p-4">
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
