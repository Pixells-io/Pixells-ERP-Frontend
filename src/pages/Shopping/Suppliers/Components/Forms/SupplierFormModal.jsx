import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import { Label } from "@/components/ui/label";
import ReSelect from "../ui/SelectGroup";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const SupplierForm = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
  ];
  const [clave, setClave] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IonIcon
          icon={addCircleOutline}
          size="large"
          className="h-7 w-7 cursor-pointer text-blue-500"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="-mx-6 border-b pb-4 pl-2">
          <DialogHeader className="pl-2">
            <DialogTitle className="font-poppins text-sm font-semibold text-grisHeading">
              Agregar Nuevo Proveedor
            </DialogTitle>
          </DialogHeader>
        </div>
        <DialogHeader></DialogHeader>
        <Label className="font-roboto text-sm text-gris2">Información Inicial</Label>
        <ReSelect
            options={options}
            name="country"
            value={selectedValue}
            onChange={setSelectedValue}
            placeholder="País"
            label="País"
          />
        <div className="flex items-start justify-between space-x-3">
            
         
          <InputRouter
            type="text"
            name="cBanco"
            value={clave}
            placeholder="Clave de banco"
          />
        </div>
        <span className="font-roboto text-sm text-grisSubText">
          Banco Nacional de México
        </span>
        <Label className="font-roboto text-sm text-gris2">Información Inicial</Label>
        <div className="flex items-start justify-start space-x-3">
          <ReSelect
            className="flex grow"
            options={options}
            name="country"
            value={selectedValue}
            onChange={setSelectedValue}
            placeholder="País"
            label="País"
          />
          <InputRouter
            type="text"
            name="cBanco"
            value={clave}
            placeholder="Clave de banco"
          />
          <InputRouter
            type="text"
            name="cBanco"
            value={clave}
            placeholder="Clave de banco"
          />
        </div>

        <Label className="font-roboto text-sm text-gris2">Comunicación</Label>
        <div className="flex items-start justify-between space-x-3">
          <InputRouter
            type="text"
            name="cBanco"
            value={clave}
            placeholder="Clave de banco"
          />
          <InputRouter
            type="text"
            name="cBanco"
            value={clave}
            placeholder="Clave de banco"
          />
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SupplierForm;
