import React from "react";
import { useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  copyOutline,
  createOutline,
  printOutline,
} from "ionicons/icons";
import { NavLink } from "react-router-dom";

const ActionsGroup = ({ url, setEditable }) => {
  const location = useLocation();

  const currentPath = location.pathname;

  const isEditRoute = currentPath.startsWith("/shopping/invoices-orders/edit");

  const handlerConvert = (value) => {
    setEditable(value);
  };

  const isShoppingDocumentRoute =
    location.pathname.startsWith("/shopping/document");

  return (
    <div className="flex items-end pr-2 gap-x-2">
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-[#E8E8E8]">
        <IonIcon
          icon={copyOutline}
          className="h-5 w-5 cursor-pointer text-[#44444F]"
        ></IonIcon>
      </div>
      {!isShoppingDocumentRoute && (
        <NavLink to={url}>
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-[#E8E8E8]">
            <IonIcon
              icon={printOutline}
              className="h-5 w-5 cursor-pointer text-[#44444F]"
            ></IonIcon>
          </div>
        </NavLink>
      )}
      {!isEditRoute && (
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-[#E8E8E8]"
        onClick={() => handlerConvert(true)}>
          <IonIcon
            icon={createOutline}
            className="h-5 w-5 cursor-pointer text-[#44444F]"
          ></IonIcon>
        </div>
      )}
    </div>
  );
};

export default ActionsGroup;
