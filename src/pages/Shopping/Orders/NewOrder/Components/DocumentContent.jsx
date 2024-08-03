import React from "react";
import InputsGroup from "./ElementGroup";
import OrderTable from "./OrderFom";
import Total from "@/components/TotalSection/TotalSection";
import StatusInformation from "@/components/StatusInformation/status-information";
import { NavLink } from "react-router-dom";
const DocumentContent = ({
  documentNumber,
  setDocumentNumber,
  selectedWarehouse,
  setSelectedWarehouse,
  selectedCostCenter,
  setSelectedCostCenter,
  setSubtotal,
  subtotal,
  type,
}) => {
  const handleApply = (comments) => {
    console.log("Aplicando con comentarios:", comments);
    // Simula un clic en el NavLink
    document.getElementById("documentNavLink").click();
  };

  return (
    <div className="flex flex-col space-y-4 overflow-auto pr-12 pt-0">
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
          applyFunction={handleApply}
          imgUser={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        />
        <NavLink
          to={`/shopping/document/${type}`}
          id="documentNavLink"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default DocumentContent;
