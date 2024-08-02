import React, { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import UserImage from "@/layouts/Masters/FormComponents/userImage";
import { Button } from "@/components/ui/button";
import DropzoneImage from "@/layouts/Masters/FormComponents/dropzone-image";
import DropzoneFile from "@/components/dropzone-files";

function GoogleCalendarCard() {
  return (
    <div className="w-full overflow-x-hidden overflow-y-scroll">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-transparent px-8 py-4">
        <span className="text-sm font-normal text-grisText">
          Google Calendar Api Keys
        </span>
        <Form
          className="flex h-auto flex-col gap-0"
          action="/configuration/integrations"
          method="post"
          encType="multipart/form-data"
        >
          <div className="flex">
            <div className="inline-grid w-1/3 grid-cols-1 gap-4 px-4">
              <div className="text-center">
                <DropzoneFile name={"keys"} label={"Keys"} />
                <br />
                <InputRouter
                  name={"id"}
                  placeholder={"Google Calendar Id"}
                  type={"text"}
                />
                <br />
                <InputRouter
                  name={"impersonate"}
                  placeholder={"Google Calendar Impersonate"}
                  type={"text"}
                />
                <br />
                <Button
                  type="submit"
                  className="justify-normal rounded-lg bg-primarioBotones px-8 font-roboto text-sm font-semibold text-white hover:bg-primario"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default GoogleCalendarCard;
