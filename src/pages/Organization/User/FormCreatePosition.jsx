import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, add } from "ionicons/icons";
import { Form, redirect, useLoaderData } from "react-router-dom";
import InputRouter from "../../../layouts/Masters/FormComponents/input";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";
import CheckboxRouter from "../../../layouts/Masters/FormComponents/checkbox";
import { Button } from "@/components/ui/button";
import { saveNewPosition } from "../utils";
import { Input } from "@/components/ui/input";

const selectBasic = [
  {
    label: "Yes",
    value: "1",
  },
  {
    label: "No",
    value: "0",
  },
];

const positionNames = [
  {
    label: "Operator",
    value: "Operator",
  },
  {
    label: "Analyst",
    value: "Analyst",
  },
  {
    label: "Technical",
    value: "Technical",
  },
  {
    label: "Leader",
    value: "Leader",
  },
  {
    label: "Engineer",
    value: "Engineer",
  },
  {
    label: "Coordinator",
    value: "Coordinator",
  },
  {
    label: "Manager",
    value: "Manager",
  },
  {
    label: "Director",
    value: "Director",
  },
];

const experienceYears = [
  {
    label: "0",
    value: "0",
  },
  {
    label: "1-3",
    value: "1-3",
  },
  {
    label: "4-6",
    value: "4-6",
  },
  {
    label: "7-10",
    value: "7-10",
  },
  {
    label: "11-15",
    value: "11-15",
  },
  {
    label: "15+",
    value: "15+",
  },
];

const academyGrade = [
  {
    label: "Elementary School",
    value: "Elementary School",
  },
  {
    label: "Middle School",
    value: "Middle School",
  },
  {
    label: "High School",
    value: "High School",
  },
  {
    label: "University",
    value: "University",
  },
];

const languageOptions = [
  {
    label: "English",
    value: "English",
  },
  {
    label: "French",
    value: "French",
  },
  {
    label: "Dutch",
    value: "Dutch",
  },
  {
    label: "Portuguese",
    value: "Portuguese",
  },
  {
    label: "Chinese",
    value: "Chinese",
  },
];

const positionType = [
  {
    label: "Camp",
    value: "Camp",
  },
  {
    label: "Trip",
    value: "Trip",
  },
];

const workingDay = [
  {
    label: "Monday-Friday",
    value: "Monday-Friday",
  },
  {
    label: "Monday-Saturday",
    value: "Monday-Saturday",
  },
  {
    label: "Monday-Sunday",
    value: "Monday-Sunday",
  },
];

