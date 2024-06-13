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

  const { services } = useLoaderData();

  //Create services fill array
  const servicesArray = [];

  arrayFillServices(services, servicesArray);

  function arrayFillServices(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.name,
        value: element.id,
      });
    });
  }

  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["image"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];
  const module = {
    toolbar: toolbarOptions,
  };

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

  return (
    <div className="flex w-full overflow-auto">
      <Form
        id="new-agreement-template"
        action="/crm/agreements/create"
        method="post"
        className="mr-3 w-full overflow-hidden"
      >
        <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
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
            <div className="font-roboto text-sm text-grisText">agreements</div>
          </div>

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
                <SelectRouter
                  name={"category"}
                  placeholder={"Category"}
                  options={servicesArray}
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
                  className="justify-normal rounded-lg bg-primarioBotones p-4 pl-6 pr-6 font-roboto text-sm font-semibold text-white"
                >
                  Save
                </Button>
              </div>
            </div>
            <div className="mt-5">
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                style={{ maxHeight: "420px", overflow: "auto" }}
                modules={module}
              />
            </div>
            <div className="mt-2 flex gap-4">
              <div>
                <button
                  onClick={() => addVariable(1)}
                  type="button"
                  className="h-6 w-auto rounded-xl bg-primario px-4 text-[11px] font-medium text-white"
                >
                  Customer Name
                </button>
              </div>
              <div>
                <button
                  onClick={() => addVariable(2)}
                  type="button"
                  className="h-6 w-auto rounded-xl bg-primario px-4 text-[11px] font-medium text-white"
                >
                  Service
                </button>
              </div>
              <div>
                <button
                  onClick={() => addVariable(3)}
                  type="button"
                  className="h-6 w-auto rounded-xl bg-primario px-4 text-[11px] font-medium text-white"
                >
                  Date
                </button>
              </div>
              <div>
                <button
                  onClick={() => addVariable(4)}
                  type="button"
                  className="h-6 w-auto rounded-xl bg-primario px-4 text-[11px] font-medium text-white"
                >
                  Sign
                </button>
              </div>
              <div>
                <button
                  onClick={() => addVariable(5)}
                  type="button"
                  className="h-6 w-auto rounded-xl bg-primario px-4 text-[11px] font-medium text-white"
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

  return redirect("/crm/agreements");
}
