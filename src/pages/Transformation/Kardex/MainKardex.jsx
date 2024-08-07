import React, { useState } from "react";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import AverageCostTable from "./Table/AverageCostTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { AverageCostColumns } from "./Table/AverageCostColumns";

const data = [
  {
    id: 1,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500asdasd.00",
  },
  {
    id: 2,
    date: "01 ago 2024",
    movement: "Salida",
    identifierES: "OP1205",
    amountI: "",
    unitValueI: "",
    totalValueI: "",
    amountO: "500",
    unitValueO: "55.00",
    totalValueO: "27,500.00",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
  {
    id: 3,
    date: "01 ago 2024",
    movement: "Entrada",
    identifierES: "P3456",
    amountI: "500",
    unitValueI: "55.00",
    totalValueI: "27,500.00",
    amountO: "",
    unitValueO: "",
    totalValueO: "",
    amountT: "500",
    unitValueT: "55.00",
    totalValueT: "27,500.00",
  },
];

function MainKardex() {
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
              TRANSFORMACIÓN
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

        <p className="font-poppins text-xl font-bold text-grisHeading">
          Kardex
        </p>

          <div className="flex w-full items-center gap-x-12 rounded-xl bg-blancoBg px-6 py-6">
            <div>
              <Select name="article" className="h-10">
                <SelectTrigger className="w-[180px] rounded-xl border border-[#696974] bg-inherit text-xs font-light text-grisSubText">
                  <SelectValue placeholder="Selecciona el Artículo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Input
                className="w-[100px] rounded-xl border border-[#696974] bg-inherit text-xs font-light"
                name={`code`}
                // value={row.amount}
                placeholder="Código"
                type="text"
              />
            </div>
            <div>
              <Select name="store" className="h-10">
                <SelectTrigger className="w-[180px] rounded-xl border border-[#696974] bg-inherit text-xs font-light text-grisSubText">
                  <SelectValue placeholder="Almacén" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h2 className="text-poppins text-sm font-bold text-[#44444F]">
                Método: Costo Medio
              </h2>
            </div>
          </div>

        <div className="h-full rounded-xl px-4 py-2">
          <AverageCostTable data={data} columns={AverageCostColumns} />
        </div>
      </div>
    </div>
  );
}

export default MainKardex;
