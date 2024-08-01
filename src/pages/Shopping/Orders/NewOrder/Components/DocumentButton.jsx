import React from 'react';
import { Button } from "@/components/ui/button";

export const DocumentButtons = ({ documentType, setDocumentType }) => {
  const buttonClassName = "rounded-lg bg-[#F0F0F0] text-gris2 ";

  switch (documentType) {
    case "orden":
      return (
        <>
          <Button
            onClick={() => setDocumentType("cotizacion")}
            variant="outline"
            size="sm"
            className={buttonClassName}
          >
            Convertir en cotización
          </Button>
          <Button
            onClick={() => setDocumentType("pedido")}
            variant="outline"
            size="sm"
            className={buttonClassName}
          >
            Convertir en pedido
          </Button>
        </>
      );
    case "cotizacion":
    case "pedido":
      return (
        <Button
          onClick={() => setDocumentType("orden")}
          variant="outline"
          size="sm"
          className={buttonClassName}
        >
          Volver a la orden
        </Button>
      );
    default:
      return null;
  }
};
