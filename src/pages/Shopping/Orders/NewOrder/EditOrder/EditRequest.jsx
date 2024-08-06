import React, { useState } from 'react';
import Header from '../Components/Header';
import DocumentContent from './Components/DocumentContent';
import Actions from './Components/Actions';
import { useParams } from 'react-router-dom';

const EditRequest = () => {
  const id = useParams();
  const [documentNumber, setDocumentNumber] = useState(id);
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [selectedCostCenter, setSelectedCostCenter] = useState('');
  const [subtotal, setSubtotal] = useState(0);

  const saveUrl ="/shopping/request-orders"
  const getTitle = `Editando pedido: ${id}`;
  const url = `/shopping/document/pedido/${id}`;

 

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <Header title={getTitle} />
        <Actions url={url}/>
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
        />
      </div>
    </div>
  );
};

export default EditRequest;