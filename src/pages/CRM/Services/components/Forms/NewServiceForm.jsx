import React, { useState, useEffect } from "react";

import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";

import { IonIcon } from "@ionic/react";
import { add, addCircle, closeCircle } from "ionicons/icons";

const businessInputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
  },
  {
    name: "description",
    type: "text",
    placeholder: "Description",
  },
  {
    name: "color",
    type: "color",
    placeholder: "Color",
  },
];

const contactInputs = [
  {
    name: "participants",
    type: "text",
    placeholder: "Select participants",
  },
];

const categoryInputs = [
  {
    name: "process",
    type: "text",
    placeholder: "Step 1 - Title",
  },
  {
    name: "process_action",
    type: "text",
    placeholder: "Action",
  },
];

const colorArray = [
  {
    color: "#6DCA92",
  },
  {
    color: "#00A259",
  },
  {
    color: "#E1556A",
  },
  {
    color: "#BA1D1D",
  },
  {
    color: "#FD9D44",
  },
  {
    color: "#E57F22",
  },
  {
    color: "#7794F9",
  },
  {
    color: "#5B89FF",
  },
  {
    color: "#F5EB8C",
  },
  {
    color: "#FFE04A",
  },
  {
    color: "#B66FE4",
  },
  {
    color: "#9144C2",
  },
  {
    color: "#EAA9E7",
  },
  {
    color: "#DD67D8",
  },
  {
    color: "#92929C",
  },
  {
    color: "#6B6B72",
  },
  {
    color: "#FFFFFF",
  },
  {
    color: "#000000",
  },
];

function NewServiceForm({
  modalServices,
  setModalServices,
  categories,
  positions,
}) {
  const navigation = useNavigation();
  const [process, setProcess] = useState([
    {
      process: "",
      process_action: "",
    },
  ]);

  const selectCategories = [];
  const selectResponsible = [];

  useEffect(() => {
    if (navigation.state === "idle") {
      setModalServices(false);
    }
  }, [navigation.state]);

  arrayFillCategories(categories, selectCategories);
  arrayFillResponsible(positions, selectResponsible);

  function arrayFillCategories(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.name,
        value: element.id,
      });
    });
  }

  function arrayFillResponsible(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.position_name,
        value: element.id,
      });
    });
  }

  function addProcessInputs() {
    const newInput = {
      process: "",
      process_action: "",
    };
    setProcess([...process, newInput]);
  }

  function removeProcessInput(index) {
    const newArray = process.filter((item, i) => index !== i);
    setProcess(newArray);
  }

  function updateProcessInput(index, e) {
    // console.log(e);
    const newFields = process.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
    // console.log(newFields);
    setProcess(newFields);
  }

  return (
    <Dialog open={modalServices} onOpenChange={setModalServices}>
      <DialogContent className="h-[650px] overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b">
          <DialogTitle className="p-8 font-poppins">
            Create New Service
          </DialogTitle>
        </DialogHeader>
        <Form
          id="service-form"
          className="flex flex-col gap-4 px-8"
          action="/crm/services"
          method="post"
        >
          <input type="hidden" name="type" value={1} />
          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Service Information
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              <div className="">
                <SelectRouter
                  name={"category"}
                  placeholder={"Category"}
                  options={selectCategories}
                />
              </div>
              <InputRouter name="name" type="text" placeholder="Name" />
              <InputRouter
                name="description"
                type="text"
                placeholder="Description"
              />
              {/* <InputRouter name="color" type="color" placeholder="Color" /> */}
              <div className="flex gap-2">
                <p className="flex w-full items-center rounded-lg bg-grisBg px-3 py-3 text-[12px] text-grisText">
                  Pick a color
                </p>
                <div className="">
                  <input
                    name="color"
                    type="color"
                    className="flex h-10 w-10 shrink-0 rounded-xl"
                  />
                </div>
              </div>

              {/* <div className="grid grid-cols-6 gap-4">
                {colorArray?.map((color, i) => (
                  <div
                    className="h-12 w-12"
                    style={{
                      backgroundColor: color.color,
                    }}
                  ></div>
                ))}
              </div> */}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="text-lg font-normal text-[#696974]">
              Responsible
            </div>
            <div className="flex flex-col gap-4 pb-4 font-light">
              <div className="">
                <SelectRouter
                  name={"position_id"}
                  placeholder={"Responsable position"}
                  options={selectResponsible}
                />
              </div>

              <SelectRouter
                name="participants"
                placeholder="Select participants"
                options={selectResponsible}
                isMulti={true}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
            <div className="flex items-center gap-4">
              <p className="text-lg font-normal text-[#696974]">Process</p>
              <div className="">
                <button
                  className="flex h-6 w-6 items-center"
                  type="button"
                  onClick={() => addProcessInputs()}
                >
                  <IonIcon
                    icon={addCircle}
                    size="large"
                    className="text-primario"
                  ></IonIcon>
                </button>
              </div>
            </div>
            {process?.map((item, i) => (
              <div key={i} className="flex gap-4 border-b pb-4 font-light">
                <div className="flex w-full flex-col gap-4">
                  <InputRouter
                    name="process"
                    type="text"
                    placeholder={`Step ${i + 1}  - Title`}
                    value={process[i].process}
                    onChange={(e) => updateProcessInput(i, e)}
                  />
                  <InputRouter
                    name="process_action"
                    type="text"
                    placeholder="Action"
                    value={process[i].process_action}
                    onChange={(e) => updateProcessInput(i, e)}
                  />
                </div>
                <div className="">
                  <button type="button" onClick={(e) => removeProcessInput(i)}>
                    <IonIcon
                      icon={closeCircle}
                      size=""
                      className="h-5 w-5 text-grisDisabled hover:text-grisText"
                    ></IonIcon>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Form>
        <DialogFooter className="px-8 pb-4">
          <Button
            form="service-form"
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewServiceForm;
