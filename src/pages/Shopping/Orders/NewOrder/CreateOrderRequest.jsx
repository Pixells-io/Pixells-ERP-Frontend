import React, { useState } from 'react';
import Header from './Components/Header';
import DocumentContent from './Components/DocumentContent';
import CardCarousel from './Components/CardCarousel';
const CreateRequest = () => {
  const [documentNumber, setDocumentNumber] = useState('');
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [selectedCostCenter, setSelectedCostCenter] = useState('');
  const [subtotal, setSubtotal] = useState(0);
 
  const getTitle = "Nueva orden de compra";
  const saveUrl ="/shopping/request-orders"

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <Header title={getTitle} />
        <div className="flex justify-end">
        <CardCarousel/>
        </div>
        <DocumentContent
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

export default CreateRequest;
