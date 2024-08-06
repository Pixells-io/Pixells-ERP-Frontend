import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IonIcon } from "@ionic/react";
import { addOutline, arrowForward, chevronBack, close } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function NewTopic({ modal, setModal, functionModal }) {
  const [stepped, setStepped] = useState(1);
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          typeDocument: file.type,
        }),
      );
      setFiles([...newFiles]);
      setStepped(3);
    },
    accept: { "image/*": [".pdf", ".jpeg", ".jpg", ".png"] },
    multiple: true,
    useFsAccessApi: false,
  });

  useEffect(() => {
    clearData();
  }, [modal]);

  const clearData = () => {
    setStepped(1);
    setFiles([]);
  };

  // Maneja la eliminación de un archivo
  const handleDelete = (index) => {
    acceptedFiles.splice(index, 1);
    const filesAuxDelete = files.filter((file, i) => i !== index);
    setFiles(filesAuxDelete);
    if (filesAuxDelete.length == 0) {
      setStepped(2);
    }
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-h-[380px] gap-0 overflow-auto bg-blancoBg p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Topic
          </DialogTitle>
        </DialogHeader>

        <Form
          id="form-topic"
          encType="multipart/form-data"
          action="/topics"
          method="post"
          className={`w-full ${stepped !== 3 ? "flex items-center justify-center" : "hidden"} `}
        >
          <div className={stepped == 1 ? "flex h-[250px] w-full" : "hidden"}>
            <div className="w-full px-4 pt-4">
              <div className="grid grid-cols-12 gap-x-8 gap-y-4">
                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <div className="flex items-center gap-x-2">
                    <img
                      src={"https://picsum.photos/id/237/200/300"}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="text-sm font-semibold text-grisText">
                      Don Formularo
                    </span>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-6">
                  <Select name={"categories"}>
                    <SelectTrigger className="rounded-full border border-[#D9D9D9] text-xs font-light text-[#44444F]">
                      <SelectValue placeholder={"Selecciona Categoría"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem key="1" value="global">
                        Global
                      </SelectItem>
                      <SelectItem key="2" value="notice">
                        Noticias
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="col-span-12">
                  <Input
                    name="title"
                    placeholder="Agrega Título"
                    type="text"
                    className="border-0 bg-inherit text-sm font-light text-grisSubText placeholder:text-grisSubText focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="col-span-12">
                  <Input
                    name="subtitle"
                    placeholder={"Que deseas compartir, Arturo Sánchez?"}
                    type="text"
                    className="border-0 bg-inherit text-sm font-light text-grisSubText placeholder:text-grisSubText focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="col-span-12">
                  <div className="flex w-full justify-end">
                    <Button
                      type="button"
                      className="rounded-xl bg-primarioBotones"
                      onClick={() => setStepped(2)}
                    >
                      <IonIcon
                        icon={arrowForward}
                        className="h-5 w-5 text-white"
                      ></IonIcon>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`h-[318px] w-full ${stepped == 2 ? "flex items-center justify-center" : "hidden"}`}
          >
            <div
              {...getRootProps()}
              className="flex flex-col items-center justify-center gap-y-4"
            >
              <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-[#5B89FF] bg-[#5B89FF]/[0.12] px-4 py-2">
                <input
                  id="filesTopic"
                  name="filesTopic[]"
                  {...getInputProps()}
                />
                <IonIcon
                  icon={addOutline}
                  size="large"
                  className="text-primarioBotones"
                ></IonIcon>
              </div>
              <label className="text-xs font-light text-primarioBotones">
                Selecciona o Arrastra
              </label>
            </div>
          </div>
        </Form>

        <div className={stepped == 3 ? "block" : "hidden"}>
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
                      <IonIcon
                        icon={close}
                        className="h-6 w-6 text-white"
                      ></IonIcon>
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

              <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-white p-2 text-inherit opacity-30" />
              <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-white p-2 text-inherit opacity-30" />

              <Button
                type="button"
                className="absolute bottom-1 left-4 z-10 h-8 w-8 cursor-pointer rounded-full bg-[#BDBDBD]/[0.4] p-2"
                onClick={() => setStepped(2)}
              >
                <IonIcon
                  icon={chevronBack}
                  className="h-6 w-6 text-white"
                ></IonIcon>
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
        </div>

        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default NewTopic;
