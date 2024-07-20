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
import NavigationHeader from "@/components/navigation-header";

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
      <div className="ml-4 flex w-full flex-col gap-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              ORGANIZATION DEVELOPMENT
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
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
            <p className="text-[22px] font-bold text-grisHeading">
              Mi Perfil/Evaluador
            </p>
            <div className="flex gap-2">
              <Avatar className="h-12 w-12 rounded-lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center">
                <p className="text-[16px] font-medium text-grisText">
                  Don Fomularo
                </p>
                <span className="text-[10px] font-medium text-grisSubText">
                  Gerente de Administracion
                </span>
              </div>
            </div>

            {/* perfiles */}
            <div className="pt-3">
              <p className="text-[22px] font-bold text-grisHeading">
                Por Evaluar/Evaluados
              </p>
              <div className="flex gap-2 overflow-scroll">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="flex rounded-full bg-[#FAA36440] px-2 text-[11px] font-semibold text-[#FAA364]">
                    Pending
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="flex rounded-full bg-[#FAA36440] px-2 text-[11px] font-semibold text-[#FAA364]">
                    Pending
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="flex rounded-full bg-[#FAA36440] px-2 text-[11px] font-semibold text-[#FAA364]">
                    Pending
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="flex rounded-full bg-[#7794F940] px-2 text-[11px] font-semibold text-[#7794F9]">
                    Result
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* tabla */}
          <div className="w-1/2 rounded-lg bg-[#F0F0F0] py-3">
            <div className="flex flex-col">
              <div className="border-b pb-2 text-center">
                <p className="text-[16px] font-semibold text-grisHeading">
                  Results Reference Table
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 px-6 py-4">
                <p className="text-[12px] font-semibold text-grisText">
                  Quali. EDI VALUE
                </p>
                <p className="text-[12px] font-semibold text-grisText">
                  Quanti. EDI VALUE
                </p>
                <p className="text-[12px] font-semibold text-grisText">
                  Description
                </p>
                {RESULTS_TABLE.map((result, i) => (
                  <Fragment key={i}>
                    <p className="text-[12px] font-normal text-grisText">
                      {result.quali}
                    </p>
                    <p className="text-[12px] font-normal text-grisText">
                      {result.quanti}
                    </p>
                    <p className="text-[12px] font-normal text-grisText">
                      {result.description}
                    </p>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* tablas eva/retro */}
        <div className="h-full rounded-lg bg-blancoBg pt-2">
          <Tabs
            defaultValue="evaluacion"
            className="rounded-lg bg-blancoBg pt-2"
          >
            <TabsList className="2 ml-4 flex w-fit rounded-none bg-blancoBg">
              <TabsTrigger
                value="evaluacion"
                className="rounded-none border-b-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              >
                EVALUACION
              </TabsTrigger>
              <TabsTrigger
                value="retroalimentacion"
                className="rounded-none border-b-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              >
                RETROALIMENTACION
              </TabsTrigger>
            </TabsList>
            <TabsContent value="evaluacion" className="p-10">
              <div className="grid grid-cols-5 border-b-2 py-4">
                <p className="col-span-2 text-[20px] font-semibold text-grisHeading">
                  Indicador
                </p>
                <p className="text-[13px] font-semibold text-grisHeading">
                  Valor%
                </p>
                <p className="text-[13px] font-semibold text-grisHeading">
                  Resultado
                </p>
                <p className="text-[13px] font-semibold text-grisHeading">
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
    </div>
  );
}

export default MainEDI;
