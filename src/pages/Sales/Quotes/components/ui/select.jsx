import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import { Label } from "@/components/ui/label";

/**
 * Using select for options
 * Label: Any
 * onChange: change in value
 *
 * @returns select
 */

const StyleSelect =
  "w-full rounded-xl border border-transparent bg-grisBg placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent";
const SelectField = ({ label, id, value, onChange, showAddIcon = false }) => (
  <div className="flex flex-col">
    <Label htmlFor={id} className="mb-1 font-roboto text-sm text-grisText">
      {label}
    </Label>
    <div className="flex items-center">
      <Select name={label} value={value} onValueChange={onChange}>
        <SelectTrigger className={StyleSelect}>
          <SelectValue placeholder="Selecciona" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Opción 1</SelectItem>
          <SelectItem value="2">Opción 2</SelectItem>
          <SelectItem value="3">Opción 3</SelectItem>
        </SelectContent>
      </Select>
      {showAddIcon && (
        <IonIcon
          icon={addCircleOutline}
          className="ml-4 text-xl text-primarioBotones"
        />
      )}
    </div>
  </div>
);
export default SelectField;
