import React from "react";

import Lead from "./Lead";

function Stage({ name, stageId, leads, setModal }) {
  return (
    <div className="flex h-full w-[200px] flex-col gap-2">
      <div className="flex h-16 flex-col items-center justify-center gap-2 rounded-lg border-t-2 border-[#00A259] bg-[#E8E8E8]">
        <div>
          <p className="text-base text-grisText">{name}</p>
        </div>
        <div className="w-fit rounded-2xl border-[1px] border-grisHeading px-3">
          <p className="text-xs font-semibold text-grisHeading">
            {leads.length}
          </p>
        </div>
      </div>

      <div
        className="flex h-full flex-col gap-2 rounded-lg bg-blancoBox p-2"
        onDrop={(event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log(event);
          console.log("ondrop");
          setModal(true);
        }}
      >
        <ul className="flex flex-col gap-2">
          {/* <Lead /> */}
          {leads?.map((lead, i) => (
            <Lead
              setModal={setModal}
              key={lead.id}
              lead={lead}
              index={i}
              stageId={stageId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stage;
