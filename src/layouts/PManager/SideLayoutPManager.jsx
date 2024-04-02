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
import { checkmarkCircle, flag, megaphone, syncCircle } from "ionicons/icons";

import TopMenuCRM from "../CRM/components/TopMenuCRM";
import ObjectiveLink from "./components/ObjectiveLink";
import NewObjectiveForm from "./components/Form/NewObjectiveForm";

import { saveNewObjective } from "./utils";

function SideLayoutPManager() {
  const objectives = useLoaderData();
  // console.log(objectives.data);
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

          <NewObjectiveForm />

          {/*menu top */}
          <div className="flex flex-col gap-4">
            {objectives?.data.map((objective, i) => (
              <ObjectiveLink key={i} objective={objective} />
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
              to="/project-manager/activities"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gris2"
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
                isActive ? "text-blue-500" : "text-gris2"
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

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewObjective(data);
  console.log(validation);

  // if (validation) {
  //     return validation;
  // }

  return redirect("/project-manager");
}
