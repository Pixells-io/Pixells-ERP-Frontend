import React from "react";
import { IonIcon } from "@ionic/react";
import {
  notifications,
  chatbubble,
  chevronForward,
  calendar
} from "ionicons/icons";
import { Link } from "react-router-dom";

function GeneralMetrics() {
    return (
        <div className="bg-blancoBox w-[338px] rounded-xl p-2 h-full shadow-lg">
            <div className="flex pb-3 pt-2 pl-3">
                <span className="text-sm font-medium font-roboto text-grisText">
                    General Metrics
                </span>
            </div>
            <div className="bg-[#F0F0F0] rounded-md p-2">
                <Link to={"/my-profile/notifications"} className="flex justify-between border-b pt-3 pb-3 border-[#D7D7D7] hover:bg-blancoBox">
                    <div className="flex w-2/6">
                        <div className="w-2/4 text-end mr-2">
                            <IonIcon icon={notifications} className="text-xl text-grisText pt-1"></IonIcon>
                        </div>
                        <div className="w-2/4">
                            <span className="text-xs font-medium font-roboto text-grisText">23</span>
                        </div>
                    </div>
                    <div className="w-2/6 text-sta">
                        
                        <span className="font-roboto text-xs font-light text-grisText">Notifications</span>
                    </div>
                    <div className="w-2/6 text-end mr-6">
                        <IonIcon icon={chevronForward} className="text-2xl text-grisText"></IonIcon>
                    </div>
                </Link>
                <Link to={"/calendar"} className="flex justify-between border-b pt-3 pb-3 border-[#D7D7D7] hover:bg-blancoBox">
                    <div className="flex w-2/6">
                        <div className="w-2/4 text-end mr-2">
                            <IonIcon icon={calendar} className="text-xl text-grisText pt-1"></IonIcon>
                        </div>
                        <div className="w-2/4">
                            <span className="text-xs font-medium font-roboto text-grisText">16</span>
                        </div>
                    </div>
                    <div className="w-2/6 text-sta">

                        <span className="font-roboto text-xs font-light text-grisText">Calendar</span>
                    </div>
                    <div className="w-2/6 text-end mr-6">
                        <IonIcon icon={chevronForward} className="text-2xl text-grisText"></IonIcon>
                    </div>
                </Link>
                <Link to={"/chat"} className="flex justify-between border-b pt-3 pb-3 border-[#D7D7D7] hover:bg-blancoBox">
                    <div className="flex w-2/6">
                        <div className="w-2/4 text-end mr-2">
                            <IonIcon icon={chatbubble} className="text-xl text-grisText pt-1"></IonIcon>
                        </div>
                        <div className="w-2/4">
                            <span className="text-xs font-medium font-roboto text-grisText">7</span>
                        </div>
                    </div>
                    <div className="w-2/6 text-sta">

                        <span className="font-roboto text-xs font-light text-grisText">Chats</span>
                    </div>
                    <div className="w-2/6 text-end mr-6">
                        <IonIcon icon={chevronForward} className="text-2xl text-grisText"></IonIcon>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default GeneralMetrics;