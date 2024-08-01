import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  copy,
  print,
  create,
} from "ionicons/icons";
import CardCarousel from "./Components/CardCarousel";
import InputsGroup from "./Components/ElementGroup";
import OrderTable from "./Components/OrderFom";
import Total from "@/components/TotalSection/TotalSection";
import StatusInformation from "@/components/StatusInformation/status-information";
import DocumentFormat from "@/components/Document/DocFormat";
import { getDocumentInfo,getDocumentItems } from "./utils";
import { DocumentButtons } from "./Components/DocumentButton";

const CreateOrder = () => {
  const [documentNumber, setDocumentNumber] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [selectedCostCenter, setSelectedCostCenter] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [documentType, setDocumentType] = useState("orden");

  const documentInfo = getDocumentInfo();
  const items = getDocumentItems();

  const renderMainContent = () => {
    switch (documentType) {
      case "orden":
        return (
          <div className="space-y-3 overflow-auto">
            <div className="flex h-full flex-col space-y-6">
              <InputsGroup
                documentNumber={documentNumber}
                setDocumentNumber={setDocumentNumber}
                selectedWarehouse={selectedWarehouse}
                setSelectedWarehouse={setSelectedWarehouse}
                selectedCostCenter={selectedCostCenter}
                setSelectedCostCenter={setSelectedCostCenter}
              />
              <OrderTable setSubtotal={setSubtotal} />
              <Total subtotal={subtotal} />
              <div className="flex justify-end">
                <StatusInformation
                  status={"inProgress"}
                  applyFunction={(addComments) => alert(addComments)}
                  imgUser={
                    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  }
                />
              </div>
            </div>
          </div>
        );
      case "cotizacion":
      case "pedido":
        return (
          <div className="space-y-3 overflow-auto">
            <DocumentFormat
              documentType={documentType}
              documentInfo={documentInfo}
              items={items}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* Navigation icons */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
                aria-label="Back"
              />
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
                aria-label="Forward"
              />
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            <div>Invoice - General</div>
          </div>
        </div>

        {/* Header */}
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

        {/* Title */}
        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            {documentType === "orden"
              ? "Nueva Orden de Compra"
              : documentType === "cotizacion"
              ? "Nueva Cotización"
              : "Nuevo Pedido"}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-4 pl-4 pt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <DocumentButtons
              className="rounded-lg bg-gris2 border-none"
                documentType={documentType}
                setDocumentType={setDocumentType}
              />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
              <IonIcon
                icon={copy}
                size="small"
                className="cursor-pointer text-[#696974]"
                aria-label="Copy"
              />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
              <IonIcon
                icon={print}
                size="small"
                className="cursor-pointer text-[#696974]"
                aria-label="Print"
              />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
              <IonIcon
                icon={create}
                size="small"
                className="cursor-pointer text-[#696974]"
                aria-label="Create"
              />
            </div>
            <CardCarousel />
          </div>
        </div>

        {/* Main content */}
        {renderMainContent()}
      </div>
    </div>
  );
};

export default CreateOrder;
