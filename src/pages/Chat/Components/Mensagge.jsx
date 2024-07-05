import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  checkmarkDoneOutline,
  ellipsisVerticalOutline,
  sendSharp,
} from "ionicons/icons";
import VisibilitySensor from "react-visibility-sensor";
import Cookies from "js-cookie";
import { json } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import ResendModal from "./ResendModal";
import ReplyModal from "./ReplyModal";

function MenssageCard({ data, user }) {
  let msg = data;
  const [modalResend, setModalResend] = useState(false);
  const [modalReply, setModalReply] = useState(false);

  return (
    <>
      <ResendModal
        msg_id={msg.id}
        modal={modalResend}
        setModal={setModalResend}
      />
      <ReplyModal modal={modalReply} setModal={setModalReply} />
      {msg.user == user ? (
        <div className="flex w-full justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <IonIcon
                icon={ellipsisVerticalOutline}
                className="mr-1 mt-2 text-base text-[#8F8F8F]"
              ></IonIcon>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-2xl border-2 border-[#E8E8E8] bg-[#fff]">
              <DropdownMenuItem
                className="rounded-t-xl px-4 py-2 text-center font-roboto text-sm text-grisHeading hover:bg-[#E7E7E7]"
                onClick={() => setModalReply(true)}
              >
                Reply
              </DropdownMenuItem>
              <DropdownMenuItem
                className="rounded-b-xl px-4 py-2 text-center font-roboto text-sm text-grisHeading hover:bg-[#E7E7E7]"
                onClick={() => setModalResend(true)}
              >
                Resend
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="mb-1 w-fit max-w-[65%] rounded-s-xl rounded-t-xl bg-[#E4F0FF] px-2 py-1">
            <span className="w-fit text-wrap break-words font-roboto text-sm font-normal text-[#44444F]">
              {msg.mensaje}
            </span>
            <div className="mt-[-8px] flex justify-end">
              <div>
                <span className="font-roboto text-[10px] font-normal text-[#8F8F8F]">
                  {msg.date}
                </span>
              </div>
              <div className="ml-1 mt-[3px]">
                {/* THE MESSAGE IS READ */}
                {msg.read === "1" && (
                  <IonIcon
                    icon={checkmarkDoneOutline}
                    size="small"
                    className="text-[#5B89FF]"
                  ></IonIcon>
                )}
                {/* THE MESSAGE IS NOT READ */}
                {msg.read !== "1" && (
                  <IonIcon
                    icon={checkmarkDoneOutline}
                    size="small"
                    className="text-[#8F8F8F]"
                  ></IonIcon>
                )}
              </div>
            </div>
          </div>
          <div className="relative w-12 px-2 align-bottom">
            {msg.corte === 1 ? (
              <img
                src={msg.img}
                className="absolute bottom-2 h-8 w-8 rounded-full"
              />
            ) : null}
          </div>
        </div>
      ) : (
        <VisibilitySensor
          onChange={(isVisible) => {
            ShowAction(msg);
          }}
        >
          <div className="flex w-full justify-start">
            <div className="relative w-12 px-2 align-bottom">
              {msg.corte === 1 ? (
                <img
                  src={msg.img}
                  className="absolute bottom-2 h-8 w-8 rounded-full"
                />
              ) : null}
            </div>
            <div className="mb-1 w-fit max-w-[65%] rounded-r-xl rounded-t-xl bg-[#F0F0F0] px-2 py-1">
              <span className="w-fit text-wrap break-words font-roboto text-sm font-normal text-[#44444F]">
                {msg.mensaje}
              </span>
              <div className="mt-[-8px] flex justify-end">
                <div>
                  <span className="font-roboto text-[10px] font-normal text-[#8F8F8F]">
                    {msg.date}
                  </span>
                </div>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <IonIcon
                  icon={ellipsisVerticalOutline}
                  className="mr-1 mt-2 text-base text-[#8F8F8F]"
                ></IonIcon>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-2xl border-2 border-[#E8E8E8] bg-[#fff]">
                <DropdownMenuItem
                  className="rounded-t-xl px-4 py-2 text-center font-roboto text-sm text-grisHeading hover:bg-[#E7E7E7]"
                  onClick={() => setModalReply(true)}
                >
                  Reply
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="rounded-b-xl px-4 py-2 text-center font-roboto text-sm text-grisHeading hover:bg-[#E7E7E7]"
                  onClick={() => setModalResend(true)}
                >
                  Resend
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </VisibilitySensor>
      )}
    </>
  );
}

export default MenssageCard;

export async function ShowAction(mensaje) {
  const info = {
    msj_id: mensaje.id,
  };

  if (mensaje.read == "0") {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}chat/read-message`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
  }
  return 1;
}
