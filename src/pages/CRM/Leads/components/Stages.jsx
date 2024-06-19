import React, { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";

import Stage from "./Stage";

import ProspectForm from "./Forms/ProspectForm";
import PotentialForm from "./Forms/PotentialForm";
import FollowUpForm from "./Forms/FollowUpForm";
import ProposalForm from "./Forms/ProposalForm";
import ClosingForm from "./Forms/ClosingForm";
import PayForm from "./Forms/PayForm";
import KickOffForm from "./Forms/KickOffForm";
import { getSteps } from "../utils";
import { pusherClient } from "@/lib/pusher";

function Stages() {
  const { steps, services, users } = useLoaderData();
  // console.log(steps.data);
  const [initialData, setInitialData] = useState(steps.data);
  const [stages, setStages] = useState(initialData);
  const [leadId, setLeadId] = useState("");
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
      />
      <FollowUpForm
        modal={modal.followup}
        setModal={setModal}
        leadId={leadId}
        users={users}
      />
      <ProposalForm
        modal={modal.proposal}
        setModal={setModal}
        leadId={leadId}
        users={users}
      />
      <ClosingForm
        modal={modal.closing}
        setModal={setModal}
        leadId={leadId}
        services={services}
        users={users}
      />
      <PayForm
        modal={modal.pay}
        setModal={setModal}
        leadId={leadId}
        users={users}
      />
      <KickOffForm
        modal={modal.kickoff}
        setModal={setModal}
        leadId={leadId}
        users={users}
      />

      {/* Stages */}
      <div className="flex gap-2">
        {stages?.map((stage, i) => (
          <Stage
            key={stage.id}
            setModal={setModal}
            name={stage.name}
            stageId={stage.id}
            leads={stage.leads}
            setLeadId={setLeadId}
            setLeadAssigned={setLeadAssigned}
          />
        ))}
      </div>
    </div>
  );
}

export default Stages;
