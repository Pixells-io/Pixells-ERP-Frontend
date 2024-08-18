import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getChats } from "@/lib/actions";
import { createPusherClient } from "@/lib/pusher";

import InternalSearch from "./Components/Internal/InternalSearch";
import ChatList from "./Components/Internal/ChatList";
import { saveGroup, SearchAction } from "./utils";

function LayoutChat() {
  const { users, chats } = useLoaderData();

  const [initialData, setInitialData] = useState(chats.data);
  const [chatListPusher, setChatListPusher] = useState(initialData);

  async function getChatsList() {
    let newData = await getChats();

    setChatListPusher(newData.data);
  }

  const pusherClient = createPusherClient();

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
          className="h-full w-full rounded-xl bg-[#FBFBFB]"
        >
          <TabsList className="w-full bg-blancoForms pt-6">
            <TabsTrigger
              className="rounded-none border-b-2 bg-transparent p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              value="internal"
            >
              INTERNO
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
          <TabsContent value="internal" className="m-0 h-[92%] overflow-auto">
            <div className="bg-[#f6f6f6] pb-2 pt-6">
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
  const data = await request.formData();
  switch (data.get("type_of_function")) {
    case "1":
      await SearchAction(data);
      break;
    case "2":
      await saveGroup(data);
      break;
  }

  return 1;
}
