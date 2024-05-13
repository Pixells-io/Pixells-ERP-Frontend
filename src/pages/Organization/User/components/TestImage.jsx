import React from "react";
import { Form } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";

function TestImage() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IonIcon
          icon={addCircle}
          size={32}
          className="text-4xl text-primario"
        ></IonIcon>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 overflow-scroll">
        <DropdownMenuLabel>Select services to show</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-2 h-full">
          <Form
            action="/organization/sopas"
            method="post"
            encType="multipart/form-data"
            className="flex flex-col gap-2"
          >
            <input type="text" name="text" />
            <input type="file" name="file" />

            <Button type="submit">Add</Button>
          </Form>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default TestImage;
