import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

const ServiceMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button   className="flex h-[30px] items-center justify-center gap-1 rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones">
          <IonIcon icon={add} className="h-4 w-4" />
          <span className="text-xs font-medium">Nuevo</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-2xl">
        <DropdownMenuItem className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal">
          <Link
            to="/inventory/general-services/service/new"
            className="flex w-full items-center"
          >
            <span>Servicios</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal">
          <Link
            to="/inventory/general-services"
            className="flex w-full items-center"
          >
            <span>Categorías</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal">
          <Link
            to="/inventory/general-services"
            className="flex w-full items-center"
          >
            <span>Combos</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServiceMenu;