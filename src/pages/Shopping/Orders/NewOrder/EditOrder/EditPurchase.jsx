import React, { useState,useEffect } from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import DocumentContent from '../Components/DocumentContent';
import ActionsGroup from "../Components/ActionsGroup";
import CardCarousel from "../Components/CardCarousel";

const EditOrders = () => {
  const { id } = useParams();
  const [documentNumber, setDocumentNumber] = useState(id);
  const [selectedWarehouse, setSelectedWarehouse] = useState("almacen2");
  const [selectedCostCenter, setSelectedCostCenter] = useState("cc2");
  const [subtotal, setSubtotal] = useState(0);
  const [selectedProveedor, setSelectedProveedor] = useState("proveedor3");
  const [selectedFechaDoc, setSelectedFechaDoc] = useState("fecha1");
  const [selectedFechaEntrega, setSelectedFechaEntrega] = useState("entrega1");
  const [selectedCondicionPago, setSelectedCondicionPago] = useState("condicion1");
  const [editable, setEditable] = useState(false);
  const [items, setItems] = useState([
    {
      item: "321",
      codigo: "001",
      valor: "100",
      descuento: "10",
      impuesto: "19",
      cantidad: "2",
      unidad: "unidad",
      fechaEntrega: "2024-08-15",
    }
  ]);
  const saveUrl ="/shopping/purchase"
  const getTitle = `consultando orden de compra: ${id}`;
  const url = `/shopping/document/orden/${id}`;

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <Header title={getTitle} />
        <div className="flex justify-between">
          <ActionsGroup url={url} />
          <div className="flex justify-end">
            <CardCarousel />
          </div>
        </div>
        <DocumentContent
          documentNumber={documentNumber}
          setDocumentNumber={setDocumentNumber}
          selectedWarehouse={selectedWarehouse}
          setSelectedWarehouse={setSelectedWarehouse}
          selectedCostCenter={selectedCostCenter}
          setSelectedCostCenter={setSelectedCostCenter}
          subtotal={subtotal}
          setSubtotal={setSubtotal}
          selectedProveedor={selectedProveedor}
          setSelectedProveedor={setSelectedProveedor}
          selectedFechaDoc={selectedFechaDoc}
          setSelectedFechaDoc={setSelectedFechaDoc}
          selectedFechaEntrega={selectedFechaEntrega}
          setSelectedFechaEntrega={setSelectedFechaEntrega}
          selectedCondicionPago={selectedCondicionPago}
          setSelectedCondicionPago={setSelectedCondicionPago}
          saveUrl={saveUrl}
          isEditable={editable}
          items={items}
          setItems={setItems}
        />
      </div>
    </div>
  );
};

export default EditOrders;
