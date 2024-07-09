import React, { useEffect } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function GoalEdit({ modal, setModal, name, goalId }) {
  const params = useParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="p-0">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle> Edit Goal - {name}</DialogTitle>
        </DialogHeader>
        <Form
          id="form-delete-goal"
          className="flex h-full w-full flex-col gap-3 px-8"
          action={`/project-manager/${params.id}`}
          method="post"
        >
          <input type="hidden" hidden readOnly value={goalId} name="goal_id" />
          <input
            type="hidden"
            hidden
            readOnly
            value="edit-goal"
            name="action"
          />
          <InputRouter
            type="text"
            placeholder={name}
            defaultValue={name}
            name="name"
          />
          <DialogFooter className="flex gap-4 py-6">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 text-xs font-semibold text-white"
            >
              Edit
            </Button>
            <Button
              type="button"
              onClick={() => setModal(false)}
              className="justify-normal rounded-lg bg-grisText px-6 py-2 text-xs font-semibold text-white"
            >
              Cancel
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default GoalEdit;
