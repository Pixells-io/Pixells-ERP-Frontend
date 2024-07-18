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
import InputRouter from "@/layouts/Masters/FormComponents/input";

function ReplyModal({ modal, setModal, chat_id, message_id }) {
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
            Reply Message
          </DialogTitle>
        </DialogHeader>
        <Form
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/chat/${chat_id}`}
          method="post"
        >
          <input type="hidden" name="message_id" value={message_id} />
          <input type="hidden" name="type_of_function" value="4" />
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <InputRouter
                name={"message"}
                placeholder={"Type your message"}
                type={"text"}
              />
            </div>
          </div>
          <DialogFooter className="px-10 pb-6">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
            >
              Reply
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ReplyModal;
