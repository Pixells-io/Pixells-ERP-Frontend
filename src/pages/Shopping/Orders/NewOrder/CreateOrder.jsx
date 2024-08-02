import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  copy,
  print,
  create,
} from "ionicons/icons";
import { Button } from "@/components/ui/button";
import CardCarousel from "./Components/CardCarousel";
import InputsGroup from "./Components/ElementGroup";
import OrderTable from "./Components/OrderFom";
import Total from "@/components/TotalSection/TotalSection";
import StatusInformation from "@/components/StatusInformation/status-information";
import DocumentFormat from "@/components/Document/DocFormat";
import { getDocumentInfo, getDocumentItems } from "./utils";

const CreateOrder = () => {
  const [documentNumber, setDocumentNumber] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [selectedCostCenter, setSelectedCostCenter] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [documentType, setDocumentType] = useState("orden");

  const documentInfo = getDocumentInfo();
  const items = getDocumentItems();

  const handleConvert = (type) => {
    setDocumentType(type);
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
            Nueva Orden de Compra
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-4 pl-4 pt-4">
          <div className="flex gap-2">
            <Button onClick={() => handleConvert("cotizacion")}>
              Convertir en Cotización
            </Button>
            <Button onClick={() => handleConvert("pedido")}>
              Convertir en Pedido
            </Button>
          </div>
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

        {/* Main content */}
        <div className="space-y-3 overflow-auto">
          {documentType === "orden" ? (
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
          ) : (
            <DocumentFormat
              documentType={documentType}
              documentInfo={documentInfo}
              items={items}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;