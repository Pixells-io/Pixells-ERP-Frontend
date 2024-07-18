import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FormCreateAdress from "./FormCreateAdress";
import {
  assignInterview,
  deleteAddress,
  deleteContact,
  deleteDocument,
  editAccessInfo,
  editClientInfo,
  storeCustomerAdress,
  storeCustomerContacts,
  storeCustomerDocuments,
} from "./utils";
import FormCreateContacts from "./FormCreateContacts";
import FormCreateDocuments from "./FormCreateDocument";
import { IonIcon } from "@ionic/react";
import {
  cashOutline,
  createOutline,
  keyOutline,
  trashOutline,
} from "ionicons/icons";
import ClientServicesTable from "./Tables/ClientServicesTable";
import ModalDestroyAddress from "./Forms/ModalDestroyAddress";
import ModalDestroyContacts from "./Forms/ModalDestroyContact";
import ModalDestroyDocuments from "./Forms/ModalDestroyDocuments";
import ModalEditClient from "./Forms/ModalEditClient";
import ModalClientAccess from "./Forms/ModalClientAccess";
import AssignInterviewModal from "./Forms/ModalAssignInterviewClient";

function MainClient() {
  const { data } = useLoaderData();
  const client = data[0];

  const [modalAdress, setModalAdress] = useState(false);
  const [modalContact, setModalContact] = useState(false);
  const [modalDocument, setModalDocument] = useState(false);

  //States Destroy
  const [addressId, setAddressId] = useState(false);
  const [modalDestroyAddress, setModalDestroyAddress] = useState(false);
  const [contactsId, setContactsId] = useState(false);
  const [modalDestroyContacts, setModalDestroyContacts] = useState(false);
  const [documentsId, setDocumentsId] = useState(false);
  const [modalDestroyDocuments, setModalDestroyDocuments] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalAssignInterview, setModalAssignInterview] = useState(false);

  //States edit login info
  const [accessModal, setAccessModal] = useState(false);

  function openModalDestroyAddress(id) {
    setAddressId(id);
    setModalDestroyAddress(true);
  }

  function openModalDestroyContacts(id) {
    setContactsId(id);
    setModalDestroyContacts(true);
  }

  function openModalDestroyDocuments(id) {
    setDocumentsId(id);
    setModalDestroyDocuments(true);
  }

  return (
    <>
      <FormCreateAdress
        modal={modalAdress}
        setModal={setModalAdress}
        masterId={client?.master?.id}
      />
      <FormCreateContacts
        modal={modalContact}
        setModal={setModalContact}
        masterId={client?.master?.id}
      />
      <FormCreateDocuments
        modal={modalDocument}
        setModal={setModalDocument}
        masterId={client?.master?.id}
        url={`/crm/client/${client?.master?.id}`}
      />
      <ModalDestroyAddress
        modal={modalDestroyAddress}
        setModal={setModalDestroyAddress}
        addressId={addressId}
        masterId={client?.master?.id}
      />
      <ModalDestroyContacts
        modal={modalDestroyContacts}
        setModal={setModalDestroyContacts}
        contactId={contactsId}
        masterId={client?.master?.id}
      />
      <ModalDestroyDocuments
        modal={modalDestroyDocuments}
        setModal={setModalDestroyDocuments}
        documentId={documentsId}
        masterId={client?.master?.id}
      />
      <ModalEditClient
        modal={modalEdit}
        setModal={setModalEdit}
        info={client?.info}
        client={client?.master}
        link={`/crm/client/${client?.master?.id}`}
      />
      <ModalClientAccess
        modal={accessModal}
        setModal={setAccessModal}
        client_id={client?.master?.id}
        email={client?.info?.email}
      />
      <AssignInterviewModal
        modal={modalAssignInterview}
        setModal={setModalAssignInterview}
        client_id={client?.master?.id}
        select={client?.interviews_select}
      />
      <div className="flex w-full overflow-auto">
        <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gradient-to-b from-indigo-100 px-8 py-8">
          <span className="font-poppins text-2xl font-bold uppercase text-grisHeading">
            CLIENT INFORMATION - {client?.info?.business_name}
          </span>
          <div className="flex gap-10">
            <div className="flex">
              <IonIcon
                icon={cashOutline}
                className="rounded-lg border-2 border-grisHeading p-2 text-5xl text-grisHeading"
              />
              <div className="ml-4 mt-1">
                <span className="font-poppins text-2xl font-bold text-grisHeading">
                  $ {client?.sales_record} USD
                </span>
                <br />
                <span className="font-roboto text-sm font-medium text-grisHeading">
                  SALES RECORD
                </span>
              </div>
            </div>
            <div className="flex">
              <IonIcon
                icon={cashOutline}
                className="rounded-lg border-2 border-grisHeading p-2 text-5xl text-grisHeading"
              />
              <div className="ml-4 mt-1">
                <span className="font-poppins text-2xl font-bold text-grisHeading">
                  $ {client?.monthly_record} USD
                </span>
                <br />
                <span className="font-roboto text-sm font-medium text-grisHeading">
                  MONTHLY SALES
                </span>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <span className="font-poppins text-xl font-semibold text-grisHeading">
              SERVICES
            </span>
            <div className="mt-4">
              <ClientServicesTable services={client?.services_table} />
            </div>
          </div>
        </div>
      </div>

      {/* right sidebar */}
      <div className="ml-4 flex h-full w-[310px] shrink-0 flex-col items-center space-y-4 overflow-scroll rounded-lg bg-gris py-4">
        <div className="flex max-h-[306px] w-72 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
          <div className="flex gap-6">
            <div>
              <p className="text-[16px] font-medium text-grisText">Name</p>
              <span className="text-[10px] font-medium text-grisSubText">
                {client?.info?.business_name}
              </span>
            </div>
            <div>
              <Avatar>
                <AvatarImage src="https://demoback.pixells.io/images/r.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="self-center">
              <IonIcon
                icon={createOutline}
                className="text-grisHeading"
                onClick={() => setModalEdit(true)}
              />
            </div>
            <div className="self-center">
              {client.info.password === null ? (
                <IonIcon
                  icon={keyOutline}
                  className="text-grisHeading"
                  onClick={() => setAccessModal(true)}
                />
              ) : (
                <IonIcon
                  icon={keyOutline}
                  className="text-green-600"
                  onClick={() => setAccessModal(true)}
                />
              )}
            </div>
          </div>

          <div className="flex gap-6">
            <p className="text-[16px] font-medium text-grisText">Address</p>
            <button
              className="mt-[-10px] text-[30px] font-medium text-primarioBotones"
              onClick={setModalAdress}
            >
              +
            </button>
          </div>
          <div className="flex flex-col gap-3 overflow-y-scroll">
            {client?.adress?.map((adress, i) => (
              <div className="flex flex-col" key={i}>
                <div className="flex items-center justify-between">
                  <span className="w-7/12 text-[10px] font-medium text-grisSubText">
                    {adress.street}.{adress.ext}, {adress.int}, {adress.city},
                    {adress.state}, <br />
                    {adress.country} {adress.cp}
                  </span>
                  {adress.primary === 1 && (
                    <span className="rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading">
                      Primary
                    </span>
                  )}
                  <IonIcon
                    icon={trashOutline}
                    className="text-grisHeading"
                    onClick={() => openModalDestroyAddress(adress.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex max-h-[226px] w-72 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
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

          <div className="flex flex-col gap-3 overflow-y-scroll">
            {client?.contact?.map((contact, i) => (
              <div className="flex flex-col" key={i}>
                <div className="flex items-center justify-between">
                  <p className="w-7/12 text-sm text-grisText">
                    {contact.name} {contact.middle_name} {contact.last_name}{" "}
                  </p>
                  {contact.primary === 1 && (
                    <span className="rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading">
                      Primary
                    </span>
                  )}
                  <IonIcon
                    icon={trashOutline}
                    className="text-grisHeading"
                    onClick={() => openModalDestroyContacts(contact.id)}
                  />
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
            <div className="flex items-center justify-between gap-8">
              <p className="text-[22px] font-semibold text-grisHeading">
                INTERVIEWS
              </p>
              <button
                className="text-[30px] font-medium text-primarioBotones"
                onClick={setModalAssignInterview}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 overflow-y-scroll">
            {client?.interviews_assigned.map((interview, i) => (
              <div className="flex w-full justify-between" key={i}>
                <div className="col-span-3 flex items-center gap-2">
                  <div>
                    <p className="truncate font-medium text-grisHeading">
                      {interview.title}
                    </p>
                    <span className="line-clamp-none text-[10px] font-medium text-grisSubText">
                      Created &bull; {interview.created}
                    </span>
                  </div>
                </div>
                <div className="flex h-fit gap-2 self-end">
                  <div className="col-span-1 flex h-fit pb-1 pl-2">
                    <button
                      type="button"
                      className="flex rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading"
                      onClick={() =>
                        openShowInterview(
                          interview.id,
                          interview.title,
                          interview.questions,
                        )
                      }
                    >
                      Show
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex max-h-[385px] w-72 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
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

          <div className="flex flex-col gap-3 overflow-y-scroll">
            {client?.documents?.map((document, i) => (
              <div className="flex w-full justify-between" key={i}>
                <div className="col-span-3 flex items-center gap-2">
                  <div className="h-12 w-12 shrink-0 rounded-lg bg-blancoBg">
                    {/* 
                    <iframe
                      src={document?.document}
                      frameBorder="0"
                      className="flex"
                    ></iframe>
                   */}
                  </div>
                  <div>
                    <p className="truncate font-medium text-grisHeading">
                      {document.name}
                    </p>
                    <span className="line-clamp-none text-[10px] font-medium text-grisSubText">
                      Uplaoded &bull; {document.created}
                    </span>
                  </div>
                </div>
                <div className="flex h-fit gap-2 self-end">
                  <div className="col-span-1 flex h-fit pb-1 pl-2">
                    <a
                      target="_blank"
                      href={document.document}
                      className="flex rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading"
                    >
                      Download
                    </a>
                  </div>
                  <div className="flex h-fit text-center">
                    <IonIcon
                      icon={trashOutline}
                      className="text-center text-grisHeading"
                      onClick={() => openModalDestroyDocuments(document.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex max-h-[385px] w-72 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[22px] font-semibold text-grisHeading">
              COLLECT DOCUMENTS
            </p>
          </div>

          <div className="flex flex-col gap-3 overflow-y-scroll">
            {client?.collect_documents?.map((document, i) => (
              <div className="flex w-full justify-between" key={i}>
                <div className="col-span-3 flex items-center gap-2">
                  <div className="h-12 w-12 shrink-0 rounded-lg bg-blancoBg"></div>
                  <div>
                    <p className="truncate font-medium text-grisHeading">
                      {document.name}
                    </p>
                    <span className="line-clamp-none text-[10px] font-medium text-grisSubText">
                      Uplaoded &bull; {document.created}
                    </span>
                  </div>
                </div>
                <div className="flex h-fit gap-2 self-end">
                  <div className="col-span-1 flex h-fit pb-1 pl-2">
                    <a
                      target="_blank"
                      href={document.document_url}
                      className="flex rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading"
                    >
                      Download
                    </a>
                  </div>
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
                <p className="text-[12px] text-grisText">
                  {client?.last_service_month}
                </p>
                <span className="text-2xl font-bold text-grisText">
                  {client?.last_service_day}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-grisText">Last Service</p>
                <span className="text-[10px] font-medium text-grisSubText">
                  {client?.last_service_name}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-blancoBox">
                <p className="text-[12px] text-grisText">
                  {client?.last_update_month}
                </p>
                <span className="text-2xl font-bold text-grisText">
                  {client?.last_update_day}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-grisText">Last Update</p>
                <span className="text-[10px] font-medium text-grisSubText">
                  Documents Uploaded
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
    case "4":
      deleteAddress(data);
      break;
    case "5":
      deleteContact(data);
      break;
    case "6":
      deleteDocument(data);
      break;
    case "7":
      editClientInfo(data);
      break;
    case "8":
      editAccessInfo(data);
      break;
    case "9":
      assignInterview(data);
      break;
  }

  return 1;
}
