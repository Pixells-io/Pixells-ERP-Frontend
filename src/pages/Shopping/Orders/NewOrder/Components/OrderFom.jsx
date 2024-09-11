import React from "react";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";
import { useNavigate } from "react-router-dom";
import InputForm from "@/components/InputForm/InputForm";

const OrderTable = ({
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

  const proveedorOptions = [
    { value: "newProvider", label: "Nuevo proveedor"},
    { value: "1", label: "Proveedor 1" },
    { value: "2", label: "Proveedor 2" },
    { value: "3", label: "Proveedor 3" },
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
    { value: "1", label: "Condición 1" },
    { value: "2", label: "Condición 2" },
    { value: "3", label: "Condición 3" },
  ];

 
  const disabledClass = "opacity-50 cursor-not-allowed";
  const enabledClass = "opacity-100 cursor-pointer";

  const handleRedirectNewProvider = (v) => {
    if(v == "newProvider"){
      navigate("/shopping/supplier/create");

    } else {
      setSelectedProveedor(v);
    }
  };

  return (
    <div className="flex pt-4 justify-between space-x-3">
      <div className={`w-full ${!isEditable ? disabledClass : enabledClass}`}>
        <SelectField
          name="supplier_id"
          placeholder="Seleccionar Proveedor"
          options={proveedorOptions}
          value={selectedProveedor}
          onValueChange={isEditable ? handleRedirectNewProvider : () => {}}
          className={!isEditable ? disabledClass : ""}
        />
      </div>
      <div className={`w-full ${!isEditable ? disabledClass : enabledClass}`}>
        <InputForm
          type={"date"}
          name="document_created"
          placeholder="Seleccionar Fecha de Doc"
          options={fechaDocOptions}
          value={selectedFechaDoc}
          onValueChange={isEditable ? setSelectedFechaDoc : () => {}}
          className={!isEditable ? disabledClass : ""}
        />
      </div>
      <div className={`w-full ${!isEditable ? disabledClass : enabledClass}`}>
        <InputForm
          type={"date"}
          name="delivery_date"
          placeholder="Seleccionar Fecha de Entrega"
          options={fechaEntregaOptions}
          value={selectedFechaEntrega}
          onValueChange={isEditable ? setSelectedFechaEntrega : () => {}}
          className={!isEditable ? disabledClass : ""}
        />
      </div>
      <div className={`w-full ${!isEditable ? disabledClass : enabledClass}`}>
        <SelectField
          name="payment_condition"
          placeholder="Seleccionar Condición de Pago"
          options={condicionPagoOptions}
          value={selectedCondicionPago}
          onValueChange={isEditable ? setSelectedCondicionPago : () => {}}
          className={!isEditable ? disabledClass : ""}
        />
      </div>
    </div>
  );
};

export default OrderTable;

