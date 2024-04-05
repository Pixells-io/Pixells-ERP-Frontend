import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmailContent from "./EmailContent";

function EmailConsole() {
  return (
    <div className="flex justify-center bg-blancoBg h-full rounded-xl overflow-auto p-4">
      <Tabs defaultValue="inbox" className="w-full">
        <div className="grid grid-cols-12 w-full h-full">
          <TabsList className="col-span-2 flex flex-col gap-2 justify-normal bg-transparent h-full ">
            <div className="flex flex-col gap-2 border-r pr-2 h-full">
              <TabsTrigger value="inbox">Inbox</TabsTrigger>
              <TabsTrigger value="sent">Sent</TabsTrigger>
              <TabsTrigger value="starred">Starred</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="spam">Spam</TabsTrigger>
              <TabsTrigger value="trash">Trash</TabsTrigger>
            </div>
          </TabsList>
          <TabsContent
            value="inbox"
            className="col-span-10 overflow-scroll h-full"
          >
            <EmailContent />
          </TabsContent>
          <TabsContent value="sent" className="col-span-10">
            Sent here.
          </TabsContent>
          <TabsContent value="starred" className="col-span-10">
            Starred here.
          </TabsContent>
          <TabsContent value="draft" className="col-span-10">
            Draft here.
          </TabsContent>
          <TabsContent value="spam" className="col-span-10">
            Spam here.
          </TabsContent>
          <TabsContent value="trash" className="col-span-10">
            Trash here.
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default EmailConsole;

<div className="grid grid-cols-12 w-full">
  <div className="col-span-2 flex flex-col gap-2">
    {/* console buttons */}
    <div>
      <p>Inbox</p>
    </div>
    <div>
      <p>Sent</p>
    </div>
    <div>
      <p>Starred</p>
    </div>
    <div>
      <p>Draft</p>
    </div>
    <div>
      <p>Spam</p>
    </div>
    <div>
      <p>Trash</p>
    </div>
  </div>

  <div className="col-span-10">hola</div>
</div>;
