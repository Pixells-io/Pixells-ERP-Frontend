import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useLocation,
  useNavigate,
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
import { createPusherClient } from "@/lib/pusher";

import MenssageCard from "./Components/Mensagge";

import { IonIcon } from "@ionic/react";
import { send, mic, addCircle, closeCircle, chevronBack } from "ionicons/icons";
import MensaggeFileModal from "./Components/MensaggeFileModal";

function MainChat() {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
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

  const [reply, setReply] = useState("");
  const [modalReplay, setModalReplay] = useState(false);

  const inputFocusRef = useRef(null);

  const userInfo = [
    {
      id: user.data.user.id,
      name: user.data.user.name + " " + user.data.user.last_name,
    },
  ];

  useEffect(() => {
    inputFocusRef.current.focus();
  }, []);

  const pusherClient = createPusherClient();

  useEffect(() => {
    setUrlId(id);
    let channel = pusherClient.subscribe(`private-get-chat.${urlId}`);

    channel.bind("fill-chat-messages", ({ chat }) => {
      getMensajes(chat);
    });

    channel.bind(`client-typing-user`, (userInfo) => {});

    async function getMensajes(id) {
      const newData = await getChatWithId(id);
      setChatMessagesPusher(newData.data.msg);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-chat.${urlId}`);
    };
  }, [location, urlId]);

  useEffect(() => {
    async function getMensajes() {
      let newData = await getChatWithId(id);
      setChatMessagesPusher(newData.data.msg);
    }

    getMensajes();
  }, [id]);

  function onInputEnter(e) {
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setMssg("");
    }
  }

  function onInputEnter2(e) {
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setMssg("");
      setReply("");
      setModalReplay(false);
    }
  }

  function cleanInput() {
    setMssg("");
  }

  return (
    <div
      className={
        "flex h-full w-full flex-col justify-between overflow-auto rounded-xl pl-0 md:flex md:overflow-auto md:pl-4"
      }
    >
      {/* Chat Header */}
      <MensaggeFileModal
        chat_id={id}
        modal={modalSendFile}
        setModal={setModalSendFile}
      />

      <div className="flex rounded-t-xl bg-gris px-6 py-4">
        {chat.data.type == 0 ? (
          <div className="flex items-center gap-4">
            <IonIcon
              icon={chevronBack}
              className="flex size-8 cursor-pointer text-grisText md:hidden"
              onClick={() => navigate("/chat")}
            />
            <img
              src={chat.data?.participants.img}
              className="h-14 w-14 rounded-full object-cover"
            />
            <Link to={"/chat/" + id + "/user-media-library"}>
              <span className="font-poppins text-lg font-semibold text-grisHeading">
                {chat.data?.participants.name}
              </span>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <IonIcon
              icon={chevronBack}
              className="flex size-8 cursor-pointer text-grisText md:hidden"
              onClick={() => navigate("/chat")}
            />
            <img
              src={chat.data?.img}
              className="h-14 w-14 rounded-full object-cover"
            />
            <Link to={"/chat/" + id + "/user-media-library"}>
              <span className="font-poppins text-lg font-semibold text-grisHeading">
                {chat.data?.title}
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* Chat Card Messages */}
      <div className="scrollbar-hidden flex h-full w-full flex-col-reverse overflow-y-scroll px-12 py-3">
        <div ref={scrollBox}></div>
        {chatMessagesPusher?.map((mensagge, i) => (
          <MenssageCard
            key={i}
            data={mensagge}
            user={CurrentUserId}
            chats={chats.data}
            chat={id}
            setReplay={setReply}
            setModalReplay={setModalReplay}
          />
        ))}
      </div>

      {/* Chat Card Footer */}
      <div className="flex flex-col rounded-b-xl bg-[#FBFBFB] px-5 py-2">
        {modalReplay == true ? (
          <div>
            <div className="flex w-full flex-col justify-center gap-1 border-0 border-t px-8 py-2">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1 text-xs font-light text-grisSubText">
                  Respondiendo a{" "}
                  <span className="font-normal text-grisText">
                    {" "}
                    {reply.name}
                  </span>
                </p>
                <IonIcon
                  src={closeCircle}
                  className="size-4 cursor-pointer text-grisSubText"
                  onClick={() => setModalReplay(false)}
                />
              </div>
              <p className="line-clamp-2 text-xs text-[#ABABAB]">{reply.msg}</p>
            </div>
            <Form
              id="form-reply-chat-mensagge"
              className="flex w-full"
              action={`/chat/${id}`}
              method="post"
              onKeyDown={onInputEnter2}
            >
              <input type="hidden" value={id} name="chat_id" />
              <input type="hidden" name="message_id" value={reply.msg_id} />
              <input type="hidden" value={4} name="type_of_function" />
              <div className="w-11/12 px-5">
                <input
                  name="message"
                  type="text"
                  className="w-full rounded-3xl px-4 py-2 font-roboto font-light text-grisText drop-shadow-[0px_0px_6px_rgba(0,0,0,0.20)] focus:ring-0"
                  placeholder="Escribe tu mensaje..."
                  value={mssg}
                  onChange={(e) => setMssg(e.target.value)}
                  ref={inputFocusRef}
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
        ) : (
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
                className="w-full rounded-3xl px-4 py-2 font-roboto font-light text-grisText drop-shadow-[0px_0px_6px_rgba(0,0,0,0.20)] focus:ring-0 focus-visible:ring-primarioBotones"
                placeholder="Escribe tu mensaje..."
                value={mssg}
                onChange={(e) => setMssg(e.target.value)}
                ref={inputFocusRef}
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
                  {/* <IonIcon
                    icon={mic}
                    className="px-2 text-2xl text-[#BDBDBD] hover:text-primario"
                  ></IonIcon> */}
                  <IonIcon
                    icon={addCircle}
                    className="px-2 text-2xl text-[#BDBDBD] hover:text-primario"
                    onClick={() => setModalSendFile(true)}
                  ></IonIcon>
                </div>
              )}
            </div>
          </Form>
        )}
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
