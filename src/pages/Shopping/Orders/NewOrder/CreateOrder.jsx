import React, { useState } from 'react';
import Header from './Components/Header';
import DocumentContent from './Components/DocumentContent';
import CardCarousel from './Components/CardCarousel';

const CreateOrder = () => {
  const [documentNumber, setDocumentNumber] = useState('');
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [selectedCostCenter, setSelectedCostCenter] = useState('');
  const [selectedProveedor, setSelectedProveedor] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const saveUrl ="/shopping/purchase"

  const getTitle = "Nuevo pedido";

 

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <Header title={getTitle} />
        <div className="flex justify-end">
        <CardCarousel/>
        </div>
        
        
        <DocumentContent
          selectedProveedor={selectedProveedor}
          setSelectedProveedor={setSelectedProveedor}
          documentNumber={documentNumber}
          setDocumentNumber={setDocumentNumber}
          selectedWarehouse={selectedWarehouse}
          setSelectedWarehouse={setSelectedWarehouse}
          selectedCostCenter={selectedCostCenter}
          setSelectedCostCenter={setSelectedCostCenter}
          setSubtotal={setSubtotal}
          subtotal={subtotal}
          saveUrl={saveUrl}
          isEditable={true}
        />
      </div>
    </div>
  );
};

export default CreateOrder;
