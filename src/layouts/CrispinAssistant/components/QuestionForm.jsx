import React, { useState } from "react";

import { IonIcon } from "@ionic/react";
import { send } from "ionicons/icons";

import { SendQuestion } from "../utils";

function QuestionForm({ setChat, setIsLoading, setIsError }) {
  const [mssg, setMssg] = useState("");

  async function onInputEnter(e) {
    try {
      if (e.code == "Enter") {
        setIsError(false);
        setChat((prev) => [{ type: "1", message: mssg }, ...prev]);
        setIsLoading(true);
        setMssg("");
        const res = await SendQuestion(mssg);
        console.log(res);
        setChat((prev) => [{ type: "0", message: res.responses }, ...prev]);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setMssg("");
      setIsError(true);
    }
  }

  function cleanInput() {
    SendQuestion(mssg);
    setMssg("");
  }

  return (
    <div className="flex w-full">
      <input
        name="message"
        className="w-full rounded-3xl px-4 py-2 font-roboto font-light text-grisText drop-shadow-[0px_0px_6px_rgba(0,0,0,0.20)] focus:ring-0 focus-visible:ring-primarioBotones"
        placeholder="Escribe tu pregunta..."
        value={mssg}
        onChange={(e) => setMssg(e.target.value)}
        // ref={inputFocusRef}
        onKeyDown={onInputEnter}
      />
      {mssg != "" ? (
        <button
          type="submit"
          onClick={() => cleanInput()}
          className="flex items-center"
        >
          <IonIcon
            icon={send}
            className="pl-4 pr-2 text-2xl text-[#BDBDBD] hover:text-primario"
          ></IonIcon>
        </button>
      ) : null}
    </div>
  );
}

export default QuestionForm;
