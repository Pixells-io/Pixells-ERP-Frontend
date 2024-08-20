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
import { Label } from "@/components/ui/label";
import NavigationHeader from "@/components/navigation-header";

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
    label: "Specific contract",
    value: "Specific contract",
  },
  {
    label: "Indeterminate contract",
    value: "Indeterminate contract",
  },
];

const banks = [
  { label: "JPMorgan Chase", value: "JPMorgan Chase" },
  { label: "Bank of America", value: "Bank of America" },
  { label: "Wells Fargo", value: "Wells Fargo" },
  { label: "Citibank ", value: "Citibank " },
  { label: "U.S. Bank", value: "U.S. Bank" },
  { label: "PNC Bank", value: "PNC Bank" },
  { label: "Truist Financial ", value: "Truist Financial " },
  { label: "Goldman Sachs", value: "Goldman Sachs" },
  { label: "Capital One", value: "Capital One" },
  { label: "Bank of New York Mellon", value: "Bank of New York Mellon" },
  { label: "TD Bank ", value: "TD Bank " },
  { label: "American Express Bank", value: "American Express Bank" },
  { label: "Ally Bank", value: "Ally Bank" },
  { label: "Regions Bank", value: "Regions Bank" },
  { label: "Fifth Third Bank", value: "Fifth Third Bank" },
  { label: "KeyBank", value: "KeyBank" },
  { label: "Huntington National Bank", value: "Huntington National Bank" },
  { label: "M&T Bank", value: "M&T Bank" },
  { label: "Comerica Bank", value: "Comerica Bank" },
  { label: "Citizens Bank", value: "Citizens Bank" },
  { label: "First Republic Bank", value: "First Republic Bank" },
  { label: "Zions Bank", value: "Zions Bank" },
  { label: "Silicon Valley Bank", value: "Silicon Valley Bank" },
  { label: "Navy Federal Credit Union", value: "Navy Federal Credit Union" },
  {
    label: "State Employees’ Credit Union",
    value: "State Employees’ Credit Union",
  },
  {
    label: "Pentagon Federal Credit Union (PenFed)",
    value: "Pentagon Federal Credit Union (PenFed)",
  },
  {
    label: "Boeing Employees Credit Union (BECU)",
    value: "Boeing Employees Credit Union (BECU)",
  },
  {
    label: "SchoolsFirst Federal Credit Union",
    value: "SchoolsFirst Federal Credit Union",
  },
];

