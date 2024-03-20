import React from "react";
import { NavLink } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { grid, searchOutline } from "ionicons/icons";

function TopMenuCRM() {
  return (
    <>
      <NavLink to="/organization">
        <div className="flex items-center gap-6 text-grisText">
          <IonIcon icon={grid} size="large"></IonIcon>
          <div>
            <p className="text-lg font-medium text-grisText font-roboto">Homepage</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/">
        <div className="flex items-center gap-6 text-grisText">
          <IonIcon icon={searchOutline} size="large"></IonIcon>
          <div>
            <p className="text-lg font-medium text-grisText font-roboto">Search</p>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default TopMenuCRM;
