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

function SideLayoutTicketsShow() {
  const { data } = useLoaderData();

  const ticket = data[0];

  console.log(ticket);

  const location = useLocation();
  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      <div className="flex flex-col gap-4">
        {/* top block */}
        <div className="flex flex-col bg-gris gap-4 rounded-lg px-8 py-4 w-[280px]">
          <TopMenu main={"/tickets"} />
        </div>

        {/*bottom block */}
        <div className="flex flex-col gap-4 bg-gris h-full rounded-md p-4 w-[280px] overflow-auto">
          <p className="font-semibold text-base font-poppins text-grisHeading px-4">
            Information
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4 ml-4">
            <div className="border border-grisHeading rounded-full px-2 py-1 w-28 text-center">
              <span className="font-roboto text-[10px] text-grisHeading">
                {ticket.date}
              </span>
            </div>
            {/* Info Card */}
            <div className="pt-3">
              <p className="font-semibold text-base font-poppins text-grisHeading">
                {ticket.issue}
              </p>
              {/* Created Days Count Card */}
              <div className="flex mt-5">
                <div className="w-1/5 text-center bg-blancoBox2 rounded-xl px-4 py-2">
                  <span className="text-grisText text-3xl">
                    {ticket.created}
                  </span>
                </div>
                <div className="w-4/5 ml-4">
                  <div className="mt-1">
                    <span className="text-base text-grisText font-medium">
                      Created
                    </span>
                  </div>
                  <div className="mt-[-5px] ">
                    <span className="text-[10px] font-medium text-grisSubText">
                      Days Ago
                    </span>
                  </div>
                </div>
              </div>
              {/* Created By Card */}
              <div className="flex mt-5">
                <div className="w-1/5 text-center bg-blancoBox2 rounded-xl">
                  <img src={ticket.user_img} className=" rounded-xl" />
                </div>
                <div className="w-4/5 ml-4">
                  <div className="mt-1">
                    <span className="text-base text-grisText font-medium">
                      Created
                    </span>
                  </div>
                  <div className="mt-[-5px] ">
                    <span className="text-[10px] font-medium text-grisSubText">
                      {ticket.creator}
                    </span>
                  </div>
                </div>
              </div>
              {/* Updated Days Count Card */}
              <div className="flex mt-5">
                <div className="w-1/5 text-center bg-[#D7586B40] rounded-xl px-4 py-2">
                  <span className="text-[#D7586B] text-3xl">
                    {ticket.updated}
                  </span>
                </div>
                <div className="w-4/5 ml-4">
                  <div className="mt-1">
                    <span className="text-base text-grisText font-medium">
                      Updated
                    </span>
                  </div>
                  <div className="mt-[-5px] ">
                    <span className="text-[10px] font-medium text-grisSubText">
                      Days Ago
                    </span>
                  </div>
                </div>
              </div>
              {/* Status Bar */}
              <div className="flex mt-6 gap-6">
                {ticket.importance === "Low" ? (
                  <span className="text-xs border border-blue-500 text-blue-500 px-3 py-1 rounded-2xl font-medium">
                    {ticket.importance}
                  </span>
                ) : ticket.importance === "Medium" ? (
                  <span className="text-xs border border-orange-600 text-orange-600 px-3 py-1 rounded-2xl font-medium">
                    {ticket.importance}
                  </span>
                ) : (
                  <span className="text-xs border border-red-600 text-red-600 px-3 py-1 rounded-2xl font-medium">
                    {ticket.importance}
                  </span>
                )}
                <span className="text-xs border border-black px-3 py-1 rounded-2xl font-medium">
                  {ticket.status}
                </span>
              </div>
              {/* Description Bar */}
              <div>
                <p className="font-semibold text-base font-poppins text-grisHeading mt-6">
                  Description
                </p>
                <span className="text-xs font-normal font-roboto text-grisSubText">
                  {ticket.description}
                </span>
              </div>
              {/* Category */}
              <div>
                <p className="font-semibold text-base font-poppins text-grisHeading mt-4 mb-2">
                  Category
                </p>
                <span className="text-xs border bg-primario text-white px-3 py-1 rounded-2xl font-medium">
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

  const validation = await saveNewTicket(data);

  return validation;
}
