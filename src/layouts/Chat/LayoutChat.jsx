import React from "react";

import { Outlet, useLoaderData } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InternalSearch from "./Components/Internal/InternalSearch";
import ChatList from "./Components/Internal/ChatList";

function LayoutChat() {

  const { users, chats } = useLoaderData();

  console.log(chats);

  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      <div className="flex flex-col rounded-xl bg-gris gap-4 w-[450px] shrink-0">
        {/* top block */}
        <Tabs defaultValue="internal" className="w-full h-full pt-6">
            <TabsList className="bg-transparent w-full mb-3">
                <TabsTrigger className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones bg-transparent data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3" value="internal">INTERNAL</TabsTrigger>
                <TabsTrigger className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3" value="whatsapp">WHATSAPP</TabsTrigger>
                <TabsTrigger className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:bg-transparent data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3" value="meta">META</TabsTrigger>
            </TabsList>
            <TabsContent value="internal" className="h-full">
                <InternalSearch 
                  users={users.data}
                />
                <div className="py-3 my-3 h-full px-10 bg-[#FBFBFB]">
                  <ChatList/>
                </div>
            </TabsContent>
            <TabsContent value="whatsapp">
                <span>Es</span>
            </TabsContent>
            <TabsContent value="meta">
                <span>Puto</span>
            </TabsContent>
        </Tabs>
      </div>
      <Outlet />
    </div>
  );
}

export default LayoutChat;
