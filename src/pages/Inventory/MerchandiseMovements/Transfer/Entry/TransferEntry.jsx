import React, { useEffect, useState } from "react";
import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useParams,
} from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  closeCircle,
  addCircle,
  trash,
} from "ionicons/icons";

import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import {
  getInfoTransferProducts,
  saveStockTransfer,
  saveStockTransferReceive,
} from "../../utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import ModalCompleteTransfer from "./Modal/ModalCompleteTransfer";
import ModalCompletePartialTransfer from "./Modal/ModalCompletePartialTransfer";

const TransferEntry = () => {
  const { data } = useLoaderData();
  const { id } = useParams();
  const [info, setInfo] = useState(data);
  const [products, setProducts] = useState(info?.products);
  const [modalComplete, setModalComplete] = useState(false);
  const [modalPartial, setModalPartial] = useState(false);
  const [productsCount, setProductsCount] = useState(0);

  function changeInputValue(id, event) {
    const quantity = event.target.value;

    const newFields = products.map((row, i) =>
      row.id === id
        ? {
            ...row,
            entry: quantity,
          }
        : row,
    );

    setProducts(newFields);
  }

  function submitFunction() {
    //Loop the variables
    let receivedProducts = 0;

    products.map((product, i) => {
      if (product.entry != null) {
        receivedProducts += Number(product.entry);
      }
    });

    const productsCount = info.products_count;
    setProductsCount(receivedProducts);

    if (receivedProducts != "0") {
      if (productsCount === receivedProducts) {
        setModalComplete(true);
      } else {
        setModalPartial(true);
      }
    }
  }

  return (
    <div className="flex w-full">
      <ModalCompleteTransfer
        modal={modalComplete}
        setModal={setModalComplete}
        transfer_id={info.id}
        products_count={productsCount}
        products_array={products}
      />
      <ModalCompletePartialTransfer
        modal={modalPartial}
        setModal={setModalPartial}
        transfer_id={info.id}
        product_count={productsCount}
        product_total={info.products_count}
        product_array={products}
      />
      <Form
        action={`/inventory/merchandise-movements/transfer/entry/${id}`}
        method="POST"
        className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4"
      >
        {/* navigation inside */}
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
            Movimientos de stock
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              INVENTARIO
            </h2>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Recibir Traspaso
          </p>

          <div className="flex justify-end gap-5">
            <div className="flex items-end justify-center">
              <Link to={"/inventory/merchandise-movements"}>
                <IonIcon
                  icon={closeCircle}
                  size="small"
                  className="cursor-pointer text-grisDisabled"
                ></IonIcon>
              </Link>
            </div>
          </div>
        </div>
        {/*CONTENT */}
        <div className="overflow-auto rounded-xl bg-blancoBg p-6">
          <div className="w-full rounded-xl border p-8">
            <div className="flex gap-6">
              <InputRouter
                placeholder={"Folio"}
                type={"text"}
                disabled={true}
                value={info.id}
              />
              <InputRouter
                placeholder={"Salida"}
                type={"text"}
                value={info.inventory_out}
                disabled={true}
              />
              <InputRouter
                placeholder={"Entrada"}
                type={"text"}
                value={info.inventory_in}
                disabled={true}
              />
            </div>
            <div className="mt-4 flex w-full gap-8">
              <div>
                <span className="text-[10px] font-normal text-grisText">
                  Envia:
                </span>
                <br />
                <div className="flex gap-2 text-[#696974]">
                  <Avatar className="size-7">
                    <AvatarImage src={info.created?.img} />
                  </Avatar>
                  <div className="ml-2">
                    <span>{info.created?.name}</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-normal text-grisText">
                  Urgencia:
                </span>
                <br />
                {info.urgency == 1 ? (
                  <span className="rounded-2xl bg-blue-100 px-2 py-1 text-xs text-primario">
                    Baja
                  </span>
                ) : info.urgency == 2 ? (
                  <span className="rounded-2xl bg-yellow-200 px-2 py-1 text-xs text-yellow-600">
                    Media
                  </span>
                ) : info.urgency == 3 ? (
                  <span className="bg-orange-200-200 rounded-2xl px-2 py-1 text-xs text-orange-600">
                    Alta
                  </span>
                ) : info.urgency == 4 ? (
                  <span className="rounded-2xl bg-red-200 px-2 py-1 text-xs text-red-600">
                    Urgente
                  </span>
                ) : (
                  false
                )}
              </div>
              <div>
                <span className="text-[10px] font-normal text-grisText">
                  Fecha:
                </span>
                <br />
                <span className="text-sm text-[#44444f]">{info.date}</span>
              </div>
            </div>
          </div>

          <div className="w-full pt-4">
            {/* Header */}
            <div className="flex w-full border-b border-b-primario">
              <div className="w-2/12 py-4 text-xs font-medium text-[#44444F]">
                <span>Codigo</span>
              </div>
              <div className="ml-6 mr-[-35px] w-8/12 py-4 text-xs font-medium text-[#44444F]">
                <span>Articulo</span>
              </div>
              <div className="mr-4 w-1/12 py-4 text-xs font-medium text-[#44444F]">
                <span>Esperado</span>
              </div>
              <div className="w-1/12 border-b py-4 text-xs font-medium text-[#44444F]">
                <span>Recibido</span>
              </div>
            </div>
            {/* Body */}
            {info.products?.map((inputsData, index) => (
              <div
                className="flex items-center justify-center gap-8"
                key={index}
              >
                <div className="flex w-full gap-6 border-b border-b-[#44444F40]">
                  <div className="mt-1 w-2/12 py-4">
                    <InputRouter
                      type={"text"}
                      disabled={true}
                      value={inputsData.code}
                      titlePlaceholder={inputsData.code}
                    />
                  </div>
                  <div className="w-8/12 py-4">
                    <InputRouter
                      type={"text"}
                      disabled={true}
                      value={inputsData.name}
                      titlePlaceholder={inputsData.name}
                    />
                  </div>
                  <div className="mt-1 w-1/12 py-4">
                    <InputRouter
                      type={"number"}
                      disabled={true}
                      value={inputsData.expected}
                    />
                  </div>
                  <div className="mt-1 w-1/12 py-4">
                    <InputRouter
                      type={"number"}
                      name={inputsData.id}
                      maxValue={inputsData.expected}
                      minValue={0}
                      onChange={(e) => changeInputValue(inputsData.id, e)}
                    />
                  </div>
                </div>
              </div>
            ))}
            {info.products?.length > 0 ? (
              <IonIcon
                icon={addCircle}
                size="small"
                className="mt-6 cursor-pointer text-primario"
                onClick={() => addProduct()}
              />
            ) : (
              false
            )}
          </div>

          <StatusInformation
            status="inProgress"
            imgUser={
              "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
          >
            <Button
              type="button"
              variant="outline"
              className="w-[120px] rounded-lg border-2 border-[#E0E0E0] text-xs text-[#8F8F8F] hover:text-primarioBotones"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              onClick={() => submitFunction()}
              className={`rounded-lg bg-[#E0E0E0] px-10 text-xs text-[#44444F] hover:bg-[#E0E0E0]`}
            >
              Aceptar
            </Button>
          </StatusInformation>
        </div>
      </Form>
    </div>
  );
};

export default TransferEntry;

export async function Action({ request }) {
  const data = await request.formData();

  const response = await saveStockTransferReceive(data);

  return redirect("/inventory/merchandise-movements");
}
