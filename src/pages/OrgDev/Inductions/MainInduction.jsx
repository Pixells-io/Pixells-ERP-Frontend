import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, informationCircle } from "ionicons/icons";

const DATA = [
  {
    nombre: "Don Fomularo",
    puesto: "Director Comercial",
    estatus: "Pendiente",
    fecha: "Pendiente",
    calificacion: "Pendiente",
  },
  {
    nombre: "Rodrigo Prerez",
    puesto: "Ejecutivo Comercial",
    estatus: "Pendiente",
    fecha: "Pendiente",
    calificacion: "Pendiente",
  },
  {
    nombre: "Clarissa Reynold's",
    puesto: "Puesto",
    estatus: "Hecho",
    fecha: "12 Mayo 24",
    calificacion: "87",
  },
  {
    nombre: "Daniel Rios",
    puesto: "General",
    estatus: "Pendiente",
    fecha: "Pendiente",
    calificacion: "Pendiente",
  },
  {
    nombre: "Fernando Suarez",
    puesto: "Area",
    estatus: "Pendiente",
    fecha: "Pendiente",
    calificacion: "Pendiente",
  },
  {
    nombre: "Luis Torres",
    puesto: "Puesto",
    estatus: "Hecho",
    fecha: "12 Mayo 24",
    calificacion: "45",
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

function MainInduction() {
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
            Inducciones
          </p>
        </div>

        <div></div>

        <div className="bg-blancoBg rounded-lg pt-2">
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-5 w-full py-2 px-4 text-center">
              <div className="text-left pl-4">
                <p className="text-grisText font-semibold text-sm">NOMBRE</p>
              </div>
              <div>
                <p className="text-grisText font-semibold text-sm">PUESTO</p>
              </div>
              <div>
                <p className="text-grisText font-semibold text-sm">ESTATUS</p>
              </div>
              <div>
                <p className="text-grisText font-semibold text-sm">FECHA</p>
              </div>
              <div>
                <p className="text-grisText font-semibold text-sm">
                  CALIFICACIÓN
                </p>
              </div>
            </div>
            <div className="flex flex-col py-2 px-4 text-center gap-2">
              {DATA.map((row, i) => (
                <div key={i} className="grid grid-cols-5 w-full border-t py-4">
                  <div className="text-left pl-4">
                    <p className="text-grisHeading text-xs">{row.nombre}</p>
                  </div>
                  <div>
                    <p className="text-grisHeading text-xs">{row.puesto}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p
                      className={
                        row?.estatus == "Hecho"
                          ? "bg-[#00A25940] text-[#00A259] text-xs rounded-full py-1 px-3 w-fit"
                          : "bg-[#7794F940] text-[#7794F9] text-xs rounded-full py-1 px-3 w-fit"
                      }
                    >
                      {row.estatus}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p
                      className={
                        row?.fecha !== "Pendiente"
                          ? "border border-[#7794F9] text-[#7794F9] text-xs rounded-full py-1 px-3 w-fit"
                          : "bg-[#7794F940] text-[#7794F9] text-xs rounded-full py-1 px-3 w-fit"
                      }
                    >
                      {row.fecha}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p
                      className={
                        row?.calificacion !== "Pendiente"
                          ? "border border-[#00A259] text-[#00A259] text-xs rounded-full py-1 px-3 w-fit"
                          : "bg-[#7794F940] text-[#7794F9] text-xs rounded-full py-1 px-3 w-fit"
                      }
                    >
                      {row.calificacion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

export default MainInduction;
