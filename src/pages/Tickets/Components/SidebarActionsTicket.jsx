import React, { useState } from "react";
import { add, addOutline, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import FormCreateFollowUps from "./FormCreateFollowUps";

function SidebarActionsTicket({ ticket }) {
  const [modal, setModal] = useState(false);
  const [titleModal, setTitleModal] = useState(false);
  const [valueModal, setValueModal] = useState(false);

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
    <div className="bg-gris h-full px-8 py-4 ml-4 rounded-lg w-full">
      {/* Form Create Follow Ups */}
      <FormCreateFollowUps
        modal={modal}
        setModal={setModal}
        title={titleModal}
        value={valueModal}
        ticket={ticket}
      />

      <p className="font-semibold text-base font-poppins text-grisHeading">
        ACTIONS
      </p>
      <div className="flex gap-4 mt-6">
        <button
          type="button"
          className="w-24 text-sm border bg-blancoBox2 text-grisText px-3 py-1 rounded-2xl font-medium"
          onClick={() => setModalFollowUp(1)}
        >
          Visit
        </button>
        <button
          type="button"
          className="w-24 text-sm border bg-blancoBox2 text-grisText px-3 py-1 rounded-2xl font-medium"
          onClick={() => setModalFollowUp(2)}
        >
          Phone Call
        </button>
      </div>
      <div className="flex gap-4 mt-4 mb-8">
        <button
          type="button"
          className="w-24 text-sm border bg-blancoBox2 text-grisText px-3 py-1 rounded-2xl font-medium"
          onClick={() => setModalFollowUp(3)}
        >
          Message
        </button>
        <button
          type="button"
          className="w-24 text-sm border bg-blancoBox2 text-grisText px-3 py-1 rounded-2xl font-medium"
          onClick={() => setModalFollowUp(4)}
        >
          E-mail
        </button>
      </div>
      <button
        type="button"
        className="w-24 text-sm border border-primario text-primario px-3 py-1 rounded-2xl font-medium hover:bg-primario hover:text-white"
        onClick={() => setModalFollowUp(5)}
      >
        Finish
      </button>
      <div className="mt-8">
        <button
          type="button"
          className="w-full flex justify-start gap-6 p-0 text-blue-500 group  hover:bg-blue-100 hover:rounded-lg"
        >
          <IonIcon icon={add} size="large"></IonIcon>
          <p className="text-lg font-medium text-blue-500  mr-1 mt-1">
            Responsibles
          </p>
        </button>
      </div>
    </div>
  );
}

export default SidebarActionsTicket;
