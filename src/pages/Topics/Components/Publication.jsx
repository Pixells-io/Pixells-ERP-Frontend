import React, { useEffect, useState } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";

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

import { getTopic } from "../utils";
import { createPusherClient } from "@/lib/pusher";

function Publication({ topic, url }) {
  const navigation = useNavigation();
  const [topicData, setTopicData] = useState(null);
  const [topicId, setTopicId] = useState(topic.id);
  const [showComments, setShowComments] = useState(0);

  //input states
  const [commentInput, setCommentInput] = useState("");

  const pusherClient = createPusherClient();

  useEffect(() => {
    setTopicId(topic.id);

    getTopicInfo(topicId);

    async function getTopicInfo(topic) {
      let { data } = await getTopic(topic);
      setTopicData(data);
    }

    //Web Socket
    let channel = pusherClient.subscribe(`private-get-topic.${topicId}`);

    channel.bind("fill-topic-info", ({ topic }) => {
      getTopicInfo(topic);
    });

    return () => {
      pusherClient.unsubscribe(`private-get-topic.${topicId}`);
    };
  }, [topicId]);

  useEffect(() => {
    if (navigation.state === "idle") {
      setCommentInput("");
    }
  }, [navigation.state]);

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
            {topicData?.favorite > 0 ? (
              <Form action={url} method="post">
                <input type="hidden" name="topic" value={topicId} />
                <input type="hidden" name="type" value={4} />
                <button type="submit">
                  <IonIcon
                    icon={bookmark}
                    className="h-4 w-5 cursor-pointer text-[#696974]"
                  ></IonIcon>
                </button>
              </Form>
            ) : (
              <Form action={url} method="post">
                <input type="hidden" name="topic" value={topicId} />
                <input type="hidden" name="type" value={4} />
                <button type="submit">
                  <IonIcon
                    icon={bookmarkOutline}
                    className="h-4 w-5 cursor-pointer text-[#696974]"
                  ></IonIcon>
                </button>
              </Form>
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
          <div className="mt-1 flex items-center gap-x-1">
            <Form action={url} method="post">
              <input type="hidden" name="topic" value={topicId} />
              <input type="hidden" name="type" value={1} />
              <button type="submit">
                {topicData?.my_like > 0 ? (
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
              </button>
            </Form>
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
        {showComments == 0 ? (
          <>
            {topicData?.main_comment?.length != "0" ? (
              <>
                <div className="flex flex-col">
                  <div className="flex w-full justify-between gap-x-2">
                    <img
                      src={topicData?.main_comment?.img}
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="w-5/6">
                      <p style={{ lineHeight: "1.1" }}>
                        <span className="text-sm font-semibold text-grisText">
                          {topicData?.main_comment?.name}
                        </span>
                        <span className="ml-2 text-xs font-normal text-[#44444F]">
                          {topicData?.main_comment?.comment}
                        </span>
                      </p>
                    </div>
                    <div>
                      {topicData?.main_comment?.my_like_comment > 0 ? (
                        <Form action={url} method="post">
                          <input
                            type="hidden"
                            name="comment"
                            value={topicData?.main_comment?.id}
                          />
                          <input type="hidden" name="type" value={3} />
                          <button type="submit">
                            <IonIcon
                              icon={heart}
                              className="h-3 w-4 cursor-pointer text-[#DF354F]"
                            ></IonIcon>
                          </button>
                        </Form>
                      ) : (
                        <Form action={url} method="post">
                          <input
                            type="hidden"
                            name="comment"
                            value={topicData?.main_comment?.id}
                          />
                          <input type="hidden" name="type" value={3} />
                          <button type="submit">
                            <IonIcon
                              icon={heartOutline}
                              className="h-3 w-4 cursor-pointer text-[#696974]"
                            ></IonIcon>
                          </button>
                        </Form>
                      )}
                    </div>
                  </div>
                  <div className="ml-16 mt-1 flex items-start gap-x-4">
                    {topicData?.main_comment?.latest > 0 ? (
                      <span className="text-xs font-medium text-grisSubText">
                        {topicData?.main_comment?.latest} d
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-grisSubText">
                        Today
                      </span>
                    )}
                    <span className="text-xs font-medium text-grisSubText">
                      {topicData?.main_comment?.likes} likes
                    </span>
                    {/* 
                      <span className="text-xs font-medium text-grisSubText hover:cursor-pointer">
                        Responder
                      </span>
                      */}
                  </div>
                </div>
                <span
                  className="text-xs font-medium text-grisSubText"
                  onClick={() => setShowComments(1)}
                >
                  Ver Mas
                </span>
              </>
            ) : null}
          </>
        ) : (
          <>
            {topicData?.comments?.map((comment, i) => (
              <div className="flex flex-col">
                <div className="flex w-full justify-between gap-x-2">
                  <img src={comment.img} className="h-8 w-8 rounded-full" />
                  <div className="w-5/6">
                    <p style={{ lineHeight: "1.1" }}>
                      <span className="text-sm font-semibold text-grisText">
                        {comment.name}
                      </span>
                      <span className="ml-2 text-xs font-normal text-[#44444F]">
                        {comment.comment}
                      </span>
                    </p>
                  </div>
                  <div>
                    {comment.my_like_comment > 0 ? (
                      <Form action={url} method="post">
                        <input
                          type="hidden"
                          name="comment"
                          value={comment.id}
                        />
                        <input type="hidden" name="type" value={3} />
                        <button type="submit">
                          <IonIcon
                            icon={heart}
                            className="h-3 w-4 cursor-pointer text-[#DF354F]"
                          ></IonIcon>
                        </button>
                      </Form>
                    ) : (
                      <Form action={url} method="post">
                        <input
                          type="hidden"
                          name="comment"
                          value={comment.id}
                        />
                        <input type="hidden" name="type" value={3} />
                        <button type="submit">
                          <IonIcon
                            icon={heartOutline}
                            className="h-3 w-4 cursor-pointer text-[#696974]"
                          ></IonIcon>
                        </button>
                      </Form>
                    )}
                  </div>
                </div>
                <div className="ml-16 mt-1 flex items-start gap-x-4">
                  {comment.latest > 0 ? (
                    <span className="text-xs font-medium text-grisSubText">
                      {comment.latest} d
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-grisSubText">
                      Today
                    </span>
                  )}
                  <span className="text-xs font-medium text-grisSubText">
                    {comment.likes} likes
                  </span>
                  {/* 
              <span className="text-xs font-medium text-grisSubText hover:cursor-pointer">
                Responder
              </span>
              */}
                </div>
              </div>
            ))}
            <span
              className="text-xs font-medium text-grisSubText"
              onClick={() => setShowComments(0)}
            >
              Ver Menos
            </span>
          </>
        )}
        <div>
          <div>
            <Form action={url} method="post">
              <input type="hidden" name="topic" value={topicId} />
              <input type="hidden" name="type" value={2} />
              <Input
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="border-0 bg-inherit text-sm font-normal text-grisSubText placeholder:text-grisSubText focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publication;
