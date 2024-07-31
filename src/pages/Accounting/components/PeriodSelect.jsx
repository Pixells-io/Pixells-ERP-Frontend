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
import { cloudDownload } from "ionicons/icons";

const PeriodSelect = () => {
  return (
    <div className="flex items-center justify-start space-x-4">
      <Select name="periodo">
        <label className="font-roboto text-xs font-light text-gris2">
          Periodo:
        </label>
        <SelectTrigger className="w-[200px] rounded-xl">
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
        <SelectTrigger className="w-[200px] rounded-xl">
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
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-center hover:bg-gray-400">
        <IonIcon icon={cloudDownload} size="small" className="text-grisText" />
      </div>
    </div>
  );
};

export default PeriodSelect;
