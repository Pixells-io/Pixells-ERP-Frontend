import React, { useEffect, useRef, useState } from "react";
import { SearchAction } from "@/layouts/Chat/utils";
import { IonIcon } from "@ionic/react";
import { send, mic, addCircle } from "ionicons/icons";
import MenssageCard from "./Components/Mensagge";
import { useLoaderData } from "react-router-dom";
import { getChatWithId, storeMensagge } from "./utils";
import Cookies from "js-cookie";
import { pusherClient } from "@/lib/pusher";

function MainChat() {
  const { chat, user } = useLoaderData();

  const [initialData, setInitialData] = useState(chat.data);
  const [chatPusher, setChatPusher] = useState(initialData);
  const [typingMesagge, setTypingData] = useState(false);

  const CurrentUserId = user.data.id;

  async function getMensajes() {
    let newData = await getChatWithId(chat.data[0].id);

    setChatPusher(newData.data);
  }

  const scrollBox = useRef(null);

  function scrollBottom() {
    setTimeout(() => {
      scrollBox.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 1000);
  }

  useEffect(() => {
    scrollBottom();
    pusherClient.subscribe(`private-get-chat.${chat.data[0].id}`);

    pusherClient.bind("fill-chat-messages", ({ chat }) => {
      getMensajes(chat);
      scrollBottom();
    });

    return () => {
      pusherClient.unsubscribe(`private-get-chat.${chat.data[0].id}`);
    };
  }, []);

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

  return (
    <div className="bg-[#FBFBFB] mx-5 rounded-xl flex flex-col overflow-scroll w-screen relative justify-between">
      {/* Chat Header */}
      <div className="bg-gris px-6 rounded-t-xl py-4 flex absolute top-0 left-0 right-0 sticky z-10">
        <div className="w-1/12 m-auto">
          <img
            src="https://i.scdn.co/image/ab6761610000e5eb153fc7a135b27d664160204b"
            width="55px"
            className="rounded-full"
          />
        </div>
        <div className="w-10/12 m-auto">
          <span className="font-poppins font-semibold text-lg text-grisHeading">
            {infoUser[0].title}
          </span>
        </div>
        <div className="w-1/12 m-auto*"></div>
      </div>
      {/* Chat Card Messages */}
      <div className="">
        <div className="px-12 py-3 w-full h-full flex justify-end overflow-y-auto flex-col-reverse">
          {chatPusher[0].msg.map((mensagge, i) => (
            <MenssageCard key={i} data={mensagge} user={CurrentUserId} />
          ))}
        </div>
      </div>
      {/* Chat Card Footer */}
      <div
        className="bg-[#E0E0E0] rounded-b-xl px-5 py-2 flex absolute bottom-0 left-0 right-0 sticky z-10"
        ref={scrollBox}
      >
        <div className="w-5/6 px-5">
          <input
            type="text"
            ref={inputMsg}
            onKeyPress={sendMensageEnter}
            className="w-full font-roboto font-light text-grisText px-4 py-2 rounded-xl ring-0"
            placeholder="Type your message..."
          />
        </div>
        <div className="w-1/6 flex m-auto">
          <IonIcon
            icon={send}
            size="large"
            className="text-grisText px-2 hover:text-primario"
            onClick={sendMensage}
          ></IonIcon>
          <IonIcon
            icon={mic}
            size="large"
            className="text-grisText px-2 hover:text-primario"
          ></IonIcon>
          <IonIcon
            icon={addCircle}
            size="large"
            className="text-grisText px-2 hover:text-primario"
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
