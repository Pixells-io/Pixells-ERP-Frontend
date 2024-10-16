import React, { useState } from "react";

import { Progress } from "@/components/ui/progress";

import { IonIcon } from "@ionic/react";
import {
  cart,
  card,
  informationCircle,
  home,
  chatbubbles,
  chevronBack,
  chevronForward,
  checkmarkCircleOutline,
} from "ionicons/icons";
import { NavLink, useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import FormCreateDocuments from "../CRM/Clients/FormCreateDocument";
import { editClientData, storeDocument, storeRequiredDocument } from "./utils";
import ModalEditClient from "../CRM/Clients/Forms/ModalEditClient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CollectDocumentsClientPlatform from "./Components/CollectDocumentsClientPlatform";
import ReadyDocumentsClientPlatform from "./Components/ReadyDocumentsClientPlatform";
import ClientInterviews from "./Components/ClientInterviews";

function MainClients() {
  const { data } = useLoaderData();
  const [modalDocument, setModalDocument] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  console.log(data);

  return (
    <div className="mt-4 flex h-full px-4 pb-4 font-roboto">
      <FormCreateDocuments
        modal={modalDocument}
        setModal={setModalDocument}
        masterId={data.user?.id}
        url={`/client-platform`}
      />
      <ModalEditClient
        modal={modalEdit}
        setModal={setModalEdit}
        info={data?.user}
        client={data?.user}
        link={`/client-platform`}
      />
      {/* sidebar left */}
      <div className="flex h-screen w-[280px] shrink-0 flex-col gap-4">
        <div className="flex h-full flex-col gap-4 rounded-md bg-gris p-2">
          <p className="px-4 py-4 font-poppins text-lg font-semibold text-grisHeading">
            Menu
          </p>
          <div className="flex flex-col gap-4">
            <NavLink
              to={"/client-platform"}
              className={({ isActive }) =>
                isActive
                  ? "rounded-lg bg-blancoBox px-4 py-1 text-primarioBotones"
                  : "px-4 py-1 text-grisText"
              }
            >
              <div className="flex items-center gap-4">
                <IonIcon icon={cart} size="large"></IonIcon>
                <p className="font-poppins font-semibold">Services</p>
              </div>
            </NavLink>
            <button
              className="px-4 py-1 text-grisText"
              onClick={() => setModalEdit(true)}
              type="button"
            >
              <div className="flex items-center gap-4">
                <IonIcon icon={informationCircle} size="large"></IonIcon>
                <p className="font-poppins font-semibold">
                  Personal Information
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="flex w-full overflow-auto">
        <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
          {/* top content */}
          <div className="flex flex-col">
            <div>
              <h2 className="font-poppins text-xl font-bold uppercase text-[#44444F]">
                WELCOME {data.user?.business_name}
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[#8F8F8F]">
              <div className="text-sm">{data.today}</div>
            </div>
          </div>

          {/* content main */}
          <div className="flex flex-col gap-2 py-2">
            <div>
              <p className="font-poppins text-[22px] font-bold text-grisHeading">
                Active Services
              </p>
            </div>

            <div className="flex w-full gap-4 overflow-scroll py-4">
              {data.services?.map((service, i) => (
                <div
                  className="flex w-44 shrink-0 flex-col gap-2 rounded-2xl bg-blancoBox2 p-3"
                  key={i}
                >
                  <div className="flex w-fit items-center justify-center rounded-full border border-primarioBotones px-3">
                    <span className="text-[10px] font-medium text-primarioBotones">
                      In process
                    </span>
                  </div>
                  <div className="flex w-fit flex-col">
                    <p className="text-sm font-semibold text-grisHeading">
                      {service.name}
                    </p>
                    <span className="line-clamp-none text-xs font-medium text-grisSubText">
                      Service
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-semibold text-grisSubText">
                      {service.percent}%
                    </span>
                    <Progress value={service.percent} className="h-1 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Tabs defaultValue="collect">
            <TabsList className="flex gap-6 bg-transparent pb-4">
              <TabsTrigger
                value="interview"
                className="flex items-center gap-2 rounded-3xl bg-white px-6 py-3 text-grisHeading data-[state=active]:bg-grisHeading data-[state=active]:text-white"
              >
                <p className="flex">Interview</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">1 / 3</span>
                  <IonIcon icon={checkmarkCircleOutline}></IonIcon>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="collect"
                className="flex items-center gap-2 rounded-3xl bg-white px-6 py-3 text-grisHeading data-[state=active]:bg-grisHeading data-[state=active]:text-white"
              >
                <span>Collect Documents</span>
                <div className="flex items-center">
                  <span className="items-center gap-2 text-xs font-medium">
                    {data.pending_documents_count} /{" "}
                    {data.pending_documents_total}
                  </span>
                  &nbsp;
                  <IonIcon icon={checkmarkCircleOutline}></IonIcon>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="ready"
                className="flex items-center gap-2 rounded-3xl bg-white px-6 py-3 text-grisHeading data-[state=active]:bg-grisHeading data-[state=active]:text-white"
              >
                <span>Documents Ready</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">
                    {data.documents_ready_count}
                  </span>
                  &nbsp;
                  <IonIcon icon={checkmarkCircleOutline}></IonIcon>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="interview">
              <ClientInterviews interviews={data.interviews} />
            </TabsContent>
            <TabsContent value="collect">
              <CollectDocumentsClientPlatform
                documents={data.pending_documents}
              />
            </TabsContent>
            <TabsContent value="ready">
              <ReadyDocumentsClientPlatform documents={data.documents_ready} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default MainClients;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("type")) {
    case "7":
      editClientData(data);
      break;
    case "8":
      storeRequiredDocument(data);
      break;

    default:
      storeDocument(data);
      break;
  }

  return 1;
}
