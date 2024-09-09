import React, { useState } from "react";

import QuestionForm from "./components/QuestionForm";
import MenssageCard from "./components/MessageCard";
import { IonIcon } from "@ionic/react";
import { close, happyOutline, menu } from "ionicons/icons";

function CustomModal({ isOpen, onClose }) {
  const [chat, setChat] = useState([]);
  console.log(chat);
  if (!isOpen) return null;

  return (
    <div className="fixed right-6 top-16 z-50 flex h-[600px] w-96 max-w-full flex-col overflow-auto rounded-3xl bg-white p-6 shadow-lg">
      {/* HEADER SECTION */}
      <div className="border-b py-2 font-poppins font-semibold text-grisHeading">
        <div className="flex w-full items-center justify-between">
          <IonIcon icon={menu} className="text-2xl text-grisHeading" />
          <div className="flex items-center gap-3">
            <IonIcon icon={happyOutline} className="text-2xl text-primario" />
            <span className="text-md font-poppins font-medium">CRISPÍN</span>
            <span className="font-poppins text-sm font-light text-grisHeading">
              Asistente Virtual
            </span>
          </div>
          <IonIcon
            icon={close}
            className="flex size-4 rounded-full bg-grisDisabled p-1 text-xl text-white hover:text-gray-900 focus:outline-none"
            onClick={onClose}
          />
        </div>
      </div>
      {/* QUESTION SECTION */}
      <div className="flex h-full flex-col overflow-y-scroll">
        {chat.map((response, i) => (
          <MenssageCard
            key={i}
            message={response.message}
            type={response.type}
            index={i}
          />
        ))}
      </div>
      {/* INPUT SEND SECTION */}
      <div className="pt-4">
        <QuestionForm chat={chat} setChat={setChat} />
      </div>
    </div>
  );
}

export default CustomModal;
