import React from "react";

function Time({ title, time }) {
  return (
    <div className="h-full w-[150px] rounded-md bg-blancoBox p-2">
      <div>
        <span className="font-roboto text-sm font-semibold text-grisText">
          {" "}
          {title}{" "}
        </span>
      </div>
      <div>
        <span className="font-roboto text-xs font-medium text-grisSubText">
          {" "}
          This Month{" "}
        </span>
      </div>
      <div className="">
        <span className="text-3xl font-bold text-primarioBotones">
          {" "}
          {time}{" "}
        </span>
      </div>
    </div>
  );
}
export default Time;
