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
} from "ionicons/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Products from "./Products/Product";
import OperationProcess from "./OperationProcess/OperationProcess";

function ManufacturingOrder() {
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

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Nueva Orden de Producción
          </p>

          <div className="flex items-center justify-end gap-5">
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
          </div>
          <div className="flex items-end justify-center">
            <Link to={"/transformation/manufacturing-order"}>
              <IonIcon
                icon={closeCircle}
                size="small"
                className="cursor-pointer text-grisDisabled"
              ></IonIcon>
            </Link>
          </div>
        </div>

        <div>
          <div className="flex w-full items-center gap-x-2 overflow-x-auto rounded-xl bg-blancoBg px-3 py-3">
            <Select name="article" className="h-10 min-w-[180px]">
              <SelectTrigger className="border-gris2-transparent w-full rounded-xl border text-[14px] font-light text-[#696974] placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                <SelectValue placeholder="Selecciona el Artículo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Input
              type="number"
              name="amount"
              placeholder="Cantidad"
              className="border-gris2-transparent w-[100px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
            />

            <Input
              className="border-gris2-transparent w-[180px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
              name="date"
              placeholder="Fecha Prevista de Producción"
              type="date"
            />

            <Select name="accountingAccount" className="h-10 min-w-[180px]">
              <SelectTrigger className="border-gris2-transparent w-full rounded-xl border text-[14px] font-light text-[#696974] placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                <SelectValue placeholder="Cuenta Contable" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Select name="store" className="h-10 min-w-[180px]">
              <SelectTrigger className="border-gris2-transparent w-full rounded-xl border text-[14px] font-light text-[#696974] placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                <SelectValue placeholder="Almacen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <div className="ml-6 flex items-center gap-x-2">
              <label
                htmlFor="checkBoxKardex"
                className="text-xs font-light text-grisText"
              >
                Kardex
              </label>
              <Checkbox className="border border-primarioBotones data-[state=checked]:bg-primarioBotones" />
            </div>
          </div>
        </div>

        <Tabs
          defaultValue="products"
          className="h-full overflow-auto rounded-lg pt-2"
        >
          <TabsList className="ml-4 flex w-fit gap-x-4 rounded-none bg-inherit">
            <TabsTrigger
              value="products"
              className="rounded-3xl border-[1px] border-[#696974] px-5 py-3 text-xs font-medium text-grisText data-[state=active]:border-[#44444F] data-[state=active]:bg-[#44444F] data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:shadow-none"
            >
              Productos
            </TabsTrigger>
            <TabsTrigger
              value="operationProcess"
              className="ata-[state=active]:font-bold rounded-3xl border-[1px] border-[#696974] px-5 py-3 text-xs font-medium text-grisText data-[state=active]:border-[#44444F] data-[state=active]:bg-[#44444F] data-[state=active]:text-white data-[state=active]:shadow-none"
            >
              Proceso de Operación
            </TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="p-2">
            <Products />
          </TabsContent>
          <TabsContent className="p-2" value="operationProcess">
            <OperationProcess />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ManufacturingOrder;
