import React, { useEffect, useState } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { closeCircle, trash } from "ionicons/icons";

function DocumentDestroy({ documentId, name }) {
  const [modal, setModal] = useState(false);
  const params = useParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger>
        <IonIcon icon={closeCircle} className="size-4 text-grisDisabled" />
      </DialogTrigger>
      <DialogContent className="overflow-auto border-none bg-black p-0 sm:max-w-[425px]">
        <DialogHeader className="pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-white">
            Borrar Document - {name}
          </DialogTitle>
        </DialogHeader>
        <Form
          id="form-delete-document"
          className="flex h-full w-full flex-col gap-3 px-8"
          action={`/org-development/induction`}
          method="post"
        >
          <input
            type="hidden"
            hidden
            readOnly
            value={documentId}
            name="document_id"
          />
          <input type="hidden" hidden readOnly value="3" name="action" />
          <span className="font-roboto text-[#A6A6A6]"></span>
          <DialogFooter className="flex gap-4 py-6">
            <Button
              type="submit"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold text-white"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Borrar"}
            </Button>
            <Button
              type="button"
              onClick={() => setModal(false)}
              className="justify-normal rounded-lg bg-grisText px-6 py-2 font-roboto text-xs font-semibold text-white"
            >
              Cancelar
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default DocumentDestroy;
