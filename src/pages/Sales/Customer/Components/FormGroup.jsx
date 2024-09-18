import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GralFormSupplier from "./Forms/GeneralForm";
import ContactForm from "./Forms/ContactForm";
import InvoiceForm from "./Forms/InvoiceForm";
import CreditForm from "./Forms/PaymentForm";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InvoiceFormTap from "./Forms/InvoiceFormTap";

const FormGroup = ({ data, isDisabled }) => {
  const navigation = useNavigation();

  const [generalData, setGeneralData] = useState({
    comment: data?.comments || "",
    status: data?.status == "1" ? true : false,
    start: data?.from_date || "",
    end: data?.to_date || "",
    street: data?.address?.street || "",
    cologne: data?.address?.cologne || "",
    state: data?.address?.state || "",
    shopping_person: data?.address?.shopping_person || "",
    int: data?.address?.int || "",
    cp: data?.address?.cp || "",
    country: data?.address?.country || "",
    ext: data?.address?.ext || "",
    city: data?.address?.city || "",
  });

  const [facturacionData, setFacturacionData] = useState({
    regimen_fiscal: "",
    uso_cfdi: "",
    metodo_pago: "",
    email: "",
    forma_pago: "",
  });

  const [condicionData, setcondicionData] = useState({
    conditions: data?.payment?.conditions || "",
    interest: data?.payment?.interest || "",
    days_of_credit: data?.payment?.days_of_credit || "",
    credit_limit: data?.payment?.credit_limit || "",
  });

  return (
    // <div className="w-full overflow-hidden">
    //   <Tabs defaultValue="general" className="w-full">
    //     <TabsList className="mb-4 flex flex-wrap justify-start gap-3 bg-transparent">
    //       {[
    //         { value: "general", label: "General" },
    //         { value: "contact", label: "Contactos" },
    //         { value: "invoice", label: "Inf. Facturación" },
    //         { value: "payment", label: "Condiciones Pago" },
    //       ].map(({ value, label }) => (
    //         <TabsTrigger
    //           key={value}
    //           value={value}
    //           className="flex items-center justify-center rounded-full bg-blancoBox2 px-4 py-1 text-center font-roboto text-[14px] text-grisHeading transition-colors hover:bg-gray-300 data-[state=active]:bg-primario data-[state=active]:text-white"
    //         >
    //           {label}
    //         </TabsTrigger>
    //       ))}
    //     </TabsList>
    //     <div className="w-full rounded-[10px] bg-white p-4">
    //       <TabsContent value="general">
    //         <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
    //           GENERAL
    //         </h2>
    //         <div className="flex w-full pl-2">
    //           <GralFormSupplier
    //             generalData={generalData}
    //             setGeneralData={setGeneralData}
    //           />
    //         </div>
    //       </TabsContent>
    //       <TabsContent value="contact">
    //         <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
    //           CONTACTOS
    //         </h2>
    //         <div className="flex w-full pl-2 pt-2">
    //           <ContactForm />
    //         </div>
    //       </TabsContent>
    //       <TabsContent value="invoice">
    //         <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
    //           INFORMACIÓN DE FACTURACIÓN
    //         </h2>
    //         <div className="flex w-full pl-2">
    //           <InvoiceForm
    //             facturacionData={facturacionData}
    //             setFacturacionData={setFacturacionData}
    //           />
    //         </div>
    //       </TabsContent>
    //       <TabsContent value="payment">
    //         <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
    //           CONDICIONES DE PAGO
    //         </h2>
    //         <div className="flex w-full pl-2">
    //           <CreditForm
    //             condicionData={condicionData}
    //             setcondicionData={setcondicionData}
    //           />
    //         </div>
    //       </TabsContent>
    //     </div>
    //   </Tabs>
    // </div>
    <div className="w-full overflow-hidden">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4 flex flex-wrap justify-start gap-3 bg-transparent">
          {[
            { value: "general", label: "General" },
            { value: "contact", label: "Contactos" },
            { value: "invoice", label: "Inf. Facturación" },
            { value: "payment", label: "Condiciones Pago" },
          ].map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex items-center justify-center rounded-full bg-blancoBox2 px-4 py-1 text-center font-roboto text-[14px] text-grisHeading transition-colors hover:bg-gray-300 data-[state=active]:bg-primario data-[state=active]:text-white"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full rounded-[10px] bg-white p-4">
          <TabsContent value="general">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              GENERAL
            </h2>
            <div className="flex w-full flex-wrap pl-2">
              <Form
                id="form-supplier-general"
                action={"/sales/customer/edit/" + data?.id}
                method="post"
                className="w-full"
              >
                <input
                  type="hidden"
                  hidden
                  name="client_transactional_id"
                  value={data?.id}
                />
                <input
                  type="hidden"
                  hidden
                  name="info_id"
                  value={data?.general?.id}
                />
                <input type="hidden" hidden name="type" value={"generalInfo"} />

                <GralFormSupplier
                  generalData={generalData}
                  setGeneralData={setGeneralData}
                  isDisabled={isDisabled}
                />
              </Form>
            </div>
            {!isDisabled && (
              <div className="mt-2 flex w-full justify-end pr-2">
                <Button
                  form="form-supplier-general"
                  className="rounded-3xl bg-primarioBotones"
                  disabled={navigation.state === "submitting"}
                >
                  {navigation.state === "submitting"
                    ? "Submitting..."
                    : "Guardar"}
                </Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="contact">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              CONTACTOS
            </h2>
            <div className="flex flex-wrap overflow-auto pl-2 pt-2">
              <ContactForm isDisabled={isDisabled} data={data} />
            </div>
          </TabsContent>
          <TabsContent value="invoice">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              INFORMACIÓN DE FACTURACIÓN
            </h2>
            <div className="flex flex-wrap overflow-auto pl-2 pt-2">
              <InvoiceFormTap isDisabled={isDisabled} data={data} />
            </div>
            {/* <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
            INFORMACIÓN DE FACTURACIÓN
          </h2>
          <div className="flex flex-wrap pl-2">
            <Form
              id="form-supplier-invoceInformation"
              action={"/shopping/supplier/edit/" + data?.id}
              method="post"
            >
              <input type="hidden" hidden name="supplier_id" value={data?.id} />
              <input type="hidden" hidden name="type" value={"invoceInformation"} />

              <InvoiceForm
                facturacionData={facturacionData}
                setFacturacionData={setFacturacionData}
                isDisabled={isDisabled}
              />
            </Form>
          </div>
          {
            !isDisabled && (
              <div className="mt-2 flex w-full justify-end pr-2">
                <Button
                  form="form-supplier-invoceInformation"
                  className="rounded-3xl bg-primarioBotones"
                  disabled={navigation.state === "submitting"}
                >
                  {navigation.state === "submitting"
                    ? "Submitting..."
                    : "Guardar"}
                </Button>
              </div>
            )
          } */}
          </TabsContent>
          <TabsContent value="payment">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              CONDICIONES DE PAGO
            </h2>
            <div className="flex flex-wrap pl-2">
              <Form
                id="form-supplier-payment"
                action={"/shopping/supplier/edit/" + data?.id}
                method="post"
              >
                <input
                  type="hidden"
                  hidden
                  name="supplier_id"
                  value={data?.id}
                />
                <input
                  type="hidden"
                  hidden
                  name="payment_id"
                  value={data?.payment?.id}
                />
                <input
                  type="hidden"
                  hidden
                  name="type"
                  value={"paymentConditions"}
                />
                <CreditForm
                  condicionData={condicionData}
                  setcondicionData={setcondicionData}
                  isDisabled={isDisabled}
                />
              </Form>
            </div>
            {!isDisabled && (
              <div className="mt-2 flex w-full justify-end pr-2">
                <Button
                  form="form-supplier-payment"
                  className="rounded-3xl bg-primarioBotones"
                  disabled={navigation.state === "submitting"}
                >
                  {navigation.state === "submitting"
                    ? "Submitting..."
                    : "Guardar"}
                </Button>
              </div>
            )}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;
