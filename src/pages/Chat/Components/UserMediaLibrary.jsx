import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IonIcon } from "@ionic/react";
import { chevronBack } from "ionicons/icons";

import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import MediaImages from "./MediaImages";
import MediaDocuments from "./MediaDocument";

function UserMediaLibrary({ participant }) {
  const { data } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col overflow-auto rounded-xl bg-[#FBFBFB] px-4 pb-4">
      <div className="flex items-center">
        <div className="flex w-10 justify-center">
          <IonIcon
            src={chevronBack}
            className="size-8 rounded text-grisText hover:cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="flex flex-col gap-2 rounded-t-xl px-6 py-4">
          <div className="flex items-center gap-4">
            <img src={data.img} className="h-14 w-14 rounded-full" />
            <div>
              <span className="text-xs font-semibold text-grisText">
                {data.name}
              </span>
              <p className="text-xs font-light text-grisText">Media Library</p>
            </div>
          </div>
        </div>
      </div>
      <Tabs
        defaultValue="information"
        className="ml-10 rounded-lg bg-inherit px-6 pt-2"
      >
        <TabsList className="flex w-fit gap-x-4 rounded-none bg-inherit px-0">
          <TabsTrigger
            value="information"
            className="rounded-3xl border-[1px] border-[#D9D9D9] px-4 text-xs font-light text-[#44444F] data-[state=active]:border-[#44444F] data-[state=active]:bg-grisBg data-[state=active]:font-normal data-[state=active]:shadow-none"
          >
            Information
          </TabsTrigger>
          <TabsTrigger
            value="images"
            className="rounded-3xl border-[1px] border-[#D9D9D9] px-4 text-xs font-light text-[#44444F] data-[state=active]:border-[#44444F] data-[state=active]:bg-grisBg data-[state=active]:font-normal data-[state=active]:shadow-none"
          >
            Images
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="rounded-3xl border-[1px] border-[#D9D9D9] px-4 text-xs font-light text-[#44444F] data-[state=active]:border-[#44444F] data-[state=active]:bg-grisBg data-[state=active]:font-normal data-[state=active]:shadow-none"
          >
            Documents
          </TabsTrigger>
          <TabsTrigger
            value="links"
            className="rounded-3xl border-[1px] border-[#D9D9D9] px-4 text-xs font-light text-[#44444F] data-[state=active]:border-[#44444F] data-[state=active]:bg-grisBg data-[state=active]:font-normal data-[state=active]:shadow-none"
          >
            Links
          </TabsTrigger>
        </TabsList>
        <TabsContent value="information"></TabsContent>
        <TabsContent value="images">
          {/* 
          <MediaImages chat={chat} />*/}
        </TabsContent>
        <TabsContent value="documents">
          <MediaDocuments />
        </TabsContent>
        <TabsContent value="links"></TabsContent>
      </Tabs>
    </div>
  );
}

export default UserMediaLibrary;
