import React from "react";
import { IonIcon } from "@ionic/react";
import { checkmarkDoneOutline } from "ionicons/icons";
import VisibilitySensor from "react-visibility-sensor";
import Cookies from "js-cookie";
import { json } from "react-router-dom";

function MenssageCard({ data, user }) {
  let msg = data;

  return (
    <>
      {msg.user == user ? (
        <div className="flex w-full justify-end">
          <div className="mb-1 w-fit overflow-hidden text-ellipsis rounded-s-xl rounded-t-xl bg-[#E4F0FF] px-2 py-1">
            <div className="overflow-hidden text-ellipsis">
              <span
                className="font-roboto text-sm font-normal text-[#44444F]"
                title={msg.mesaje}
              >
                {msg.mensaje}
              </span>
            </div>
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
        </div>
      ) : (
        <VisibilitySensor
          onChange={(isVisible) => {
            ShowAction(msg);
          }}
        >
          <div className="flex w-full justify-start">
            <div className="... mb-1 w-fit overflow-hidden text-clip rounded-r-xl rounded-t-xl bg-[#F0F0F0] px-2 py-1">
              <div>
                <span className="font-roboto text-sm font-normal text-[#44444F]">
                  {msg.mensaje}
                </span>
              </div>
              <div className="mt-[-8px] flex justify-end">
                <div>
                  <span className="font-roboto text-[10px] font-normal text-[#8F8F8F]">
                    {msg.date}
                  </span>
                </div>
              </div>
            </div>
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
