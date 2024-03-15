import React from "react";
import { NavLink } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { grid, search } from "ionicons/icons";

function TopMenuCRM() {
  return (
    <>
      <NavLink to="/crm">
        <div className="flex items-center gap-6 text-gris2">
          <IonIcon icon={grid} size="large"></IonIcon>
          <div>
            <p className="text-lg font-medium text-gris2">Homepage</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/">
        <div className="flex items-center gap-6 text-gris2">
          <IonIcon icon={search} size="large"></IonIcon>
          <div>
            <p className="text-lg font-medium text-gris2">Search</p>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default TopMenuCRM;
