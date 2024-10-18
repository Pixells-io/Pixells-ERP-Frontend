import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HEADERS = [
  { name: "PROYECTO", cols: "6", text: "start" },
  { name: "OBJETIVO", cols: "1", text: "start" },
  { name: "EXPIRATION", cols: "1", text: "start" },
  { name: "RESPONSABLE", cols: "1", text: "start" },
  { name: "PRIORIDAD", cols: "1", text: "center" },
  { name: "CREATED", cols: "1", text: "center" },
  { name: "ESTATUS", cols: "1", text: "start" },
];

const OPTIONS = [
  {
    id: 1,
    project: "Sin Proyecto",
    objective: "",
    expiration: "15 feb 2024",
    responsible: [
      {
        id: 1,
        name: "Agustin",
        img: "https://github.com/shadcn.png",
      },
    ],
    priority: "1",
    created: { id: 1, name: "Juan", img: "https://github.com/shadcn.png" },
    status: "1",
  },
  {
    id: 2,
    project: "Nuevo Sistema de Gestión",
    objective: "",
    expiration: "16 feb 2024",
    responsible: [
      { id: 2, name: "Pepe", img: "https://github.com/shadcn.png" },
      { id: 2, name: "Pepe", img: "https://github.com/shadcn.png" },
      { id: 2, name: "Pepe", img: "https://github.com/shadcn.png" },
      { id: 2, name: "Pepe", img: "https://github.com/shadcn.png" },
    ],
    priority: "1",
    created: { id: 2, name: "Raul", img: "https://github.com/shadcn.png" },
    status: "1",
  },
];

function ListTab() {
  return (
    <div className="mt-8 flex flex-col px-8">
      <div className="grid h-12 grid-cols-12 items-center border-b">
        {HEADERS?.map((header, i) => (
          <div
            key={i}
            className={`col-span-${header?.cols || "1"} text-${header.text}`}
          >
            <p className="text-sm font-semibold text-gris2">{header.name}</p>
          </div>
        ))}
      </div>

      {OPTIONS.map((opt, i) => (
        <div
          key={i}
          className="grid h-12 w-full grid-cols-12 items-center border-b"
        >
          <div className={"col-span-6 text-xs font-normal text-grisHeading"}>
            {opt.project}
          </div>
          <div className={"col-span-1 text-xs font-normal text-grisHeading"}>
            {opt.objective}
          </div>
          <div className={"col-span-1 text-xs font-normal text-grisHeading"}>
            {opt.expiration}
          </div>

          <div className="col-span-1 flex justify-start">
            <div className="flex">
              {opt.responsible.slice(0, 3).map((r, index) => (
                <Avatar className="size-6" key={index}>
                  <AvatarImage src={r?.img} title={r?.name} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
            </div>
            {opt.responsible.length > 3 && (
              <div className="ml-1 flex items-center">
                <span className="text-xs font-normal text-grisHeading">
                  +{opt.responsible.length - 3}
                </span>
              </div>
            )}
          </div>
          <div className={"col-span-1 flex justify-center text-xs font-normal"}>
            {opt.priority == "1" && (
              <span className="text-[#B7021F]">Urgente</span>
            )}
          </div>
          <div className="col-span-1 flex justify-center">
            <Avatar className="size-6">
              <AvatarImage src={opt.created?.img} title={opt?.created?.name} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className={"col-span-1 text-xs font-normal text-grisHeading"}>
            {opt.status == "1" && <span>Pendiente</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListTab;
