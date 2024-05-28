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
            Information
          </p>

          {/*menu top */}
          <div className="flex flex-col gap-4 ml-4">
            <div className="border border-grisHeading rounded-full px-3 py-1 w-28 text-center">
              <span className="font-roboto text-[10px] text-grisHeading">
                {ticket.date}
              </span>
            </div>
            {/* Info Card */}
            <div className="pt-3">
              <p className="font-semibold text-lg font-poppins text-grisHeading">
                {ticket.issue}
              </p>
              {/* Created Days Count Card */}
              <div className="flex">
                <div className="w-1/5 text-center bg-blancoBox2 rounded-xl">
                  <span className="text-grisText text-3xl">5</span>
                </div>
                <div className="w-4/5 ml-2">
                  <span>Created</span>
                  <br />
                  <span>Days Ago</span>
                </div>
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
