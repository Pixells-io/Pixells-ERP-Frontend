import React, { useEffect } from "react";

import { Form, useNavigation, useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function ObjectiveDestroy({ modal, setModal, objId, name }) {
  const navigation = useNavigation();
  const params = useParams();

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
            Delete Objective - {name}
          </DialogTitle>
        </DialogHeader>
        <Form
          id="form-delete-obj"
          action={`/project-manager/${params.id}`}
          method="get"
          className="flex h-full w-full flex-col gap-3 px-8"
        >
          <input type="hidden" value={objId} name="objective_id" />
          <input type="hidden" value="delete-obj" name="action" />
          <span className="font-roboto text-[#A6A6A6]">
            You are trying to delete a Streategic Objective, are you sure?
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
              onClick={() => setModal(false)}
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

export default ObjectiveDestroy;
