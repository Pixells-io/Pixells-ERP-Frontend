import React, { useState } from "react";
import { Form, Link, redirect } from "react-router-dom";

import { Button } from "@/components/ui/button";
import InputsGroup from "../Components/DataGroup";
import FormGroup from "../Components/FormGroup";

import { IonIcon } from "@ionic/react";
import { add, chevronBack, chevronForward, closeCircle } from "ionicons/icons";

import { saveNewCustomer } from "../utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavigationHeader from "@/components/navigation-header";

const CreateCustomer = () => {
  const [customerValues, setCustomerValues] = useState({
    client_code: "",
    client_type: "",
    rfc: "",
    client_group: "",
    currency: "",
    name: "",
    cfdi: "",
  });
  const customerFields = [
    {
      name: "client_code",
      type: "input",
      placeholder: "Código de Cliente",
    },
    {
      name: "client_type",
      type: "select",
      placeholder: "Tipo de Cliente",
      options: [
        { value: 0, label: "Local" },
        { value: 1, label: "Internacional" },
      ],
    },
    {
      name: "fiscal_name",
      type: "input",
      placeholder: "Nombre o razon social",
    },
    {
      name: "rfc",
      type: "input",
      placeholder: "RFC",
    },
    {
      name: "client_group",
      type: "select",
      placeholder: "Grupo de Proveedor",
      options: [
        { value: 0, label: "Grupo 1" },
        { value: 1, label: "Grupo 2" },
      ],
    },
    {
      name: "currency",
      type: "select",
      placeholder: "Moneda",
      options: [
        { value: "usd", label: "USD" },
        { value: "eur", label: "EUR" },
      ],
    },
    {
      name: "cfdi",
      type: "select",
      placeholder: "Uso de CFDI",
      options: [
        { value: 0, label: "CFDI 1" },
        { value: 1, label: "CFDI 2" },
      ],
    },
  ];
  const tabOptions = [
    {
      value: "principal",
      label: "Principal",
      subLabel: "Información inicial del cliente",
      disabled: false,
      update: {
        day: "Hoy",
        date: "14:36",
      },
    },
    {
      value: "general",
      label: "General",
      subLabel: "Ajusta los parámetros básicos",
      disabled: true,
      update: null,
    },
    {
      value: "contacts",
      label: "Contactos",
      subLabel: "Administra los diferentes contacos",
      disabled: true,
      update: null,
    },
    {
      value: "Invoices",
      label: "Información de facturación",
      subLabel: "Configura como será el método ideal",
      disabled: true,
      update: null,
    },
    {
      value: "Payment",
      label: "Condiciones de pago",
      subLabel: "Define como será la relación comercial",
      disabled: true,
      update: null,
    },
  ];
  function WrappedMain({ children }) {
    return (
      <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 bg-[#FBFBFB] px-14 py-3">
        {children}
      </div>
    );
  }
  return (
   <WrappedMain
>      {/* navigation inside */}
       <NavigationHeader/>

        {/* top content */}

        <div className="flex items-center gap-16">
        <h2 className="font-poppins font-bold text-[#44444F]">VENTAS</h2>
        <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
          <div className="text-xs">&bull; 4 objective </div>
          <div className="text-xs">&bull; 25 SFC </div>
          <div className="text-xs">&bull; 43 Activities</div>
        </div>
      </div>

        <div className="flex justify-between">
        <span className="font-poppins text-[20px] font-bold text-[#44444F]">
          Nuevo Cliente
        </span>
          {/* <div className="flex items-center gap-x-1 rounded-md bg-[#E8E8E8] px-1 py-0.5">
            <NavLink to={`/sales/customer/edit/${customer.id}`}>
              <p className="rounded-md bg-white px-1 py-0.5 font-roboto text-xs font-normal text-[#44444F]">
                Información
              </p>
            </NavLink>
            <NavLink to={`/sales/customer/resumen/${customer.id}`}>
              <p className="rounded-md px-1 py-0.5 font-roboto text-xs font-normal text-[#8F8F8F]">
                Resumen
              </p>
            </NavLink>
          </div> */}
        </div>

        <div className="flex flex-1 flex-col overflow-auto rounded-xl bg-white">
          <div className="flex items-center gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
            <span className="font-poppins text-lg font-medium text-[#44444F]">
              INFORMACIÓN DEL CLIENTE
            </span>
          </div>
          <Tabs
            defaultValue="principal"
            className="flex w-full flex-1 overflow-auto"
          >
            <TabsList className="flex h-full w-full max-w-[365px] flex-col justify-start gap-y-5 bg-transparent p-6">
              {tabOptions.map(
                ({ value, label, subLabel, disabled, update }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    disabled={disabled}
                    className={`flex w-full items-center justify-center rounded-[14px] bg-[#F1F1F1] px-6 py-2.5 transition-colors hover:bg-gray-300 data-[state=active]:border data-[state=active]:border-[#44444F] data-[state=active]:bg-[#F1F1F1] ${
                      value === "variables"
                        ? "pointer-events-none opacity-50"
                        : ""
                    }`}
                  >
                    <div className="flex w-full flex-col justify-start">
                      <p className="text-start font-roboto text-sm font-medium leading-tight text-[#44444F]">
                        {label}
                      </p>
                      <p className="text-start font-roboto text-[11px] font-normal leading-tight text-[#8F8F8F]">
                        {subLabel}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      {!!update ? (
                        <>
                          <label className="text-xs font-light text-[#8F8F8F]">
                            {update?.day}
                          </label>
                          <label className="text-xs font-light text-[#8F8F8F]">
                            {update?.date}
                          </label>
                        </>
                      ) : (
                        <label className="text-xs font-light text-[#8F8F8F]">
                          New
                        </label>
                      )}
                    </div>
                  </TabsTrigger>
                ),
              )}
            </TabsList>
            <TabsContent value="principal" className="w-full overflow-auto">
              <Form
                id="form-customer"
                action="/sales/customer/new"
                method="post"
                className="h-full overflow-auto"
              >
                <InputsGroup
                  fields={customerFields}
                  initialValues={customerValues}
                />
              </Form>
            </TabsContent>
          </Tabs>
        </div>
        </WrappedMain>  
  );
};

export default CreateCustomer;

export async function Action({ request }) {
  const data = await request.formData();
  const response = await saveNewCustomer(data);
  // console.log(response);
  return redirect(`/sales/customer/edit/${response.data}`);
  // return "1";
}
