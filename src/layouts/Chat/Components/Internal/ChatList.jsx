import React from "react";
import { Link, NavLink } from "react-router-dom";

function ChatList({ chat }) {
  return (
    <Link to={`/chat/${chat.chat_id}`} className="py-6">
      <div className="my-3 flex border-b border-grisDisabled px-5 py-2 hover:rounded-xl hover:bg-[#f0f0f0]">
        <div className="w-1/6">
          <img src={chat.img} width="48px" className="rounded-full" />
        </div>
        <div className="w-4/6 text-left">
          <span className="font-roboto text-sm font-medium text-grisText">
            {chat.title}
          </span>
          <div className="mt-[-3px]">
            <span className="font-roboto text-xs font-normal text-grisText">
              {chat.mensaje.mensaje}
            </span>
          </div>
        </div>
        <div className="w-1/6">
          <div className="text-center">
            <span className="font-roboto text-[10px] font-normal text-[#BDBDBD]">
              {chat?.latest}
            </span>
          </div>
          <div className="text-center">
            {chat?.count !== 0 && (
              <span className="rounded-full bg-[#00A259] px-2 py-1 font-roboto text-sm font-medium text-white">
                {chat?.count}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ChatList;

{
  /* <>
  {chat.data?.map((user, i) => (
    <div>
      {user.user_id !== auth.id ? (
        <Link to={`/chat/${chat.chat_id}`}>
          <div className="flex hover:bg-[#f0f0f0] border-b border-grisDisabled hover:rounded-xl px-5 py-3 my-3">
            <div className="w-1/6">
              <img
                src="https://i.scdn.co/image/ab6761610000e5eb153fc7a135b27d664160204b"
                width="48px"
                className="rounded-full"
              />
            </div>
            <div className="w-4/6 text-left">
              <div>
                <span className="font-roboto text-sm font-medium text-grisText">
                  {user.title}
                </span>
              </div>
              <div className="mt-[-3px] ">
                <span className="font-roboto font-normal text-xs text-grisText">
                  {" "}
                  {user.mensaje}{" "}
                </span>
              </div>
            </div>
            <div className="w-1/6">
              <div className="text-center">
                <span className="text-[10px] font-roboto font-normal text-[#BDBDBD] ">
                  {" "}
                  {user.latest}{" "}
                </span>
              </div>
              <div className="text-center">
                {user.count !== 0 && (
                  <span className="font-roboto font-medium text-sm bg-[#00A259] text-white py-1 px-2 rounded-full">
                    {user.count}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <>No</>
      )}
    </div>
  ))}
</>; */
}
