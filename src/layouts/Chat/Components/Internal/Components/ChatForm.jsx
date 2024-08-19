import React, { useState, useEffect } from "react";

import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SelectMultiple from "@/components/ui/selectMultiple";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import UserImage from "@/layouts/Masters/FormComponents/userImage";
import DropzoneImage from "@/layouts/Masters/FormComponents/dropzone-image";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function FormNewChat({ users }) {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  const selectUsers = [];

  arrayFillUsers(users, selectUsers);

  function arrayFillUsers(data, array) {
    let dataParse = data;

    dataParse.forEach((element) => {
      array.push({
        label: element.name + " " + element.last_name,
        value: element.id,
      });
    });
  }

  useEffect(() => {
    if (navigation.state === "idle") {
      setOpen(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-primario hover:rounded-lg hover:text-primario"
        >
          <IonIcon icon={addCircleOutline} size="large"></IonIcon>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-fit overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle className="font-poppins">Crear nuevo grupo</DialogTitle>
        </DialogHeader>
        <Form
          id="new-group-form"
          className="flex flex-col gap-6 px-6"
          encType="multipart/form-data"
          action="/chat"
          method="post"
        >
          <input
            type="hidden"
            name="type_of_function"
            value={2}
            hidden
            readOnly
          />
          <div className="flex justify-center">
            <DropzoneImage name={"group_image"} />
          </div>
          <InputRouter name={"name"} placeholder={"Nombre"} type={"text"} />
          <SelectRouter
            name="users"
            options={selectUsers}
            placeholder="Seleccionar Usuarios"
            isMulti={true}
          />
          <DialogFooter className="py-4">
            <Button
              type="submit"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewChat;
