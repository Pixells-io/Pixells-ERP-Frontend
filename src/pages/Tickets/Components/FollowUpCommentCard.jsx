import React from "react";
import { chatbubbleSharp, time } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function FollowUpCommentCard({ comment }) {
  return (
    <div className="flex w-full">
      <div className="w-1/6 p-8">
        <div className="h-12 w-12 rounded-full border border-primario pt-2 text-center text-primario">
          <IonIcon icon={chatbubbleSharp} size="large"></IonIcon>
        </div>
      </div>
      <div className="my-6 ml-12 flex w-[460px] shrink-0 flex-col rounded-lg bg-gris shadow-sm drop-shadow-sm">
        {/* card header */}
        <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
          <div className="flex items-center gap-2 p-1">
            <span className="ml-2 font-roboto text-xs font-medium text-grisSubText">
              A comment has been added
            </span>
          </div>
          <div className="flex items-center gap-2 p-1 text-grisSubText">
            <div className="flex items-center gap-1">
              <IonIcon icon={time}></IonIcon>
              <span className="text-[10px]">{comment.date}</span>
            </div>
            <div className="text-2xl">&bull;</div>
            <span className="text-[10px]">{comment.hour}</span>
          </div>
        </div>
        {/* card content */}
        <div className="justify-between">
          <div className="ml-4 mt-4">
            <p className="pb-2 text-xs font-normal text-grisSubText">
              {comment.comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUpCommentCard;
