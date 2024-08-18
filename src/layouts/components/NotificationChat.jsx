import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPusherClient } from "@/lib/pusher";
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
  const pusherClient = createPusherClient();
  if (notificationsPusher === undefined) return;

  const navigate = useNavigate();

  function destroyNotificationActivation(chat) {
    destroyNotificationsChat(chat);

    //Redirect to the chat
    return navigate(`/chat/${chat}`);
  }

  const pusherClient = createPusherClient();

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
    <div className="flex">
      {notificationsPusher[0]?.number == 0 ? (
        ""
      ) : (
        <div className="relative -top-1 left-10 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-[#D7586B] text-xs text-white">
          {notificationsPusher[0]?.number}
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
          <DropdownMenuItem className="flex flex-col gap-1 px-0 py-0 focus:bg-inherit">
            {notificationsPusher[0]?.notifications.map((noti, i) => (
              <button
                className="px-2 py-1"
                key={i}
                type="button"
                onClick={() => destroyNotificationActivation(noti.chat_id)}
              >
                <div className="flex w-64 gap-1 px-2 py-1 hover:rounded-lg hover:bg-[#7794F926]">
                  <div className="w-1/5">
                    <Avatar>
                      <AvatarImage src={noti?.img} />
                    </Avatar>
                  </div>
                  <div className="w-3/5 overflow-hidden text-start">
                    <p className="line-clamp-1 text-sm font-medium text-grisText">
                      {noti?.title}
                    </p>
                    <span
                      className="line-clamp-1 text-xs font-normal text-grisSubText"
                      title={noti?.message}
                    >
                      {noti?.message}
                    </span>
                  </div>
                  <div className="flex w-1/5 flex-col items-end">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00A259] text-[10px] text-white">
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
