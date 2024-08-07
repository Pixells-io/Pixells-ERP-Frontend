import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { personRemove } from "ionicons/icons";
import { Crown } from "lucide-react";

import ModalConfirmation from "./ModalConfirmation";
import ModalAddParticipant from "./ModalAddParticipant";
import { Form } from "react-router-dom";
import ModalDeleteChat from "./ModalDeleteChat";

function MediaInformations({ data, users }) {
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [userId, setUserId] = useState(null);

  const date = new Date(data?.created);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses empiezan desde 0
  const year = date.getFullYear();

  let options = [];
  users?.data.map((user, i) => {
    let newObj = {
      value: user.id,
      label: user.name + " " + user.last_name + " " + user.second_last_name,
    };
    options.push(newObj);
  });

  options = options.filter(
    (user) =>
      !data.participants_array.some((part) => part.user_id == user.value),
  );

  return (
    <div className="flex flex-col gap-3">
      <ModalConfirmation
        title={"Confirmación"}
        description={"Borrar usuario de la conversación"}
        modal={modalConfirmation}
        setModal={setModalConfirmation}
        user_id={userId}
        chat_id={data.id}
      />

      <div className="flex w-full items-center justify-between">
        <h1 className="py-2">Participantes</h1>
        {data.is_admin == 1 && (
          <ModalAddParticipant chat_id={data.id} users={options} />
        )}
      </div>
      {data.participants_array.map((participant, index) => (
        <div
          key={"participants" + index}
          className="flex flex-col gap-2 rounded-t-xl px-6 py-1"
        >
          <div className="flex items-center justify-between hover:rounded-lg hover:bg-grisBg">
            <div className="flex items-center gap-4 py-2 pl-4">
              <Avatar>
                <AvatarImage src={participant.img} className="size-10" />
                <AvatarFallback>
                  {participant.name} {participant.last_name}
                </AvatarFallback>
              </Avatar>
              {/* <img src={participant.img} className="h-10 w-10 rounded-full" /> */}
              <div>
                <span className="text-xs font-semibold text-grisText">
                  {participant.name} {participant.last_name}{" "}
                  {participant.second_last_name}
                </span>
              </div>
              {participant.admin == 1 && (
                <Crown className="size-4 text-[#FFC34E]" />
              )}
            </div>
            {data.is_admin == 1 && (
              <div>
                <IonIcon
                  icon={personRemove}
                  className="size-5 pr-4 text-grisText hover:cursor-pointer hover:text-red-500"
                  onClick={() => {
                    setUserId(participant.id);
                    setModalConfirmation(true);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      ))}
      <p className="pt-4 text-xs font-semibold text-grisText">
        Creado {year}/{month}/{day}
      </p>
      {data.is_admin == 1 && (
        <div className="flex w-full justify-end">
          <ModalDeleteChat chat_id={data.id} />
        </div>
      )}
    </div>
  );
}

export default MediaInformations;
