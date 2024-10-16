import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const PrincipalFormSupplier = ({ fields, initialValues }) => {
  const navigation = useNavigation();
  // Estado para mantener los valores de los campos
  const [values, setValues] = useState(initialValues);
  console.log(values)
  // Maneja los cambios en los campos de entrada
  const handleInputChange = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  // Maneja los cambios en los campos de selección
  const handleSelectChange = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  const selectStyle =
    "w-full rounded-xl border border-grisText-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
 
    <div className="flex h-full w-full flex-col overflow-auto py-4">
      <div className="overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          PRINCIPAL
        </h2>
        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-3">
            <InputForm
              className="border-[#D7586B]"
              name="client_code"
              type="text"
              placeholder={"Código"}
              required={true}
              value={values["client_code"]}
              onChange={(e) => handleInputChange(e.target.value, "client_code")}
            />
          </div>
          <div className="col-span-9">
            <InputForm
              className="border-[#D7586B]"
              name="fiscal_name"
              type="text"
              placeholder={"Nombre"}
              required={true}
              value={values["fiscal_name"]}
              onChange={(e) => handleInputChange(e.target.value, "fiscal_name")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              className="border-[#D7586B]"
              name="rfc"
              type="text"
              placeholder={"RFC"}
              required={true}
              value={values["rfc"]}
              onChange={(e) => handleInputChange(e.target.value, "rfc")}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name="cfdi_use"
              options={[
                { value: "cfdi1", label: "CFDI 1" },
                { value: "cfdi2", label: "CFDI 2" },
              ]}
              placeholder="CFDI"
              required={false}
              value={
                [
                  { value: "cfdi1", label: "CFDI 1" },
                { value: "cfdi2", label: "CFDI 2" },
                ].find((cfdiFind) => cfdiFind.value == values["cfdi_use"]) || null
              }
              onChange={(e) => handleInputChange(e.value, "cfdi_use")}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name={"currency"}
              options={[
                { value: "usd", label: "USD" },
                { value: "eur", label: "EUR" },
              ]}
              placeholder="Moneda"
              required={false}
              value={[
                { value: "usd", label: "USD" },
                { value: "eur", label: "EUR" },
              ].find(
                ((currencyFind) => currencyFind.value == values["currency"]) ||
                  null,
              )}
              onChange={(e) => handleInputChange(e.value, "currency")}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name={"type_supplier"}
              options={[
                { value: "local", label: "Local" },
                { value: "international", label: "Internacional" },
              ]}
              placeholder="Tipó"
              required={false}
              value={
                [
                  { value: "local", label: "Local" },
                  { value: "international", label: "Internacional" },
                ].find(
                  (clientTypeFind) =>
                    clientTypeFind.value == values["type_supplier"],
                ) || null
              }
              onChange={(e) => handleInputChange(e.value, "type_supplier")}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name={"group_supplier"}
              options={[
                { value: "group1", label: "Grupo 1" },
                { value: "group2", label: "Grupo 2" },
              ]}
              placeholder="Grupo de Proveedor"
              required={false}
              value={
                [
                  { value: "group1", label: "Grupo 1" },
                  { value: "group2", label: "Grupo 2" },
                ].find(
                  (clientGroupFind) =>
                    clientGroupFind.value == values["group_supplier"],
                ) || null
              }
              onChange={(e) => handleInputChange(e.value, "group_supplier")}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-1 items-end px-6">
        <div className="flex w-full justify-between items-center min-h-[32px]">
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
    </div>
  );
};

export default PrincipalFormSupplier;
