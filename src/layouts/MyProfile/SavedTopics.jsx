import React from "react";
import {
  accessibilityOutline,
  addCircleOutline,
  chevronBack,
  chevronForward,
  keyOutline,
  laptopOutline,
  notificationsOutline,
  searchOutline,
} from "ionicons/icons";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import NavigationHeader from "@/components/navigation-header";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { destroyNotification } from "@/lib/actions";
import Publication from "@/pages/Topics/Components/Publication";
function SavedTopics() {
  const navigate = useNavigate();

  const { data } = useLoaderData();

  async function destroyNotificationTwo(noti, url) {
    await destroyNotification(noti);
    return navigate("/" + url);
  }

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              FAVORITES TOPICS
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-4 overflow-auto">
          {data.map((topic, i) => (
            <Publication topic={topic} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default SavedTopics;
