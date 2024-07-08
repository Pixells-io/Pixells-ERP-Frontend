import React, { useState } from "react";
import { Form, useLoaderData, redirect, NavLink } from "react-router-dom";
import { saveNewUser } from "../utils";

import Select from "react-select";
import InputRouter from "../../../layouts/Masters/FormComponents/input";
import SelectRouter from "../../../layouts/Masters/FormComponents/select";
import DropzoneImage from "@/layouts/Masters/FormComponents/dropzone-image";
import DropzoneFile from "@/components/dropzone-files";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import {
  addCircle,
  chevronBack,
  chevronForward,
  closeCircle,
} from "ionicons/icons";

const selectBasics = [
  {
    label: "Yes",
    value: "1",
  },
  {
    label: "No",
    value: "0",
  },
];

const genreSelect = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];

const civilStatus = [
  {
    label: "Single",
    value: "Single",
  },
  {
    label: "Married",
    value: "Married",
  },
  {
    label: "Concubinage",
    value: "Concubinage",
  },
  {
    label: "Divorced",
    value: "Divorced",
  },
  {
    label: "Widower",
    value: "Widower",
  },
];

const bloodType = [
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "B+",
    value: "B+",
  },
  {
    label: "B-",
    value: "B-",
  },
  {
    label: "AB+",
    value: "AB+",
  },
  {
    label: "AB-",
    value: "AB-",
  },
  {
    label: "O+",
    value: "O+",
  },
  {
    label: "O-",
    value: "O-",
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

const contracts = [
  {
    label: "Example",
    value: "Example",
  },
];

const banks = [
  {
    label: "Bank",
    value: "Bank",
  },
];

const legal_benefits = [
  {
    label: "Benefit 1",
    value: "Benefit 1",
  },
  {
    label: "Benefit 2",
    value: "Benefit 2",
  },
  {
    label: "Benefit 3",
    value: "Benefit 3",
  },
  {
    label: "Benefit 4",
    value: "Benefit 4",
  },
  {
    label: "Benefit 5",
    value: "Benefit 5",
  },
];

function FormCreateUser() {
  const { areas, positions, users } = useLoaderData();
  const [status, setStatus] = useState("");
  const [academicInfo, setAcademicInfo] = useState([
    {
      academic_grade: "",
      specify_academic: "",
      academic_voucher: "",
    },
  ]);
  const [workingInfo, setWorkingInfo] = useState([
    {
      company_experience: "",
      position_experience: "",
      years_experience: "",
    },
  ]);
  const [contractsInfo, setContratcsInfo] = useState([
    {
      contract: "",
      start_contract: "",
      end_contract: "",
    },
  ]);

  const selectArea = [];
  const selectPosition = [];
  const selectUsers = [];

  arrayFillAreas(areas, selectArea);
  arrayFillPositions(positions, selectPosition);
  arrayFillUsers(users, selectUsers);

  function arrayFillAreas(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.nombre,
        value: element.id,
      });
    });
  }

  function arrayFillPositions(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.position_name,
        value: element.id,
      });
    });
  }

  function arrayFillUsers(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: `${element.name} ${element.last_name} ${element.second_last_name}`,
        value: element.id,
      });
    });
  }

  function addAcademicField() {
    const academicInput = {
      academic_grade: "",
      specify_academic: "",
      academic_voucher: "",
    };

    setAcademicInfo([...academicInfo, academicInput]);
  }

  function removeAcademicField(index) {
    const newFields = academicInfo.filter((item, i) => index !== i);
    console.log(newFields);
    setAcademicInfo(newFields);
  }

  function updateAcademicField(index, e) {
    // console.log(e);
    const newFields = academicInfo.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
    // console.log(newFields);
    setAcademicInfo(newFields);
  }

  function addWorkingInputs() {
    const academicInput = {
      company_experience: "",
      position_experience: "",
      years_experience: "",
    };
    setWorkingInfo([...workingInfo, academicInput]);
  }

  function removeWorkingInputs(index) {
    const newFields = workingInfo.filter((item, i) => index !== i);
    // console.log(newFields);
    setWorkingInfo(newFields);
  }

  function addContractInputs() {
    const contractInput = {
      contract: "",
      start_contract: "",
      end_contract: "",
    };
    setContratcsInfo([...contractsInfo, contractInput]);
  }

  function removeContractInputs(index) {
    const newFields = contractsInfo.filter((item, i) => index !== i);
    // console.log(newFields);
    setContratcsInfo(newFields);
  }

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-scroll rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">organization</div>
        </div>
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
            New User
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
        <Form
          action="/organization/create-user"
          method="post"
          encType="multipart/form-data"
          id="form-create-user"
        >
          <div className="">
            <div className="w-1/4">
              <DropzoneImage name={"user_image"} />
            </div>

            {/* Personal Info */}
            <div className="rounded-2xl bg-blancoBg p-5">
              <span className="text-roboto text-sm font-medium text-grisText">
                Personal Information
              </span>
              <div className="flex pt-4">
                <div className="w-4/6 pr-8">
                  <div className="flex gap-3">
                    <InputRouter
                      name={"name"}
                      placeholder={"Name"}
                      type={"text"}
                      required={"true"}
                    />
                    <InputRouter
                      name={"last_name"}
                      placeholder={"Last Name"}
                      type={"text"}
                    />
                    <InputRouter
                      name={"second_last_name"}
                      placeholder={"Second Last Name"}
                      type={"text"}
                    />
                  </div>
                  <div className="mt-3 flex gap-3">
                    <InputRouter
                      name={"date_of_birth"}
                      placeholder={"Date of Birth"}
                      type={"date"}
                    />
                    <InputRouter
                      name={"city_of_birth"}
                      placeholder={"City of Birth"}
                      type={"text"}
                    />
                    <InputRouter
                      name={"state_of_birth"}
                      placeholder={"State of Birth"}
                      type={"text"}
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-3">
                    <SelectRouter
                      name={"genre"}
                      placeholder={"Genre"}
                      options={genreSelect}
                    />
                    <Select
                      onChange={(e) => setStatus(e.value)}
                      options={civilStatus}
                      name={"civil_status"}
                      placeholder={"Civil Status"}
                      className="w-full text-sm font-light"
                    />
                    <InputRouter
                      name={"childrens"}
                      placeholder={"Children"}
                      type={"number"}
                    />
                  </div>
                  {status === "Married" ? (
                    <div className="flex gap-3 pt-3">
                      <InputRouter
                        name={"spouse_firstname"}
                        placeholder={"Spouse First Name"}
                        type={"text"}
                      />
                      <InputRouter
                        name={"spouse_lastname"}
                        placeholder={"Spouse Last Name"}
                        type={"text"}
                      />
                      <InputRouter
                        name={"spouse_taxid"}
                        placeholder={"Spouse Tax ID"}
                        type={"text"}
                      />
                    </div>
                  ) : null}
                  <div className="flex gap-3 pt-3">
                    <InputRouter
                      name={"phone"}
                      placeholder={"Phone"}
                      type={"number"}
                    />
                    <InputRouter
                      name={"personal_email"}
                      placeholder={"Personal Email"}
                      type={"email"}
                    />
                  </div>

                  <div className="flex w-full gap-3 pt-3">
                    <div className="flex w-full items-center gap-3">
                      <div className="w-full">
                        <DropzoneFile name={"curp_file"} label={"CURP"} />
                      </div>
                      <div className="w-full">
                        <InputRouter
                          name={"curp_text"}
                          placeholder={"Curp"}
                          type={"text"}
                        />
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-3">
                      <div className="w-full">
                        <DropzoneFile name={"rfc_file"} label={"RFC"} />
                      </div>
                      <div className="w-full">
                        <InputRouter
                          name={"rfc_text"}
                          placeholder={"Rfc"}
                          type={"text"}
                        />
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-3">
                      <div className="w-full">
                        <DropzoneFile name={"nss_file"} label={"NSS"} />
                      </div>
                      <div className="w-full">
                        <InputRouter
                          name={"nss_text"}
                          placeholder={"NSS"}
                          type={"text"}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-2/6">
                  <div>
                    <DropzoneFile
                      name={"birth_certificade"}
                      label={"Birth Certificate"}
                    />
                  </div>
                  <div className="flex items-center gap-3 pr-6 pt-4">
                    <div className="w-1/2">
                      <DropzoneFile name={"id_file"} label={"ID"} />
                    </div>
                    <div className="w-1/2">
                      <InputRouter
                        name={"id_date"}
                        placeholder={"Id Date"}
                        type={"date"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Health Card*/}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Health Information
              </span>
              <div className="flex pt-4">
                <div className="flex w-full items-center gap-3">
                  <div className="w-1/4">
                    <SelectRouter
                      name={"chronic_diseases"}
                      placeholder={"Chronic Diseases"}
                      options={selectBasics}
                    />
                  </div>
                  <div className="w-1/4">
                    <SelectRouter
                      name={"alergic"}
                      placeholder={"Alergic"}
                      options={selectBasics}
                    />
                  </div>
                  <div className="w-1/4">
                    <InputRouter
                      name={"specify_allergy"}
                      placeholder={"Specify the Allergy"}
                      type={"text"}
                    />
                  </div>
                  <div className="w-1/4">
                    <SelectRouter
                      name={"blood"}
                      placeholder={"Type of Blood"}
                      options={bloodType}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*Address Card*/}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Address Information
              </span>
              <div className="flex w-full pt-4">
                <div className="w-full">
                  <div className="flex w-full items-center gap-3">
                    <div className="w-1/4">
                      <InputRouter
                        name={"street"}
                        placeholder={"Street"}
                        type={"text"}
                      />
                    </div>
                    <div className="flex w-1/4 gap-3">
                      <div className="w-1/2">
                        <InputRouter
                          name={"ext"}
                          placeholder={"Ext"}
                          type={"text"}
                        />
                      </div>
                      <div className="w-1/2">
                        <InputRouter
                          name={"int"}
                          placeholder={"Int"}
                          type={"text"}
                        />
                      </div>
                    </div>
                    <div className="w-1/4">
                      <InputRouter
                        name={"cp"}
                        placeholder={"CP"}
                        type={"text"}
                      />
                    </div>
                    <div className="w-1/4">
                      <DropzoneFile
                        name={"address_voucher"}
                        label={"Adress Voucher"}
                      />
                    </div>
                  </div>

                  <div className="flex w-full gap-3">
                    <div className="w-1/4">
                      <InputRouter
                        name={"discrict"}
                        placeholder={"Discrict"}
                        type={"text"}
                      />
                    </div>
                    <div className="w-1/4">
                      <InputRouter
                        name={"city"}
                        placeholder={"City"}
                        type={"text"}
                      />
                    </div>
                    <div className="w-1/4">
                      <InputRouter
                        name={"state"}
                        placeholder={"State"}
                        type={"text"}
                      />
                    </div>
                    <div className="w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>

            {/*Emergency Contact*/}
            <div className="mt-10 rounded-2xl bg-blancoBg p-5">
              <span className="text-roboto text-sm font-medium text-grisText">
                Emergency Contact
              </span>
              <div className="flex w-full gap-3 pt-5">
                <InputRouter
                  name={"emergency_name"}
                  placeholder={"Name"}
                  type={"text"}
                />
                <InputRouter
                  name={"emergency_last_name"}
                  placeholder={"Last Name"}
                  type={"text"}
                />
                <InputRouter
                  name={"emergency_second_last_name"}
                  placeholder={"Second Last Name"}
                  type={"text"}
                />

                <InputRouter
                  name={"emergency_relationship"}
                  placeholder={"Relationship"}
                  type={"text"}
                />

                <InputRouter
                  name={"emergency_phone"}
                  placeholder={"Phone"}
                  type={"text"}
                />
              </div>
            </div>

            {/*Academic Information*/}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Academic Information
              </span>
              <div className="flex flex-col items-center gap-3 pt-4">
                <input
                  type="text"
                  value={academicInfo}
                  className="hidden"
                  readOnly
                  name="academics"
                />
                {academicInfo?.map((item, i) => (
                  <div key={i} className="flex w-full items-center gap-3">
                    <div className="w-1/3">
                      <SelectRouter
                        name={"academic_grade"}
                        placeholder={"Academic Grade"}
                        options={academyGrade}
                        // onChange={(e) => updateAcademicField(i, e)}
                        // value={academicInfo[i].academic_grade}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"specify_academic"}
                        placeholder={"Specify the Academic Grade"}
                        type={"text"}
                        onChange={(e) => updateAcademicField(i, e)}
                        value={academicInfo[i].specify_academic}
                      />
                    </div>
                    <div className="w-1/3">
                      <DropzoneFile
                        name={"academic_voucher"}
                        label={"Academic Voucher"}
                      />
                    </div>
                    {i !== 0 || academicInfo.length !== i + 1 ? (
                      <button
                        type="button"
                        className="flex items-center"
                        onClick={() => removeAcademicField(i)}
                      >
                        <IonIcon
                          icon={closeCircle}
                          size=""
                          className="h-5 w-5 text-grisDisabled hover:text-grisText"
                        ></IonIcon>
                      </button>
                    ) : (
                      <div className="w-9"></div>
                    )}

                    {academicInfo.length == i + 1 &&
                    academicInfo.length <= 2 ? (
                      <button
                        type="button"
                        className="flex"
                        onClick={() => addAcademicField()}
                      >
                        <IonIcon
                          icon={addCircle}
                          className="h-8 w-8 text-primario"
                        ></IonIcon>
                      </button>
                    ) : (
                      <div className="w-9"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Last Working Information */}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Last Working Information
              </span>
              <div className="flex flex-col items-center gap-3 pt-4">
                <input
                  type="text"
                  value={workingInfo}
                  className="hidden"
                  readOnly
                  name="working-info"
                />

                {workingInfo?.map((item, i) => (
                  <div key={i} className="flex w-full items-center gap-3">
                    <div className="w-1/3">
                      <InputRouter
                        name={"company_experience"}
                        placeholder={"Company"}
                        type={"text"}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"position_experience"}
                        placeholder={"Position"}
                        type={"text"}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"years_experience"}
                        placeholder={"Years of Experience"}
                        type={"number"}
                      />
                    </div>
                    {i !== 0 || workingInfo.length !== i + 1 ? (
                      <button
                        type="button"
                        className="flex items-center"
                        onClick={() => removeWorkingInputs(i)}
                      >
                        <IonIcon
                          icon={closeCircle}
                          size=""
                          className="h-5 w-5 text-grisDisabled hover:text-grisText"
                        ></IonIcon>
                      </button>
                    ) : (
                      <div className="w-[22px]"></div>
                    )}

                    {workingInfo.length == i + 1 && workingInfo.length <= 2 ? (
                      <button
                        type="button"
                        className="flex"
                        onClick={() => addWorkingInputs()}
                      >
                        <IonIcon
                          icon={addCircle}
                          className="h-8 w-8 text-primario"
                        ></IonIcon>
                      </button>
                    ) : (
                      <div className="w-9"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/*Working Information*/}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Current Position To Hold
              </span>

              <div className="flex w-full items-center gap-3 pt-4">
                <div className="w-1/3">
                  <InputRouter
                    name={"working_center"}
                    placeholder={"Working Center"}
                    type={"text"}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"income_date"}
                    placeholder={"Income Date"}
                    type={"date"}
                  />
                </div>
                <div className="w-1/3 pl-4">
                  <DropzoneFile name={"cv"} label={"CV"} />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <div className="mt-4 w-1/3">
                  <SelectRouter
                    name={"area"}
                    placeholder={"Area"}
                    options={selectArea}
                  />
                </div>
                <div className="mt-4 w-1/3">
                  <SelectRouter
                    name={"boss"}
                    placeholder={"Boss"}
                    options={selectUsers}
                  />
                </div>
                <div className="mt-4 w-1/3">
                  <SelectRouter
                    name={"position"}
                    placeholder={"Position"}
                    options={selectPosition}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-1/3">
                  <InputRouter
                    name={"monthly_pay"}
                    placeholder={"Monthly Pay"}
                    type={"number"}
                  />
                </div>
                <div className="w-1/3">
                  <SelectRouter
                    name="legal_benefits"
                    placeholder={"Legal Benefit"}
                    isMulti={true}
                    options={legal_benefits}
                  />
                </div>
                <div className="w-1/3"></div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-1/3">
                  <InputRouter
                    name={"institutional_email"}
                    placeholder={"Institutional Email"}
                    type={"email"}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"institutional_phone"}
                    placeholder={"Institutional Phone"}
                    type={"phone"}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"institutional_phone_ext"}
                    placeholder={"Ext"}
                    type={"number"}
                  />
                </div>
              </div>

              {/* contracts */}
              <div className="flex flex-col items-center gap-3 pt-4">
                <input
                  type="text"
                  value={contractsInfo}
                  className="hidden"
                  readOnly
                  name="contracts"
                />

                {contractsInfo?.map((item, i) => (
                  <div key={i} className="flex w-full items-center gap-3">
                    <div className="w-1/3">
                      <SelectRouter
                        name={"contract"}
                        placeholder={"Type of Contract"}
                        options={contracts}
                      />
                    </div>
                    <div className="flex w-1/3 items-center gap-3">
                      <div className="w-1/2">
                        <InputRouter
                          name={"start_contract"}
                          placeholder={"Start Contract"}
                          type={"date"}
                        />
                      </div>
                      <div className="w-1/2">
                        <InputRouter
                          name={"end_contract"}
                          placeholder={"End Contract"}
                          type={"date"}
                        />
                      </div>
                    </div>
                    {i !== 0 || contractsInfo.length !== i + 1 ? (
                      <button
                        type="button"
                        className="flex items-center"
                        onClick={() => removeContractInputs(i)}
                      >
                        <IonIcon
                          icon={closeCircle}
                          size=""
                          className="h-5 w-5 text-grisDisabled hover:text-grisText"
                        ></IonIcon>
                      </button>
                    ) : (
                      <div className="w-[22px]"></div>
                    )}

                    {contractsInfo.length == i + 1 &&
                    contractsInfo.length <= 2 ? (
                      <button
                        type="button"
                        className="flex"
                        onClick={() => addContractInputs()}
                      >
                        <IonIcon
                          icon={addCircle}
                          className="h-8 w-8 text-primario"
                        ></IonIcon>
                      </button>
                    ) : (
                      <div className="w-9"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* bank */}
              <div className="flex items-center gap-3 pt-4">
                <div className="w-1/3">
                  <SelectRouter
                    name={"bank"}
                    placeholder={"Bank"}
                    options={banks}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"bank_account"}
                    placeholder={"bank Account"}
                    type={"text"}
                  />
                </div>
                <div className="w-1/3">
                  <SelectRouter
                    name={"regulation"}
                    placeholder={"Regulation"}
                    options={selectBasics}
                  />
                </div>
              </div>
            </div>

            {/*Password*/}
            <div className="mt-10 rounded-2xl bg-blancoBg p-5">
              <span className="text-roboto text-sm font-medium text-grisText">
                Password
              </span>
              <div className="flex pt-4">
                <div className="flex w-full gap-3">
                  <div className="w-1/4">
                    <InputRouter
                      name={"password"}
                      placeholder={"********"}
                      type={"password"}
                    />
                  </div>
                  <div className="w-1/4">
                    <InputRouter
                      name={"confirm_password"}
                      placeholder={"********"}
                      type={"password"}
                    />
                  </div>
                  <div className="w-2/4 text-end">
                    <Button
                      type="submit"
                      className="justify-normal rounded-lg bg-primarioBotones px-8 font-roboto text-sm font-semibold text-white hover:bg-primario"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default FormCreateUser;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewUser(data);

  return redirect("/organization");
}
