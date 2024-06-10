import React, { useState } from "react";
import Select from "react-select";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  addCircleOutline,
  chevronBack,
  chevronForward,
  closeCircle,
} from "ionicons/icons";

import { Form, useLoaderData, redirect } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DropzoneImage from "@/layouts/Masters/FormComponents/dropzone-image";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import DropzoneFile from "@/components/dropzone-files";

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
];

const workingbenefits = [
  {
    label: "Health Insurance",
    value: "Health Insurance",
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

function MainUser() {
  const { areas, positions, users, user } = useLoaderData();
  console.log(user);
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

  // inputs options
  const selectArea = [];
  const selectPosition = [];
  const selectUsers = [];

  // user info
  const userAreas = [];
  const userPosition = [];

  const civilStatusUser = [];

  const chronicUser = [];
  const alergicUser = [];
  const bloodUser = [];

  // user arrays
  arrayFillAreas(areas, selectArea);
  arrayFillPositions(positions, selectPosition);
  arrayFillUsers(users, selectUsers);

  // arrayUserArea(user.data.user.area, userAreas);
  // arrayUserArea(user?.data.user.position, userPosition);
  createOptionArray(user.data.user.civil_status, civilStatusUser);

  createOptionBoolean(user.data.user.chronic_diseases, chronicUser);
  createOptionBoolean(user.data.user.alergic, alergicUser);
  createOptionArray(user.data.user.blood, bloodUser);

  function arrayFillAreas(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.nombre,
        value: element.id,
        placeholder: "0",
      });
    });
  }

  function arrayFillPositions(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.position_name,
        value: element.id,
        placeholder: "0",
      });
    });
  }

  function arrayFillUsers(data, array) {
    let dataParse = data.data;

    dataParse.forEach((element) => {
      array.push({
        label: element.name,
        value: element.id,
      });
    });
  }

  function createOptionBoolean(data, array) {
    const dataArray = new Array(data);
    dataArray?.forEach((item) => {
      array.push({
        label: item == 0 ? "No" : "Yes",
        value: item,
      });
    });
  }

  function createOptionArray(data, array) {
    const dataArray = new Array(data);
    dataArray?.forEach((item) => {
      array.push({
        label: item,
        value: item,
      });
    });
  }

  // fields

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
      <div className="ml-4 flex w-full flex-col gap-4 space-y-4 overflow-x-auto rounded-lg bg-gris p-8">
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
          <div className="font-roboto text-grisText">organization</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-[#44444F]">
              USER MANAGEMENT
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            <div>4 service</div>
            <div className="text-2xl">&bull;</div>
            <div>9 costumers</div>
          </div>
        </div>
        <div>
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            New User
          </h2>
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
              {/* <UserImage name={"user_image"} label={"User Image"} /> */}
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
                      defaultVal={user?.data.user.name}
                    />
                    <InputRouter
                      name={"last_name"}
                      placeholder={"Last Name"}
                      type={"text"}
                      defaultVal={user?.data.user.last_name}
                    />
                    <InputRouter
                      name={"second_last_name"}
                      placeholder={"Second Last Name"}
                      type={"text"}
                      defaultVal={user?.data.user.second_last_name}
                    />
                  </div>
                  <div className="mt-3 flex gap-3">
                    <InputRouter
                      name={"date_of_birth"}
                      placeholder={"Date of Birth"}
                      type={"date"}
                      defaultVal={user?.data.user.date_of_birth}
                    />
                    <InputRouter
                      name={"city_of_birth"}
                      placeholder={"City of Birth"}
                      type={"text"}
                      defaultVal={user?.data.user.city_of_birth}
                    />
                    <InputRouter
                      name={"state_of_birth"}
                      placeholder={"State of Birth"}
                      type={"text"}
                      defaultVal={user?.data.user.state_of_birth}
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-3">
                    <Select
                      name={"genre"}
                      placeholder={"Genre"}
                      options={genreSelect}
                      className="w-full text-sm font-light"
                      defaultValue={user?.data.user.genre}
                    />
                    <Select
                      name={"civil_status"}
                      className="w-full text-sm font-light"
                      placeholder={"Civil Status"}
                      options={civilStatus}
                      defaultValue={civilStatusUser}
                    />
                    <InputRouter
                      name={"childrens"}
                      placeholder={"Children"}
                      type={"number"}
                      defaultVal={user?.data.user.childrens}
                    />
                  </div>
                  {status === "Married" ? (
                    <div className="flex gap-3 pt-3">
                      <InputRouter
                        name={"spouse_firstname"}
                        placeholder={"Spouse First Name"}
                        type={"text"}
                        defaultVal={user?.data.user.spouse_firstname}
                      />
                      <InputRouter
                        name={"spouse_lastname"}
                        placeholder={"Spouse Last Name"}
                        type={"text"}
                        defaultVal={user?.data.user.spouse_lastname}
                      />
                      <InputRouter
                        name={"spouse_taxid"}
                        placeholder={"Spouse Tax ID"}
                        type={"text"}
                        defaultVal={user?.data.user.spouse_taxid}
                      />
                    </div>
                  ) : null}
                  <div className="flex gap-3 pt-3">
                    <InputRouter
                      name={"phone"}
                      placeholder={"Phone"}
                      type={"number"}
                      defaultVal={user?.data.user.phone}
                    />
                    <InputRouter
                      name={"personal_email"}
                      placeholder={"Personal Email"}
                      type={"email"}
                      defaultVal={user?.data.user.personal_email}
                    />
                  </div>

                  <div className="flex w-full gap-3 pt-3">
                    <div className="flex w-full items-center gap-3">
                      <div className="w-full">
                        {/* <FileRouter name={"curp_file"} label={"CURP"} /> */}
                        <DropzoneFile name={"curp_file"} label={"CURP"} />
                      </div>
                      <div className="w-full">
                        <InputRouter
                          name={"curp_text"}
                          placeholder={"Curp"}
                          type={"text"}
                          defaultVal={user?.data.user.curp_text}
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
                          defaultVal={user?.data.user.rfc_text}
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
                          defaultVal={user?.data.user.nss_text}
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
                        defaultVal={user?.data.user.id_date}
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
                    <Select
                      name={"chronic_diseases"}
                      placeholder={"Chronic Diseases"}
                      className="w-full text-sm font-light"
                      options={selectBasics}
                      defaultValue={chronicUser}
                    />
                  </div>
                  <div className="w-1/4">
                    <Select
                      name={"alergic"}
                      className="w-full text-sm font-light"
                      placeholder={"Alergic"}
                      options={selectBasics}
                      defaultValue={alergicUser}
                    />
                  </div>
                  <div className="w-1/4">
                    <InputRouter
                      name={"specify_allergy"}
                      placeholder={"Specify the Allergy"}
                      type={"text"}
                      defaultVal={user?.data.user.specify_allergy}
                    />
                  </div>
                  <div className="w-1/4">
                    <Select
                      name={"blood"}
                      className="w-full text-sm font-light"
                      placeholder={"Type of Blood"}
                      options={bloodType}
                      defaultValue={bloodUser}
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
                        defaultVal={user?.data.user.street}
                      />
                    </div>
                    <div className="flex w-1/4 gap-3">
                      <div className="w-1/2">
                        <InputRouter
                          name={"ext"}
                          placeholder={"Ext"}
                          type={"text"}
                          defaultVal={user?.data.user.ext}
                        />
                      </div>
                      <div className="w-1/2">
                        <InputRouter
                          name={"int"}
                          placeholder={"Int"}
                          type={"text"}
                          defaultVal={user?.data.user.int}
                        />
                      </div>
                    </div>
                    <div className="w-1/4">
                      <InputRouter
                        name={"cp"}
                        placeholder={"CP"}
                        type={"text"}
                        defaultVal={user?.data.user.cp}
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
                        defaultVal={user?.data.user.discrict}
                      />
                    </div>
                    <div className="w-1/4">
                      <InputRouter
                        name={"city"}
                        placeholder={"City"}
                        type={"text"}
                        defaultVal={user?.data.user.city}
                      />
                    </div>
                    <div className="w-1/4">
                      <InputRouter
                        name={"state"}
                        placeholder={"State"}
                        type={"text"}
                        defaultVal={user?.data.user.state}
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
                  defaultVal={user?.data.user.emergency_name}
                />
                <InputRouter
                  name={"emergency_last_name"}
                  placeholder={"Last Name"}
                  type={"text"}
                  defaultVal={user?.data.user.emergency_last_name}
                />
                <InputRouter
                  name={"emergency_second_last_name"}
                  placeholder={"Second Last Name"}
                  type={"text"}
                  defaultVal={user?.data.user.emergency_second_last_name}
                />

                <InputRouter
                  name={"emergency_relationship"}
                  placeholder={"Relationship"}
                  type={"text"}
                  defaultVal={user?.data.user.emergency_relationship}
                />

                <InputRouter
                  name={"emergency_phone"}
                  placeholder={"Phone"}
                  type={"text"}
                  defaultVal={user?.data.user.emergency_phone}
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
                />
                {academicInfo?.map((item, i) => (
                  <div key={i} className="flex w-full items-center gap-3">
                    <div className="w-1/3">
                      <SelectRouter
                        name={"academic_grade"}
                        placeholder={"Academic Grade"}
                        options={academyGrade}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"specify_academic"}
                        placeholder={"Specify the Academic Grade"}
                        type={"text"}
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
                          className="h-8 w-8 text-primarioBotones"
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
                          className="h-8 w-8 text-primarioBotones"
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
                    defaultVal={user?.data.user.working_center}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"income_date"}
                    placeholder={"Income Date"}
                    type={"date"}
                    defaultVal={user?.data.user.income_date}
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
                    defaultVal={user?.data.user.monthly_pay}
                  />
                </div>
                <div className="w-1/3">
                  {/* <InputRouter
                  name={"income_date"}
                  placeholder={"Income Date"}
                  type={"date"}
                /> */}
                  <SelectRouter
                    name="legal_benefits"
                    placeholder={"Legal Benefit"}
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
                    defaultVal={user?.data.user.institutional_email}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"institutional_phone"}
                    placeholder={"Institutional Phone"}
                    type={"phone"}
                    defaultVal={user?.data.user.institutional_phone}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"institutional_phone_ext"}
                    placeholder={"Ext"}
                    type={"number"}
                    defaultVal={user?.data.user.institutional_phone_ext}
                  />
                </div>
              </div>

              {/* contracts */}
              <div className="flex flex-col items-center gap-3 pt-4">
                <input
                  type="text"
                  value={workingInfo}
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
                          className="h-8 w-8 text-primarioBotones"
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
                    defaultVal={user?.data.user.bank_account}
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

export default MainUser;
