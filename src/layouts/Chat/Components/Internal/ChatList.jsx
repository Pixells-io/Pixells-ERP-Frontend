import React from "react";
import { Link } from "react-router-dom";

function ChatList({chat}) {

  return (
    <Link to={`/chat/${chat.chat_id}`}>
        <div className="flex hover:bg-[#f0f0f0] border-b border-grisDisabled hover:rounded-xl px-5 py-3 my-3">
            <div className="w-1/6">
                <img src="https://i.scdn.co/image/ab6761610000e5eb153fc7a135b27d664160204b" width="48px" className="rounded-full" />
            </div>
            <div className="w-4/6 text-left">
                <div>
                    <span className="font-roboto text-sm font-medium text-grisText">{chat.title}</span>
                </div>
                <div className="mt-[-3px] ">
                    <span className="font-roboto font-normal text-xs text-grisText" > {chat.mensaje} </span>
                </div>
            </div>
            <div className="w-1/6">
                <div className="text-center">
                    <span className="text-[10px] font-roboto font-normal text-[#BDBDBD] " > {chat.latest} </span>
                </div>
                <div className="text-center">
                    {chat.count !== 0 &&
                        <span className="font-roboto font-medium text-sm bg-[#00A259] text-white py-1 px-2 rounded-full">{chat.count}</span>
                    }
                </div>
            </div>
        </div>
    </Link>

  );
}

export default ChatList;