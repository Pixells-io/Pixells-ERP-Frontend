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

  /*Style to options */
  function WrappedSidebar({ children }) {
    return (
      <div className="flex h-full w-full">
        <div className="flex h-full w-[280px] shrink-0 flex-col rounded-tl-xl border-r border-[#D7D7D7] bg-[#FBFBFB] p-4">
          {children}
        </div>
        <Outlet context={{ actionInfo }} />
      </div>
    );
  }

  return (
    <WrappedSidebar>
      {/* top block */}
      <div className="px-4">
        <TopMenuOrganization />
      </div>

      {/*bottom block */}
      <div className="flex flex-col gap-2 px-4 pt-16">
      <p className="font-poppins text-[18px] font-semibold text-[#44444F]">
          Menu
        </p>
      </div>
      <div className="flex items-center pt-20">
        {/*menu top */}
        <div className="flex flex-col gap-4">
          <NavLink
            to="/organization"
            className={({ isActive }) =>
              isActive && location.pathname === "/organization"
                ? "w-[219px] rounded-[6px] bg-[#E8E8E8] px-4 text-primario"
                : "w-full px-4 text-[#696974] hover:rounded-[6px] hover:w-[219px] hover:h-[43px] hover:bg-[#EAEAEA]"
            }
          >
            <div className="flex justify-start items-center gap-8">
              <IonIcon icon={person} size="large"></IonIcon>
             <div className="flex flex-col">
                <p className="text-[16px] font-medium">Gestión</p>
                <p className="text-[10px] font-medium">De Usuarios</p>
                </div>
            </div>
          </NavLink>
          <NavLink
            to="/organization/access"
            className={({ isActive }) =>
              isActive
                ? "w-[219px] rounded-[6px] bg-[#E8E8E8] px-4 text-primario"
                : "px-4 text-[#696974] hover:rounded-[6px] hover:w-[219px] hover:h-[43px] hover:bg-[#EAEAEA]"
            }
          >
           <div className="flex justify-start items-center gap-8">
              <IonIcon icon={lockOpen} size="large"></IonIcon>
              <div className="flex flex-col">
              <p className="text-[16px] font-medium">Control</p>
                <p className="text-[10px] font-medium">De Usuarios</p>
              </div>
                
            </div>
          </NavLink>
        </div>
      </div>
    </WrappedSidebar>
  );
}

export default SideLayoutOrganization;
