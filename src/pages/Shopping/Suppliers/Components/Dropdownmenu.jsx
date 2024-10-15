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
import { add } from "ionicons/icons";

const MenuSuppliers = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button
                  type={"button"}
                  className="flex h-[30px] items-center justify-center rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
                >
                  <IonIcon icon={add} className="h-4 w-4" />
                  <span className="text-xs font-medium">Nuevo</span>
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
