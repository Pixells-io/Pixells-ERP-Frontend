import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { IonIcon } from "@ionic/react";
import { add, trashOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Form, useParams } from "react-router-dom";
import ModalPaymentMethods from "../Modals/ModalPaymentMethods";
import ModalPeriod from "../Modals/ModalPeriod";
import { format } from "date-fns";

const PaymentTab = ({ store_id }) => {
  const [paymentSelect, setPaymentSelect] = useState([]);
  const [paymentNew, setPaymentNew] = useState({
    type: "",
    label: "",
    accounting_account_id: "",
    active: "0",
    start: "",
    end: "",
  });

  const addDate = (dateI, dateF, i) => {
    const paymentAux = paymentSelect.map((u, index) => {
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
    setPaymentSelect(paymentAux);
  };

  const clearPeriod = (i) => {
    const auxPayments = paymentSelect.map((u, index) => {
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
    setPaymentSelect(auxPayments);
  };

  const addDateNewUser = (dateI, dateF) => {
    setPaymentNew({ ...paymentNew, start: dateI, end: dateF });
  };

  const clearPeriodNewUser = (i) => {
    setPaymentNew({ ...paymentNew, start: "", end: "" });
  };

  const handleInputNewChange = (value, name) => {
    setPaymentNew({ ...paymentNew, [name]: value });
  };

  const clearData = () => {
    setPaymentNew({
      type: "",
      label: "",
      accounting_account_id: "",
      active: "0",
      start: "",
      end: "",
    });
  };

  return (
    <div
      className="flex h-full w-full flex-col overflow-auto px-6 py-4"
      // action={`/inventory/branch-points-sale/edit/${id}`}
      // method="post"
    >
      <div className="overflow-auto">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          PAGO
        </h2>

        <div className="mt-2 flex w-fit items-center gap-x-2">
          <ModalPaymentMethods setPaymentNew={setPaymentNew} />
        </div>

        {/* New component */}
        {!!paymentNew.type && (
          <Form
            className="mt-4"
            action={`/inventory/branch-points-sale/edit/${store_id}`}
            method="post"
            id="create-form-payment"
          >
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
              value="createPaymentBranchTab"
            />
            <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
              MÉTODO NUEVO
            </p>
            <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
              <div className="col-span-3">
                <input
                  type="text"
                  className="hidden"
                  hidden
                  name="type"
                  value={paymentNew?.type}
                />
                <InputForm
                  name="label"
                  type="text"
                  placeholder={"Tipo"}
                  disabled={true}
                  value={paymentNew?.label}
                  onChange={(e) => handleInputNewChange(e.target.label, "type")}
                />
              </div>

              <div className="col-span-3">
                <p className="mb-1 text-[10px] font-normal text-grisText">
                  Cuenta Contable
                </p>
                <Select name="accounting_account_id" required={false}>
                  <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {[].map((accounting_account) => (
                      <SelectItem
                        key={accounting_account.id}
                        value={String(accounting_account.id)}
                      >
                        {accounting_account.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-1 mb-1 flex items-end justify-start">
                <Button
                  type="button"
                  className="flex h-[24px] items-center justify-center rounded-xl bg-blancoBox2 px-1.5 font-medium text-[#44444F] hover:bg-blancoBox2"
                >
                  <IonIcon className="h-5 w-5" icon={add}></IonIcon>
                </Button>
              </div>
              <div className="col-span-12 flex flex-col gap-y-2">
                <div className="flex w-full justify-between py-2">
                  <div className="flex items-center gap-x-3">
                    <Switch
                      className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                      name="active"
                      checked={paymentNew?.active == "1"}
                      onCheckedChange={(e) =>
                        handleInputNewChange(e ? "1" : "0", "active")
                      }
                    />
                    <label className="font-roboto text-xs font-normal text-grisText">
                      Activo
                    </label>
                    {!!paymentNew.start && !!paymentNew.end ? (
                      <div className="flex items-center gap-x-2">
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            hidden
                            name="start"
                            className="hidden"
                            value={format(paymentNew.start, "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(paymentNew.start, "PP")}
                          </label>
                        </div>
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            hidden
                            name="end"
                            className="hidden"
                            value={format(paymentNew.end, "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(paymentNew.end, "PP")}
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
                    {!!paymentNew.start && !!paymentNew.end ? (
                      <Button
                        type="button"
                        className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                        onClick={() => clearPeriodNewUser()}
                      >
                        Restablecer
                      </Button>
                    ) : (
                      <ModalPeriod
                        setFunctionParent={addDateNewUser}
                        index={0}
                      />
                    )}
                  </div>
                </div>
                <div className="flex w-full justify-end">
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

        {/* {paymentSelect.map((paymentS, index) => (
          <div className="mt-4" key={index}>
            <p className="py-2 text-[10px] font-normal text-[#8F8F8F]">
              MÉTODO {index + 1}
            </p>
            <div className="mt-1 grid w-full grid-cols-12 gap-x-8 gap-y-2 border-t border-[#D7D7D7] py-4">
              <div className="col-span-3">
                <InputForm
                  name="type"
                  type="text"
                  placeholder={"Tipo"}
                  disabled={true}
                  value={paymentS.label}
                />
              </div>

              <div className="col-span-3">
                <p className="mb-1 text-[10px] font-normal text-grisText">
                  Cuenta Contable
                </p>
                <Select name="inventory_id" required={true}>
                  <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {[].map((cashBox) => (
                      <SelectItem key={cashBox.id} value={String(cashBox.id)}>
                        {cashBox.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-1 mb-1 flex items-end justify-start">
                <Button
                  type="button"
                  className="flex h-[24px] items-center justify-center rounded-xl bg-blancoBox2 px-1.5 font-medium text-[#44444F] hover:bg-blancoBox2"
                >
                  <IonIcon className="h-5 w-5" icon={add}></IonIcon>
                </Button>
              </div>
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
                    {!!paymentS.start &&
                    !!paymentS.end ? (
                      <div className="flex items-center gap-x-2">
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            hidden
                            name="start"
                            className="hidden"
                            value={format(paymentS.start, "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(paymentS.start, "PP")}
                          </label>
                        </div>
                        <div className="rounded-[8px] bg-gris px-2 py-1">
                          <input
                            type="hidden"
                            hidden
                            name="end"
                            className="hidden"
                            value={format(paymentS.end, "PP")}
                          />
                          <label className="text-xs font-light text-[#44444F]">
                            {format(paymentS.end, "PP")}
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
                    {!!paymentS.start &&
                    !!paymentS.end ? (
                      <Button
                        type="button"
                        className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                        onClick={() => clearPeriod(index)}
                      >
                        Restablecer
                      </Button>
                    ) : (
                      <ModalPeriod setFunctionParent={addDate} index={index} />
                    )}{" "}
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <Button
                    type="button"
                    className="flex h-[24px] min-w-[73px] gap-x-0.5 rounded-xl border border-[#44444F] bg-inherit px-0 text-[11px] font-medium text-[#44444F] hover:bg-blancoBox2"
                    // onClick={() => deleteUser(index)}
                  >
                    <IonIcon className="h-5 w-5" icon={trashOutline}></IonIcon>
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      </div>

      <div className="mt-10 flex w-full flex-1 items-end">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          {!!paymentNew?.type && (
            <Button
              form="create-form-payment"
              className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
            >
              Guardar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentTab;
