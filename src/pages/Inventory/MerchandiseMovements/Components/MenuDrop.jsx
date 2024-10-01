import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

const MenuMovements = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button
                  type={"button"}
                  className="flex h-[30px] items-center justify-center gap-1 rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
                >
                  <IonIcon icon={add} className="h-4 w-4" />
                  <span className="text-xs font-medium">Nuevo</span>
                </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-2xl">
        <DropdownMenuItem className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal">
          <Link
            to="/inventory/merchandise-movements/entry/new"
            className="flex w-full items-center"
          >
            <span>Entradas</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal">
          <Link
            to="/inventory/merchandise-movements/egress/new"
            className="flex w-full items-center"
          >
            <span>Salidas</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal">
          <Link
            to="/inventory/merchandise-movements/transfer/new"
            className="flex w-full items-center"
          >
            <span>Nueva Solicitud de Traspaso</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal">
          <Link
            to="/inventory/merchandise-movements/transfer/direct/new"
            className="flex w-full items-center"
          >
            <span>Traspaso</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuMovements;