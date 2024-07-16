import React from "react";
import { getIntegerNumber, getDecimalNumber } from "../utils";

function CardInformation({ title, subtitle, total, percentage, isPositive }) {
  

  return (
    <div className="flex gap-8">
      <div className="flex w-58 flex-row justify-center gap-4 rounded-lg bg-[#E8E8E8] px-3 py-4 shadow-md">
        <div className="flex flex-col">
          <div className={`text-lg font-bold text-${isPositive ? "green-600" : "[#D7586B]"}`}>
            {getIntegerNumber(total)}
            <span className="text-base">.{getDecimalNumber(total)}</span>
          </div>
          <span className="text-sm text-[#696974] font-semibold">{title}</span>
          <span className="text-xs text-grisSubText">{subtitle}a</span>
        </div>
        <div className="flex flex-col items-center justify-center text-gris2">
          <div className={`py rounded-xl bg-${isPositive ? "[#00A25940]" : "[#D7586B]"} whitespace-nowrap px-2 font-roboto font-semibold text-xs text-${isPositive ? "green-600": "white"}`}>
            {(isPositive ? "+ " : "- ") + percentage}%
          </div>
          <span className="text-[7px]">vs last month</span>
        </div>
      </div>
    </div>
  );
}

export default CardInformation;
