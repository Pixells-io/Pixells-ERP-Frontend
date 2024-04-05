import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmailContent from "./EmailContent";

import {
  createOutline,
  mailUnreadOutline,
  sendOutline,
  shieldCheckmarkOutline,
  starOutline,
  trashOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const TABS = [
  { id: 1, name: "inbox", icon: mailUnreadOutline },
  { id: 2, name: "sent", icon: sendOutline },
  { id: 3, name: "starred", icon: starOutline },
  { id: 4, name: "draft", icon: createOutline },
  { id: 5, name: "spam", icon: shieldCheckmarkOutline },
  { id: 6, name: "trash", icon: trashOutline },
];

function EmailConsole() {
  return (
    <div className="flex justify-center bg-blancoBg h-full rounded-xl overflow-auto p-4">
      <Tabs defaultValue="inbox" className="w-full">
        <div className="grid grid-cols-12 w-full h-full">
          <TabsList className="col-span-2 flex flex-col gap-2 justify-normal bg-transparent h-full">
            <div className="flex flex-col gap-2 border-r pr-2 h-full ">
              {TABS?.map((tab, i) => (
                <TabsTrigger
                  key={i}
                  value={tab.name}
                  className="text-sm text-grisText data-[state=active]:bg-blancoBox data-[state=active]:sm-none data-[state=active]:text-primarioBotones"
                >
                  <div className="flex pl-3 gap-2 items-center w-24">
                    <IonIcon icon={tab.icon} className="h-8 w-8"></IonIcon>
                    <p className="w-full text-left">
                      {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
                    </p>
                  </div>
                </TabsTrigger>
              ))}
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
