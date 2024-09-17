import React, { useState } from "react";
import { Form, Link, redirect } from "react-router-dom";

import { Button } from "@/components/ui/button";
import InputsGroup from "../Components/DataGroup";
import FormGroup from "../Components/FormGroup";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";

import { saveNewCustomer } from "../utils";

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

  const initialValues = {
    clientNumber: "",
    clientType: "",
    socialNumber: "",
    rfc: "",
    clientGroup: "",
    currency: "",
    CFDI: "",
  };

  const contactForm = {
    comentarios: "",
    activo: false,
    inactivo: false,
    desde: "",
    hasta: "",
    calle: "",
    colonia: "",
    estado: "",
    encargadoCompras: "",
    numeroInterno: "",
    codigoPostal: "",
    pais: "",
    numeroExterior: "",
    ciudad: "",
  };

  const facturacion = {
    regimenFiscal: "",
    metodoPago: "",
    formaPago: "",
    usoCFDI: "",
    email: "",
  };

  const condiciones = {
    condiciones: "",
    interesesPorRetraso: "",
    diasDeCredito: "",
    limiteDeCredito: "",
  };

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
            <div>Shopping - General</div>
          </div>
        </div>

        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            VENTAS
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Cliente
          </p>
          <div className="flex items-end justify-end">
            <Link to="/sales">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
              >
                <IonIcon
                  icon={closeCircle}
                  size="small"
                  className="cursor-pointer text-grisDisabled"
                />
              </Button>
            </Link>
          </div>
        </div>
        {/*content */}
        <div className="w-full space-y-4 overflow-auto">
          <Form id="form-customer" action="/sales/customer/new" method="post">
            <InputsGroup
              fields={customerFields}
              initialValues={customerValues}
            />
          </Form>
          <FormGroup data={[]} isDisabled={true} />
        </div>
      </div>
    </div>
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
