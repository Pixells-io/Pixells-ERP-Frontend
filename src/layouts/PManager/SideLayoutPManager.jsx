import React from "react";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  redirect,
  NavLink,
  useLocation,
} from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { appsSharp, disc, flag, person } from "ionicons/icons";

import TopMenuCRM from "../CRM/components/TopMenuCRM";

function SideLayoutPManager() {
  const services = useLoaderData();
  const navigation = useNavigation();
  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      <div className="flex flex-col gap-4 w-[280px] shrink-0">
        {/* top block */}
        <div className="flex flex-col bg-gris gap-4 rounded-lg px-8 py-4 ">
          <TopMenuCRM />
        </div>

        {/*bottom block */}
        <div className="flex flex-col gap-4 bg-gris h-full rounded-md p-8">
          <p className="font-semibold text-lg font-poppins text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4">
            {/* <FormNewLead navigation={navigation} services={services} /> */}
          </div>

          <div className="border-b border-gris2 my-4"></div>

          {/* menu bottom */}
          {/* <MenuCRM /> */}
          <div className="flex flex-col gap-4">
            <NavLink
              to="/crm"
              className={({ isActive }) =>
                isActive && location.pathname === "/crm"
                  ? "text-blue-500"
                  : "text-gris2"
              }
            >
              <div className="flex items-center gap-6 ">
                <IonIcon icon={flag} size="large"></IonIcon>

                <div>
                  <p className="font-medium text-base ">CRM</p>
                  <p className="font-medium text-[10px]">Homepage</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/crm/leads"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gris2"
              }
            >
              <div className="flex items-center gap-6 ">
                <IonIcon icon={flag} size="large"></IonIcon>

                <div>
                  <p className="font-medium ">Leads</p>
                  <p className="font-medium text-[10px]">Dashboard</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/crm/progress"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gris2"
              }
            >
              <div className="flex items-center gap-6 ">
                <IonIcon icon={flag} size="large"></IonIcon>

                <div>
                  <p className="font-medium ">Progress</p>
                  <p className="font-medium text-[10px]">Dashboard</p>
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

export default SideLayoutPManager;
