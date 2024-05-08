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

function EditAgreements() {
  const { data } = useLoaderData();

  return (
    <div className="flex w-full overflow-auto">
      <Form
        id="edit-agreement-template"
        action={`/crm/agreements/edit/${data.id}`}
        method="post"
        className="w-full overflow-hidden mr-3"
      >
        <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
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
            <div className="font-roboto text-sm text-grisText">agreements</div>
          </div>

          {/* top content */}
          <div className="flex items-center gap-4">
            <div>
              <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
                AGREEMENTS CONSOLE
              </h2>
            </div>
            <div className="flex gap-3 text-[#8F8F8F] items-center">
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
                  className="bg-transparent w-full text-xs font-roboto text-grisSubText !ring-0 !ring-offset-0 font-light border-0 border-b rounded-none m-4 border-gris2 focus:border-primarioBotones"
                  name={"name"}
                  value={data.name}
                />
                <input name="id" className="hidden" value={data.id}></input>
              </div>
              <div className="col">
                <Input
                  type={"text"}
                  className="bg-transparent w-full text-xs font-roboto text-grisSubText !ring-0 !ring-offset-0 font-light border-0 border-b rounded-none m-4 border-gris2 focus:border-primarioBotones"
                  name={"comments"}
                  value={data.comments}
                />
              </div>
              <div className="col">
                <Button
                  form="edit-agreement-template"
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
