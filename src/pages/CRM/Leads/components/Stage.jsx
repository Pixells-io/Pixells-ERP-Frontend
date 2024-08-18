import React, { useState } from "react";

import Lead from "./Lead";

function Stage({ name, stageId, leads, setModal, setLeadId, setLeadAssigned }) {
  const [acceptDrop, setAcceptDrop] = useState(false);
  const [leadToMove, setLeadToMove] = useState({});
  return (
    <div className="flex h-full w-[200px] shrink-0 flex-col gap-2">
      <div className="flex h-16 flex-col items-center justify-center gap-2 rounded-lg border-t-2 border-primario bg-[#E8E8E8] pb-3 pt-1">
        <div>
          <p className="text-base text-grisText">{name}</p>
        </div>
        <div className="w-fit rounded-2xl border-[1px] border-grisHeading px-3">
          <p className="text-xs font-semibold text-grisHeading">
            {leads?.length}
          </p>
        </div>
      </div>

      <div
        className={
          "flex h-full flex-col gap-2 overflow-scroll rounded-lg bg-blancoBox p-2" +
          (acceptDrop
            ? "border-[3px] border-primario outline outline-2 outline-primario"
            : "")
        }
      >
        <ul
          className="flex h-full flex-col gap-2"
          id={stageId}
          onDrop={(event) => {
            event.preventDefault();
            event.stopPropagation();
            if (acceptDrop) {
              const data = event.dataTransfer.getData("text");
              const assignedImage =
                event.dataTransfer.getData("assigned_image");
              const assignedName = event.dataTransfer.getData("assigned_name");
              const assignedId = event.dataTransfer.getData("assigned_id");
              setLeadId(data);
              setLeadAssigned({
                url: assignedImage,
                name: assignedName,
                id: assignedId,
              });
              switch (stageId) {
                case 1:
                  setModal((prev) => ({ ...prev, prospect: true }));
                  setAcceptDrop(false);
                  break;
                case 2:
                  setModal((prev) => ({ ...prev, potential: true }));
                  setAcceptDrop(false);
                  break;
                case 3:
                  setModal((prev) => ({ ...prev, followup: true }));
                  setAcceptDrop(false);
                  break;
                case 4:
                  setModal((prev) => ({ ...prev, proposal: true }));
                  setAcceptDrop(false);
                  break;
                case 5:
                  setModal((prev) => ({ ...prev, closing: true }));
                  setAcceptDrop(false);
                  break;
                case 6:
                  setModal((prev) => ({ ...prev, pay: true }));
                  setAcceptDrop(false);
                  break;
                case 7:
                  setModal((prev) => ({ ...prev, kickoff: true }));
                  setAcceptDrop(false);
                  break;
                default:
                  setAcceptDrop(false);
                  break;
              }
            }
            setAcceptDrop(false);
          }}
          onDragLeave={(event) => {
            event.preventDefault();
            setAcceptDrop(false);
          }}
          // onDragOver={(event) => {
          //   event.preventDefault();
          //   event.stopPropagation();
          //   if (leadToMove.stage_id + 1 == Number(stageId)) {
          //     setAcceptDrop(true);
          //   }
          // }}
          onDragOver={(event) => {
            event.preventDefault();
            event.stopPropagation();
            const data = event.dataTransfer.getData("stage_id");
            // if (Number(data) + 1 == Number(stageId)) {
            //   setAcceptDrop(true);
            // }

            if (Number(leadToMove.stage_id) + 1 == Number(stageId)) {
              setAcceptDrop(true);
            }
          }}
        >
          {leads?.map((lead, i) => (
            <Lead
              key={lead.id}
              lead={lead}
              setModal={setModal}
              stageName={name}
              stageId={stageId}
              setLeadToMove={setLeadToMove}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stage;
