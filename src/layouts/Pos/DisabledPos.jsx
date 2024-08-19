import React, { useState } from "react";

const passwordBd = "1234";
const DisabledPos = ({ setIsDisabled }) => {
  const [password, setPassword] = useState("");

  const deletePaswword = () => {
    if (!!password) {
      let passwordAux = password.slice(0, -1);
      setPassword(passwordAux);
    }
  };

  const submit = () => {
    if (passwordBd == password) {
      setIsDisabled(false);
    } else {
      setPassword("");
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-[421px] w-[281px] flex-col rounded-xl border border-[#D7D7D7] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.2)]">
        <div className="col-span-12 flex items-center justify-center rounded-t-[11px] border-b border-[#D7D7D7] shadow-[inset_0px_0px_3px_1px_rgba(0,0,0,0.2)] shadow-inner">
          <p className="min-h-[32px] py-2 text-xs font-light text-grisText">
            {password.length > 0 ? "*".repeat(password.length) : "Agregar"}
          </p>
        </div>
        <div className="flex-1">
          <div className="grid h-full w-full grid-cols-12 grid-rows-4">
            <div className="col-span-4 border-b border-[#D7D7D7]">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => setPassword(password + "1")}
              >
                1
              </button>
            </div>
            <div className="col-span-4 border-b border-l border-r border-[#D7D7D7]">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => setPassword(password + "2")}
              >
                2
              </button>
            </div>
            <div className="col-span-4 border-b border-[#D7D7D7]">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => setPassword(password + "3")}
              >
                3
              </button>
            </div>
            <div className="col-span-4 border-b border-[#D7D7D7]">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => setPassword(password + "4")}
              >
                4
              </button>
            </div>
            <div className="col-span-4 border-b border-l border-r border-[#D7D7D7]">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => setPassword(password + "5")}
              >
                5
              </button>
            </div>
            <div className="col-span-4 border-b border-[#D7D7D7]">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => setPassword(password + "6")}
              >
                6
              </button>
            </div>
            <div className="col-span-4 border-b border-[#D7D7D7]">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => setPassword(password + "7")}
              >
                7
              </button>
            </div>
            <div className="col-span-4 border-b border-l border-r border-[#D7D7D7]">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => setPassword(password + "8")}
              >
                8
              </button>
            </div>
            <div className="col-span-4 border-b border-[#D7D7D7]">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => setPassword(password + "9")}
              >
                9
              </button>
            </div>
            <div className="col-span-4">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => setPassword(password + "0")}
              >
                0
              </button>
            </div>
            <div className="col-span-4 border-l border-r border-[#D7D7D7]">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => deletePaswword()}
              >
                Borrar
              </button>
            </div>
            <div className="col-span-4">
              <button
                type="button"
                className="h-full w-full text-sm font-medium text-grisText hover:bg-[#F9F9F9]"
                onClick={() => setPassword("")}
              >
                Borrar todo
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-center rounded-b-lg border-t border-[#D7D7D7] bg-grisDisabled">
          <button
            type="button"
            className="h-full w-full py-2 text-sm font-medium text-grisText"
            onClick={() => submit()}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisabledPos;
