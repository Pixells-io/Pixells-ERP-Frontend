import React from "react";

import { star, starOutline, syncCircle, time } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import "react-circular-progressbar/dist/styles.css";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function CardFollowUp({ info }) {
  return (
    <div className="flex w-full border-b-[1px] border-[#D7D7D7] py-4">
      <div className="w-1/12 font-roboto text-xs text-[#8F8F8F]">
        <Avatar className="size-11">
          <AvatarImage src={info.creator?.img} title={info.creator?.name} />
        </Avatar>
      </div>
      <div className="line-clamp-1 w-9/12 rounded-xl bg-white">
        <span className="font-poppins text-sm font-semibold text-grisHeading">
          {info.stage}
        </span>
        <br />
        {info.type == 1 ? (
          <div className="flex gap-2">
            <span className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading">
              Se dimensiono el Lead
            </span>
            &nbsp;
            {[1, 2, 3, 4, 5].map((value) => (
              <div
                key={value}
                className="cursor-pointer"
                onClick={() => handleClick(value)}
              >
                <input type="hidden" name="size" value={info.size} />
                {info.size >= value ? (
                  <IonIcon
                    icon={star}
                    className="text-xl text-grisHeading"
                  ></IonIcon>
                ) : (
                  <IonIcon
                    icon={starOutline}
                    className="text-xl text-grisHeading"
                  ></IonIcon>
                )}
              </div>
            ))}
          </div>
        ) : info.type == 2 ? (
          <span className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading">
            Se envio un correo
          </span>
        ) : info.type == 3 ? (
          <div className="flex">
            <span className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading">
              Se programo un correo para
            </span>
            &nbsp;
            <span className="line-clamp-1 font-roboto text-sm font-normal text-primario">
              {info.date} &nbsp; {info.hour}
            </span>
          </div>
        ) : info.type == 4 ? (
          <div className="flex">
            <span className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading">
              Se programo un mensaje para
            </span>
            &nbsp;
            <span className="line-clamp-1 font-roboto text-sm font-normal text-primario">
              {info.date} &nbsp; {info.hour}
            </span>
          </div>
        ) : info.type == 5 ? (
          <div className="flex">
            <span className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading">
              Se agendo una actividad -
            </span>
            &nbsp;
            <span className="line-clamp-1 font-roboto text-sm font-normal text-primario">
              {info.select}
            </span>
          </div>
        ) : info.type == 6 ? (
          <span className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading">
            Se creo una cotizacion
          </span>
        ) : info.type == 7 ? (
          <span className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading">
            Se asocio un producto o servicio
          </span>
        ) : info.type == 8 ? (
          <div className="flex">
            <span className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading">
              Se programo un recordatorio para mover al Lead para
            </span>
            &nbsp;
            <span className="line-clamp-1 font-roboto text-sm font-normal text-primario">
              {info.date} &nbsp; {info.hour}
            </span>
          </div>
        ) : (
          false
        )}
      </div>
      <div className="w-2/12 font-roboto text-xs text-[#8F8F8F]">
        {info.date != false ? (
          <span>{info.date}</span>
        ) : (
          <span>{info.created}</span>
        )}
        <br />
        <span> {info.hour} </span>
      </div>
    </div>
  );
}

export default CardFollowUp;
