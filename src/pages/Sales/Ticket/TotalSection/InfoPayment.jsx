import React from "react";

const InfoPayment = ({
  totalAmount,
  titleTotalAmount,
  balance,
  titleBalance,
  isDisBalance,
  total,
  titleTotal,
  containerClass,
  itemClass,
  amountClass,
  balanceClass,
  totalClass,
  titleDiscount,
  totalDiscount,
  isShipping,
  totalShipping,
  setTotalShipping,
}) => {
  return (
    <div className={`flex flex-col gap-4 ${containerClass}`}>
      <div className="w-full">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 items-center gap-3">
            <input
              type="hidden"
              hidden
              className="hidden"
              readOnly
              name="subtotal"
              value={totalAmount}
            />
            <input
              type="hidden"
              hidden
              className="hidden"
              readOnly
              name="taxes"
              value={balance}
            />
            <input
              type="hidden"
              hidden
              className="hidden"
              readOnly
              name="total"
              value={total}
            />
            <input
              type="hidden"
              hidden
              className="hidden"
              readOnly
              name="totalDiscount"
              value={totalDiscount}
            />
            <p
              className={`text-end font-roboto text-[10px] font-normal text-grisText ${itemClass}`}
            >
              {titleTotalAmount}
            </p>
            <p
              className={`min-w-20 rounded-lg border border-grisDisabled px-3 py-1 text-end font-roboto text-[10px] font-normal text-grisSubText ${amountClass}`}
            >
              {totalAmount}
            </p>
            <p
              className={`text-end font-roboto text-[10px] font-normal text-grisText ${itemClass}`}
            >
              {titleDiscount}
            </p>
            <p
              className={`min-w-20 rounded-lg border border-grisDisabled px-3 py-1 text-end font-roboto text-[10px] font-normal text-grisSubText ${amountClass}`}
            >
              {totalDiscount.toFixed(2)}
            </p>
            <p
              className={`text-end font-roboto text-[10px] font-normal text-grisText ${itemClass}`}
            >
              {titleBalance}
            </p>
            <p
              className={`min-w-20 rounded-lg border border-grisDisabled px-3 py-1 text-end font-roboto text-[10px] font-normal text-grisSubText ${isDisBalance ? "bg-[#F4F4F4]" : ""} ${balanceClass}`}
            >
              {balance}
            </p>
            {isShipping && (
              <>
                <p
                  className={`text-end font-roboto text-[10px] font-normal text-grisText ${itemClass}`}
                >
                  Envio
                </p>
                <input
                  name="shipping"
                  type="number"
                  className={`w-[93px] rounded-lg border border-grisDisabled px-0 py-1 text-end font-roboto text-[10px] font-normal text-grisSubText ${isDisBalance ? "bg-[#F4F4F4]" : ""} ${balanceClass}`}
                  value={totalShipping}
                  required={true}
                  onChange={(e) => {
                    if(totalShipping >= 0 || totalShipping == ""){
                      setTotalShipping(e.target.value);
                    }
                  }}
                />
              </>
            )}
          </div>
          <div className="grid grid-cols-2 items-center gap-3">
            <label
              className={`text-end font-roboto text-xs font-medium text-grisText ${itemClass}`}
            >
              {titleTotal}
            </label>
            <p
              className={`min-w-20 rounded-lg border border-grisSubText px-3 py-1 text-end font-roboto text-xs font-medium text-grisText ${totalClass}`}
            >
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPayment;
