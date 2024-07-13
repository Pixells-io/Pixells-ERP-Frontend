import * as React from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  pieChart,
  calendar,
  listCircle,
} from "ionicons/icons";
import Time from "./Components/Time";
import Activities from "./Components/Activities";
import { Calendar } from "@/components/ui/calendar";
import TimeManagement from "./Components/TimeManagement";
import GeneralMetrics from "./Components/Metrics";
import CustomersGrowth from "./Components/CustomersGrowth";
import { format } from "date-fns";
import { useLoaderData } from "react-router-dom";

function MainDashboard({ isDragging }) {
  const newDate = format(new Date(), "PP");
  const { data } = useLoaderData();
  return (
    <div className="flex w-full">
      <div className="ml-5 mr-5 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">dashboard</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-16">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-[#44444F]">
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
                  <h2 className="font-poppins text-xl font-bold text-[#44444F]">
                    Welcome, {data.user?.name} {data.user?.last_name}
                  </h2>
                </div>
                <div className="pt-2">
                  <span className="font-roboto text-sm font-medium text-[#44444F]">
                    {newDate}
                  </span>
                </div>
              </div>
              <div className="mt-8 flex">
                <div className="flex w-1/3 gap-6">
                  <Time title="TOTAL HOURS" time="52" />
                  <Time title="ACTIVE HOURS" time="24" />
                </div>
                <div className="flex w-2/3 gap-8">
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
                className="mt-[-71px] rounded-2xl border bg-grisText text-white"
              />
            </div>
          </div>
        </div>
        <div className="flex rounded-2xl bg-[#F0F0F0]">
          <div className="p-4">
            <span className="font-poppins text-xl font-semibold text-grisHeading">
              TIME MANAGEMENT
            </span>
            <div>
              <TimeManagement />
            </div>
          </div>
          <div className="p-4">
            <span className="font-poppins text-xl font-semibold text-grisHeading">
              METRICS
            </span>
            <div className="pt-2">
              <GeneralMetrics />
            </div>
          </div>
          <div className="p-4">
            <span className="font-poppins text-xl font-semibold text-grisHeading">
              CUSTOMERS GROWTH
            </span>
            <CustomersGrowth />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainDashboard;
