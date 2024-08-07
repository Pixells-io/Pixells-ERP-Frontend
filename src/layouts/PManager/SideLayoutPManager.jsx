import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData, redirect, NavLink } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  checkmarkCircle,
  listCircle,
  listCircleOutline,
  megaphone,
  syncCircle,
} from "ionicons/icons";

import TopMenuCRM from "../CRM/components/TopMenuCRM";
import ObjectiveLink from "./components/ObjectiveLink";
import NewObjectiveForm from "./components/Form/NewObjectiveForm";

import { saveNewObjective } from "./utils";
import SelectRouter from "../Masters/FormComponents/select";
import { getObjectives } from "@/lib/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const yearsOption = [
  {
    label: "2024",
    value: "2024",
  },
  {
    label: "2025",
    value: "2025",
  },
  {
    label: "2026",
    value: "2026",
  },
  {
    label: "2027",
    value: "2027",
  },
  {
    label: "2028",
    value: "2028",
  },
  {
    label: "2029",
    value: "2029",
  },
  {
    label: "2030",
    value: "2030",
  },
  {
    label: "2031",
    value: "2031",
  },
  {
    label: "2032",
    value: "2032",
  },
  {
    label: "2033",
    value: "2033",
  },
  {
    label: "2034",
    value: "2034",
  },
];

function SideLayoutPManager() {
  const [open, setOpen] = useState(false);
  const { objectives, areas, permissions } = useLoaderData();

  //PERMISSIONS
  const [create, setCreate] = useState(true); //3
  const [objectivesData, setObjectivesData] = useState(objectives);

  //CHANGE PERMISSIONS
  useEffect(() => {
    const createQuery = permissions.data.filter(
      (item) => item.permision_capability == "3",
    );

    if (createQuery.length == 0) {
      setCreate(false);
    }
  });

  async function changeYear(value) {
    const newQuery = await getObjectives(value);
    setObjectivesData(newQuery);
    console.log(newQuery);
  }

  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex w-[280px] shrink-0 flex-col gap-4">
        {/* top block */}
        <div className="flex flex-col gap-4 rounded-lg bg-gris px-8 py-4">
          <TopMenuCRM />
        </div>
        <NewObjectiveForm areas={areas?.data} open={open} setOpen={setOpen} />
        {/*bottom block */}
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris px-4 py-8">
          <p className="px-4 font-poppins text-lg font-semibold text-grisHeading">
            Objetivos Estratégicos
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-2 px-4">
            <div className="flex w-full max-w-[120px]">
              <Select
                name={"year"}
                // value={academicInfo[i].academic_grade}
                onValueChange={(e) => changeYear(e)}
              >
                <SelectTrigger className="rounded-full border border-[#D9D9D9] text-sm font-light text-[#44444F] focus-visible:ring-0 focus-visible:ring-offset-0">
                  <SelectValue placeholder={"Year"} />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {yearsOption.map((year, index) => (
                    <SelectItem key={"year" + index} value={year.value}>
                      {year.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {create == true ? (
              <button type="button" onClick={() => setOpen(!open)}>
                <IonIcon
                  icon={addCircleOutline}
                  className="h-5 w-5 align-middle text-primarioBotones"
                />
              </button>
            ) : (
              false
            )}
            <div className="ml-5 w-full">
              <SelectRouter
                name={"year"}
                placeholder={"Año"}
                options={yearsOption}
                onChange={(e) => changeYear(e)}
                // value={academicInfo[i].academic_grade}
              />
            </div>
          </div>

          {/*menu top */}
          <div className="flex max-h-[260px] flex-col gap-4 overflow-scroll">
            {objectivesData?.data?.map((objective, i) => (
              <ObjectiveLink key={i} objective={objective} areas={areas} />
            ))}
          </div>

          {/* separator */}
          <div className="my-4 border-b border-gris2"></div>

          {/* menu bottom */}
          <div className="flex flex-col gap-4">
            <NavLink
              to="/project-manager"
              className={({ isActive }) =>
                isActive && location.pathname === "/project-manager"
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={megaphone} size="large"></IonIcon>

                <div>
                  <p className="text-base font-medium">Hoy</p>
                  <p className="text-[10px] font-medium">Actividades</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/project-manager/activities"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={checkmarkCircle} size="large"></IonIcon>

                <div>
                  <p className="text-base font-medium">Actividades</p>
                  <p className="text-[10px] font-medium">Resumen</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/project-manager/status"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={syncCircle} size="large"></IonIcon>

                <div>
                  <p className="text-base font-medium">Estado</p>
                  <p className="text-[10px] font-medium">Actividades</p>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/project-manager/completed"
              className={({ isActive }) =>
                isActive
                  ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
                  : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
              }
            >
              <div className="flex items-center gap-6">
                <IonIcon icon={listCircle} size="large"></IonIcon>

                <div>
                  <p className="text-base font-medium">Terminado</p>
                  <p className="text-[10px] font-medium">Actividades</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideLayoutPManager;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await saveNewObjective(data);

  return redirect("/project-manager");
}
