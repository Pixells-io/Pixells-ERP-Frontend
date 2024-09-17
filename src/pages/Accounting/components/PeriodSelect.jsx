import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IonIcon } from "@ionic/react";
import { cloudDownload, cloudDownloadOutline } from "ionicons/icons";

const PeriodSelect = () => {
  return (
    <div className="flex items-center justify-start space-x-4 border border-[#E8E8E8] px-6 py-4 rounded-xl">
      <Select name="periodo">
        <label className="font-roboto text-xs font-light text-gris2">
          Periodo:
        </label>
        <SelectTrigger className="w-[200px] rounded rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
          <SelectValue placeholder="Seleccionar" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Periodos</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select name="registro">
        <label className="font-roboto text-sm font-light text-gris2">
          Tipo de registro:
        </label>
        <SelectTrigger className="w-[200px] rounded rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
          <SelectValue placeholder="Seleccionar" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Registro</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex-1 flex justify-end gap-x-2">
        <div
          className="flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-xl bg-[#E8E8E8]"
        >
          <IonIcon
            icon={cloudDownloadOutline}
            className="w-[28px] h-[28px] cursor-pointer text-[#44444F]"
          ></IonIcon>
        </div>
      </div>
    </div>
  );
};

export default PeriodSelect;
