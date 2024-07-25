import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ShowMedia from "./ShowMedia";

function MediaImages({ images }) {
  const [openShowMedia, setOpenShowMedia] = useState(false);
  const [document, setDocument] = useState({});

  const openModalShowMedia = (doc) => {
    setDocument(doc);
    setOpenShowMedia(true);
  };

  return (
    <div>
      <ShowMedia
        modal={openShowMedia}
        setModal={setOpenShowMedia}
        documentImage={document}
      />

      <div className="flex min-w-[200px] flex-row flex-wrap gap-2">
        {images.map((img, index) => (
          <div
            key={"img" + index}
            className="h-[180px] w-[180px] rounded-xl border-[2px] border-[#D9D9D9] p-1 hover:cursor-pointer"
            onClick={() => openModalShowMedia(img)}
          >
            <img
              loading="lazy"
              src={img.document}
              alt=""
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaImages;
