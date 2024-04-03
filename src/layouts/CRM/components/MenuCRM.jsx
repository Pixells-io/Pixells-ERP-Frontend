import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  appsSharp,
  disc,
  folder,
  mail,
  person,
  settings,
} from "ionicons/icons";

function MenuCRM() {
  const location = useLocation();
  return (
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
          <IonIcon icon={disc} size="large"></IonIcon>

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
          <IonIcon icon={person} size="large"></IonIcon>

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
          <IonIcon icon={appsSharp} size="large"></IonIcon>

          <div>
            <p className="font-medium ">Progress</p>
            <p className="font-medium text-[10px]">Dashboard</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to="/crm/post-sales"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gris2"
        }
      >
        <div className="flex items-center gap-6 ">
          <IonIcon icon={settings} size="large"></IonIcon>

          <div>
            <p className="font-medium ">Post-sales</p>
            <p className="font-medium text-[10px]">Service</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to="/crm/services"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gris2"
        }
      >
        <div className="flex items-center gap-6 ">
          <IonIcon icon={folder} size="large"></IonIcon>

          <div>
            <p className="font-medium ">Services</p>
            <p className="font-medium text-[10px]">Administration</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to="/crm/email"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gris2"
        }
      >
        <div className="flex items-center gap-6 ">
          <IonIcon icon={mail} size="large"></IonIcon>

          <div>
            <p className="font-medium ">Email</p>
            <p className="font-medium text-[10px]">Console</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default MenuCRM;
