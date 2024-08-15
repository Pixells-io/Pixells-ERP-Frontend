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
              GESTIÓN DE USUARIOS
            </h2>
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Usuario
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
                Informacion Personal
              </span>
              <div className="flex flex-col pt-4">
                <div className="flex gap-3">
                  <InputRouter
                    name={"name"}
                    placeholder={"Niombre"}
                    type={"text"}
                    required={"true"}
                  />
                  <InputRouter
                    name={"last_name"}
                    placeholder={"Apellido Paterno"}
                    type={"text"}
                  />
                  <InputRouter
                    name={"second_last_name"}
                    placeholder={"Apellido Materno"}
                    type={"text"}
                  />
                </div>
                <div className="mt-3 flex gap-3">
                  <InputRouter
                    name={"date_of_birth"}
                    placeholder={"Fecha de nacimiento"}
                    type={"date"}
                  />
                  <InputRouter
                    name={"city_of_birth"}
                    placeholder={"Ciudad de nacimiento"}
                    type={"text"}
                  />
                  <InputRouter
                    name={"state_of_birth"}
                    placeholder={"Estado de nacimiento"}
                    type={"text"}
                  />
                </div>
                <div className="flex items-center gap-3 pt-3">
                  <SelectRouter
                    name={"genre"}
                    placeholder={"Género"}
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
                      placeholder={"Estado civil"}
                      className="w-full text-sm font-light"
                    />
                  </Label>

                  <InputRouter
                    name={"childrens"}
                    placeholder={"Hijos"}
                    type={"number"}
                  />
                </div>
                {status === "Married" ? (
                  <div className="flex gap-3 pt-3">
                    <InputRouter
                      name={"spouse_firstname"}
                      placeholder={"Nombre del cónyuge"}
                      type={"text"}
                    />
                    <InputRouter
                      name={"spouse_lastname"}
                      placeholder={"Apellido del cónyuge"}
                      type={"text"}
                    />
                    <InputRouter
                      name={"spouse_taxid"}
                      placeholder={"Identificación fiscal del cónyuge"}
                      type={"text"}
                    />
                  </div>
                ) : null}
                <div className="flex gap-3 pt-3">
                  <InputRouter
                    name={"phone"}
                    placeholder={"Teléfono"}
                    type={"number"}
                  />
                  <InputRouter
                    name={"personal_email"}
                    placeholder={"Email personal"}
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
                        label={"Certificado de nacimiento"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Health Card*/}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Información de salud
              </span>
              <div className="flex pt-4">
                <div className="flex w-full items-center gap-3">
                  <div className="w-1/4">
                    <SelectRouter
                      name={"chronic_diseases"}
                      placeholder={"Enfermedades crónicas"}
                      options={selectBasics}
                    />
                  </div>
                  <div className="w-1/4">
                    <SelectRouter
                      name={"alergic"}
                      placeholder={"Alergias"}
                      options={selectBasics}
                    />
                  </div>
                  <div className="w-1/4">
                    <InputRouter
                      name={"specify_allergy"}
                      placeholder={"Especifique la/s alergia/s"}
                      type={"text"}
                    />
                  </div>
                  <div className="w-1/4">
                    <SelectRouter
                      name={"blood"}
                      placeholder={"Tipo de sangre"}
                      options={bloodType}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*Address Card*/}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Datos del Domicilio
              </span>
              <div className="flex w-full pt-4">
                <div className="w-full">
                  <div className="flex w-full items-center gap-3">
                    <div className="w-1/4">
                      <InputRouter
                        name={"street"}
                        placeholder={"Calle"}
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
                        label={"Comprobante de dirección"}
                      />
                    </div>
                  </div>

                  <div className="flex w-full gap-3">
                    <div className="w-1/4">
                      <InputRouter
                        name={"discrict"}
                        placeholder={"Distrito"}
                        type={"text"}
                      />
                    </div>
                    <div className="w-1/4">
                      <InputRouter
                        name={"city"}
                        placeholder={"Ciudad"}
                        type={"text"}
                      />
                    </div>
                    <div className="w-1/4">
                      <InputRouter
                        name={"state"}
                        placeholder={"Estado"}
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
                Contacto de emergencia
              </span>
              <div className="flex w-full gap-3 pt-5">
                <InputRouter
                  name={"emergency_name"}
                  placeholder={"Nombre"}
                  type={"text"}
                />
                <InputRouter
                  name={"emergency_last_name"}
                  placeholder={"Apellido Paterno"}
                  type={"text"}
                />
                <InputRouter
                  name={"emergency_second_last_name"}
                  placeholder={"Apellido Materno"}
                  type={"text"}
                />

                <InputRouter
                  name={"emergency_relationship"}
                  placeholder={"Relación"}
                  type={"text"}
                />

                <InputRouter
                  name={"emergency_phone"}
                  placeholder={"Teléfono"}
                  type={"text"}
                />
              </div>
            </div>

            {/*Academic Information*/}
            <div className="mt-10 rounded-xl bg-blancoBg p-4">
              <span className="text-roboto text-sm font-medium text-grisText">
                Información Académica
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
                        placeholder={"Grado Académico"}
                        options={academyGrade}
                        // onChange={(e) => updateAcademicField(i, e)}
                        // value={academicInfo[i].academic_grade}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"specify_academic"}
                        placeholder={"Especificar el grado académico"}
                        type={"text"}
                        onChange={(e) => updateAcademicField(i, e)}
                        value={academicInfo[i].specify_academic}
                      />
                    </div>
                    <div className="w-1/3">
                      <DropzoneFile
                        name={"academic_voucher"}
                        label={"Comprobante Académico"}
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
                Último trabajo
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
                        placeholder={"Compañía"}
                        type={"text"}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"position_experience"}
                        placeholder={"Posición"}
                        type={"text"}
                      />
                    </div>
                    <div className="w-1/3">
                      <InputRouter
                        name={"years_experience"}
                        placeholder={"Años de experiencia"}
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
                Posición actual a mantener
              </span>

              <div className="flex w-full items-center gap-3 pt-4">
                <div className="w-1/3">
                  <InputRouter
                    name={"working_center"}
                    placeholder={"Centro de Trabajo"}
                    type={"text"}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"income_date"}
                    placeholder={"Fecha de ingreso"}
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
                    placeholder={"Jefe"}
                    options={selectUsers}
                  />
                </div>
                <div className="mt-4 w-1/3">
                  <SelectRouter
                    name={"position"}
                    placeholder={"Posición"}
                    options={selectPosition}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-1/3">
                  <InputRouter
                    name={"monthly_pay"}
                    placeholder={"Pago mensual"}
                    type={"number"}
                  />
                </div>
                <div className="w-1/3">
                  <SelectRouter
                    name="legal_benefits"
                    placeholder={"Beneficios legales"}
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
                    placeholder={"Correo Institucional"}
                    type={"email"}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"institutional_phone"}
                    placeholder={"Teléfono Institucional"}
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
                        placeholder={"Tipo de contrato"}
                        options={contracts}
                      />
                    </div>
                    <div className="flex w-1/3 items-center gap-3">
                      <div className="w-1/2">
                        <InputRouter
                          name={"start_contract"}
                          placeholder={"Inicio del contrato"}
                          type={"date"}
                        />
                      </div>
                      <div className="w-1/2">
                        <InputRouter
                          name={"end_contract"}
                          placeholder={"Fin del contrato"}
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
                    placeholder={"Banco"}
                    options={banks}
                  />
                </div>
                <div className="w-1/3">
                  <InputRouter
                    name={"bank_account"}
                    placeholder={"Cuenta bancaria"}
                    type={"text"}
                  />
                </div>
                <div className="w-1/3">
                  <SelectRouter
                    name={"regulation"}
                    placeholder={"Regulación"}
                    options={selectBasics}
                  />
                </div>
              </div>
            </div>

            {/*Password*/}
            <div className="mt-10 rounded-2xl bg-blancoBg p-5">
              <span className="text-roboto text-sm font-medium text-grisText">
                Contraseña
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
                      Guardar
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
