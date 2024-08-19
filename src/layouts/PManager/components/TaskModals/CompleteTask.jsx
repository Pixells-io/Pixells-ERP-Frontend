import React, { useEffect } from "react";

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
import DropzoneFile from "@/components/dropzone-files";

function CompleteTask({
  modal,
  setModal,
  taskId,
  name,
  description,
  action,
  actionInput,
}) {
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
            Complete Task
          </DialogTitle>
        </DialogHeader>
        <Form
          className="flex h-full w-full flex-col gap-3 px-6"
          method="POST"
          encType="multipart/form-data"
          action={action}
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <input
                type="hidden"
                readOnly
                hidden
                value={taskId}
                name="task_id"
              />
              <input
                type="hidden"
                readOnly
                hidden
                value={actionInput}
                name="action"
              />
              <InputRouter
                type="text"
                placeholder="Name of the area"
                readOnly={true}
                defaultVal={name}
              />
              <InputRouter
                type="text"
                placeholder="Description of the area"
                readOnly={true}
                defaultVal={description}
              />
              <InputRouter name="comment" type="text" placeholder="Comment" />
              <DropzoneFile name={"document"} label={"Voucher"} />
            </div>
          </div>
          <DialogFooter className="flex gap-2 px-10 pb-6">
            <Button
              type="button"
              onClick={() => setModal(false)}
              className="flex w-full rounded-lg px-6 py-2 text-center font-roboto text-xs font-semibold"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={navigation.state === "submitting"}
              className="w-full rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold hover:bg-primario"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Complete"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CompleteTask;
