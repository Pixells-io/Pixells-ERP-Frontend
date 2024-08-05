import React from "react";
import { useLocation } from "react-router-dom";
import ConversionButtons from "./DocumentButton";
import CardCarousel from "./CardCarousel";
import { IonIcon } from "@ionic/react";
import { copy, print, create } from "ionicons/icons";

const Actions = ({ onConvert }) => {
  const location = useLocation();

  const isNotPurchaseRequestCreate = !location.pathname.includes("/shopping/request-orders/create");
  const isPedidos = location.pathname.includes("/shopping/request-orders/create");
  const isConvertibleDocument = location.pathname.includes("/shopping/document/orden") || location.pathname.includes("/shopping/document/cotizacion");

  return (
    <div className="ml-2 flex flex-col items-center justify-end gap-4  pt-4 sm:flex-row">
      <div className={`flex items-center gap-2 sm:gap-4 ${isPedidos ? 'justify-center' : ''}`}>
        {isNotPurchaseRequestCreate && !isPedidos && isConvertibleDocument && (
          <ConversionButtons onConvert={onConvert} />
        )}
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
  );
};

export default Actions;