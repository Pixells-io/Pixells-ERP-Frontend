import React, { useState, useEffect } from "react";
import {
  addCircleSharp,
  callSharp,
  chatbubbleSharp,
  checkmarkSharp,
  imagesSharp,
  mailSharp,
  personSharp,
  time,
} from "ionicons/icons";

import { IonIcon } from "@ionic/react";
import FormCreateFollowUpComments from "./FormCreateFollowUpComments";
import FollowUpCommentCard from "./FollowUpCommentCard";

function FollowUpCard({ followUp, ticket, status }) {
  const [modal, setModal] = useState(false);
  const [idModal, setIdModal] = useState(false);

  function openModalComment(value) {
    setModal(true);
    setIdModal(value);
  }

  return (
    <div className="w-full overflow-scroll">
      <FormCreateFollowUpComments
        modal={modal}
        setModal={setModal}
        followUpId={idModal}
        ticket={ticket}
      />
      <div>
        {followUp?.comments.map((data, i) => (
          <FollowUpCommentCard comment={data} key={i} />
        ))}
      </div>
      <div className="flex">
        <div className="w-1/6 p-8">
          <div className="h-12 w-12 rounded-full border border-primario pt-2 text-center text-primario">
            {followUp?.category == 1 && (
              <IonIcon icon={personSharp} size="large" />
            )}
            {followUp?.category == 2 && (
              <IonIcon icon={callSharp} size="large" />
            )}
            {followUp?.category == 3 && (
              <IonIcon icon={chatbubbleSharp} size="large" />
            )}
            {followUp?.category == 4 && (
              <IonIcon icon={mailSharp} size="large" />
            )}
            {followUp?.category == 5 && (
              <IonIcon icon={checkmarkSharp} size="large" />
            )}
            {followUp?.category == 9 && (
              <IonIcon icon={imagesSharp} size="large" />
            )}
          </div>
        </div>
        <div className="my-6 flex w-[510px] shrink-0 flex-col rounded-lg bg-gris pb-4 shadow-sm drop-shadow-sm">
          {/* card header */}
          <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
            <div className="flex items-center gap-2 p-1">
              <img src={followUp.user_img} className="h-8 w-8 rounded-full" />

              <p className="text-[15px] font-medium text-gris2">
                {followUp.creator}
              </p>
              {followUp.mensagge != "0" ? (
                <span className="font-roboto text-xs font-medium text-grisSubText">
                  {followUp.mensagge}
                </span>
              ) : (
                <span className="font-roboto text-xs font-medium text-grisSubText">
                  Upload a Document
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 p-1 text-grisSubText">
              <div className="flex items-center gap-1">
                <IonIcon icon={time}></IonIcon>
                <span className="text-[10px]">{followUp.date}</span>
              </div>
              <div className="text-2xl">&bull;</div>
              <span className="text-[10px]">{followUp.hour}</span>
            </div>
          </div>
          {/* card content */}
          <div className="justify-between">
            <div className="ml-4 mt-4">
              {followUp.mensagge != "0" ? (
                <p className="text-xs font-normal text-grisSubText">
                  {followUp.comment}
                </p>
              ) : (
                <iframe src={followUp.comment} frameborder="0"></iframe>
              )}
              <button
                type="button"
                onClick={() => openModalComment(followUp.id)}
                className="mt-2 text-2xl text-primario"
              >
                <IonIcon icon={addCircleSharp}></IonIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUpCard;
