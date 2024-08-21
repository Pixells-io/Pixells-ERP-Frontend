import React from "react";
import { useLoaderData } from "react-router-dom";

import { pieChart, calendar, listCircle } from "ionicons/icons";

import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import Time from "./Components/Time";
import Activities from "./Components/Activities";
import TimeManagement from "./Components/TimeManagement";
import GeneralMetrics from "./Components/Metrics";
import CustomersGrowth from "./Components/CustomersGrowth";
import NavigationHeader from "@/components/navigation-header";

function MainDashboard() {
  const newDate = format(new Date(), "PP");
  const { user, dashboard } = useLoaderData();

  return (
    <div className="flex h-full w-full pb-4">
      <div className="ml-5 mr-5 flex w-full flex-col space-y-4 overflow-auto rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}
        <div className="flex items-center gap-16">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-[#44444F]">
              DASHBOARD
            </h2>
          </div>
        </div>
        {/* Dashboard Card One */}
        <div className="ml-0 items-center gap-16 pt-5 md:pl-4">
          <div className="flex">
            <div className="w-4/5">
              <h2 className="font-poppins text-xl font-bold text-[#44444F]">
                Welcome, {user?.data?.user?.name} {user?.data?.user?.last_name}
              </h2>
              <div className="pt-2">
                <span className="font-roboto text-sm font-medium text-[#44444F]">
                  {newDate}
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-8">
                <div className="flex flex-col gap-8 md:flex-row">
                  <Time
                    title="ACTIVE USERS"
                    time={dashboard.data.active_users}
                  />
                  <Time title="TOTAL USERS" time={dashboard.data.user_create} />
                </div>
                <div className="flex w-full flex-wrap gap-8 md:w-2/3">
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
            <div className="hidden h-fit w-fit shrink-0 md:flex">
              <Calendar
                mode="single"
                className="mt-[-71px] rounded-2xl border bg-grisText text-white"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col rounded-2xl bg-[#F0F0F0] px-1 pb-6 pt-4 md:min-w-[1300px] md:flex-row md:px-4">
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
              <GeneralMetrics
                notifications={dashboard.data.notifications}
                calendar={dashboard.data.calendar}
                chats={dashboard.data.chats}
              />
            </div>
          </div>
          <div className="hidden w-full p-4 md:flex">
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
