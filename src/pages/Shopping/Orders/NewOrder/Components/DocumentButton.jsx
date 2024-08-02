import React from 'react';
import { Button } from "@/components/ui/button";

const ConversionButtons = ({ documentType, onConvert }) => {
  const buttonStyle = "font-roboto text-gris2 bg-[#F0F0F0] hover:bg-gray-200 text-sm rounded-lg focus:outline-none focus:ring-0";


  if (documentType === "orden") {
    return (
      <div className="flex gap-1 text-xs">
        <Button 
          className={buttonStyle}
          onClick={() => onConvert("cotizacion")}
        >
          Convertir a cotización
        </Button>
        <Button 
          className={buttonStyle}
          onClick={() => onConvert("pedido")}
        >
          Convertir a pedido
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button 
          className={buttonStyle}
          onClick={() => onConvert("orden")}
        >
          Volver a orden
        </Button>
      </div>
    );
  }
};

export default ConversionButtons;