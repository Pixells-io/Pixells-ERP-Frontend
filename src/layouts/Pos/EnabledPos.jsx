import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { gridOutline, list, lockClosed, settingsOutline } from "ionicons/icons";
import CashInflow from "./Modals/CashInflow/CashInflow";
import CashOutflow from "./Modals/CashOutflow/CashOutflow";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ConsultArticle from "./Modals/ConsultArticle/ConsultArticle";
import PriceChecker from "./Modals/PriceChecker/PriceChecker";
import Refund from "./Modals/Refund/Refund";

const EnabledPos = ({ setIsDisabled, setIsGrid, isGrid }) => {
  const location = useLocation();

  const getDate = () => {
    const today = new Date();
    const day = today.getDate();
    const year = today.getFullYear();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[today.getMonth()];

    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  };

  return (
    <div className="flex h-full flex-col px-4 pb-4 font-roboto">
      <div className="w-full pb-4 font-roboto">
        <div className="grid w-full grid-cols-12 gap-x-2 rounded-lg bg-[#F9F9F9] px-4 py-1.5">
          <NavLink
            to="/pos"
            className={`col-span-1 flex h-[64px] w-full flex-col items-center justify-center rounded-2xl ${/^\/pos(\/[0-9]+)?$/.test(location.pathname) ? "bg-grisHeading" : "bg-inherit"}`}
          >
            <h2
              className={`font-poppins text-xl font-bold ${/^\/pos(\/[0-9]+)?$/.test(location.pathname) ? "text-white" : "text-grisHeading"}`}
            >
              Home
            </h2>
            <span
              className={`text-sm font-medium ${/^\/pos(\/[0-9]+)?$/.test(location.pathname) ? "text-grisDisabled" : "text-grisText"}`}
            >
              {getDate()}
            </span>
          </NavLink>
          <div className="col-span-7 flex w-full items-center justify-center">
            <div className="flex w-fit gap-6 overflow-x-auto">
              <ConsultArticle />

              <PriceChecker />

              <CashInflow />

              <CashOutflow />

              <Refund />

              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="w-full cursor-pointer whitespace-nowrap rounded-3xl bg-[#F0F0F0] p-3 font-roboto text-xs font-medium text-[#44444F] hover:bg-blancoBox2"
                >
                  <label>MÁS OPCIONES</label>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-2xl px-0 py-5">
                  <DropdownMenuItem className="w-full px-4 text-sm font-normal text-grisHeading hover:cursor-pointer focus:bg-hoverModal">
                    CORTE
                  </DropdownMenuItem>
                  <DropdownMenuItem className="w-full px-4 text-sm font-normal text-grisHeading hover:cursor-pointer focus:bg-hoverModal">
                    REIMPRIMIR TICKET
                  </DropdownMenuItem>
                  <DropdownMenuItem className="w-full px-4 text-sm font-normal text-grisHeading hover:cursor-pointer focus:bg-hoverModal">
                    MERCANCÍAS
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="overflow-y-none col-span-4 flex h-full w-full justify-center">
            <div className="flex h-full w-fit gap-x-3 overflow-x-auto">
              <div className="flex flex-col gap-y-1">
                <div>
                  <label className="text-xs font-semibold text-grisText">
                    Tienda
                  </label>
                </div>
                <div>
                  <label className="rounded-3xl border border-primario px-5 py-2 text-xs font-medium text-[#44444F]">
                    Andares
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-y-1">
                <div>
                  <label className="text-xs font-semibold text-grisText">
                    Vendedor
                  </label>
                </div>
                <div>
                  <label className="rounded-3xl border border-primario px-5 py-2 text-xs font-medium text-[#44444F]">
                    Catalina
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-y-1">
                <div>
                  <label className="text-xs font-semibold text-grisText">
                    Caja
                  </label>
                </div>
                <div>
                  <label className="whitespace-nowrap rounded-3xl border border-primario px-5 py-2 text-xs font-medium text-[#44444F]">
                    Caja 1
                  </label>
                </div>
              </div>
              <div className="justfiy-center flex items-center gap-x-2">
                <button
                  type="button"
                  onClick={() => setIsGrid(true)}
                  className={`h-[28px] w-[30px] rounded-lg p-1 ${isGrid ? "bg-primarioBotones text-white" : "bg-blancoBox text-[#44444F]"}`}
                >
                  <IonIcon icon={gridOutline}></IonIcon>
                </button>
                <button
                  type="button"
                  onClick={() => setIsGrid(false)}
                  className={`h-[28px] w-[30px] rounded-lg p-1 ${isGrid ? "bg-blancoBox text-[#44444F]" : "bg-primarioBotones text-white"}`}
                >
                  <IonIcon icon={list}></IonIcon>
                </button>
                <button
                  type="button"
                  onClick={() => setIsDisabled(true)}
                  className="h-[28px] w-[30px] rounded-lg bg-blancoBox p-1 text-grisText text-primarioBotones"
                >
                  <IonIcon icon={lockClosed}></IonIcon>
                </button>
                <NavLink
                  to="/pos/configuration"
                  className={({ isActive }) =>
                    `flex h-[28px] w-[30px] items-center justify-center rounded-lg p-1 ${location.pathname == "/pos/configuration" ? "bg-primarioBotones text-white" : "bg-blancoBox"} text-[#44444F]`
                  }
                >
                  <IonIcon icon={settingsOutline}></IonIcon>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet context={[isGrid]} />
    </div>
  );
};

export default EnabledPos;
