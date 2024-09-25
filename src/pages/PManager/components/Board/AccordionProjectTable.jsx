import React from "react";
import { Form } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { checkmarkCircle, checkmarkCircleOutline, trash } from "ionicons/icons";
import ActivityNameInPut from "../Form/ActivityNameInput";
import AssignedMenu from "../AssignedMenu";
import AddUserActivity from "../Form/AddUserActivity";
import DatePickerPM from "@/components/date-picker-pm";
import ActivityComment from "../Form/ActivityComment";
import ActivityDocument from "../Form/ActivityDocument";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ActivityDestroy from "../ActivityDestroy";

function AccordionProjectTable({ activity, id, projectId, users }) {
  return (
    <div className="flex h-full w-full flex-col items-center gap-1 border-t-[1px] text-center">
      <div className="flex w-full items-center px-2">
        <div className="flex justify-center gap-2">
          {activity.user_id == 1 ? (
            <p>&ball; {activity.id}</p>
          ) : (
            <p className="text-grisSubText">{activity.id}</p>
          )}
          <Form
            action={`/project-manager/${id}/projects/${projectId}`}
            method="post"
            id="check_activity-form"
            name="phase"
          >
            <input type="hidden" name="action" value="activity_check" />
            <input type="hidden" name="activity_id" value={activity.id} />
            <button type="submit" className="">
              {activity.status === 0 ? (
                <IonIcon
                  icon={checkmarkCircleOutline}
                  className="h-5 w-5 text-grisHeading"
                />
              ) : (
                <IonIcon
                  icon={checkmarkCircle}
                  className="h-5 w-5 text-[#00A259]"
                />
              )}
            </button>
          </Form>
        </div>

        <div className="flex w-full items-center justify-center gap-2">
          <ActivityNameInPut
            defaultName={activity?.name}
            activity_id={activity?.id}
            status={activity.status}
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-2">
        <div className="flex w-full gap-6">
          <DatePickerPM
            activity_id={activity.id}
            dataDate={activity?.start}
            name="start"
          />
          <DatePickerPM
            activity_id={activity.id}
            dataDate={activity?.end}
            name="end"
          />
        </div>

        <div className="flex items-center gap-1">
          <AssignedMenu users={activity?.users} />
          <AddUserActivity users={users?.data} activity_id={activity.id} />
        </div>

        <div className="flex justify-center">
          <ActivityComment
            activity_id={activity?.id}
            comments={activity?.comment}
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-2 px-2">
        <div className="flex items-center justify-center">
          <ActivityDocument
            activity_id={activity?.id}
            documents={activity?.documents}
          />
        </div>

        {/* <div className="flex items-center justify-center">
          <Avatar className="flex h-6 w-6">
            <AvatarImage src={activity?.creator?.img} />
            <AvatarFallback>??</AvatarFallback>
          </Avatar>
        </div> */}

        {/* <div className="">
          <p className="text-[12px] font-normal text-grisHeading">
            {activity?.duration + 1} Days
          </p>
        </div>
        <div className="">
          <p className="text-[12px] font-normal text-grisHeading">
            {activity?.status === 0 ? (
              <>{activity?.remaining + 1} Days</>
            ) : (
              <span className="rounded-3xl bg-[#00A2591F] px-2 py-1 font-roboto text-xs font-normal leading-3 text-[#00A259] hover:bg-[#00A2591F]">
                Done
              </span>
            )}
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default AccordionProjectTable;
