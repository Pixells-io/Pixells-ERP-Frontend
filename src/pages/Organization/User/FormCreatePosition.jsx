import React, { useState } from "react";
import { Form, NavLink, redirect, useLoaderData } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, add, closeCircle } from "ionicons/icons";

import { saveNewPosition } from "../utils";

import InputRouter from "../../../layouts/Masters/FormComponents/input";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";
import CheckboxRouter from "../../../layouts/Masters/FormComponents/checkbox";
import NavigationHeader from "@/components/navigation-header";

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
  {
    label: "Master",
    value: "Master",
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

const sectorExperience = [
  {
    label: "Agricultura",
    value: "Agricultura",
  },
  {
    label: "Pesca",
    value: "Pesca",
  },
  {
    label: "Ganadería",
    value: "Ganadería",
  },
  {
    label: "Explotación forestal",
    value: "Explotación forestal",
  },
  {
    label: "Minería",
    value: "Minería",
  },
  {
    label: "Manufactura",
    value: "Manufactura",
  },
  {
    label: "Química",
    value: "Química",
  },
  {
    label: "Textil",
    value: "Textil",
  },
  {
    label: "Farmacéutica",
    value: "Farmacéutica",
  },
  {
    label: "Agroalimentaria",
    value: "Agroalimentaria",
  },
  {
    label: "Metalúrgica",
    value: "Metalúrgica",
  },
  {
    label: "Mecánica",
    value: "Mecánica",
  },
  {
    label: "Energética",
    value: "Energética",
  },
  {
    label: "Construcción",
    value: "Construcción",
  },
  {
    label: "Artesanía",
    value: "Artesanía",
  },
  {
    label: "Comercio",
    value: "Comercio",
  },
  {
    label: "Turismo",
    value: "Turismo",
  },
  {
    label: "Transporte",
    value: "Transporte",
  },
  {
    label: "Salud",
    value: "Salud",
  },
  {
    label: "Educación",
    value: "Educación",
  },
  {
    label: "Asesoría Legal",
    value: "Asesoría Legal",
  },
  {
    label: "Administración",
    value: "Administración",
  },
  {
    label: "Finanzas",
    value: "Finanzas",
  },
];

function FormCreatePosition() {
  const { areas, positions } = useLoaderData();
  const [positionsInputs, setPositionsInputs] = useState([
    { coordinate_id: "" },
  ]);
  const [authInputs, setAuthInputs] = useState([
    {
      authority: "",
      total: "",
      shared: "",
      authority_cordinate_id: "",
    },
  ]);
  const [resInputs, setResInputs] = useState([
    {
      responsability_input: "",
    },
  ]);
  const [lenguageInputs, setLenguageInputs] = useState([
    {
      language: "",
      language_percent: "",
    },
  ]);
  const [skillsInputs, setSkillsInputs] = useState([{ knowledge: "" }]);

  const selectArea = [];
  const selectPosition = [];

  arrayFill(areas.data, selectArea);
  arrayFillPositions(positions.data, selectPosition);

  function arrayFill(data, array) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      array.push({
        label: element.nombre,
        value: element.id,
      });
    }
  }

  function arrayFillPositions(data, array) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      array.push({
        label: element.position_name,
        value: element.id,
      });
    }
  }

  // Inputs

  function addPositionInput() {
    const posInput = { coordinate_id: "", boss_id: "" };

    setPositionsInputs([...positionsInputs, posInput]);
  }

  function removePositionInput(index) {
    const newInputs = positionsInputs.filter((item, i) => index !== i);
    setPositionsInputs(newInputs);
  }

  function updatePositionInput(index, e) {
    const newFields = positionsInputs.map((inputs, i) =>
      i === index ? { ...inputs, coordinate_id: e } : inputs,
    );
    setPositionsInputs(newFields);
  }

  function addAuthInput() {
    const authInput = {
      authority: "",
      total: "",
      shared: "",
      authority_cordinate_id: "",
    };

    setAuthInputs([...authInputs, authInput]);
  }

  function removeAuthInput(index) {
    const newFields = authInputs.filter((item, i) => index !== i);
    setAuthInputs(newFields);
  }

  function updateAuthInput(index, e) {
    const newFields = authInputs.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
    setAuthInputs(newFields);
  }

  function updateAuthCheckbox(index, e) {
    const newFields = authInputs.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
    setAuthInputs(newFields);
  }

  function updateAuthSelect(index, e) {
    const newFields = authInputs.map((inputs, i) =>
      i === index ? { ...inputs, authority_cordinate_id: e } : inputs,
    );
    setAuthInputs(newFields);
  }

  function addResInput() {
    const resInput = {
      responsability_input: "",
    };

    setResInputs([...resInputs, resInput]);
  }

  function removeResInput(index) {
    const newInputs = resInputs.filter((item, i) => index !== i);
    setResInputs(newInputs);
  }

  function updateResInput(index, e) {
    const newFields = resInputs.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
    setResInputs(newFields);
  }

  function addLenguageInput() {
    const lengInput = {
      language: "",
      language_percent: "",
    };

    setLenguageInputs([...lenguageInputs, lengInput]);
  }

  function removeLenguageInput(index) {
    const newInputs = lenguageInputs.filter((item, i) => index !== i);
    setLenguageInputs(newInputs);
  }

  function updateLenguageInput(index, e) {
    const newFields = lenguageInputs.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
    setLenguageInputs(newFields);
  }

  function updateLenguageSelect(index, e) {
    const newFields = lenguageInputs.map((inputs, i) =>
      i === index ? { ...inputs, language: e } : inputs,
    );
    setLenguageInputs(newFields);
  }

  function addSkillInput() {
    const skillInput = {
      knowledge: "",
    };

    setSkillsInputs([...skillsInputs, skillInput]);
  }

  function removeSkillInput(index) {
    const newInputs = skillsInputs.filter((item, i) => index !== i);
    setSkillsInputs(newInputs);
  }

  function updateSkillInput(index, e) {
    const newFields = skillsInputs.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
    setSkillsInputs(newFields);
  }

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-scroll rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold leading-8 text-[#44444F]">
              USER MANAGEMENT
            </h2>
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            New position
          </h2>
          <NavLink to={"/organization"}>
            <IonIcon
              icon={closeCircle}
              size="large"
              className="text-grisDisabled hover:text-grisText"
            ></IonIcon>
          </NavLink>
        </div>

        {/*USER BOX CREATE*/}
        <div className="rounded-xl p-4">
          <Form
            id="position-form"
            action="/organization/create-position"
            method="post"
          >
            {/* General Information */}
            <div className="rounded-2xl bg-blancoBg p-5">
              <span className="text-roboto text-sm font-medium text-grisText">
                General information
              </span>
              <div className="w-full pr-1 pt-4">
                <div className="flex w-full items-center gap-3">
                  <div className="w-1/4">
                    <SelectRouter
                      name={"area_id"}
                      placeholder={"Select area"}
                      options={selectArea}
                    />
                  </div>
                  <div className="w-1/4">
                    <SelectRouter
                      name={"position_type"}
                      placeholder={"Position Type"}
                      options={positionNames}
                    />
                  </div>
                  <div className="w-1/4">
                    <InputRouter
                      name={"position_name"}
                      type={"text"}
                      placeholder={"Position Name"}
                    />
                  </div>
                  <div className="w-1/4">
                    <SelectRouter
                      name={"permision_access"}
                      placeholder={"Permission Access"}
                      options={selectBasic}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <div className="flex w-full gap-3">
                    <div className="w-1/4 shrink-0">
                      <SelectRouter
                        name={"boss_id"}
                        placeholder={"Position Boss"}
                        options={selectPosition}
                      />
                    </div>
                    <div className="flex w-1/4 flex-col gap-3">
                      {positionsInputs.map((item, i) => (
                        <div key={i} className="flex w-full gap-3">
                          <div className="flex w-full">
                            <SelectRouter
                              name={"coordinate_id"}
                              placeholder={"Coorodinates"}
                              options={selectPosition}
                              onChange={(e) => updatePositionInput(i, e)}
                              value={positionsInputs[i]?.coordinate_id}
                            />
                          </div>
                          {i !== 0 || positionsInputs.length !== i + 1 ? (
                            <div className="flex">
                              <button
                                type="button"
                                className="flex items-center"
                                onClick={() => removePositionInput(i)}
                              >
                                <IonIcon
                                  icon={closeCircle}
                                  size=""
                                  className="h-5 w-5 text-grisDisabled hover:text-grisText"
                                ></IonIcon>
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex">
                    {positionsInputs.length <= 7 ? (
                      <button
                        className="flex h-6 w-6 items-center rounded-full bg-primario"
                        onClick={() => addPositionInput()}
                        type="button"
                      >
                        <IonIcon
                          icon={add}
                          size="large"
                          className="text-white"
                        ></IonIcon>
                      </button>
                    ) : (
                      <div className="w-6"></div>
                    )}
                  </div>
                </div>

                <div className="flex pt-3">
                  <InputRouter
                    name={"objetive"}
                    type={"text"}
                    placeholder={"Position Objectives"}
                  />
                </div>
              </div>
            </div>

            {/*Authority of the Position*/}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Authority of the Position
              </span>
              <div className="flex items-center justify-between gap-10 px-2 pt-2">
                <div className="flex w-full flex-col gap-3 py-4">
                  {authInputs?.map((input, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1/4">
                        <InputRouter
                          name={"authority"}
                          type={"text"}
                          placeholder={"Nombre de la autoridad"}
                          value={authInputs[i]?.authority}
                          onChange={(e) => updateAuthInput(i, e)}
                        />
                      </div>
                      <div className="flex w-1/4 justify-center">
                        <CheckboxRouter name="total" label="Total" />
                      </div>
                      <div className="flex w-1/4 justify-center">
                        <CheckboxRouter name="shared" label="Shared" />
                      </div>
                      <div className="w-1/4">
                        <SelectRouter
                          name={"authority_cordinate_id"}
                          placeholder={"With"}
                          options={selectPosition}
                          value={authInputs[i].authority_cordinate_id}
                          onChange={(e) => updateAuthSelect(i, e)}
                        />
                      </div>
                      {i >= 1 ? (
                        <button
                          type="button"
                          className="flex items-center"
                          onClick={() => removeAuthInput(i)}
                        >
                          <IonIcon
                            icon={closeCircle}
                            size=""
                            className="h-5 w-5 text-grisDisabled hover:text-grisText"
                          ></IonIcon>
                        </button>
                      ) : (
                        <div className="w-5"></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex">
                  {authInputs.length <= 7 && (
                    <button
                      className="flex h-6 w-6 items-center rounded-full bg-primario"
                      onClick={() => addAuthInput()}
                      type="button"
                    >
                      <IonIcon
                        icon={add}
                        size="large"
                        className="text-white"
                      ></IonIcon>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/*Responsability of the position*/}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Position Responsibility
              </span>
              <div className="flex items-center justify-between gap-4 pr-2 pt-4">
                <div className="flex w-2/4 flex-col gap-3">
                  {resInputs?.map((input, i) => (
                    <div key={i} className="flex w-full items-center gap-3">
                      <InputRouter
                        name="responsability_input"
                        type="text"
                        placeholder="Responsibility"
                        value={resInputs[i].responsability_input}
                        onChange={(e) => updateResInput(i, e)}
                      />
                      {i >= 1 ? (
                        <button
                          type="button"
                          className="flex items-center"
                          onClick={() => removeResInput(i)}
                        >
                          <IonIcon
                            icon={closeCircle}
                            size=""
                            className="h-5 w-5 text-grisDisabled hover:text-grisText"
                          ></IonIcon>
                        </button>
                      ) : (
                        <div className="w-5"></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex self-center">
                  {resInputs.length <= 7 ? (
                    <button
                      className="flex h-6 w-6 items-center rounded-full bg-primario"
                      onClick={() => addResInput()}
                      type="button"
                    >
                      <IonIcon
                        icon={add}
                        size="large"
                        className="text-white"
                      ></IonIcon>
                    </button>
                  ) : (
                    <div className="w-6"></div>
                  )}
                </div>
              </div>
            </div>

            {/*Description of the position*/}
            <div className="mt-10 rounded-2xl bg-blancoBg p-5">
              <span className="text-roboto text-sm font-medium text-grisText">
                Job Description
              </span>
              <div className="flex w-full pr-2 pt-4">
                <div className="w-full">
                  <div className="flex w-full items-center gap-3">
                    <div className="w-1/3">
                      <SelectRouter
                        name={"experience_years"}
                        placeholder={"Years of experience"}
                        options={experienceYears}
                      />
                    </div>
                    <div className="w-1/3">
                      <SelectRouter
                        isMulti={true}
                        name={"experience_sector"}
                        placeholder={"Experience Sector"}
                        options={sectorExperience}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"experience_description"}
                        type={"text"}
                        placeholder={"Experience description"}
                      />
                    </div>
                  </div>

                  <div className="flex w-full items-center gap-3 pt-3">
                    <div className="w-2/6">
                      <SelectRouter
                        name={"academy"}
                        placeholder={"Studies required"}
                        options={academyGrade}
                      />
                    </div>
                    <div className="w-2/6">
                      <InputRouter
                        name={"name_studies"}
                        type={"text"}
                        placeholder={"Studies Name"}
                      />
                    </div>
                    <div className="ml-4 w-1/6">
                      <SelectRouter
                        name={"home_office"}
                        placeholder={"Home Office"}
                        options={selectBasic}
                      />
                    </div>
                    <div className="w-1/6">
                      <SelectRouter
                        name={"position_work_type"}
                        placeholder={"Position Work Type"}
                        options={positionType}
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex w-full flex-col gap-3 pt-3">
                      {lenguageInputs.map((item, i) => (
                        <div key={i} className="flex w-full items-center gap-3">
                          <div className="w-2/6">
                            <SelectRouter
                              name={"language"}
                              placeholder={"Language"}
                              options={languageOptions}
                              value={lenguageInputs[i]?.language}
                              onChange={(e) => updateLenguageSelect(i, e)}
                            />
                          </div>
                          <div className="w-1/6">
                            <InputRouter
                              name={"language_percent"}
                              type={"number"}
                              placeholder={"%"}
                              value={lenguageInputs[i]?.language_percent}
                              onChange={(e) => updateLenguageInput(i, e)}
                            />
                          </div>
                          {i >= 1 ? (
                            <button
                              type="button"
                              className="flex items-center"
                              onClick={() => removeLenguageInput(i)}
                            >
                              <IonIcon
                                icon={closeCircle}
                                size=""
                                className="h-5 w-5 text-grisDisabled hover:text-grisText"
                              ></IonIcon>
                            </button>
                          ) : (
                            <div className="w-5"></div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex self-center">
                      {lenguageInputs.length <= 2 ? (
                        <button
                          className="flex h-6 w-6 items-center rounded-full bg-primario"
                          onClick={() => addLenguageInput()}
                          type="button"
                        >
                          <IonIcon
                            icon={add}
                            size="large"
                            className="text-white"
                          ></IonIcon>
                        </button>
                      ) : (
                        <div className="w-6"></div>
                      )}
                    </div>
                  </div>

                  <div className="flex w-full items-center gap-3 pt-3">
                    <div className="w-2/6">
                      <SelectRouter
                        name={"working_day"}
                        placeholder={"Working Days"}
                        options={workingDay}
                      />
                    </div>
                    <div className="w-1/6">
                      <InputRouter
                        name={"start"}
                        type={"time"}
                        placeholder={"Start"}
                      />
                    </div>
                    <div className="w-1/6">
                      <InputRouter
                        name={"end"}
                        type={"time"}
                        placeholder={"End"}
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex w-full flex-col items-center gap-3 pt-3">
                      {skillsInputs.map((item, i) => (
                        <div key={i} className="flex w-full items-center gap-3">
                          <div className="w-1/3">
                            <InputRouter
                              name={"knowledge"}
                              type={"text"}
                              placeholder={"Knowledge"}
                              value={skillsInputs[i]?.knowledge}
                              onChange={(e) => updateSkillInput(i, e)}
                            />
                          </div>
                          {i >= 1 ? (
                            <button
                              type="button"
                              className="flex items-center"
                              onClick={() => removeSkillInput(i)}
                            >
                              <IonIcon
                                icon={closeCircle}
                                size=""
                                className="h-5 w-5 text-grisDisabled hover:text-grisText"
                              ></IonIcon>
                            </button>
                          ) : (
                            <div className="w-5"></div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex self-center">
                      {skillsInputs.length <= 7 ? (
                        <button
                          className="flex h-6 w-6 items-center rounded-full bg-primario"
                          onClick={() => addSkillInput()}
                          type="button"
                        >
                          <IonIcon
                            icon={add}
                            size="large"
                            className="text-white"
                          ></IonIcon>
                        </button>
                      ) : (
                        <div className="w-6"></div>
                      )}
                    </div>
                  </div>

                  <div className="text-end">
                    <br />
                    <Button
                      form="position-form"
                      className="justify-normal rounded-lg bg-primarioBotones p-4 pl-6 pr-6 font-roboto text-sm font-semibold text-white"
                    >
                      Save
                    </Button>
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
