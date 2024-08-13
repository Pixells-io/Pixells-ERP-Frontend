import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { gridOutline, list } from "ionicons/icons";

const SideLayoutPos = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2 px-4 pb-4 font-roboto">
      <div className="grid min-h-[76px] w-full grid-cols-12 gap-x-2 px-4">
        <div className="col-span-1 flex w-full flex-col items-center justify-center">
          <h2 className="font-poppins text-xl font-bold text-grisHeading">
            Home
          </h2>
          <label className="text-sm font-medium text-grisText">
            21 FEB 2024
          </label>
        </div>
        <div className="col-span-7 flex w-full items-center gap-5 overflow-x-auto">
          <Button
            type="button"
            className="rounded-3xl bg-[#F0F0F0] font-roboto text-xs font-medium text-[#44444F] hover:bg-[#F0F0F0]"
          >
            CONSULTAR ARTICULO
          </Button>

          <Button
            type="button"
            className="rounded-3xl bg-[#F0F0F0] font-roboto text-xs font-medium text-[#44444F] hover:bg-[#F0F0F0]"
          >
            VERIFICADOR DE PRECIO
          </Button>

          <Button
            type="button"
            className="rounded-3xl bg-[#F0F0F0] font-roboto text-xs font-medium text-[#44444F] hover:bg-[#F0F0F0]"
          >
            ENTRADA EFECTIVO
          </Button>

          <Button
            type="button"
            className="rounded-3xl bg-[#F0F0F0] font-roboto text-xs font-medium text-[#44444F] hover:bg-[#F0F0F0]"
          >
            SALIDA EFECTIVO
          </Button>

          <Button
            type="button"
            className="rounded-3xl bg-[#F0F0F0] font-roboto text-xs font-medium text-[#44444F] hover:bg-[#F0F0F0]"
          >
            CORTE
          </Button>

          <Button
            type="button"
            className="rounded-3xl bg-[#F0F0F0] font-roboto text-xs font-medium text-[#44444F] hover:bg-[#F0F0F0]"
          >
            REIMPRIMIR TICKET
          </Button>
        </div>
        <div className="overflow-y-none col-span-4 flex w-full justify-center gap-x-6 overflow-x-auto">
          <div className="flex flex-col gap-y-1">
            <div>
              <label className="text-xs font-semibold text-grisText">
                Tienda
              </label>
            </div>
            <div>
              <label className="rounded-3xl border border-primario px-5 py-2 text-xs font-medium text-[#44444F]">
                Andares
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div>
              <label className="text-xs font-semibold text-grisText">
                Vendedor
              </label>
            </div>
            <div>
              <label className="rounded-3xl border border-primario px-5 py-2 text-xs font-medium text-[#44444F]">
                Catalina
              </label>
            </div>
          </div>
          <div className="justfiy-center flex items-center gap-x-4">
            <button type="button">
              <IonIcon
                icon={gridOutline}
                className="h-6 w-7 rounded-lg bg-primarioBotones p-1 text-white"
              ></IonIcon>
            </button>
            <button type="button">
              <IonIcon
                icon={list}
                className="h-6 w-7 rounded-lg bg-blancoBox p-1 text-grisText"
              ></IonIcon>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SideLayoutPos;
