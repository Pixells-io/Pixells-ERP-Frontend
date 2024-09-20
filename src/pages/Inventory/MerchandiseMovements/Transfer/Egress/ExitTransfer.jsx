import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  closeCircle,
  qrCodeOutline,
} from "ionicons/icons";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";
import TableTransfer from "../Table/TransferTable";
import InputForm from "@/components/InputForm/InputForm";
import { Label } from "@/components/ui/label";
import ModalQrCode from "./Modal/ModalQrCode";

function ExitTransfer() {
  const [commodity, setCommodity] = useState([]);
  const [modalQr, setModalQr] = useState(false);

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-4 py-4 md:px-8">
        <ModalQrCode setModal={setModalQr} modal={modalQr} />
        
        {/* Navigation */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon icon={chevronBack} size="large" className="rounded-3xl bg-blancoBox p-1" />
            </div>
            <div className="h-12 w-12">
              <IonIcon icon={chevronForward} size="large" className="rounded-3xl bg-blancoBox p-1" />
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">tickets</div>
        </div>

        {/* Top content */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-start md:space-x-6">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">INVENTARIO</h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-poppins text-xl font-bold text-grisHeading">Salida Traspaso Programada:</p>
          <div className="flex justify-end">
            <Link to="/inventory/merchandise-movements">
              <IonIcon icon={closeCircle} size="small" className="cursor-pointer text-grisDisabled" />
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="rounded-xl bg-blancoBg p-4 md:p-6">
          <div className="flex flex-wrap gap-4 rounded-xl border  p-8">
            <div className="w-full md:w-auto">
              <Label className="font-roboto text-[14px] text-[#696974]">Folio</Label>
              <InputForm
                className="border-gris2-transparent w-full md:w-[200px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
                name="documentNumber"
                type="number"
              />
            </div>
            <div className="w-full md:w-auto">
              <Label className="font-roboto text-[14px] text-[#696974]">Tipo</Label>
              <InputForm
                className="border-gris2-transparent w-full md:w-[350px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
                name="documentType"
                type="text"
              />
            </div>
            <div className="w-full md:w-auto">
              <Label className="font-roboto text-[14px] text-[#696974]">Número de Orden</Label>
              <InputForm
                className="border-gris2-transparent w-full md:w-[200px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
                name="order"
                type="text"
              />
            </div>
            <div className="w-full md:w-auto">
              <Label className="font-roboto text-[14px] text-[#696974]">Almacén</Label>
              <InputForm
                className="border-gris2-transparent w-full md:w-[150px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
                name="warehouse"
                type="text"
              />
            </div>
            <div className="w-full md:w-auto">
              <Label className="font-roboto text-[14px] text-[#696974]">Ubicación</Label>
              <InputForm
                className="border-gris2-transparent w-full md:w-[200px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
                name="location"
                type="text"
              />
            </div>
            <div className="w-full ml-[16px] md:w-auto flex justify-center md:justify-end items-end">
              <button
                type="button"
                className="h-16 w-16 rounded-md bg-[#E0E0E0] pt-2"
                onClick={() => setModalQr(true)}
              >
                <IonIcon icon={qrCodeOutline} size="large" className="text-[#44444F]" />
              </button>
            </div>
          </div>
          <div className="w-full pt-4">
            <Label className="font-roboto text-[14px] text-[#696974]">Escanear Código de Producto</Label>
            <InputForm
              className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
              name="productCode"
              type="text"
            />
          </div>
          <div className="pt-6">
            <TableTransfer tableData={commodity} setTableData={setCommodity} isEditable={true} />
          </div>
          <StatusInformation
            status="inProgress"
            imgUser="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          >
            <div className="flex gap-4 mt-4">
              <Button
                type="button"
                variant="outline"
                className="w-full md:w-[120px] rounded-lg border-2 border-[#E0E0E0] text-xs text-[#8F8F8F] hover:text-primarioBotones"
              >
                Cancelar
              </Button>
              <Button
                type="button"
                className="w-full md:w-auto rounded-lg bg-[#E0E0E0] px-10 text-xs text-[#44444F] hover:bg-[#E0E0E0]"
              >
                Completar Salida
              </Button>
            </div>
          </StatusInformation>
        </div>
      </div>
    </div>
  );
}

export default ExitTransfer;