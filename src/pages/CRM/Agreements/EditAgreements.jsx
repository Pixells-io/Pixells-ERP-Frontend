import React, { useState } from "react";

import { add, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputRouter from "../../../layouts/Masters/FormComponents/input";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { Button } from "@/components/ui/button";

function EditAgreements() {
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

  console.log(services.data);

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
                  className="font-roboto font-semibold text-sm p-4 text-white justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
                >
                  Save
                </Button>
              </div>
            </div>
            <div className="">
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                style={{ maxHeight: "420px", overflow: "auto" }}
                modules={module}
              />
            </div>
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

export default EditAgreements;
