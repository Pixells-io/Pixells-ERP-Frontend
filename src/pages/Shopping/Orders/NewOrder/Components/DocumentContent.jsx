import React, { useCallback, useState } from "react";
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
  saveUrl,
  items,
  selectedProveedor,
  setSelectedProveedor,
  selectedFechaDoc,
  setSelectedFechaDoc,
  selectedFechaEntrega,
  setSelectedFechaEntrega,
  selectedCondicionPago,
  setSelectedCondicionPago,
  isEditable,
  allProducts,
}) => {
  const submit = useSubmit();
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(e.currentTarget, { action: saveUrl, method: "post" });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 overflow-auto pr-12 bg-white rounded-xl  p-4"
    >
      <div className="rounded-xl p-4 border border-blancoBox">
        <InputsGroup
          documentNumber={documentNumber}
          setDocumentNumber={setDocumentNumber}
          selectedWarehouse={selectedWarehouse}
          setSelectedWarehouse={setSelectedWarehouse}
          selectedCostCenter={selectedCostCenter}
          setSelectedCostCenter={setSelectedCostCenter}
          isEditable={isEditable}
        />
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
      </div>

      <div className=" overflow-auto">
        <div className="mt-6  overflow-auto">
          <QuoteTable
            initialItems={items}
            isEditable={isEditable}
            allProducts={allProducts}
            setTableData={setTableData}
            tableData={tableData}
          />
        </div>
        <Total tableData={tableData} />
      </div>
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
