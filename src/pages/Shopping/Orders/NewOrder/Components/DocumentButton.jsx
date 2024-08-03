import React from "react";
import { Button } from "@/components/ui/button";

const ConversionButtons = ({ documentType, onConvert }) => {
  const buttonStyle =
    "font-roboto text-gris2 bg-[#F0F0F0] hover:bg-gray-200 text-sm rounded-lg focus:outline-none focus:ring-0";

  if (documentType === "orden") {
    return (
      <div className="flex p-2 pl-8 text-xs">
        <Button className={buttonStyle} onClick={() => onConvert("pedido")}>
          Convertir a pedido
        </Button>
      </div>
    );
  }

  if (documentType === "cot") {
    return (
      <div className="flex gap-1 pl-0 text-[10px]">
        <Button
          className={`${buttonStyle} px-2 py-1`}
          onClick={() => onConvert("cotizacion")}
        >
          Convertir a cotización
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

  return (
    <div className="flex items-center gap-2 pl-8 text-xs">
      <Button className={buttonStyle} onClick={() => onConvert("cot")}>
        Volver al menú
      </Button>
    </div>
  );
};

export default ConversionButtons;
