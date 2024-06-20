import React, { useEffect, useRef, useState } from "react";
import { SearchAction } from "@/layouts/Chat/utils";
import { IonIcon } from "@ionic/react";
import { send, mic, addCircle } from "ionicons/icons";
import MenssageCard from "./Components/Mensagge";
import { useLoaderData, useParams } from "react-router-dom";
import { getChatWithId, storeMensagge } from "./utils";
import Cookies from "js-cookie";
import { pusherClient } from "@/lib/pusher";

function MainChat() {
  const { id } = useParams();
  const { chat, user } = useLoaderData();

  const [initialData, setInitialData] = useState(chat.data);
  const [chatPusher, setChatPusher] = useState(initialData);
  const [typingMesagge, setTypingData] = useState(false);
  // const [userSelected, setSelectedUser] = useState(user);

  const scrollBox = useRef(null);

  const CurrentUserId = user.data.id;

  useEffect(() => {
    console.log(id);
    scrollBottom();
    pusherClient.subscribe(`private-get-chat.${id}`);

    pusherClient.bind("fill-chat-messages", ({ chat }) => {
      getMensajes(chat);
      scrollBottom();
    });

    async function getMensajes() {
      console.log("get msgs");
      let newData = await getChatWithId(chat.data[0].id);

      setChatPusher(newData.data);
    }
    getMensajes();

    return () => {
      pusherClient.unsubscribe(`private-get-chat.${id}`);
    };
  }, [id, chat]);

  function scrollBottom() {
    setTimeout(() => {
      scrollBox.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }

  const inputMsg = useRef(null);

  function sendMensageEnter(e) {
    if (e.code == "Enter") {
      sendMensage();
    }
  }

  function sendMensage() {
    //DEFINE THE VARIABLES

    let msg = inputMsg.current.value;
    let chat = chatPusher[0].id;

    if (msg != "") {
      //SEND THE MESSAGE
      storeMensagge(chat, msg);
    }

    //CLEAN THE MESSAGE
    inputMsg.current.value = "";
  }

  let infoUser = [];

  chatPusher[0].participants.map((participant, i) => {
    if (participant.id != user.data.id) {
      infoUser = [
        {
          id: participant.id,
          img: participant.img,
          title: participant.name,
        },
      ];
    }
  });
  // console.log(infoUser[0].id);
  // console.log(chatPusher[0].participants[0].name);

  return (
    <div className="relative mx-5 flex w-screen flex-col justify-between overflow-scroll rounded-xl bg-[#FBFBFB]">
      {/* Chat Header */}
      <div className="absolute sticky left-0 right-0 top-0 z-10 flex rounded-t-xl bg-gris px-6 py-4">
        <div className="m-auto w-1/12">
          <img
            src="https://i.scdn.co/image/ab6761610000e5eb153fc7a135b27d664160204b"
            width="55px"
            className="rounded-full"
          />
        </div>
        <div className="m-auto w-10/12">
          <span className="font-poppins text-lg font-semibold text-grisHeading">
            {chatPusher[0].participants[0].name}
          </span>
        </div>
        <div className="m-auto* w-1/12"></div>
      </div>
      {/* Chat Card Messages */}
      <div className="">
        <div className="flex h-full w-full flex-col-reverse justify-end overflow-y-auto px-12 py-3">
          <div ref={scrollBox}></div>
          {chatPusher[0]?.msg.map((mensagge, i) => (
            <MenssageCard key={i} data={mensagge} user={CurrentUserId} />
          ))}
        </div>
      </div>
      {/* Chat Card Footer */}
      <div className="absolute sticky bottom-0 left-0 right-0 z-10 flex rounded-b-xl bg-[#E0E0E0] px-5 py-2">
        <div className="w-5/6 px-5">
          <input
            type="text"
            ref={inputMsg}
            onKeyPress={sendMensageEnter}
            className="w-full rounded-xl px-4 py-2 font-roboto font-light text-grisText ring-0"
            placeholder="Type your message..."
          />
        </div>
        <div className="m-auto flex w-1/6">
          <IonIcon
            icon={send}
            size="large"
            className="px-2 text-grisText hover:text-primario"
            onClick={sendMensage}
          ></IonIcon>
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

export default MainChat;

export async function Action({ request }) {
  const data = await request.formData();

  const validation = await SearchAction(data);

  return validation;
}
