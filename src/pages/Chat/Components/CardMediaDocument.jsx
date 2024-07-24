import React, { useState } from "react";
import ShowDocuments from "./ShowDocuments";

function CardMediaDocuments({ document }) {
  const [extension, setExtension] = useState(
    document.document.split(".").pop(),
  );
  const [name, setName] = useState(document.document.split("/").pop());

  const [openShowMedia, setOpenShowMedia] = useState(false);

  const openModalShowMedia = () => {
    setOpenShowMedia(true);
  };

  return (
    <>
      <ShowDocuments
        modal={openShowMedia}
        setModal={setOpenShowMedia}
        doc={document}
      />
      <div
        className="h-[180px] w-[180px] rounded-xl border-[2px] border-[#D9D9D9] bg-grisBg p-1 hover:cursor-pointer hover:opacity-50"
        onClick={() => openModalShowMedia()}
      >
        <div className="h-4/6 w-full rounded-t-xl bg-white"></div>
        <div className="w-fill flex h-2/6 p-2">
          <div className="w-1/5 text-xs font-normal uppercase text-grisText">
            {extension}
          </div>
          <div className="w-4/5 break-words text-xs font-normal text-[#44444F]">
            {name}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardMediaDocuments;
