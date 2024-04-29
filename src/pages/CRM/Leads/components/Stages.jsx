import React, { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";

import { pusherClient } from "@/lib/pusher";

import Stage from "./Stage";

import ProspectForm from "./Forms/ProspectForm";
import PotentialForm from "./Forms/PotentialForm";
import FollowUpForm from "./Forms/FollowUpForm";
import ProposalForm from "./Forms/ProposalForm";
import ClosingForm from "./Forms/ClosingForm";
import PayForm from "./Forms/PayForm";
import KickOffForm from "./Forms/KickOffForm";

function Stages() {
  const { data } = useLoaderData();
  const [initialData, setInitialData] = useState(data);
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

  // console.log(stages);

  useEffect(() => {
    pusherClient.subscribe("fill-table-leads");

    pusherClient.bind("fill-data", ({ message }) => {
      setStages(message.original.data);
    });

    return () => {
      pusherClient.unsubscribe("fill-table-leads");
    };
  }, []);

  return (
    <div className="flex gap-2 overflow-auto">
      {/* modal on drop drag */}
      <ProspectForm
        modal={modal.prospect}
        setModal={setModal}
        leadId={leadId}
      />
      <PotentialForm
        modal={modal.potential}
        setModal={setModal}
        leadId={leadId}
      />
      <FollowUpForm
        modal={modal.followup}
        setModal={setModal}
        leadId={leadId}
      />
      <ProposalForm
        modal={modal.proposal}
        setModal={setModal}
        leadId={leadId}
      />
      <ClosingForm modal={modal.closing} setModal={setModal} leadId={leadId} />
      <PayForm modal={modal.pay} setModal={setModal} leadId={leadId} />
      <KickOffForm modal={modal.kickoff} setModal={setModal} leadId={leadId} />

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
          />
        ))}
      </div>
    </div>
  );
}

export default Stages;
