import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { pieChart } from "ionicons/icons";
import TopMenu from "../Masters/Menus/TopMenu";

function SideLayoutAnalytic() {
  s;
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
              to="/analytics"
              className={({ isActive }) =>
                isActive && location.pathname === "/analytics"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={pieChart} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Analítica</p>
                  <p className="text-[10px] font-medium">General</p>
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

export default SideLayoutAnalytic;

export async function Action({ request }) {}
