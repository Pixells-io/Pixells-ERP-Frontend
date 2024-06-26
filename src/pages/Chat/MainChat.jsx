import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  redirect,
  useLoaderData,
  useLocation,
  useParams,
  useSubmit,
} from "react-router-dom";

import { getChatWithId, storeMensagge } from "./utils";
import { pusherClient } from "@/lib/pusher";

import MenssageCard from "./Components/Mensagge";

import { IonIcon } from "@ionic/react";
import { send, mic, addCircle } from "ionicons/icons";

function MainChat() {
  const location = useLocation();
  const { id } = useParams();
  const { chat, user } = useLoaderData();
  const submit = useSubmit();
  const [mssg, setMssg] = useState("");
  const [urlId, setUrlId] = useState(id);
  const [chatMessagesPusher, setChatMessagesPusher] = useState(chat.data.msg);
  const [typingMesagge, setTypingData] = useState(false);
  // const [userSelected, setSelectedUser] = useState(user);
  const scrollBox = useRef(null);
  const CurrentUserId = user.data.id;

  // console.log(chat.data?.participants);

  useEffect(() => {
    setUrlId(id);
    console.log("URL ID", urlId);
    pusherClient.subscribe(`private-get-chat.${urlId}`);

    pusherClient.bind("fill-chat-messages", ({ chat }) => {
      // console.log("EFFECT location -> pusher");
      getMensajes(chat);
    });

    async function getMensajes(id) {
      const newData = await getChatWithId(id);
      setChatMessagesPusher(newData.data.msg);
      scrollBottom();
      // console.log("CORRIO EFFECT LOCATION", id);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-chat.${urlId}`);
      // console.log("unsubscribe");
    };
  }, [location, urlId]);

  useEffect(() => {
    async function getMensajes() {
      let newData = await getChatWithId(id);
      setChatMessagesPusher(newData.data.msg);
      scrollBottom();
      // console.log("CORRIO EFFECT ID", id);
    }

    getMensajes();
  }, [id]);

  function scrollBottom() {
    setTimeout(() => {
      scrollBox.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }

  //let infoUser = [];

  /*chat.data.participants.map((participant, i) => {
    if (participant.id != user.data.id) {
      infoUser = [
        {
          id: participant.id,
          img: participant.img,
          title: participant.name,
        },
      ];
    }
  });*/

  function onInputEnter(e) {
    // console.log(e.currentTarget);
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setMssg("");
    }
  }

  return (
    <div className="relative mx-5 flex w-screen flex-col justify-between overflow-scroll rounded-xl bg-[#FBFBFB]">
      {/* Chat Header */}
      <div className="sticky left-0 right-0 top-0 z-10 flex rounded-t-xl bg-gris px-6 py-4">
        <div className="m-auto w-1/12">
          <img
            src={chat.data?.participants.img}
            className="h-14 w-14 rounded-full"
          />
        </div>
        <div className="m-auto w-10/12">
          <span className="font-poppins text-lg font-semibold text-grisHeading">
            {chat.data?.participants.name}
          </span>
        </div>
        <div className="m-auto* w-1/12"></div>
      </div>
      {/* Chat Card Messages */}
      <div className="">
        <div className="flex h-full w-full flex-col-reverse overflow-y-auto px-12 py-3">
          <div ref={scrollBox}></div>
          {chatMessagesPusher?.map((mensagge, i) => (
            <MenssageCard key={i} data={mensagge} user={CurrentUserId} />
          ))}
        </div>
      </div>
      {/* Chat Card Footer */}
      <div className="sticky bottom-0 left-0 right-0 z-10 flex rounded-b-xl bg-[#E0E0E0] px-5 py-2">
        <Form
          id="form-send-chat-mensagge"
          className="flex w-full"
          action={`/chat/${id}`}
          method="post"
          onKeyDown={onInputEnter}
        >
          <input type="hidden" value={id} name="chat_id" />
          <input type="hidden" value={1} name="type_of_function" />
          <div className="w-5/6 px-5">
            <input
              name="message"
              type="text"
              className="w-full rounded-xl px-4 py-2 font-roboto font-light text-grisText ring-0"
              placeholder="Type your message..."
              value={mssg}
              onChange={(e) => setMssg(e.target.value)}
            />
          </div>
          <div className="m-auto flex w-1/6">
            <button type="submit">
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

export async function Action({ params, request }) {
  const data = await request.formData();

  switch (data.get("type_of_function")) {
    case "1":
      //Submit Msg
      await storeMensagge(data);
      break;
  }

  // return redirect(`/chat/${params.id}`);
  return "1";
}
