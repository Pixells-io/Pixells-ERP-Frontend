import React, { useRef, useState } from "react";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

function CardCarousel() {
  // scroll
  const lastElementRef = useRef(null);
  const contentRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollInterval = useRef(null);

  // Desplazarse al ultimo elemento cuando la pagina se carga
  useEffect(() => {
    if (lastElementRef.current) {
      contentRef.current.scrollLeft = contentRef.current.scrollWidth;
    }
  }, []);

  const startScrollingLeft = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      scrollInterval.current = setInterval(() => {
        if (contentRef.current) {
          contentRef.current.scrollBy({ left: -1, behavior: "auto" });
        }
      }, 10);
    }
  };

  // Función para detener el desplazamiento
  const stopScrolling = () => {
    if (isScrolling) {
      clearInterval(scrollInterval.current);
      setIsScrolling(false);
    }
  };

  const startScrollingRight = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      scrollInterval.current = setInterval(() => {
        if (contentRef.current) {
          contentRef.current.scrollBy({ left: 2, behavior: "auto" });
        }
      }, 10);
    }
  };

  return (
    <>
      <div className="flex h-12 w-12 items-center">
        <Button
          variant="ghost"
          size="icon"
          onMouseDown={startScrollingLeft}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
        >
          <IonIcon
            icon={chevronBack}
            size="small"
            className="rounded-3xl text-grisText"
          ></IonIcon>
        </Button>
      </div>

      <div
        ref={contentRef}
        className="flex w-[350px] gap-4 overflow-hidden transition-all duration-100 ease-in-out"
      >
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            ref={index == 0 ? lastElementRef : null}
            className="min-w-[100px] cursor-pointer rounded bg-blancoBox hover:bg-[#D7D7D7]"
          >
            <div className="h-[3px] w-full rounded-t bg-primario"></div>
            <div className="flex w-full flex-col justify-center p-1">
              <span className="text-center text-[10px] font-normal text-[#8f8f8f]">
                Last OC
              </span>
              <div className="flex justify-center gap-1">
                <span className="text-[10px] font-semibold text-[#696974]">
                  No. Doc.
                </span>
                <span className="text-[10px] font-semibold text-[#696974]">
                  {index}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex h-12 w-12 items-center">
        <Button
          variant="ghost"
          size="icon"
          onMouseDown={startScrollingRight}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
        >
          <IonIcon
            icon={chevronForward}
            size="small"
            className="rounded-3xl text-grisText"
          ></IonIcon>
        </Button>
      </div>
    </>
  );
}

export default CardCarousel;
