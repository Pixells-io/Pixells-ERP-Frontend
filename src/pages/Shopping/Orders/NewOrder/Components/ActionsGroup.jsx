import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { copy, create, print } from "ionicons/icons";
import { NavLink } from "react-router-dom";

const ActionsGroup = ({ url, setEditable }) => {
  const location = useLocation();
  
  const handlerConvert = (value) => {
    setEditable(value);
  };
  
  const isShoppingDocumentRoute = location.pathname.startsWith("/shopping/document");

  return (
    <div className="flex pl-[400px] pr-2 items-end">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20 focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <IonIcon
          icon={copy}
          size="small"
          className="cursor-pointer text-[#696974]"
        />
      </Button>
      {!isShoppingDocumentRoute && (
        <NavLink to={url}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20 focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <IonIcon
              icon={print}
              size="small"
              className="cursor-pointer text-[#696974]"
            />
          </Button>
        </NavLink>
      )}
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20 focus-visible:ring-0 focus-visible:ring-offset-0"
        onClick={() => handlerConvert(true)}
      >
        <IonIcon
          icon={create}
          size="small"
          className="cursor-pointer text-[#696974]"
        />
      </Button>
    </div>
  );
};

export default ActionsGroup;
