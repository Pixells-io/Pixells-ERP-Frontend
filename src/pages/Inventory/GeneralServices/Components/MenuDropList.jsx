import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

const ServiceMenu = ({ setModalCategories, setModalPackages }) => {
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
        <DropdownMenuItem onClick={() => setModalCategories(true)}>
          <span>Categorías</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setModalPackages(true)}>
          <span>Combos</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServiceMenu;