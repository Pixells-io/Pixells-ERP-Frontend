import React from "react";

import {
  NavLink,
  useLocation,
  Outlet,
  useLoaderData,
  Form,
} from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  add,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Button } from "@/components/ui/button";

function CrmDashboard() {
  const location = useLocation();
  /*const { data } = useLoaderData();*/

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
            {/* 
            <div className="text-xs">
              {data?.length} {data?.length > 1 ? "leads" : "lead"}
            </div>
            */}
          </div>
        </div>

        <div className="flex items-center">
          <div className="space-evenly flex w-fit items-center gap-4 rounded-lg bg-grisHeading px-6 py-2">
            <p className="font-roboto text-xs font-semibold uppercase text-white">
              Proceso 1
            </p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost">
                  <IonIcon
                    icon={add}
                    size={32}
                    className="text-4xl text-primario"
                  ></IonIcon>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="h-[300px] w-64 overflow-scroll">
                <DropdownMenuLabel>Select services to show</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="flex flex-col gap-2">
                  <Form
                    action="/sales/progress"
                    method="post"
                    className="flex h-full flex-col gap-2"
                  >
                    <input type="hidden" value="set-services" name="action" />
                    <div className="px-4 pt-4">
                      <SelectRouter
                        name="serviceId"
                        //options={options}
                        isMulti={true}
                        placeholder="Select services"
                      />
                    </div>
                    <div className="flex self-end px-4 pt-4">
                      <Button
                        type="submit"
                        className="w-fit bg-primarioBotones px-6"
                      >
                        Add
                      </Button>
                    </div>
                  </Form>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

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

        <Outlet />
      </div>
    </div>
  );
}

export default CrmDashboard;

export async function Action({ request }) {
  /*const data = await request.formData();
  const action = data.get("action");

  console.log(request, action);

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
  }*/
}
