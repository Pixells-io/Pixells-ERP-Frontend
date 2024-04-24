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
  console.log(services);
  const options = services.map(({ id, name }) => ({ value: id, label: name }));
  console.log(options);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IonIcon icon={add} size={32} className="text-primario"></IonIcon>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <DropdownMenuLabel>Select a Service</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-2 h-48">
          <Form
            action="/crm/progress"
            method="post"
            className="flex flex-col h-fit"
          >
            <Select isMulti options={options} name="serviceId" />
            <Button type="submit">Add</Button>
          </Form>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ServiceSelectAdd;
