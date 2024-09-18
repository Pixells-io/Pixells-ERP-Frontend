import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import {
  Form,
  redirect,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom";
import ActionsGroup from "../Components/ActionsGroup";
import CardCarousel from "../Components/CardCarousel";
import { cancelRequestOrder, getProducts } from "@/pages/Shopping/utils";
import QuoteTable from "@/components/table/Quote/QuoteTable";
import InputsGroup from "../Components/ElementGroup";
import OrderTable from "../Components/OrderFom";
import Total from "@/components/TotalSection/TotalSection";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/InputForm/InputForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ModalCancelRequestOrder from "../../Modals/ModalCancelRequestOrder";

const EditRequests = () => {
  const { data } = useLoaderData();
  const [requestOrder, setRequestOrder] = useState(data);
  const navigation = useNavigation();

  const { id } = useParams();
  const [documentNumber, setDocumentNumber] = useState(
    requestOrder.document_number,
  );
  const [selectedWarehouse, setSelectedWarehouse] = useState(
    requestOrder.inventory_id.value,
  );
  const [selectedCostCenter, setSelectedCostCenter] = useState("");
  const [selectedProveedor, setSelectedProveedor] = useState(
    requestOrder.supplier_id.value,
  );
  const [selectedFechaDoc, setSelectedFechaDoc] = useState(
    requestOrder.document_created,
  );
  const [selectedFechaEntrega, setSelectedFechaEntrega] = useState(
    requestOrder.delivery_date,
  );
  const [selectedCondicionPago, setSelectedCondicionPago] = useState(
    requestOrder.payment_condition,
  );
  const [editable, setEditable] = useState(false);
  const [items, setItems] = useState(data.slots_array);
  const [allProducts, setAllProducts] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [modalCancel, setModalCancel] = useState(false);
  const [paymentType, setPaymentType] = useState(undefined);

  const getTitle = `Consultando pedido: ${id}`;
  const url = `/shopping/document/pedido/${id}`;

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await getProducts();
    setAllProducts(response.data);
  };

  return (
    <div className="flex w-full">
      {/* Modals */}
      <ModalCancelRequestOrder
        id={requestOrder.id}
        name={requestOrder.document_number}
        modal={modalCancel}
        setModal={setModalCancel}
      />
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <Header title={getTitle} />
        <div className="flex flex-row justify-end">
          <ActionsGroup url={url} setEditable={setEditable} />
          <div className="flex justify-end">
            <CardCarousel />
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
            name="order_id"
            value={requestOrder.id}
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            readOnly
            name="type_option"
            value={"update_requestOrder"}
          />
          <div className="rounded-xl border border-blancoBox p-4">
            <InputsGroup
              documentNumber={documentNumber}
              setDocumentNumber={setDocumentNumber}
              selectedWarehouse={selectedWarehouse}
              setSelectedWarehouse={setSelectedWarehouse}
              selectedCostCenter={selectedCostCenter}
              setSelectedCostCenter={setSelectedCostCenter}
              isEditable={editable}
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
            />
            <div className="mt-4 flex gap-x-6">
              <div className="w-fit">
                <Select
                  name={`payment_type`}
                  value={paymentType}
                  required={true}
                  onValueChange={(e) => setPaymentType(e)}
                >
                  <SelectTrigger className="w-full rounded-xl border-none bg-grisBg font-roboto text-xs font-light text-grisHeading placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                    <SelectValue placeholder={"Payment type"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={String(1)}>Crédito</SelectItem>
                    <SelectItem value={String(2)}>Un solo pago</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-fit">
                {paymentType == "1" && (
                  <InputForm
                    placeholder="Número de Documento"
                    type="date"
                    name="limit_credit_date"
                    required={true}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="overflow-auto">
            <div className="mt-6 overflow-auto">
              <QuoteTable
                initialItems={items}
                isEditable={editable}
                allProducts={allProducts}
                setTableData={setTableData}
                tableData={tableData}
              />
            </div>
            <Total tableData={tableData} comment={data.comments} />
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

export default EditRequests;

export async function Action({ request }) {
  const data = await request.formData();
  switch (data.get("type_option")) {
    case "cancel_requestOrder":
      await cancelRequestOrder(data);
      break;
  }

  return redirect(`/shopping/request-orders`);
}
