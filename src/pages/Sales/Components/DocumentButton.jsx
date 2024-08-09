import React from "react";
import { Button } from "@/components/ui/button";

const ConversionButtons = ({ onConvert, documentType }) => {
 
  const buttonStyle =
    "font-roboto text-gris2 bg-[#F0F0F0] hover:bg-gray-200 text-sm rounded-lg focus:outline-none focus:ring-0";

  if (documentType === "pedido") {
    return (
      <div className="flex justify-start pl-32 pt-6 text-xs">
        <Button className={buttonStyle} onClick={() => onConvert("factura")}>
          Convertir a factura
        </Button>
      </div>
    );
  }
  if ( documentType === "orden") {
    return (
      <div className="flex gap-4 pl-6 pt-6 text-[10px]">
          <Button className={buttonStyle} onClick={() => onConvert("factura")}>
            Convertir a factura
          </Button>
        <Button className={buttonStyle} onClick={() => onConvert("pedido")}>
          Convertir a pedido
        </Button>
      </div>
    );
  }

  if (documentType === "cotizacion") {
    return (
      <div className="flex gap-4 pl-6 pt-6 text-[10px]">
        <Button
          className={`${buttonStyle} px-2 py-1`}
          onClick={() => onConvert("orden")}
        >
          Convertir a OC
        </Button>
        <Button
          className={`${buttonStyle} px-2 py-1`}
          onClick={() => onConvert("pedido")}
        >
          Convertir a pedido
        </Button>
      </div>
    );
  }

  return null;  
};

export default ConversionButtons;
