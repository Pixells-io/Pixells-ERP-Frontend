import React, { useEffect, useState } from "react";
import {
  Form,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ellipsisHorizontal } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import {
  completeTask,
  deleteCSF,
  deleteGoal,
  deleteStrategicObjective,
  destroyTask,
  editCSF,
  editGoal,
  editStrategicObjective,
  editTask,
  saveNewCsf,
  saveNewGoal,
  saveNewTask,
} from "./utils";

import GoalForm from "./components/Form/GoalForm";
import ObjectiveDestroy from "./components/ObjectiveDestroy";
import NavigationHeader from "@/components/navigation-header";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function MainPManager() {
  const params = useParams();
  const navigation = useNavigation();

  const { objetive, permissions } = useLoaderData();
  const data = objetive.data;

  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [objectiveInfo, setObjectiveInfo] = useState("");

  //PERMISSIONS
  const [editP, setEditP] = useState(true); //2
  const [createP, setCreateP] = useState(true); //3
  const [destroyP, setDestroyP] = useState(true); //4

  //CHANGE PERMISSIONS
  useEffect(() => {
    const editQuery = permissions.data.filter(
      (item) => item.permision_capability == "2",
    );

    if (editQuery.length == 0) {
      setEditP(false);
    }

    const createQuery = permissions.data.filter(
      (item) => item.permision_capability == "3",
    );

    if (createQuery.length == 0) {
      setCreateP(false);
    }

    const destroyQuery = permissions.data.filter(
      (item) => item.permision_capability == "4",
    );

    if (destroyQuery.length == 0) {
      setDestroyP(false);
    }
  });

  //Set Info
  useEffect(() => {
    setObjectiveInfo(data?.find((obj, i) => obj.id === Number(params.id)));
  }, [data]);

  // Reset Edit
  useEffect(() => {
    setEdit(false);
  }, [params.id]);

  //Modal Effect
  useEffect(() => {
    if (navigation.state === "idle") {
      setEdit(false);
    }
  }, [navigation.state]);

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

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-[22px] font-bold text-[#44444F]">
              GESTOR DE PROYECTOS
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#8F8F8F]">
            <div className="text-xs">{data?.length} objetivos</div>
            {/* <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 FCE</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 actividades</div> */}
          </div>
        </div>

        {/* top content sub */}
        <div className="flex items-center gap-32 pl-3 pt-4">
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <ObjectiveDestroy
                modal={open}
                setModal={setOpen}
                objId={objectiveInfo?.id}
                name={objectiveInfo?.name}
              />
              {!edit ? (
                <h2 className="font-poppins text-xl font-bold text-[#44444F]">
                  {objectiveInfo?.name}
                </h2>
              ) : (
                <Form
                  action={`/project-manager/${params.id}`}
                  method="post"
                  id="pm-edit-obj"
                  className="flex gap-3"
                >
                  <input
                    name="name"
                    type="text"
                    defaultValue={objectiveInfo?.name}
                    className="mt-5 h-9 font-poppins text-xl font-bold text-[#44444F]"
                  />
                  <SelectRouter
                    name={"year"}
                    placeholder={"Year"}
                    options={yearsOption}
                  />
                  <input
                    name="objective_id"
                    type="text"
                    hidden
                    className="hidden"
                    value={objectiveInfo?.id}
                    readOnly
                  />
                  <input
                    type="text"
                    hidden
                    className="hidden"
                    name="action"
                    value="edit-obj"
                    readOnly
                  />
                  <button
                    type="submit"
                    className="mt-5 h-9 rounded-xl border border-primarioBotones px-4 py-1 font-medium text-primarioBotones hover:bg-primarioBotones hover:text-white"
                  >
                    Editar
                  </button>
                </Form>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <IonIcon
                    icon={ellipsisHorizontal}
                    className="size-6 text-[#44444F]"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {editP == true ? (
                    <DropdownMenuItem onClick={() => setEdit(!edit)}>
                      Editar
                    </DropdownMenuItem>
                  ) : (
                    false
                  )}
                  {destroyP == true ? (
                    <DropdownMenuItem onClick={() => setOpen(true)}>
                      Borrar
                    </DropdownMenuItem>
                  ) : (
                    false
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <span className="text-xs font-medium text-grisText">
              Categoría Estratégica
            </span>
          </div>
        </div>

        {/* buttons and filters */}

        <div className="flex items-center gap-8 pl-2">
          <div className="">
            {createP == true ? <GoalForm objectiveId={params.id} /> : false}
          </div>
          <div className="flex gap-3">
            <NavLink
              to={`/project-manager/${params.id}`}
              className={({ isActive }) =>
                isActive &&
                location.pathname === `/project-manager/${params.id}`
                  ? `flex h-6 w-auto items-center rounded-xl bg-primario px-4 text-[10px] font-medium text-white`
                  : `flex h-6 w-auto items-center rounded-xl bg-blancoBox2 px-4 text-[10px] font-medium text-grisHeading`
              }
            >
              Board
            </NavLink>
            <NavLink
              to={`/project-manager/${params.id}/csf`}
              className={({ isActive }) =>
                isActive &&
                location.pathname === `/project-manager/${params.id}/csf`
                  ? `flex h-6 w-auto items-center rounded-xl bg-primario px-4 text-[10px] font-medium text-white`
                  : `flex h-6 w-auto items-center rounded-xl bg-blancoBox2 px-4 text-[10px] font-medium text-grisHeading`
              }
            >
              FCE
            </NavLink>
            <NavLink
              to={`/project-manager/${params.id}/projects`}
              className={({ isActive }) =>
                isActive &&
                location.pathname === `/project-manager/${params.id}/projects`
                  ? `flex h-6 w-auto items-center rounded-xl bg-primario px-4 text-[10px] font-medium text-white`
                  : `flex h-6 w-auto items-center rounded-xl bg-blancoBox2 px-4 text-[10px] font-medium text-grisHeading`
              }
            >
              Proyectos
            </NavLink>
            <NavLink
              to={`/project-manager/completed`}
              className={({ isActive }) =>
                isActive &&
                location.pathname === `/project-manager/${params.id}/completed`
                  ? `flex h-6 w-auto items-center rounded-xl bg-primario px-4 text-[10px] font-medium text-white`
                  : `flex h-6 w-auto items-center rounded-xl bg-blancoBox2 px-4 text-[10px] font-medium text-grisHeading`
              }
            >
              Terminado
            </NavLink>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default MainPManager;

export async function multiFormAction({ params, request }) {
  const paramId = params.id;
  const formData = await request.formData();
  const action = formData.get("action");

  switch (action) {
    case "goal":
      await saveNewGoal(formData, paramId);
      return redirect(`/project-manager/${params.id}`);

    case "csf":
      await saveNewCsf(formData);
      return redirect(`/project-manager/${params.id}`);

    case "task":
      await saveNewTask(formData);
      return redirect(`/project-manager/${params.id}`);

    case "edit-task":
      await editTask(formData);
      return redirect(`/project-manager/${params.id}`);

    case "delete-task":
      await destroyTask(formData);
      return redirect(`/project-manager/${params.id}`);

    case "complete-task":
      await completeTask(formData);
      return redirect(`/project-manager/${params.id}`);

    case "edit-obj":
      await editStrategicObjective(formData);
      return redirect(`/project-manager/${params.id}`);

    case "edit-csf":
      await editCSF(formData);
      return redirect(`/project-manager/${params.id}`);

    case "edit-goal":
      await editGoal(formData);
      return redirect(`/project-manager/${params.id}`);

    case "delete-obj":
      await deleteStrategicObjective(paramId);
      return redirect(`/project-manager/${params.id}`);

    case "delete-goal":
      await deleteGoal(formData);
      return redirect(`/project-manager/${params.id}`);

    case "delete-csf":
      await deleteCSF(formData);
      return redirect(`/project-manager/${params.id}`);
  }
}
