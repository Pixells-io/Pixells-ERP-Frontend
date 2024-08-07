import React, { useState } from "react";
import { Form, useLoaderData, redirect, useParams } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  chevronBack,
  chevronForward,
  closeCircle,
  create,
} from "ionicons/icons";

import { Button } from "@/components/ui/button";
import DropzoneImage from "@/layouts/Masters/FormComponents/dropzone-image";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import DropzoneFile from "@/components/dropzone-files";
import { editUser, saveNewUser } from "../../utils";
import NavigationHeader from "@/components/navigation-header";
import ImagesShow from "@/components/images-show";

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

const contracts = [
  {
    label: "Contrato determinado",
    value: "Contrato determinado",
  },
  {
    label: "Contrato indeterminado",
    value: "Contrato indeterminado",
  },
];

const banks = [
  { label: "Banco de México", value: "BANXICO" },
  { label: "BBVA", value: "BBVA" },
  { label: "Citibanamex", value: "CITIBANAMEX" },
  { label: "Santander", value: "SANTANDER" },
  { label: "HSBC", value: "HSBC" },
  { label: "Banorte", value: "BANORTE" },
  { label: "Scotiabank", value: "SCOTIABANK" },
  { label: "Inbursa", value: "INBURSA" },
  { label: "Banregio", value: "BANREGIO" },
  { label: "Banco Azteca", value: "BANCO_AZTECA" },
  { label: "Núcleo", value: "NUCLEO" },
  { label: "Afirme", value: "AFIRME" },
  { label: "Mifel", value: "MIFEL" },
  { label: "Multiva", value: "MULTIVA" },
  { label: "Bancoppel", value: "BANCOPPEL" },
  { label: "Compartamos Banco", value: "COMPARTAMOS" },
  { label: "Famsa", value: "FAMSA" },
  { label: "Núbank", value: "NUBANK" },
  { label: "Albo", value: "ALBO" },
];

const legal_benefits = [
  {
    label: "Prestaciones de ley",
    value: "Prestaciones de ley",
  },
  {
    label: "Prestaciones de ley + vales de gasolina",
    value: "Prestaciones de ley + vales de gasolina",
  },
  {
    label: "Prestaciones de ley + vales de gasolina + SGMM",
    value: "Prestaciones de ley + vales de gasolina + SGMM",
  },
];

function MainUser() {
  const { id } = useParams();
  const { areas, positions, users, user } = useLoaderData();
  const [status, setStatus] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [academicInfo, setAcademicInfo] = useState(user?.data.academy);
  const [workingInfo, setWorkingInfo] = useState(user?.data.experience);
  const [contractsInfo, setContratcsInfo] = useState(user?.data.contracts);

  // inputs options
  const selectArea = [];
  const selectPosition = [];
  const selectUsers = [];

  // user info
  const genreUser = [];
  const civilStatusUser = [];

  const chronicUser = [];
  const alergicUser = [];
  const bloodUser = [];

  const benefitUser = [];

  const bankUser = [];
  const regulationUser = [];

  // user arrays
  arrayFillAreas(areas, selectArea);
  arrayFillPositions(positions, selectPosition);
  arrayFillUsers(users, selectUsers);

  createOptionArray(user.data.user.genre, genreUser);
  createOptionArray(user.data.user.civil_status, civilStatusUser);

  createOptionBoolean(user.data.user.chronic_diseases, chronicUser);
  createOptionBoolean(user.data.user.alergic, alergicUser);
  createOptionArray(user.data.user.blood, bloodUser);

  createOptionArray(user.data.user.legal_benefits, benefitUser);

  createOptionArray(user.data.user.bank, bankUser);
  createOptionBoolean(user.data.user.regulation, regulationUser);

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

  function updateAcademicField(index, e) {
    // console.log(e.target.name);
    const newFields = academicInfo.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
    console.log(newFields);
    setAcademicInfo(newFields);
  }

  function addWorkingInputs() {
    const academicInput = {
      company_experience: "",
      position_experience: "",
      experience_years: "",
    };
    setWorkingInfo([...workingInfo, academicInput]);
  }

  function removeWorkingInputs(index) {
    const newFields = workingInfo.filter((item, i) => index !== i);
    // console.log(newFields);
    setWorkingInfo(newFields);
  }

  function updateWorkingField(index, e) {
    // console.log(e.target);
    const newFields = workingInfo.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
    console.log(newFields);
    setWorkingInfo(newFields);
  }

  function addContractInputs() {
    const contractInput = {
      contract: "",
      start: "",
      end: "",
    };
    setContratcsInfo([...contractsInfo, contractInput]);
  }

  function removeContractInputs(index) {
    const newFields = contractsInfo.filter((item, i) => index !== i);
    // console.log(newFields);
    setContratcsInfo(newFields);
  }

  function updateContractField(index, e) {
    // console.log(e.target);
    const newFields = contractsInfo.map((inputs, i) =>
      i === index ? { ...inputs, [e.target.name]: e.target.value } : inputs,
    );
    console.log(newFields);
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
              USER MANAGEMENT
            </h2>
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            Show User
          </h2>
          <div className="flex items-center gap-6">
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
        <Form
          action={`/organization/user/${id}`}
          method="post"
          encType="multipart/form-data"
          id="form-update-user"
        >
          <input type="hidden" name="user_id" value={id} />
          <div className="">
            <div className="w-fit cursor-pointer">
              <DropzoneImage
                name={"user_image"}
                url={user?.data.user.user_image}
                initials={`${user?.data.user.name.slice(1)}${user?.data.user.last_name.slice(1)}`}
                disabled={disabled}
              />
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
                    defaultVal={user?.data.user.name}
                    disabled={disabled}
                  />
                  <InputRouter
                    name={"last_name"}
                    placeholder={"Last Name"}
                    type={"text"}
                    defaultVal={user?.data.user.last_name}
                    disabled={disabled}
                  />
                  <InputRouter
                    name={"second_last_name"}
                    placeholder={"Second Last Name"}
                    type={"text"}
                    defaultVal={user?.data.user.second_last_name}
                    disabled={disabled}
                  />
                </div>

                <div className="mt-3 flex gap-3">
                  <InputRouter
                    name={"date_of_birth"}
                    placeholder={"Date of Birth"}
                    type={"date"}
                    defaultVal={user?.data.user.date_of_birth}
                    disabled={disabled}
                  />
                  <InputRouter
                    name={"city_of_birth"}
                    placeholder={"City of Birth"}
                    type={"text"}
                    defaultVal={user?.data.user.city_of_birth}
                    disabled={disabled}
                  />
                  <InputRouter
                    name={"state_of_birth"}
                    placeholder={"State of Birth"}
                    type={"text"}
                    defaultVal={user?.data.user.state_of_birth}
                    disabled={disabled}
                  />
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <SelectRouter
                    name={"genre"}
                    placeholder={"Genre"}
                    options={genreSelect}
                    className="w-full text-sm font-light"
                    defaultVal={genreUser}
                    disabled={disabled}
                  />
                  <SelectRouter
                    name={"civil_status"}
                    className="w-full text-sm font-light"
                    placeholder={"Civil Status"}
                    options={civilStatus}
                    defaultVal={civilStatusUser}
                    onChange={(e) => setStatus(e.value)}
                    disabled={disabled}
                  />
                  <InputRouter
                    name={"childrens"}
                    placeholder={"Children"}
                    type={"number"}
                    defaultVal={user?.data.user.childrens}
                    disabled={disabled}
                  />
                </div>

                {status === "Married" ? (
                  <div className="flex gap-3 pt-3">
                    <InputRouter
                      name={"spouse_firstname"}
                      placeholder={"Spouse First Name"}
                      type={"text"}
                      defaultVal={user?.data.user.spouse_firstname}
                      disabled={disabled}
                    />
                    <InputRouter
                      name={"spouse_lastname"}
                      placeholder={"Spouse Last Name"}
                      type={"text"}
                      defaultVal={user?.data.user.spouse_lastname}
                      disabled={disabled}
                    />
                    <InputRouter
                      name={"spouse_taxid"}
                      placeholder={"Spouse Tax ID"}
                      type={"text"}
                      defaultVal={user?.data.user.spouse_taxid}
                      disabled={disabled}
                    />
                  </div>
                ) : null}

                <div className="flex gap-3 pt-3">
                  <InputRouter
                    name={"phone"}
                    placeholder={"Phone"}
                    type={"number"}
                    defaultVal={user?.data.user.phone}
                    disabled={disabled}
                  />
                  <InputRouter
                    name={"personal_email"}
                    placeholder={"Personal Email"}
                    type={"email"}
                    defaultVal={user?.data.user.personal_email}
                    disabled={disabled}
                  />
                </div>

                <div className="flex w-full gap-4 pt-4">
                  <div className="flex h-full w-full items-center gap-3">
                    <div className="flex w-full flex-col gap-2">
                      <DropzoneFile
                        name="curp_file"
                        label="CURP"
                        disabled={disabled}
                      />
                      <InputRouter
                        name={"curp_text"}
                        placeholder={"Curp"}
                        type={"text"}
                        defaultVal={user?.data.user.curp_text}
                        disabled={disabled}
                      />
                      {user.data?.user.curp_file !== "N/A" ? (
                        <div className="flex items-center justify-center">
                          <ImagesShow image={user.data?.user.curp_file} />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex h-full w-full items-center gap-3">
                    <div className="flex w-full flex-col gap-2">
                      <DropzoneFile
                        name={"rfc_file"}
                        label={"RFC"}
                        disabled={disabled}
                      />
                      <InputRouter
                        name={"rfc_text"}
                        placeholder={"Rfc"}
                        type={"text"}
                        defaultVal={user?.data.user.rfc_text}
                        disabled={disabled}
                      />
                      {user.data?.user.rfc_file !== "N/A" ? (
                        <div className="flex items-center justify-center">
                          <ImagesShow image={user.data?.user.rfc_file} />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex h-full w-full items-center gap-3">
                    <div className="flex w-full flex-col gap-2">
                      <DropzoneFile
                        name={"nss_file"}
                        label={"NSS"}
                        disabled={disabled}
                      />
                      <InputRouter
                        name={"nss_text"}
                        placeholder={"NSS"}
                        type={"text"}
                        defaultVal={user?.data.user.nss_text}
                        disabled={disabled}
                      />
                      {user.data?.user.nss_file !== "N/A" ? (
                        <div className="flex items-center justify-center">
                          <ImagesShow image={user.data?.user.nss_file} />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex h-full w-full items-center gap-3">
                    <div className="flex w-full flex-col gap-2">
                      <DropzoneFile
                        name={"id_file"}
                        label={"ID"}
                        disabled={disabled}
                      />
                      <InputRouter
                        name={"id_date"}
                        placeholder={"Id Date"}
                        type={"date"}
                        defaultVal={user?.data.user.id_date}
                        disabled={disabled}
                      />
                      {user.data?.user.id_file !== "N/A" ? (
                        <div className="flex items-center justify-center">
                          <ImagesShow image={user.data?.user.id_file} />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex h-full w-full items-center gap-3">
                    <div className="flex w-full flex-col gap-2">
                      <DropzoneFile
                        name={"birth_certificade"}
                        label={"Birth Certificate"}
                        disabled={disabled}
                      />
                      <div className="h-10"></div>
                      {user.data?.user.birth_certificade !== "N/A" ? (
                        <div className="flex items-center justify-center">
                          <ImagesShow
                            image={user.data?.user.birth_certificade}
                          />
                        </div>
                      ) : null}
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
                      className="w-full text-sm font-light"
                      options={selectBasics}
                      defaultVal={chronicUser}
                      disabled={disabled}
                    />
                  </div>
                  <div className="w-1/4">
                    <SelectRouter
                      name={"alergic"}
                      className="w-full text-sm font-light"
                      placeholder={"Alergic"}
                      options={selectBasics}
                      defaultVal={alergicUser}
                      disabled={disabled}
                    />
                  </div>
                  <div className="w-1/4">
                    <InputRouter
                      name={"specify_allergy"}
                      placeholder={"Specify the Allergy"}
                      type={"text"}
                      defaultVal={user?.data.user.specify_allergy}
                      disabled={disabled}
                    />
                  </div>
                  <div className="w-1/4">
                    <SelectRouter
                      name={"blood"}
                      className="w-full text-sm font-light"
                      placeholder={"Type of Blood"}
                      options={bloodType}
                      defaultVal={bloodUser}
                      disabled={disabled}
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
                <div className="flex w-full items-center gap-3">
                  <div className="flex w-full flex-col gap-3">
                    <div className="flex w-full gap-3">
                      <div className="w-1/4">
                        <InputRouter
                          name={"street"}
                          placeholder={"Street"}
                          type={"text"}
                          defaultVal={user?.data.user.street}
                          disabled={disabled}
                        />
                      </div>
                      <div className="flex w-1/4 gap-3">
                        <div className="w-1/2">
                          <InputRouter
                            name={"ext"}
                            placeholder={"Ext"}
                            type={"text"}
                            defaultVal={user?.data.user.ext}
                            disabled={disabled}
                          />
                        </div>
                        <div className="w-1/2">
                          <InputRouter
                            name={"int"}
                            placeholder={"Int"}
                            type={"text"}
                            defaultVal={user?.data.user.int}
                            disabled={disabled}
                          />
                        </div>
                      </div>
                      <div className="w-1/4">
                        <InputRouter
                          name={"cp"}
                          placeholder={"CP"}
                          type={"text"}
                          defaultVal={user?.data.user.cp}
                          disabled={disabled}
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
                          disabled={disabled}
                        />
                      </div>
                      <div className="w-1/4">
                        <InputRouter
                          name={"city"}
                          placeholder={"City"}
                          type={"text"}
                          defaultVal={user?.data.user.city}
                          disabled={disabled}
                        />
                      </div>
                      <div className="w-1/4">
                        <InputRouter
                          name={"state"}
                          placeholder={"State"}
                          type={"text"}
                          defaultVal={user?.data.user.state}
                          disabled={disabled}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-1/3 flex-col gap-2">
                  <DropzoneFile
                    name={"address_voucher"}
                    label={"Adress Voucher"}
                    disabled={disabled}
                  />
                  {user.data?.user.address_voucher !== "N/A" ? (
                    <div className="flex items-center justify-center">
                      <ImagesShow image={user.data?.user.address_voucher} />
                    </div>
                  ) : null}
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
                  disabled={disabled}
                />
                <InputRouter
                  name={"emergency_last_name"}
                  placeholder={"Last Name"}
                  type={"text"}
                  defaultVal={user?.data.user.emergency_last_name}
                  disabled={disabled}
                />
                <InputRouter
                  name={"emergency_second_last_name"}
                  placeholder={"Second Last Name"}
                  type={"text"}
                  defaultVal={user?.data.user.emergency_second_last_name}
                  disabled={disabled}
                />

                <InputRouter
                  name={"emergency_relationship"}
                  placeholder={"Relationship"}
                  type={"text"}
                  defaultVal={user?.data.user.emergency_relationship}
                  disabled={disabled}
                />

                <InputRouter
                  name={"emergency_phone"}
                  placeholder={"Phone"}
                  type={"text"}
                  defaultVal={user?.data.user.emergency_phone}
                  disabled={disabled}
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
                      <input
                        type="hidden"
                        name="latest_id"
                        value={academicInfo[i].id}
                      />
                      <SelectRouter
                        name={"academic_grade"}
                        placeholder={"Academic Grade"}
                        options={academyGrade}
                        onChange={(e) => updateAcademicField(i, e)}
                        defaultVal={academicInfo[i].academic_grade}
                        disabled={disabled}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"specify_academic"}
                        placeholder={"Specify the Academic Grade"}
                        type={"text"}
                        value={academicInfo[i].specify_academic}
                        onChange={(e) => updateAcademicField(i, e)}
                        disabled={disabled}
                      />
                    </div>
                    <div className="flex w-1/3 flex-col gap-2">
                      <DropzoneFile
                        name={"academic_voucher"}
                        label={"Academic Voucher"}
                        disabled={disabled}
                      />
                      {academicInfo[i].academic_voucher !== "N/A" ? (
                        <iframe
                          src={academicInfo[i].academic_voucher}
                          frameBorder="0"
                        ></iframe>
                      ) : null}
                    </div>
                    {i !== 0 || academicInfo.length !== i + 1 ? (
                      <button
                        type="button"
                        className="flex items-center"
                        onClick={() => removeAcademicField(i)}
                        disabled={disabled}
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
                        disabled={disabled}
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
                {workingInfo?.length == 0 ? (
                  <div className="flex w-full items-center gap-3">
                    <div className="w-1/3">
                      <InputRouter
                        name={"company_experience"}
                        placeholder={"Company"}
                        type={"text"}
                        disabled={disabled}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"position_experience"}
                        placeholder={"Position"}
                        type={"text"}
                        disabled={disabled}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"experience_years"}
                        placeholder={"Years of Experience"}
                        type={"number"}
                        disabled={disabled}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    {workingInfo?.map((item, i) => (
                      <div key={i} className="flex w-full items-center gap-3">
                        <div className="w-1/3">
                          <InputRouter
                            name={"company_experience"}
                            placeholder={"Company"}
                            type={"text"}
                            value={workingInfo[i].company_experience}
                            onChange={(e) => updateWorkingField(i, e)}
                            disabled={disabled}
                          />
                        </div>
                        <div className="w-1/3">
                          <InputRouter
                            name={"position_experience"}
                            placeholder={"Position"}
                            type={"text"}
                            value={workingInfo[i].position_experience}
                            onChange={(e) => updateWorkingField(i, e)}
                            disabled={disabled}
                          />
                        </div>
                        <div className="w-1/3">
                          <InputRouter
                            name={"experience_years"}
                            placeholder={"Years of Experience"}
                            type={"number"}
                            value={Number(workingInfo[i].experience_years)}
                            onChange={(e) => updateWorkingField(i, e)}
                            disabled={disabled}
                          />
                        </div>
                        {i !== 0 || workingInfo.length !== i + 1 ? (
                          <button
                            type="button"
                            className="flex items-center"
                            onClick={() => removeWorkingInputs(i)}
                            disabled={disabled}
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

                        {workingInfo.length == i + 1 &&
                        workingInfo.length <= 2 ? (
                          <button
                            type="button"
                            className="flex"
                            onClick={() => addWorkingInputs()}
                            disabled={disabled}
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
                  </>
                )}
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
                    disabled={disabled}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"income_date"}
                    placeholder={"Income Date"}
                    type={"date"}
                    defaultVal={user?.data.user.income_date}
                    disabled={disabled}
                  />
                </div>
                <div className="flex w-1/3 flex-col gap-2 pl-4">
                  <DropzoneFile name={"cv"} label={"CV"} disabled={disabled} />
                  {user.data?.user.cv !== "N/A" ? (
                    <div className="flex items-center justify-center">
                      <ImagesShow image={user.data?.user.cv} />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <div className="mt-4 w-1/3">
                  <SelectRouter
                    name={"area"}
                    placeholder={"Area"}
                    options={selectArea}
                    disabled={disabled}
                    defaultVal={user?.data.area}
                  />
                </div>
                <div className="mt-4 w-1/3">
                  <SelectRouter
                    name={"boss"}
                    placeholder={"Boss"}
                    options={selectUsers}
                    disabled={disabled}
                    defaultVal={user?.data.boss}
                  />
                </div>
                <div className="mt-4 w-1/3">
                  <SelectRouter
                    name={"position"}
                    placeholder={"Position"}
                    options={selectPosition}
                    defaultVal={user?.data.position}
                    disabled={disabled}
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
                    disabled={disabled}
                  />
                </div>
                <div className="w-1/3">
                  <SelectRouter
                    name="legal_benefits"
                    placeholder={"Legal Benefit"}
                    options={legal_benefits}
                    defaultVal={benefitUser}
                    disabled={disabled}
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
                    defaultVal={user?.data.user.email}
                    disabled={disabled}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"institutional_phone"}
                    placeholder={"Institutional Phone"}
                    type={"phone"}
                    defaultVal={user?.data.user.institutional_phone}
                    disabled={disabled}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"institutional_phone_ext"}
                    placeholder={"Ext"}
                    type={"number"}
                    defaultVal={user?.data.user.institutional_phone_ext}
                    disabled={disabled}
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
                        disabled={disabled}
                        defaultVal={user?.data.contracts[i].contract}
                      />
                    </div>
                    <div className="flex w-1/3 items-center gap-3">
                      <div className="w-1/2">
                        <InputRouter
                          name={"start"}
                          placeholder={"Start Contract"}
                          type={"date"}
                          value={contractsInfo[i].start}
                          onChange={(e) => updateContractField(i, e)}
                          disabled={disabled}
                        />
                      </div>
                      <div className="w-1/2">
                        <InputRouter
                          name={"end"}
                          placeholder={"End Contract"}
                          type={"date"}
                          value={contractsInfo[i].end}
                          onChange={(e) => updateContractField(i, e)}
                          disabled={disabled}
                        />
                      </div>
                    </div>
                    {i !== 0 || contractsInfo.length !== i + 1 ? (
                      <button
                        type="button"
                        className="flex items-center"
                        onClick={() => removeContractInputs(i)}
                        disabled={disabled}
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
                        disabled={disabled}
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
                    defaultVal={bankUser}
                    disabled={disabled}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"bank_account"}
                    placeholder={"bank Account"}
                    type={"text"}
                    defaultVal={user?.data.user.bank_account}
                    disabled={disabled}
                  />
                </div>
                <div className="w-1/3">
                  <SelectRouter
                    name={"regulation"}
                    placeholder={"Regulation"}
                    options={selectBasics}
                    defaultVal={regulationUser}
                    disabled={disabled}
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
                      disabled={disabled}
                      required={false}
                    />
                  </div>
                  <div className="w-1/4">
                    <InputRouter
                      name={"confirm_password"}
                      placeholder={"********"}
                      type={"password"}
                      disabled={disabled}
                      required={false}
                    />
                  </div>
                  <div className="w-2/4 text-end">
                    {disabled === true ? (
                      ""
                    ) : (
                      <Button
                        disabled={disabled}
                        type="submit"
                        className="justify-normal rounded-lg bg-primarioBotones px-8 font-roboto text-sm font-semibold text-white hover:bg-primario"
                      >
                        Save
                      </Button>
                    )}
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

export async function Action({ params, request }) {
  const data = await request.formData();

  const validation = await editUser(data);

  return redirect(`/organization`);
}
