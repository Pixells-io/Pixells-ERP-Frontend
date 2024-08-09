import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  copy,
  print,
  create,
  closeCircle,
  qrCodeOutline,
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

function NewEntry() {
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
            Nueva Entrada de Mercancía
          </p>

          <div className="flex items-center justify-end gap-5">
            <Button
              type="button"
              className="rounded-3xl bg-[#F0F0F0] text-xs font-medium text-grisText hover:bg-[#F0F0F0]"
            >
              Convertir a Pedido
            </Button>
          </div>
          <div></div>
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
                className="w-[243px] rounded-xl border border-[#696974] bg-inherit text-xs font-light text-grisSubText placeholder:text-grisSubText"
                name={`documentNumber`}
                // value={row.amount}
                placeholder="Numero de Documento"
                type="number"
              />
            </div>
            <div>
              <Select name="priceList" className="h-10">
                <SelectTrigger className="w-[243px] rounded-xl border border-[#696974] bg-inherit text-xs font-light text-grisSubText placeholder:text-grisSubText">
                  <SelectValue placeholder="Lista de Precios" />
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
                className="w-[94px] rounded-xl border border-[#696974] bg-inherit text-xs font-light text-grisSubText placeholder:text-grisSubText"
                name={`order`}
                // value={row.amount}
                placeholder="Pedido"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full justify-center px-8">
            <button type="button" onClick={() => alert("qr")}>
              <IonIcon
                icon={qrCodeOutline}
                size="large"
                className="text-[#5B89FF]"
              ></IonIcon>
            </button>
          </div>
        </div>

        <div className="rounded-xl bg-blancoBg px-4 py-6">
          <textarea
            placeholder="Observaciones (esto será visible en la OC)"
            className="h-[120px] w-[270px] resize-none rounded-lg border border-[#E5E5E5] bg-[#FBFBFB] px-3 py-2 text-xs"
            name="template"
          ></textarea>
        </div>

        <StatusInformation
          status="inProgress"
          applyFunction={() => console.log()}
          imgUser={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        />
      </div>
    </div>
  );
}

export default NewEntry;
