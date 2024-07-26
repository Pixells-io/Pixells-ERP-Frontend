import React, { useState } from "react";
import ModalImages from "./modal-images";

function ImagesShow({ image }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <ModalImages modal={modal} setModal={setModal} image={image} />

      <div className="flex gap-2">
        <div
          className="h-[120px] w-[120px] rounded-xl border-[2px] border-[#D9D9D9] p-1 hover:cursor-pointer"
          onClick={() => setModal(true)}
        >
          {image.includes("pdf") == true ? (
            // <iframe
            //   src={image}
            //   frameBorder="0"
            //   className="flex h-full w-full items-center justify-center object-contain"
            // ></iframe>
            <p className="flex h-full items-center justify-center font-poppins font-semibold text-grisHeading">
              PDF
            </p>
          ) : (
            <img
              loading="lazy"
              src={image}
              alt=""
              className="h-full w-full rounded-xl object-cover"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ImagesShow;
