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
        <Button className="gap-2 rounded-xl bg-primarioBotones font-roboto text-sm text-white hover:bg-primario">
          <IonIcon icon={add} className="text-lg" />
          Nuevo
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