import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import { Form, useParams } from "react-router-dom";
import ModalPeriod from "../Modals/ModalPeriod";
import { format } from "date-fns";

const GeneralTab = () => {
  const { id } = useParams();
  const [dateStartPeriod, setDateStartPeriod] = useState("");
  const [dateFinishPeriod, setDateFinishPeriod] = useState("");

  const clearPeriod = () => {
    setDateStartPeriod("");
    setDateFinishPeriod("");
  };

  const addDate = (dateI, dateF) => {
    setDateStartPeriod(dateI);
    setDateFinishPeriod(dateF);
  };

  return (
    <Form
      className="flex h-full w-full flex-col overflow-auto px-6 py-4"
      action={`/inventory/branch-points-sale/edit/${id}`}
      method="post"
    >
      <div className="overflow-auto">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          GENERAL
        </h2>
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="store_id"
          // value={store.id}
          value={id}
        />
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="type_option"
          value="create_generalBranchTab"
        />
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-12">
            <InputForm name="street" type="text" placeholder={"Calle"} />
          </div>
          <div className="col-span-6">
            <InputForm name="ext" type="text" placeholder={"Número Ext. "} />
          </div>
          <div className="col-span-6">
            <InputForm name="int" type="text" placeholder={"Número Int. "} />
          </div>
          <div className="col-span-12">
            <InputForm name="cologne" type="text" placeholder={"Colonia"} />
          </div>
          <div className="col-span-6">
            <InputForm name="city" type="text" placeholder={"Ciudad"} />
          </div>
          <div className="col-span-6">
            <InputForm name="state" type="text" placeholder={"Estado"} />
          </div>
          <div className="col-span-6">
            <InputForm name="cp" type="text" placeholder={"CP"} />
          </div>
          <div className="col-span-6">
            <InputForm name="country" type="text" placeholder={"País"} />
          </div>
          <div className="col-span-12">
            <h2 className="text-xs font-normal text-grisSubText">ESTATUS</h2>
            <div className="mt-1 flex w-full justify-between border-b border-t border-[#D7D7D7] py-3 pl-4">
              <div className="flex items-center gap-x-3">
                <input
                  type="hidden"
                  hidden
                  name="status"
                  className="hidden"
                  // value={checkedInputStatus}
                  readOnly
                />
                <Switch
                  className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                  // checked={checkedInputStatus == "1"}
                  // onCheckedChange={(e) => setCheckedInputStatus(e ? "1" : "0")}
                />
                <label className="font-roboto text-xs font-normal text-grisText">
                  Activo
                </label>

                {!!dateStartPeriod && !!dateFinishPeriod ? (
                  <div className="flex items-center gap-x-2">
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="dateStart"
                        className="hidden"
                        value={format(dateStartPeriod, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(dateStartPeriod, "PP")}
                      </label>
                    </div>
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="dateFinish"
                        className="hidden"
                        value={format(dateFinishPeriod, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(dateFinishPeriod, "PP")}
                      </label>
                    </div>
                    <Button
                      type="button"
                      className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                      onClick={() => clearPeriod()}
                    >
                      Restablecer
                    </Button>
                  </div>
                ) : (
                  <label className="font-roboto text-xs font-light text-grisSubText">
                    (Sin periodo de tiempo)
                  </label>
                )}
              </div>
              <div className="flex items-center">
                <ModalPeriod setFunctionParent={addDate} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex w-full flex-1 items-end">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          <Button className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]">
            Guardar
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default GeneralTab;
