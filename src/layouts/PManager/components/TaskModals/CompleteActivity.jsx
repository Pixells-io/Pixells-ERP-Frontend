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

const DAYS = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
];

function CompleteActivity({ modal, setModal, activity, action, actionInput }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto border-none bg-black p-0 sm:max-w-[425px]">
        <DialogHeader className="pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-white">
            Complete Activity
          </DialogTitle>
        </DialogHeader>
        <Form
          id="modal-complete-activity"
          className="flex h-full w-full flex-col gap-3 px-6"
          action={action}
          method="POST"
        >
          <input hidden readOnly value={activity} name="activity_id" />
          <input hidden readOnly value={actionInput} name="action" />
          <span className="font-roboto text-[#A6A6A6]">
            You are trying to complete a activity, are you sure?
          </span>
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
              {navigation.state === "submitting"
                ? "Submitting..."
                : "Completar"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CompleteActivity;
