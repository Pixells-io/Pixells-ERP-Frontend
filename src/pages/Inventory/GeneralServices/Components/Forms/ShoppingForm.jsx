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

const ShoppingTab = () => {
  return (
    <div className="w-full rounded-xl bg-white p-4 md:max-h-[320px]">
      <div className="flex w-full flex-wrap gap-4">
        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-col gap-6">
            <h2 className="ml-2 font-poppins text-sm font-medium text-[#44444F]">
              COMPRAS
            </h2>
            {/* Código de Artículo */}
            <SelectRouter placeholder="Proveedor Predeterminado:" />
            <div className="mt-[500px] flex w-full flex-1 items-end px-6">
              <div className="flex w-full justify-between">
                <label className="text-xs font-light text-[#8F8F8F]">
                  Actualizado 07 septiembre 2024
                </label>
                <button className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] px-4 hover:bg-[#E0E0E0]">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingTab;
