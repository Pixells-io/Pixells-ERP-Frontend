import React, { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IonIcon } from "@ionic/react";
import { chevronBack, close } from "ionicons/icons";
import { Button } from "@/components/ui/button";

function StepThree({ setStepped, files, setFiles, acceptedFiles, inputRef }) {

  const handleDelete = (index) => {
    acceptedFiles.splice(index, 1);
    const filesAuxDelete = files.filter((file, i) => i !== index);
    setFiles(filesAuxDelete);
    if (filesAuxDelete.length == 0) {
      setStepped(2);
    }

    //dataTransfer mandando imagenes y pdf
    let list = new DataTransfer();
    filesAuxDelete.forEach((file) => {
      list.items.add(file);
    });
    inputRef.current.files = list.files;
  };

  return (
    <div className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent className="ml-0 h-[318px] w-full">
          {files.map((file, index) => (
            <CarouselItem
              key={"cItem-" + index}
              className="relative h-full pl-0"
            >
              <Button
                type="button"
                className="absolute right-2 top-2 h-6 w-6 cursor-pointer rounded-full bg-[#44444F]/[0.8] p-1"
                onClick={() => handleDelete(index)}
              >
                <IonIcon icon={close} className="h-6 w-6 text-white"></IonIcon>
              </Button>
              {file.typeDocument == "application/pdf" ? (
                <iframe
                  className="h-full w-full"
                  src={URL.createObjectURL(file)}
                  frameBorder="0"
                ></iframe>
              ) : (
                <img
                  loading="lazy"
                  src={URL.createObjectURL(file)}
                  alt=""
                  className="inset-0 h-full w-full object-cover"
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full border-0 bg-[#44444F]/[0.8] p-2 text-inherit hover:bg-white/[0.8]"
          colorIcon="group-hover:text-[#44444F]/[0.8] text-white/[0.8]"
        />
        <CarouselNext
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full border-0 bg-[#44444F]/[0.8] p-2 text-inherit hover:bg-white/[0.8]"
          colorIcon="group-hover:text-[#44444F]/[0.8] text-white/[0.8]"
        />

        <Button
          type="button"
          className="absolute bottom-1 left-4 z-10 h-8 w-8 cursor-pointer rounded-full bg-[#BDBDBD]/[0.4] p-2"
          onClick={() => setStepped(2)}
        >
          <IonIcon icon={chevronBack} className="h-6 w-6 text-white"></IonIcon>
        </Button>
        <Button
          form="form-topic"
          type="submit"
          className="absolute bottom-1 right-4 z-10 bg-primarioBotones"
        >
          Agregar
        </Button>
      </Carousel>
    </div>
  );
}

export default StepThree;
