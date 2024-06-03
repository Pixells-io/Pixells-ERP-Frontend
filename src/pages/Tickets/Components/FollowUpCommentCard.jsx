import React from "react";
import { chatbubbleSharp, time } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function FollowUpCommentCard({ comment }) {
  return (
    <div className="w-full flex">
      <div className="w-1/6 p-8 ">
        <div className="text-primario border border-primario w-12 rounded-full h-12 text-center pt-2">
          <IonIcon icon={chatbubbleSharp} size="large"></IonIcon>
        </div>
      </div>
      <div className="my-6 shrink-0 flex flex-col w-[460px] bg-gris shadow-sm drop-shadow-sm rounded-lg ml-12">
        {/* card header */}
        <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
          <div className="flex items-center p-1 gap-2">
            <span className="font-roboto font-medium text-xs text-grisSubText ml-2">
              A comment was created
            </span>
          </div>
          <div className="flex items-center p-1 text-grisSubText gap-2">
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
          <div className="mt-4 ml-4">
            <p className="text-grisSubText text-xs font-normal pb-2">
              {comment.comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUpCommentCard;
