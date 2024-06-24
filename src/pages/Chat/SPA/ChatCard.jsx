import ChatList from "@/layouts/Chat/Components/Internal/ChatList";
import InternalSearch from "@/layouts/Chat/Components/Internal/InternalSearch";
import { IonIcon } from "@ionic/react";
import { send, mic, addCircle } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import { getChatWithId } from "../utils";
import { pusherClient } from "@/lib/pusher";
import MenssageCard from "../Components/Mensagge";
import { Form } from "react-router-dom";

function ChatCard({ chat, user }) {
  const [initialData, setInitialData] = useState(null);
  const [chatPusher, setChatPusher] = useState(initialData);

  const scrollBox = useRef(null);
  const inputMsg = useRef(null);

  useEffect(() => {
    //scrollBottom();

    getMensajes();

    pusherClient.subscribe(`private-get-chat.${chat}`);

    pusherClient.bind("fill-chat-messages", ({ chat }) => {
      getMensajes();
      //scrollBottom();
    });

    async function getMensajes() {
      console.log("Holi");

      let newData = await getChatWithId(chat);

      setChatPusher(newData.data);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-chat.${chat}`);
    };
  }, [chat, user]);

  function scrollBottom() {
    setTimeout(() => {
      scrollBox.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }

  console.log(chatPusher);

  return (
    <div className="relative mx-5 flex h-5/6 flex-col justify-between overflow-scroll rounded-xl bg-[#FBFBFB]">
      {/* Chat Header */}
      <div className="absolute sticky left-0 right-0 top-0 z-10 flex rounded-t-xl bg-gris px-6 py-4">
        <div className="m-auto w-1/12">
          <img
            src={chatPusher?.participants[0].img}
            className="h-14 w-14 rounded-full"
          />
        </div>
        <div className="m-auto w-10/12">
          <span className="font-poppins text-lg font-semibold text-grisHeading">
            {chatPusher?.participants[0].name}
          </span>
        </div>
        <div className="m-auto* w-1/12"></div>
      </div>
      {/* Chat Card Messages */}
      <div className="">
        <div className="flex h-full w-full flex-col-reverse justify-end overflow-y-auto px-12 py-3">
          <div ref={scrollBox}></div>
          {chatPusher?.msg.map((mensagge, i) => (
            <MenssageCard key={i} data={mensagge} user={user} />
          ))}
        </div>
      </div>
      {/* Chat Card Footer */}
      <div className="absolute sticky bottom-0 left-0 right-0 z-10 flex rounded-b-xl bg-[#E0E0E0] px-5 py-2">
        <div className="w-5/6 px-5">
          <input
            name="message"
            type="text"
            ref={inputMsg}
            className="w-full rounded-xl px-4 py-2 font-roboto font-light text-grisText ring-0"
            placeholder="Type your message..."
          />
        </div>
        <div className="m-auto flex w-1/6">
          <button type="submit" onClick={() => cleanInputMsg()}>
            <IonIcon
              icon={send}
              size="large"
              className="px-2 text-grisText hover:text-primario"
            ></IonIcon>
          </button>
          <IonIcon
            icon={mic}
            size="large"
            className="px-2 text-grisText hover:text-primario"
          ></IonIcon>
          <IonIcon
            icon={addCircle}
            size="large"
            className="px-2 text-grisText hover:text-primario"
          ></IonIcon>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
