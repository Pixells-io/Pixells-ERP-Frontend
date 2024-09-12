import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import DocumentContent from './Components/DocumentContent';
import CardCarousel from './Components/CardCarousel';
import { getProducts, saveNewQuoteOrder } from '../../utils';
import { redirect } from 'react-router-dom';
const CreateQuoteOrder = () => {
  const [documentNumber, setDocumentNumber] = useState('');
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [selectedCostCenter, setSelectedCostCenter] = useState('');
  const [selectedProveedor, setSelectedProveedor] = useState('');
  const [allProducts, setAllProducts] = useState([]);

  const getTitle = "Nueva Cotización";
  const saveUrl ="/shopping/quotes-orders/create"

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async() => {
    const response = await getProducts();
    setAllProducts(response.data);
  };
 

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
          saveUrl={saveUrl}
          isEditable={true}
          allProducts={allProducts}
        />
      </div>
    </div>
  );
};

export default CreateQuoteOrder;

export async function Action({ request }) {
  const formData = await request.formData();
  const response = await saveNewQuoteOrder(formData);
 
  return redirect("/shopping/quotes-orders");
}

