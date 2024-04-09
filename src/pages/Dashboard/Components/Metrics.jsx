import React from "react";
import { IonIcon } from "@ionic/react";
import {
  notifications,
  chatbubble,
  mail,
  chevronForward
} from "ionicons/icons";

function GeneralMetrics() {
    return (
        <div className="bg-blancoBox w-32 rounded-xl w-full p-2">
            <div className="bg-[#F0F0F0] rounded-md p-2">
                <div className="flex justify-between border-b pb-3 border-[#D7D7D7]">
                    <div className="m-auto">
                        <IonIcon icon={notifications} className="text-2xl text-grisText"></IonIcon><span className="text-xs font-medium font-roboto text-grisText">23</span>
                    </div>
                    <div className="m-auto ml-0">
                        <span className="font-roboto text-xs font-light text-grisText">Notifications</span>
                    </div>
                    <div className="m-auto">
                        <IonIcon icon={chevronForward} className="text-2xl text-grisText"></IonIcon>
                    </div>
                </div>
                <div className="flex justify-between border-b pb-3 border-[#D7D7D7]">
                    <div className="m-auto">
                        <IonIcon icon={mail} className="text-2xl text-grisText"></IonIcon><span className="text-xs font-medium font-roboto text-grisText">16</span>
                    </div>
                    <div className="m-auto ml-0">
                        <span className="font-roboto text-xs font-light text-grisText">E-Mails</span>
                    </div>
                    <div className="m-auto">
                        <IonIcon icon={chevronForward} className="text-2xl text-grisText"></IonIcon>
                    </div>
                </div>
                <div className="flex justify-between border-b pb-3 border-[#D7D7D7]">
                    <div className="m-auto">
                        <IonIcon icon={chatbubble} className="text-2xl text-grisText"></IonIcon><span className="text-xs font-medium font-roboto text-grisText">7</span>
                    </div>
                    <div className="m-auto ml-0">
                        <span className="font-roboto text-xs font-light text-grisText">Chats</span>
                    </div>
                    <div className="m-auto">
                        <IonIcon icon={chevronForward} className="text-2xl text-grisText"></IonIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GeneralMetrics;