import React from "react";

import { Outlet } from "react-router-dom";

function LayoutChat() {
  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      <div className="flex flex-col gap-4 w-[450px] shrink-0">
        {/* top block */}
        <div className="flex flex-col bg-gris gap-4 rounded-lg px-8 py-4 h-full">
          hello
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default LayoutChat;
