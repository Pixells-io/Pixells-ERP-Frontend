import React from "react";

function WelcomeToChat() {
  return (
    <div className="hidden h-full min-h-[300px] w-full flex-col items-center justify-center md:flex">
      <img src="/img/logos/chat.png" alt="" className="h-6/12 w-6/12" />
      <h1 className="text-4xl font-extralight text-grisText">
        Hello, welcome to the Chat
      </h1>
      <h2 className="text-base font-medium text-grisText">
        Select a chat, search for a new user to start a conversation
      </h2>
    </div>
  );
}

export default WelcomeToChat;
