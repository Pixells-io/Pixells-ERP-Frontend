import React, { useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { globeOutline, lockClosedOutline } from "ionicons/icons";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputForm from "@/components/InputForm/InputForm";

function StepTwo({ step, setStep }) {
  const navigation = useNavigation();
  const [access, setAccess] = useState("invited");
  const [option, setOption] = useState("show");

  return (
    <div className={`flex flex-col gap-y-4 ${step == 2 ? "block" : "hidden"}`}>
      {/* add */}
      <Form className="flex flex-1 flex-col gap-y-4 px-4">
        <h2 className="font-roboto text-xs font-medium text-grisHeading">
          Acceso Permitido
        </h2>
        <Select
          value={access}
          name="actions"
          required
          onValueChange={(e) => setAccess(e)}
        >
          <SelectTrigger className="h-[32px] w-full rounded-xl border border-[#5B89FF] bg-inherit p-0 px-3 font-roboto text-xs font-normal text-grisHeading placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
            <SelectValue></SelectValue>
          </SelectTrigger>
          <SelectContent className="px-0 font-roboto text-xs font-normal text-grisText focus:text-grisText">
            <SelectItem
              value="invited"
              className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
            >
              <div className="flex items-center gap-x-2">
                <IonIcon src={lockClosedOutline} className="h-5 w-5" />
                <span>Solo los invitados</span>
              </div>
            </SelectItem>
            <SelectItem
              value="all"
              className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
            >
              <div className="flex items-center gap-x-2">
                <IonIcon src={globeOutline} className="h-5 w-5" />
                <span>Todos</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <h3 className="px-4 font-roboto text-xs font-normal text-[#CCCCCC]">
          Solo la gente seleccionada tiene acceso
        </h3>
        {access == "all" && (
          <div className="mt-2 flex flex-col gap-y-4">
            <h3 className="font-roboto text-xs font-medium text-grisHeading">
              Acciones Permitidas
            </h3>
            <div className="flex gap-x-8">
              <div className="flex w-fit gap-x-4">
                <InputForm
                  type="radio"
                  className="form-radio h-4 w-4 accent-grisHeading"
                  name="option"
                  id={"show"}
                  checked={option == "show"}
                  value={"show"}
                  onChange={(e) => setOption(e.target.value)}
                />
                <label
                  htmlFor="show"
                  className="font-roboto text-xs font-normal text-grisHeading"
                >
                  Ver
                </label>
              </div>
              <div className="flex w-fit gap-x-4">
                <InputForm
                  type="radio"
                  className="form-radio h-4 w-4 accent-grisHeading"
                  name="option"
                  id={"edit"}
                  value={"edit"}
                  checked={option == "edit"}
                  onChange={(e) => setOption(e.target.value)}
                />
                <label
                  htmlFor="edit"
                  className="font-roboto text-xs font-normal text-grisHeading"
                >
                  Editar
                </label>
              </div>
            </div>
          </div>
        )}

        <DialogFooter className={"mt-4"}>
          <div className="flex w-full justify-end gap-2">
            <Button
              type="button"
              className="h-[32px] w-[58px] rounded-[10px] border border-[#CCCCCC] bg-inherit font-roboto text-[11px] font-normal text-grisText hover:bg-inherit"
              onClick={() => setStep(1)}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="h-[32px] w-[58px] rounded-[10px] bg-blancoBox font-roboto text-[11px] font-normal text-white hover:bg-blancoBox"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
            </Button>
          </div>
        </DialogFooter>
      </Form>
    </div>
  );
}

export default StepTwo;
