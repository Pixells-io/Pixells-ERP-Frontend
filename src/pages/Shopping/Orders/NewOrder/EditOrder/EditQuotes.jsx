import React, { useState } from "react";
import { redirect, useLoaderData, useParams } from "react-router-dom";
import DocumentContent from "../Components/DocumentContent";
import ActionsGroup from "../Components/ActionsGroup";
import CardCarousel from "../Components/CardCarousel";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import ModalConfirmQuote from "../../Modals/ModalConfirmQuote";
import { acceptQuoteOrder } from "@/pages/Shopping/utils";

const EditQuotes = () => {
  const { data } = useLoaderData();

  const { id } = useParams();
  const [documentNumber, setDocumentNumber] = useState(id);
  const [selectedWarehouse, setSelectedWarehouse] = useState("almacen2");
  const [selectedCostCenter, setSelectedCostCenter] = useState("cc2");
  const [subtotal, setSubtotal] = useState(0);
  const [selectedProveedor, setSelectedProveedor] = useState("proveedor3");
  const [selectedFechaDoc, setSelectedFechaDoc] = useState("fecha1");
  const [selectedFechaEntrega, setSelectedFechaEntrega] = useState("entrega1");
  const [selectedCondicionPago, setSelectedCondicionPago] =
    useState("condicion1");
  const [editable, setEditable] = useState(false);
  const [items, setItems] = useState(data.slots_array);
  const [allProducts, setAllProducts] = useState([]);

  const saveUrl = "/shopping/quotes-orders";
  const url = `/shopping/document/cotizacion/${id}`;

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            <div>Shopping - General</div>
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            COMPRAS
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>
        <div className="flex justify-between ">
          <span className="font-poppins text-xl font-bold text-[#44444F]">
            Consultando cotización: {data.document_number}
          </span>
          <div className="flex flex-row justify-end">
            <div className="flex items-end justify-center pr-5">
              <ModalConfirmQuote
                id={data.id}
                name={data.document_number} 
              />
            </div>
            <ActionsGroup url={url} setEditable={setEditable} />
            <div className="flex justify-end">
              <CardCarousel />
            </div>
          </div>
        </div>
        <DocumentContent
          documentNumber={documentNumber}
          setDocumentNumber={setDocumentNumber}
          selectedWarehouse={selectedWarehouse}
          setSelectedWarehouse={setSelectedWarehouse}
          selectedCostCenter={selectedCostCenter}
          setSelectedCostCenter={setSelectedCostCenter}
          subtotal={subtotal}
          setSubtotal={setSubtotal}
          selectedProveedor={selectedProveedor}
          setSelectedProveedor={setSelectedProveedor}
          selectedFechaDoc={selectedFechaDoc}
          setSelectedFechaDoc={setSelectedFechaDoc}
          selectedFechaEntrega={selectedFechaEntrega}
          setSelectedFechaEntrega={setSelectedFechaEntrega}
          selectedCondicionPago={selectedCondicionPago}
          setSelectedCondicionPago={setSelectedCondicionPago}
          saveUrl={saveUrl}
          isEditable={editable}
          items={items}
          setItems={setItems}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
      </div>
    </div>
  );
};

export default EditQuotes;

export async function Action({ request }) {
  const data = await request.formData();
  switch (data.get("type_option")) {
    case "accept_quote":
      await acceptQuoteOrder(data);
      break;
  }

  return redirect(`/shopping/quotes-orders`);
}
