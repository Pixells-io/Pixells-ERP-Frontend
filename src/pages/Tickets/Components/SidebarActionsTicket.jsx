import React, { useState } from "react";
import { add, addOutline, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import FormCreateFollowUps from "./FormCreateFollowUps";
import FormCreateResponsible from "./FormCreateResponsibles";
import FormAddDcoument from "./FormAddDcoument";

function SidebarActionsTicket({ ticket, areas, users }) {
  const [modal, setModal] = useState(false);
  const [modalResponsible, setModalResponsible] = useState(false);
  const [titleModal, setTitleModal] = useState(false);
  const [valueModal, setValueModal] = useState(false);

  const [modalDocument, setModalDocument] = useState(false);

  function setModalFollowUp(value) {
    let title = "";

    switch (value) {
      case 1:
        title = "Add Visit";
        break;
      case 2:
        title = "Add Phone Call";
        break;
      case 3:
        title = "Add Message";
        break;
      case 4:
        title = "Add E-mail";
        break;
      case 5:
        title = "Finish Ticket";
        break;
    }

    setTitleModal(title);
    setValueModal(value);
    setModal(true);
  }

  return (
    <div className="ml-4 h-full w-full rounded-lg bg-gris px-8 py-4">
      {/* Form Create Follow Ups */}
      <FormAddDcoument
        open={modalDocument}
        setOpen={setModalDocument}
        ticket={ticket}
      />

      <FormCreateFollowUps
        modal={modal}
        setModal={setModal}
        title={titleModal}
        value={valueModal}
        ticket={ticket.id}
      />

      <FormCreateResponsible
        modal={modalResponsible}
        setModal={setModalResponsible}
        ticket={ticket.id}
        areas={areas}
        users={users}
      />

      <p className="font-poppins text-base font-semibold text-grisHeading">
        ACTIONS
      </p>
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="w-24 rounded-2xl bg-blancoBox2 px-3 py-1 text-sm font-medium text-grisText"
          onClick={() => setModalFollowUp(1)}
        >
          Visit
        </button>
        <button
          type="button"
          className="w-24 rounded-2xl bg-blancoBox2 px-3 py-1 text-sm font-medium text-grisText"
          onClick={() => setModalFollowUp(2)}
        >
          Phone Call
        </button>
      </div>
      <div className="mt-4 flex gap-4">
        <button
          type="button"
          className="w-24 rounded-2xl bg-blancoBox2 px-3 py-1 text-sm font-medium text-grisText"
          onClick={() => setModalFollowUp(3)}
        >
          Message
        </button>
        <button
          type="button"
          className="w-24 rounded-2xl border bg-blancoBox2 px-3 py-1 text-sm font-medium text-grisText"
          onClick={() => setModalFollowUp(4)}
        >
          E-mail
        </button>
      </div>
      <div className="mb-8 mt-4 flex gap-4">
        <button
          type="button"
          className="w-24 rounded-2xl border bg-blancoBox2 px-3 py-1 text-sm font-medium text-grisText"
          onClick={() => setModalDocument(true)}
        >
          Document
        </button>
        <button
          type="button"
          className="w-24 rounded-2xl border border-primario px-3 py-1 text-sm font-medium text-primario hover:bg-primario hover:text-white"
          onClick={() => setModalFollowUp(5)}
        >
          Finish
        </button>
      </div>
      <div className="mt-8">
        <button
          type="button"
          className="group flex w-full justify-start gap-3 p-0 text-blue-500 hover:rounded-lg hover:bg-blue-100"
          onClick={() => setModalResponsible(true)}
        >
          <IonIcon icon={add} size="large"></IonIcon>
          <p className="mr-1 mt-1 text-lg font-medium text-blue-500">
            Responsibles
          </p>
        </button>
      </div>
      <div className="mt-8">
        <p className="font-poppins text-base font-semibold text-grisHeading">
          Responsibles
        </p>
        <div className="mt-2">
          {ticket?.responsible.map((data, i) => (
            <div className="flex" key={i}>
              <div>
                <img src={data.img} className="h-9 w-9 rounded-full" />
              </div>
              <div className="ml-3">
                <span className="font-roboto text-sm font-medium text-grisText">
                  {data.name}
                </span>
                <div className="mt-[-5px]">
                  <span className="font-roboto text-xs text-grisSubText">
                    {data.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <p className="font-poppins text-base font-semibold text-grisHeading">
          Involved
        </p>
        <div className="mt-2">
          {ticket?.involved.map((data, i) => (
            <div className="flex" key={i}>
              <div>
                <img src={data.img} className="h-9 w-9 rounded-full" />
              </div>
              <div className="ml-3">
                <span className="font-roboto text-sm font-medium text-grisText">
                  {data.name}
                </span>
                <div className="mt-[-5px]">
                  <span className="font-roboto text-xs text-grisSubText">
                    {data.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarActionsTicket;
