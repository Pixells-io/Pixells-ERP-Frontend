import React, { useState } from "react";
import { Form, redirect, useLoaderData, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { add, closeCircle, create } from "ionicons/icons";

import NavigationHeader from "@/components/navigation-header";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import CheckboxRouter from "@/layouts/Masters/FormComponents/checkbox";
import { editPosition } from "../../utils";

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

function MainPosition() {
  const { id } = useParams();
  const { areas, positions, position } = useLoaderData();
  const [disabled, setDisabled] = useState(true);
  const [positionsInputs, setPositionsInputs] = useState(
    position?.data?.coordinate,
  );
  const [authInputs, setAuthInputs] = useState(position?.data?.authority);
  const [resInputs, setResInputs] = useState(position?.data?.responsability);
  const [lenguageInputs, setLenguageInputs] = useState(
    position?.data?.language,
  );
  const [skillsInputs, setSkillsInputs] = useState(position?.data?.knowledge);

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
        <div className="flex items-center justify-between">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            Show Position
          </h2>
          <div className="flex items-center gap-6">
            {/* <div className="flex items-center gap-3">
              <p>Edit Mode</p>
              <span
                className={
                  disabled
                    ? "rounded-full bg-red-400 px-4 py-1 text-white"
                    : "rounded-full bg-green-400 px-4 py-1 text-white"
                }
              >
                {disabled ? "OFF" : "ON"}
              </span>
            </div> */}
            <button
              className={`flex h-[36px] w-[36px] items-center justify-center rounded-full bg-blancoBox p-2`}
              onClick={() => setDisabled(!disabled)}
              type="button"
            >
              {disabled ? (
                <IonIcon
                  icon={create}
                  size=""
                  className="flex h-full w-full text-grisText"
                />
              ) : (
                <IonIcon
                  icon={closeCircle}
                  size=""
                  className="flex h-full w-full text-grisText"
                />
              )}
            </button>
          </div>
        </div>

        {/*USER BOX CREATE*/}
        <div className="rounded-xl p-4">
          <Form
            id="position-update-form"
            action={`/organization/position/${id}`}
            method="post"
            encType="multipart/form-data"
          >
            <input type="hidden" name="position_id" value={id} />
            {/* General Information */}
            <div className="rounded-2xl bg-blancoBg p-5">
              <span className="text-roboto text-sm font-medium text-grisText">
                General Information
              </span>
              <div className="w-full pr-1 pt-4">
                <div className="flex w-full items-center gap-3">
                  <div className="w-1/4">
                    <SelectRouter
                      name={"area_id"}
                      placeholder={"Select Area"}
                      options={selectArea}
                      defaultVal={position?.data?.area_array}
                      disabled={disabled}
                    />
                  </div>
                  <div className="w-1/4">
                    <SelectRouter
                      name={"position_type"}
                      placeholder={"Position Type"}
                      options={positionNames}
                      defaultVal={position?.data?.position_type_array}
                      disabled={disabled}
                    />
                  </div>
                  <div className="w-1/4">
                    <InputRouter
                      name={"position_name"}
                      type={"text"}
                      placeholder={"Position Name"}
                      defaultVal={position?.data.position?.position_name}
                      disabled={disabled}
                    />
                  </div>
                  <div className="w-1/4">
                    <SelectRouter
                      name={"permision_access"}
                      placeholder={"Permission Access"}
                      options={selectBasic}
                      defaultVal={position?.data?.permision_access_array}
                      disabled={disabled}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <div className="flex w-full gap-3">
                    <div className="w-1/4 shrink-0">
                      <SelectRouter
                        name={"boss_id"}
                        placeholder={"Boss Position"}
                        options={selectPosition}
                        disabled={disabled}
                      />
                    </div>
                    <div className="flex w-1/4 flex-col gap-3">
                      {positionsInputs.map((item, i) => (
                        <div key={i} className="flex w-full gap-3">
                          <div className="flex w-full">
                            <SelectRouter
                              name={"coordinate_id"}
                              placeholder={"Coordinate Position"}
                              options={selectPosition}
                              onChange={(e) => updatePositionInput(i, e)}
                              value={positionsInputs[i]?.position_array}
                              disabled={disabled}
                              // defaultVal={
                              //   position?.data.coordinate[i].position_array
                              // }
                            />
                          </div>
                          {i !== 0 || positionsInputs?.length !== i + 1 ? (
                            <div className="flex">
                              <button
                                type="button"
                                className="flex items-center"
                                onClick={() => removePositionInput(i)}
                                disabled={disabled}
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
                    {positionsInputs?.length <= 7 ? (
                      <button
                        className="flex h-6 w-6 items-center rounded-full bg-primario"
                        onClick={() => addPositionInput()}
                        type="button"
                        disabled={disabled}
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
                    placeholder={"Objectives of the position"}
                    defaultVal={position?.data?.position?.objetive}
                    disabled={disabled}
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
                          placeholder={"Authority Name"}
                          value={authInputs[i]?.authority}
                          onChange={(e) => updateAuthInput(i, e)}
                          disabled={disabled}
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
                          value={authInputs[i]?.coordinate}
                          onChange={(e) => updateAuthSelect(i, e)}
                          disabled={disabled}
                        />
                      </div>
                      {i >= 1 ? (
                        <button
                          type="button"
                          className="flex items-center"
                          onClick={() => removeAuthInput(i)}
                          disabled={disabled}
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
                  {authInputs?.length <= 7 && (
                    <button
                      className="flex h-6 w-6 items-center rounded-full bg-primario"
                      onClick={() => addAuthInput()}
                      type="button"
                      disabled={disabled}
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
                Responsability of the Position
              </span>
              <div className="flex items-center justify-between gap-4 pr-2 pt-4">
                <div className="flex w-2/4 flex-col gap-3">
                  {resInputs?.map((input, i) => (
                    <div key={i} className="flex w-full items-center gap-3">
                      <InputRouter
                        name="responsability"
                        type="text"
                        placeholder="Responsability"
                        value={resInputs[i]?.responsability}
                        onChange={(e) => updateResInput(i, e)}
                        disabled={disabled}
                      />
                      {i >= 1 ? (
                        <button
                          type="button"
                          className="flex items-center"
                          onClick={() => removeResInput(i)}
                          disabled={disabled}
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
                  {resInputs?.length <= 7 ? (
                    <button
                      className="flex h-6 w-6 items-center rounded-full bg-primario"
                      onClick={() => addResInput()}
                      type="button"
                      disabled={disabled}
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
                Description of the position
              </span>
              <div className="flex w-full pr-2 pt-4">
                <div className="w-full">
                  <div className="flex w-full items-center gap-3">
                    <div className="w-1/3">
                      <SelectRouter
                        name={"experience_years"}
                        placeholder={"Experience Years"}
                        options={experienceYears}
                        defaultVal={position?.data?.perfil?.experience_years}
                        disabled={disabled}
                      />
                    </div>
                    <div className="w-1/3">
                      <SelectRouter
                        isMulti={true}
                        name={"experience_sector"}
                        placeholder={"Sector of Experience"}
                        options={sectorExperience}
                        defaultVal={position?.data?.perfil?.experience_sector}
                        disabled={disabled}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"experience_description"}
                        type={"text"}
                        placeholder={"Describe the Experience"}
                        defaultVal={
                          position?.data?.perfil?.experience_description
                        }
                        disabled={disabled}
                      />
                    </div>
                  </div>

                  <div className="flex w-full items-center gap-3 pt-3">
                    <div className="w-2/6">
                      <SelectRouter
                        name={"academy"}
                        placeholder={"Required Studies"}
                        options={academyGrade}
                        defaultVal={position?.data?.perfil?.academy}
                        disabled={disabled}
                      />
                    </div>
                    <div className="w-2/6">
                      <InputRouter
                        name={"name_studies"}
                        type={"text"}
                        placeholder={"Describe the Studies"}
                        defaultVal={position?.data?.perfil?.name_studies}
                        disabled={disabled}
                      />
                    </div>
                    <div className="ml-4 w-1/6">
                      <SelectRouter
                        name={"home_office"}
                        placeholder={"Home Office"}
                        options={selectBasic}
                        defaultVal={position?.data?.perfil?.home_office}
                        disabled={disabled}
                      />
                    </div>
                    <div className="w-1/6">
                      <SelectRouter
                        name={"position_work_type"}
                        placeholder={"Type of Work"}
                        options={positionType}
                        defaultVal={position?.data?.perfil?.position_work_type}
                        disabled={disabled}
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex w-full flex-col gap-3 pt-3">
                      {lenguageInputs?.map((item, i) => (
                        <div key={i} className="flex w-full items-center gap-3">
                          <div className="w-2/6">
                            <SelectRouter
                              name={"language"}
                              placeholder={"Language"}
                              options={languageOptions}
                              value={lenguageInputs[i]?.lenguage}
                              onChange={(e) => updateLenguageSelect(i, e)}
                              disabled={disabled}
                            />
                          </div>
                          <div className="w-1/6">
                            <InputRouter
                              name={"language_percent"}
                              type={"number"}
                              placeholder={"%"}
                              value={lenguageInputs[i]?.lenguage_percent}
                              onChange={(e) => updateLenguageInput(i, e)}
                              disabled={disabled}
                            />
                          </div>
                          {i >= 1 ? (
                            <button
                              type="button"
                              className="flex items-center"
                              onClick={() => removeLenguageInput(i)}
                              disabled={disabled}
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
                      {lenguageInputs?.length <= 2 ? (
                        <button
                          className="flex h-6 w-6 items-center rounded-full bg-primario"
                          onClick={() => addLenguageInput()}
                          type="button"
                          disabled={disabled}
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
                        placeholder={"Working Day"}
                        options={workingDay}
                        defaultVal={position?.data?.perfil?.working_day}
                        disabled={disabled}
                      />
                    </div>
                    <div className="w-1/6">
                      <InputRouter
                        name={"start"}
                        type={"time"}
                        placeholder={"Start"}
                        defaultVal={position?.data?.perfil?.start}
                        disabled={disabled}
                      />
                    </div>
                    <div className="w-1/6">
                      <InputRouter
                        name={"end"}
                        type={"time"}
                        placeholder={"End"}
                        defaultVal={position?.data?.perfil?.end}
                        disabled={disabled}
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex w-full flex-col items-center gap-3 pt-3">
                      {skillsInputs?.map((item, i) => (
                        <div key={i} className="flex w-full items-center gap-3">
                          <div className="w-1/3">
                            <InputRouter
                              name={"knowledge"}
                              type={"text"}
                              placeholder={"Knowledge/Skill"}
                              value={skillsInputs[i]?.knowledge}
                              onChange={(e) => updateSkillInput(i, e)}
                              disabled={disabled}
                            />
                          </div>
                          {i >= 1 ? (
                            <button
                              type="button"
                              className="flex items-center"
                              onClick={() => removeSkillInput(i)}
                              disabled={disabled}
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
                      {skillsInputs?.length <= 7 ? (
                        <button
                          className="flex h-6 w-6 items-center rounded-full bg-primario"
                          onClick={() => addSkillInput()}
                          type="button"
                          disabled={disabled}
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
                    {disabled !== true && (
                      <Button
                        form="position-update-form"
                        className="justify-normal rounded-lg bg-primarioBotones p-4 pl-6 pr-6 font-roboto text-sm font-semibold text-white"
                      >
                        Save Position
                      </Button>
                    )}
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

export default MainPosition;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await editPosition(data);

  return redirect("/organization");
}
