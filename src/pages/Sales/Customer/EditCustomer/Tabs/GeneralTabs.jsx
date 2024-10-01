import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/InputForm/InputForm";
import { Textarea } from "@/components/ui/textarea";
import ModalPeriod from "../../Modals/ModalPeriod";
import { Switch } from "@/components/ui/switch";
import { format } from "date-fns";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const GeneralTabs = ({ data, isDisabled }) => {
  const navigation = useNavigation();

  const [generalData, setGeneralData] = useState({
    street: data?.address?.street || "",
    int: data?.address?.int || "",
    ext: data?.address?.ext || "",
    cologne: data?.address?.cologne || "",
    city: data?.address?.city || "",
    state: data?.address?.state || "",
    cp: data?.address?.cp || "",
    country: data?.address?.country || "",
    status: data?.status == "1" ? true : false,
    start: data?.from_date || "",
    end: data?.to_date || "",
    shopping_person: data?.address?.shopping_person || "",
    comment: data?.comments || "",
  });

  const handleInputChange = (value, name) => {
    setGeneralData({ ...generalData, [name]: value });
  };

  const clearPeriod = () => {
    setGeneralData((prevFormData) => ({
      ...prevFormData,
      start: "",
      end: "",
    }));
  };

  const addDate = (dateI, dateF) => {
    setGeneralData((prevFormData) => ({
      ...prevFormData,
      start: dateI,
      end: dateF,
    }));
  };

  return (
    <Form
      className="flex h-full w-full flex-col overflow-auto py-4"
      id="form-supplier-general"
      action={"/sales/customer/edit/" + data?.id}
      method="post"
    >
      <div className="overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          GENERAL
        </h2>
        <input
          type="hidden"
          hidden
          name="client_transactional_id"
          value={data?.id}
        />
        <input type="hidden" hidden name="info_id" value={data?.general?.id} />
        <input type="hidden" hidden name="type" value={"generalInfo"} />

        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-12">
            <InputForm
              name="street"
              type="text"
              placeholder={"Calle"}
              required={true}
              value={generalData?.street}
              onChange={(e) => handleInputChange(e.target.value, "street")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="int"
              type="text"
              placeholder={"Número Int."}
              required={true}
              value={generalData?.int}
              onChange={(e) => handleInputChange(e.target.value, "int")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="ext"
              type="text"
              placeholder={"Número Ext."}
              required={true}
              value={generalData?.ext}
              onChange={(e) => handleInputChange(e.target.value, "ext")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="cologne"
              type="text"
              placeholder={"Colonia"}
              required={true}
              value={generalData?.cologne}
              onChange={(e) => handleInputChange(e.target.value, "cologne")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="city"
              type="text"
              placeholder={"Ciudad"}
              required={true}
              value={generalData?.city}
              onChange={(e) => handleInputChange(e.target.value, "city")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="state"
              type="text"
              placeholder={"Estado"}
              required={true}
              value={generalData?.state}
              onChange={(e) => handleInputChange(e.target.value, "state")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="cp"
              type="text"
              placeholder={"CP"}
              required={true}
              value={generalData?.cp}
              onChange={(e) => handleInputChange(e.target.value, "cp")}
            />
          </div>
          <div className="col-span-6">
            <InputForm
              name="country"
              type="text"
              placeholder={"País"}
              required={true}
              value={generalData?.country}
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
                  checked={generalData?.status == "1"}
                  onCheckedChange={(e) =>
                    handleInputChange(e ? "1" : "0", "status")
                  }
                />
                <label className="font-roboto text-xs font-normal text-grisText">
                  Activo
                </label>

                {!!generalData?.start && !!generalData?.end ? (
                  <div className="flex items-center gap-x-2">
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="start"
                        className="hidden"
                        value={format(generalData?.start, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(generalData?.start, "PP")}
                      </label>
                    </div>
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="end"
                        className="hidden"
                        value={format(generalData?.end, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(generalData?.end, "PP")}
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
                {!!generalData?.start && !!generalData?.end ? (
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
          <div className="col-span-12">
            <SelectRouter
              name={"shopping_person"}
              options={[
                { value: 1, label: "person 1" },
                { value: 2, label: "person 2" },
              ]}
              placeholder="Encargado de Compras"
              required={false}
              value={
                [
                  { value: 1, label: "person 1" },
                  { value: 2, label: "person 2" },
                ].find(
                  (clientGroupFind) =>
                    clientGroupFind.value == generalData?.shopping_person,
                ) || null
              }
              onChange={(e) => handleInputChange(e.value, "shopping_person")}
            />
          </div>
          <div className="col-span-12">
            <p className="mb-1 text-[10px] font-normal text-grisText">
              Comentarios:
            </p>
            <Textarea
              name="comment"
              placeholder=""
              value={generalData?.comment}
              disabled={isDisabled}
              onChange={(e) => handleInputChange(e.target.value, "comment")}
              rows={4}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-1 items-end px-6">
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

export default GeneralTabs;
