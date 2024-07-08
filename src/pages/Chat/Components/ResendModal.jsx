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
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function ResendModal({ modal, setModal, msg_id, chats, chat_id }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  const selectChat = [];

  arrayFillChats(chats, selectChat);

  function arrayFillChats(data, array) {
    data.forEach((element) => {
      array.push({
        label: element.title,
        value: element.chat_id,
      });
    });
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Resend Message
          </DialogTitle>
        </DialogHeader>
        <Form
          id="area-form"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/chat/${chat_id}`}
          method="post"
        >
          <input type="hidden" name="msg_id" value={msg_id} />
          <input type="hidden" name="type_of_function" value="3" />
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <SelectRouter
                name={"chat_id"}
                placeholder={"Chat to Resend"}
                options={selectChat}
              />
            </div>
          </div>
          <DialogFooter className="px-10 pb-6">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
            >
              Resend
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ResendModal;