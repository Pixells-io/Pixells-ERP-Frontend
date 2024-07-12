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
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import FormCreateDocuments from "../CRM/Clients/FormCreateDocument";
import { storeDocument } from "./utils";
import ModalEditClient from "../CRM/Clients/Forms/ModalEditClient";

const CLIENT_MENU = [
  //{ name: "Home", icon: home, path: "/clients" },
  { name: "Services", icon: cart, path: "/client-platform" },
  { name: "Personal Information", icon: informationCircle, path: "/" },
  /*{ name: "Payment Center", icon: card, path: "/" },
  { name: "Messages", icon: chatbubbles, path: "/" },*/
];

function MainClients() {
  const { data } = useLoaderData();
  const [modalDocument, setModalDocument] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

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
      <div className="flex w-[280px] shrink-0 flex-col gap-4">
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
          <div className="flex items-center gap-4">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="text-sm">client platform &gt; home </div>
          </div>

          {/* top content */}
          <div className="flex flex-col">
            <div>
              <h2 className="font-poppins text-xl font-bold uppercase text-[#44444F]">
                WELCOME {data.user.business_name}
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[#8F8F8F]">
              <div className="text-sm">{data.today}</div>
            </div>
          </div>

          {/* content main */}
          <div className="flex flex-col gap-4 pt-8">
            <div>
              <p className="font-poppins text-[22px] font-bold text-grisHeading">
                Active Services
              </p>
            </div>

            <div className="flex w-full gap-4 overflow-scroll">
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
                      {progress}%
                    </span>
                    <Progress value={service.percent} className="h-1 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full gap-8 overflow-scroll py-8">
            <div className="flex shrink-0 flex-col items-center gap-1">
              <div className="flex items-center justify-center rounded-full bg-grisHeading px-10 py-3 text-white">
                <p className="text-sm font-bold">Interview</p>
              </div>
              <div className="flex items-center gap-1 text-[#D7586B]">
                <span className="text-xs font-medium">1 / 3</span>
                <IonIcon icon={checkmarkCircleOutline}></IonIcon>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-1">
              <div className="flex items-center justify-center rounded-full border border-grisText px-10 py-3 text-grisText">
                <p className="text-sm">Collect Documents</p>
              </div>
              <div className="flex items-center gap-1 text-grisText">
                <span className="text-xs font-medium">0 / 6</span>
                <IonIcon icon={checkmarkCircleOutline}></IonIcon>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-1">
              <div className="flex items-center justify-center rounded-full border border-grisText px-10 py-3 text-grisText">
                <p className="text-sm">Documents Ready</p>
              </div>
              <div className="flex items-center gap-1 text-grisText">
                <span className="text-xs font-medium">1 / 4</span>
                <IonIcon icon={checkmarkCircleOutline}></IonIcon>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-10 rounded-lg bg-blancoBg p-4">
            <div className="flex w-fit gap-4 px-6 text-primarioBotones">
              <div className="flex border-b-2 border-primarioBotones px-4 text-sm">
                <p className="text-sm font-semibold">BUSINESS INFO</p>
              </div>
              <div className="border-b border-grisSubText px-4 text-sm text-grisSubText">
                <p className="text-sm">CONTACT INFO</p>
              </div>
              <div className="border-b border-grisSubText px-4 text-sm text-grisSubText">
                <p className="text-sm">BANK INFO</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex w-96 flex-col gap-4">
                <input
                  type="text"
                  placeholder="Write your business name"
                  className="w-full rounded-none border-0 border-b border-grisSubText bg-transparent !ring-0 !ring-offset-0 focus:border-b-2 focus:border-primarioBotones"
                />
                <input
                  type="text"
                  placeholder="Write your business name"
                  className="w-full rounded-none border-0 border-b border-grisSubText bg-transparent !ring-0 !ring-offset-0 focus:border-b-2 focus:border-primarioBotones"
                />
                <input
                  type="text"
                  placeholder="Write your business name"
                  className="w-full rounded-none border-0 border-b border-grisSubText bg-transparent !ring-0 !ring-offset-0 focus:border-b-2 focus:border-primarioBotones"
                />
                <div className="flex justify-end gap-6 pt-8">
                  <Button
                    variant="outline"
                    className="border-grisSubText px-8 text-grisSubText"
                  >
                    Cancel
                  </Button>
                  <Button className="bg-primarioBotones px-8">Save</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sidebar right  */}
      <div className="ml-4 flex w-[310px] shrink-0 flex-col items-center space-y-4 overflow-scroll rounded-lg bg-gris py-4">
        <div className="flex w-full px-4 pt-4">
          <p className="text-[18px] font-semibold text-grisHeading">GENERAL</p>
        </div>
        <div className="flex w-72 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[28px] font-semibold text-grisHeading">
              DOCUMENTS
            </p>
            <div
              className="text-[30px] font-medium text-primarioBotones"
              onClick={() => setModalDocument(true)}
            >
              +
            </div>
            <div className="text-[12px] font-medium text-grisSubText">
              View All
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {data.document.map((document, i) => (
              <div className="grid grid-cols-4" key={i}>
                <div className="col-span-3 flex items-center gap-2">
                  <div className="h-12 w-12 shrink-0 rounded-lg bg-blancoBg"></div>
                  <div>
                    <p className="font-medium text-grisHeading">
                      {document.name}
                    </p>
                    <span className="line-clamp-none text-[10px] font-medium text-grisSubText">
                      Uplaoded &bull; {format(document.created_at, "PP")}
                    </span>
                  </div>
                </div>
                <div className="col-span-1 self-end pb-1 pl-2">
                  <a
                    target="_blank"
                    href={document.document}
                    className="rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainClients;

export async function Action({ request }) {
  const data = await request.formData();

  if (data.get("type") === "7") {
    console.log("Que onda");
  } else {
    storeDocument(data);
  }

  return 1;
}
