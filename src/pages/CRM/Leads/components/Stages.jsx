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
import { EchoServer } from "@/lib/echo";
import { getSteps } from "../utils";

function Stages() {
  const { steps, services } = useLoaderData();
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

  useEffect(() => {
    //Connect whith this shit
    EchoServer.private("fill-table-leads").listen(
      "FillTableLeads",
      ({ message }) => {
        async function getStepsUrl() {
          return await getSteps();
        }

        let newData = getStepsUrl();

        console.log(newData);
      }
    );

    /*pusherClient.subscribe("fill-table-leads");

    pusherClient.bind("fill-data", ({ message }) => {
      setStages(message.original.data);
    });

    return () => {
      pusherClient.unsubscribe("fill-table-leads");
    };*/
  }, []);

  return (
    <div className="flex gap-2 overflow-auto h-full">
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
      <ClosingForm
        modal={modal.closing}
        setModal={setModal}
        leadId={leadId}
        services={services}
      />
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
