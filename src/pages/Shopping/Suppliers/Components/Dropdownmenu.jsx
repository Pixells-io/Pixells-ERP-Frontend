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
          type="button"
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
        >
          <IonIcon
            icon={addCircleOutline}
            size="large"
            className="text-primarioBotones"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl">
        <DropdownMenuItem asChild>
          <Link
            to="/shopping/supplier/create"
            className="flex w-full items-center"
          >
            <span>Nuevo proveedor</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            to="/shopping/customer/create"
            className="flex w-full items-center"
          >
            <span>Clientes existentes</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuSuppliers;
