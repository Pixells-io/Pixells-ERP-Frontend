import React, { useState } from "react";
import InputsGroup from "../../Components/DataGroup";
import { Form, useOutletContext } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import GeneralTabs from "../Tabs/GeneralTabs";
import PaymentTabs from "../Tabs/PaymentTabs";
import ContactTabs from "../Tabs/ContactTabs/ContactTabs";
import BillingTabs from "../Tabs/BillingTabs/BillingTabs";

const EditCustomer = () => {
  const [customerContext] = useOutletContext();

  const [customer, setCustomer] = useState(customerContext);

  const [customerValues, setCustomerValues] = useState({
    client_code: customer.client_code,
    client_type: customer.client_type,
    rfc: customer.rfc,
    client_group: customer.client_group,
    currency: customer.currency,
    fiscal_name: customer.name,
    cfdi: customer.cfdi,
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
      disabled: false,
      update: null,
    },
    {
      value: "contacts",
      label: "Contactos",
      subLabel: "Administra los diferentes contacos",
      disabled: false,
      update: null,
    },
    {
      value: "Invoices",
      label: "Información de facturación",
      subLabel: "Configura como será el método ideal",
      disabled: false,
      update: null,
    },
    {
      value: "payment",
      label: "Condiciones de pago",
      subLabel: "Define como será la relación comercial",
      disabled: false,
      update: null,
    },
  ];

  return (
    <div className="flex flex-1 flex-col overflow-auto rounded-xl bg-white">
      <div className="flex items-center gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          INFORMACIÓN DEL CLIENTE
        </span>
      </div>
      <Tabs
        defaultValue="principal"
        className="flex w-full flex-1 flex-row overflow-auto"
      >
        <TabsList className="flex h-full w-full max-w-[365px] flex-col justify-start gap-y-5 rounded-none border-r border-[#E8E8E8] bg-transparent p-6">
          {tabOptions.map(({ value, label, subLabel, disabled, update }) => (
            <TabsTrigger
              key={value}
              value={value}
              disabled={disabled}
              className={`flex w-full items-center justify-center rounded-[14px] bg-[#F1F1F1] px-6 py-2.5 transition-colors hover:bg-gray-300 data-[state=active]:border data-[state=active]:border-[#44444F] data-[state=active]:bg-[#F1F1F1] ${
                value === "variables" ? "pointer-events-none opacity-50" : ""
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
          ))}
          <div className="flex w-full flex-1 items-end">
            <Form
              id="form-customer"
              action={"/sales/customer/edit/" + customer.id}
              method="post"
            >
              <input
                type="hidden"
                hidden
                name="customer_id"
                value={customer.id}
              />
              <input
                type="hidden"
                hidden
                name="type"
                value={"destroy_customer"}
              />

              <Button
                type="submit"
                className="h-fit rounded-xl border-[0.5px] border-[#D7586B] bg-transparent px-1 py-1.5 hover:bg-transparent"
                disabled={navigation.state === "submitting"}
              >
                <span className="font-roboto text-[14px] text-[#D7586B]">
                  {navigation.state === "submitting"
                    ? "Submitting..."
                    : "Eliminar Cliente"}
                </span>
              </Button>
            </Form>
          </div>
        </TabsList>
        <TabsContent value="principal" className="w-full overflow-auto">
          <Form
            id="form-customer"
            action={"/sales/customer/edit/" + customer.id}
            method="post"
            className="h-full overflow-auto"
          >
            <input
              type="hidden"
              hidden
              name="customer_id"
              value={customer.id}
            />
            <input type="hidden" hidden name="type" value={"customer_edit"} />
            <input
              type="hidden"
              hidden
              name="client_transactional_id"
              value={customer.id}
            />
            <InputsGroup
              fields={customerFields}
              initialValues={customerValues}
            />
          </Form>
        </TabsContent>

        <TabsContent value="general" className="w-full overflow-auto">
          <GeneralTabs data={customer} />
        </TabsContent>
        <TabsContent value="contacts" className="w-full overflow-auto">
          <ContactTabs data={customer} />
        </TabsContent>
        <TabsContent value="Invoices" className="w-full overflow-auto">
          <BillingTabs data={customer} />
        </TabsContent>
        <TabsContent value="payment" className="w-full overflow-auto">
          <PaymentTabs data={customer} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EditCustomer;