import React from "react";

const CardBalanceTotal = ({total}) => {
  return (
    <div className="flex h-[50px] w-[200px]  flex-col rounded-[10px] border border-[#44444F] p-2">
      <span className="font-poppins text-xs">SALDO GLOBAL EN CUENTAS</span>
      <span className="font-poppins text-base font-semibold">
       {total}
      </span>
    </div>
  );
};

export default CardBalanceTotal;
