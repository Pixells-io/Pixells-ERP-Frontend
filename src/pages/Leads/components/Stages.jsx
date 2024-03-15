import React from "react";

import { useLoaderData } from "react-router-dom";

import ProspectForm from "./Forms/ProspectForm";
import PotentialForm from "./Forms/PotentialForm";
import FollowUpForm from "./Forms/FollowUpForm";
import ProposalForm from "./Forms/ProposalForm";
import ClosingForm from "./Forms/ClosingForm";
import PayForm from "./Forms/PayForm";
import KickOffForm from "./Forms/KickOffForm";

function Stages() {
  // const { data } = useLoaderData();
  // const [initialData, setInitialData] = React.useState(data);
  // const [stages, setStages] = React.useState(initialData);
  const [modal, setModal] = React.useState(false);
  return (
    <div className="flex gap-2 overflow-scroll">
      {/* modal on drop drag */}
      {/* <ProspectForm modal={modal} setModal={setModal} /> */}
      {/* <PotentialForm modal={modal} setModal={setModal} /> */}
      {/* <FollowUpForm modal={modal} setModal={setModal} /> */}
      {/* <ProposalForm modal={modal} setModal={setModal} /> */}
      {/* <ClosingForm modal={modal} setModal={setModal} /> */}
      {/* <PayForm modal={modal} setModal={setModal} /> */}
      {/* <KickOffForm modal={modal} setModal={setModal} /> */}

      {/* steps */}
      <div className="flex gap-2">
        {/* {stages?.map((step, i) => (
            <Step
                key={step.id}
                setModal={setModal}
                name={step.name}
                stepId={step.id}
                leads={step.leads}
            />
        ))} */}
      </div>
    </div>
  );
}

export default Stages;
