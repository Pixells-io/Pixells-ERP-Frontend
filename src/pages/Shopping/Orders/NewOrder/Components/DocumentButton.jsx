import React from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const ConversionButtons = ({ onConvert }) => {
  const location = useLocation();
  const buttonStyle =
    "font-roboto text-gris2 bg-[#F0F0F0] hover:bg-gray-200 text-sm rounded-lg focus:outline-none focus:ring-0";

  if (location.pathname === "/shopping/document/orden") {
    return (
      <div className="flex p-2 pl-8 text-xs">
        <Button className={buttonStyle} onClick={() => onConvert("pedido")}>
          Convertir a pedido
        </Button>
      </div>
    );
  }

  if (location.pathname === "/shopping/document/cotizacion") {
    return (
      <div className="flex gap-1 pl-0 text-[10px]">
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

  return null;  // No renderizar nada si el tipo de documento no coincide
};

export default ConversionButtons;