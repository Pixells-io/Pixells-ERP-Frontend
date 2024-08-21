import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  copy,
  print,
  closeCircle,
} from "ionicons/icons";

import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { MerchandiseRecordColumns } from "./Table/MerchandiseRecordColumns";
import NoDocument from "../../Components/NoDocument";
import OnlyTable from "../../Components/OnlyTable";

const data = [
  {
    id: 1,
    articleNumber: "239846",
    description: "Aceite Vegetal",
    receivedQuantity: "8",
    unitPrice: "55.00",
    total: "550.00",
    ubication: "Almacén MP",
  },
  {
    id: 2,
    articleNumber: "239847",
    description: "Aceite Vegetal",
    receivedQuantity: "5",
    unitPrice: "55.00",
    total: "550.00",
    ubication: "Almacén PM",
  },
  {
    id: 3,
    articleNumber: "239848",
    description: "Aceite Vegetal",
    receivedQuantity: "8",
    unitPrice: "55.00",
    total: "550.00",
    ubication: "Almacén MP",
  },
];

function MerchandiseMovRecord() {
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-auto rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">tickets </div>
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
            Entrada de Mercancia
          </p>

          <div className="flex items-center justify-end gap-12">
            <div>
              <Button
                type="button"
                className="rounded-3xl bg-[#F0F0F0] h-[28px] px-2 text-xs font-medium text-grisText hover:bg-[#F0F0F0]"
              >
                Convertir a Pedido
              </Button>
            </div>
            <div className="flex gap-x-5">
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
            </div>
            <div className="flex w-[250px] items-center gap-2">
              <NoDocument />
            </div>
          </div>
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

        <div className="flex w-full items-center justify-between rounded-xl bg-blancoBg px-12 py-4">
          <div className="flex w-full gap-x-8">
            <div>
              <Input
                className="w-[243px] rounded-xl border border-gris2-transparent bg-inherit text-[14px] font-roboto text-grisSubText placeholder:text-grisSubText focus:ring-2 focus-visible:ring-primarioBotones focus:border-transparent"
                name={`documentNumber`}
                // value={row.amount}
                placeholder="Numero de Documento"
                type="number"
              />
            </div>
            <div>
              <Select name="priceList" className="h-10">
                <SelectTrigger className="w-[243px] rounded-xl border border-gris2-transparent bg-inherit text-[14px] font-roboto text-grisSubText placeholder:text-grisSubText focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
                  <SelectValue placeholder="Lista de Precios" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-blancoBg p-4">
          <OnlyTable data={data} columns={MerchandiseRecordColumns} />
        </div>

        <div className="rounded-xl bg-blancoBg px-4 py-6">
          <textarea
            placeholder="Observaciones (esto será visible en la OC)"
            className="h-[120px] w-[270px] resize-none rounded-lg border border-[#E5E5E5] bg-[#FBFBFB] px-3 py-2 text-xs"
            name="template"
          ></textarea>
        </div>

        <StatusInformation
          status="done"
          approvedBy={"Oziel duran"}
          date={"20 agosto 2024"}
          comments={"Todo Bien"}
          imgUser={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        ></StatusInformation>
      </div>
    </div>
  );
}

export default MerchandiseMovRecord;
