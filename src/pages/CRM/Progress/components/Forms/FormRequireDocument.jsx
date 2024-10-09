import React, { useEffect } from "react";

import { Form, useNavigation, useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import InputRouter from "@/layouts/Masters/FormComponents/input";

function FormRequireDocument({ modal, setModal, customer }) {
  const navigation = useNavigation();
  const { id } = useParams();

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
            Require Document
          </DialogTitle>
        </DialogHeader>
        <Form
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/sales/progress/${id}`}
          method="post"
          encType="multipart/form-data"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <input
                type="hidden"
                value={customer?.customer_id}
                name="customer_id"
              />
              <input type="hidden" value={id} name="service_id" />
              <input type="hidden" value="require_document" name="action" />
              <InputRouter name="name" type="text" placeholder="Title" />
              <InputRouter name="comment" type="text" placeholder="Comment" />
              <InputRouter
                name="required_date"
                type="date"
                placeholder="Comment"
              />
            </div>
          </div>
          <DialogFooter className="px-10 pb-6">
            <button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
              onClick={() => setModal(false)}
            >
              Save
            </button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FormRequireDocument;
