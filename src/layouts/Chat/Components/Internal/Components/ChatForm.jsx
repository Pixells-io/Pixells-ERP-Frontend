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
      <DialogContent className="h-fit overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle className="font-poppins">Create New Group</DialogTitle>
        </DialogHeader>
        <Form
          id="new-group-form"
          className="flex flex-col gap-2 px-6"
          encType="multipart/form-data"
          action="/chat"
        >
          <div className="text-center">
            <UserImage name={"group_image"} label={"Group Image"} />
          </div>
          <div className="">
            <InputRouter name={"name"} placeholder={"Name"} type={"text"} />
          </div>
          <div>
            <SelectMultiple
              name={"users"}
              options={selectUsers}
              placeholder={"Select Users"}
            />
          </div>
          <DialogFooter className="px-6 pb-4">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              Save
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormNewChat;
