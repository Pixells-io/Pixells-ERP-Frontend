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

function ServiceSelectAdd({ services }) {
  const options = services.map(({ id, name }) => ({ value: id, label: name }));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IonIcon
          icon={add}
          size={32}
          className="text-4xl text-primario"
        ></IonIcon>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-[300px] w-72 overflow-scroll">
        <DropdownMenuLabel>Select services to show</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex h-full flex-col gap-2">
          <Form
            action="/crm/progress"
            method="post"
            className="flex flex-col gap-2"
          >
            <Select
              name="serviceId"
              options={options}
              isMulti
              placeholder="Select services"
              className="z-[999]"
              // menuPortalTarget={document.body}
              // styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            />

            <Button type="submit">Add</Button>
          </Form>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ServiceSelectAdd;
