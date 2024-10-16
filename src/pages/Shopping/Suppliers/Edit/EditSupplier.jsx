import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import InputsGroup from "../Components/DataGroup";
import FormGroup from "../Components/FormGroup";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useLocation,
  useNavigation,
  useParams,
} from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  createBillingInfo,
  createContact,
  createGeneralInfo,
  createPaymentConditions,
  destroyBillingInfo,
  destroyContact,
  destroySupplier,
  editBillingInfo,
  editContact,
  editGeneralInfo,
  editPaymentConditions,
  editSupplier,
  getSupplierById,
} from "../utils";
import { createPusherClient } from "@/lib/pusher";
import NavigationHeader from "@/components/navigation-header";
import Summary from "../Components/Summary";
const EditSupplier = () => {
  const { data } = useLoaderData();
  const navigation = useNavigation();
  const [supplier, setSupplier] = useState(data);
  const [supplierId, setSupplierId] = useState(0);

  const { id } = useParams();
  const location = useLocation();

  //WEBSOCKET
  const pusherClient = createPusherClient();

  async function getSupplierFunction(id) {
    const newData = await getSupplierById(id);
    setSupplier(newData.data);
  }

  useEffect(() => {
    setSupplierId(id);
    let channel = pusherClient.subscribe(`private-get-supplier.${supplierId}`);

    channel.bind("fill-supplier-data", ({ supplier }) => {
      getSupplierFunction(supplier);
    });

    return () => {
      pusherClient.unsubscribe(`private-get-supplier.${supplierId}`);
    };
  }, [location, supplierId]);

  const [supplierValues, setSupplierValues] = useState({
    type_supplier: supplier.type_supplier,
    fiscal_name: supplier.fiscal_name,
    rfc: supplier.rfc,
    group_supplier: supplier.group_supplier,
    currency: supplier.currency,
    cfdi_use: supplier.cfdi_use,
  });

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

      <div className="flex justify-between">
        <p className="font-poppins text-xl font-bold text-[#44444F]">
          Proveedor: {supplier?.name}
        </p>

        <div className="ml-4 flex h-[30px] w-fit items-center rounded-lg bg-blancoBox px-1">
          <NavLink
            to={`/shopping/supplier/edit/${id}`}
            end
            className={({ isActive }) =>
              isActive
                ? "flex h-[24px] items-center rounded-md bg-white px-2 py-0 font-roboto text-sm font-normal text-grisHeading shadow-none"
                : "flex h-[24px] items-center rounded-md px-2 py-0 font-roboto text-sm font-normal leading-4 text-grisSubText"
            }
          >
            <span>Información</span>
          </NavLink>
          <NavLink
            to={`/shopping/supplier/edit/${id}/resumen`}
            className={({ isActive }) =>
              isActive
                ? "flex h-[24px] items-center rounded-md bg-white px-2 py-0 font-roboto text-sm font-normal text-grisHeading shadow-none"
                : "flex h-[24px] items-center rounded-md px-2 py-0 font-roboto text-sm font-normal leading-4 text-grisSubText"
            }
          >
            <span>Resumen</span>
          </NavLink>
        </div>
      </div>

      <Outlet context={[supplier]}/>
    </div>
  </div>
  );
};

export default EditSupplier;

export async function Action({ request }) {              

  const data = await request.formData();

  switch (data.get("type")) {
    case "supplierPrincipal":
      await editSupplier(data);
      break;
    case "destroy_supplier":
      await destroySupplier(data);
      return redirect("/shopping");
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
    case "invoceInformation":
        await createBillingInfo(data);
      break;
    case "edit_invoice":
      await editBillingInfo(data);
      break;
    case "destroy_invoice":
      destroyBillingInfo(data);
      break;
    case "paymentConditions":
      if (!!data.get("payment_id")) {
        editPaymentConditions(data);
      } else {
        await createPaymentConditions(data);
      }
      break;
  }

  return "0";
}
