import React, { useState } from "react";

import { add, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import AgreementsPanel from "./AgreementPanel";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function CreateContractBox({ data, users }) {
  return (
    <Form
      id="form-create-contract"
      action={`/crm/agreements/new-contract/${data.id}`}
      method="post"
      className="w-full overflow-hidden mr-3"
    >
      <div className="">
        <div className="flex gap-6">
          <div className="col">
            <SelectRouter name={"user"} placeholder={"User"} options={users} />
          </div>
          <div className="col">
            <InputRouter
              name={"name"}
              placeholder={"Contract Name"}
              type={"text"}
            />
          </div>
          <div className="col">
            <InputRouter
              name={"comments"}
              placeholder={"Contract Description"}
              type={"text"}
            />
          </div>
          <div className="col">
            <Button
              form="form-create-contract"
              className="font-roboto font-semibold text-sm p-4 text-white justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
            >
              Save
            </Button>
          </div>
        </div>
        <div className="">
          <AgreementsPanel data={data} />
        </div>
      </div>
    </Form>
  );
}

export default CreateContractBox;
