import React from "react";
import { IonIcon } from "@ionic/react";
import {
  notifications as notificationIcon,
  chatbubble,
  chevronForward,
  calendar as calendarIcon,
} from "ionicons/icons";
import { Link } from "react-router-dom";

function GeneralMetrics({ notifications, calendar, chats }) {
  return (
    <div className="h-full w-full rounded-xl bg-blancoBox p-2 shadow-lg md:w-[338px]">
      <div className="flex pb-3 pl-3 pt-2">
        <span className="font-roboto text-sm font-medium text-grisText">
          General Metrics
        </span>
      </div>
      <div className="rounded-md bg-[#F0F0F0] p-2">
        <Link
          to={"/my-profile/notifications"}
          className="flex justify-between border-b border-[#D7D7D7] pb-3 pt-3 hover:bg-blancoBox"
        >
          <div className="flex w-2/6">
            <div className="mr-2 w-2/4 text-end">
              <IonIcon
                icon={notificationIcon}
                className="pt-1 text-xl text-grisText"
              ></IonIcon>
            </div>
            <div className="w-2/4">
              <span className="font-roboto text-xs font-medium text-grisText">
                {notifications}
              </span>
            </div>
          </div>
          <div className="text-sta w-2/6">
            <span className="font-roboto text-xs font-light text-grisText">
              Notifications
            </span>
          </div>
          <div className="mr-6 w-2/6 text-end">
            <IonIcon
              icon={chevronForward}
              className="text-2xl text-grisText"
            ></IonIcon>
          </div>
        </Link>
        <Link
          to={"/calendar"}
          className="flex justify-between border-b border-[#D7D7D7] pb-3 pt-3 hover:bg-blancoBox"
        >
          <div className="flex w-2/6">
            <div className="mr-2 w-2/4 text-end">
              <IonIcon
                icon={calendarIcon}
                className="pt-1 text-xl text-grisText"
              ></IonIcon>
            </div>
            <div className="w-2/4">
              <span className="font-roboto text-xs font-medium text-grisText">
                {calendar}
              </span>
            </div>
          </div>
          <div className="text-sta w-2/6">
            <span className="font-roboto text-xs font-light text-grisText">
              Calendar
            </span>
          </div>
          <div className="mr-6 w-2/6 text-end">
            <IonIcon
              icon={chevronForward}
              className="text-2xl text-grisText"
            ></IonIcon>
          </div>
        </Link>
        <Link
          to={"/chat"}
          className="flex justify-between border-b border-[#D7D7D7] pb-3 pt-3 hover:bg-blancoBox"
        >
          <div className="flex w-2/6">
            <div className="mr-2 w-2/4 text-end">
              <IonIcon
                icon={chatbubble}
                className="pt-1 text-xl text-grisText"
              ></IonIcon>
            </div>
            <div className="w-2/4">
              <span className="font-roboto text-xs font-medium text-grisText">
                {chats}
              </span>
            </div>
          </div>
          <div className="text-sta w-2/6">
            <span className="font-roboto text-xs font-light text-grisText">
              Chats
            </span>
          </div>
          <div className="mr-6 w-2/6 text-end">
            <IonIcon
              icon={chevronForward}
              className="text-2xl text-grisText"
            ></IonIcon>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default GeneralMetrics;
