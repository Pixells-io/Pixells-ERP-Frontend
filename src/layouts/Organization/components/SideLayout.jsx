import React, { useEffect, useState } from "react";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  redirect,
  NavLink,
  useLocation,
  useActionData,
} from "react-router-dom";

import TopMenuOrganization from "./TopMenuOrganization";
import { IonIcon } from "@ionic/react";
import { lockOpen, person } from "ionicons/icons";

function SideLayoutOrganization() {
  const services = useLoaderData();
  const navigation = useNavigation();
  const location = useLocation();
  const actionData = useActionData();

  const [actionInfo, setActionInfo] = useState(actionData);

  useEffect(() => {
    if (actionData !== undefined) {
      setActionInfo(actionData);
    }
  }, [actionData]);

  // console.log("actionData Sidelayout ", actionData);

  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex flex-col gap-4">
        {/* top block */}
        <div className="flex w-[280px] flex-col gap-4 rounded-lg bg-gris px-8 py-4">
          <TopMenuOrganization />
        </div>

        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris p-4">
          <p className="px-4 font-poppins text-lg font-semibold text-grisHeading">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4">
            <NavLink
              to="/organization"
              className={({ isActive }) =>
                isActive && location.pathname === "/organization"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={person} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">User</p>
                  <p className="text-[10px] font-medium">Management</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/organization/access"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={lockOpen} size="large"></IonIcon>
                <div>
                  <p className="text-base font-medium">Access</p>
                  <p className="text-[10px] font-medium">Control</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet context={{ actionInfo }} />
    </div>
  );
}

export default SideLayoutOrganization;
