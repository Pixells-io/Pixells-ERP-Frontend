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
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function MerchandiseMovRecord() {
  const { data } = useLoaderData();
  const [info, setInfo] = useState(data);

  console.log(info.slots);

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

        <div className="w-full items-center justify-between rounded-xl bg-blancoBg px-12 py-4">
          <div className="flex w-full gap-x-8">
            <div>
              {info.movement_type === "1" ? (
                <InputRouter
                  value={"Entrada de Compras"}
                  placeholder={"Tipo"}
                  disabled={true}
                />
              ) : info.movement_type === "2" ? (
                <InputRouter
                  value={"Entrada de Production"}
                  placeholder={"Tipo"}
                  disabled={true}
                />
              ) : info.movement_type === "3" ? (
                <InputRouter
                  value={"Transferencia"}
                  placeholder={"Tipo"}
                  disabled={true}
                />
              ) : info.movement_type === "4" ? (
                <InputRouter
                  value={"ESalida a Produccion"}
                  placeholder={"Tipo"}
                  disabled={true}
                />
              ) : (
                false
              )}
            </div>
            <div>
              {info.inventory_out != null ? (
                <InputRouter
                  value={info.inventory_in}
                  placeholder={"Almacen Entrante"}
                  disabled={true}
                />
              ) : (
                <span className="font-roboto text-sm text-grisHeading">
                  N/A
                </span>
              )}
            </div>
            <div>
              <InputRouter
                value={info.receive_date}
                placeholder={"Fecha de Entrada"}
                disabled={true}
              />
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
          </div>
          <div className="mt-6 flex w-full gap-x-8">
            <div>
              <InputRouter
                value={info.comment}
                placeholder={"Comentarios"}
                disabled={true}
                titlePlaceholder={info.comment}
              />
            </div>
            <div>
              <InputRouter
                value={info.rel_id}
                placeholder={"Relacion:"}
                disabled={true}
              />
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
          </div>
        </div>

        <div className="rounded-xl bg-blancoBg p-4">
          {/* HEADER */}
          <div className="flex border-b-2 border-b-primarioBotones text-sm font-normal">
            <div className="w-2/12 px-4 py-4 font-normal text-grisText">
              <span>Numero Artículo</span>
            </div>
            <div className="w-5/12 px-4 py-4 font-normal text-grisText">
              <span>Descripción</span>
            </div>
            <div className="w-1/12 px-4 py-4 font-normal text-grisText">
              <span>Recibido</span>
            </div>
            <div className="w-2/12 px-4 py-4 font-normal text-grisText">
              <span>Precio Unitario</span>
            </div>
            <div className="w-2/12 px-4 py-4 font-normal text-grisText">
              <span>Total</span>
            </div>
          </div>
          {/* Body */}
          {info.slots?.map((product, i) => (
            <div className="flex border-b-2 border-[#D7D7D7] text-sm font-normal">
              <div className="w-2/12 px-4 py-4">
                <InputRouter
                  disabled={true}
                  value={product.code}
                  titlePlaceholder={product.code}
                />
              </div>
              <div className="w-5/12 px-4 py-4">
                <InputRouter
                  disabled={true}
                  value={product.name}
                  titlePlaceholder={product.name}
                />
              </div>
              <div className="w-1/12 px-4 py-4">
                <InputRouter
                  disabled={true}
                  value={product.received_quantity}
                  titlePlaceholder={product.received_quantity}
                />
              </div>
              <div className="w-2/12 px-4 py-4 font-normal text-grisText">
                <InputRouter
                  disabled={true}
                  type={"number"}
                  value={product.price}
                  titlePlaceholder={product.price}
                />
              </div>
              <div className="w-2/12 px-4 py-4 font-normal text-grisText">
                <InputRouter
                  disabled={true}
                  type={"number"}
                  value={product.price * product.received_quantity}
                  titlePlaceholder={product.price * product.received_quantity}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MerchandiseMovRecord;
