import React from "react";
import { Form, useNavigate } from "react-router-dom";
import InputsGroup from "./ElementGroup";
import OrderTable from "./OrderFom";
import Total from "@/components/TotalSection/TotalSection";
import StatusInformation from "@/components/StatusInformation/status-information";


const DocumentContent = ({
  documentNumber,
  setDocumentNumber,
  selectedWarehouse,
  setSelectedWarehouse,
  selectedCostCenter,
  setSelectedCostCenter,
  setSubtotal,
  subtotal,
  saveUrl, // URL para redirigir después de guardar
}) => {
  const navigate = useNavigate();

  const handleSubmit = () => {

    // Navegar a la URL especificada
    navigate(saveUrl);
  };

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
      <OrderTable setSubtotal={setSubtotal} />
      <Total subtotal={subtotal} />
      <div className="flex justify-end">
        <StatusInformation
          status={"inProgress"}
          applyFunction={() => handleSubmit()}
          imgUser={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        />
      </div>
    </Form>
  );
};

export default DocumentContent;