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

import {
  chevronBack,
  chevronForward,
  ellipsisHorizontal,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import GoalForm from "./components/Form/GoalForm";
import {
  deleteCSF,
  deleteGoal,
  deleteStrategicObjective,
  editCSF,
  editStrategicObjective,
  saveNewCsf,
  saveNewGoal,
  saveNewTask,
} from "./utils";
import ObjectiveDestroy from "./components/ObjectiveDestroy";
import GoalDestroy from "./components/GoalDestroy";

function MainPManager() {
  const params = useParams();
  const navigation = useNavigation();

  const { data } = useLoaderData();

  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [objectiveInfo, setObjectiveInfo] = useState("");

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

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">
            project manager
          </div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-[22px] font-bold text-[#44444F]">
              PROJECT MANAGER
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#8F8F8F]">
            <div className="text-xs">
              {/* {objectivesCtx?.data?.length} objectives */}
            </div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 Activities</div>
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
                    className="font-poppins text-xl font-bold text-[#44444F]"
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
                    className="rounded-xl border border-primarioBotones px-4 py-1 font-medium text-primarioBotones hover:bg-primarioBotones hover:text-white"
                  >
                    Edit
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
                  <DropdownMenuItem onClick={() => setEdit(true)}>
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setOpen(true)}>
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <span className="text-xs font-medium text-grisText">
              Strategic Category
            </span>
          </div>
        </div>

        {/* buttons and filters */}

        <div className="flex items-center gap-8 pl-2">
          <div className="">
            <GoalForm objectiveId={params.id} />
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
              CSF
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
              Projects
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

  console.log(action);

  switch (action) {
    case "goal":
      return await saveNewGoal(formData, paramId);

    case "csf":
      return await saveNewCsf(formData);

    case "task":
      return await saveNewTask(formData);

    case "edit-obj":
      await editStrategicObjective(formData);
      return redirect(`/project-manager/${paramId}`);

    case "edit-csf":
      await editCSF(formData);
      return redirect(`/project-manager/${paramId}`);

    case "delete-obj":
      await deleteStrategicObjective(paramId);
      return redirect("/project-manager");

    case "delete-goal":
      await deleteGoal(formData);
      return redirect(`/project-manager/${paramId}`);

    case "delete-csf":
      await deleteCSF(formData);
      return redirect(`/project-manager/${paramId}`);

    default:
      break;
  }
}

// export async function Action({ params, request }) {
//   console.log(params);
//   const data = await request.formData();

//   const validation = await saveNewGoal(data, params.id);
//   console.log(validation);

//   // if (validation) {
//   //     return validation;
//   // }

//   return redirect(`/project-manager/${params.id}`);
// }