function FormCreatePosition() {
  const { data } = useLoaderData();
  const [resInputs, setResInputs] = useState([
    {
      name: "responsability_input",
      type: "text",
      placeholder: "Responsability",
      value: "",
    },
  ]);
  const [authInputs, setAuthInputs] = useState([
    {
      name: "",
    },
  ]);

  const selectArea = [];

  arrayFill(data, selectArea);

  function arrayFill(data, array) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      array.push({
        label: element.nombre,
        value: element.id,
        placeholder: "0",
      });
    }
  }

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full bg-gris p-8 ml-4 rounded-lg space-y-4 overflow-x-auto gap-4">
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
          <div className="font-roboto text-grisText">organization</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins font-bold text-2xl text-[#44444F]">
              USER MANAGEMENT
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center font-roboto">
            <div>4 service</div>
            <div className="text-2xl">&bull;</div>
            <div>9 costumers</div>
          </div>
        </div>
        <div>
          <h2 className="font-poppins font-bold text-xl text-[#44444F]">
            New Position
          </h2>
        </div>
        {/*USER BOX CREATE*/}
        <div className="bg-white rounded-xl p-4">
          <Form
            id="position-form"
            action="/organization/create-position"
            method="post"
          >
            <div className="bg-blancoForms p-5 rounded-2xl">
              <span className="text-roboto text-grisText text-sm font-medium">
                General Information
              </span>
              <div className="pt-4 w-full pr-8">
                <div className="flex w-full">
                  <div className="pr-4 w-1/4">
                    <SelectRouter
                      name={"area_id"}
                      placeholder={"Select Area"}
                      options={selectArea}
                    />
                  </div>
                  <div className="pr-4  w-1/4">
                    <SelectRouter
                      name={"position_type"}
                      placeholder={"Position Type"}
                      options={positionNames}
                    />
                  </div>
                  <div className="pr-4  w-1/4">
                    <InputRouter
                      name={"position_name"}
                      type={"text"}
                      placeholder={"Position Name"}
                    />
                  </div>
                  <div className="pr-4  w-1/4">
                    <SelectRouter
                      name={"permision_access"}
                      placeholder={"Permission Access"}
                      options={selectBasic}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="pr-4 w-1/4">
                    <SelectRouter
                      name={"boss_id"}
                      placeholder={"Boss Position"}
                      options={selectArea}
                    />
                  </div>
                  <div className="pr-4 w-1/4">
                    <SelectRouter
                      name={"coordinate_id"}
                      placeholder={"Coordinate Position"}
                      options={selectArea}
                    />
                  </div>
                  <div className="flex w-2/4">
                    <InputRouter
                      name={"objetive"}
                      type={"text"}
                      placeholder={"Objetive of the positions"}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*Authority of the Position*/}
            <div className="bg-blancoForms p-4 mt-10 rounded-xl">
              <span className="text-roboto text-grisText text-sm font-medium">
                Authority of the Position
              </span>
              <div className="flex items-center pr-4 justify-between gap-10">
                <div className="flex flex-col w-full">
                  {authInputs?.map((input, i) => (
                    <div key={i} className="flex items-center justify-between ">
                      <div className="">
                        <InputRouter
                          name={"authority"}
                          type={"text"}
                          placeholder={"Authority Name"}
                        />
                      </div>
                      <div className=" ">
                        <CheckboxRouter name="total" label="Total" />
                      </div>
                      <div className=" ">
                        <CheckboxRouter name="shared" label="Shared" />
                      </div>
                      <div className="">
                        <SelectRouter
                          name={"authority_cordinate_id"}
                          placeholder={"With"}
                          options={selectArea}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex self-start pt-6">
                  <button
                    className="flex bg-primario rounded-full h-6 w-6 items-center"
                    onClick={() =>
                      setAuthInputs([
                        ...authInputs,
                        {
                          name: "",
                        },
                      ])
                    }
                    type="button"
                  >
                    <IonIcon
                      icon={add}
                      size="large"
                      className="text-white"
                    ></IonIcon>
                  </button>
                </div>
              </div>
            </div>
            {/*Responsability of the position*/}
            <div className="bg-blancoForms p-4 mt-10 rounded-xl">
              <span className="text-roboto text-grisText text-sm font-medium">
                Responsability of the Position
              </span>
              <div className="flex items-center gap-4 justify-between pr-2">
                <div className="pr-4 w-2/4">
                  {resInputs?.map((input, i) => (
                    <Input
                      className="bg-transparent w-full text-xs font-roboto text-grisSubText !ring-0 !ring-offset-0 font-light border-0 border-b rounded-none m-4 border-gris2 focus:border-primarioBotones"
                      key={i}
                      name={input.name}
                      type={input.type}
                      placeholder={input.placeholder}
                    />
                  ))}
                </div>
                <div className="flex self-start pt-8">
                  <button
                    className="flex bg-primario rounded-full h-6 w-6 items-center"
                    onClick={() =>
                      setResInputs([
                        ...resInputs,
                        {
                          name: "responsability_input",
                          type: "text",
                          placeholder: "Responsability",
                          value: "",
                        },
                      ])
                    }
                    type="button"
                  >
                    <IonIcon
                      icon={add}
                      size="large"
                      className="text-white"
                    ></IonIcon>
                  </button>
                </div>
              </div>
            </div>

            {/*Description of the position*/}
            <div className="bg-blancoForms p-5 mt-10 rounded-2xl">
              <span className="text-roboto text-grisText text-sm font-medium">
                Description of the position
              </span>
              <div className="flex pt-4 w-full pr-8">
                <div className="w-full">
                  <div className="flex w-full">
                    <div className="pr-4 w-1/3">
                      <SelectRouter
                        name={"experience_years"}
                        placeholder={"Experience Years"}
                        options={experienceYears}
                      />
                    </div>
                    <div className="pr-4 w-1/3">
                      <InputRouter
                        name={"experience_sector"}
                        type={"text"}
                        placeholder={"Sector of Experience"}
                      />
                    </div>
                    <div className="pr-4 w-1/3">
                      <InputRouter
                        name={"experience_description"}
                        type={"text"}
                        placeholder={"Describe the Experience"}
                      />
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="pr-4 w-2/6">
                      <SelectRouter
                        name={"academy"}
                        placeholder={"Required Studies"}
                        options={academyGrade}
                      />
                    </div>
                    <div className="pr-4 w-2/6">
                      <InputRouter
                        name={"name_studies"}
                        type={"text"}
                        placeholder={"Describe the Studies"}
                      />
                    </div>
                    <div className="pr-4 w-1/6">
                      <SelectRouter
                        name={"home_office"}
                        placeholder={"Home Office"}
                        options={selectBasic}
                      />
                    </div>
                    <div className="pr-4 w-1/6">
                      <SelectRouter
                        name={"position_work_type"}
                        placeholder={"Type of Work"}
                        options={positionType}
                      />
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="pr-4 w-2/6">
                      <SelectRouter
                        name={"language"}
                        placeholder={"Language"}
                        options={languageOptions}
                      />
                    </div>
                    <div className="pr-4 w-1/6">
                      <InputRouter
                        name={"language_percent"}
                        type={"number"}
                        placeholder={"%"}
                      />
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="pr-4 w-2/6">
                      <SelectRouter
                        name={"working_day"}
                        placeholder={"Working Day"}
                        options={workingDay}
                      />
                    </div>
                    <div className="pr-4 w-1/6">
                      <InputRouter
                        name={"start"}
                        type={"time"}
                        placeholder={"Start"}
                      />
                    </div>
                    <div className="pr-4 w-1/6">
                      <InputRouter
                        name={"end"}
                        type={"time"}
                        placeholder={"End"}
                      />
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="pr-4 w-1/3">
                      <InputRouter
                        name={"knowledge_1"}
                        type={"text"}
                        placeholder={"Knowledge"}
                      />
                    </div>
                    <div className="w-2/3 text-end">
                      <br />
                      <Button
                        form="position-form"
                        className="font-roboto font-semibold text-sm p-4 text-white justify-normal pr-6 pl-6 rounded-lg bg-primarioBotones"
                      >
                        Save Position
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default FormCreatePosition;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewPosition(data);

  return redirect("/organization");
}
