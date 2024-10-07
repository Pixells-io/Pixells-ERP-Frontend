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

const TransferDetail = () => {
  const { data } = useLoaderData();
  const [info, setInfo] = useState([]);

  return (
    <div className="flex w-full">
      <Form
        action="/inventory/merchandise-movements/transfer/direct/new"
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
          <div className="font-roboto text-sm text-grisText">tickets</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              INVENTARIO
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Nuevo Traspaso
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
            <input
              type="hidden"
              name="slots"
              value={JSON.stringify(arrayInputs)}
            />
            <InputRouter
              name={"code"}
              placeholder={"Folio"}
              type={"text"}
              required={true}
            />
            <InputRouter
              name={"date"}
              placeholder={"Fecha"}
              type={"date"}
              required={true}
            />
            <SelectRouter
              name={"inventory_out"}
              placeholder={"Almacen Saliente"}
              options={data.inventory}
              required={true}
              onChange={(e) => changeProducts(e.value)}
            />
            <SelectRouter
              name={"inventory_in"}
              placeholder={"Almacen Entrante"}
              options={data.inventory}
              required={true}
            />
          </div>

          <div className="w-full pt-4">
            {/* Header */}
            <div className="flex w-full border-b border-b-primario">
              <div className="w-2/12 py-4 text-xs font-medium text-[#44444F]">
                <span>Codigo</span>
              </div>
              <div className="w-7/12 py-4 text-xs font-medium text-[#44444F]">
                <span>Articulo</span>
              </div>
              <div className="w-1/12 py-4 text-xs font-medium text-[#44444F]">
                <span>Inventario</span>
              </div>
              <div className="w-1/12 border-b py-4 text-xs font-medium text-[#44444F]">
                <span>A Transferir</span>
              </div>
              <div className="w-1/12 border-b py-4 text-xs font-medium text-[#44444F]">
                <span>Act.</span>
              </div>
            </div>
            {/* Body */}
            {arrayInputs?.map((inputsData, index) => (
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
                  <div className="w-7/12 py-4">
                    <SelectRouter
                      options={slots}
                      className="w-full text-sm font-light"
                      value={inputsData.selected_item}
                      onChange={(e) => selectProducts(e.value, index)}
                    />
                  </div>
                  <div className="mt-1 w-1/12 py-4">
                    <InputRouter
                      type={"number"}
                      disabled={true}
                      value={inputsData.quantity}
                    />
                  </div>
                  <div className="mt-1 w-1/12 py-4">
                    <InputRouter
                      type={"number"}
                      value={inputsData.inventory}
                      maxValue={inputsData.quantity}
                      minValue={0}
                      onChange={(e) => changeQuantity(e, index)}
                    />
                  </div>
                  <div className="mt-1 w-1/12 py-4">
                    <IonIcon
                      icon={trash}
                      className="cursor-pointer text-xl text-[#44444F]"
                      onClick={() => removeInput(index)}
                    />
                  </div>
                </div>
              </div>
            ))}
            {arrayInputs.length > 0 ? (
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
              Crear
            </Button>
          </StatusInformation>
        </div>
      </Form>
    </div>
  );
};

export default TransferDetail;

export async function Action({ request }) {
  const data = await request.formData();

  const response = await saveStockTransfer(data);

  return redirect("/inventory/merchandise-movements");
}
