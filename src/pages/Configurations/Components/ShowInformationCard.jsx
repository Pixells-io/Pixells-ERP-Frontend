import React, { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import UserImage from "@/layouts/Masters/FormComponents/userImage";
import { Button } from "@/components/ui/button";

function ShowInformationCard() {
  return (
    <div className="w-full overflow-x-hidden overflow-y-scroll">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-white px-8 py-4">
        <span className="text-sm font-normal text-grisText">
          General Information Card
        </span>
        <div className="flex">
          <div className="inline-grid w-1/3 grid-cols-1 gap-4 px-4">
            <div className="text-center">
              <UserImage name={"logo"} label={"Company Logo"} />
            </div>
            <InputRouter
              name={"business_email"}
              placeholder={"Business Email"}
              type={"text"}
            />
            <InputRouter
              name={"user_master_id"}
              placeholder={"User Master"}
              type={"text"}
            />
          </div>
          <div className="inline-grid w-1/3 grid-cols-1 gap-4 px-4">
            <InputRouter
              name={"legal_name"}
              placeholder={"Legal Name"}
              type={"text"}
            />
            <InputRouter
              name={"id_fiscal"}
              placeholder={"ID Fiscal"}
              type={"text"}
            />
            <InputRouter name={"street"} placeholder={"Street"} type={"text"} />
            <InputRouter
              name={"location"}
              placeholder={"Location"}
              type={"text"}
            />
            <InputRouter name={"state"} placeholder={"State"} type={"text"} />
          </div>
          <div className="inline-grid w-1/3 grid-cols-1 gap-4 px-4">
            <InputRouter
              name={"comercial_name"}
              placeholder={"Comercial Name"}
              type={"text"}
            />
            <InputRouter
              name={"country"}
              placeholder={"Country"}
              type={"text"}
            />
            <div className="flex gap-4">
              <InputRouter name={"ext"} placeholder={"Ext"} type={"text"} />
              <InputRouter name={"int"} placeholder={"Int"} type={"text"} />
            </div>
            <InputRouter name={"city"} placeholder={"City"} type={"text"} />
            <div className="flex gap-4">
              <InputRouter name={"cp"} placeholder={"cp"} type={"text"} />
              <InputRouter name={"phone"} placeholder={"phone"} type={"text"} />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-4 mt-8 flex w-full flex-col space-y-4 rounded-lg bg-white px-8 py-4">
        <span className="text-sm font-normal text-grisText">
          Additional Information
        </span>
        <div className="flex gap-4">
          <InputRouter name={"sector"} placeholder={"Sector"} type={"text"} />
          <InputRouter
            name={"employee_number"}
            placeholder={"Number of Employees"}
            type={"text"}
          />
          <InputRouter
            name={"currency"}
            placeholder={"Currency"}
            type={"text"}
          />
          <InputRouter
            name={"more_info"}
            placeholder={"More Info"}
            type={"text"}
          />
        </div>
      </div>
    </div>
  );
}

export default ShowInformationCard;
