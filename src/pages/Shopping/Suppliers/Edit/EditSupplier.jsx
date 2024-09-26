import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import InputsGroup from "../Components/DataGroup";
import FormGroup from "../Components/FormGroup";
import {
  Form,
  Link,
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
        <NavigationHeader/>

        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-base font-bold text-[#44444F]">
            COMPRAS
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <Tabs
          defaultValue="information"
          className="h-full overflow-auto rounded-lg pt-2"
        >
          <div className="flex justify-between">
            <p className="text-xl mt-1 font-poppins font-bold text-grisHeading">
              Proveedor: {supplier.fiscal_name}
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
                  value="summary"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Resumen
                </TabsTrigger>
              </TabsList>
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
          <TabsContent value="information" className="rounded-md  p-2">
            <div className="w-full space-y-4 overflow-auto">
              <Form
                id="form-supplier"
                action={"/shopping/supplier/edit/" + supplier.id}
                method="post"
              >
                <input
                  type="hidden"
                  hidden
                  name="supplier_id"
                  value={supplier.id}
                />
                <input
                  type="hidden"
                  hidden
                  name="type"
                  value={"supplierPrincipal"}
                />

                <InputsGroup
                  fields={supplierFields}
                  initialValues={supplierValues}
                  id={supplier.id}
                />
              </Form>
              <FormGroup data={supplier} isDisabled={false} />
            </div>
            <Form
              id="form-supplier"
              action={"/shopping/supplier/edit/" + supplier.id}
              method="post"
            >
              <input
                type="hidden"
                hidden
                name="supplier_id"
                value={supplier.id}
              />
              <input
                type="hidden"
                hidden
                name="type"
                value={"destroy_supplier"}
              />

              <Button
                type="submit"
                className="w-[150px] rounded-full border-[0.5px] border-[#D7586B] bg-transparent hover:bg-transparent"
                disabled={navigation.state === "submitting"}
              >
                <span className="font-roboto text-[14px] text-[#D7586B]">
                  {navigation.state === "submitting"
                    ? "Submitting..."
                    : "Eliminar Proveedor"}
                </span>
              </Button>
            </Form>
          </TabsContent>
          <TabsContent
            value="summary"
            className="flex w-full h-full rounded-md p-2"
          >
            <Summary/>
          </TabsContent>
        </Tabs>
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
      if (!!data.get("billing_id")) {
        await editBillingInfo(data);
      } else {
        await createBillingInfo(data);
      }
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
