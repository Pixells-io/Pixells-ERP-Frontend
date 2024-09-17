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
import { ellipsisVerticalOutline } from "ionicons/icons";

const MenuItem = ({ menuItems }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <IonIcon
            icon={ellipsisVerticalOutline}
            size="large"
            className="hover:text-primarioBotones-dark active:text-grisDisabled text-gris2 transition-colors duration-300"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl">
        {menuItems.map((item, index) => (
          <DropdownMenuItem key={index} asChild={item.isLink}>
            {item.isLink ? (
              <Link to={item.to} className="flex items-center w-full cursor-pointer">
                <span>{item.label}</span>
              </Link>
            ) : (
              <div onClick={item.onClick} className="flex items-center w-full cursor-pointer">
                <span>{item.label}</span>
              </div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuItem;