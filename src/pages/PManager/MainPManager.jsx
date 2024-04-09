import React from "react";
import {
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useOutletContext,
  useParams,
} from "react-router-dom";

import { chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import GoalForm from "./components/Form/GoalForm";
import { saveNewCsf, saveNewGoal, saveNewTask } from "./utils";

function MainPManager() {
  const params = useParams();
  const [objectivesCtx, setObjectivesCtx] = useOutletContext();
  const objectiveInfo = objectivesCtx?.data?.find(
    (obj, i) => obj.id === Number(params.id)
  );
  console.log(objectivesCtx);
  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  text-gris2">
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
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
            <h2 className=" font-poppins font-bold text-[22px] text-[#44444F]">
              PROJECT MANAGER
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
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
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              {objectiveInfo?.name}
            </h2>
            <span className="font-medium text-xs text-grisText">
              Strategic Category
            </span>
          </div>
          <div className="flex gap-2 text-[#8F8F8F] self-start">
            <div className="text-xl">&bull;</div>
            <div className="text-xl">&bull;</div>
            <div className="text-xl">&bull;</div>
          </div>
        </div>

        {/* buttons and filters */}

        <GoalForm objectiveId={params.id} />

        <div className="flex gap-4">
          <NavLink
            to={`/project-manager/${params.id}`}
            className={({ isActive }) =>
              isActive && location.pathname === `/project-manager/${params.id}`
                ? `h-6 w-auto bg-primario text-white text-[10px] font-medium rounded-xl px-4 flex items-center`
                : `h-6 w-auto bg-blancoBox2 text-grisHeading text-[10px] font-medium rounded-xl px-4 flex items-center`
            }
          >
            Board
          </NavLink>
          <NavLink
            to={`/project-manager/${params.id}/csf`}
            className={({ isActive }) =>
              isActive &&
              location.pathname === `/project-manager/${params.id}/csf`
                ? `h-6 w-auto bg-primario text-white text-[10px] font-medium rounded-xl px-4 flex items-center`
                : `h-6 w-auto bg-blancoBox2 text-grisHeading text-[10px] font-medium rounded-xl px-4 flex items-center`
            }
          >
            CSF
          </NavLink>
          <NavLink
            to={`/project-manager/${params.id}/projects`}
            className={({ isActive }) =>
              isActive &&
              location.pathname === `/project-manager/${params.id}/projects`
                ? `h-6 w-auto bg-primario text-white text-[10px] font-medium rounded-xl px-4 flex items-center`
                : `h-6 w-auto bg-blancoBox2 text-grisHeading text-[10px] font-medium rounded-xl px-4 flex items-center`
            }
          >
            Projects
          </NavLink>
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
