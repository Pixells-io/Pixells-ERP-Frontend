import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getChats } from "@/lib/actions";
import { pusherClient } from "@/lib/pusher";

import InternalSearch from "./Components/Internal/InternalSearch";
import ChatList from "./Components/Internal/ChatList";
import { SearchAction } from "./utils";

function LayoutChat() {
  const { users, chats } = useLoaderData();

  const [initialData, setInitialData] = useState(chats.data);
  const [chatListPusher, setChatListPusher] = useState(initialData);

  async function getChatsList() {
    let newData = await getChats();

    setChatListPusher(newData.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-chat-list");

    pusherClient.bind("fill-chat-list", ({ list }) => {
      getChatsList();
    });

    return () => {
      pusherClient.unsubscribe("private-get-chat-list");
    };
  }, []);

  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex w-[450px] shrink-0 flex-col gap-4 rounded-xl">
        {/* top block */}
        <Tabs
          defaultValue="internal"
          className="h-[100%] w-full rounded-xl bg-[#FBFBFB]"
        >
          <TabsList className="mb-3 w-full bg-blancoForms pt-6">
            <TabsTrigger
              className="rounded-none border-b-2 border-slate-300 bg-transparent p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
              value="internal"
            >
              INTERNAL
            </TabsTrigger>
            {/*
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
             */}
          </TabsList>
          <TabsContent value="internal" className="h-[92%]">
            <div className="mt-[-20px] bg-[#f6f6f6] pb-2 pt-6">
              <InternalSearch users={users?.data} />
            </div>
            <div className="mx-2 my-4 h-auto overflow-hidden rounded-b-md bg-[#fbfbfb]">
              {chatListPusher?.map((chat, i) => (
                <ChatList chat={chat} key={i} />
              ))}
            </div>
          </TabsContent>
          {/*
          <TabsContent value="whatsapp"></TabsContent>
          <TabsContent value="meta"></TabsContent>
           */}
        </Tabs>
      </div>
      <Outlet />
    </div>
  );
}

export default LayoutChat;

export async function Action({ request }) {
  console.log(request);
  const data = await request.formData();

  const validation = await SearchAction(data);

  return 1;
}
