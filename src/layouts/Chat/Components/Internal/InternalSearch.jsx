import React from "react";
import Search from "./Components/Search";
import ChatForm from "./Components/ChatForm";

function InternalSearch() {
  return (
    <div className="px-20 flex">
      <div className="w-4/5">
        <Search/>
      </div>
      <div className="w-1/5">
        <ChatForm/>
      </div>
    </div>
  );
}

export default InternalSearch;