const legal_benefits = [
  {
    label: "Minimum Wage",
    value: "Minimum Wage",
  },
  {
    label: "Overtime Pay",
    value: "Overtime Pay",
  },
  {
    label: "Unemployment Insurance",
    value: "Unemployment Insurance",
  },
  {
    label: "Workers' Compensation",
    value: "Workers' Compensation",
  },
  {
    label: "Family and Medical Leave (FMLA)",
    value: "Family and Medical Leave (FMLA)",
  },
  {
    label: "Social Security and Medicare",
    value: "Social Security and Medicare",
  },
  {
    label: "Health Insurance (ACA)",
    value: "Health Insurance (ACA)",
  },
  {
    label: "Anti-Discrimination Laws",
    value: "Anti-Discrimination Laws",
  },
  {
    label: "Layoff Notice (WARN Act)",
    value: "Layoff Notice (WARN Act)",
  },
  {
    label: "Paid Vacation and Sick Leave",
    value: "Paid Vacation and Sick Leave",
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
    setAcademicInfo(newFields);
  }

  function updateAcademicField(index, e) {
    const newFields = academicInfo.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
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
    setContratcsInfo(newFields);
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
              USER MANAGEMENT{" "}
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
            <div className="w-fit cursor-pointer">
              <DropzoneImage name={"user_image"} />
            </div>

            {/* Personal Info */}
            <div className="rounded-2xl bg-blancoBg p-5">
              <span className="text-roboto text-sm font-medium text-grisText">
                Personal Information
              </span>
              <div className="flex flex-col pt-4">
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
                  <Label className="flex w-full flex-col gap-2">
                    <p className="pl-1 text-[11px] font-light text-grisHeading">
                      Estado civil
                    </p>
                    <Select
                      onChange={(e) => setStatus(e.value)}
                      options={civilStatus}
                      name={"civil_status"}
                      placeholder={"Civil Status"}
                      className="w-full text-sm font-light"
                    />
                  </Label>

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
                      placeholder={"Spouse Firstname"}
                      type={"text"}
                    />
                    <InputRouter
                      name={"spouse_lastname"}
                      placeholder={"Spouse Lastname"}
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
                    placeholder={"Personal Emial"}
                    type={"email"}
                  />
                </div>

                <div className="flex w-full gap-4 pt-4">
                  <div className="flex h-full w-full items-center gap-3">
                    <div className="flex w-full flex-col gap-2">
                      <DropzoneFile name={"curp_file"} label={"CURP"} />
                      <InputRouter
                        name={"curp_text"}
                        placeholder={"CURP"}
                        type={"text"}
                      />
                    </div>
                  </div>

                  <div className="flex h-full w-full items-center gap-3">
                    <div className="flex w-full flex-col gap-2">
                      <DropzoneFile name={"rfc_file"} label={"RFC"} />
                      <InputRouter
                        name={"rfc_text"}
                        placeholder={"RFC"}
                        type={"text"}
                      />
                    </div>
                  </div>

                  <div className="flex h-full w-full items-center gap-3">
                    <div className="flex w-full flex-col gap-2">
                      <DropzoneFile name={"nss_file"} label={"NSS"} />
                      <InputRouter
                        name={"nss_text"}
                        placeholder={"NSS"}
                        type={"text"}
                      />
                    </div>
                  </div>

                  <div className="flex h-full w-full items-center gap-3">
                    <div className="flex w-full flex-col gap-2">
                      <DropzoneFile name={"id_file"} label={"ID"} />
                      <InputRouter
                        name={"id_date"}
                        placeholder={"ID Date"}
                        type={"date"}
                      />
                    </div>
                  </div>

                  <div className="flex h-full w-full items-center gap-3">
                    <div className="flex w-full flex-col gap-2">
                      <DropzoneFile
                        name={"birth_certificade"}
                        label={"Birth Certificade"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Health Card*/}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Health information
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
                      placeholder={"Allergic"}
                      options={selectBasics}
                    />
                  </div>
                  <div className="w-1/4">
                    <InputRouter
                      name={"specify_allergy"}
                      placeholder={"Specify Allergy"}
                      type={"text"}
                    />
                  </div>
                  <div className="w-1/4">
                    <SelectRouter
                      name={"blood"}
                      placeholder={"Blood Type"}
                      options={bloodType}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*Address Card*/}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Address information
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
                        label={"Address Voucher"}
                      />
                    </div>
                  </div>

                  <div className="flex w-full gap-3">
                    <div className="w-1/4">
                      <InputRouter
                        name={"discrict"}
                        placeholder={"District"}
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
                Emergency contact
              </span>
              <div className="flex w-full gap-3 pt-5">
                <InputRouter
                  name={"emergency_name"}
                  placeholder={"Name"}
                  type={"text"}
                />
                <InputRouter
                  name={"emergency_last_name"}
                  placeholder={"Lastname"}
                  type={"text"}
                />
                <InputRouter
                  name={"emergency_second_last_name"}
                  placeholder={"Second Lastname"}
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
                        placeholder={"Specify Academic Grade"}
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
                Last job
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
                        placeholder={"Company Experience"}
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
                Current position to maintain
              </span>

              <div className="flex w-full items-center gap-3 pt-4">
                <div className="w-1/3">
                  <InputRouter
                    name={"working_center"}
                    placeholder={"Work Center"}
                    type={"text"}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"income_date"}
                    placeholder={"Entry date"}
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
                    placeholder={"Legal Benefits"}
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
                        placeholder={"Contract Type"}
                        options={contracts}
                      />
                    </div>
                    <div className="flex w-1/3 items-center gap-3">
                      <div className="w-1/2">
                        <InputRouter
                          name={"start_contract"}
                          placeholder={"Contract Start"}
                          type={"date"}
                        />
                      </div>
                      <div className="w-1/2">
                        <InputRouter
                          name={"end_contract"}
                          placeholder={"Contract End"}
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
                    placeholder={"Bank Account"}
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
