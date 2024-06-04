import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";

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

  /*function handleImage(e) {
    setImage(e.target.files[0]);
  }

  function handleApi() {
    const formData = new FormData();

    formData.append("image", image);

    Action(formData);
  }*/

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
            <Form
              id="send-sopas"
              encType="multipart/form-data"
              action="/organization/sopas"
              method="post"
            >
              <div className="flex h-full flex-col gap-2">
                <input type="text" name="text" />
                <input type="file" name="file" />
                <Button form="send-sopas">Sopas</Button>
              </div>
            </Form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Sopas;

export async function Action({ request }) {
  const data = await request.formData();

  const formData = new FormData();

  formData.append("image", data.get("file"));

  console.log(data.get("file"), formData);
  /*const validation = await saveNewImage(formData);*/

  //return redirect("/organization/sopas");

  return 1;
}
