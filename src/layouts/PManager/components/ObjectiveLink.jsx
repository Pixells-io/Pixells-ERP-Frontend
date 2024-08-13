import React from "react";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { flag } from "ionicons/icons";

function ObjectiveLink({ objective, areas }) {
  const objectiveArea = areas?.data?.find(
    (area) => area?.id == objective?.description,
  );
  return (
    <NavLink
      to={`/project-manager/${objective.id}`}
      className={({ isActive }) =>
        isActive
          ? "w-full rounded-lg bg-[#E8E8E8] px-4 text-primario"
          : "w-full px-4 text-gris2 hover:rounded-lg hover:bg-[#EAEAEA]"
      }
    >
      <div className="flex items-center gap-6">
        <IonIcon icon={flag} size="large" className="shrink-0"></IonIcon>

        <div>
          <p className="w-44 truncate text-base font-medium">
            {objective.name}
          </p>
          <p className="text-[10px] font-medium">{objectiveArea?.nombre}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default ObjectiveLink;
