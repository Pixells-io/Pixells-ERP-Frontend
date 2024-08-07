import React from "react";
import { NavLink } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { grid, searchOutline } from "ionicons/icons";

function TopMenu({ main }) {
  return (
    <>
      <NavLink to={main}>
        <div className="flex items-center gap-6 text-grisText">
          <IonIcon icon={grid} size="large"></IonIcon>
          <div>
            <p className="font-roboto text-base font-medium text-grisText">
              Inicio
            </p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/">
        <div className="flex items-center gap-6 text-grisText">
          <IonIcon icon={searchOutline} size="large"></IonIcon>
          <div>
            <p className="font-roboto text-base font-medium text-grisText">
              Búsqueda
            </p>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default TopMenu;
