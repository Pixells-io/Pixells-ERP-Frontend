import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { IonIcon } from "@ionic/react";
import { checkmark } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import ModalPeriod from "../../Modals/ModalPeriod";
import { format } from "date-fns";
import ModalDeleteCashBox from "../../Modals/ModalDeleteCashBox";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const FormUpdateCashBox = ({ cashBoxes, positions, store_id }) => {
  const navigation = useNavigation();
  const [cashBoxesSelect, setCashBoxesSelect] = useState(cashBoxes);

  const [selectEditCashBox, setSelectEditCashBox] = useState(null);

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
    setSelectEditCashBox(i);
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
    setSelectEditCashBox(i);
  };

  const handleInputChange = (value, name, i) => {
    setSelectEditCashBox(i);
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

  useEffect(() => {
    if (navigation.state === "idle") {
      setSelectEditCashBox(null);
    }
  }, [navigation.state]);

  useEffect(() => {
    changeValueCashBoxes();
  }, [cashBoxes]);

  const changeValueCashBoxes = () => {
    setCashBoxesSelect(cashBoxes);
  };

  return (
    <div>
      {/* Show list cashBox */}
      {cashBoxesSelect.map((cashBox, index) => (
        <Form
          className="mt-4"
          key={index}
          action={`/inventory/branch-points-sale/edit/${store_id}`}
          method="post"
        >
          <input
            type="text"
            className="hidden"
            hidden
            readOnly
            name="pos_id"
            value={cashBox?.id}
          />
          <input
            type="text"
            className="hidden"
            hidden
            readOnly
            name="type_option"
            value="updateCashBoxBranchTab"
          />
          <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
            CAJA {index + 1}
          </p>
          <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
            <div className="col-span-3">
              <InputForm
                name="name"
                type="text"
                placeholder={"Nombre de la Caja"}
                disabled={false}
                value={cashBox?.name}
                onChange={(e) =>
                  handleInputChange(e.target.value, "name", index)
                }
              />
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
              <SelectRouter
                  value={
                    positions.find((position) => position.id == cashBox?.user_id) ||
                    null
                  }
                  name={"user_id"}
                  options={positions}
                  placeholder="Encargado de la Caja"
                  required={true}
                  onChange={(e) => handleInputChange(e.id, "user_id", index)}
                  getOptionValue={(e) => e.id}
                  getOptionLabel={(e) => e.position_name}
                />
            </div>
            <div className="col-span-3 flex items-end justify-end">
              {index == selectEditCashBox && (
                <Button
                  className="flex h-[24px] min-w-[73px] gap-x-0.5 rounded-xl border border-primarioBotones bg-inherit px-1.5 text-[11px] font-medium text-primarioBotones hover:bg-primarioBotones"
                  disabled={navigation.state === "submitting"}
                >
                  <IonIcon className="h-5 w-5" icon={checkmark}></IonIcon>
                  {navigation.state === "submitting"
                    ? "Submitting..."
                    : "Guardar"}
                </Button>
              )}
            </div>
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
                          name="end"
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
                <ModalDeleteCashBox
                  store_id={store_id}
                  pos_id={cashBox?.id}
                  cashBox_name={cashBox?.name}
                />
              </div>
            </div>
          </div>
        </Form>
      ))}
    </div>
  );
};

export default FormUpdateCashBox;
