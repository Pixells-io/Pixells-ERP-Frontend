import React from "react";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { flag } from "ionicons/icons";

function ObjectiveLink({ objective, areas }) {
  const objectiveArea = areas?.data?.find(
    (area) => area?.id == objective?.description
  );
  // console.log(objectiveArea);
  return (
    <NavLink
      to={`/project-manager/${objective.id}`}
      className={({ isActive }) => (isActive ? "text-blue-500" : "text-gris2")}
    >
      <div className="flex items-center gap-6">
        <IonIcon icon={flag} size="large" className="shrink-0"></IonIcon>

        <div>
          <p className="font-medium text-base truncate w-44">
            {objective.name}
          </p>
          <p className="font-medium text-[10px]">{objectiveArea?.nombre}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default ObjectiveLink;
