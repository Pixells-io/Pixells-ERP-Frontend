import React, { useState, useEffect } from "react";

import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

import { Form } from "react-router-dom";
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

function FormNewChat({ users }) {
  // console.log(users);

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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-primario hover:rounded-lg hover:text-primario"
        >
          <IonIcon icon={addCircleOutline} size="large"></IonIcon>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-fit overflow-auto sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-poppins">Create New Group</DialogTitle>
        </DialogHeader>
        <Form id="new-group-form">
          <div className="text-center">
            <UserImage name={"group_image"} label={"Group Image"} />
          </div>
          <div className="ml-[-15px] mr-[15px]">
            <InputRouter name={"name"} placeholder={"Name"} type={"text"} />
          </div>
          <div>
            <SelectMultiple
              name={"users"}
              options={selectUsers}
              placeholder={"Select Users"}
            />
          </div>
        </Form>
        <DialogFooter>
          <Button
            form="new-group-form"
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewChat;
