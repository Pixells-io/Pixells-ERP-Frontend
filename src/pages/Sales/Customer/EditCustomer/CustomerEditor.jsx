import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import InputsGroup from "../Components/DataGroup";
import FormGroup from "../Components/FormGroup";
import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import {
  createContact,
  createGeneralInfo,
  destroyContact,
  destroyCustomer,
  editContact,
  editCustomer,
  editGeneralInfo,
} from "../utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import GeneralTabs from "./Tabs/GeneralTabs";

const EditCustomer = () => {
  const { data } = useLoaderData();
  const [customer, setCustomer] = useState(data);

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
      value: "Payment",
      label: "Condiciones de pago",
      subLabel: "Define como será la relación comercial",
      disabled: false,
      update: null,
    },
  ];

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>

          <div className="font-roboto text-sm text-grisText">
            <div>Sales - General</div>
          </div>
        </div>

        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            Ventas
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        {/*content */}
        <Tabs
          defaultValue="information"
          className="w-full flex-1 overflow-auto"
        >
          <div className="flex justify-between">
            <p className="font-poppins text-xl font-bold text-grisHeading">
              Consultando Cliente:
            </p>
            <div className="flex justify-end gap-6">
              <TabsList className="ml-4 flex h-[30px] w-fit items-center rounded-lg bg-blancoBox px-1">
                <TabsTrigger
                  value="information"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Información
                </TabsTrigger>
                <TabsTrigger
                  value="resume"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Resumen
                </TabsTrigger>
              </TabsList>
              <Link to="/inventory/branch-points-sale/create"></Link>
            </div>
          </div>
          <TabsContent value="information" className="rounded-md">
            <div className="flex flex-1 flex-col rounded-xl bg-white">
              <div className="flex items-center gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
                <span className="font-poppins text-lg font-medium text-[#44444F]">
                  INFORMACIÓN DEL CLIENTE
                </span>
              </div>
              <div>
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
                  <TabsContent
                    value="principal"
                    className="w-full overflow-auto"
                  >
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
                        value={"customer_edit"}
                      />
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

                  <TabsContent
                    value="general"
                    className="w-full overflow-auto"
                  >
                    <GeneralTabs data={customer} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="resume" className="rounded-md bg-blancoBg p-2">
            <h2>resumen</h2>
          </TabsContent>
        </Tabs>
        {/* <div className="w-full space-y-4 overflow-auto">
          <FormGroup data={customer} isDisabled={false} />
        </div> */}
        <Form
          id="form-customer"
          action={"/sales/customer/edit/" + customer.id}
          method="post"
        >
          <input type="hidden" hidden name="customer_id" value={customer.id} />
          <input type="hidden" hidden name="type" value={"destroy_customer"} />

          <Button
            type="submit"
            className="w-[150px] rounded-full border-[0.5px] border-[#D7586B] bg-transparent hover:bg-transparent"
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
    </div>
  );
};

export default EditCustomer;

export async function Action({ request }) {
  const data = await request.formData();
  const type = data.get("type");

  switch (type) {
    case "customer_edit":
      await editCustomer(data);
      break;

    case "destroy_customer":
      await destroyCustomer(data);
      return redirect("/sales");

    case "generalInfo":
      if (!!data.get("info_id")) {
        await editGeneralInfo(data);
      } else {
        await createGeneralInfo(data);
      }
      break;

    case "contact":
      if (!!data.get("contact_id")) {
        await editContact(data);
      } else {
        await createContact(data);
      }
      break;
    case "destroy_contact":
      await destroyContact(data);
      break;
  }
  return "0";
}

//
//     case "invoceInformation":
//       if (!!data.get("billing_id")) {
//         await editBillingInfo(data);
//       } else {
//         await createBillingInfo(data);
//       }
//       break;
//     case "destroy_invoice":
//       destroyBillingInfo(data);
//       break;
//     case "paymentConditions":
//       if (!!data.get("payment_id")) {
//         editPaymentConditions(data);
//       } else {
//         await createPaymentConditions(data);
//       }
//       break;
