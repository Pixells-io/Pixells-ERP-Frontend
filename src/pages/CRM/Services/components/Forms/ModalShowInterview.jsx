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
import { IonIcon } from "@ionic/react";
import { add, closeCircle } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function ModalShowInterview({ modal, setModal, id, name, questions }) {
  const [processValue, setProcessValue] = useState([]);
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
            Create Interview
          </DialogTitle>
        </DialogHeader>
        <Form
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/crm/services/${id}`}
          method="post"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <input type="hidden" name="type_of_function" value="5" />
              <input type="hidden" name="service_id" value={id} />
              <InputRouter
                name="name"
                type="text"
                value={name}
                placeholder="Name of the Interview"
              />
              <div className="flex w-full items-center gap-3">
                <div className="flex w-full flex-col gap-3">
                  {questions?.map((input, i) => (
                    <div key={i} className="flex w-full gap-3">
                      <InputRouter
                        name="input"
                        placeholder="Title"
                        value={input.question}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="px-10 pb-6">
            <Button
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
            >
              Save
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalShowInterview;
