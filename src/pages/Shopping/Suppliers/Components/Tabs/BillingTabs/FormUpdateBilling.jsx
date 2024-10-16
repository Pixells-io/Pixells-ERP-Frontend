import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { IonIcon } from "@ionic/react";
import { checkmark, trashOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { format } from "date-fns";
import ModalPeriod from "../../Modals/ModalPeriod";
import ModalDeleteBilling from "../../Modals/ModalDeleteBilling";

const FormUpdateBilling = ({ billings, client_id }) => {
  const navigation = useNavigation();
  const [billingsSelect, setBillingsSelect] = useState(billings);
  const [selectEditBilling, setSelectEditBilling] = useState(null);

  const addDate = (dateI, dateF, i) => {
    const billingsAux = billingsSelect.map((u, index) => {
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
    setBillingsSelect(billingsAux);
    setSelectEditBilling(i);
  };

  const clearPeriod = (i) => {
    const auxBillings = billingsSelect.map((u, index) => {
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
    setBillingsSelect(auxBillings);
    setSelectEditBilling(i);
  };

  const handleInputChange = (value, name, i) => {
    setSelectEditBilling(i);
    const aux = billingsSelect.map((prevFormData, index) => {
      if (index == i) {
        return { ...prevFormData, [name]: value };
      } else {
        return {
          ...prevFormData,
        };
      }
    });

    setBillingsSelect([...aux]);
  };

  useEffect(() => {
    if (navigation.state === "idle") {
      setSelectEditBilling(null);
    }
  }, [navigation.state]);

  useEffect(() => {
    changeValueBillings();
  }, [billings]);

  const changeValueBillings = () => {
    setBillingsSelect(billings);
  };

  return (
    <div>
      {/* Show list contact */}
      {billingsSelect.map((billing, index) => (
        <Form
          key={index}
          className="mt-4"
          action={`/shopping/supplier/edit/${client_id}`}
          method="post"
        >
           <input type="hidden" hidden name="supplier_id" value={client_id} />
          <input type="hidden" hidden name="billing_id" value={billing.id} />
          <input type="hidden" hidden name="type" value={"edit_invoice"} />
          <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
            Registro {index + 1}
          </p>
          <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
            <div className="col-span-3">
              <InputForm
                name="regimen_fiscal"
                type="text"
                placeholder={"Régimen Fiscal"}
                disabled={false}
                value={billing?.regimen_fiscal}
                onChange={(e) =>
                  handleInputChange(e.target.value, "regimen_fiscal", index)
                }
              />
            </div>
            <div className="col-span-3">
              <InputForm
                name="metodo_pago"
                type="text"
                placeholder={"Método de Pago"}
                disabled={false}
                value={billing?.metodo_pago}
                onChange={(e) =>
                  handleInputChange(e.target.value, "metodo_pago", index)
                }
              />
            </div>
            <div className="col-span-3">
              <InputForm
                name="forma_pago"
                type="text"
                placeholder={"Forma de Pago"}
                disabled={false}
                value={billing?.forma_pago}
                onChange={(e) =>
                  handleInputChange(e.target.value, "forma_pago", index)
                }
              />
            </div>
            <div className="col-span-3 flex items-end justify-end">
              {index == selectEditBilling && (
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
            <div className="col-span-3">
              <InputForm
                name="uso_cfdi"
                type="text"
                placeholder={"Uso de CFDI"}
                disabled={false}
                value={billing?.uso_cfdi}
                onChange={(e) =>
                  handleInputChange(e.target.value, "uso_cfdi", index)
                }
              />
            </div>
            <div className="col-span-3">
              <InputForm
                name="email"
                type="text"
                placeholder={"E-Mail"}
                disabled={false}
                value={billing?.email}
                onChange={(e) =>
                  handleInputChange(e.target.value, "email", index)
                }
              />
            </div>
          </div>
          <div className="col-span-12 flex flex-col gap-y-2">
            <div className="flex w-full justify-between py-2">
              <div className="flex items-center gap-x-3">
                <Switch
                  className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                  name="active"
                  checked={billing?.active == "1"}
                  onCheckedChange={(e) =>
                    handleInputChange(e ? "1" : "0", "active", index)
                  }
                  disabled={false}
                />
                <label className="font-roboto text-xs font-normal text-grisText">
                  Activo
                </label>
                {!!billing.start && !!billing.end ? (
                  <div className="flex items-center gap-x-2">
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="start"
                        className="hidden"
                        value={format(billing?.start, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(billing?.start, "PP")}
                      </label>
                    </div>
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="end"
                        className="hidden"
                        value={format(billing?.end, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(billing?.end, "PP")}
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
                {!!billing?.start && !!billing?.end ? (
                  <Button
                    type="button"
                    className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                    onClick={() => clearPeriod()}
                  >
                    Restablecer
                  </Button>
                ) : (
                  <ModalPeriod
                    setFunctionParent={addDate}
                    index={index}
                    disabled={false}
                  />
                )}
              </div>
            </div>
            <div className="grid w-full grid-cols-12 gap-x-8 gap-y-2">
              <div className="col-span-6 flex items-center gap-x-3">
                <Switch
                  className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                  name="principal"
                  checked={billing?.principal == "1"}
                  onCheckedChange={(e) =>
                    handleInputChange(e ? "1" : "0", "principal", index)
                  }
                  disabled={false}
                />
                <label className="font-roboto text-xs font-normal text-grisText">
                  Registro Principal
                </label>
              </div>
              <div className="col-span-6 flex justify-end">
                <ModalDeleteBilling
                  client_id={client_id}
                  billing_id={billing?.id}
                  regimen_fiscal={billing?.regimen_fiscal}
                />
              </div>
            </div>
          </div>
        </Form>
      ))}
    </div>
  );
};

export default FormUpdateBilling;
