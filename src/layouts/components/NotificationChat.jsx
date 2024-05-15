import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { chatbubble } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link, useNavigate } from "react-router-dom";
import { pusherClient } from "@/lib/pusher";
import { destroyNotificationsChat, getNotificationsChat } from "@/lib/actions";

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
        <div className="rounded-full bg-[#D7586B] text-white h-5 w-5 top-1 fixed z-10 right-[155px] justify-center">
          <span className="ml-[6px] mt-[-9px] h-5 w-5 top-[10px] fixed">
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
        <DropdownMenuContent className="">
          <DropdownMenuItem className="">
            {notificationsPusher[0]?.notifications.map((noti, i) => (
              <button
                key={i}
                type="button"
                onClick={() => destroyNotificationActivation(noti.chat_id)}
              >
                <div className="w-64 flex gap-1 hover:bg-[#7794F926] hover:rounded-lg">
                  <div className="w-1/5">
                    <Avatar>
                      <AvatarImage src="https://demoback.pixells.io/images/r.jpg" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="w-3/5 overflow-hidden text-start">
                    <p className="text-grisText text-sm font-medium">
                      {noti?.title}
                    </p>
                    <span
                      className="text-grisSubText text-xs font-normal"
                      title={noti?.message}
                    >
                      {noti?.message}
                    </span>
                  </div>
                  <div className="flex flex-col items-end w-1/5">
                    <span className="rounded-full bg-[#00A259] text-white h-5 w-5 flex justify-center">
                      {noti?.total}
                    </span>
                    <span className="text-grisSubText text-[10px]">
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
