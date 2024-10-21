import React, { useState } from "react";
import NavigationHeader from "@/components/navigation-header";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { NavLink, Outlet } from "react-router-dom";



const OptionsNavLink = [
  { id: 1, name: "Actualización del Sistema POS" },
  { id: 2, name: "Lombriz 1" },
  { id: 3, name: "APERTURA DE SUCURSAL" },
];

function MainObjetives() {
  return (
    <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 overflow-auto bg-[#FBFBFB] py-3">
      <div className="px-14">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}
      </div>
      <div className="flex items-center gap-8 px-14">
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
      <h2 className="font-poppins text-xl font-bold text-[#44444F] px-14">
        OBJETIVO
      </h2>

      <div className="flex overflow-auto px-14">
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
