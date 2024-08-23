import React, { useEffect, useState } from "react";
import { redirect, useLoaderData, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FormCreateAdress from "./FormCreateAdress";
import {
  assignInterview,
  changeStatusClient,
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
import { addCommentClient, addSalePay } from "../Progress/util";
import FormShowInterview from "./FormShowInterview";
import { createPusherClient } from "@/lib/pusher";
import { getClient } from "@/lib/actions";

function MainClient() {
  const { data } = useLoaderData();
  const [cliente, setDatClient] = useState(data);
  const params = useParams();

  const pusherClient = createPusherClient();

  //WEB SOCKET
  async function getClientDataBack(id) {
    const newData = await getClient({ params });
    setDatClient(newData.data);
  }

  useEffect(() => {
    let channel = pusherClient.subscribe(`get-client.${cliente.master.id}`);

    channel.bind("fill-client-info", ({ client }) => {
      getClientDataBack(client);
    });

    return () => {
      pusherClient.unsubscribe(`get-client.${cliente.master.id}`);
    };
  });

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

  //States show interview
  const [showInterview, setShowInterview] = useState(false);
  const [interviewData, setInterviewData] = useState(false);

  function openModalShowInterview(interview) {
    setInterviewData(interview);
    setShowInterview(true);
  }

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
        masterId={cliente?.master?.id}
      />
      <FormCreateContacts
        modal={modalContact}
        setModal={setModalContact}
        masterId={cliente?.master?.id}
      />
      <FormCreateDocuments
        modal={modalDocument}
        setModal={setModalDocument}
        masterId={cliente?.master?.id}
        url={`/crm/client/${cliente?.master?.id}`}
      />
      <ModalDestroyAddress
        modal={modalDestroyAddress}
        setModal={setModalDestroyAddress}
        addressId={addressId}
        masterId={cliente?.master?.id}
      />
      <ModalDestroyContacts
        modal={modalDestroyContacts}
        setModal={setModalDestroyContacts}
        contactId={contactsId}
        masterId={cliente?.master?.id}
      />
      <ModalDestroyDocuments
        modal={modalDestroyDocuments}
        setModal={setModalDestroyDocuments}
        documentId={documentsId}
        masterId={cliente?.master?.id}
      />
      <ModalEditClient
        modal={modalEdit}
        setModal={setModalEdit}
        info={cliente?.info}
        client={cliente?.master}
        link={`/crm/client/${cliente?.master?.id}`}
      />
      <ModalClientAccess
        modal={accessModal}
        setModal={setAccessModal}
        client_id={cliente?.master?.id}
        email={cliente?.info?.email}
      />
      <AssignInterviewModal
        modal={modalAssignInterview}
        setModal={setModalAssignInterview}
        client_id={cliente?.master?.id}
        select={cliente?.interviews_select}
      />
      <FormShowInterview
        modal={showInterview}
        setModal={setShowInterview}
        interview={interviewData}
      />
      <div className="flex w-full overflow-auto">
        <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gradient-to-b from-indigo-100 px-8 py-8">
          <span className="font-poppins text-2xl font-bold uppercase text-grisHeading">
            INFORMACION - {cliente?.info?.business_name}
          </span>
          <div className="flex gap-10">
            <div className="flex">
              <IonIcon
                icon={cashOutline}
                className="rounded-lg border-2 border-grisHeading p-2 text-5xl text-grisHeading"
              />
              <div className="ml-4 mt-1">
                <span className="font-poppins text-2xl font-bold text-grisHeading">
                  $ {cliente?.sales_record} MXN
                </span>
                <br />
                <span className="font-roboto text-sm font-medium text-grisHeading">
                  Ventas Totales
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
                  $ {cliente?.monthly_record} MXN
                </span>
                <br />
                <span className="font-roboto text-sm font-medium text-grisHeading">
                  Ventas Mensuales
                </span>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <span className="font-poppins text-xl font-semibold text-grisHeading">
              SERVICIOS
            </span>
            <div className="mt-4">
              <ClientServicesTable services={cliente?.services_table} />
            </div>
          </div>
        </div>
      </div>

      {/* right sidebar */}
      <div className="ml-4 flex h-full w-[310px] shrink-0 flex-col items-center space-y-4 overflow-scroll rounded-lg bg-gris py-4">
        <div className="flex max-h-[306px] w-72 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
          <div className="flex gap-6">
            <div>
              <p className="text-[16px] font-medium text-grisText">Nombre</p>
              <span className="text-[10px] font-medium text-grisSubText">
                {cliente?.info?.business_name}
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
              {cliente.info.password === null ? (
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
            <p className="text-[16px] font-medium text-grisText">Domicilio</p>
            <button
              className="mt-[-10px] text-[30px] font-medium text-primarioBotones"
              onClick={setModalAdress}
            >
              +
            </button>
          </div>
          <div className="flex flex-col gap-3 overflow-y-scroll">
            {cliente?.adress?.map((adress, i) => (
              <div className="flex flex-col" key={i}>
                <div className="flex items-center justify-between">
                  <span className="w-7/12 text-[10px] font-medium text-grisSubText">
                    {adress.street}.{adress.ext}, {adress.int}, {adress.city},
                    {adress.state}, <br />
                    {adress.country} {adress.cp}
                  </span>
                  {adress.primary === 1 && (
                    <span className="rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading">
                      Primario
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
              CONTACTOS
            </p>
            <button
              className="text-[30px] font-medium text-primarioBotones"
              onClick={setModalContact}
            >
              +
            </button>
            <div className="text-[12px] font-medium text-grisSubText">
              Ver todos
            </div>
          </div>

          <div className="flex flex-col gap-3 overflow-y-scroll">
            {cliente?.contact?.map((contact, i) => (
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
                FORMULARIOS
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
            {cliente?.interviews_assigned.map((interview, i) => (
              <div className="flex w-full justify-between" key={i}>
                <div className="col-span-3 flex items-center gap-2">
                  <div>
                    <p className="truncate font-medium text-grisHeading">
                      {interview.title}
                    </p>
                    <span className="line-clamp-none text-[10px] font-medium text-grisSubText">
                      Creado &bull; {interview.created}
                    </span>
                  </div>
                </div>
                <div className="flex h-fit gap-2 self-end">
                  <div className="col-span-1 flex h-fit pb-1 pl-2">
                    <button
                      type="button"
                      className="flex rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading"
                      onClick={() => openModalShowInterview(interview)}
                    >
                      Ver
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
              DOCUMENTOS
            </p>
            <button
              className="text-[30px] font-medium text-primarioBotones"
              onClick={setModalDocument}
            >
              +
            </button>
            <div className="text-[12px] font-medium text-grisSubText">
              Ver Todos
            </div>
          </div>

          <div className="flex flex-col gap-3 overflow-y-scroll">
            {cliente?.documents?.map((document, i) => (
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
                      Subido &bull; {document.created}
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
                      Descargar
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
              SOLICITAR DOC.
            </p>
          </div>

          <div className="flex flex-col gap-3 overflow-y-scroll">
            {cliente?.collect_documents?.map((document, i) => (
              <div className="flex w-full justify-between" key={i}>
                <div className="col-span-3 flex items-center gap-2">
                  <div className="h-12 w-12 shrink-0 rounded-lg bg-blancoBg"></div>
                  <div>
                    <p className="truncate font-medium text-grisHeading">
                      {document.name}
                    </p>
                    <span className="line-clamp-none text-[10px] font-medium text-grisSubText">
                      Subido &bull; {document.created}
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
                      Descargar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-72 flex-col gap-5 rounded-lg bg-blancoBox2 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[22px] font-semibold text-grisHeading">ESTADO</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-blancoBox">
                <p className="text-[12px] text-grisText">
                  {cliente?.last_service_month}
                </p>
                <span className="text-2xl font-bold text-grisText">
                  {cliente?.last_service_day}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-grisText">Ultimo Servicio</p>
                <span className="text-[10px] font-medium text-grisSubText">
                  {cliente?.last_service_name}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-blancoBox">
                <p className="text-[12px] text-grisText">
                  {cliente?.last_update_month}
                </p>
                <span className="text-2xl font-bold text-grisText">
                  {cliente?.last_update_day}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-grisText">
                  Ultima Actualizacion
                </p>
                <span className="text-[10px] font-medium text-grisSubText">
                  Documentos Generados
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

export async function Action({ params, request }) {
  const data = await request.formData();
  const action = data.get("type");

  switch (action) {
    case "1":
      storeCustomerAdress(data);
      return redirect(`/crm/client/${params.id}`);

    case "2":
      storeCustomerContacts(data);
      return redirect(`/crm/client/${params.id}`);

    case "3":
      storeCustomerDocuments(data);
      return redirect(`/crm/client/${params.id}`);

    case "4":
      deleteAddress(data);
      return redirect(`/crm/client/${params.id}`);

    case "5":
      deleteContact(data);
      return redirect(`/crm/client/${params.id}`);

    case "6":
      deleteDocument(data);
      return redirect(`/crm/client/${params.id}`);

    case "7":
      editClientInfo(data);
      return redirect(`/crm/client/${params.id}`);

    case "8":
      editAccessInfo(data);
      return redirect(`/crm/client/${params.id}`);

    case "9":
      assignInterview(data);
      return redirect(`/crm/client/${params.id}`);

    case "10":
      changeStatusClient(data);
      return redirect(`/crm/client/${params.id}`);

    case "11":
      await addCommentClient(data);
      return redirect(`/crm/client/${params.id}`);

    case "12":
      await addSalePay(data);
      return redirect(`/crm/client/${params.id}`);
  }
}
