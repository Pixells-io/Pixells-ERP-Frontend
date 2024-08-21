import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GralFormSupplier from "./Forms/GeneralForm";
import ContactForm from "./Forms/ContactForm";
import InvoiceForm from "./Forms/InvoiceForm";
import CreditForm from "./Forms/PaymentForm";
import { Form } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FormGroup = ({ data }) => {
  const [generalData, setGeneralData] = useState({
    comment: "",
    activo: false,
    inactivo: false,
    start: "",
    end: "",
    street: "",
    cologne: "",
    state: "",
    shopping_person: "",
    int: "",
    cp: "",
    country: "",
    ext: "",
    city: "",
  });

  const [facturacionData, setFacturacionData] = useState({
    regimenFiscal: "",
    metodoPago: "",
    formaPago: "",
    usoCFDI: "",
    email: "",
  });

  const [condicionData, setcondicionData] = useState({
    condiciones: "",
    interesesPorRetraso: "",
    diasDeCredito: "",
    limiteDeCredito: "",
  });

  return (
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
                action={"/shopping/supplier/edit/" + data.id}
                method="post"
              >
                <input type="hidden" name="supplier_id" value={data.id} />
                <input type="hidden" name="type" value={"createGeneralInfo"} />

                <GralFormSupplier
                  generalData={generalData}
                  setGeneralData={setGeneralData}
                />
              </Form>
            </div>

            <div className="mt-2 flex w-full justify-end pr-2">
              <Button
                form="form-supplier-general"
                className="bg-primarioBotones rounded-3xl"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Guardar"}
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="contact">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              CONTACTOS
            </h2>
            <div className="flex flex-wrap overflow-auto pl-2 pt-2">
              <ContactForm />
            </div>
          </TabsContent>
          <TabsContent value="invoice">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              INFORMACIÓN DE FACTURACIÓN
            </h2>
            <div className="flex flex-wrap pl-2">
              <InvoiceForm
                facturacionData={facturacionData}
                setFacturacionData={setFacturacionData}
              />
            </div>
          </TabsContent>
          <TabsContent value="payment">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              CONDICIONES DE PAGO
            </h2>
            <div className="flex flex-wrap pl-2">
              <CreditForm
                condicionData={condicionData}
                setcondicionData={setcondicionData}
              />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;
