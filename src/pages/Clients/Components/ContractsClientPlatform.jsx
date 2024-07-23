import React, { useState } from "react";

import { format } from "date-fns";
import { Link } from "react-router-dom";

function ContractsClientPlatform({ contracts }) {
  return (
    <div className="mt-2 w-full overflow-auto rounded-xl bg-white px-8 py-8">
      <div className="flex w-full px-3 py-3">
        <div className="w-1/3">
          <span className="font-roboto text-sm font-semibold text-grisText">
            CONTRACT
          </span>
        </div>
        <div className="w-1/3">
          <span className="font-roboto text-sm font-semibold text-grisText">
            DATE
          </span>
        </div>
        <div className="w-1/3">
          <span className="font-roboto text-sm font-semibold text-grisText">
            DOWNLOAD
          </span>
        </div>
      </div>
      {contracts?.map((contract, i) => (
        <div
          className="mt-4 flex w-full rounded-2xl bg-[#E8E8E8] px-3 pb-2 pt-2"
          key={i}
        >
          <div className="w-1/3">
            <span
              title={contract.name}
              className="line-clamp-1 text-ellipsis font-roboto text-xs font-normal text-grisText"
            >
              {contract.name}
            </span>
          </div>
          <div className="w-1/3">
            <span
              title={contract.created}
              className="line-clamp-1 text-ellipsis font-roboto text-xs font-normal text-grisText"
            >
              {contract.created}
            </span>
          </div>
          <div className="w-1/3">
            <Link
              target="_blank"
              className="flex w-14 rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading"
              to={`${import.meta.env.VITE_SERVER_URL}agreements/print-contract/${contract.id}`}
            >
              Download
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContractsClientPlatform;
