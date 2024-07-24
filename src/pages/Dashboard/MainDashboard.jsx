import React from "react";
import { useLoaderData } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  pieChart,
  calendar,
  listCircle,
} from "ionicons/icons";

import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import Time from "./Components/Time";
import Activities from "./Components/Activities";
import TimeManagement from "./Components/TimeManagement";
import GeneralMetrics from "./Components/Metrics";
import CustomersGrowth from "./Components/CustomersGrowth";

function MainDashboard() {
  const newDate = format(new Date(), "PP");
  const { user, dashboard } = useLoaderData();

  return (
    <div className="flex h-full w-full pb-4">
      <div className="ml-5 mr-5 flex w-full flex-col space-y-4 overflow-auto rounded-lg bg-gris px-8 py-4">
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
                    Welcome, {user?.data?.user?.name}{" "}
                    {user?.data?.user?.last_name}
                  </h2>
                </div>
                <div className="pt-2">
                  <span className="font-roboto text-sm font-medium text-[#44444F]">
                    {newDate}
                  </span>
                </div>
              </div>
              <div className="mt-8 flex gap-8">
                <div className="flex gap-8">
                  <Time title="ACTIVE USERS" time="0" />
                  <Time title="TOTAL USERS" time="0" />
                </div>
                <div className="flex w-2/3 gap-8">
                  <Activities
                    title="Activities"
                    subTitle="Today"
                    percent="20"
                    number={dashboard.data.today_pending}
                    icon={calendar}
                  />
                  <Activities
                    title="Activities"
                    subTitle="This Week"
                    percent="20"
                    number={dashboard.data.week_activity}
                    icon={listCircle}
                  />
                  <Activities
                    title="Progress"
                    subTitle="This Week"
                    percent="20"
                    number={dashboard.data.week_percent}
                    icon={pieChart}
                  />
                </div>
              </div>
            </div>
            <div className="w-fit shrink-0">
              <Calendar
                mode="single"
                className="mt-[-71px] rounded-2xl border bg-grisText text-white"
              />
            </div>
          </div>
        </div>

        <div className="flex min-w-[1300px] rounded-2xl bg-[#F0F0F0] px-4 pb-6 pt-4">
          <div className="p-4">
            <span className="font-poppins text-xl font-semibold text-grisHeading">
              TIME MANAGEMENT
            </span>
            <div className="h-full">
              <TimeManagement />
            </div>
          </div>
          <div className="p-4">
            <span className="font-poppins text-xl font-semibold text-grisHeading">
              METRICS
            </span>
            <div className="h-full">
              <GeneralMetrics />
            </div>
          </div>
          <div className="w-full p-4">
            <span className="font-poppins text-xl font-semibold text-grisHeading">
              CUSTOMERS GROWTH
            </span>
            <div className="h-full rounded-xl bg-blancoBox shadow-lg">
              <div className="">
                <CustomersGrowth />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainDashboard;
