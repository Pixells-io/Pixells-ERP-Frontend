import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { library, documentText, book, briefcase } from "ionicons/icons";
import TopMenu from "../Masters/Menus/TopMenu";

function SideLayoutAccounting() {
  const location = useLocation();
  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex flex-col gap-4">
        {/* top block */}
        <div className="flex w-[280px] flex-col gap-4 rounded-lg bg-gris px-8 py-4">
          <TopMenu main={"/analytics"} />
        </div>

        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris p-4">
          <p className="px-4 font-poppins text-lg font-semibold text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4">
            <NavLink
              to="/accounting"
              className={({ isActive }) =>
                isActive && location.pathname === "/accounting"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={library} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Catálogo</p>
                  <p className="text-[10px] font-medium">De Cuentas</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/accounting/policy"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={documentText} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Asientos</p>
                  <p className="text-[10px] font-medium">Contables</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/accounting/book"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={book} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Libro</p>
                  <p className="text-[10px] font-medium">Diario</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/accounting/cost"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={briefcase} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Centro</p>
                  <p className="text-[10px] font-medium">De Costos</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideLayoutAccounting;

export async function Action({ request }) {}
