import * as React from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  pieChart,
  calendar,
  listCircle
} from "ionicons/icons";
import Time from "./Components/Time";
import Activities from "./Components/Activities";
import { Calendar } from "@/components/ui/calendar"
import TimeManagement from "./Components/TimeManagement";
import GeneralMetrics from "./Components/Metrics";
import CustomersGrowth from "./Components/CustomersGrowth";

function MainDashboard() {


    return (
        <div className="flex w-full">
            <div className="flex flex-col ml-5 mr-5 bg-gris px-8 py-4 rounded-lg space-y-4 w-full">
                {/* navigation inside */}
                <div className="flex gap-4 items-center">
                    <div className="flex gap-2  text-gris2">
                        <div className="w-12 h-12">
                            <IonIcon icon={chevronBack} size="large" className="bg-blancoBox p-1 rounded-3xl"></IonIcon>
                        </div>
                        <div className="w-12 h-12">
                            <IonIcon icon={chevronForward} size="large"  className="bg-blancoBox p-1 rounded-3xl"></IonIcon>
                        </div>
                    </div>
                    <div className="font-roboto text-sm text-grisText">dashboard</div>
                </div>
                {/* top content */}
                <div className="flex items-center gap-16">
                    <div>
                        <h2 className=" font-poppins font-bold text-2xl text-[#44444F]">
                        DASHBOARD
                        </h2>
                    </div>
                </div>
                {/* Dashboard Card One */}
                <div className="items-center gap-16 pl-4 pt-5">
                    <div className="flex">
                        <div className="w-4/5">
                            <div>
                                <div>
                                    <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
                                    Welcome, Diego Guzman
                                    </h2>
                                </div>
                                <div className="pt-2">
                                    <span className=" font-roboto font-medium text-sm text-[#44444F]">
                                    9 de Marzo del 2024
                                    </span>
                                </div>
                            </div>
                            <div className="flex mt-8">
                                <div className="w-1/3 gap-6 flex">
                                    <Time
                                        title="TOTAL HOURS"
                                        time="52"
                                    />
                                    <Time
                                        title="ACTIVE HOURS"
                                        time="24"
                                    />
                                </div>
                                <div className="w-2/3 flex gap-8">
                                    <Activities
                                        title="Activities"
                                        subTitle="Today"
                                        percent="20"
                                        number="17"
                                        icon={calendar}
                                    />
                                    <Activities
                                        title="Progress"
                                        subTitle="This Week"
                                        percent="20"
                                        number="80"
                                        icon={pieChart}
                                    />
                                    <Activities
                                        title="Activities"
                                        subTitle="Today"
                                        percent="20"
                                        number="17"
                                        icon={listCircle}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/5">
                            <Calendar
                                mode="single"
                                className="rounded-md mt-[-71px] bg-grisText text-white rounded-2xl border"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-[#F0F0F0] rounded-2xl flex">
                    <div className=" p-4">
                        <span className="font-poppins text-xl font-semibold text-grisHeading" >TIME MANAGEMENT</span>
                        <div>
                            <TimeManagement/>
                        </div>
                    </div>
                    <div className=" p-4">
                        <span className="font-poppins text-xl font-semibold text-grisHeading" >METRICS</span>
                        <div className="pt-2">
                            <GeneralMetrics/>
                        </div>
                    </div>
                    <div className="p-4">
                        <span className="font-poppins text-xl font-semibold text-grisHeading" >CUSTOMERS GROWTH</span>
                        <CustomersGrowth/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainDashboard;