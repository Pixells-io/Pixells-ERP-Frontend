import React from "react";
import { Link } from "react-router-dom";

const BankCard = ({ title, balances }) => {
  return (
    <Link to={"/bank-management/detail-balances/bank/" + 1}>
    <div
      className="flex w-full h-[188px] hover:bg-[#F4F4F4] p-4 rounded-lg bg-white shadow-lg"
      style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex flex-col justify-between w-full">
        <span className="text-lg font-semibold text-gray-800">{balances}</span>
        <div>
          <span className="text-base font-medium pb-4 text-gray-600">{title}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BankCard;