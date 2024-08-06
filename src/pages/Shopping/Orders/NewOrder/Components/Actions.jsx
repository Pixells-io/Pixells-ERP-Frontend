import React from "react";
import { useLocation } from "react-router-dom";
import CardCarousel from "./CardCarousel";
import { Button } from "@/components/ui/button"; // Importar el botón de ShadCN UI
import { IonIcon } from "@ionic/react";
import { copy, print, create } from "ionicons/icons";
import { NavLink
 } from "react-router-dom";

const Actions = ({ url}) => {
  const location = useLocation();

  

  const isShoppingDocumentRoute = location.pathname.startsWith("/shopping/document");

  return (
    <div className="ml-2 flex flex-col items-center justify-end gap-4 pt-4 sm:flex-row">
      <div className="flex items-center gap-2 sm:gap-4">
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
          <NavLink to={url} >
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
        >
          <IonIcon
            icon={create}
            size="small"
            className="cursor-pointer text-[#696974]"
          />
        </Button>
        <CardCarousel />
      </div>
    </div>
  );
};

export default Actions;
