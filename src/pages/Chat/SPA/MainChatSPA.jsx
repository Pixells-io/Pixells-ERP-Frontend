import ChatList from "@/layouts/Chat/Components/Internal/ChatList";
import InternalSearch from "@/layouts/Chat/Components/Internal/InternalSearch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChatCard from "./ChatCard";

function MainChatSPA() {
  const { users, chats, user } = useLoaderData();

  //Chat List Var
  const [initialData, setInitialData] = useState(chats.data);
  const [chatListPusher, setChatListPusher] = useState(initialData);

  //Chat Selected Var
  const [initialChat, setInitialChat] = useState(null);
  const [chatSelected, setChatSelected] = useState(initialChat);

  function changeSelectedChat(chat_id) {
    setChatSelected(chat_id);
  }

  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="bg- flex w-[450px] shrink-0 flex-col gap-4 rounded-xl">
        {/* top block */}
        <Tabs
          defaultValue="internal"
          className="h-screen w-full overflow-scroll"
        >
          <TabsList className="bg- mb-3 w-full bg-blancoForms text-center">
            <TabsTrigger
              className="rounded-none border-b-2 border-slate-300 bg-transparent p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
              value="internal"
            >
              INTERNAL
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
              value="whatsapp"
            >
              WHATSAPP
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
              value="meta"
            >
              META
            </TabsTrigger>
          </TabsList>
          <TabsContent value="internal" className="h-screen">
            <div className="mt-[-20px] bg-[#f6f6f6] pb-2 pt-6">
              <InternalSearch users={users?.data} />
            </div>
            <div className="h-auto overflow-hidden rounded-b-md bg-[#fbfbfb]">
              {chatListPusher?.map((chat, i) => (
                <div key={i}>
                  <div
                    className="my-3 flex border-b border-grisDisabled px-5 py-2 hover:rounded-xl hover:bg-[#f0f0f0]"
                    onClick={() => changeSelectedChat(chat.chat_id)}
                  >
                    <div className="w-1/6">
                      <img src={chat.img} className="h-12 w-12 rounded-full" />
                    </div>
                    <div className="w-4/6 text-left">
                      <span className="font-roboto text-sm font-medium text-grisText">
                        {chat.title}
                      </span>
                      <div className="mt-[-3px]">
                        <span className="font-roboto text-xs font-normal text-grisText">
                          {chat.mensaje.mensaje}
                        </span>
                      </div>
                    </div>
                    <div className="w-1/6">
                      <div className="text-center">
                        <span className="font-roboto text-[10px] font-normal text-[#BDBDBD]">
                          {chat?.latest}
                        </span>
                      </div>
                      <div className="text-center">
                        {chat?.count !== 0 && (
                          <span className="rounded-full bg-[#00A259] px-2 py-1 font-roboto text-sm font-medium text-white">
                            {chat?.count}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="whatsapp"></TabsContent>
          <TabsContent value="meta"></TabsContent>
        </Tabs>
      </div>
      {chatSelected === null ? (
        <div>
          <span>Null</span>
        </div>
      ) : (
        <div className="w-96 bg-red-500">
          <ChatCard chat={chatSelected} user={user} />
        </div>
      )}
    </div>
  );
}

export default MainChatSPA;
