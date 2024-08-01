import React, { useState,useCallback } from "react";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import QuoteTable from "@/components/table/Quote/QuoteTable";

const OrderTable = ({ setSubtotal }) => {
  const [selectedProveedor, setSelectedProveedor] = useState("");
  const [selectedFechaDoc, setSelectedFechaDoc] = useState("");
  const [selectedFechaEntrega, setSelectedFechaEntrega] = useState("");
  const [selectedCondicionPago, setSelectedCondicionPago] = useState("");



  const proveedorOptions = [
    { value: "proveedor1", label: "Proveedor 1" },
    { value: "proveedor2", label: "Proveedor 2" },
    { value: "proveedor3", label: "Proveedor 3" },
  ];

  const fechaDocOptions = [
    { value: "fecha1", label: "Fecha 1" },
    { value: "fecha2", label: "Fecha 2" },
    { value: "fecha3", label: "Fecha 3" },
  ];

  const fechaEntregaOptions = [
    { value: "entrega1", label: "Entrega 1" },
    { value: "entrega2", label: "Entrega 2" },
    { value: "entrega3", label: "Entrega 3" },
  ];

  const condicionPagoOptions = [
    { value: "condicion1", label: "Condición 1" },
    { value: "condicion2", label: "Condición 2" },
    { value: "condicion3", label: "Condición 3" },
  ];


  const handleTotalChange = useCallback((newTotal) => {
    setSubtotal(newTotal);
  }, [setSubtotal]);

  return (
    <div className="rounded-xl bg-white p-4">
      <div className="flex pt-4 justify-between space-x-3">
        <SelectField
          name="proveedor"
          placeholder="Seleccionar Proveedor"
          options={proveedorOptions}
          onChange={setSelectedProveedor}
        />
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0 active:bg-primarioBotones active:bg-opacity-20"
        >
          <IonIcon
            icon={addCircleOutline}
            size="small"
            className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
          />
        </Button>
        <SelectField
          name="fechaDoc"
          placeholder="Seleccionar Fecha de Doc"
          options={fechaDocOptions}
          onChange={setSelectedFechaDoc}
        />
        <SelectField
          name="fechaEntrega"
          placeholder="Seleccionar Fecha de Entrega"
          options={fechaEntregaOptions}
          onChange={setSelectedFechaEntrega}
        />
        <SelectField
          name="condicionPago"
          placeholder="Seleccionar Condición de Pago"
          options={condicionPagoOptions}
          onChange={setSelectedCondicionPago}
        />
      </div>
      <div className="mt-6">
      <QuoteTable setTotalChanges={handleTotalChange} />
      </div>
    </div>
  );
};

export default OrderTable;
