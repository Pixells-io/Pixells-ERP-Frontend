import React, { useEffect, useState } from "react";

import Publication from "./Components/Publication";
import Categories from "./Components/Categories";
import {
  redirect,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  getTopics,
  storeComment,
  storeFavorite,
  storeLike,
  storeLikeComment,
} from "./utils";
import { createPusherClient } from "@/lib/pusher";
import NavigationHeader from "@/components/navigation-header";

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
        <NavigationHeader />
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
            <Publication topic={topic} key={i} url={`/topics/${id}`} />
          ))}
        </div>
      </div>
      <Categories categories={categories.data} analytic={analytic.data} />
    </div>
  );
}

export default MainTopics;

export async function Action({ request, params }) {
  const data = await request.formData();
  const type = data.get("type");

  switch (type) {
    case "1":
      await storeLike(data);
      return redirect(`/topics/${params.id}`);
    case "2":
      await storeComment(data);
      return redirect(`/topics/${params.id}`);
    case "3":
      await storeLikeComment(data);
      return redirect(`/topics/${params.id}`);
    case "4":
      await storeFavorite(data);
      return redirect(`/topics/${params.id}`);
  }
  return redirect(`/topics/${params.id}`);
}
