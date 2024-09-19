import React, { useState } from "react";

import QuestionForm from "./components/QuestionForm";
import MenssageCard from "./components/MessageCard";
import { IonIcon } from "@ionic/react";
import {
  arrowUp,
  close,
  cube,
  cubeOutline,
  happyOutline,
  menu,
} from "ionicons/icons";

function CustomModal({ isOpen, onClose }) {
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalMode, setModalMode] = useState("w-96 h-[600px] p-6");

  if (!isOpen) return null;

  return (
    <div
      className={
        modalMode +
        " " +
        "fixed right-6 top-16 z-50 flex max-w-full flex-col overflow-auto rounded-3xl bg-white shadow-lg transition-all"
      }
    >
      {/* HEADER SECTION */}

      <div
        className={
          modalMode == "h-16 w-96 px-6 py-1"
            ? "pt-4 font-poppins font-semibold text-grisHeading"
            : "border-b py-2 font-poppins font-semibold text-grisHeading"
        }
      >
        <div className="flex w-full items-center justify-between">
          {modalMode == "w-96 h-[600px] p-6" ? (
            <IonIcon
              icon={cube}
              className="text-2xl text-grisHeading"
              onClick={() => setModalMode("w-[600px] h-[600px] p-6")}
            />
          ) : modalMode == "w-[600px] h-[600px] p-6" ? (
            <IonIcon
              icon={arrowUp}
              className="text-2xl text-grisHeading"
              onClick={() => setModalMode("h-16 w-96 px-6 py-1")}
            />
          ) : (
            <IonIcon
              icon={cubeOutline}
              className="text-2xl text-grisHeading"
              onClick={() => setModalMode("w-96 h-[600px] p-6")}
            />
          )}
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
      {modalMode == "h-16 w-96 px-6 py-1" ? null : (
        <div className="flex h-full flex-col-reverse overflow-y-scroll pr-3 pt-4">
          {chat.map((response, i) => (
            <MenssageCard
              key={i}
              message={response.message}
              type={response.type}
              index={i}
            />
          ))}
        </div>
      )}
      {/* ERROR SECTION */}
      {isError && (
        <div className="flex items-center justify-center pt-2">
          <div className="rounded-lg border border-red-500 p-2 text-center text-sm text-red-500">
            Mis disculpas, parece que algo salió mal. <br />
            ¿Te gustaría intentar de nuevo?
          </div>
        </div>
      )}
      {/* LOADER SECTION */}
      {isLoading && (
        <div className="flex items-center justify-center pt-2">
          <div className="size-8 animate-spin rounded-full border-4 border-dashed border-blue-500"></div>
        </div>
      )}
      {/* INPUT SEND SECTION */}
      {modalMode == "h-16 w-96 px-6 py-1" ? null : (
        <div className="pt-4">
          <QuestionForm
            setChat={setChat}
            setIsLoading={setIsLoading}
            setIsError={setIsError}
          />
        </div>
      )}
    </div>
  );
}

export default CustomModal;
