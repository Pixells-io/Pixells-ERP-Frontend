import React from "react";
import { Link } from "react-router-dom";

const StatusCard = ({ month, years }) => {
  return (
    <Link to={""}>
    <div
      className="flex w-full mr-4 h-[188px] hover:bg-[#F4F4F4] p-4 rounded-lg bg-white shadow-lg"
      style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex flex-col justify-between w-full">
        <span className="text-lg font-semibold font-poppins text-[#44444F]">{years}</span>
        <div>
          <span className="text-lg font-semibold font-poppins pb-4 text-[#44444F]">{month}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default StatusCard;