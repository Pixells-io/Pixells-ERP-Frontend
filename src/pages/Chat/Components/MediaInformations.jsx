import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { personRemove, personRemoveOutline, trash } from "ionicons/icons";

import ModalConfirmation from "./ModalConfirmation";

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Crown,
} from "lucide-react";

function MediaInformations({ data }) {
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [userId, setUserId] = useState(null);

  const date = new Date(data?.created);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses empiezan desde 0
  const year = date.getFullYear();

  const openModalDelete = (id) => {
    setUserId(id);
    setModalConfirmation(true);
  };

  const deleteUser = () => {
    setModalConfirmation(false);
  };

  return (
    <div>
      <ModalConfirmation
        title={"Confirmación"}
        description={
          "Una ves realizada esta acción, el documento no podrá modificarse"
        }
        modal={modalConfirmation}
        setModal={setModalConfirmation}
        modalFunction={deleteUser}
      />

      <h1>Participantes</h1>
      {data.participants_array.map((participant, index) => (
        <div
          key={"participants" + index}
          className="flex flex-col gap-2 rounded-t-xl px-6 py-4"
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

            <div>
              <IonIcon
                icon={personRemove}
                className="size-5 pr-4 text-grisText hover:cursor-pointer hover:text-red-500"
                onClick={() => openModalDelete(participant.id)}
              />
            </div>
          </div>
        </div>
      ))}
      <p className="text-xs font-semibold text-grisText">
        Creado {year}/{month}/{day}
      </p>
    </div>
  );
}

export default MediaInformations;
