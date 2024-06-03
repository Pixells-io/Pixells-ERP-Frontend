import React, { useState, useEffect } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IonIcon } from "@ionic/react";
import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
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
function Main360() {
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col gap-4 rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">org-dev</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              DESARROLLO ORGANIZACIONAL
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

        {/* tab eval/results */}
        <div className="flex gap-8">
          <div className="flex gap-4">
            <Button>Evaluacions</Button>
            <Button>Resultados</Button>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="h-12 w-12 rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p>Don Fomularo</p>
              <span>Jefe</span>
            </div>
          </div>
        </div>

        {/* examen */}
        <div className="h-full rounded-lg bg-blancoBg pt-2">
          <Tabs
            defaultValue="autoevaluacion"
            className="rounded-lg bg-blancoBg pt-2"
          >
            <TabsList className="2 ml-4 flex w-fit rounded-none bg-blancoBg">
              <TabsTrigger
                value="autoevaluacion"
                className="rounded-none border-b-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              >
                AUTOEVALUACION
              </TabsTrigger>
              <TabsTrigger
                value="jefe"
                className="rounded-none border-b-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              >
                JEFE
              </TabsTrigger>
              <TabsTrigger
                value="par-1"
                className="rounded-none border-b-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              >
                COMPAÑERO PAR 1
              </TabsTrigger>
              <TabsTrigger
                value="par-2"
                className="rounded-none border-b-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              >
                COMPAÑERO PAR 2
              </TabsTrigger>
            </TabsList>
            <TabsContent value="autoevaluacion" className="">
              <div className="flex flex-col pt-2">
                <div className="flex justify-center gap-3">
                  <p className="rounded-full bg-grisHeading px-3 py-1 text-[10px] font-medium text-white">
                    Liderazgo
                  </p>
                  <p className="rounded-full border border-grisHeading px-3 py-1 text-[10px] font-medium text-grisHeading">
                    Comunicación Efectiva
                  </p>
                  <p className="rounded-full border border-grisHeading px-3 py-1 text-[10px] font-medium text-grisHeading">
                    Gestión del cambio
                  </p>
                  <p className="rounded-full border border-grisHeading px-3 py-1 text-[10px] font-medium text-grisHeading">
                    Orientación a resultados
                  </p>
                  <p className="rounded-full border border-grisHeading px-3 py-1 text-[10px] font-medium text-grisHeading">
                    Proactividad
                  </p>
                  <p className="rounded-full border border-grisHeading px-3 py-1 text-[10px] font-medium text-grisHeading">
                    Etica e Integridad
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent className="" value="jefe"></TabsContent>
            <TabsContent className="" value="par-1"></TabsContent>
            <TabsContent className="" value="par-2"></TabsContent>
          </Tabs>
        </div>
      </div>

      {/* sidebar */}
      <div className="ml-4 flex w-[280px] shrink-0 flex-col gap-6 rounded-lg bg-gris px-8 py-4">
        <div className="flex justify-center">
          <p className="font-poppins text-lg font-semibold text-grisHeading">
            Accesos Rápidos
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {PEOPLE.map((item, i) => (
            <div key={i} className="flex">
              <div className="flex w-1/3 flex-col items-center gap-1">
                <div className="flex h-12 w-12 items-center justify-center">
                  <Avatar className="h-full w-full rounded-lg">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                {item.status == "Pending" ? (
                  <span className="w-fit rounded-full bg-[#FAA36440] px-2 py-[2px] text-[11px] text-[#FAA364]">
                    {item.status}
                  </span>
                ) : (
                  <span className="w-fit rounded-full bg-[#7794F940] px-2 py-[2px] text-[11px] text-[#7794F9]">
                    {item.status}
                  </span>
                )}
              </div>
              <div>
                <p className="text-base font-medium text-grisText">
                  {item.name}
                </p>
                <span className="line-clamp-none text-[10px] font-medium text-grisSubText">
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

export default Main360;
