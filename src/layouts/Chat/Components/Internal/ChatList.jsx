import React from "react";
import { NavLink } from "react-router-dom";

function ChatList({ chat }) {
  return (
    <NavLink to={`/chat/${chat?.chat_id}`}>
      <div
        className={
          location.pathname === `/chat/${chat?.chat_id}`
            ? "flex gap-2 border-b-[0.5px] border-grisDisabled bg-[#F0F0F0] px-5 py-2 md:gap-0"
            : "flex gap-2 border-b-[0.5px] border-grisDisabled px-5 py-2 hover:bg-[#F4F4F4] md:gap-0"
        }
      >
        <div className="w-1/6 shrink-0">
          <img src={chat.img} className="h-12 w-12 rounded-full object-cover" />
        </div>
        <div className="w-4/6 text-left">
          <span className="font-roboto text-sm font-medium text-grisText">
            {chat.title}
          </span>
          <div className="">
            {chat?.count != 0 ? (
              <span className="line-clamp-2 font-roboto text-xs font-semibold text-grisText">
                {chat.type == 1 ? <>{chat.mensaje}</> : <>{chat.mensaje}</>}
              </span>
            ) : (
              <span className="line-clamp-2 font-roboto text-xs font-normal text-grisText">
                {chat.type == 1 ? <>{chat.mensaje}</> : <>{chat.mensaje}</>}
              </span>
            )}
          </div>
        </div>
        <div className="w-1/6">
          <div className="text-center">
            <span className="font-roboto text-[10px] font-normal text-[#BDBDBD]">
              {chat?.latest}
            </span>
          </div>
          <div className="text-center">
            {chat?.count != 0 && (
              <span className="rounded-full bg-[#00A259] px-2 py-1 font-roboto text-sm font-medium text-white">
                {chat?.count}
              </span>
            )}
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ChatList;
