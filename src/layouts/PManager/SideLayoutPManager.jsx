import React, { useState } from "react";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  redirect,
  NavLink,
  useLocation,
} from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { checkmarkCircle, flag, megaphone, syncCircle } from "ionicons/icons";

import TopMenuCRM from "../CRM/components/TopMenuCRM";
import ObjectiveLink from "./components/ObjectiveLink";
import NewObjectiveForm from "./components/Form/NewObjectiveForm";

import { saveNewObjective } from "./utils";

function SideLayoutPManager() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const { objectives, areas } = useLoaderData();
  const [objectiveCtx, setObjectivesCtx] = useState(objectives);

  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      <div className="flex flex-col gap-4 w-[280px] shrink-0">
        {/* top block */}
        <div className="flex flex-col bg-gris gap-4 rounded-lg px-8 py-4">
          <TopMenuCRM />
        </div>

        {/*bottom block */}
        <div className="flex flex-col gap-4 bg-gris h-full rounded-md py-8 px-4">
          <p className="font-semibold text-lg font-poppins text-grisHeading px-4">
            Strategic Objectives
          </p>

          <div className="px-4">
            <NewObjectiveForm
              areas={areas?.data}
              open={open}
              setOpen={setOpen}
            />
          </div>

          {/*menu top */}
          <div className="flex flex-col gap-4">
            {objectives?.data?.map((objective, i) => (
              <ObjectiveLink key={i} objective={objective} areas={areas} />
            ))}
          </div>

          {/* separator */}
          <div className="border-b border-gris2 my-4"></div>

          {/* menu bottom */}
          <div className="flex flex-col gap-4">
            <NavLink
              to="/project-manager"
              className={({ isActive }) =>
                isActive && location.pathname === "/project-manager"
                  ? "text-primario bg-[#E8E8E8] rounded-lg w-full px-4"
                  : "text-gris2 hover:bg-[#EAEAEA] hover:rounded-lg w-full px-4"
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
              to="/project-manager/activities"
              className={({ isActive }) =>
                isActive
                  ? "text-primario bg-[#E8E8E8] rounded-lg w-full px-4"
                  : "text-gris2 hover:bg-[#EAEAEA] hover:rounded-lg w-full px-4"
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
              to="/project-manager/status"
              className={({ isActive }) =>
                isActive
                  ? "text-primario bg-[#E8E8E8] rounded-lg w-full px-4"
                  : "text-gris2 hover:bg-[#EAEAEA] hover:rounded-lg w-full px-4"
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
      <Outlet context={[objectiveCtx, setObjectivesCtx]} />
    </div>
  );
}

export default SideLayoutPManager;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewObjective(data);
  console.log(validation);

  // if (validation) {
  //     return validation;
  // }

  return redirect("/project-manager");
}
