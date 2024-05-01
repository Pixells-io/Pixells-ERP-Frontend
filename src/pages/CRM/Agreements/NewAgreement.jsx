import React, { useState } from "react";

import { add, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputRouter from "../../../layouts/Masters/FormComponents/input";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { saveNewAgreementTemplate } from "./utils";

function NewAgreements() {
  let [value, setValue] = useState("");

  function addVariable(valueNumber) {
    let varValue = null;
    switch (valueNumber) {
      case 1:
        varValue = "{person_name}";
        break;
      case 2:
        varValue = "{service_name}";
        break;
      case 3:
        varValue = "{date}";
        break;
      case 4:
        varValue = "<img>";
        break;
      case 5:
        varValue = "________________________";
        break;

      default:
        break;
    }
    const actualValue = value.toString();
    setValue(actualValue + varValue);
  }

  const selectCategory = [
    {
      label: "Inmigration",
      value: "1",
    },
    {
      label: "Bookeeping",
      value: "2",
    },
    {
      label: "Tax Prep.",
      value: "3",
    },
    {
      label: "Audits",
      value: "4",
    },
    {
      label: "Pay Roll",
      value: "5",
    },
    {
      label: "Plan Infor.",
      value: "6",
    },
  ];

  return (
    <div className="flex w-full overflow-auto">
      <Form
        id="new-agreement-template"
        action="/crm/agreements/create"
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
          <div className="overflow-auto">
            <div className="flex gap-6">
              <div className="col">
                <SelectRouter
                  name={"category"}
                  placeholder={"Category"}
                  options={selectCategory}
                />
              </div>
              <div className="col">
                <InputRouter
                  name={"name"}
                  placeholder={"Name of Agreement"}
                  type={"text"}
                />
              </div>
              <div className="col">
                <InputRouter
                  name={"comments"}
                  placeholder={"Comments of Agreement"}
                  type={"text"}
                />
                <textarea
                  name="template"
                  className="hidden"
                  value={value}
                ></textarea>
              </div>
              <div className="col">
                <Button
                  form="new-agreement-template"
                  className="font-roboto font-semibold text-sm p-4 text-white justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
                >
                  Save
                </Button>
              </div>
            </div>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            <div className="flex mt-2 gap-4">
              <div>
                <button
                  onClick={() => addVariable(1)}
                  type="button"
                  className="h-6 w-auto bg-primario text-white text-[11px] font-medium rounded-xl px-4"
                >
                  Customer Name
                </button>
              </div>
              <div>
                <button
                  onClick={() => addVariable(2)}
                  type="button"
                  className="h-6 w-auto bg-primario text-white text-[11px] font-medium rounded-xl px-4"
                >
                  Service
                </button>
              </div>
              <div>
                <button
                  onClick={() => addVariable(3)}
                  type="button"
                  className="h-6 w-auto bg-primario text-white text-[11px] font-medium rounded-xl px-4"
                >
                  Date
                </button>
              </div>
              <div>
                <button
                  onClick={() => addVariable(4)}
                  type="button"
                  className="h-6 w-auto bg-primario text-white text-[11px] font-medium rounded-xl px-4"
                >
                  Sign
                </button>
              </div>
              <div>
                <button
                  onClick={() => addVariable(5)}
                  type="button"
                  className="h-6 w-auto bg-primario text-white text-[11px] font-medium rounded-xl px-4"
                >
                  Open Field
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default NewAgreements;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewAgreementTemplate(data);

  return validation;
}
