import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { lockOpen, person } from "ionicons/icons";
import TopMenu from "../Masters/Menus/TopMenu";
import { saveNewTicket } from "@/pages/Tickets/utils";
import { saveBusinessInformation } from "@/pages/Configurations/utils";

function SideLayoutConfiguration() {
  const location = useLocation();
  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex flex-col gap-4">
        {/* top block */}
        <div className="flex w-[280px] flex-col gap-4 rounded-lg bg-gris px-8 py-4">
          <TopMenu main={"/tickets"} />
        </div>

        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris p-4">
          <p className="px-4 font-poppins text-lg font-semibold text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4">
            <NavLink
              to="/configuration"
              className={({ isActive }) =>
                isActive && location.pathname === "/configuration"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={person} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Information</p>
                  <p className="text-[10px] font-medium">General</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/configuration/integrations"
              className={({ isActive }) =>
                isActive && location.pathname === "/configuration/integrations"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={lockOpen} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Integrations</p>
                  <p className="text-[10px] font-medium">Console</p>
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

export default SideLayoutConfiguration;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveBusinessInformation(data);

  return 1;
}
