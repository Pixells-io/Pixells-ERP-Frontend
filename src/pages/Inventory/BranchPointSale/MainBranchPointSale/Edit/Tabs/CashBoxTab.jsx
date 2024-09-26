import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";

import { Switch } from "@/components/ui/switch";
import { IonIcon } from "@ionic/react";
import { add, trashOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import ModalPeriod from "../Modals/ModalPeriod";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CashBoxTab = ({ positions, store_id }) => {
  const navigation = useNavigation();
  const [cashBoxesSelect, setCashBoxesSelect] = useState([]);

  const deleteCashBox = (index) => {
    const newCashBoxes = cashBoxesSelect.filter((item, i) => index !== i);
    setCashBoxesSelect([...newCashBoxes]);
  };

  const addCashBox = () => {
    setCashBoxesSelect([
      ...cashBoxesSelect,
      {
        name: "",
        code: "",
        description: "",
        active: "0",
        start: "",
        end: "",
      },
    ]);
  };

  const addDate = (dateI, dateF, i) => {
    const cashBoxAux = cashBoxesSelect.map((u, index) => {
      if (index == i) {
        return {
          ...u,
          start: dateI,
          end: dateF,
        };
      } else {
        return u;
      }
    });
    setCashBoxesSelect(cashBoxAux);
  };

  const clearPeriod = (i) => {
    const auxCashBoxes = cashBoxesSelect.map((u, index) => {
      if (index == i) {
        return {
          ...u,
          start: "",
          end: "",
        };
      } else {
        return u;
      }
    });
    setCashBoxesSelect(auxCashBoxes);
  };

  const handleInputChange = (value, name, i) => {
    const aux = cashBoxesSelect.map((prevFormData, index) => {
      if (index == i) {
        return { ...prevFormData, [name]: value };
      } else {
        return {
          ...prevFormData,
        };
      }
    });

    setCashBoxesSelect([...aux]);
  };

  return (
    <Form
      className="flex h-full w-full flex-col overflow-auto px-6 py-4"
      action={`/inventory/branch-points-sale/edit/${store_id}`}
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
          value={store_id}
        />
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="type_option"
          value="cashBoxBranchTab"
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

        <input
          type="text"
          className="hidden"
          hidden
          name="cashBoxes"
          value={JSON.stringify(cashBoxesSelect)}
          onChange={() => {}}
        />

        {cashBoxesSelect.map((cashBox, index) => (
          <div className="mt-4" key={index}>
            <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
              CAJA {index + 1}
            </p>
            <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
              <div className="col-span-3">
                <p className="mb-1 text-[10px] font-normal text-grisText">
                  Nombre
                </p>
                <Select
                  name="name"
                  required={false}
                  value={String(cashBox?.name)}
                  onValueChange={(e) =>
                    handleInputChange(e, "name", index)
                  }
                >
                  <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones [&>span]:line-clamp-2">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map((position) => (
                      <SelectItem key={position.id} value={String(position.id)}>
                        {position.position_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-3">
                <InputForm
                  name="code"
                  type="text"
                  placeholder={"No. de Serie"}
                  disabled={false}
                  value={cashBox?.code}
                  onChange={(e) =>
                    handleInputChange(e.target.value, "code", index)
                  }
                />
              </div>
              <div className="col-span-3">
                <InputForm
                  name="description"
                  type="text"
                  placeholder={"Información adicional"}
                  disabled={false}
                  value={cashBox?.description}
                  onChange={(e) =>
                    handleInputChange(e.target.value, "description", index)
                  }
                />
              </div>
              <div className="col-span-3"></div>
              <div className="col-span-12 flex flex-col gap-y-2">
                <div className="flex w-full justify-between py-2">
                  <div className="flex items-center gap-x-3">
                    <Switch
                      className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                      name="active"
                      checked={cashBox?.active == "1"}
                      onCheckedChange={(e) =>
                        handleInputChange(e ? "1" : "0", "active", index)
                      }
                    />
                    <label className="font-roboto text-xs font-normal text-grisText">
                      Activo
                    </label>
                    {!!cashBox.start && !!cashBox.end ? (
                      <div className="flex items-center gap-x-2">
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            hidden
                            name="start"
                            className="hidden"
                            value={format(cashBox?.start, "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(cashBox?.start, "PP")}
                          </label>
                        </div>
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            hidden
                            name="dateFinish"
                            className="hidden"
                            value={format(cashBox?.end, "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(cashBox?.end, "PP")}
                          </label>
                        </div>
                      </div>
                    ) : (
                      <label className="font-roboto text-xs font-light text-grisSubText">
                        (Sin periodo de tiempo)
                      </label>
                    )}
                  </div>
                  <div>
                    {!!cashBox?.start && !!cashBox?.end ? (
                      <Button
                        type="button"
                        className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                        onClick={() => clearPeriod(index)}
                      >
                        Restablecer
                      </Button>
                    ) : (
                      <ModalPeriod setFunctionParent={addDate} index={index} />
                    )}
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <Button
                    type="button"
                    className="flex h-[24px] min-w-[73px] gap-x-0.5 rounded-xl border border-[#44444F] bg-inherit px-0 text-[11px] font-medium text-[#44444F] hover:bg-blancoBox2"
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

      <div className="mt-10 flex w-full flex-1 items-end">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          <Button
            className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default CashBoxTab;
