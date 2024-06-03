import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import SidebarActionsTicket from "./Components/SidebarActionsTicket";
import FollowUpCard from "./Components/FollowUpCard";

function ShowTickets() {
  const { data } = useLoaderData();

  const ticket = data[0];

  return (
    <div className="flex w-full">
      {/* FollowUp Div */}
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-3/4">
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
          <div className="font-roboto text-sm text-grisText">
            tickets {" > "} {ticket.issue}
          </div>
        </div>
        {/* top content */}
        <div className="items-center gap-4 overflow-scroll">
          <div>
            <h2 className="font-poppins font-bold text-xl text-[#44444F]">
              FOLLOW UP
            </h2>
          </div>
          <div className="mt-6 ml-4">
            <h2 className="font-poppins font-bold text-xl text-[#44444F]">
              {ticket.issue}
            </h2>
            <div className="mt-2">
              <span className="font-proboto font-medium text-sm text-grisText">
                {ticket.category}
              </span>
            </div>
          </div>
          {/* Timeline */}
          <div className="bg-white p-4 mt-3 rounded-2xl">
            {ticket?.follow_ups.map((data, i) => (
              <FollowUpCard followUp={data} ticket={ticket.id} />
            ))}
          </div>
        </div>
      </div>
      {/* Actions Div */}
      <div className="w-1/4 h-full mr-5">
        <SidebarActionsTicket ticket={ticket.id} />
      </div>
    </div>
  );
}

export default ShowTickets;
