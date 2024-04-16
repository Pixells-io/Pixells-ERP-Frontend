import React from "react";

function ChatList() {
  return (
    <div className="flex">
        <div className="w-1/6">
            <img src="https://i.scdn.co/image/ab6761610000e5eb153fc7a135b27d664160204b" width="48px" className="rounded-full" />
        </div>
        <div className="w-4/6 text-left">
            <div>
                <span className="font-roboto text-sm font-medium text-grisText">Diego Guzman</span>
            </div>
            <div className="mt-[-3px] ">
                <span className="font-roboto font-normal text-xs text-grisText" >Mensaje de prueba en chats</span>
            </div>
        </div>
        <div className="w-1/6">
            <div className="text-center">
                <span className="text-[10px] font-roboto font-normal text-[#BDBDBD] " >Hace 2 dias</span>
            </div>
            <div className="text-center">
                <span className="font-roboto font-medium text-sm bg-[#00A259] text-white py-1 px-2 rounded-full">1</span>
            </div>
        </div>
    </div>
  );
}

export default ChatList;
