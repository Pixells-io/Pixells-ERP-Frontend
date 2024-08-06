import React, { useState } from 'react';
import Header from './Components/Header';
import DocumentContent from './Components/DocumentContent';

const CreateQuoteOrder = () => {
  const [documentNumber, setDocumentNumber] = useState('');
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [selectedCostCenter, setSelectedCostCenter] = useState('');
  const [subtotal, setSubtotal] = useState(0);

  const getTitle = "Nueva Cotización";
  const saveUrl ="/shopping/quotes-orders"
 

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <Header title={getTitle} />
        <DocumentContent
          documentNumber={documentNumber}
          setDocumentNumber={setDocumentNumber}
          selectedWarehouse={selectedWarehouse}
          setSelectedWarehouse={setSelectedWarehouse}
          selectedCostCenter={selectedCostCenter}
          setSelectedCostCenter={setSelectedCostCenter}
          setSubtotal={setSubtotal}
          subtotal={subtotal}
          type={type}
          saveUrl={saveUrl}
        />
      </div>
    </div>
  );
};

export default CreateQuoteOrder;
