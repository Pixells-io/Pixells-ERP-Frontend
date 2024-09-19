import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Form, redirect, useLoaderData, useNavigation, useParams } from "react-router-dom";
import ActionsGroup from "../Components/ActionsGroup";
import CardCarousel from "../Components/CardCarousel";
import InputsGroup from "../Components/ElementGroup";
import OrderTable from "../Components/OrderFom";
import QuoteTable from "@/components/table/Quote/QuoteTable";
import Total from "@/components/TotalSection/TotalSection";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import ModalConfirmPurchase from "../../Modals/ModalConfirmPurchase";
import { acceptPurchase, cancelPurchase, getProducts, updatePurchase } from "@/pages/Shopping/utils";
import ModalCancelPurchase from "../../Modals/ModalCancelPurchase";

const EditOrders = () => {
  const { data } = useLoaderData();
  const [purchase, setPurchase] = useState(data);
  const navigation = useNavigation();

  const { id } = useParams();
  const [documentNumber, setDocumentNumber] = useState(purchase.document_number);
  const [selectedWarehouse, setSelectedWarehouse] = useState(purchase.inventory_id.value);
  const [selectedCostCenter, setSelectedCostCenter] = useState("");
  const [selectedProveedor, setSelectedProveedor] = useState(purchase.supplier_id.value);
  const [selectedFechaDoc, setSelectedFechaDoc] = useState(purchase.document_created);
  const [selectedFechaEntrega, setSelectedFechaEntrega] = useState(purchase.delivery_date);
  const [selectedCondicionPago, setSelectedCondicionPago] =
    useState(purchase.payment_condition);
  const [editable, setEditable] = useState(false);
  const [items, setItems] = useState(data.slots_array);
  const [allProducts, setAllProducts] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [modalCancel, setModalCancel] = useState(false);

  const url = `/shopping/document/orden/${id}`;

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await getProducts();
    setAllProducts(response.data);
  };

  return (
    <div className="flex w-full">
      {/* modals */}
      <ModalCancelPurchase
        id={purchase.id}
        name={purchase.document_number}
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
            consultando orden de compra: { data.document_number}
          </span>
          <div className="flex flex-row justify-end">
            <div className="flex items-end justify-center pr-5">
              <ModalConfirmPurchase 
                id={data.id}
                name={data.document_number}
              />
            </div>
            <ActionsGroup url={url} setEditable={setEditable} editable={editable} />
            <div className="flex justify-end">
              <CardCarousel />
            </div>
          </div>
        </div>
        <Form
          method="post"
          action={`/shopping/purchase/edit/${id}`}
          className="flex flex-col space-y-4 overflow-auto rounded-xl bg-white p-4 pr-12"
        >
          <input
              type="hidden"
              hidden
              className="hidden"
              readOnly
              name="order_id"
              value={purchase.id}
            />
          <input
              type="hidden"
              hidden
              className="hidden"
              readOnly
              name="type_option"
              value={"update_purchase"}
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
                className="w-[120px] rounded-lg border-2 border-[#E0E0E0] text-xs text-[#8F8F8F] text-[#8F8F8F] hover:text-[#8F8F8F] hover:bg-inherit"
                onClick={() => setEditable(false)}
                disabled={!editable}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className={`rounded-lg  px-10 text-xs  ${ editable ? "text-white bg-primarioBotones hover:bg-primarioBotones" : "text-[#44444F] bg-[#E0E0E0] hover:bg-[#E0E0E0]"}`}
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

export default EditOrders;

export async function Action({ request }) {
  const data = await request.formData();
  switch (data.get("type_option")) {
    case "accept_purchase":
      await acceptPurchase(data);
      break;
    case "update_purchase":
      await updatePurchase(data);
      break;
    case "cancel_purchase":
      await cancelPurchase(data);
      break;
  }

  return redirect(`/shopping/purchase`);
}

