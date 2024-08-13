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

function ModalCreateInterview({ modal, setModal, serviceId }) {
  const [processValue, setProcessValue] = useState([]);
  const navigation = useNavigation();
  const [processInputs, setProcessInputs] = useState([
    {
      proceso: "",
    },
  ]);

  function addProcessField() {
    const processInput = {
      proceso: "",
    };

    setProcessInputs([...processInputs, processInput]);
  }

  function removeProcessField(index) {
    const newFields = processInputs.filter((item, i) => index !== i);
    setProcessInputs(newFields);
  }

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
          action={`/crm/services/${serviceId}`}
          method="post"
        >
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <input type="hidden" name="type_of_function" value="5" />
              <input type="hidden" name="service_id" value={serviceId} />
              <InputRouter
                name="name"
                type="text"
                placeholder="Name of the Interview"
              />
              <div className="flex w-full items-center gap-3">
                <div className="flex w-full flex-col gap-3">
                  {processInputs?.map((input, i) => (
                    <div key={i} className="flex w-full gap-3">
                      <InputRouter name="input" placeholder="Title" />
                      {i >= 1 ? (
                        <button
                          type="button"
                          className="flex items-center"
                          onClick={() => removeProcessField(i)}
                        >
                          <IonIcon
                            icon={closeCircle}
                            size=""
                            className="h-5 w-5 text-grisDisabled hover:text-grisText"
                          ></IonIcon>
                        </button>
                      ) : (
                        <div className="w-5"></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex self-center">
                  {processInputs.length <= 4 ? (
                    <button
                      className="flex h-6 w-6 items-center rounded-full bg-primario"
                      onClick={() => addProcessField()}
                      type="button"
                    >
                      <IonIcon
                        icon={add}
                        size="large"
                        className="text-white"
                      ></IonIcon>
                    </button>
                  ) : (
                    <div className="w-6"></div>
                  )}
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

export default ModalCreateInterview;
