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
  addCommentLead,
  closingLeadForm,
  followupLeadForm,
  onboardingLeadForm,
  payLeadForm,
  potencialLeadForm,
  proposalLeadForm,
  prospectLeadForm,
} from "./utils";
import NavigationHeader from "@/components/navigation-header";

function MainLeads() {
  const location = useLocation();
  const { data } = useLoaderData();

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              LEADS DASHBOARD
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#8F8F8F]">
            <div className="text-xs">
              {data?.length} {data?.length > 1 ? "leads" : "lead"}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div
            className={`space-evenly flex w-fit items-center gap-4 rounded-full bg-grisHeading px-4 py-1`}
          >
            <div className="flex text-primario">
              <IonIcon
                icon={globeOutline}
                className="h-6 w-6 stroke-1"
              ></IonIcon>
            </div>
            <div className="flex items-center gap-4">
              <p className={`text-2xl text-primario`}>&bull;</p>
              <p className="text-sm font-semibold uppercase text-white">
                LEADS
              </p>
            </div>
          </div>

          <div className="ml-72 flex gap-4">
            <NavLink
              to="/crm/leads"
              className={({ isActive }) =>
                isActive && location.pathname === "/crm/leads"
                  ? `flex h-6 w-auto items-center rounded-xl bg-primario px-4 text-[11px] font-medium text-white`
                  : `flex h-6 w-auto items-center rounded-xl bg-blancoBox2 px-4 text-[11px] font-medium text-grisHeading`
              }
            >
              Dashboard
            </NavLink>

            {/* <NavLink
              to="/crm/leads/timeline"
              className={({ isActive }) =>
                isActive
                  ? `flex h-6 w-auto items-center rounded-xl bg-primario px-4 text-[11px] font-medium text-white`
                  : `flex h-6 w-auto items-center rounded-xl bg-blancoBox2 px-4 text-[11px] font-medium text-grisHeading`
              }
            >
              Timeline
            </NavLink>
            <NavLink
              to="/crm/leads/timeline"
              className={({ isActive }) =>
                isActive
                  ? `flex h-6 w-auto items-center rounded-xl bg-primario px-4 text-[11px] font-medium text-white`
                  : `flex h-6 w-auto items-center rounded-xl bg-blancoBox2 px-4 text-[11px] font-medium text-grisHeading`
              }
            >
              Past On Boardings
            </NavLink> */}
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
      return await onboardingLeadForm(data);

    case "add-comment-lead":
      return await addCommentLead(data);

    default:
      break;
  }
}
