import React, { useEffect, useState } from "react";
import EnabledPos from "./EnabledPos";
import DisabledPos from "./DisabledPos";

//bd prueba localstorage
const getIsDisabledBD = () => {
  let isDisabledBd = JSON.parse(localStorage.getItem("isDisabled"));
  if (!isDisabledBd) {
    isDisabledBd = false;
  }
  return isDisabledBd;
};

const setIsDisabledBD = (value) => {
  localStorage.setItem("isDisabled", JSON.stringify(value));
};
//-----------------------------------------------------

const SideLayoutPos = () => {
  const [isDisabled, setIsDisabled] = useState(getIsDisabledBD());
  const [isGrid, setIsGrid] = useState(false);
  const timeOut = 200000;
  let timer;

  useEffect(() => {
    const resetTimer = () => {
      if (isDisabled) return;

      clearTimeout(timer);
      timer = setTimeout(() => setIsDisabled(true), timeOut);
    };

    // Escuchar eventos de usuario
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);

    timer = setTimeout(() => setIsDisabled(true), timeOut);

    // Limpieza al desmontar el componente
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, [isDisabled]);

  useEffect(() => {
    setIsDisabledBD(isDisabled);
  }, [isDisabled]);
  return (
    <>
      {isDisabled ? (
        <DisabledPos setIsDisabled={setIsDisabled} />
      ) : (
        <EnabledPos setIsDisabled={setIsDisabled} setIsGrid={setIsGrid} isGrid={isGrid} />
      )}
    </>
  );
};

export default SideLayoutPos;
