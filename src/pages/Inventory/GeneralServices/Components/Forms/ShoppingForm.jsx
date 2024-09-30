import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UnitMeasureButton from "../UnitMeasure";
import { Checkbox } from "@/components/ui/checkbox";
import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { closeCircle } from "ionicons/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const  ShoppingTab = () => {
 

  return (
    <div className="w-full rounded-xl bg-white p-4 md:max-h-[320px]">
      <div className="flex w-full flex-wrap gap-4">
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col w-full gap-6">
          <h2 className="font-poppins ml-2 text-sm font-medium text-[#44444F]">COMPRAS</h2>
            {/* Código de Artículo */}
            <SelectRouter
              placeholder="Proveedor Predeterminado:"
      
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingTab;
