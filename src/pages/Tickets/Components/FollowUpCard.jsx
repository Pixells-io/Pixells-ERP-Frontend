import React, { useState, useEffect } from "react";
import {
  addCircleSharp,
  callSharp,
  chatbubbleSharp,
  checkmarkSharp,
  helpSharp,
  mailSharp,
  personSharp,
  time,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import FormCreateFollowUpComments from "./FormCreateFollowUpComments";
import FollowUpCommentCard from "./FollowUpCommentCard";

function FollowUpCard({ followUp, ticket }) {
  const [iconDynamic, setIconDynamic] = useState(helpSharp);
  const [modal, setModal] = useState(false);
  const [idModal, setIdModal] = useState(false);

  switch (followUp.category) {
    case 1:
      setIconDynamic(personSharp);
      break;
    case 2:
      setIconDynamic(callSharp);
      break;
    case 3:
      setIconDynamic(chatbubbleSharp);
      break;
    case 4:
      setIconDynamic(mailSharp);
      break;
    case 5:
      setIconDynamic(checkmarkSharp);
      break;
  }

  function openModalComment(value) {
    setModal(true);
    setIdModal(value);
    console.log(value);
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
          <FollowUpCommentCard comment={data} />
        ))}
      </div>
      <div className="flex">
        <div className="w-1/6 p-8 ">
          <div className="text-primario border border-primario w-12 rounded-full h-12 text-center pt-2">
            <IonIcon icon={iconDynamic} size="large"></IonIcon>
          </div>
        </div>
        <div className="my-6 shrink-0 flex flex-col w-[510px] h-[112px] bg-gris shadow-sm drop-shadow-sm rounded-lg">
          {/* card header */}
          <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
            <div className="flex items-center p-1 gap-2">
              <img src={followUp.user_img} className="w-8 rounded-full" />

              <p className="text-gris2 font-medium text-[15px]">
                {followUp.creator}
              </p>
              <span className="font-roboto font-medium text-xs text-grisSubText">
                {followUp.mensagge}
              </span>
            </div>
            <div className="flex items-center p-1 text-grisSubText gap-2">
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
            <div className="mt-4 ml-4">
              <p className="text-grisSubText text-xs font-normal">
                {followUp.comment}
              </p>
              <button
                type="button"
                onClick={() => openModalComment(followUp.id)}
                className="text-primario text-2xl mt-2"
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
