import React, { useState } from "react";
import { redirect } from "react-router-dom";

import { saveNewImage } from "./utils";
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
import Cookies from "js-cookie";

function Sopas() {
  const [image, setImage] = useState("");

  function handleImage(e) {
    setImage(e.target.files[0]);
  }

  function handleApi() {
    const formData = new FormData();

    formData.append("image", image);

    Action(formData);
  }

  return (
    <div>
      <div>
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
            <div className="flex h-full flex-col gap-2">
              <input type="text" name="text" />
              <input type="file" onChange={handleImage} name="file" />
              <button type="button" onClick={handleApi}>
                Prueba
              </button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Sopas;

export async function Action(formData) {
  const validation = await saveNewImage(formData);

  return redirect("/organization/sopas");

  return 1;
}
