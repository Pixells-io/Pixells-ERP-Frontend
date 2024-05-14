import React, { useEffect, useState } from "react";

import { Outlet, useLoaderData } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InternalSearch from "./Components/Internal/InternalSearch";
import ChatList from "./Components/Internal/ChatList";
import { getChats } from "@/lib/actions";
import { pusherClient } from "@/lib/pusher";

function LayoutChat() {
  const { users, chats, user } = useLoaderData();

  const [initialData, setInitialData] = useState(chats.data);
  const [chatListPusher, setChatListPusher] = useState(initialData);

  async function getChatsList() {
    let newData = await getChats();

    setChatListPusher(newData.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-chat-list");

    pusherClient.bind("fill-chat-messages", ({ list }) => {
      getChatsList();
    });

    return () => {
      pusherClient.unsubscribe("private-get-chat-list");
    };
  }, []);

  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      <div className="flex flex-col rounded-xl bg-gris gap-4 w-[450px] shrink-0">
        {/* top block */}
        <Tabs defaultValue="internal" className="w-fullpt-6">
          <TabsList className="bg-transparent w-full mb-3">
            <TabsTrigger
              className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones bg-transparent data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3"
              value="internal"
            >
              INTERNAL
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3"
              value="whatsapp"
            >
              WHATSAPP
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3"
              value="meta"
            >
              META
            </TabsTrigger>
          </TabsList>
          <TabsContent value="internal" className="h-full">
            <InternalSearch users={users.data} />
            <div className="px-5 bg-[#FBFBFB]">
              {chatListPusher?.map((chat, i) => (
                <div>
                  <ChatList chat={chat} />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="whatsapp"></TabsContent>
          <TabsContent value="meta"></TabsContent>
        </Tabs>
      </div>
      <Outlet />
    </div>
  );
}

export default LayoutChat;
