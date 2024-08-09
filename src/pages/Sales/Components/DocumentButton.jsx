import React from "react";
import { Button } from "@/components/ui/button";

const ConversionButtons = ({ onConvert, documentType }) => {
 
  const buttonStyle =
    "font-roboto text-gris2 bg-[#F0F0F0] hover:bg-gray-200 text-sm rounded-lg focus:outline-none focus:ring-0";

  if ( location.pathname.includes("/sales/tickets/document") && documentType === "ticket") {
    return (
      <div className="flex justify-start pl-32 pt-6 text-xs">
        <Button className={buttonStyle} onClick={() => onConvert("factura")}>
          Convertir a factura
        </Button>
      </div>
    );
  }
  if (location.pathname.includes("/sales/quotes/document") && documentType === "cotizacion") {
    return (
      <div className="flex gap-4 pl-6 pt-6 text-[10px]">
          <Button className={buttonStyle} onClick={() => onConvert("factura")}>
            Convertir a factura
          </Button>
        <Button className={buttonStyle} onClick={() => onConvert("ticket")}>
          Convertir a ticket
        </Button>
      </div>
    );
  }



  return null;  
};

export default ConversionButtons;
