import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IonIcon } from "@ionic/react";
import {
  bookmark,
  bookmarkOutline,
  chatbubble,
  chatbubbleOutline,
  ellipse,
  heartOutline,
} from "ionicons/icons";
import React, { useState } from "react";

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

function Publication({ image }) {
  return (
    <div className="w-[473px] rounded-lg bg-blancoBg shadow-md">
      <div className="flex flex-col gap-y-1 p-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img
              src={"https://picsum.photos/id/237/200/300"}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-semibold text-grisText">
              Don Formularo
            </span>
            <IonIcon
              icon={ellipse}
              className="h-1.5 w-1.5 text-grisSubText"
            ></IonIcon>
            <span className="text-sm font-medium text-grisSubText">4 d</span>
          </div>
          <div className="flex items-center">
            <IonIcon
              icon={bookmarkOutline}
              className="h-4 w-5 text-[#696974]"
            ></IonIcon>
            <IonIcon
              icon={bookmark}
              className="h-4 w-5 text-[#696974]"
            ></IonIcon>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-medium text-grisSubText">
            First copy of the year, this is an example!
          </h3>
        </div>
      </div>
      <div className="mt-1 w-full">
        <div className="relative w-full">
          <Carousel className="w-full">
            <CarouselContent className="ml-0 h-[529px] w-full">
              {imgs.map((img, index) => (
                <CarouselItem key={index} className="h-full pl-0">
                  <img
                    loading="lazy"
                    src={img.url}
                    alt=""
                    className="inset-0 h-full w-full rounded-md object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-white p-2 text-inherit opacity-30" />

            <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-white p-2 text-inherit opacity-30" />
          </Carousel>
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-4 p-4">
        <div className="flex gap-x-2">
          <div className="flex items-center gap-x-1">
            <IonIcon
              icon={heartOutline}
              className="h-5 w-6 text-[#696974]"
            ></IonIcon>
            <label className="text-sm font-medium text-grisText">4</label>
          </div>
          <div className="flex items-center gap-x-1">
            <IonIcon
              icon={chatbubbleOutline}
              className="h-5 w-6 text-[#696974]"
            ></IonIcon>
            <label className="text-sm font-medium text-grisText">4</label>
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
            <IonIcon
              icon={heartOutline}
              className="h-3 w-4 text-[#696974]"
            ></IonIcon>
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
          <div className="mt-2">
            <div>
              <input
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="flex w-full rounded-md bg-blancoBg px-2 py-1 font-roboto text-xs text-grisSubText caret-primario outline-none placeholder:text-sm placeholder:font-normal placeholder:text-grisSubText focus:border-2 focus:border-primario"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publication;
