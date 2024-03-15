import React from "react";
import { NavLink } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { appsSharp, disc, person } from "ionicons/icons";

function MenuCRM() {
  return (
    <div className="flex flex-col gap-4">
      <NavLink
        to="/crm/homepage"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gris2"
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
    </div>
  );
}

export default MenuCRM;
