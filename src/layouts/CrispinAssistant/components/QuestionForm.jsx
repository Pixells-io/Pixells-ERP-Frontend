import React, { useRef, useState } from "react";

import { IonIcon } from "@ionic/react";
import { send } from "ionicons/icons";

import { SendQuestion } from "../utils";

function QuestionForm() {
  const [mssg, setMssg] = useState("");
  const inputFocusRef = useRef(null);

  function onInputEnter(e) {
    if (e.code == "Enter") {
      SendQuestion(mssg);
      setMssg("");
    }
  }

  function cleanInput() {
    SendQuestion(mssg);
    setMssg("");
  }

  return (
    <div className="flex w-full">
      <div className="w-11/12 px-5">
        <input
          name="message"
          className="w-full rounded-3xl px-4 py-2 font-roboto font-light text-grisText drop-shadow-[0px_0px_6px_rgba(0,0,0,0.20)] focus:ring-0 focus-visible:ring-primarioBotones"
          placeholder="Escribe tu pregunta..."
          value={mssg}
          onChange={(e) => setMssg(e.target.value)}
          ref={inputFocusRef}
          onKeyDown={onInputEnter}
        />
      </div>
      <div className="m-auto mt-2 flex md:w-1/12">
        {mssg != "" ? (
          <button
            type="submit"
            onClick={() => cleanInput()}
            className="align-middle"
          >
            <IonIcon
              icon={send}
              className="px-2 text-2xl text-[#BDBDBD] hover:text-primario"
            ></IonIcon>
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default QuestionForm;
