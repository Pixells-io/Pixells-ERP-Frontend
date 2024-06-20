import React from "react";
import { NavLink, Outlet, useOutletContext, useParams } from "react-router-dom";

import { chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import GoalForm from "./components/Form/GoalForm";
import { saveNewCsf, saveNewGoal, saveNewTask } from "./utils";

function MainPManager() {
  const params = useParams();
  const [objectivesCtx, setObjectivesCtx] = useOutletContext();
  const objectiveInfo = objectivesCtx?.data?.find(
    (obj, i) => obj.id === Number(params.id),
  );
  // console.log(objectivesCtx);
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
              {objectivesCtx?.data?.length} objectives
            </div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 Activities</div>
          </div>
        </div>

        {/* top content sub */}
        <div className="flex items-center gap-32 pl-3 pt-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              {objectiveInfo?.name}
            </h2>
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

  switch (action) {
    case "goal":
      return await saveNewGoal(formData, paramId);

    case "csf":
      return await saveNewCsf(formData);

    case "task":
      return await saveNewTask(formData);

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
