import React from "react";

function EmailContentRow({ mail }) {
  return (
    <div className="flex h-16 border-b border-t bg-[#7794F91A]">
      <div className="mx-4 mt-3 w-full items-center gap-2">
        <div className="col-span-2 ml-2 flex flex-col items-center">
          <div className="self-star w-full">
            <div className="line-clamp-1 flex w-full justify-between">
              <p className="line-clamp-1 text-[13px] font-medium text-grisText">
                {mail.from}
              </p>
              <span className="line-clamp-1 text-[12px] font-normal text-grisSubText">
                {mail.date}
              </span>
            </div>
            <span className="line-clamp-1 text-[12px] font-normal text-grisSubText">
              {mail.subject}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailContentRow;
