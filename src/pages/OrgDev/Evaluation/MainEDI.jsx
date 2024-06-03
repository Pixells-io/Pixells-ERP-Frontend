import React, { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  chevronBack,
  chevronForward,
  informationCircle,
} from "ionicons/icons";
import { Button } from "@/components/ui/button";

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

const RESULTS_TABLE = [
  {
    quali: "Excelent",
    quanti: "111-120",
    description: "Recurringly exceeds objectives",
  },
  {
    quali: "Very Good",
    quanti: "101-110",
    description: "Regularly exceeds goals",
  },
  {
    quali: "Good",
    quanti: "91-100",
    description: "Complies with expected goals and indicators",
  },
  {
    quali: "Regular",
    quanti: "81-90",
    description: "Requires support and monitoring",
  },
  {
    quali: "Insufficient",
    quanti: "<80",
    description: "It is not meeting the expected objectives and indicators",
  },
];

function MainEDI() {
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
              ORGANIZATION DEVELOPMENT
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

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-[22px] text-grisHeading font-bold">
              Mi Perfil/Evaluador
            </p>
            <div className="flex gap-2">
              <Avatar className="rounded-lg w-12 h-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center">
                <p className="text-grisText text-[16px] font-medium">
                  Don Fomularo
                </p>
                <span className="text-grisSubText text-[10px] font-medium">
                  Gerente de Administracion
                </span>
              </div>
            </div>

            {/* perfiles */}
            <div className="pt-3">
              <p className="text-[22px] text-grisHeading font-bold">
                Por Evaluar/Evaluados
              </p>
              <div className="flex gap-2 overflow-scroll">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="rounded-lg w-12 h-12">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="flex bg-[#FAA36440] px-2 rounded-full text-[11px] text-[#FAA364] font-semibold">
                    Pending
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="rounded-lg w-12 h-12">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="flex bg-[#FAA36440] px-2 rounded-full text-[11px] text-[#FAA364] font-semibold">
                    Pending
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="rounded-lg w-12 h-12">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="flex bg-[#FAA36440] px-2 rounded-full text-[11px] text-[#FAA364] font-semibold">
                    Pending
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="rounded-lg w-12 h-12">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="flex bg-[#7794F940] px-2 rounded-full text-[11px] text-[#7794F9] font-semibold">
                    Result
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* tabla */}
          <div className="w-1/2 bg-[#F0F0F0] rounded-lg py-3">
            <div className="flex flex-col">
              <div className="pb-2 text-center border-b">
                <p className="text-[16px] font-semibold text-grisHeading">
                  Results Reference Table
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 px-6 py-4">
                <p className="text-[12px] text-grisText font-semibold">
                  Quali. EDI VALUE
                </p>
                <p className="text-[12px] text-grisText font-semibold">
                  Quanti. EDI VALUE
                </p>
                <p className="text-[12px] text-grisText font-semibold">
                  Description
                </p>
                {RESULTS_TABLE.map((result, i) => (
                  <Fragment key={i}>
                    <p className="text-[12px] text-grisText font-normal">
                      {result.quali}
                    </p>
                    <p className="text-[12px] text-grisText font-normal">
                      {result.quanti}
                    </p>
                    <p className="text-[12px] text-grisText font-normal">
                      {result.description}
                    </p>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* tablas eva/retro */}
        <div className="bg-blancoBg rounded-lg pt-2 h-full">
          <Tabs
            defaultValue="evaluacion"
            className="bg-blancoBg rounded-lg pt-2"
          >
            <TabsList className="bg-blancoBg flex 2 w-fit rounded-none ml-4">
              <TabsTrigger
                value="evaluacion"
                className="border-b-2 rounded-none text-sm text-grisSubText data-[state=active]:text-primarioBotones data-[state=active]:font-semibold font-normal data-[state=active]:shadow-none data-[state=active]:bg-blancoBg data-[state=active]:border-primarioBotones"
              >
                EVALUACION
              </TabsTrigger>
              <TabsTrigger
                value="retroalimentacion"
                className="border-b-2 rounded-none text-sm text-grisSubText data-[state=active]:text-primarioBotones data-[state=active]:font-semibold font-normal data-[state=active]:shadow-none data-[state=active]:bg-blancoBg data-[state=active]:border-primarioBotones"
              >
                RETROALIMENTACION
              </TabsTrigger>
            </TabsList>
            <TabsContent value="evaluacion" className="p-10">
              <div className="grid grid-cols-5 border-b-2 py-4">
                <p className="col-span-2 text-grisHeading text-[20px] font-semibold">
                  Indicador
                </p>
                <p className="text-grisHeading text-[13px] font-semibold">
                  Valor%
                </p>
                <p className="text-grisHeading text-[13px] font-semibold">
                  Resultado
                </p>
                <p className="text-grisHeading text-[13px] font-semibold">
                  Resultado Ponderado
                </p>
              </div>
              <div className="flex flex-col gap-4 py-4">
                <div className="grid grid-cols-5 border-b py-3">
                  <p className="col-span-2">Utilidad Operativa</p>
                  <p>40%</p>
                  <p>90</p>
                  <p>36</p>
                </div>
                <div className="grid grid-cols-5 border-b py-3">
                  <p className="col-span-2">Ventas Totales</p>
                  <p>30%</p>
                  <p>100</p>
                  <p>30</p>
                </div>
                <div className="grid grid-cols-5 border-b py-3">
                  <p className="col-span-2">Indicador 1 del área</p>
                  <p>15%</p>
                  <p>95</p>
                  <p>14.25</p>
                </div>
                <div className="grid grid-cols-5 border-b py-3">
                  <p className="col-span-2">Indicador 2 del área</p>
                  <p>15%</p>
                  <p>100</p>
                  <p>15</p>
                </div>
                <div className="grid grid-cols-5">
                  <p className="col-span-4">TOTAL</p>
                  <div className="flex gap-6">
                    <p>95.25</p>
                    <p>BIEN</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent className="p-2" value="retroalimentacion">
              <div className="flex flex-col gap-4 p-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fortalezas">Fortalezas</label>
                  <input
                    type="text"
                    placeholder="Escribe las fortalezas"
                    id="fortalezas"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="area">Áreas de Oportunidad</label>
                  <input
                    type="text"
                    placeholder="Escribe las áreas de oportunidad"
                    id="area"
                  />
                </div>
                <label htmlFor="compromiso">Compromisos del evaluador</label>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Escribe los compromisos"
                    id="compromiso"
                  />
                </div>

                <div className="flex gap-2 self-end">
                  <Button>Remove</Button>
                  <Button>Save</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* sidebar */}
      <div className="w-[280px] flex flex-col gap-6 bg-gris px-8 py-4 ml-4 rounded-lg shrink-0">
        <div className="flex justify-center">
          <p className="text-grisHeading text-lg font-poppins font-semibold">
            Accesos Rápidos
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {PEOPLE.map((item, i) => (
            <div key={i} className="flex">
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

export default MainEDI;
