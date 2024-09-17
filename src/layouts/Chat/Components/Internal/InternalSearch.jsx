import React from "react";
import Search from "./Components/Search";
import ChatForm from "./Components/ChatForm";

function InternalSearch({ users, search }) {
  return (
    <div className="flex px-20">
      <div className="w-4/5">
        <Search users={search} />
      </div>
      <div className="w-1/5">
        <ChatForm users={users} />
      </div>
    </div>
  );
}

export default InternalSearch;
