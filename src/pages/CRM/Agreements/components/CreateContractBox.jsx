import React, { useState } from "react";

import { add, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import AgreementsPanel from "./AgreementPanel";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function CreateContractBox({ data }) {
  return (
    <Form
      id="form-create-contract"
      action={`/crm/agreements/new-contract/${data.template_id}/${data.customer_id}`}
      method="post"
      className="mr-3 w-full overflow-hidden"
    >
      <div className="">
        <div className="mb-4 ml-2 mt-2 flex gap-6">
          <div className="col">
            <input type="hidden" value={data.template_id} name="template_id" />
            <input type="hidden" value={data.customer_id} name="customer_id" />
            <input type="hidden" value={data.service_id} name="service_id" />
            <InputRouter
              name={"comments"}
              placeholder={"Contract Name"}
              type={"text"}
            />
          </div>
          <div className="col">
            <Button
              form="form-create-contract"
              className="justify-normal rounded-lg bg-primarioBotones p-4 pl-6 pr-6 font-roboto text-sm font-semibold text-white"
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
