import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

const DATA = [
  {
    nombre: "Inducción a productos",
    tipo: "General",
    areas: "6",
    responsable: "John F. Kennedy",
    archivos: false,
    examen: false,
    historial: "botton",
  },
  {
    nombre: "Inducción a productos",
    tipo: "General",
    areas: "6",
    responsable: "John F. Kennedy",
    archivos: false,
    examen: false,
    historial: "botton",
  },
  {
    nombre: "Inducción a productos",
    tipo: "General",
    areas: "6",
    responsable: "John F. Kennedy",
    archivos: true,
    examen: false,
    historial: "botton",
  },
];

function MainOrgDev() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full">
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
        <Tabs defaultValue="evaluacion" className="bg-blancoBg rounded-lg pt-2">
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
              RETROALIMENTCION
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="evaluacion"
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-8 w-full py-2 px-4 text-center">
              <div className="col-span-2 text-left pl-4">
                <p className="text-grisText font-semibold text-sm">NOMBRE</p>
              </div>
              <div>
                <p className="text-grisText font-semibold text-sm">TIPO</p>
              </div>
              <div>
                <p className="text-grisText font-semibold text-sm">AREAS</p>
              </div>
              <div>
                <p className="text-grisText font-semibold text-sm">
                  RESPONSABLE
                </p>
              </div>
              <div>
                <p className="text-grisText font-semibold text-sm">ARCHIVOS</p>
              </div>
              <div>
                <p className="text-grisText font-semibold text-sm">EXAMEN</p>
              </div>
              <div>
                <p className="text-grisText font-semibold text-sm">HISTORIAL</p>
              </div>
            </div>
            <div className="flex flex-col py-2 px-4 text-center gap-2">
              {DATA.map((row, i) => (
                <div key={i} className="grid grid-cols-8 w-full border-t py-4">
                  <div className="col-span-2 text-left pl-4">
                    <p className="text-grisHeading text-xs">{row.nombre}</p>
                  </div>
                  <div>
                    <p className="text-grisHeading text-xs">{row.tipo}</p>
                  </div>
                  <div>
                    <p className="text-grisHeading text-xs">{row.areas}</p>
                  </div>
                  <div>
                    <p className="text-grisHeading text-xs">
                      {row.responsable}
                    </p>
                  </div>
                  <div>
                    <p className="text-grisHeading text-xs">
                      {row.archivos ? "no" : "si"}
                    </p>
                  </div>
                  <div>
                    <p className="text-grisHeading text-xs">
                      {row.examen ? "no" : "si"}
                    </p>
                  </div>
                  <div>
                    <p className="text-grisHeading text-xs">{row.historial}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent className="p-2" value="retroalimentacion"></TabsContent>
        </Tabs>
      </div>
      <div className="w-[280px] flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg shrink-0"></div>
    </div>
  );
}

export default MainOrgDev;
