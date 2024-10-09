import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, useParams } from "react-router-dom";

function StepOptions({ open, setOpen, step }) {
  const params = useParams();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-auto border-none bg-black p-0 sm:max-w-[425px]">
        <DialogHeader className="pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-white">
            Remove Step - {step?.name}
          </DialogTitle>
        </DialogHeader>
        <Form
          id="form-delete-step"
          className="flex h-full w-full flex-col gap-3 px-8"
          action={`/sales/progress/${params.id}`}
          method="post"
        >
          <input type="hidden" value={step.id} name="step_id" />
          <input type="hidden" value="delete-step" name="action" />
          <span className="font-roboto text-[#A6A6A6]">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </span>
          <DialogFooter className="flex gap-4 py-6">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold text-white"
            >
              Delete
            </Button>
            <Button
              type="button"
              onClick={() => setOpen(false)}
              className="justify-normal rounded-lg bg-grisText px-6 py-2 font-roboto text-xs font-semibold text-white"
            >
              Cancel
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default StepOptions;
