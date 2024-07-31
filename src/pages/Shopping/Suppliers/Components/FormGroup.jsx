import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GralFormSupplier from "./Forms/GeneralForm";
import ContactForm from "./Forms/ContactForm";
import InvoiceForm from "./Forms/InvoiceForm";

const FormGroup = () => {
  const [generalData, setGeneralData] = useState({
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
  });

  const [facturacionData, setFacturacionData] = useState({
    regimenFiscal: "",
    metodoPago: "",
    formaPago: "",
    usoCFDI: "",
    email: "",
  });

  return (
    <div className="w-full overflow-hidden">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4 flex flex-wrap justify-start gap-3 bg-transparent">
          {[
            { value: "general", label: "General" },
            { value: "contact", label: "Contactos" },
            { value: "invoice", label: "Inf. Facturación" },
            { value: "shopping", label: "Compras" },
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
              General
            </h2>
            <div className="flex flex-wrap pl-2">
              <GralFormSupplier
                generalData={generalData}
                setGeneralData={setGeneralData}
              />
            </div>
          </TabsContent>
          <TabsContent value="contact">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              Contactos
            </h2>
            <div className="flex flex-wrap pl-2">
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
          <TabsContent value="shopping">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              Compras
            </h2>
            <div className="flex flex-wrap pl-2"></div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;
