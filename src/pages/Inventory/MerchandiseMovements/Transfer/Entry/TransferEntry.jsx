import React, { useState } from "react";
import { Form, Link, redirect, useLoaderData } from "react-router-dom";

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
import { getInfoTransferProducts, saveStockTransfer } from "../../utils";

const TransferEntry = () => {
  const { data } = useLoaderData();
  const [info, setInfo] = useState(data);

  return (
    <div className="flex w-full">
      <Form
        action={`/inventory/merchandise-movements/transfer/entry/35`}
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
        <div className="rounded-xl bg-blancoBg p-6">
          <div className="flex w-full gap-6 rounded-xl border p-8">
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
            <div>
              <span className="text-[10px] font-normal text-grisText">
                Fecha:
              </span>
              <br />
              <span className="text-sm text-[#44444f]">{info.date}</span>
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
                      name={"receipt"}
                      maxValue={inputsData.expected}
                      minValue={0}
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
              type="submit"
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

  const response = await saveStockTransfer(data);

  return redirect("/inventory/merchandise-movements");
}
