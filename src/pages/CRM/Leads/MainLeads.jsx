import React from "react";

import { NavLink, useLocation, Outlet, useLoaderData } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  ellipsisVertical,
  globeOutline,
} from "ionicons/icons";
import {
  closingLeadForm,
  followupLeadForm,
  payLeadForm,
  potencialLeadForm,
  proposalLeadForm,
  prospectLeadForm,
} from "./utils";

function MainLeads() {
  const location = useLocation();
  const { data } = useLoaderData();

  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  text-gris2">
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">crm</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              LEADS DASHBOARD
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div className="text-xs">
              {data?.length} {data?.length > 1 ? "leads" : "lead"}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div
            className={`flex items-center space-evenly gap-4 bg-grisHeading rounded-full px-2 py-1 w-fit`}
          >
            <div className="flex ml-2 text-red-500">
              <IonIcon
                icon={globeOutline}
                className=" w-6 h-6 stroke-1"
              ></IonIcon>
            </div>
            <div className="flex items-center gap-4">
              <p className={`text-red-500 text-2xl`}>&bull;</p>
              <p className="text-white uppercase text-sm font-semibold">
                LEADS
              </p>
            </div>
            <div className="flex">
              <IonIcon
                icon={ellipsisVertical}
                className="text-white w-6 h-6 stroke-1"
              ></IonIcon>
            </div>
          </div>

          <div className="flex gap-4 ml-72">
            <NavLink
              to="/crm/leads"
              className={({ isActive }) =>
                isActive && location.pathname === "/crm/leads"
                  ? `h-6 w-auto bg-primario text-white text-[11px] font-medium rounded-xl px-4 flex items-center`
                  : `h-6 w-auto bg-blancoBox2 text-grisHeading text-[11px] font-medium rounded-xl px-4 flex items-center`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/crm/leads/timeline"
              className={({ isActive }) =>
                isActive
                  ? `h-6 w-auto bg-primario text-white text-[11px] font-medium rounded-xl px-4 flex items-center`
                  : `h-6 w-auto bg-blancoBox2 text-grisHeading text-[11px] font-medium rounded-xl px-4 flex items-center`
              }
            >
              Timeline
            </NavLink>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default MainLeads;

export async function multiFormAction({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "prospect":
      return await prospectLeadForm(data);

    case "potencial":
      return await potencialLeadForm(data);

    case "followup":
      return await followupLeadForm(data);

    case "proposal":
      return await proposalLeadForm(data);

    case "closing":
      return await closingLeadForm(data);

    case "pay":
      return await payLeadForm(data);

    case "onboarding":
      return await payLeadForm(data);

    default:
      break;
  }
}
