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

function ModalDeleteChat({ chat_id }) {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger className="rounded-2xl border border-red-500 px-4 py-2 text-red-500 hover:bg-red-400 hover:text-slate-100">
        Delete Chat
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle className="text-center">DELETE CHAT GROUP</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form
          id="delete-group-chat"
          action={`/chat/${chat_id}/user-media-library`}
          method="post"
          encType="multipart/form-data"
          className="flex flex-col gap-4 px-6"
        >
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
            value="delete-group"
            name="action"
          />
          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="w-1/2 bg-[#343434] font-roboto text-xs font-semibold hover:bg-primarioBotones"
                onClick={() => setModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-1/2 bg-red-400 font-roboto text-xs font-semibold hover:bg-red-600"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Delete"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDeleteChat;
