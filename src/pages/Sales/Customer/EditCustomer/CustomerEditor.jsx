import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import InputsGroup from "../Components/DataGroup";
import FormGroup from "../Components/FormGroup";
import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import {
  createContact,
  createGeneralInfo,
  destroyContact,
  destroyCustomer,
  editContact,
  editCustomer,
  editGeneralInfo,
} from "../utils";

const EditCustomer = () => {
  const { data } = useLoaderData();
  const navigation = useNavigation();
  const { id } = useParams();
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

  const contactForm = {
    comentarios: "Faltan algunos datos",
    activo: true,
    inactivo: false,
    desde: "2024-03-22",
    hasta: "2024-02-06",
    calle: "Periferico Sur",
    colonia: "Buena vista",
    estado: "Ciudad de México",
    encargadoCompras: "juan",
    numeroInterno: "2",
    codigoPostal: "08912",
    pais: "México",
    numeroExterior: "3",
    ciudad: "Distrito Federal",
  };

  const facturacion = {
    regimenFiscal: "Sin obligaciones fiscales",
    metodoPago: "Efectivo",
    formaPago: "Efectivo",
    usoCFDI: "ewefewf",
    email: "ejemplo@mail.com",
  };

  const condiciones = {
    condiciones: "option1",
    interesesPorRetraso: "option2",
    diasDeCredito: "option2",
    limiteDeCredito: "option1",
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

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Consultando Cliente: {id}{" "}
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
              id={customer.id}
            />
          </Form>
          <FormGroup data={customer} isDisabled={false} />
        </div>
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
