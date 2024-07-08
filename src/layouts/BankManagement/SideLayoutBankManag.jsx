import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { bagCheck, cash, card, newspaper } from "ionicons/icons";
import TopMenu from "../Masters/Menus/TopMenu";

function SideLayoutBankManag() {
  const location = useLocation();
  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex flex-col gap-4">
        {/* top block */}
        <div className="flex w-[280px] flex-col gap-4 rounded-lg bg-gris px-8 py-4">
          <TopMenu main={"/back-management"} />
        </div>

        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris p-4">
          <p className="px-4 font-poppins text-lg font-semibold text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4">
            <NavLink
              to="/bank-management"
              className={({ isActive }) =>
                isActive && location.pathname === "/bank-management"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={bagCheck} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Cuentas</p>
                  <p className="text-[10px] font-medium">Bancarias</p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to="/bank-management/collection"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={cash} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Cobros</p>
                  <p className="text-[10px] font-medium">General</p>
                </div>
              </div>
            </NavLink>
            
            <NavLink
              to="/bank-management/2"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={card} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Pagos</p>
                  <p className="text-[10px] font-medium">General</p>
                </div>
              </div>
            </NavLink>
            
            <NavLink
              to="/bank-management/3"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={newspaper} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Conciliaciones</p>
                  <p className="text-[10px] font-medium">Bancarias</p>
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

export default SideLayoutBankManag;

export async function Action({ request }) {
  
}
