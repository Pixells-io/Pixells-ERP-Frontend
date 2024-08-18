import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import ProspectForm from "./Forms/ProspectForm";
import PotentialForm from "./Forms/PotentialForm";
import FollowUpForm from "./Forms/FollowUpForm";
import ProposalForm from "./Forms/ProposalForm";
import ClosingForm from "./Forms/ClosingForm";
import PayForm from "./Forms/PayForm";
import KickOffForm from "./Forms/KickOffForm";
import Lead from "./Lead";

import { getSteps } from "../utils";
import { createPusherClient } from "@/lib/pusher";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";

function Stages() {
  const { steps, services, users, membership } = useLoaderData();
  const [initialData, setInitialData] = useState(steps.data);
  const [stages, setStages] = useState(initialData);
  const [stagesFilter, setStagesFilter] = useState(initialData);
  const [selectTypeFilter, setSelectTypeFilter] = useState("all");
  const [businessNameFilter, setBusinessNameFilter] = useState([]);
  const [inputNameFilter, setInputNameFilter] = useState("");
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
  const [type, setType] = useState("");

  const pusherClient = createPusherClient();

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

    //Set the information
    setLeadAssigned(lead.assigned);
    setLeadId(lead.id);
    setType(lead.type);

    //Open the menu
    switch (column_id) {
      case 1:
        if (next_column == 1) {
          setModal({
            ...modal,
            prospect: true,
          });
        }
        break;

      case 2:
        if (next_column == 2) {
          setModal({
            ...modal,
            potential: true,
          });
        }
        break;

      case 3:
        if (next_column == 3) {
          setModal({
            ...modal,
            followup: true,
          });
        }
        break;

      case 4:
        if (next_column == 4) {
          setModal({
            ...modal,
            proposal: true,
          });
        }
        break;

      case 5:
        if (next_column == 5) {
          setModal({
            ...modal,
            closing: true,
          });
        }
        break;

      case 6:
        if (next_column == 6) {
          setModal({
            ...modal,
            pay: true,
          });
        }
        break;

      case 7:
        if (next_column == 7) {
          setModal({
            ...modal,
            kickoff: true,
          });
        }
        break;
    }
  }

  const pusherClient = createPusherClient();

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

  useEffect(() => {
    filterStages();
  }, [stages, selectTypeFilter, inputNameFilter]);

  useEffect(() => {
    getAllBusinessName();
  }, [stages]);

  const getAllBusinessName = () => {
    const uniqueBusiness = new Set();

    stages.forEach((stage) => {
      stage.leads.forEach((lead) => {
        uniqueBusiness.add(lead);
      });
    });

    setBusinessNameFilter(
      Array.from(uniqueBusiness)
        .map((business) => ({
          name: business.business_name,
        }))
        .sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();

          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        }),
    );
  };

  const filterStages = () => {
    let stagesAux = stages.map((stage) => {
      const lendsFilter = stage.leads.filter((lead) =>
        selectTypeFilter == "all"
          ? lead.business_name
              .toLowerCase()
              .includes(inputNameFilter.toLowerCase())
          : lead.business_name
              .toLowerCase()
              .includes(inputNameFilter.toLowerCase()) &&
            lead.type == selectTypeFilter,
      );
      return lendsFilter.length > 0
        ? { ...stage, leads: lendsFilter }
        : { ...stage, leads: [] };
    });

    setStagesFilter([...stagesAux]);
  };

  return (
    <div className="flex h-full flex-col gap-2 overflow-scroll">
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
        membership={membership.data}
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
        type={type}
      />

      <div className="flex w-32 p-2">
        {selectTypeFilter !== "all" && (
          <Button
            className="relative h-6 w-16 bg-[#E8E8E8] text-[10px] text-[#44444F] hover:bg-blue-200 hover:text-white"
            onClick={() => {
              setSelectTypeFilter("all");
            }}
          >
            {selectTypeFilter == "1" ? "Individual" : "Business"}
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-[1px] border-blue-400 p-0 text-blue-400">
              <IonIcon icon={close} size="large"></IonIcon>
            </span>
          </Button>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="h-6 w-16 rounded-3xl border-[1px] border-[#44444F] text-[10px]"
            >
              Type
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-[300px] w-full">
            <DropdownMenuLabel>Select to filter</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={selectTypeFilter}
              onValueChange={(event) => {
                setSelectTypeFilter(event);
              }}
            >
              <DropdownMenuRadioItem value="all">
                Clear filter
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="1">
                Individual
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="2">Business</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {inputNameFilter !== "" && (
          <Button
            className="relative h-6 w-16 bg-[#E8E8E8] text-[10px] text-[#44444F] hover:bg-blue-200 hover:text-white"
            onClick={() => {
              setInputNameFilter("");
            }}
          >
            {inputNameFilter}
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-[1px] border-blue-400 p-0 text-blue-400">
              <IonIcon icon={close} size="large"></IonIcon>
            </span>
          </Button>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="h-6 w-16 rounded-3xl border-[1px] border-[#44444F] text-[10px]"
            >
              Name
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-[300px] w-full overflow-auto">
            <DropdownMenuLabel>Select to filter</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={selectTypeFilter}
              onValueChange={(event) => {
                setInputNameFilter(event);
              }}
            >
              <DropdownMenuRadioItem value="">
                Clear filter
              </DropdownMenuRadioItem>
              {businessNameFilter?.map((businessNameF, i) => (
                <DropdownMenuRadioItem key={i} value={businessNameF.name}>
                  {businessNameF.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex h-full gap-2 overflow-scroll">
        {stagesFilter?.map((stage, i) => (
          <div
            key={stage.id}
            className="flex h-full w-[200px] flex-col gap-2 overflow-auto"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, stage.id)}
          >
            {/* top */}
            <div className="flex h-16 flex-col items-center justify-center gap-2 rounded-lg border-t-2 border-primario bg-[#E8E8E8] pb-3 pt-1">
              <p className="text-base text-grisText">{stage?.name}</p>
              <div className="w-fit rounded-2xl border-[1px] border-grisHeading px-3">
                <p className="text-xs font-semibold text-grisHeading">
                  {stage?.leads?.length}
                </p>
              </div>
            </div>

            {/* body */}
            <div className="flex h-full flex-col gap-2 overflow-auto rounded-lg bg-blancoBox p-2">
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
