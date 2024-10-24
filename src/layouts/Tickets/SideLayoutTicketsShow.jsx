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
import {
  addDocumentTicket,
  saveFollowUpTicket,
  saveFollowUpTicketComments,
  saveTicketFinish,
  saveTicketResponsible,
} from "@/pages/Tickets/utils";

function SideLayoutTicketsShow() {
  const { data } = useLoaderData();

  const ticket = data[0];
  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex flex-col gap-4">
        {/* top block */}
        <div className="flex w-[280px] flex-col gap-4 rounded-lg bg-gris px-8 py-4">
          <TopMenu main={"/tickets"} />
        </div>

        {/*bottom block */}
        <div className="flex h-full w-[280px] flex-col gap-4 overflow-auto rounded-md bg-gris p-4">
          <p className="px-4 font-poppins text-base font-semibold text-grisHeading">
            Information
          </p>

          {/*menu top */}
          <div className="ml-4 flex flex-col gap-4">
            <div>
              <span className="rounded-lg border border-grisHeading px-3 py-1 text-xs font-medium text-grisHeading">
                {ticket.date}
              </span>
            </div>
            {/* Info Card */}
            <div className="pt-3">
              <p className="font-poppins text-base font-semibold text-grisHeading">
                {ticket.issue}
              </p>
              {/* Created Days Count Card */}
              <div className="mt-5 flex">
                <div className="w-1/5 rounded-[6px] bg-blancoBox2 px-4 py-2 text-center">
                  <span className="text-3xl font-bold text-grisText">
                    {ticket.created}
                  </span>
                </div>
                <div className="ml-4 w-4/5">
                  <div className="mt-1">
                    <span className="text-base font-medium text-grisText">
                      Created
                    </span>
                  </div>
                  <div className="mt-[-5px]">
                    <span className="text-[10px] font-medium text-grisSubText">
                      Days Ago
                    </span>
                  </div>
                </div>
              </div>
              {/* Created By Card */}
              <div className="mt-5 flex">
                <div className="w-1/5 rounded-[6px] bg-blancoBox2 text-center">
                  <img
                    src={ticket.user_img}
                    className="h-full w-full rounded-[6px]"
                  />
                </div>
                <div className="ml-4 w-4/5">
                  <div className="mt-1">
                    <span className="text-base font-medium text-grisText">
                      Created
                    </span>
                  </div>
                  <div className="mt-[-5px]">
                    <span className="text-[10px] font-medium text-grisSubText">
                      {ticket.creator}
                    </span>
                  </div>
                </div>
              </div>
              {/* Updated Days Count Card */}
              <div className="mt-5 flex">
                <div className="w-1/5 rounded-[6px] bg-[#D7586B40] px-4 py-2 text-center">
                  <span className="text-3xl font-bold text-[#D7586B]">
                    {ticket.updated}
                  </span>
                </div>
                <div className="ml-4 w-4/5">
                  <div className="mt-1">
                    <span className="text-base font-medium text-grisText">
                      Updated
                    </span>
                  </div>
                  <div className="mt-[-5px]">
                    <span className="text-[10px] font-medium text-grisSubText">
                      Days Ago
                    </span>
                  </div>
                </div>
              </div>
              {/* Status Bar */}
              <div className="mt-6 flex gap-6">
                {ticket.importance === "Low" ? (
                  <span className="rounded-2xl border border-blue-500 px-3 py-1 text-xs font-medium text-blue-500">
                    {ticket.importance}
                  </span>
                ) : ticket.importance === "Medium" ? (
                  <span className="0 rounded-2xl border border-[#d6586b] px-3 py-1 text-xs font-medium text-[#d6586b]">
                    {ticket.importance}
                  </span>
                ) : (
                  <span className="rounded-2xl border border-red-600 px-3 py-1 text-xs font-medium text-red-600">
                    {ticket.importance}
                  </span>
                )}
                <span className="rounded-2xl border border-[#444f] px-3 py-1 text-xs font-medium text-[#444f]">
                  {ticket.status}
                </span>
              </div>
              {/* Description Bar */}
              <div>
                <p className="mt-6 font-poppins text-base font-semibold text-grisHeading">
                  Description
                </p>
                <span className="font-roboto text-xs font-normal text-grisSubText">
                  {ticket.description}
                </span>
              </div>
              {/* Category */}
              <div>
                <p className="mb-2 mt-4 font-poppins text-base font-semibold text-grisHeading">
                  Category
                </p>
                <span className="rounded-2xl bg-primario px-3 py-1 text-xs font-medium text-white">
                  {ticket.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideLayoutTicketsShow;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("form")) {
    case "1":
      //Follow Up
      await saveFollowUpTicket(data);
      break;

    case "2":
      //Follow Up Comments
      await saveFollowUpTicketComments(data);
      break;

    case "3":
      //Responsible
      await saveTicketResponsible(data);
      break;

    case "4":
      await addDocumentTicket(data);
      break;

    default:
      break;
  }

  return "1";
}
