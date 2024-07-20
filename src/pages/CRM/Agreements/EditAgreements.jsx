import React, { useState } from "react";

import { add, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import InputRouter from "../../../layouts/Masters/FormComponents/input";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AgreementsPanel from "./components/AgreementPanel";
import { saveEditAgreementTemplate } from "./utils";
import { Input } from "@/components/ui/input";
import NavigationHeader from "@/components/navigation-header";

function EditAgreements() {
  const { data } = useLoaderData();

  return (
    <div className="flex w-full overflow-auto">
      <Form
        id="edit-agreement-template"
        action={`/crm/agreements/edit/${data.id}`}
        method="post"
        className="mr-3 w-full overflow-hidden"
      >
        <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
          {/* navigation inside */}
          <NavigationHeader />

          {/* top content */}
          <div className="flex items-center gap-4">
            <div>
              <h2 className="font-poppins text-xl font-bold text-[#44444F]">
                AGREEMENTS CONSOLE
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[#8F8F8F]">
              <div className="text-xs">6 services</div>
              <div className="text-2xl">&bull;</div>
              <div className="text-xs">36 templates</div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-6">
              <div className="col">
                <Input
                  type={"text"}
                  className="m-4 w-full rounded-none border-0 border-b border-gris2 bg-transparent font-roboto text-xs font-light text-grisSubText !ring-0 !ring-offset-0 focus:border-primarioBotones"
                  name={"name"}
                  value={data.name}
                />
                <input name="id" className="hidden" value={data.id}></input>
              </div>
              <div className="col">
                <Input
                  type={"text"}
                  className="m-4 w-full rounded-none border-0 border-b border-gris2 bg-transparent font-roboto text-xs font-light text-grisSubText !ring-0 !ring-offset-0 focus:border-primarioBotones"
                  name={"comments"}
                  value={data.comments}
                />
              </div>
              <div className="col">
                <Button
                  form="edit-agreement-template"
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
        </div>
      </Form>
    </div>
  );
}

export default EditAgreements;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveEditAgreementTemplate(data);

  return redirect("/crm/agreements");
}
