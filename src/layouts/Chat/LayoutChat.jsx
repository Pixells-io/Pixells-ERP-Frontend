import React, { useEffect, useState } from "react";

import { Outlet, useLoaderData } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InternalSearch from "./Components/Internal/InternalSearch";
import ChatList from "./Components/Internal/ChatList";
import { pusherClient } from "@/lib/pusher";

function LayoutChat() {
  const { users, chats, user } = useLoaderData();

  const [initialData, setInitialData] = useState(chats.data);
  const [chatListPusher, setChatListPusher] = useState(initialData);

  useEffect(() => {
    pusherClient.subscribe("get-chat-list");

    pusherClient.bind("fill-chat-list", ({ query }) => {
      setChatListPusher(query.original.data);
    });

    return () => {
      pusherClient.unsubscribe("get-chat-list");
    };
  }, []);

  console.log(chatListPusher);

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
                <ChatList chat={chat.data} auth={user.data} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="whatsapp">
            <span>Es</span>
          </TabsContent>
          <TabsContent value="meta">
            <span>ghj</span>
          </TabsContent>
        </Tabs>
      </div>
      <Outlet />
    </div>
  );
}

export default LayoutChat;
