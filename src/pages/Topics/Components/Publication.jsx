import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { IonIcon } from "@ionic/react";
import {
  bookmark,
  bookmarkOutline,
  chatbubbleOutline,
  ellipse,
  heart,
  heartOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { getTopic } from "../utils";

const imgs = [
  {
    id: 1,
    url: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 2,
    url: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
  },
  {
    id: 3,
    url: "https://picsum.photos/id/0/5000/3333",
  },
  {
    id: 4,
    url: "https://picsum.photos/id/19/2500/1667",
  },
];

function Publication({ topic }) {
  const [topicData, setTopicData] = useState(null);

  useEffect(() => {
    getTopicInfo(topic);

    async function getTopicInfo(topic) {
      let { data } = await getTopic(topic.id);
      setTopicData(data);

      console.log(data);
    }
  }, []);

  return (
    <div className="w-[473px] rounded-lg bg-blancoBg shadow-md">
      <div className="flex flex-col gap-y-1 p-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img src={topicData?.user_img} className="h-8 w-8 rounded-full" />
            <span className="text-sm font-semibold text-grisText">
              {topicData?.title}
            </span>
            <IonIcon
              icon={ellipse}
              className="h-1.5 w-1.5 text-grisSubText"
            ></IonIcon>
            <span className="text-sm font-medium text-grisSubText">
              {topicData?.day_diff === 0 ? "Today" : topicData?.day_diff + "d"}
            </span>
          </div>
          <div className="flex items-center">
            {true ? (
              <IonIcon
                icon={bookmark}
                className="h-4 w-5 cursor-pointer text-[#696974]"
              ></IonIcon>
            ) : (
              <IonIcon
                icon={bookmarkOutline}
                className="h-4 w-5 cursor-pointer text-[#696974]"
              ></IonIcon>
            )}
          </div>
        </div>
        <div className="mt-2">
          <h3 className="text-sm font-bold text-grisSubText">
            {topicData?.title_topic}
          </h3>
        </div>
        <div className="mt-1">
          <h3 className="text-xs font-medium text-grisSubText">
            {topicData?.text}
          </h3>
        </div>
      </div>
      <div className="mt-1 w-full">
        <div className="relative w-full">
          {topicData?.documents?.length > 0 ? (
            <Carousel className="w-full">
              <CarouselContent className="ml-0 h-[529px] w-full">
                {topicData?.documents.map((img, index) => (
                  <CarouselItem key={index} className="h-full pl-0">
                    <img
                      loading="lazy"
                      src={img.document}
                      alt=""
                      className="inset-0 h-full w-full rounded-md object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full border-0 bg-white/[0.6] p-2 text-inherit hover:bg-[#44444F]/[0.8]"
                colorIcon="group-hover:text-white/[0.4] text-[#44444F]/[0.8]"
              />
              <CarouselNext
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full border-0 bg-white/[0.6] p-2 text-inherit hover:bg-[#44444F]/[0.8]"
                colorIcon="group-hover:text-white/[0.4] text-[#44444F]/[0.8]"
              />
            </Carousel>
          ) : null}
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-4 p-4">
        <div className="flex gap-x-2">
          <div className="flex items-center gap-x-1">
            {topicData?.my_like == true ? (
              <IonIcon
                icon={heart}
                className="h-5 w-6 cursor-pointer text-[#DF354F]"
              ></IonIcon>
            ) : (
              <IonIcon
                icon={heartOutline}
                className="h-5 w-6 cursor-pointer text-[#696974]"
              ></IonIcon>
            )}

            <label className="text-sm font-medium text-grisText">
              {topicData?.likes}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <IonIcon
              icon={chatbubbleOutline}
              className="h-5 w-6 cursor-pointer text-[#696974]"
            ></IonIcon>
            <label className="text-sm font-medium text-grisText">
              {topicData?.comments_count}
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full justify-between gap-x-2">
            <img
              src={"https://picsum.photos/200/300?grayscale"}
              className="h-8 w-8 rounded-full"
            />
            <div className="w-5/6">
              <p style={{ lineHeight: "1.1" }}>
                <span className="text-sm font-semibold text-grisText">
                  Don Formularos
                </span>
                <span className="ml-2 text-xs font-normal text-[#44444F]">
                  Exelent article, this is awesome! lore
                </span>
              </p>
            </div>
            <div>
              {true ? (
                <IonIcon
                  icon={heart}
                  className="h-3 w-4 cursor-pointer text-[#DF354F]"
                ></IonIcon>
              ) : (
                <IonIcon
                  icon={heartOutline}
                  className="h-3 w-4 cursor-pointer text-[#696974]"
                ></IonIcon>
              )}
            </div>
          </div>
          <div className="ml-16 mt-1 flex items-start gap-x-4">
            <span className="text-xs font-medium text-grisSubText">4 d</span>
            <span className="text-xs font-medium text-grisSubText">
              2 likes
            </span>
            <span className="text-xs font-medium text-grisSubText hover:cursor-pointer">
              Responder
            </span>
          </div>
        </div>
        <div>
          <div>
            <Input
              type="text"
              name="comment"
              placeholder="Add a comment..."
              className="border-0 bg-inherit text-sm font-normal text-grisSubText placeholder:text-grisSubText focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publication;
