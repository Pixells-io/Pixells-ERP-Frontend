import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ShowMedia from "./ShowMedia";

function MediaImages({ chat, images }) {
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
        document={document}
        user={chat.data?.participants}
      />

      <div className="flex flex-row min-w-[200px] flex-wrap gap-2">
        {[...Array(20)].map((img, index) => (
          <>
            <div
              className="h-[180px] w-[180px] rounded-xl border-[2px] border-[#D9D9D9] p-1 hover:cursor-pointer"
              onClick={() =>
                openModalShowMedia({
                  id: 1,
                  name: "hola",
                  url: "https://demoback.pixells.io/storage/Bm7X6Clpfe7grivqQ9UJKXuqg7slntI2qmbUUCsW.png",
                  createdAt: "Hoy 12:25 p.m.",
                })
              }
            >
              <img
                loading="lazy"
                src="https://demoback.pixells.io/storage/Bm7X6Clpfe7grivqQ9UJKXuqg7slntI2qmbUUCsW.png"
                alt=""
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="h-[180px] w-[180px] rounded-xl border-[2px] border-[#D9D9D9] p-1 hover:cursor-pointer">
              <img
                loading="lazy"
                src="https://demoback.pixells.io/storage/NZ6USZPvUSnfU7Z4K06YVbzNLAT7NqulcPdDBn9a.png"
                alt=""
                className="h-full w-full rounded-xl object-cover"
                onClick={() =>
                  openModalShowMedia({
                    id: 2,
                    name: "hola2",
                    url: "https://demoback.pixells.io/storage/NZ6USZPvUSnfU7Z4K06YVbzNLAT7NqulcPdDBn9a.png",
                    createdAt: "Ayer 16:25 p.m.",
                  })
                }
              />
            </div>
            <div className="h-[180px] w-[180px] rounded-xl border-[2px] border-[#D9D9D9] p-1 hover:cursor-pointer">
              <img
                loading="lazy"
                src="https://demoback.pixells.io/storage/d2RgQz3mBaIh2mTaQD7dka8WQAJKVBkwm8J5rIsP.png"
                alt=""
                className="h-full w-full rounded-xl object-cover"
                onClick={() =>
                  openModalShowMedia({
                    id: 3,
                    name: "hola3",
                    url: "https://demoback.pixells.io/storage/d2RgQz3mBaIh2mTaQD7dka8WQAJKVBkwm8J5rIsP.png",
                    createdAt: "Hoy 08:25 a.m.",
                  })
                }
              />
            </div>
            <div className="h-[180px] w-[180px] rounded-xl border-[2px] border-[#D9D9D9] p-1 hover:cursor-pointer">
              <img
                loading="lazy"
                src="https://demoback.pixells.io/storage/b7LEJJS0y7wAscMgB4sYJKe9OQcRHEdiEwNuyrFM.jpg"
                alt=""
                className="h-full w-full rounded-xl object-cover"
                onClick={() =>
                  openModalShowMedia({
                    id: 4,
                    name: "hola34",
                    url: "https://demoback.pixells.io/storage/b7LEJJS0y7wAscMgB4sYJKe9OQcRHEdiEwNuyrFM.jpg",
                    createdAt: "Ayer 08:25 a.m.",
                  })
                }
              />
            </div>
            <div className="h-[180px] w-[180px] rounded-xl border-[2px] border-[#D9D9D9] p-1 hover:cursor-pointer">
              <img
                loading="lazy"
                src="https://demoback.pixells.io/storage/N2HBLfYffsFYLa21Kx7Vowmjwx8BSB4VufpBKFgg.jpg"
                alt=""
                className="h-full w-full rounded-xl object-cover"
                onClick={() =>
                  openModalShowMedia({
                    id: 5,
                    name: "hola5",
                    url: "https://demoback.pixells.io/storage/N2HBLfYffsFYLa21Kx7Vowmjwx8BSB4VufpBKFgg.jpg",
                    createdAt: "Ayer 08:25 a.m.",
                  })
                }
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default MediaImages;
