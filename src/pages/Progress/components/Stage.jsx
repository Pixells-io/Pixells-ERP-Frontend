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
                        {leads.length}
                    </p>
                </div>
            </div>

            <div
                className="bg-blancoBox p-2 rounded-lg flex flex-col gap-2 h-full"
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
