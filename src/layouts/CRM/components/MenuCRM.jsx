import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  appsSharp,
  disc,
  documentText,
  folder,
  mail,
  person,
  settings,
} from "ionicons/icons";

const MENU_ITEMS = [
  { path: "/crm", name: "CRM", subname: "Homepage", icon: disc },
  { path: "/crm/leads", name: "Leads", subname: "Dashboard", icon: person },
  {
    path: "/crm/progress",
    name: "Progress",
    subname: "Homepage",
    icon: appsSharp,
  },
  {
    path: "/crm/agreements",
    name: "Agreements",
    subname: "Console",
    icon: documentText,
  },
  {
    path: "/crm/after-sales",
    name: "After sales",
    subname: "Service",
    icon: settings,
  },
  {
    path: "/crm/services",
    name: "Services",
    subname: "Administration",
    icon: folder,
  },
  { path: "/crm/email", name: "Email", subname: "Console", icon: mail },
];

function MenuCRM() {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-4 w-full">
      {MENU_ITEMS?.map((item, i) => (
        <NavLink
          key={i}
          to={`${item.path}`}
          className={
            item.path === "/crm"
              ? ({ isActive }) =>
                  isActive && location.pathname === "/crm"
                    ? "text-primario bg-[#E8E8E8] rounded-lg w-full"
                    : "text-gris2 hover:bg-[#EAEAEA] hover:rounded-lg w-full"
              : ({ isActive }) =>
                  isActive
                    ? "text-primario bg-[#E8E8E8] rounded-lg w-full"
                    : "text-gris2 hover:bg-[#EAEAEA] hover:rounded-lg w-full"
          }
        >
          <div className="flex items-center gap-6 ">
            <IonIcon icon={item.icon} size="large"></IonIcon>

            <div>
              <p className="font-medium text-base ">{item.name}</p>
              <p className="font-medium text-[10px] text-grisSubText">
                {item.subname}
              </p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default MenuCRM;
