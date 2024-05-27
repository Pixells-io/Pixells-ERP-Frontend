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
import { lockOpen, person } from "ionicons/icons";
import TopMenu from "../Masters/Menus/TopMenu";
import { saveNewTicket } from "@/pages/Tickets/utils";

function SideLayoutTickets() {
  const services = useLoaderData();
  const navigation = useNavigation();
  const location = useLocation();
  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      <div className="flex flex-col gap-4">
        {/* top block */}
        <div className="flex flex-col bg-gris gap-4 rounded-lg px-8 py-4 w-[280px]">
          <TopMenu main={"/tickets"} />
        </div>

        {/*bottom block */}
        <div className="flex flex-col gap-4 bg-gris h-full rounded-md p-4">
          <p className="font-semibold text-lg font-poppins text-grisHeading px-4">
            Menu
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4">
            <NavLink
              to="/organization"
              className={({ isActive }) =>
                isActive && location.pathname === "/organization"
                  ? "text-primario bg-[#E8E8E8] rounded-lg w-full px-4"
                  : "text-gris2 hover:bg-[#EAEAEA] hover:rounded-lg w-full px-4"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={person} size="large"></IonIcon>
                <div>
                  <p className="font-medium text-base">User</p>
                  <p className="font-medium text-[10px]">Management</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/organization/access"
              className={({ isActive }) =>
                isActive
                  ? "text-primario bg-[#E8E8E8] rounded-lg w-full px-4"
                  : "text-gris2 hover:bg-[#EAEAEA] hover:rounded-lg w-full px-4"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={lockOpen} size="large"></IonIcon>
                <div>
                  <p className="font-medium text-base">Access</p>
                  <p className="font-medium text-[10px]">Control</p>
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

export default SideLayoutTickets;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewTicket(data);

  return validation;
}
