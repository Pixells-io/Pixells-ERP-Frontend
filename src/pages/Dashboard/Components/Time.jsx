import React from "react";

function Time({title, time}) {
    return (
        <div className="bg-blancoBox w-32 h-24 rounded-md p-2">
            <div>
                <span className="text-sm font-semibold font-roboto text-grisText"> {title} </span>
            </div>
            <div>
                <span className="text-xs font-medium font-roboto text-grisSubText"> This Month </span>
            </div>
            <div className="">
                <span className="text-primarioBotones text-3xl font-bold"> {time} </span>
            </div>
        </div>
    );
}
export default Time;