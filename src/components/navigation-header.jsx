import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

function NavigationHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2 text-gris2">
        <div
          className="h-12 w-12 hover:cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <IonIcon
            icon={chevronBack}
            size="large"
            className="rounded-3xl bg-blancoBox p-1"
          ></IonIcon>
        </div>
        <div
          className="h-12 w-12 hover:cursor-pointer"
          onClick={() => navigate(+1)}
        >
          <IonIcon
            icon={chevronForward}
            size="large"
            className="rounded-3xl bg-blancoBox p-1"
          ></IonIcon>
        </div>
      </div>
      <div className="font-roboto text-sm text-grisText">
        {location.pathname}
      </div>
    </div>
  );
}

export default NavigationHeader;
