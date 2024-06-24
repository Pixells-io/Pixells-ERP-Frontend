import React, { useEffect, useRef, useState } from "react";
import { SearchAction } from "@/layouts/Chat/utils";
import { IonIcon } from "@ionic/react";
import { send, mic, addCircle } from "ionicons/icons";
import MenssageCard from "./Components/Mensagge";
import {
  Form,
  redirect,
  useLoaderData,
  useParams,
  useSubmit,
} from "react-router-dom";
import { getChatWithId, storeMensagge } from "./utils";
import Cookies from "js-cookie";
import { pusherClient } from "@/lib/pusher";

function MainChat() {
  const { chat, user } = useLoaderData();

  const [initialData, setInitialData] = useState(chat.data);
  const [chatMessagesPusher, chatMessagesPusherData] = useState(initialData);
  const [typingMesagge, setTypingData] = useState(false);
  // const [userSelected, setSelectedUser] = useState(user);

  const scrollBox = useRef(null);

  console.log(initialData, chat.data);

  const params = useParams();

  const id = params.id;

  const CurrentUserId = user.data.id;

  useEffect(() => {
    chatMessagesPusherData(chat.data);

    scrollBottom();

    pusherClient.subscribe(`private-get-chat.${id}`);

    pusherClient.bind("fill-chat-messages", ({ chat }) => {
      getMensajes();
      scrollBottom();
    });

    async function getMensajes() {
      let newData = await getChatWithId(id);

      chatMessagesPusherData(newData.data);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-chat.${id}`);
      chatMessagesPusherData(false);
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
  const formRef = useRef(null);
  const submit = useSubmit();

  //Submit function form

  function sendMensageEnter(e) {
    if (e.code == "Enter") {
      sendMensage();
    }
  }

  function sendMensage() {
    //DEFINE THE VARIABLES
    submit(formRef.current);
  }

  function cleanInputMsg() {
    setTimeout(() => {
      inputMsg.current.value = "";
    }, 400);
  }

  let infoUser = [];

  chat.data.participants.map((participant, i) => {
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
    <div className="relative mx-5 flex w-screen flex-col justify-between overflow-scroll rounded-xl bg-[#FBFBFB]">
      {/* Chat Header */}
      <div className="absolute sticky left-0 right-0 top-0 z-10 flex rounded-t-xl bg-gris px-6 py-4">
        <div className="m-auto w-1/12">
          <img
            src={chat.data?.participants[0].img}
            width="55px"
            className="rounded-full"
          />
        </div>
        <div className="m-auto w-10/12">
          <span className="font-poppins text-lg font-semibold text-grisHeading">
            {chat.data?.participants[0].name}
          </span>
        </div>
        <div className="m-auto* w-1/12"></div>
      </div>
      {/* Chat Card Messages */}
      <div className="">
        <div className="flex h-full w-full flex-col-reverse justify-end overflow-y-auto px-12 py-3">
          <div ref={scrollBox}></div>
          {chatMessagesPusher?.msg.map((mensagge, i) => (
            <MenssageCard key={i} data={mensagge} user={CurrentUserId} />
          ))}
        </div>
      </div>
      {/* Chat Card Footer */}
      <div className="absolute sticky bottom-0 left-0 right-0 z-10 flex rounded-b-xl bg-[#E0E0E0] px-5 py-2">
        <Form
          id="form-send-chat-mensagge"
          className="flex w-full"
          action={`/chat/${id}`}
          method="post"
          useRef={formRef}
        >
          <input type="hidden" value={id} name="chat_id" />
          <input type="hidden" value={1} name="type_of_function" />
          <div className="w-5/6 px-5">
            <input
              name="message"
              type="text"
              ref={inputMsg}
              onKeyPress={sendMensageEnter}
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
        </Form>
      </div>
    </div>
  );
}

export default MainChat;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("type_of_function")) {
    case "1":
      //Submit Msg
      await storeMensagge(data);
      break;
  }

  return redirect(`/chat/${data.get("chat_id")}`);
}
