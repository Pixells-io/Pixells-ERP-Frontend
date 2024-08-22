import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import InputsGroup from "../Components/DataGroup";
import FormGroup from "../Components/FormGroup";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { saveNewSuppliers } from "../utils";

const CreateSupplier = () => {
  const [supplierValues, setSupplierValues] = useState({
    type_supplier: "",
    fiscal_name: "",
    rfc: "",
    group_supplier: "",
    currency: "",
    cfdi_use: "",
  });
  const navigation = useNavigation();

  // Configuración de los campos del formulario
  const supplierFields = [
    {
      name: "type_supplier",
      type: "select",
      placeholder: "Tipo de Proveedor",
      options: [
        { value: "local", label: "Local" },
        { value: "international", label: "Internacional" },
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
      name: "group_supplier",
      type: "select",
      placeholder: "Grupo de Proveedor",
      options: [
        { value: "group1", label: "Grupo 1" },
        { value: "group2", label: "Grupo 2" },
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
      name: "cfdi_use",
      type: "select",
      placeholder: "Uso de CFDI",
      options: [
        { value: "cfdi1", label: "CFDI 1" },
        { value: "cfdi2", label: "CFDI 2" },
      ],
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
            <div>Shopping - General</div>
          </div>
        </div>

        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            COMPRAS
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Proveedor
          </p>
          <div className="flex items-end justify-end">
            <Link to="/shopping">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
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
          <Form
            id="form-supplier"
            action="/shopping/supplier/create"
            method="post"
          >
            <InputsGroup
              fields={supplierFields}
              initialValues={supplierValues}
            />
          </Form>
          <FormGroup data={[]} isDisabled={true} />
        </div>
      </div>
    </div>
  );
};

export default CreateSupplier;

export async function Action({ request }) {
  const data = await request.formData();
  const response = await saveNewSuppliers(data);
  return redirect(`/shopping/supplier/edit/${response.data}`);
}
