import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const PrincipalFormSupplier = ({ fields, initialValues }) => {
  const navigation = useNavigation();
  // Estado para mantener los valores de los campos
  const [values, setValues] = useState(initialValues);

  // Maneja los cambios en los campos de entrada
  const handleInputChange = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  // Maneja los cambios en los campos de selección
  const handleSelectChange = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  // const [values, setValues] = useState(initialValues);

  // const handleInputChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSelectChange = (value, name) => {
  //   setValues({ ...values, [name]: value });
  // };

  // const commonStyle =
  //   "w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  const selectStyle =
    "w-full rounded-xl border border-grisText-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    // <div className="grid grid-cols-3 gap-4 bg-white p-4">
    //   <div>
    //     <Input
    //       type="text"
    //       name="client_code"
    //       placeholder="Código de Cliente"
    //       value={values?.clientNumber}
    //       onChange={handleInputChange}
    //       className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
    //     />
    //   </div>
    //   <div>
    //     <Select
    //       name="client_type"
    //       value={values.clientType}
    //       onValueChange={(value) => handleSelectChange(value, "clientType")}
    //     >
    //       <SelectTrigger className={commonStyle}>
    //         <SelectValue placeholder="Tipo de cliente" />
    //       </SelectTrigger>
    //       <SelectContent>
    //         <SelectItem value="local">Local</SelectItem>
    //         <SelectItem value="international">Internacional</SelectItem>
    //       </SelectContent>
    //     </Select>
    //   </div>
    //   <div>
    //     <Input
    //       type="text"
    //       name="name"
    //       placeholder="Nombre o razón social"
    //       value={values.socialNumber}
    //       onChange={handleInputChange}
    //       className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
    //     />
    //   </div>
    //   <div>
    //     <Input
    //       type="text"
    //       name="rfc"
    //       placeholder="RFC"
    //       value={values.rfc}
    //       onChange={handleInputChange}
    //       className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
    //     />
    //   </div>
    //   <div>
    //     <Select
    //       name="client_group"
    //       value={values.clientGroup}
    //       onValueChange={(value) => handleSelectChange(value, "clientGroup")}
    //     >
    //       <SelectTrigger className={commonStyle}>
    //         <SelectValue placeholder="Grupo de Clientes" />
    //       </SelectTrigger>
    //       <SelectContent>
    //         <SelectItem value="group1">Grupo 1</SelectItem>
    //         <SelectItem value="group2">Grupo 2</SelectItem>
    //       </SelectContent>
    //     </Select>
    //   </div>
    //   <div>
    //     <Select
    //       name="currency"
    //       value={values.currency}
    //       onValueChange={(value) => handleSelectChange(value, "currency")}
    //     >
    //       <SelectTrigger className={commonStyle}>
    //         <SelectValue placeholder="Moneda" />
    //       </SelectTrigger>
    //       <SelectContent>
    //         <SelectItem value="usd">USD</SelectItem>
    //         <SelectItem value="eur">EUR</SelectItem>
    //       </SelectContent>
    //     </Select>
    //   </div>
    //   <div>
    //     <Select
    //       value={values.CFDI}
    //       onValueChange={(value) => handleSelectChange(value, "CFDI")}
    //     >
    //       <SelectTrigger className={commonStyle}>
    //         <SelectValue placeholder="Uso de CFDI" />
    //       </SelectTrigger>
    //       <SelectContent>
    //         <SelectItem value="cfdi1">CFDI 1</SelectItem>
    //         <SelectItem value="cfdi2">CFDI 2</SelectItem>
    //       </SelectContent>
    //     </Select>
    //   </div>
    // </div>
    // <div className="w-full rounded-xl bg-white p-4">
    //   <div className="grid grid-cols-12">
    //     <div className="col-span-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    //       {fields.map((field) => {
    //         if (field.type === "input") {
    //           return (
    //             <div key={field.name}>
    //               <Input
    //                 name={field.name}
    //                 className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
    //                 placeholder={field.placeholder}
    //                 value={values[field.name]}
    //                 onChange={handleInputChange}
    //               />
    //             </div>
    //           );
    //         } else if (field.type === "select") {
    //           return (
    //             <div key={field.name}>
    //               <Select
    //                 value={values[field.name]}
    //                 name={field.name}
    //                 onValueChange={(value) =>
    //                   handleSelectChange(value, field.name)
    //                 }
    //               >
    //                 <SelectTrigger className={selectStyle}>
    //                   <SelectValue placeholder={field.placeholder} />
    //                 </SelectTrigger>
    //                 <SelectContent>
    //                   {field.options.map((option) => (
    //                     <SelectItem key={option.value} value={option.value}>
    //                       {option.label}
    //                     </SelectItem>
    //                   ))}
    //                 </SelectContent>
    //               </Select>
    //             </div>
    //           );
    //         }
    //         return null;
    //       })}
    //     </div>
    //     <div className="col-span-2 flex items-end justify-center">
    //       <Button
    //         className="rounded-3xl bg-primarioBotones"
    //         disabled={navigation.state === "submitting"}
    //       >
    //         {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
    //       </Button>
    //     </div>
    //   </div>
    // </div>
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
              name={"cfdi_use"}
              options={[
                { value: 1, label: "CFDI 1" },
                { value: 2, label: "CFDI 2" },
              ]}
              placeholder="CFDI"
              required={false}
              value={
                [
                  { value: 1, label: "CFDI 1" },
                  { value: 2, label: "CFDI 2" },
                ].find((cfdiFind) => cfdiFind.value == values["cfdi"]) || null
              }
              onChange={(e) => handleInputChange(e.value, "cfdi")}
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
                { value: 1, label: "Local" },
                { value: 2, label: "Internacional" },
              ]}
              placeholder="Tipó"
              required={false}
              value={
                [
                  { value: 1, label: "Local" },
                  { value: 2, label: "Internacional" },
                ].find(
                  (clientTypeFind) =>
                    clientTypeFind.value == values["client_type"],
                ) || null
              }
              onChange={(e) => handleInputChange(e.value, "client_type")}
            />
          </div>
          <div className="col-span-12">
            <SelectRouter
              name={"group_supplier"}
              options={[
                { value: 1, label: "Grupo 1" },
                { value: 2, label: "Grupo 2" },
              ]}
              placeholder="Grupo de Proveedor"
              required={false}
              value={
                [
                  { value: 1, label: "Grupo 1" },
                  { value: 2, label: "Grupo 2" },
                ].find(
                  (clientGroupFind) =>
                    clientGroupFind.value == values["client_group"],
                ) || null
              }
              onChange={(e) => handleInputChange(e.value, "client_group")}
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
