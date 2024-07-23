import React, { useState } from "react";

function MediaDocuments({ chat, documents }) {
  return (
    <div>
      <div className="flex min-w-[200px] flex-row flex-wrap gap-2">
        <div className="h-[180px] w-[180px] rounded-xl border-[2px] border-[#D9D9D9] bg-grisBg p-1 hover:cursor-pointer">
          <div className="h-4/6 w-full rounded-t-xl bg-red-400"></div>
          <div className="w-fill flex h-2/6">
            <div className="w-1/5 text-xs font-normal text-grisText">PDF</div>
            <div className="w-4/5 text-xs font-normal text-[#44444F]">
              Acuse Cita para renovar licencia.pdf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaDocuments;
