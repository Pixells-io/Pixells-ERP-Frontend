import React, { useCallback } from "react";
import { Form, useNavigate } from "react-router-dom";
import InputsGroup from "./ElementGroup";
import OrderTable from "./OrderFom";
import QuoteTable from "@/components/table/Quote/QuoteTable";
import Total from "@/components/TotalSection/TotalSection";
import StatusInformation from "@/components/StatusInformation/status-information";

const DocumentContent = ({
  documentNumber,
  setDocumentNumber,
  selectedWarehouse,
  setSelectedWarehouse,
  selectedCostCenter,
  setSelectedCostCenter,
  subtotal,
  setSubtotal,
  saveUrl,
  items,
  setItems,
  selectedProveedor,
  setSelectedProveedor,
  selectedFechaDoc,
  setSelectedFechaDoc,
  selectedFechaEntrega,
  setSelectedFechaEntrega,
  selectedCondicionPago,
  setSelectedCondicionPago,
  isEditable,
}) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(saveUrl);
  };

  const handleTotalChange = useCallback((newTotal) => {
    setSubtotal(newTotal);
  }, [setSubtotal]);

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col space-y-4 overflow-auto pr-12 pt-0">
      <InputsGroup
        documentNumber={documentNumber}
        setDocumentNumber={setDocumentNumber}
        selectedWarehouse={selectedWarehouse}
        setSelectedWarehouse={setSelectedWarehouse}
        selectedCostCenter={selectedCostCenter}
        setSelectedCostCenter={setSelectedCostCenter}
      />
      <div className="rounded-xl bg-white p-4">
      <OrderTable
        selectedProveedor={selectedProveedor}
        setSelectedProveedor={setSelectedProveedor}
        selectedFechaDoc={selectedFechaDoc}
        setSelectedFechaDoc={setSelectedFechaDoc}
        selectedFechaEntrega={selectedFechaEntrega}
        setSelectedFechaEntrega={setSelectedFechaEntrega}
        selectedCondicionPago={selectedCondicionPago}
        setSelectedCondicionPago={setSelectedCondicionPago}
      />
      <div className="mt-6">
        <QuoteTable
          setTotalChanges={handleTotalChange}
          initialItems={items}
          setItems={setItems}
          isEditable={isEditable}
        />
        </div>
      </div>
      <Total subtotal={subtotal} />
      <div className="flex justify-end">
        <StatusInformation
          status={"inProgress"}
          applyFunction={handleSubmit}
          imgUser={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        />
      </div>
    </Form>
  );
};

export default DocumentContent;
