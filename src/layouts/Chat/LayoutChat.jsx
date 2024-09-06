import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getChats } from "@/lib/actions";
import { createPusherClient } from "@/lib/pusher";

import InternalSearch from "./Components/Internal/InternalSearch";
import ChatList from "./Components/Internal/ChatList";
import { saveGroup, SearchAction } from "./utils";

function LayoutChat() {
  const { users, chats } = useLoaderData();
  const params = useParams();
  const [mobileState, setMobileState] = useState("");

  const [chatListPusher, setChatListPusher] = useState(chatOrder(chats?.data));

  async function getChatsList() {
    let newData = await getChats();
    setChatListPusher(chatOrder(newData?.data));
  }

  const pusherClient = createPusherClient();

  useEffect(() => {
    setMobileState(params?.id ? "hidden" : "flex");
  }, [params]);

  useEffect(() => {
    pusherClient.subscribe("private-get-chat-list");

    pusherClient.bind("fill-chat-list", ({ list }) => {
      getChatsList();
    });

    return () => {
      pusherClient.unsubscribe("private-get-chat-list");
    };
  }, []);

  function chatOrder(data) {
    return data?.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div
        className={
          "w-full max-w-[450px] shrink-0 flex-col gap-4 rounded-xl md:flex" +
          " " +
          mobileState
        }
      >
        {/* top block */}
        <Tabs
          defaultValue="internal"
          className="h-full w-full rounded-xl bg-[#f6f6f6]"
        >
          <TabsList className="w-full rounded-tr-xl bg-blancoForms pb-7 pt-4">
            <TabsTrigger
              className="rounded-none border-b-2 bg-transparent p-3 pb-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              value="internal"
            >
              INTERNO
            </TabsTrigger>
            {/* <TabsTrigger
              className="rounded-none border-b-2 bg-transparent p-3 pb-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              value="whatsapp"
            >
              WHATSAPP
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none border-b-2 bg-transparent p-3 pb-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              value="meta"
            >
              META
            </TabsTrigger> */}
          </TabsList>
          <TabsContent value="internal" className="m-0 flex h-[92%] flex-col">
            <div className="pt- bg-[#f6f6f6] pb-2">
              <InternalSearch users={users?.data} />
            </div>
            <div className="mx-2 my-4 h-auto overflow-auto rounded-b-md bg-[#fbfbfb]">
              {chatListPusher?.map((chat, i) => (
                <ChatList chat={chat} key={i} />
              ))}
            </div>
          </TabsContent>
          {/* <TabsContent value="whatsapp"></TabsContent>
          <TabsContent value="meta"></TabsContent> */}
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
