import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavigationHeader from "@/components/navigation-header";
import { IonIcon } from "@ionic/react";
import { add, searchOutline } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { NavLink, Outlet } from "react-router-dom";

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

const OptionsNavLink = [
  { id: 1, name: "Actualización del Sistema POS" },
  { id: 2, name: "Lombriz 1" },
  { id: 3, name: "APERTURA DE SUCURSAL" },
];

function MainObjetives() {
  return (
    <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 overflow-auto bg-[#FBFBFB] px-14 py-3">
      {/* navigation inside */}
      <NavigationHeader />
      {/* top content */}
      <div className="flex items-center gap-8">
        <h2 className="font-poppins text-xl font-bold text-[#44444F]">
          PROJECT MANAGER
        </h2>
        <div className="flex items-center gap-3 text-[#8F8F8F]">
          <div className="text-xs">3 Objetivos</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">27 Activities</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">8 Proyectos</div>
        </div>
      </div>
      <h2 className="font-poppins text-xl font-bold text-[#44444F]">
        OBJETIVO
      </h2>

      <div className="flex overflow-auto">
        <div className="flex w-3/5 flex-row gap-x-2 overflow-auto py-1">
          {OptionsNavLink.map((nav, index) => (
            <NavLink
              key={index}
              to={"/project-manager2/objectives/" + nav.id}
              className={({ isActive }) =>
                isActive
                  ? "min-w-fit rounded-[10px] bg-[#F1F1F1] px-3 py-1.5 text-xs font-normal text-grisHeading"
                  : "min-w-fit rounded-[10px] px-3 py-1.5 text-xs font-normal text-grisSubText"
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
        <div className="flex w-2/5 justify-end gap-x-4">
          <div className="flex items-center justify-center">
            <IonIcon icon={searchOutline} className="h-6 w-6 text-[#CCCCCC]" />
          </div>

          <Button
            type={"button"}
            className="flex h-[30px] items-center justify-center rounded-xl bg-[#00A9B3] px-3 hover:bg-[#00A9B3]"
          >
            <span className="text-xs font-medium">Compartir</span>
          </Button>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default MainObjetives;
