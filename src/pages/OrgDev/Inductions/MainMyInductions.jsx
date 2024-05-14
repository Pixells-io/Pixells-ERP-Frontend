import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import {
  calendarOutline,
  chevronBack,
  chevronForward,
  ellipsisHorizontal,
} from "ionicons/icons";
import InductionsCard from "./components/InductionsCard";

const DATA = [
  {
    status: "Pendiente",
    nombre: "Inducción a Productos",
    categoria: "Área",
    fecha: "05 dec 23",
    progreso: "80",
  },
  {
    status: "Pendiente",
    nombre: "Inducción a la Empresa",
    categoria: "General",
    fecha: "05 dec 23",
    progreso: "50",
  },
  {
    status: "Hecho",
    nombre: "Inducción a Maquinaria",
    categoria: "Puesto",
    fecha: "05 dec 23",
    progreso: "100",
  },
];

const PEOPLE = [
  {
    name: "Rodrigo Gómez",
    position: "Gerente de Administración",
    status: "Pending",
  },
  {
    name: "Clarissa Reynold’s",
    position: "Gerente de Administración",
    status: "Pending",
  },
  {
    name: "Alberto Lenus",
    position: "Gerente de Administración",
    status: "Pending",
  },
  {
    name: "Ana Lenovsky",
    position: "Gerente de Administración",
    status: "Result",
  },
];

function MainMyInductions() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg gap-4 w-full">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  text-gris2">
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">org-dev</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins font-bold text-xl text-[#44444F]">
              DESARROLLO ORGANIZACIONAL
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center font-roboto">
            {/* <div className="text-xs">
              {leads?.data.length == 0 ? "0" : leads?.data.length}{" "}
              {leads?.data.length == 1 ? "lead" : "leads"}
            </div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">
              {loaderClients?.data.length == 0
                ? "0"
                : loaderClients?.data.length}{" "}
              {loaderClients?.data.length == 1 ? "client" : "clients"}
            </div> */}
          </div>
        </div>

        <div>
          <p className="font-poppins font-bold text-xl text-[#44444F]">
            Mis Inducciones
          </p>
        </div>

        <div className="flex gap-2">
          <div>
            <p className="text-[10px] font-medium w-16 justify-center flex py-1 bg-grisHeading rounded-full text-white">
              Todas
            </p>
          </div>
          <div>
            <p className="text-[10px] font-medium w-16 justify-center flex py-1 rounded-full text-grisHeading border border-grisHeading">
              General
            </p>
          </div>
          <div>
            <p className="text-[10px] font-medium w-16 justify-center flex py-1 rounded-full text-grisHeading border border-grisHeading">
              Área
            </p>
          </div>
          <div>
            <p className="text-[10px] font-medium w-16 justify-center flex py-1 rounded-full text-grisHeading border border-grisHeading">
              Puesto
            </p>
          </div>
        </div>

        <div className="bg-blancoBg rounded-lg p-2 h-full">
          <div className="flex flex-wrap justify-center">
            {DATA.map((card, i) => (
              <InductionsCard card={card} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-[280px] flex flex-col gap-6 bg-gris px-8 py-4 ml-4 rounded-lg shrink-0">
        <div className="flex justify-center">
          <p className="text-grisHeading text-lg font-poppins font-semibold">
            Accesos Rápidos
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {PEOPLE.map((item, i) => (
            <div className="flex">
              <div className="flex w-1/3 flex-col items-center gap-1">
                <div className="flex w-12 h-12 items-center justify-center ">
                  <Avatar className="rounded-lg h-full w-full">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                {item.status == "Pending" ? (
                  <span className="text-[11px] bg-[#FAA36440] text-[#FAA364] px-2 py-[2px] w-fit rounded-full">
                    {item.status}
                  </span>
                ) : (
                  <span className="text-[11px] bg-[#7794F940] text-[#7794F9] px-2 py-[2px] w-fit rounded-full">
                    {item.status}
                  </span>
                )}
              </div>
              <div>
                <p className="text-grisText font-medium text-base">
                  {item.name}
                </p>
                <span className="font-medium text-[10px] text-grisSubText line-clamp-none ">
                  {item.position}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainMyInductions;
