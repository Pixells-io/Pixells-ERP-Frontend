import React from "react";

function InfoPayment({
  totalAmount,
  titleTotalAmount,
  balance,
  titleBalance,
  isDisBalance,
  total,
  titleTotal,
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 items-center gap-3">
            <p className="text-end text-[10px] font-roboto font-normal text-grisText">
              {titleTotalAmount}
            </p>
            <p className="min-w-20 rounded-lg border border-grisDisabled font-roboto px-3 py-1 text-end text-[10px] font-normal text-grisSubText">
              {totalAmount}
            </p>
            <p className="text-end text-[10px] font-normal font-roboto text-grisText">
              {titleBalance}
            </p>
            <p className={"min-w-20 rounded-lg border border-grisDisabled font-roboto px-3 py-1 text-end text-[10px] font-normal text-grisSubText " + (isDisBalance ? "bg-[#F4F4F4]" : "")}>
              {balance}
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-3">
            <label className="text-end text-xs font-medium text-grisText font-roboto">
              {titleTotal}
            </label>
            <p className="min-w-20 rounded-lg border border-grisSubText font-roboto px-3 py-1 text-end text-xs font-medium text-grisText">
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPayment;
