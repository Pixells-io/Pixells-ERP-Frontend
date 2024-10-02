import React, { useEffect, useState } from "react";
import {
  Form,
  redirect,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom";
import ActionsGroup from "../Components/ActionsGroup";
import CardCarousel from "../Components/CardCarousel";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import ModalConfirmQuote from "../../Modals/ModalConfirmQuote";
import {
  acceptQuoteOrder,
  cancelQuoteOrder,
  getProducts,
  updateQuoteOrder,
} from "@/pages/Shopping/utils";
import InputsGroup from "../Components/ElementGroup";
import OrderTable from "../Components/OrderFom";
import QuoteTable from "@/components/table/Quote/QuoteTable";
import Total from "@/components/TotalSection/TotalSection";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";
import ModalCancelQuote from "../../Modals/ModalCancelQuote";

const EditQuotes = () => {
  const { quoteData, info } = useLoaderData();
  const [quote, setQuote] = useState(quoteData.data);
  const navigation = useNavigation();

  const { id } = useParams();
  const [documentNumber, setDocumentNumber] = useState(quote.document_number);
  const [selectedWarehouse, setSelectedWarehouse] = useState(
    quote.inventory_id,
  );
  const [selectedCostCenter, setSelectedCostCenter] = useState(
    quote.cost_center,
  );
  const [selectedProveedor, setSelectedProveedor] = useState(quote.supplier_id);
  const [selectedFechaDoc, setSelectedFechaDoc] = useState(
    quote.document_created,
  );
  const [selectedFechaEntrega, setSelectedFechaEntrega] = useState(
    quote.delivery_date,
  );
  const [selectedCondicionPago, setSelectedCondicionPago] = useState(
    quote.payment_condition,
  );
  const [editable, setEditable] = useState(false);
  const [items, setItems] = useState(quote.slots_array);
  const [allProducts, setAllProducts] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [modalCancel, setModalCancel] = useState(false);

  const url = `/shopping/document/cotizacion/${id}`;

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await getProducts();
    setAllProducts(response);
  };

  return (
    <div className="flex w-full">
      {/* Modals */}
      <ModalCancelQuote
        id={quote.id}
        name={quote.document_number}
        modal={modalCancel}
        setModal={setModalCancel}
      />
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
        <div className="flex justify-between">
          <span className="font-poppins text-xl font-bold text-[#44444F]">
            Consultando cotización: {quote.document_number}
          </span>
          <div className="flex flex-row justify-end">
            <div className="flex items-end justify-center pr-5">
              {quote.status != 2 ? (
                <ModalConfirmQuote id={quote.id} name={quote.document_number} />
              ) : null}
            </div>
            <ActionsGroup
              url={url}
              setEditable={setEditable}
              editable={editable}
            />
            {/*  
            <div className="flex justify-end">
              <CardCarousel />
            </div>
            */}
          </div>
        </div>
        <Form
          className="flex flex-col space-y-4 overflow-auto rounded-xl bg-white p-4 pr-12"
          action={`/shopping/quotes-orders/edit/${id}`}
          method="post"
        >
          <input
            type="hidden"
            hidden
            className="hidden"
            readOnly
            name="quote_id"
            value={quote.id}
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            readOnly
            name="type_option"
            value={"update_quote"}
          />

          <div className="overflow-auto">
            <div className="rounded-xl border border-blancoBox p-4">
              <InputsGroup
                documentNumber={documentNumber}
                setDocumentNumber={setDocumentNumber}
                selectedWarehouse={selectedWarehouse}
                setSelectedWarehouse={setSelectedWarehouse}
                selectedCostCenter={selectedCostCenter}
                setSelectedCostCenter={setSelectedCostCenter}
                isEditable={editable}
                infoSelects={info?.data}
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
                isEditable={editable}
                suppliers={info?.data?.suppliers}
              />
            </div>

            <div>
              <div className="mt-6">
                <QuoteTable
                  initialItems={items}
                  isEditable={editable}
                  allProducts={allProducts?.data}
                  setTableData={setTableData}
                  tableData={tableData}
                />
              </div>
              <Total tableData={tableData} comment={quote.comments} />
            </div>
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
                className="w-[120px] rounded-lg border-2 border-[#D7586B] text-xs text-[#D7586B] hover:text-[#D7586B]"
                onClick={() => setModalCancel(true)}
              >
                Eliminar
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-[120px] rounded-lg border-2 border-[#E0E0E0] text-xs text-[#8F8F8F] hover:bg-inherit hover:text-[#8F8F8F]"
                onClick={() => setEditable(false)}
                disabled={!editable}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className={`rounded-lg px-10 text-xs ${editable ? "bg-primarioBotones text-white hover:bg-primarioBotones" : "bg-[#E0E0E0] text-[#44444F] hover:bg-[#E0E0E0]"}`}
                disabled={!editable || navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Aceptar"}
              </Button>
            </StatusInformation>
          </div>
        </Form>
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
    case "update_quote":
      await updateQuoteOrder(data);
      break;
    case "cancel_quote":
      await cancelQuoteOrder(data);
      break;
  }

  return redirect(`/shopping/quotes-orders`);
}
