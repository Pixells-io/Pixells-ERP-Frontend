import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DropzoneFile from "@/components/dropzone-files";

function MensaggeFileModal({ modal, setModal, chat_id }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Send File
          </DialogTitle>
        </DialogHeader>
        <Form
          id="area-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/chat/${chat_id}`}
          method="post"
          encType="multipart/form-data"
        >
          <input type="hidden" name="chat_id" value={chat_id} />
          <input type="hidden" name="type_of_function" value="2" />
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <DropzoneFile name={"file"} label={"Drag and drop file"} />
            </div>
          </div>
        </Form>
        <DialogFooter className="px-10 pb-6">
          <Button
            form="area-form"
            className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
          >
            Send File
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default MensaggeFileModal;
