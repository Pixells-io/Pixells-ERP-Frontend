import TopMenu from "@/layouts/Masters/Menus/TopMenu";
import React from "react";
import { Outlet } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { Calendar } from "@/components/ui/calendar";

function LayoutCalendar() {
  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="bg- flex w-[350px] shrink-0 flex-col gap-4 rounded-xl">
        <div className="flex flex-col gap-4 rounded-lg bg-gris px-4 py-4">
          <TopMenu main={"/"} />
        </div>
        <div className="flex flex-col gap-4 rounded-lg bg-gris px-4 py-4">
          <span className="font-popins text-lg font-semibold text-grisHeading">
            Menu
          </span>
          <button className="flex items-center gap-2 rounded-3xl bg-blancoBox py-3 pl-24">
            <IonIcon
              icon={add}
              size="large"
              className="text-primario"
            ></IonIcon>
            <div>
              <span className="text-roboto text-base font-medium text-grisText">
                Agregar
              </span>
            </div>
          </button>
          <div>
            <Calendar
              mode="single"
              className="rounded-2xl bg-transparent text-grisHeading"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default LayoutCalendar;
