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
import {
  cancelRequestOrder,
  getProducts,
  updateRequestOrder,
} from "@/pages/Shopping/utils";
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
import NavigationHeader from "@/components/navigation-header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ReceiptAnalyticsTable from "../Components/Table/ReceiptDataChart";
import PaymentDataTable from "../Components/Table/PaymentData";

const EditRequests = () => {
  const { requestData, info } = useLoaderData();
  const [requestOrder, setRequestOrder] = useState(requestData.data);
  const navigation = useNavigation();

  const { id } = useParams();
  const [documentNumber, setDocumentNumber] = useState(
    requestOrder.document_number,
  );
  const [selectedWarehouse, setSelectedWarehouse] = useState(
    requestOrder.inventory_id,
  );
  const [selectedCostCenter, setSelectedCostCenter] = useState(
    requestOrder.cost_center,
  );
  const [selectedProveedor, setSelectedProveedor] = useState(
    requestOrder.supplier_id,
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
  const [items, setItems] = useState(requestOrder.slots_array);
  const [allProducts, setAllProducts] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [modalCancel, setModalCancel] = useState(false);
  const [paymentType, setPaymentType] = useState(requestOrder.payment_type);

  const getTitle = `Consultando pedido: ${id}`;
  const url = `/shopping/document/pedido/${id}`;

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await getProducts();
    setAllProducts(response.data);
  };


  const tabTriggers = [
    { value: "request", label: "Pedidos" },
    { value: "receipts", label: "Recibos" },
    { value: "payment", label: "Pagos" },
  ];

  const deliveryDataExample = [
    {
      entrega: "Entrega 1",
      folio: "P-1978",
      skuRecibidos: 28,
      productosTotal: "359.00",
      ubicacion: "IVA 16%",
      quienRecibio: 4,
      fechaRecibido: "04-06-2024",
      documentoId:2,
    },
  ];

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
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="text-md font-poppins font-bold text-[#44444F]">
            COMPRAS
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <Tabs
          defaultValue="request"
          className="flex h-full flex-col overflow-hidden"
        >
          <div className="flex justify-between">
            <div>
              <span className="font-poppins text-xl font-bold text-[#44444F]">
                {getTitle}
              </span>
            </div>
            <div className="flex flex-row justify-end">
              <ActionsGroup
                url={url}
                setEditable={setEditable}
                editable={editable}
              />
              <TabsList className="ml-4 flex h-[30px] w-fit items-center rounded-lg bg-blancoBox px-1">
                {tabTriggers.map((item) => (
                  <TabsTrigger
                    key={item.value}
                    value={item.value}
                    className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                  >
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="flex justify-end">
                {/* 
            <CardCarousel />
            */}
              </div>
            </div>
          </div>
          <TabsContent value="request" className="overflow-hidden">
            <Form
              className="flex h-full w-full flex-col space-y-4 overflow-auto rounded-xl bg-white p-4 pr-12"
              action={`/shopping/request-orders/edit/${id}`}
              method="post"
            >
              <input
                type="hidden"
                hidden
                className="hidden"
                readOnly
                name="buy_id"
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
                  <div className="mt-4 flex gap-x-6">
                    <div className="w-fit">
                      <Select
                        name={`payment_type`}
                        value={paymentType}
                        required={true}
                        onValueChange={(e) => setPaymentType(e)}
                        disabled={!editable}
                      >
                        <SelectTrigger className="h-[32px] w-full rounded-[10px] rounded-xl border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                          <SelectValue placeholder={"Payment type"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={String(1)}>Crédito</SelectItem>
                          <SelectItem value={String(2)}>
                            Un solo pago
                          </SelectItem>
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
                          defaultValue={requestOrder.limit_credit_date}
                          disabled={!editable}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mt-6">
                    <QuoteTable
                      initialItems={items}
                      isEditable={editable}
                      allProducts={allProducts}
                      setTableData={setTableData}
                      tableData={tableData}
                    />
                  </div>

                  <Total
                    tableData={tableData}
                    comment={requestOrder.comments}
                  />
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
          </TabsContent>
          <TabsContent
            value="receipts"
            className="h-full overflow-hidden"
          >
            <ReceiptAnalyticsTable deliveryData={deliveryDataExample}  />
          </TabsContent>
          <TabsContent
            value="payment"
            className="h-full overflow-hidden"
          >
         
          </TabsContent>
        </Tabs>
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
    case "update_requestOrder":
      await updateRequestOrder(data);
      break;
  }

  return redirect(`/shopping/request-orders`);
}
