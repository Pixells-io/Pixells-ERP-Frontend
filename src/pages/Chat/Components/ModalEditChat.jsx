import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { create } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import DropzoneImage from "@/layouts/Masters/FormComponents/dropzone-image";

function ModalEditChat({ chat_id, data }) {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger>
        <IonIcon icon={create} className="flex size-7 text-grisSubText" />
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>Edit chat group</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form
          id="edit-group-chat"
          action={`/chat/${chat_id}/user-media-library`}
          method="post"
          encType="multipart/form-data"
          className="flex flex-col gap-4 px-6"
        >
          <div className="flex justify-center">
            <DropzoneImage name={"group_image"} url={data.img} />
          </div>
          <InputRouter
            name={"name"}
            placeholder={"Name"}
            type={"text"}
            defaultVal={data.name}
          />

          <input
            type="text"
            hidden
            readOnly
            className="hidden"
            value={chat_id}
            name="chat_id"
          />
          <input
            type="text"
            hidden
            readOnly
            className="hidden"
            value="edit-group"
            name="action"
          />
          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="w-1/2 bg-[#343434] font-roboto text-xs font-semibold"
                onClick={() => setModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-1/2 bg-primarioBotones font-roboto text-xs font-semibold"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Confirm"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalEditChat;
