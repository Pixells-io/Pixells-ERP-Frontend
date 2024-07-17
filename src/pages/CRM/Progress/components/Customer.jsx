import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { IonIcon } from "@ionic/react";
import { addOutline } from "ionicons/icons";

import FormRequireDocument from "./Forms/FormRequireDocument";
import CommentsProcess from "./CommentsProcess";

function Customer({ customer, stepId }) {
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (customer?.step_latest === "null") {
      setInfo({});
    } else {
      console.log("Para aca");
      const parsedInfo = JSON.parse(customer?.step_latest);
      delete parsedInfo.id;
      delete parsedInfo.customer_id;
      delete parsedInfo.user_id;
      delete parsedInfo.created_at;
      delete parsedInfo.updated_at;
      setInfo(parsedInfo);
    }
  }, []);

  return (
    <div id={customer.customer_id} className="rounded-lg bg-white p-2">
      <FormRequireDocument
        modal={modal}
        setModal={setModal}
        customer={customer}
        stepId={stepId}
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col border-b-[1px] border-[#D7D7D7]">
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-grisText">
              {customer.customer_name}
            </p>
            <IonIcon
              icon={addOutline}
              className="h-6 w-6 text-grisText"
              onClick={() => setModal(true)}
            ></IonIcon>
          </div>
          <div>
            {customer?.type == 1 ? (
              <div className="flex w-full items-center justify-between">
                <span className="w-fit gap-1 rounded-full border border-[#00a9b3] px-2 text-[8px] text-[#00a9b3]">
                  Individual
                </span>

                <span className="w-fit gap-1 rounded-full border border-[#00A259] px-2 text-[8px] text-[#00A259]">
                  Active
                </span>
              </div>
            ) : (
              <div className="flex w-full items-center justify-between py-1">
                <span className="w-fit gap-1 rounded-full border border-primarioBotones px-2 text-[8px] text-primario">
                  Business
                </span>

                <span className="w-fit gap-1 rounded-full border border-[#00A259] px-2 text-[8px] text-[#00A259]">
                  Active
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 truncate text-[10px] text-grisHeading">
          <div className="flex flex-col gap-2">
            {Object?.entries(info)?.map(([key, value]) => (
              <div className="flex flex-col gap-1">
                <p>{key}</p>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <p>{format(customer.latest_updated_date, "PPP")}</p>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-between gap-1">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D7586B] text-sm font-semibold text-white">
              <HoverCard>
                <HoverCardTrigger>
                  <p className="">{customer.latest_created}</p>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <p>
                    Created{" "}
                    {customer.latest_created == 0
                      ? "Today"
                      : customer.latest_created == 1
                        ? customer.latest_created + " day ago"
                        : customer.latest_created + " days ago"}
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9D994] text-sm font-semibold text-white">
              <HoverCard>
                <HoverCardTrigger>
                  <p>{customer.latest_updated}</p>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <p>
                    {customer.latest_updated == 0
                      ? "No updates"
                      : customer.latest_updated == 1
                        ? "Updated " + customer.latest_updated + " day ago"
                        : "Updated " + customer.latest_updated + " days ago"}
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="flex">
              <CommentsProcess
                customerId={customer?.customer_id}
                comments={customer?.comments}
              />
            </div>
          </div>

          <div>
            <Avatar className="h-6 w-6">
              <AvatarImage src={customer?.assigned?.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
