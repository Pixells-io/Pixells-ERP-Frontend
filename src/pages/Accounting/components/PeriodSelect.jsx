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
    <div className="flex justify-start space-x-4">
      <Select name="periodo">
        <label  className="text-sm font-roboto text-gris2 mt-2">Periodo: </label>
        <SelectTrigger className="w-[200px] rounded-full">
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
      <label className="text-sm font-roboto text-gris2 mt-2">Tipo de registro: </label>
      <SelectTrigger className="w-[200px] rounded-full">
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
      <div className="w-8 h-8 mt-1 text-center bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400">
              <IonIcon
                icon={ cloudDownload}
                size="small"
                className="text-grisText"

              />
      </div>
    </div>
  );
}

export default PeriodSelect;