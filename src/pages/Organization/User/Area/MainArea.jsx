import React, { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  add,
  chevronBack,
  chevronForward,
  closeCircle,
  create,
} from "ionicons/icons";
import { Button } from "@/components/ui/button";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const DAYS = [
  { label: "Lunes", value: "lunes" },
  { label: "Martes", value: "martes" },
  { label: "Miércoles", value: "miércoles" },
  { label: "Jueves", value: "jueves" },
  { label: "Viernes", value: "viernes" },
  { label: "Sábado", value: "sábado" },
  { label: "Domingo", value: "domingo" },
];

function MainArea() {
  const { data } = useLoaderData();
  const [disabled, setDisabled] = useState(true);
  const [areaInfo, setAreaInfo] = useState(data.area);
  const [processInfo, setProcessInfo] = useState(data.process);
  const [processValue, setProcessValue] = useState([]);
  const [processInputs, setProcessInputs] = useState([
    {
      proceso: "",
    },
  ]);
  const [workingDaysInfo, setWoringDaysInfo] = useState(data.turn);
  const [defaultDays, setDefaultDays] = useState([]);

  function addProcessField() {
    const processInput = {
      proceso: "",
    };

    setProcessInputs([...processInputs, processInput]);
  }

  function removeProcessField(index) {
    const newFields = processInputs.filter((item, i) => index !== i);
    console.log(newFields);
    setProcessInputs(newFields);
  }

  function createArray() {
    const newArray = workingDaysInfo.map(({ day }, i) => ({
      lable: day.charAt(0).toUpperCase() + day.slice(1),
      value: day.charAt(0).toUpperCase() + day.slice(1),
    }));
    // setDefaultDays(newArray);
  }

  console.log(createArray());

  // useEffect(() => {
  //   function arrangeWorkingDays() {
  //     let newArray = [];
  //     for (const { day } of data.turn) {
  //       const capitalized = day.charAt(0).toUpperCase() + day.slice(1);
  //       newArray.push({ label: capitalized, value: capitalized });
  //     }
  //     // console.log(newArray);
  //     setDefaultDays(newArray);
  //   }
  //   arrangeWorkingDays();
  // }, []);

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col gap-4 rounded-lg bg-gris px-8 py-4">
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
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              Organization
            </h2>
          </div>
          <div className="pr-4">
            <Button
              className=""
              variant="ghost"
              onClick={() => setDisabled(!disabled)}
            >
              <IonIcon
                icon={create}
                size="large"
                className="text-grisText"
              ></IonIcon>
            </Button>
          </div>
          {/* <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            <div className="text-xs">
              {leads?.data.length == 0 ? "0" : leads?.data.length}{" "}
              {leads?.data.length == 1 ? "lead" : "leads"}
            </div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">
              {loaderClients?.data.length == 0
                ? "0"
                : loaderClients?.data.length}{" "}
              {loaderClients?.data.length == 1 ? "client" : "clients"}
            </div>
          </div> */}
        </div>
        <div className="h-full rounded-lg bg-blancoBg pt-2">
          <div className="flex flex-col justify-center">
            <Form
              id="area-form"
              className="flex h-full w-full flex-col gap-3 px-6"
              action="/organization"
              method="post"
            >
              <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
                <div className="flex w-full flex-col gap-3 pb-4 font-light">
                  <InputRouter
                    name="nombre"
                    type="text"
                    placeholder="Name of the area"
                    defaultVal={areaInfo.nombre}
                    disabled={disabled}
                  />

                  <InputRouter
                    name="descripcion"
                    type="text"
                    placeholder="Description of the area"
                    defaultVal={areaInfo.descripcion}
                    disabled={disabled}
                  />
                  <input
                    name="procesos_del_area"
                    type="text"
                    className="hidden"
                    readOnly
                    value={processValue}
                    disabled={disabled}
                  />
                  <div className="flex w-full items-center gap-3">
                    <div className="flex w-full flex-col gap-3">
                      {processInputs?.map((input, i) => (
                        <div key={i} className="flex w-full gap-3">
                          <InputRouter
                            name="proceso"
                            placeholder="Process"
                            defaultVal={processInfo[i].process}
                            disabled={disabled}
                          />
                          {i >= 1 ? (
                            <button
                              type="button"
                              className="flex items-center"
                              onClick={() => removeProcessField(i)}
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
                      {processInputs.length <= 4 ? (
                        <button
                          className="flex h-6 w-6 items-center rounded-full bg-primario"
                          onClick={() => addProcessField()}
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

                  <SelectRouter
                    name="tipo_horario"
                    placeholder={"Working Days"}
                    options={DAYS}
                    isMulti={true}
                    // disabled={disabled}
                    // defaultVal={JSON.stringify(createArray())}
                    value={defaultDays}
                  />
                  <InputRouter
                    name="inicio"
                    type="time"
                    placeholder="Start"
                    disabled={disabled}
                    defaultVal={areaInfo.inicio}
                  />
                  <InputRouter
                    name="fin"
                    type="time"
                    placeholder="End"
                    disabled={disabled}
                    defaultVal={areaInfo.fin}
                  />
                </div>
              </div>
            </Form>
            <div className="flex justify-center">
              {disabled === false && (
                <Button className="flex px-10">Save</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainArea;
