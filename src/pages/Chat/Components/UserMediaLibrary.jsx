import React, { useState } from "react";
import { redirect, useLoaderData, useNavigate } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IonIcon } from "@ionic/react";
import { chevronBack } from "ionicons/icons";

import {
  addParticipantChat,
  deleteChatGroup,
  editGroupChat,
  removeParticipantChat,
} from "../utils";

import MediaImages from "./MediaImages";
import MediaDocuments from "./MediaDocument";
import MediaInformations from "./MediaInformations";
import MediaLinks from "./MediaLinks";
import ModalEditChat from "./ModalEditChat";

function UserMediaLibrary() {
  const navigate = useNavigate();
  const {
    chatInfo: { data },
    users,
  } = useLoaderData();

  const [images, setImages] = useState(
    data.documents.filter((document) => {
      let extension = document.document.split(".");
      return ["jpg", "jpeg", "png"].includes(extension.pop());
    }),
  );

  const [documents, setDocuments] = useState(
    data.documents.filter((document) => {
      let extension = document.document.split(".");
      return ["pdf", "csv", "xls", "docx", "txt"].includes(extension.pop());
    }),
  );

  return (
    <div className="ml-4 flex h-full w-full flex-col overflow-auto rounded-xl bg-[#FBFBFB]">
      <div className="flex items-center">
        <div className="flex w-10 shrink-0 justify-center">
          <IonIcon
            src={chevronBack}
            className="size-8 rounded text-grisText hover:cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="flex shrink-0 flex-col gap-2 rounded-t-xl px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src={data.img}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <span className="text-xs font-semibold text-grisText">
                {data.name}
              </span>
              <p className="text-xs font-light text-grisText">Media Library</p>
            </div>
          </div>
        </div>
        {data.is_admin == 1 && (
          <div className="flex w-full justify-end pr-14">
            <ModalEditChat chat_id={data.id} data={data} />
          </div>
        )}
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
            Información
          </TabsTrigger>
          <TabsTrigger
            value="images"
            className="rounded-3xl border-[1px] border-[#D9D9D9] px-4 text-xs font-light text-[#44444F] data-[state=active]:border-[#44444F] data-[state=active]:bg-grisBg data-[state=active]:font-normal data-[state=active]:shadow-none"
          >
            Imágenes
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="rounded-3xl border-[1px] border-[#D9D9D9] px-4 text-xs font-light text-[#44444F] data-[state=active]:border-[#44444F] data-[state=active]:bg-grisBg data-[state=active]:font-normal data-[state=active]:shadow-none"
          >
            Documentos
          </TabsTrigger>
          <TabsTrigger
            value="links"
            className="rounded-3xl border-[1px] border-[#D9D9D9] px-4 text-xs font-light text-[#44444F] data-[state=active]:border-[#44444F] data-[state=active]:bg-grisBg data-[state=active]:font-normal data-[state=active]:shadow-none"
          >
            Links
          </TabsTrigger>
        </TabsList>
        <TabsContent value="information">
          <MediaInformations data={data} users={users} />
        </TabsContent>
        <TabsContent value="images">
          <MediaImages images={images} />
        </TabsContent>
        <TabsContent value="documents">
          <MediaDocuments documents={documents} />
        </TabsContent>
        <TabsContent value="links">
          <MediaLinks links={data.msg} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default UserMediaLibrary;

export async function action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "edit-group":
      await editGroupChat(data);
      return "1";

    case "remove-participant":
      await removeParticipantChat(data);
      return "1";

    case "add-participant":
      await addParticipantChat(data);
      return "1";

    case "delete-group":
      await deleteChatGroup(data);
      return redirect("/chat");
  }

  return "1";
}
