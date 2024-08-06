import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

const MenuSuppliers = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-transparent h-12 w-12 p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <IonIcon
            icon={addCircleOutline}
            size="large"
            className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl">
        <DropdownMenuItem asChild>
          <Link to="/shopping/supplier/create" className="flex items-center w-full">
            <span>Nuevo proveedor</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => console.log("Cliente existente seleccionado")}
        >
      
          <span>Cliente existente</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuSuppliers;