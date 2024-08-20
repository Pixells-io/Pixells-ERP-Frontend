import React, { useEffect, useState } from "react";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import Publication from "./Components/Publication";
import Categories from "./Components/Categories";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import {
  getTopics,
  storeComment,
  storeFavorite,
  storeLike,
  storeLikeComment,
} from "./utils";
import { createPusherClient } from "@/lib/pusher";

function MainTopics() {
  const { categories, topics, analytic } = useLoaderData();
  const location = useLocation();
  const { id } = useParams();

  const [topicsData, setTopicsData] = useState(topics);
  const [categoryId, setCategoryId] = useState(id);

  const pusherClient = createPusherClient();

  useEffect(() => {
    setCategoryId(id);
    let channel = pusherClient.subscribe(`private-get-topics`);

    channel.bind("fill-topics", ({ category }) => {
      getTopicsArray(category);
    });

    async function getTopicsArray(category) {
      let newData = await getTopics(category);

      setTopicsData(newData);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-topics`);
    };
  }, [location, categoryId]);

  return (
    <div className="flex w-full gap-x-4">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-auto rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">tickets </div>
        </div>
        {/* top content */}
        <div className="flex flex-col gap-y-2">
          <h2 className="font-poppins text-xl font-bold text-grisHeading">
            Topics
          </h2>
          <div className="font-roboto text-grisSubText">
            <div className="text-xs">General Notices</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-4">
          {topicsData.data.map((topic, i) => (
            <Publication topic={topic} key={i} />
          ))}
        </div>
      </div>
      <Categories categories={categories.data} analytic={analytic.data} />
    </div>
  );
}

export default MainTopics;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("type")) {
    case "1":
      await storeLike(data);
      break;
    case "2":
      await storeComment(data);
      break;
    case "3":
      await storeLikeComment(data);
      break;
    case "4":
      await storeFavorite(data);
      break;
  }
  return "1";
}
