import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FormCreateAdress from "./FormCreateAdress";
import {
  storeCustomerAdress,
  storeCustomerContacts,
  storeCustomerDocuments,
} from "./utils";
import FormCreateContacts from "./FormCreateContacts";
import FormCreateDocuments from "./FormCreateDocument";

function MainClient() {
  const { data } = useLoaderData();
  const client = data[0];

  const [modalAdress, setModalAdress] = useState(false);
  const [modalContact, setModalContact] = useState(false);
  const [modalDocument, setModalDocument] = useState(false);

  console.log(client);

  return (
    <>
      <FormCreateAdress
        modal={modalAdress}
        setModal={setModalAdress}
        masterId={client?.master.id}
      />
      <FormCreateContacts
        modal={modalContact}
        setModal={setModalContact}
        masterId={client?.master.id}
      />
      <FormCreateDocuments
        modal={modalDocument}
        setModal={setModalDocument}
        masterId={client?.master.id}
      />
      <div className="flex w-full overflow-auto">
        <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4"></div>
      </div>

      {/* right sidebar */}
      <div className="ml-4 flex w-[310px] shrink-0 flex-col items-center space-y-4 overflow-scroll rounded-lg bg-gris py-4">
        <div className="flex w-72 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
          <div className="flex gap-6">
            <div>
              <p className="text-[16px] font-medium text-grisText">Name</p>
              <span className="text-[10px] font-medium text-grisSubText">
                {client?.info.business_name}
              </span>
            </div>
            <div>
              <Avatar>
                <AvatarImage src="https://demoback.pixells.io/images/r.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-6">
              <p className="text-[16px] font-medium text-grisText">Address</p>
              <button
                className="mt-[-10px] text-[30px] font-medium text-primarioBotones"
                onClick={setModalAdress}
              >
                +
              </button>
            </div>
            {client?.adress.map((adress, i) => (
              <div className="flex items-center justify-between" key={i}>
                <span className="text-[10px] font-medium text-grisSubText">
                  {adress.street}.{adress.ext}, {adress.int}, {adress.city}, 
                  {adress.state}, <br />
                  {adress.country} {adress.cp}
                </span>
                {adress.primary === 1 && (
                  <span className="rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading">
                    Primary
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-72 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[22px] font-semibold text-grisHeading">
              CONTACTS
            </p>
            <button
              className="text-[30px] font-medium text-primarioBotones"
              onClick={setModalContact}
            >
              +
            </button>
            <div className="text-[12px] font-medium text-grisSubText">
              View All
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {client?.contact.map((contact, i) => (
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-grisText">
                    {contact.name} {contact.middle_name} {contact.last_name}{" "}
                  </p>
                  {contact.primary === 1 && (
                    <span className="rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading">
                      Primary
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-grisSubText">
                  <span> {contact.mail} </span>
                  <span>&bull;</span>
                  <span> {contact.position} </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-72 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[22px] font-semibold text-grisHeading">
              DOCUMENTS
            </p>
            <button
              className="text-[30px] font-medium text-primarioBotones"
              onClick={setModalDocument}
            >
              +
            </button>
            <div className="text-[12px] font-medium text-grisSubText">
              View All
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {client?.documents.map((document, i) => (
              <div className="grid grid-cols-4">
                <div className="col-span-3 flex items-center gap-2">
                  <div className="h-12 w-12 shrink-0 rounded-lg bg-blancoBg"></div>
                  <div>
                    <p className="font-medium text-grisHeading">
                      {document.name}
                    </p>
                    <span className="line-clamp-none text-[10px] font-medium text-grisSubText">
                      Uplaoded &bull; {document.created}
                    </span>
                  </div>
                </div>
                <div className="col-span-1 self-end pb-1 pl-2">
                  <span className="rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading">
                    Download
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-72 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[22px] font-semibold text-grisHeading">
              GENERAL STATUS
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-blancoBox">
                <p className="text-[12px] text-grisText">Dic</p>
                <span className="text-2xl font-bold text-grisText">05</span>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-grisText">Last Service</p>
                <span className="text-[10px] font-medium text-grisSubText">
                  Immigration for Larissa
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-blancoBox">
                <p className="text-[12px] text-grisText">Dic</p>
                <span className="text-2xl font-bold text-grisText">19</span>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-grisText">Last Update</p>
                <span className="text-[10px] font-medium text-grisSubText">
                  Walter Robledo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainClient;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("type")) {
    case "1":
      storeCustomerAdress(data);
      break;
    case "2":
      storeCustomerContacts(data);
      break;
    case "3":
      storeCustomerDocuments(data);
      break;
  }

  return 1;
}
