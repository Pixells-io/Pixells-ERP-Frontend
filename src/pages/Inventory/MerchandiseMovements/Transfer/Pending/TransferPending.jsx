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
import TableForm from "../Table/TableForm";
import InputForm from "@/components/InputForm/InputForm";
import { Label } from "@/components/ui/label";

const TransferDetails =()=> {
  const [commodity, setCommodity] = useState([]);
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
           Traspaso Pendiente:
          </p>

          <div className="flex justify-end gap-5">
           

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
        </div>
        {/*CONTENT */}
        <div className="rounded-xl bg-blancoBg p-6">
          <div className="flex w-full flex-wrap gap-4 rounded-xl border p-8">
            <div>
              <Label className="font-roboto text-[14px] text-[#696974]">
                Folio
              </Label>
              <InputForm
                className="border-gris2-transparent w-25 rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
                name="documentNumber"
                type="number"
              />
            </div>
            <div>
              <Label className="font-roboto text-[14px] text-[#696974]">
                De Almacén
              </Label>
              <Select name="priceList">
                <SelectTrigger className="border-gris2-transparent h-[32px] w-[500px] rounded-xl border font-roboto text-[14px] text-gris2 placeholder:font-roboto placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="font-roboto text-[14px] text-[#696974]">
                Almacén Destino
              </Label>
              <Select name="priceList">
                <SelectTrigger className="border-gris2-transparent bg-[#D7D7D7] h-[32px] w-[500px] rounded-xl border font-roboto text-[14px] text-gris2 placeholder:font-roboto placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="font-roboto text-[14px] text-[#696974]">
                Fecha Esperada
              </Label>
              <InputForm
                className="border-gris2-transparent w-25 rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
                name="documentNumber"
                type="number"
              />
            </div>
          </div>

          <div className="pt-4">
            <TableForm tableData={commodity} setTableData={setCommodity}  isEditable={false}/>
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
                className={`rounded-lg bg-[#E0E0E0] px-10 text-xs text-[#44444F] hover:bg-[#E0E0E0]`}
              >
                Crear
              </Button>
          </StatusInformation>
        </div>
      </div>
    </div>
  );
}

export default TransferDetails;
