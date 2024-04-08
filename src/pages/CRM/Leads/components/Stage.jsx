import React from "react";

import Lead from "./Lead";

function Stage({ name, stageId, leads, setModal, setLeadId }) {
  return (
    <div className="flex flex-col gap-2 w-[200px] h-full">
      <div className="flex flex-col items-center justify-center bg-[#E8E8E8] border-t-2 border-primarioBotones rounded-lg gap-2 h-16 pb-3 pt-1">
        <div>
          <p className="text-base text-grisText">{name}</p>
        </div>
        <div className="border-[1px] border-grisHeading rounded-2xl w-fit px-3">
          <p className="font-semibold text-xs text-grisHeading">
            {leads?.length}
          </p>
        </div>
      </div>

      <div className="bg-blancoBox p-2 rounded-lg flex flex-col gap-2 h-full overflow-scroll">
        <ul
          className="flex flex-col gap-2 h-full"
          id={stageId}
          onDrop={(event) => {
            event.preventDefault();
            event.stopPropagation();
            const data = event.dataTransfer.getData("text");
            setLeadId(data);

            switch (stageId) {
              case 1:
                setModal((prev) => ({ ...prev, prospect: true }));
                break;
              case 2:
                setModal((prev) => ({ ...prev, potential: true }));
                break;
              case 3:
                setModal((prev) => ({ ...prev, followup: true }));
                break;
              case 4:
                setModal((prev) => ({ ...prev, proposal: true }));
                break;
              case 5:
                setModal((prev) => ({ ...prev, closing: true }));
                break;
              case 6:
                setModal((prev) => ({ ...prev, pay: true }));
                break;
              case 7:
                setModal((prev) => ({ ...prev, kickoff: true }));
                break;
              default:
                break;
            }
          }}
          onDragOver={(event) => {
            event.preventDefault();
            event.stopPropagation();
            console.log("drag over");
          }}
        >
          {leads?.map((lead, i) => (
            <Lead
              key={lead.id}
              lead={lead}
              setModal={setModal}
              stageName={name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stage;

// console.log(event);
// console.log(data);
// console.log("ondrop");
// console.log(event.currentTarget);
