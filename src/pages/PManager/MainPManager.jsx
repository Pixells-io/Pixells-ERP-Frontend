import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { chevronBackCircle, chevronForwardCircle } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { Button } from "@/components/ui/button";

function MainPManager() {
  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 text-gris2">
            <IonIcon icon={chevronBackCircle} className="w-12 h-12"></IonIcon>
            <IonIcon
              icon={chevronForwardCircle}
              className="w-12 h-12"
            ></IonIcon>
          </div>
          <div>project-manager</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-2xl text-[#44444F]">
              PROJECT MANAGER
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div>4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div>25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div>43 Activities</div>
          </div>
        </div>

        {/* top content sub */}
        <div className="flex items-center gap-32 pl-3 pt-4">
          <div className="flex flex-col gap-2">
            <h2 className=" font-poppins font-bold text-2xl text-[#44444F]">
              Increase Sales
            </h2>
            <span className="font-medium text-sm text-grisText">
              Commercial Objective
            </span>
          </div>
          <div className="flex gap-2 text-[#8F8F8F] self-start">
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
          </div>
        </div>

        {/* buttons and filters */}

        <div>
          <Button
            variant="ghost"
            className="text-primario text-base font-semibold"
          >
            + New Goal
          </Button>
        </div>

        <div className="flex gap-4">
          <NavLink
            to="/project-manager"
            className={({ isActive }) =>
              isActive && location.pathname === "/project-manager"
                ? `h-6 w-auto bg-primario text-white text-[10px] font-medium rounded-xl px-4 flex items-center`
                : `h-6 w-auto bg-blancoBox2 text-grisHeading text-[10px] font-medium rounded-xl px-4 flex items-center`
            }
          >
            Board
          </NavLink>
          <NavLink
            to="/project-manager/csf"
            className={({ isActive }) =>
              isActive
                ? `h-6 w-auto bg-primario text-white text-[10px] font-medium rounded-xl px-4 flex items-center`
                : `h-6 w-auto bg-blancoBox2 text-grisHeading text-[10px] font-medium rounded-xl px-4 flex items-center`
            }
          >
            CSF
          </NavLink>
          <NavLink
            to="/project-manager/projects"
            className={({ isActive }) =>
              isActive
                ? `h-6 w-auto bg-primario text-white text-[10px] font-medium rounded-xl px-4 flex items-center`
                : `h-6 w-auto bg-blancoBox2 text-grisHeading text-[10px] font-medium rounded-xl px-4 flex items-center`
            }
          >
            Projects
          </NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default MainPManager;
