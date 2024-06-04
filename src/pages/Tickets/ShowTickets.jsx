import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import SidebarActionsTicket from "./Components/SidebarActionsTicket";
import FollowUpCard from "./Components/FollowUpCard";

function ShowTickets() {
  const { areas, users, myTicket } = useLoaderData();

  const ticket = myTicket.data[0];

  return (
    <div className="flex w-full">
      {/* FollowUp Div */}
      <div className="ml-4 flex w-3/4 flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            tickets {" > "} {ticket.issue}
          </div>
        </div>
        {/* top content */}
        <div className="items-center gap-4 overflow-scroll">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              FOLLOW UP
            </h2>
          </div>
          <div className="ml-4 mt-6">
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              {ticket.issue}
            </h2>
            <div className="mt-2">
              <span className="font-proboto text-sm font-medium text-grisText">
                {ticket.category}
              </span>
            </div>
          </div>
          {/* Timeline */}
          <div className="mt-3 rounded-2xl bg-white p-4">
            {ticket?.follow_ups.map((data, i) => (
              <FollowUpCard followUp={data} ticket={ticket.id} />
            ))}
          </div>
        </div>
      </div>
      {/* Actions Div */}
      <div className="mr-5 h-full w-1/4">
        <SidebarActionsTicket ticket={ticket} areas={areas} users={users} />
      </div>
    </div>
  );
}

export default ShowTickets;
