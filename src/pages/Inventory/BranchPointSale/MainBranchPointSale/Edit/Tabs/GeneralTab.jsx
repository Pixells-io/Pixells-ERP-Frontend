import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import ModalPeriod from "../Modals/ModalPeriod";
import { format } from "date-fns";

const GeneralTab = ({ informationDetails, store_id }) => {

  const navigation = useNavigation();

  const [information, setInformation] = useState({
    id: informationDetails?.id,
    street: informationDetails?.street,
    ext: informationDetails?.ext,
    int: informationDetails?.int,
    cologne: informationDetails?.cologne,
    city: informationDetails?.city,
    state: informationDetails?.state,
    cp: informationDetails?.cp,
    country: informationDetails?.country,
    status: informationDetails?.status,
    start: informationDetails?.start,
    end: informationDetails?.end,
  });

  const clearPeriod = () => {
    setInformation((prevFormData) => ({
      ...prevFormData,
      start: "",
      end: "",
    }));
  };

  const addDate = (dateI, dateF) => {
    setInformation((prevFormData) => ({
      ...prevFormData,
      start: dateI,
      end: dateF,
    }));
  };

  const handleInputChange = (value, name) => {
    setInformation((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Form
      className="flex h-full w-full flex-col overflow-auto px-6 py-4"
      action={`/inventory/branch-points-sale/edit/${store_id}`}
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
          value={store_id}
        />
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="type_option"
          value="generalBranchTab"
        />
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="info_id"
          value={information?.id}
        />
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-12">
            <InputForm
              name="street"
              type="text"
              placeholder={"Calle"}
              value={information?.street}
              onChange={(e) => handleInputChange(e.target.value, "street")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="ext"
              type="text"
              placeholder={"Número Ext. "}
              value={information?.ext}
              onChange={(e) => handleInputChange(e.target.value, "ext")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="int"
              type="text"
              placeholder={"Número Int. "}
              value={information?.int}
              onChange={(e) => handleInputChange(e.target.value, "int")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="cologne"
              type="text"
              placeholder={"Colonia"}
              value={information?.cologne}
              onChange={(e) => handleInputChange(e.target.value, "cologne")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="city"
              type="text"
              placeholder={"Ciudad"}
              value={information?.city}
              onChange={(e) => handleInputChange(e.target.value, "city")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="state"
              type="text"
              placeholder={"Estado"}
              value={information?.state}
              onChange={(e) => handleInputChange(e.target.value, "state")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="cp"
              type="text"
              placeholder={"CP"}
              value={information?.cp}
              onChange={(e) => handleInputChange(e.target.value, "cp")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="country"
              type="text"
              placeholder={"País"}
              value={information?.country}
              onChange={(e) => handleInputChange(e.target.value, "country")}
            />
          </div>
          <div className="col-span-12">
            <h2 className="text-xs font-normal text-grisSubText">ESTATUS</h2>
            <div className="mt-1 flex w-full justify-between border-b border-t border-[#D7D7D7] py-3 pl-4">
              <div className="flex items-center gap-x-3">
                <Switch
                  className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                  name="status"
                  checked={information?.status == "1"}
                  onCheckedChange={(e) =>
                    handleInputChange(e ? "1" : "0", "status")
                  }
                />
                <label className="font-roboto text-xs font-normal text-grisText">
                  Activo
                </label>

                {!!information?.start && !!information?.end ? (
                  <div className="flex items-center gap-x-2">
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="start"
                        className="hidden"
                        value={format(information?.start, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(information?.start, "PP")}
                      </label>
                    </div>
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="end"
                        className="hidden"
                        value={format(information?.end, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(information?.end, "PP")}
                      </label>
                    </div>
                  </div>
                ) : (
                  <label className="font-roboto text-xs font-light text-grisSubText">
                    (Sin periodo de tiempo)
                  </label>
                )}
              </div>
              <div className="flex items-center">
                {!!information?.start && !!information?.end ? (
                  <Button
                    type="button"
                    className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                    onClick={() => clearPeriod()}
                  >
                    Restablecer
                  </Button>
                ) : (
                  <ModalPeriod setFunctionParent={addDate} />
                )}
              </div>
            </div>
          </div>
        </div>
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

export default GeneralTab;
