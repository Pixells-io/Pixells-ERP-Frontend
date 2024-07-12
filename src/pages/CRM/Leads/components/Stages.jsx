import React, { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";

import ProspectForm from "./Forms/ProspectForm";
import PotentialForm from "./Forms/PotentialForm";
import FollowUpForm from "./Forms/FollowUpForm";
import ProposalForm from "./Forms/ProposalForm";
import ClosingForm from "./Forms/ClosingForm";
import PayForm from "./Forms/PayForm";
import KickOffForm from "./Forms/KickOffForm";
import { getSteps } from "../utils";
import { pusherClient } from "@/lib/pusher";

import Lead from "./Lead";

function Stages() {
  const { steps, services, users } = useLoaderData();
  // console.log(steps.data);
  const [initialData, setInitialData] = useState(steps.data);
  const [stages, setStages] = useState(initialData);
  const [leadId, setLeadId] = useState("");
  const [leadInformation, setLeadInformation] = useState("");
  const [modal, setModal] = useState({
    prospect: false,
    potential: false,
    followup: false,
    proposal: false,
    closing: false,
    pay: false,
    kickoff: false,
  });
  const [leadAssigned, setLeadAssigned] = useState("");

  //FUNCTIONS DRAG AND DROP

  const startDrag = (evt, item) => {
    //evt.dataTransfer.setData("lead", item);
    setLeadInformation(item);
  };

  const draggingOver = (evt) => {
    evt.preventDefault();
  };

  const onDrop = (evt, list) => {
    //const lead = evt.dataTransfer.getData("lead");

    openCorrectModal(list, leadInformation);
  };

  function openCorrectModal(column_id, lead) {
    //The column is the correct
    const next_column = lead.step_id + 1;

    console.log(next_column, column_id);

    if (next_column === column_id) {
      //Set the information
      setLeadAssigned(lead.assigned);
      setLeadId(lead.id);

      //Open the menu
      switch (next_column) {
        case 1:
          setModal({
            ...modal,
            prospect: true,
          });
          break;

        case 2:
          setModal({
            ...modal,
            potential: true,
          });
          break;

        case 3:
          setModal({
            ...modal,
            followup: true,
          });
          break;

        case 4:
          setModal({
            ...modal,
            proposal: true,
          });
          break;

        case 5:
          setModal({
            ...modal,
            closing: true,
          });
          break;

        case 6:
          setModal({
            ...modal,
            pay: true,
          });
          break;

        case 7:
          setModal({
            ...modal,
            kickoff: true,
          });
          break;
      }
    }
  }

  useEffect(() => {
    async function getStepsUrl() {
      let newData = await getSteps();

      setStages(newData.data);
    }

    pusherClient.subscribe("private-fill-table-leads");

    pusherClient.bind("make-table-leads", ({ message }) => {
      getStepsUrl();
    });

    return () => {
      pusherClient.unsubscribe("private-fill-table-leads");
    };
  }, []);

  return (
    <div className="flex h-full gap-2 overflow-auto">
      {/* modal on drop drag */}
      <ProspectForm
        modal={modal.prospect}
        setModal={setModal}
        leadId={leadId}
        users={users}
        leadAssigned={leadAssigned}
      />
      <PotentialForm
        modal={modal.potential}
        setModal={setModal}
        leadId={leadId}
        users={users}
        leadAssigned={leadAssigned}
      />
      <FollowUpForm
        modal={modal.followup}
        setModal={setModal}
        leadId={leadId}
        users={users}
        leadAssigned={leadAssigned}
      />
      <ProposalForm
        modal={modal.proposal}
        setModal={setModal}
        leadId={leadId}
        users={users}
        leadAssigned={leadAssigned}
      />
      <ClosingForm
        modal={modal.closing}
        setModal={setModal}
        leadId={leadId}
        services={services}
        users={users}
        leadAssigned={leadAssigned}
      />
      <PayForm
        modal={modal.pay}
        setModal={setModal}
        leadId={leadId}
        users={users}
        leadAssigned={leadAssigned}
      />
      <KickOffForm
        modal={modal.kickoff}
        setModal={setModal}
        leadId={leadId}
        users={users}
        leadAssigned={leadAssigned}
      />

      <div className="flex gap-2">
        {stages?.map((stage, i) => (
          <div
            key={stage.id}
            className="dd-element flex h-full w-[200px] shrink-0 flex-col gap-2"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, stage.id)}
          >
            <div className="flex h-16 flex-col items-center justify-center gap-2 rounded-lg border-t-2 border-primario bg-[#E8E8E8] pb-3 pt-1">
              <p className="text-base text-grisText">{stage?.name}</p>
              <div className="w-fit rounded-2xl border-[1px] border-grisHeading px-3">
                <p className="text-xs font-semibold text-grisHeading">
                  {stage?.leads?.length}
                </p>
              </div>
            </div>
            <div className="flex h-full flex-col gap-2 overflow-scroll rounded-lg bg-blancoBox p-2">
              <ul className="flex h-full flex-col gap-2">
                {stage?.leads.map((lead, i) => (
                  <li
                    draggable="true"
                    className="flex w-full shrink-0 cursor-grab flex-col active:cursor-grabbing"
                    onDragStart={(evt) => startDrag(evt, lead)}
                    key={lead.id}
                  >
                    <Lead key={lead.id} lead={lead} setModal={setModal} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stages;
