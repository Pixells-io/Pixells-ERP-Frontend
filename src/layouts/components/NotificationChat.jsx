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
import { Link } from "react-router-dom";
import { pusherClient } from "@/lib/pusher";
import { destroyNotificationsChat, getNotificationsChat } from "@/lib/actions";

function NotificationChat({ notifications, user }) {
  const [initialData, setInitialData] = useState(notifications);
  const [notificationsPusher, setnotificationsPusher] = useState(initialData);

  function destroyNotification(chat) {
    destroyNotificationsChat(chat);
  }

  async function getNotifications() {
    let newData = await getNotificationsChat();
    setnotificationsPusher(newData.data);
  }

  useEffect(() => {
    getNotifications();

    pusherClient.subscribe(`private-get-notification-chat`);

    pusherClient.bind("fill-chat-notifications", ({ user }) => {
      getNotifications();
    });

    return () => {
      pusherClient.unsubscribe(`private-get-notification-chat`);
    };
  }, []);

  return (
    <div>
      {notificationsPusher[0].number == 0 ? (
        ""
      ) : (
        <div className="rounded-full bg-[#ff1f14] text-white h-5 w-5 top-1 fixed z-10 right-[155px] justify-center">
          <span className="ml-[5px] mt-[50px]">
            {notificationsPusher[0].number}
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
            {notificationsPusher[0].notifications.map((noti, i) => (
              <Link
                key={i}
                to={`/chat/${noti.chat_id}`}
                onClick={destroyNotification(noti.chat_id)}
              >
                <div className="w-64 flex gap-1 hover:bg-[#7794F926] hover:rounded-lg">
                  <div className="w-1/5">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="w-3/5 overflow-hidden">
                    <p className="text-grisText text-sm font-medium">
                      {noti.title}
                    </p>
                    <span
                      className="text-grisSubText text-xs font-medium"
                      title={noti.message}
                    >
                      {noti.message}
                    </span>
                  </div>
                  <div className="flex flex-col items-end w-1/5">
                    <span className="rounded-full bg-[#00A259] text-white h-5 w-5 flex justify-center">
                      {noti.total}
                    </span>
                    <span className="text-grisSubText text-[10px]">
                      {noti.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default NotificationChat;
