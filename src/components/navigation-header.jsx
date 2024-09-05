import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

function NavigationHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="hidden items-center gap-4 md:flex">
      <div className="flex items-center gap-2 text-gris2">
        <div
          className="items-center hover:cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <IonIcon
            icon={chevronBack}
            className="flex size-6 items-center rounded-3xl bg-blancoBox p-1 hover:cursor-pointer"
          ></IonIcon>
        </div>
        <div className="hover:cursor-pointer" onClick={() => navigate(+1)}>
          <IonIcon
            icon={chevronForward}
            className="flex size-6 items-center rounded-3xl bg-blancoBox p-1 hover:cursor-pointer"
          ></IonIcon>
        </div>
      </div>
      <div className="items-center font-roboto text-sm text-grisText">
        {location.pathname}
      </div>
    </div>
  );
}

export default NavigationHeader;
