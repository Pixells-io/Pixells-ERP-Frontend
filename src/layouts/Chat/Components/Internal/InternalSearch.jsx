import React from "react";
import Search from "./Components/Search";
import ChatForm from "./Components/ChatForm";

function InternalSearch(users) {
  return (
    <div className="flex px-20">
      <div className="w-4/5">
        <Search users={users.users} />
      </div>
      <div className="w-1/5">
        <ChatForm users={users.users} />
      </div>
    </div>
  );
}

export default InternalSearch;
