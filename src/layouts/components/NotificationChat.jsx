import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pusherClient } from "@/lib/pusher";
import { destroyNotificationsChat, getNotificationsChat } from "@/lib/actions";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { chatbubble } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function NotificationChat({ notifications, user }) {
  const [initialData, setInitialData] = useState(notifications);
  const [notificationsPusher, setnotificationsPusher] = useState(initialData);

  if (notificationsPusher === undefined) return;

  const navigate = useNavigate();

  function destroyNotificationActivation(chat) {
    destroyNotificationsChat(chat);

    //Redirect to the chat
    return navigate(`/chat/${chat}`);
  }

  useEffect(() => {
    async function getNotifications() {
      let newData = await getNotificationsChat();

      setnotificationsPusher(newData.data);
    }

    pusherClient.subscribe("private-get-chat-notification");

    pusherClient.bind("fill-chat-notification", ({ message }) => {
      getNotifications();
    });

    return () => {
      pusherClient.unsubscribe("private-get-chat-notification");
    };
  }, []);

  return (
    <div>
      {notificationsPusher[0]?.number == 0 ? (
        ""
      ) : (
        <div className="fixed right-[155px] top-1 z-10 h-5 w-5 items-center justify-center rounded-full border border-white bg-[#D7586B] text-white">
          <span className="fixed top-[14px] ml-[6px] mt-[-9px] h-5 w-5 text-xs">
            {notificationsPusher[0]?.number}
          </span>
        </div>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <IonIcon
            icon={chatbubble}
            size="large"
            className="text-primario"
          ></IonIcon>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col">
          <DropdownMenuItem className="flex flex-col gap-2">
            {notificationsPusher[0]?.notifications.map((noti, i) => (
              <button
                key={i}
                type="button"
                onClick={() => destroyNotificationActivation(noti.chat_id)}
              >
                <div className="flex w-64 gap-1 hover:rounded-lg hover:bg-[#7794F926]">
                  <div className="w-1/5">
                    <Avatar>
                      <AvatarImage src="https://demoback.pixells.io/images/r.jpg" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="w-3/5 overflow-hidden text-start">
                    <p className="text-sm font-medium text-grisText">
                      {noti?.title}
                    </p>
                    <span
                      className="text-xs font-normal text-grisSubText"
                      title={noti?.message}
                    >
                      {noti?.message}
                    </span>
                  </div>
                  <div className="flex w-1/5 flex-col items-end">
                    <span className="flex h-5 w-5 justify-center rounded-full bg-[#00A259] text-white">
                      {noti?.total}
                    </span>
                    <span className="text-[10px] text-grisSubText">
                      {noti?.date}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default NotificationChat;
