import React, { useCallback } from "react";
import { Form, useSubmit } from "react-router-dom";
import InputsGroup from "./ElementGroup";
import OrderTable from "./OrderFom";
import QuoteTable from "@/components/table/Quote/QuoteTable";
import Total from "@/components/TotalSection/TotalSection";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";

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
  const submit = useSubmit();

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(e.currentTarget, { action: saveUrl, method: "post" });
  };

  const handleTotalChange = useCallback(
    (newTotal) => {
      setSubtotal(newTotal);
    },
    [setSubtotal],
  );

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 overflow-auto pr-12 pt-0"
    >
      <InputsGroup
        documentNumber={documentNumber}
        setDocumentNumber={setDocumentNumber}
        selectedWarehouse={selectedWarehouse}
        setSelectedWarehouse={setSelectedWarehouse}
        selectedCostCenter={selectedCostCenter}
        setSelectedCostCenter={setSelectedCostCenter}
        isEditable={isEditable}
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
          isEditable={isEditable}
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
          imgUser={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <Button
            type="button"
            variant="outline"
            className="w-[120px] rounded-lg border-2 border-primarioBotones text-xs text-primarioBotones hover:text-primarioBotones"
          >
            Save
          </Button>
          <Button
            type="submit"
            className={`rounded-lg bg-primarioBotones px-10 text-xs hover:bg-primarioBotones`}
          >
            Save for Aproval
          </Button>
        </StatusInformation>
      </div>
    </Form>
  );
};

export default DocumentContent;
