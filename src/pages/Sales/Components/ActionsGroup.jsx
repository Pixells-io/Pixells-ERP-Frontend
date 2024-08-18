import React from "react";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { copy, create, print } from "ionicons/icons";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ActionGroup = ({ url, setisEditable }) => {

  const location = useLocation(); 

  const currentPath = location.pathname;

  const isEditRoute = currentPath.startsWith('/sales/invoices/edit');
  const handlerConvert = (value) => {
    setisEditable(value);
  };

  return (
    <div className="flex pr-2 items-end">
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
      {!isEditRoute && (
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
        )}
    </div>
  );
};

export default ActionGroup;
