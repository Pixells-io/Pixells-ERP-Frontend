import React from "react";

function CardInformation({ title, subtitle, total, percentage, isPositive }) {
  return (
    <div className="flex gap-8">
      <div className="flex w-58 flex-row justify-center gap-4 rounded-lg bg-[#E8E8E8] px-3 py-4 shadow-md">
        <div className="flex flex-col">
          <div className={`text-lg font-bold text-${isPositive ? "green-600" : "[#D7586B]"}`}>
            ${total}
            <span className="text-base">.00</span>
          </div>
          <span className="text-sm text-[#696974] font-semibold">{title}</span>
          <span className="text-xs text-grisSubText">{subtitle}</span>
        </div>
        <div className="flex flex-col items-center justify-center text-gris2">
          <div className={`py rounded-xl bg-${isPositive ? "[#00A25940]" : "[#D7586B]"} px-2 font-roboto text-sm font-medium text-${isPositive ? "green-600": "white"}`}>
            {isPositive ? "+" : "-"}
            {percentage}%
          </div>
          <span className="text-[6px]">vs last month</span>
        </div>
      </div>
    </div>
  );
}

export default CardInformation;