import React, { useState } from "react";

import { format } from "date-fns";

function ReadyDocumentsClientPlatform({ documents }) {
  return (
    <div className="mt-2 w-full rounded-xl bg-white px-8 py-8">
      <div className="flex w-full px-3 py-3">
        <div className="w-1/3">
          <span className="font-roboto text-sm font-semibold text-grisText">
            DOCUMENT
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
      {documents?.map((document, i) => (
        <div
          className="mt-4 flex w-full rounded-2xl bg-[#E8E8E8] px-3 pb-2 pt-2"
          key={i}
        >
          <div className="w-1/3">
            <span
              title={document.name}
              className="line-clamp-1 text-ellipsis font-roboto text-xs font-normal text-grisText"
            >
              {document.name}
            </span>
          </div>
          <div className="w-1/3">
            <span
              title={document.created_at}
              className="line-clamp-1 text-ellipsis font-roboto text-xs font-normal text-grisText"
            >
              {format(document.created_at, "PP")}
            </span>
          </div>
          <div className="w-1/3">
            <a
              target="_blank"
              href={document.document}
              className="flex w-14 rounded-2xl border border-grisHeading px-2 py-[2px] text-[8px] font-medium text-grisHeading"
            >
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReadyDocumentsClientPlatform;
