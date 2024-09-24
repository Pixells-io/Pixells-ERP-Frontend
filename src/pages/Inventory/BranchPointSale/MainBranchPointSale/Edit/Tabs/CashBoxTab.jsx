import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";

import { Switch } from "@/components/ui/switch";
import { IonIcon } from "@ionic/react";
import { add, trashOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Form, useParams } from "react-router-dom";

const CashBoxTab = () => {
  const { id } = useParams();
  const [cashBoxesSelect, setCashBoxesSelect] = useState([]);

  const deleteCashBox = (index) => {
    const newCashBoxes = cashBoxesSelect.filter((item, i) => index !== i);
    setCashBoxesSelect([...newCashBoxes]);
  };

  const addCashBox = () => {
    setCashBoxesSelect([...cashBoxesSelect, {}]);
  };
  return (
    <Form
      className="flex h-full w-full flex-col overflow-auto px-6 py-4"
      action={`/inventory/branch-points-sale/edit/${id}`}
      method="post"
    >
      <div className="overflow-auto">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          CAJAS
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

        <div className="mt-2 flex w-fit items-center gap-x-2">
          <Button
            onClick={() => addCashBox()}
            className="flex h-[24px] items-center gap-x-1 rounded-[10px] bg-primarioBotones px-2 text-[11px] font-medium text-white hover:bg-blancoBox2"
          >
            <IonIcon className="h-5 w-5" icon={add}></IonIcon>
            Agregar
          </Button>
        </div>

        {cashBoxesSelect.map((cashBox, index) => (
          <div className="mt-4" key={index}>
            <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
              CAJA {index + 1}
            </p>
            <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
              <div className="col-span-3">
                <InputForm
                  name="name"
                  type="text"
                  placeholder={"Nombre"}
                  disabled={true}
                />
              </div>
              <div className="col-span-3">
                <InputForm
                  name="position"
                  type="text"
                  placeholder={"No. de Serie"}
                  disabled={true}
                />
              </div>
              <div className="col-span-3">
                <InputForm
                  name="algoMas"
                  type="text"
                  placeholder={"Algo más"}
                />
              </div>
              <div className="col-span-3"></div>
              <div className="col-span-12 flex flex-col gap-y-2">
                <div className="flex w-full justify-between py-2">
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
                    <label className="font-roboto text-xs font-light text-grisSubText">
                      (Sin periodo de tiempo)
                    </label>
                  </div>
                  <div>
                    <Button
                      type="button"
                      className="flex h-[24px] gap-x-1 rounded-xl bg-blancoBox2 px-2 text-[11px] font-medium text-[#44444F] hover:bg-blancoBox2"
                    >
                      <IonIcon className="h-5 w-5" icon={add}></IonIcon>
                      Periodo
                    </Button>
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <Button
                    type="button"
                    className="flex h-[24px] gap-x-1 rounded-xl border border-[#44444F] bg-inherit px-2 text-[11px] font-medium text-[#44444F] hover:bg-blancoBox2"
                    onClick={() => deleteCashBox(index)}
                  >
                    <IonIcon className="h-5 w-5" icon={trashOutline}></IonIcon>
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
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

export default CashBoxTab;