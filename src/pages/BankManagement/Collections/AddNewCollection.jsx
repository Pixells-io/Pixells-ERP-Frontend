import React, { useState } from "react";
import { useLoaderData, useRouteLoaderData, Outlet } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  copy,
  print,
  create,
  closeCircle,
} from "ionicons/icons";
import OnlyDataTable from "./Table/OnlyDataTable";
import { AddCollectionsColumns } from "./Table/AddCollectionColumns";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function AddNewCollection() {
  //datos de prueba --------------------------

  const dateNow = new Date().toLocaleDateString("es-ES");

  const data = [
    {
      id: "1",
      concept: "Select de cuenta cont.",
      typeDoc: "FA",
      creditDays: "-15",
      overdueBalance: "300,000",
      discount: "0.00",
      observations: "Atrasado con el pago",
      total: "2000.00",
    },
    {
      id: "2",
      concept: "Select de cuenta cont.",
      typeDoc: "FA",
      creditDays: "-15",
      overdueBalance: "300,000",
      discount: "0.00",
      observations: "Atrasado con el pago",
      total: "2000.00",
    },
    {
      id: "3",
      concept: "Select de cuenta cont.",
      typeDoc: "FA",
      creditDays: "-15",
      overdueBalance: "300,000",
      discount: "0.00",
      observations: "Atrasado con el pago",
      total: "2000.00",
    },
  ];

  //-------------------------------------------

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">Tickets</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              GESTIÓN DE BANCOS
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
            Nuevo Registro de Cobro
          </p>

          <div className="flex items-center justify-end gap-10">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={copy}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                ></IonIcon>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={print}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                ></IonIcon>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8E8E8]">
                <IonIcon
                  icon={create}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                ></IonIcon>
              </div>
            </div>

            <div className="flex w-2/5 gap-4 overflow-auto">
              <div className="min-w-[100px] rounded bg-blancoBox">
                <div className="h-[3px] w-full rounded-t bg-primario"></div>
                <div className="flex w-full flex-col justify-center py-1">
                  <span className="text-center text-[10px] font-normal text-[#8f8f8f]">
                    Last OC
                  </span>
                  <div className="flex justify-center gap-1">
                    <span className="text-[10px] font-semibold text-[#696974]">
                      No. Doc.
                    </span>
                    <span className="text-[10px] font-semibold text-[#696974]">
                      04567
                    </span>
                  </div>
                </div>
              </div>

              <div className="min-w-[100px] rounded bg-blancoBox">
                <div className="h-[3px] w-full rounded-t bg-primario"></div>
                <div className="flex w-full flex-col justify-center py-1">
                  <span className="text-center text-[10px] font-normal text-[#8f8f8f]">
                    Last OC
                  </span>
                  <div className="flex justify-center gap-1">
                    <span className="text-[10px] font-semibold text-[#696974]">
                      No. Doc.
                    </span>
                    <span className="text-[10px] font-semibold text-[#696974]">
                      04567
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-center">
            <IonIcon
              icon={closeCircle}
              size="small"
              className="cursor-pointer text-grisDisabled"
            ></IonIcon>
          </div>
        </div>

        <div className="flex justify-between rounded-xl bg-blancoBg px-8 py-3">
          <div className="flex gap-2">
            <InputRouter name="date" type="text" placeholder={dateNow} />
            <SelectRouter name="client" options={[]} placeholder="Cliente" />

            <InputRouter
              name="register_accountName"
              type="text"
              placeholder="Entradas de diario"
            />
          </div>
          <div className="flex w-1/3 items-center justify-center gap-2">
            <label
              htmlFor="complementPayment"
              className="text-xs text-[#8f8f8f]"
            >
              Complemento de pago
            </label>
            <input
              className="accent-primarioBotones"
              type="checkbox"
              value="complementPayment"
              id="complementPayment"
              // onClick={() => onSelectFilter("crm")}
              // checked={filters.includes("crm")}
              readOnly
            ></input>
          </div>
        </div>

        <OnlyDataTable data={data} columns={AddCollectionsColumns} names={[]} />
      </div>
    </div>
  );
}

export default AddNewCollection;
