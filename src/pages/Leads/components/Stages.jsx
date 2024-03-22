import React, { useState } from "react";

import { useLoaderData } from "react-router-dom";
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
  const [modal, setModal] = useState({
    prospect: false,
    followup: false,
    proposal: false,
    // closing: false,
    // pay: false,
    // kickoff: false,
  });
  return (
    <div className="flex gap-2 overflow-auto">
      {/* modal on drop drag */}
      <ProspectForm modal={modal.prospect} setModal={setModal} />
      <FollowUpForm modal={modal.followup} setModal={setModal} />
      <ProposalForm modal={modal.proposal} setModal={setModal} />
      {/* <ClosingForm modal={modal.closing} setModal={setModal} /> */}
      {/* <PayForm modal={modal.pay} setModal={setModal} /> */}
      {/* <KickOffForm modal={modal.kickoff} setModal={setModal} /> */}
      {/* <PotentialForm modal={modal} setModal={setModal} /> */}

      {/* Stages */}
      <div className="flex gap-2">
        {stages?.map((stage, i) => (
          <Stage
            key={stage.id}
            setModal={setModal}
            name={stage.name}
            stageId={stage.id}
            leads={stage.leads}
          />
        ))}
      </div>
    </div>
  );
}

export default Stages;
