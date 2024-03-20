import React from "react";
import Lead from "./Lead";

function Stage({ name, stageId, leads, setModal }) {
  return (
    <div className="flex flex-col gap-2 w-[200px] h-full">
      <div className="flex flex-col items-center justify-center bg-[#E8E8E8] border-t-2 border-[#00A259] rounded-lg gap-2 h-16">
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
            // console.log(event);
            // console.log("ondrop");
            // console.log(event.target);
            // console.log(event.currentTarget);

            switch (stageId) {
              case 1:
                setModal((prev) => ({ ...prev, prospect: true }));
                break;
              case 2:
                setModal((prev) => ({ ...prev, followup: true }));
                break;
              case 3:
                setModal((prev) => ({ ...prev, proposal: true }));
                break;
              default:
                break;
            }
          }}
          onDragOver={(event) => {
            event.preventDefault();
            event.stopPropagation();
            // console.log("drag over");
          }}
        >
          {leads?.map((lead, i) => (
            <Lead key={lead.id} lead={lead} setModal={setModal} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stage;
