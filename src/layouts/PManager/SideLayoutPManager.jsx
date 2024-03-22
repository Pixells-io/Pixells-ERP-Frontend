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
import {
  appsSharp,
  checkmarkCircle,
  disc,
  flag,
  megaphone,
  person,
  syncCircle,
} from "ionicons/icons";

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
                  <p className="font-medium text-base ">Increase sales</p>
                  <p className="font-medium text-[10px]">Comercial Objective</p>
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
                  <p className="font-medium ">Upgrade facilities</p>
                  <p className="font-medium text-[10px]">General Objective</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/crm/progress"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gris2"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon
                  icon={flag}
                  size="large"
                  className="shrink-0"
                ></IonIcon>

                <div className="w-full truncate">
                  <p className="font-medium truncate ">
                    Improve internal work on projects
                  </p>
                  <p className="font-medium text-[10px]">RRHH Objective</p>
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
                <IonIcon
                  icon={flag}
                  size="large"
                  className="shrink-0"
                ></IonIcon>

                <div className="w-full truncate">
                  <p className="font-medium truncate">
                    Improve our financial lorem ipsum
                  </p>
                  <p className="font-medium text-[10px]">Financial Objective</p>
                </div>
              </div>
            </NavLink>
          </div>

          {/* separator */}
          <div className="border-b border-gris2 my-4"></div>

          {/* menu bottom */}
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
                <IonIcon icon={megaphone} size="large"></IonIcon>

                <div>
                  <p className="font-medium text-base ">Today</p>
                  <p className="font-medium text-[10px]">Activities</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/crm"
              className={({ isActive }) =>
                isActive && location.pathname === "/crm"
                  ? "text-blue-500"
                  : "text-gris2"
              }
            >
              <div className="flex items-center gap-6 ">
                <IonIcon icon={checkmarkCircle} size="large"></IonIcon>

                <div>
                  <p className="font-medium text-base ">Activities</p>
                  <p className="font-medium text-[10px]">Summary</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/crm"
              className={({ isActive }) =>
                isActive && location.pathname === "/crm"
                  ? "text-blue-500"
                  : "text-gris2"
              }
            >
              <div className="flex items-center gap-6 ">
                <IonIcon icon={syncCircle} size="large"></IonIcon>

                <div>
                  <p className="font-medium text-base ">Status</p>
                  <p className="font-medium text-[10px]">Activities</p>
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
