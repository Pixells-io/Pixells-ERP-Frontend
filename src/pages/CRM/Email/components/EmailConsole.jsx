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

function EmailConsole({ data }) {
  return (
    <div className="flex h-full justify-center overflow-auto rounded-xl bg-blancoBg p-4">
      <Tabs defaultValue="inbox" className="w-full">
        <div className="grid h-full w-full grid-cols-12">
          <TabsList className="col-span-2 flex h-full flex-col justify-normal gap-2 bg-transparent">
            <div className="flex h-full flex-col items-center gap-2 pr-2">
              {TABS?.map((tab, i) => (
                <TabsTrigger
                  key={i}
                  value={tab.name}
                  className="data-[state=active]:sm-none py-1 text-sm font-normal text-grisText data-[state=active]:bg-blancoBox data-[state=active]:font-semibold data-[state=active]:text-primarioBotones"
                >
                  <div className="flex w-24 items-center gap-2 pl-3">
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
            className="col-span-10 h-full overflow-scroll"
          >
            <EmailContent data={data} />
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
