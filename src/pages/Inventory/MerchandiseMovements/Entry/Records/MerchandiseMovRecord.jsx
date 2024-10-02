import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

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
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const dataInfo = [
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
  const { data } = useLoaderData();
  const [info, setInfo] = useState(data);

  console.log(info);

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
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Entrada de Mercancia - {info.id}
          </p>

          <div className="flex items-center justify-end gap-12">
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
              <span className="font-roboto text-sm font-normal text-[#696974]">
                Tipo:
              </span>
              <br />
              {info.movement_type === "1" ? (
                <span className="font-roboto text-sm text-grisHeading">
                  Entrada de Compras
                </span>
              ) : info.movement_type === "2" ? (
                <span className="font-roboto text-sm text-grisHeading">
                  Entrada de Production
                </span>
              ) : info.movement_type === "3" ? (
                <span className="font-roboto text-sm text-grisHeading">
                  Transferencia
                </span>
              ) : info.movement_type === "4" ? (
                <span className="font-roboto text-sm text-grisHeading">
                  Salida a Produccion
                </span>
              ) : (
                false
              )}
            </div>
            <div>
              <span className="font-roboto text-sm font-normal text-[#696974]">
                Estatus:
              </span>
              <br />
              {info.status === "1" ? (
                <span className="rounded-2xl bg-[#5B89FF30] px-4 py-1 font-roboto text-sm text-[#5B89FF]">
                  Pendiente
                </span>
              ) : info.status === "2" ? (
                <span className="rounded-2xl bg-[#a3ff0030] px-4 py-1 font-roboto text-sm text-[#a3ff00]">
                  Enviado
                </span>
              ) : info.status === "3" ? (
                <span className="rounded-2xl bg-[#2cba0030] px-4 py-1 font-roboto text-sm text-[#2cba00]">
                  Recibido
                </span>
              ) : info.status === "4" ? (
                <span className="rounded-2xl bg-[#fff40030] px-4 py-1 font-roboto text-sm text-[#fff400]">
                  Recepcion Parcial
                </span>
              ) : info.status === "5" ? (
                <span className="rounded-2xl bg-[#ffa70030] px-4 py-1 font-roboto text-sm text-[#ffa700]">
                  Problemas
                </span>
              ) : info.status === "6" ? (
                <span className="rounded-2xl bg-[#ff000030] px-4 py-1 font-roboto text-sm text-[#ff0000]">
                  Cancelado
                </span>
              ) : info.status === "7" ? (
                <span className="rounded-2xl bg-[#2cba0030] px-4 py-1 font-roboto text-sm text-[#2cba00]">
                  Completado
                </span>
              ) : (
                false
              )}
            </div>
            <div>
              <span className="font-roboto text-sm font-normal text-[#696974]">
                Almacen Saliente:
              </span>
              <br />
              {info.inventory_in != null ? (
                <span
                  className="line-clamp-1 font-roboto text-sm text-grisHeading"
                  title={info.inventory_in}
                >
                  {info.inventory_in}
                </span>
              ) : (
                <span className="font-roboto text-sm text-grisHeading">
                  N/A
                </span>
              )}
            </div>
            <div>
              <span className="font-roboto text-sm font-normal text-[#696974]">
                Almacen Entrante:
              </span>
              <br />
              {info.inventory_out != null ? (
                <span
                  className="line-clamp-1 font-roboto text-sm text-grisHeading"
                  title={info.inventory_out}
                >
                  {info.inventory_out}
                </span>
              ) : (
                <span className="font-roboto text-sm text-grisHeading">
                  N/A
                </span>
              )}
            </div>
            <div>
              <span className="font-roboto text-sm font-normal text-[#696974]">
                Fecha:
              </span>
              <br />
              <span
                className="line-clamp-1 font-roboto text-sm text-grisHeading"
                title={info.receive_date}
              >
                {info.receive_date}
              </span>
            </div>
            <div>
              <span className="font-roboto text-sm font-normal text-[#696974]">
                Comentario:
              </span>
              <br />
              <span
                className="line-clamp-1 font-roboto text-sm text-grisHeading"
                title={info.comment}
              >
                {info.comment}
              </span>
            </div>
            <div>
              <span className="font-roboto text-sm font-normal text-[#696974]">
                Creador:
              </span>
              <br />
              <div className="flex gap-2 text-[#696974]">
                <Avatar className="size-7">
                  <AvatarImage src={info?.user_creator.img} />
                </Avatar>
                <div className="ml-2">
                  <span>{info?.user_creator.name}</span>
                </div>
              </div>
            </div>
            <div>
              <span className="font-roboto text-sm font-normal text-[#696974]">
                Relacion:
              </span>
              <br />
              <span
                className="line-clamp-1 font-roboto text-sm text-grisHeading"
                title={info.rel_id}
              >
                {info.rel_id}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-blancoBg p-4">
          <OnlyTable data={info.slots} columns={MerchandiseRecordColumns} />
        </div>
      </div>
    </div>
  );
}

export default MerchandiseMovRecord;
