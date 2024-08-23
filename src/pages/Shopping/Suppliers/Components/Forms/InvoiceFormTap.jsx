import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import InvoiceInfo from "./InvoiceInfo";

const InvoiceFormTap = ({ isDisabled, data }) => {
  // Datos iniciales para las filas
  const [positionTap, setPositionTap] = useState(0);

  // Estado inicial de los contactos
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    if (invoices.length !== data?.billing.length) {
      setPositionTap(0);
    }
    setInvoices(data?.billing || []);
  }, [data]);

  const addNewTab = () => {
    if (invoices.filter((invoice) => !invoice?.id).length != 0) return;
    const newTab = {
      regimen_fiscal: "",
      uso_cfdi: "",
      metodo_pago: "",
      email: "",
      forma_pago: "",
    };
    setInvoices([...invoices, newTab]);
  };

  const handleInvoiceDataChange = (value) => {
    const updatedInvoices = invoices.map((invoice, index) => {
      if (positionTap == index) {
        return value;
      } else {
        return invoice;
      }
    });
    setInvoices(updatedInvoices);
  };

  const handleDeleteInvoice = () => {
    if (invoices.length <= 1) {
      return;
    }

    const updatedInvoices = invoices.filter(
      (invoice, index) => index !== positionTap,
    );

    setInvoices(updatedInvoices);
    setPositionTap(updatedInvoices.length - 1);
  };

  return (
    <div className="flex w-full">
      <Tabs
        defaultValue={positionTap}
        value={positionTap}
        onValueChange={(value) => setPositionTap(value)}
        className="flex w-full"
      >
        <div className="space-y-auto flex w-[180px] flex-col">
          <div className="h-full max-h-[180px] w-full overflow-auto pt-2">
            <TabsList className="w-full flex-col space-y-2 bg-transparent">
              {invoices.map((invoice, index) => (
                <TabsTrigger
                  key={index}
                  value={index}
                  className="min-h-[34px] w-full items-center justify-center rounded-full border border-grisHeading bg-transparent text-center font-roboto text-[14px] text-grisHeading transition-colors hover:bg-blancoBox data-[state=active]:bg-grisHeading data-[state=active]:text-[#FFFFFF]"
                >
                  <span className="max-w-[90%] truncate">
                    {!!invoice?.id
                      ? !!invoice.regimen_fiscal
                        ? invoice.regimen_fiscal
                        : "N/A"
                      : !!invoice.regimen_fiscal
                        ? invoice.regimen_fiscal
                        : "Nuevo"}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
        <div className="mt-2 flex space-x-2">
          <Button
            type="button"
            className="flex items-center justify-center rounded-full border-none bg-transparent hover:bg-blancoBox"
            onClick={addNewTab}
            disabled={
              isDisabled ||
              invoices.filter((invoice) => !invoice?.id).length != 0
            }
          >
            <IonIcon icon={addCircle} className="text-xl text-primario" />
          </Button>
        </div>
        <div className="flex-grow">
          {invoices.map((invoice, index) => (
            <TabsContent key={index} value={index} className="h-auto">
              <InvoiceInfo
                invoiceData={invoice}
                setInvoiceData={handleInvoiceDataChange}
                onDelete={handleDeleteInvoice}
                invoices={invoices}
                isDisabled={isDisabled}
                index={index}
                supplier_id={data.id}
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default InvoiceFormTap;
