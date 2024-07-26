import React from "react";

import { IonIcon } from "@ionic/react";
import { closeCircle } from "ionicons/icons";

function ModalImages({ modal, setModal, image }) {
  if (!modal) return null;
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      setModal(false);
    }
  };

  return (
    <div
      className="overlay fixed inset-0 z-50 flex flex-col justify-between bg-[#F2F2F2] bg-opacity-90"
      onClick={handleOverlayClick}
    >
      <div className="overlay flex h-1/5 items-center justify-end px-10">
        <div className="flex gap-x-4">
          <button
            type="button"
            className="rounded-3xl border-[1px] border-[#44444F] bg-inherit px-5 py-1 text-xs font-light text-[#44444F]"
          >
            Descargar
          </button>
          <button
            type="button"
            className="flex items-center"
            onClick={() => setModal(false)}
          >
            <IonIcon
              src={closeCircle}
              className="size-6 cursor-pointer text-grisSubText"
            />
          </button>
        </div>
      </div>
      <div className="overlay flex h-3/5 w-full justify-center overflow-hidden">
        <div className="max-h-md overlay flex w-full justify-center">
          {image?.includes("pdf") == true ? (
            <iframe
              className="h-auto w-4/5"
              src={image}
              frameBorder="0"
            ></iframe>
          ) : (
            <img src={image} alt="" className="h-auto w-auto bg-white" />
          )}
        </div>
      </div>
      <div className="overlay flex h-1/5 justify-start gap-2 px-10">
        <div className="flex items-center gap-4">
          {/* <img src={image} className="h-14 w-14 rounded-full" /> */}
          <div>
            <span className="text-xs font-semibold text-grisText">
              {/* {image?.name} {image?.last_name} {image?.second_last_name} */}
            </span>
            {/* <p className="text-xs font-light text-grisText">
              {year}/{month}/{day} {hours}:{minutes}:{seconds}{" "}
              {hours > 12 ? "p.m." : "a.m."}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalImages;
