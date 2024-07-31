import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  copy,
  print,
  create,
} from "ionicons/icons";
import CardCarousel from "../components/CardCarousel";
import StatusInformations from "../components/StatusInformation/StatusInformation";
import Document from "./DocsFormat/Quotes";
import { Button } from "@/components/ui/button";

const DocManager = () => {
  const [status, setStatus] = useState("draft");
  const [DocumentType, setDocumentType] = useState("cotizacion"); 

  const Convert2Ticket = () => {
    setDocumentType("ticket");
  };

  const Convert2Invoice = () => {
    setDocumentType("factura");
  };

  const Convert2Quote = () => {
    setDocumentType("cotizacion");
  };

  const ChangesDocument = () => {
    const buttonBaseClass = "rounded-full border-none bg-blancoBox p-2 text-grisText hover:bg-grisText hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-grisText focus:ring-opacity-50 transition-all duration-300";
  
    switch (DocumentType) {
      case "cotizacion":
        return (
          <>
            <Button
              onClick={Convert2Ticket}
              className={`mr-2 ${buttonBaseClass}`}
            >
              Convertir a Ticket
            </Button>
            <Button
              onClick={Convert2Invoice}
              className={buttonBaseClass}
            >
              Convertir a Factura
            </Button>
          </>
        );
      case "ticket":
      case "factura":
        return (
          <Button
            onClick={Convert2Quote}
            className={buttonBaseClass}
          >
            Volver a Cotización
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex w-full justify-center">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              />
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              />
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            <div>Invoice - General</div>
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            COTIZACIONES
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objectives</div>
            <div className="text-sm">&bull; 25 SFC</div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nueva Cotización
          </p>
         
        </div>
        <div className="flex items-center justify-between gap-4  pl-4 pt-4">
            <div className="flex gap-2">{ChangesDocument()}</div>
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={copy}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={print}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={create}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                />
              </div>
              <CardCarousel />
            </div>
          </div>
        {/* content */}
        <div className="flex flex-col items-center justify-center overflow-auto">
          <div className="overflow-auto">
            <Document DocumentType={DocumentType} />

            <div className="mt-4 flex w-full justify-end">
              <StatusInformations
                status={status}
                saveDraft={""}
                applyFunction={() => setModalConfirmation(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocManager;
