import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  redirect,
  useLoaderData,
  useLocation,
  useParams,
  useSubmit,
} from "react-router-dom";

import {
  getChatWithId,
  storeMensagge,
  storeMensaggeFile,
  storeMensaggeReply,
  storeMensaggeResend,
} from "./utils";
import { pusherClient } from "@/lib/pusher";

import MenssageCard from "./Components/Mensagge";

import { IonIcon } from "@ionic/react";
import { send, mic, addCircle } from "ionicons/icons";
import MensaggeFileModal from "./Components/MensaggeFileModal";

function MainChat() {
  const location = useLocation();
  const { id } = useParams();
  const { chat, user, chats } = useLoaderData();
  const submit = useSubmit();
  const [mssg, setMssg] = useState("");
  const [urlId, setUrlId] = useState(id);
  const [chatMessagesPusher, setChatMessagesPusher] = useState(chat.data.msg);
  const [typingMesagge, setTypingData] = useState(false);
  // const [userSelected, setSelectedUser] = useState(user);
  const scrollBox = useRef(null);
  const CurrentUserId = user.data.user.id;
  const [modalSendFile, setModalSendFile] = useState(false);

  const userInfo = [
    {
      id: user.data.user.id,
      name: user.data.user.name + " " + user.data.user.last_name,
    },
  ];

  useEffect(() => {
    setUrlId(id);
    let channel = pusherClient.subscribe(`private-get-chat.${urlId}`);

    channel.bind("fill-chat-messages", ({ chat }) => {
      getMensajes(chat);
    });

    channel.bind(`client-typing-user`, (userInfo) => {
      console.log(userInfo);
      console.log("Holi");
    });

    async function getMensajes(id) {
      const newData = await getChatWithId(id);
      setChatMessagesPusher(newData.data.msg);
      // scrollBottom();
      // console.log("CORRIO EFFECT LOCATION", id);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-chat.${urlId}`);
      // console.log("unsubscribe");
    };
  }, [location, urlId]);

  function testCrotolamo() {
    let channel2 = pusherClient.subscribe(`private-get-chat.${urlId}`);
    channel2.trigger(`client-typing-user`, userInfo);
  }

  useEffect(() => {
    async function getMensajes() {
      let newData = await getChatWithId(id);
      setChatMessagesPusher(newData.data.msg);
      // scrollBottom();
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

  function onInputEnter(e) {
    // console.log(e.currentTarget);
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setMssg("");
    }
  }

  function cleanInput() {
    setMssg("");
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-auto rounded-xl bg-[#FBFBFB] px-4 pb-4">
      {/* Chat Header */}
      <MensaggeFileModal
        chat_id={id}
        modal={modalSendFile}
        setModal={setModalSendFile}
      />

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
        <div className=""></div>
      </div>

      {/* Chat Card Messages */}
      <div className="flex w-full flex-col-reverse overflow-scroll px-12 py-3">
        <div ref={scrollBox}></div>
        {chatMessagesPusher?.map((mensagge, i) => (
          <MenssageCard
            key={i}
            data={mensagge}
            user={CurrentUserId}
            chats={chats.data}
            chat={id}
          />
        ))}
      </div>

      {/* Chat Card Footer */}
      <div className="flex rounded-b-xl bg-[#FBFBFB] px-5 py-2">
        <Form
          id="form-send-chat-mensagge"
          className="flex w-full"
          action={`/chat/${id}`}
          method="post"
          onKeyDown={onInputEnter}
        >
          <input type="hidden" value={id} name="chat_id" />
          <input type="hidden" value={1} name="type_of_function" />
          <div className="w-11/12 px-5">
            <input
              name="message"
              type="text"
              className="w-full rounded-3xl px-4 py-2 font-roboto font-light text-grisText drop-shadow-[0px_0px_6px_rgba(0,0,0,0.20)] focus:ring-0"
              placeholder="Type your message..."
              value={mssg}
              onChange={(e) => setMssg(e.target.value)}
            />
          </div>
          <div className="m-auto mt-2 flex w-1/12">
            {mssg != "" ? (
              <button
                type="submit"
                onClick={() => cleanInput()}
                className="align-middle"
              >
                <IonIcon
                  icon={send}
                  className="px-2 text-2xl text-[#BDBDBD] hover:text-primario"
                ></IonIcon>
              </button>
            ) : (
              <div className="flex">
                <IonIcon
                  icon={mic}
                  className="px-2 text-2xl text-[#BDBDBD] hover:text-primario"
                ></IonIcon>
                <IonIcon
                  icon={addCircle}
                  className="px-2 text-2xl text-[#BDBDBD] hover:text-primario"
                  onClick={() => setModalSendFile(true)}
                ></IonIcon>
              </div>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default MainChat;

export async function Action({ params, request }) {
  const data = await request.formData();

  console.log(data);

  switch (data.get("type_of_function")) {
    case "1":
      //Submit Msg
      await storeMensagge(data);
      break;
    case "2":
      //Submit Msg File
      await storeMensaggeFile(data);
      break;
    case "3":
      //Submit Msg File
      await storeMensaggeResend(data);
      break;
    case "4":
      //Submit Msg Reply
      await storeMensaggeReply(data);
      break;
  }

  // return redirect(`/chat/${params.id}`);
  return "1";
}
