import React, { useState } from "react";
import { Outlet, useLoaderData, redirect, NavLink } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  checkmarkCircle,
  listCircle,
  listCircleOutline,
  megaphone,
  syncCircle,
} from "ionicons/icons";

import TopMenuCRM from "../CRM/components/TopMenuCRM";
import ObjectiveLink from "./components/ObjectiveLink";
import NewObjectiveForm from "./components/Form/NewObjectiveForm";

import { saveNewObjective } from "./utils";

function SideLayoutPManager() {
  const [open, setOpen] = useState(false);
  const { objectives, areas } = useLoaderData();

  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex w-[280px] shrink-0 flex-col gap-4">
        {/* top block */}
        <div className="flex flex-col gap-4 rounded-lg bg-gris px-8 py-4">
          <TopMenuCRM />
        </div>

        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris px-4 py-8">
          <p className="px-4 font-poppins text-lg font-semibold text-grisHeading">
            Strategic Objectives
          </p>

          <div className="px-4">
            <NewObjectiveForm
              areas={areas?.data}
              open={open}
              setOpen={setOpen}
            />
            <button type="button" onClick={() => setOpen(!open)}>
              <IonIcon
                icon={addCircleOutline}
                className="h-6 w-6 text-primarioBotones"
              />
            </button>
          </div>

          {/*menu top */}
          <div className="flex max-h-[260px] flex-col gap-4 overflow-scroll">
            {objectives?.data?.map((objective, i) => (
              <ObjectiveLink key={i} objective={objective} areas={areas} />
            ))}
          </div>

          {/* separator */}
          <div className="my-4 border-b border-gris2"></div>

          {/* menu bottom */}
          <div className="flex flex-col gap-4">
            <NavLink
              to="/project-manager"
              className={({ isActive }) =>
                isActive && location.pathname === "/project-manager"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={megaphone} size="large"></IonIcon>

                <div>
                  <p className="text-base font-medium">Today</p>
                  <p className="text-[10px] font-medium">Activities</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/project-manager/activities"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={checkmarkCircle} size="large"></IonIcon>

                <div>
                  <p className="text-base font-medium">Activities</p>
                  <p className="text-[10px] font-medium">Summary</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/project-manager/status"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={syncCircle} size="large"></IonIcon>

                <div>
                  <p className="text-base font-medium">Status</p>
                  <p className="text-[10px] font-medium">Activities</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/project-manager/completed"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={listCircle} size="large"></IonIcon>

                <div>
                  <p className="text-base font-medium">Completed</p>
                  <p className="text-[10px] font-medium">Activities</p>
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

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewObjective(data);

  return redirect("/project-manager");
}
