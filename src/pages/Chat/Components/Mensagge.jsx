import React from "react";
import { IonIcon } from "@ionic/react";
import {
  checkmarkDoneOutline
} from "ionicons/icons";

function MenssageCard(data) {
    let msg = data.data;

    switch (msg.user) {
        case 0:
            return (
                <div className="w-full flex justify-start">
                    <div className="bg-[#F0F0F0] mb-1 rounded-t-xl rounded-r-xl w-fit px-2 py-1">
                        <div>
                            <span className="font-roboto font-normal text-sm text-[#44444F] ">{msg.mensaje}</span>
                        </div>
                        <div className="mt-[-8px] flex justify-end">
                            <div>
                                <span className="text-[10px] font-normal font-roboto text-[#8F8F8F]">{msg.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        case 1:
            if (msg.read == 1) {
                return (
                    <div className="w-full flex justify-end">
                        <div className="bg-[#E4F0FF] mb-1 rounded-t-xl rounded-s-xl w-fit px-2 py-1">
                            <div>
                                <span className="font-roboto font-normal text-sm text-[#44444F] ">{msg.mensaje}</span>
                            </div>
                            <div className="mt-[-8px] flex justify-end">
                                <div>
                                    <span className="text-[10px] font-normal font-roboto text-[#8F8F8F]">{msg.date}</span>
                                </div>
                                <div className="mt-[3px] ml-1">
                                    <IonIcon
                                        icon={checkmarkDoneOutline}
                                        size="small"
                                        className="text-[#5B89FF]"
                                    ></IonIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }else{
                return (
                    <div className="w-full flex justify-end">
                        <div className="bg-[#E4F0FF] mb-1 rounded-t-xl rounded-s-xl w-fit px-2 py-1">
                            <div>
                                <span className="font-roboto font-normal text-sm text-[#44444F] ">{msg.mensaje}</span>
                            </div>
                            <div className="mt-[-8px] flex justify-end">
                                <div>
                                    <span className="text-[11px] font-normal font-roboto text-[#8F8F8F]">{msg.date}</span>
                                </div>
                                <div className="mt-[3px] ml-1">
                                    <IonIcon
                                        icon={checkmarkDoneOutline}
                                        size="small"
                                        className="text-[#8f8f8f]"
                                    ></IonIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            
            break;
    
    }

}

export default MenssageCard;
