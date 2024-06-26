import * as React from "react";
import { IonIcon } from "@ionic/react";
import { pieChart, calendar, listCircle } from "ionicons/icons"; 

function Activities({title, subTitle, percent, number, icon}) {

    return (
        <div className="bg-blancoBox w-48 rounded-md p-3">
            <div>
            <IonIcon
                icon={icon}
                size="large"
                className="text-gris2"
            ></IonIcon>
            </div>
            <div>
                <span className="text-primarioBotones text-3xl font-bold">
                    {number}
                </span>
            </div>
            <div>
                <div className="flex justify-between">
                    <div>
                        <div>
                            <span className="text-sm font-roboto text-grisText font-semibold">
                                {title}
                            </span>
                        </div>
                        <span className="text-xs font-roboto font-medium text-grisSubText">
                            {subTitle}
                        </span>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center items-center text-gris2">
                            <div className="bg-[#00A25940] text-green-600 font-roboto rounded-xl px-2 py font-medium text-sm">
                            +{percent}%
                            </div>
                            <span className="text-[8px]">vs last month</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Activities;