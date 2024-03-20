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
  const [modal, setModal] = useState(false);
  return (
    <div className="flex gap-2 overflow-scroll">
      {/* modal on drop drag */}
      <ProspectForm modal={modal} setModal={setModal} />
      {/* <PotentialForm modal={modal} setModal={setModal} /> */}
      {/* <FollowUpForm modal={modal} setModal={setModal} /> */}
      {/* <ProposalForm modal={modal} setModal={setModal} /> */}
      {/* <ClosingForm modal={modal} setModal={setModal} /> */}
      {/* <PayForm modal={modal} setModal={setModal} /> */}
      {/* <KickOffForm modal={modal} setModal={setModal} /> */}

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
