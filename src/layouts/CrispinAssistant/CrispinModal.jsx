import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuestionForm from "./components/QuestionForm";
import MenssageCard from "./components/MessageCard";
import { IonIcon } from "@ionic/react";
import { close, happyOutline, menu } from "ionicons/icons";

function CrispinModal({ modal, setModal }) {
  const MessagesArray = [
    {
      message: "Crispin",
      type: "0",
    },
    {
      message: "Usuario",
      type: "1",
    },
  ];

  return (
    <Dialog open={modal} onOpenChange={setModal} hasCloseButton={false}>
      <DialogContent
        className="flex h-[600px] w-[300px] flex-col justify-between overflow-auto p-0"
        hasCloseButton={false}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader className="pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            <div className="flex justify-between">
              <IonIcon icon={menu} className="text-2xl text-grisHeading" />
              <div className="flex gap-3">
                <IonIcon
                  icon={happyOutline}
                  className="text-2xl text-primario"
                />
                <span className="text-md font-poppins font-medium">
                  CRISPÍN
                </span>
                <span className="font-poppins text-sm font-light text-grisHeading">
                  Asistente Virtual
                </span>
              </div>
              {/* <DialogClose>
                <IonIcon
                  icon={close}
                  className="rounded-full bg-grisDisabled p-1 text-xl text-white"
                />
              </DialogClose> */}
            </div>
          </DialogTitle>
        </DialogHeader>
        {/* QUESTION SECTION */}
        <div className="scrollbar-hidden flex h-full flex-col justify-end overflow-y-scroll px-4">
          {MessagesArray.map((response, i) => (
            <MenssageCard
              key={i}
              message={response.message}
              type={response.type}
              index={i}
            />
          ))}
        </div>
        {/* QUESTION FOOTER FORM */}
        <div className="py-6">
          <QuestionForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CrispinModal;
