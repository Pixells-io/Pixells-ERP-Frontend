import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";

import { Switch } from "@/components/ui/switch";
import { IonIcon } from "@ionic/react";
import { add, trashOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import ModalPeriod from "../../Modals/ModalPeriod";
import { format } from "date-fns";
import FormUpdateBilling from "./FormUpdateBilling";

const BillingTabs = ({ data }) => {
  const navigation = useNavigation();

  const [billingNew, setBillingNew] = useState({
    regimen_fiscal: "",
    uso_cfdi: "",
    metodo_pago: "",
    email: "",
    forma_pago: "",
    active: "1",
    start: "",
    end: "",
  });

  const [isAddBilling, setIsAddBilling] = useState(false);

  const handleInputNewChange = (value, name) => {
    setBillingNew({ ...billingNew, [name]: value });
  };

  const addDateNewBilling = (dateI, dateF) => {
    setBillingNew({ ...cashBoxNew, start: dateI, end: dateF });
  };

  const clearPeriodNewBilling = () => {
    setBillingNew({ ...cashBoxNew, start: "", end: "" });
  };

  const clearData = () => {
    setBillingNew({
      regimen_fiscal: "",
      uso_cfdi: "",
      metodo_pago: "",
      email: "",
      forma_pago: "",
      active: "1",
      start: "",
      end: "",
    });
    setIsAddBilling(false);
  };

  useEffect(() => {
    if (navigation.state === "idle") {
      clearData();
    }
  }, [navigation.state]);

  return (
    <div className="flex h-full w-full flex-col overflow-auto py-4">
      <div className="overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          INFORMACIÓN DE FACTURACIÓN
        </h2>
        <div className="mt-2 flex w-fit items-center gap-x-2">
          <Button
            onClick={() => setIsAddBilling(true)}
            className="flex h-[24px] items-center gap-x-1 rounded-[10px] bg-primarioBotones px-2 text-[11px] font-medium text-white hover:bg-blancoBox2"
            disabled={isAddBilling}
          >
            <IonIcon className="h-5 w-5" icon={add}></IonIcon>
            Agregar
          </Button>
        </div>

        {/* New component */}
        {isAddBilling && (
          <Form
            className="mt-4"
            action={`/shopping/supplier/edit/${data?.id}`}
            method="post"
            id="create-form-billing"
          >
            <input
              type="hidden"
              hidden
              name="supplier_id"
              value={data?.id}
            />
            <input type="hidden" hidden name="type" value={"invoceInformation"} />
            <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
              Registro NUEVO
            </p>
            <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
              <div className="col-span-3">
                <InputForm
                  name="regimen_fiscal"
                  type="text"
                  placeholder={"Régimen Fiscal"}
                  disabled={false}
                  value={billingNew?.regimen_fiscal}
                  onChange={(e) =>
                    handleInputNewChange(e.target.value, "regimen_fiscal")
                  }
                />
              </div>
              <div className="col-span-3">
                <InputForm
                  name="metodo_pago"
                  type="text"
                  placeholder={"Método de Pago"}
                  disabled={false}
                  value={billingNew?.metodo_pago}
                  onChange={(e) =>
                    handleInputNewChange(e.target.value, "metodo_pago")
                  }
                />
              </div>

              <div className="col-span-3">
                <InputForm
                  name="forma_pago"
                  type="text"
                  placeholder={"Forma de Pago"}
                  disabled={false}
                  value={billingNew?.forma_pago}
                  onChange={(e) =>
                    handleInputNewChange(e.target.value, "forma_pago")
                  }
                />
              </div>
              <div className="col-span-3"></div>
              <div className="col-span-3">
                <InputForm
                  name="uso_cfdi"
                  type="text"
                  placeholder={"Uso de CFDI"}
                  disabled={false}
                  value={billingNew?.uso_cfdi}
                  onChange={(e) =>
                    handleInputNewChange(e.target.value, "uso_cfdi")
                  }
                />
              </div>
              <div className="col-span-3">
                <InputForm
                  name="email"
                  type="email"
                  placeholder={"E-Mail"}
                  disabled={false}
                  value={billingNew?.email}
                  onChange={(e) =>
                    handleInputNewChange(e.target.value, "email")
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
                    checked={billingNew?.active == "1"}
                    onCheckedChange={(e) =>
                      handleInputNewChange(e ? "1" : "0", "active")
                    }
                    disabled={true}
                  />
                  <label className="font-roboto text-xs font-normal text-grisText">
                    Activo
                  </label>
                  {!!billingNew.start && !!billingNew.end ? (
                    <div className="flex items-center gap-x-2">
                      <div className="rounded-[8px] bg-gris px-2 py-1">
                        <input
                          type="hidden"
                          hidden
                          name="start"
                          className="hidden"
                          value={format(billingNew?.start, "PP")}
                        />
                        <label className="text-xs font-light text-[#44444F]">
                          {format(billingNew?.start, "PP")}
                        </label>
                      </div>
                      <div className="rounded-[8px] bg-gris px-2 py-1">
                        <input
                          type="hidden"
                          hidden
                          name="end"
                          className="hidden"
                          value={format(billingNew?.end, "PP")}
                        />
                        <label className="text-xs font-light text-[#44444F]">
                          {format(billingNew?.end, "PP")}
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
                  {!!billingNew?.start && !!billingNew?.end ? (
                    <Button
                      type="button"
                      className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                      onClick={() => clearPeriodNewBilling()}
                    >
                      Restablecer
                    </Button>
                  ) : (
                    <ModalPeriod
                      setFunctionParent={addDateNewBilling}
                      index={0}
                      disabled={true}
                    />
                  )}
                </div>
              </div>
              <div className="grid w-full grid-cols-12 gap-x-8 gap-y-2">
                <div className="col-span-6 flex items-center gap-x-3">
                  <Switch
                    className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                    name="principal"
                    checked={billingNew?.principal == "1"}
                    onCheckedChange={(e) =>
                      handleInputNewChange(e ? "1" : "0", "principal")
                    }
                    disabled={true}
                  />
                  <label className="font-roboto text-xs font-normal text-grisText">
                    Registro Principal
                  </label>
                </div>
                <div className="col-span-6 flex justify-end">
                  <Button
                    type="button"
                    className="flex h-[24px] min-w-[73px] gap-x-0.5 rounded-xl border border-[#44444F] bg-inherit px-0 text-[11px] font-medium text-[#44444F] hover:bg-blancoBox2"
                    onClick={() => clearData()}
                  >
                    <IonIcon className="h-5 w-5" icon={trashOutline}></IonIcon>
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        )}

        {/* Show list billing */}
        <FormUpdateBilling billings={data?.billing} client_id={data?.id} />
      </div>

      <div className="mt-10 flex w-full flex-1 items-end px-6">
        <div className="flex w-full items-center justify-between items-center min-h-[32px]">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          {isAddBilling && (
            <Button
              className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
              disabled={navigation.state === "submitting"}
              form="create-form-billing"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingTabs;
