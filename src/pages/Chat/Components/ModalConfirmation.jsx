import React, { useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, useNavigation } from "react-router-dom";
import DropzoneImage from "@/layouts/Masters/FormComponents/dropzone-image";

function ModalConfirmation({
  title,
  description,
  user_id,
  chat_id,
  modal,
  setModal,
}) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-w-[250px] border-0 bg-[#242424] p-6">
        <DialogHeader className="">
          <DialogTitle className="text-md font-roboto font-semibold text-white">
            {title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="font-roboto text-xs text-grisSubText">
          {description}
        </DialogDescription>
        <Form
          id="remove-group-participant"
          action={`/chat/${chat_id}/user-media-library`}
          method="post"
          encType="multipart/form-data"
          className="flex flex-col gap-2 px-6"
        >
          <input
            type="text"
            hidden
            readOnly
            className="hidden"
            value={user_id}
            name="user_id"
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
            value="remove-participant"
            name="action"
          />
          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="w-1/2 bg-[#343434] font-roboto text-xs font-semibold"
                onClick={() => setModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="w-1/2 bg-primarioBotones font-roboto text-xs font-semibold"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Borrar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalConfirmation;
