import React from "react";
import Select from "react-select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { Form } from "react-router-dom";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function ServiceSelectAdd({ services }) {
  const options = services.map(({ id, name }) => ({ value: id, label: name }));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost">
          <IonIcon
            icon={add}
            size={32}
            className="text-4xl text-primario"
          ></IonIcon>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-[300px] w-64 overflow-scroll">
        <DropdownMenuLabel>Select services to show</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="relative flex h-full flex-col gap-2">
          <Form
            action="/crm/progress"
            method="post"
            className="flex h-full flex-col gap-2"
          >
            <input type="hidden" value="set-services" name="action" />
            <div className="px-4 pt-4">
              <SelectRouter
                name="serviceId"
                options={options}
                isMulti={true}
                placeholder="Select services"
              />
            </div>
            <div className="flex self-end px-4 pt-4">
              <Button type="submit" className="w-fit bg-primarioBotones px-6">
                Add
              </Button>
            </div>
          </Form>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ServiceSelectAdd;
