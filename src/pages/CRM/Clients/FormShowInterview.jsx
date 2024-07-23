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
import InputRouter from "@/layouts/Masters/FormComponents/input";
import CheckboxRouter from "@/layouts/Masters/FormComponents/checkbox";

function FormShowInterview({ modal, setModal, interview }) {
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
            {interview.title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
          <div className="flex w-full flex-col gap-3 pb-4 font-light">
            {interview?.question?.map((question, i) => (
              <div>
                <span className="font-montserrat text-base font-medium text-grisText">
                  {question?.question}
                </span>
                <br />
                <span className="font-montserrat text-sm font-normal text-grisText">
                  {question?.answer}
                </span>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FormShowInterview;
