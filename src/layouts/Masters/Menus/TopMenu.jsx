import React from "react";
import { NavLink } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { grid, searchOutline } from "ionicons/icons";

function TopMenu({ main }) {
  return (
    <div className="flex flex-col gap-4">
    <NavLink to={main}>
      <div className="flex items-center gap-4 text-grisText">
        <IonIcon icon={grid} className="size-6"></IonIcon>
        <div>
          <p className="font-roboto text-base font-medium text-grisText">
            Inicio
          </p>
        </div>
      </div>
    </NavLink>
    <NavLink to="/">
      <div className="flex items-center gap-4 text-grisText">
        <IonIcon icon={searchOutline} className="size-6"></IonIcon>
        <div>
          <p className="font-roboto text-base font-medium text-grisText">
            Búsqueda
          </p>
        </div>
      </div>
    </NavLink>
  </div>
  );
}

export default TopMenu;
