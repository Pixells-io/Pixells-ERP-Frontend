import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { IonIcon } from "@ionic/react";
import { imageOutline, closeCircle } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const VariableForm = ({ attrb, variableData, setVariableData, isEdit = false }) => {
  const allSlots = attrb.data;

  const selectClasses =
    "border-gris2-transparent ml-4 w-2 rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones sm:w-96 lg:w-[500px] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const newImages = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
        type: file.type,
      }));
      setVariableData((prevData) => ({
        ...prevData,
        images: [...prevData.images, ...newImages],
      }));
    },
  });

  const handleRemoveImage = (index) => {
    setVariableData((prevData) => {
      const removedImage = prevData.images[index];
      const updatedImages = prevData.images.filter((_, i) => i !== index);
      let updatedImagesDestroy = prevData.images_destroy || [];
      
      // Si la imagen eliminada tiene un ID, agrégalo a images_destroy
      if (removedImage.id) {
        updatedImagesDestroy = [...updatedImagesDestroy, removedImage.id];
      }

      return {
        ...prevData,
        images: updatedImages,
        images_destroy: updatedImagesDestroy,
      };
    });
  };

  const handleSelectChange = (value) => {
    setVariableData((prevData) => ({
      ...prevData,
      selectedSlot: value,
    }));
  };

  const handlerAddGroup = () => {
    if (variableData.selectedSlot) {
      const newGroup = allSlots.find((slot) => slot.id === variableData.selectedSlot);
      if (
        newGroup &&
        !variableData.selectedGroups.some((group) => group.id === variableData.selectedSlot)
      ) {
        const groupWithActiveStatus = {
          id: newGroup.id,
          name: newGroup.name,
          slots: newGroup.slots.map((slot) => ({
            id: slot.id,
            name: slot.name,
            active: 0,
          })),
        };

        setVariableData((prevData) => ({
          ...prevData,
          selectedGroups: [
            ...prevData.selectedGroups,
            groupWithActiveStatus,
          ],
          selectedSlot: "",
        }));
      }
    }
  };

  const handleSlotButtonClick = (groupId, slotId) => {
    setVariableData((prevData) => ({
      ...prevData,
      selectedGroups: prevData.selectedGroups.map((group) => {
        if (group.id === groupId) {
          const updatedSlots = group.slots.map((slot) =>
            slot.id === slotId
              ? { ...slot, active: slot.active === 1 ? 0 : 1 } // Toggle active between 0 and 1
              : slot
          );
          return { 
            id: group.id, 
            name: group.name, 
            slots: updatedSlots
          };
        }
        return group; 
      }),
    }));
  };
  

  return (
    <div className="grid grid-cols-2 gap-2">
      {/* Primera columna */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Select value={variableData.selectedSlot} onValueChange={handleSelectChange}>
            <SelectTrigger className={selectClasses}>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              {allSlots.map((slot) => (
                <SelectItem key={slot.id} value={slot.id}>
                  {slot.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            className={"rounded-full bg-[#5B89FF] px-5 py-4 hover:bg-[#5B89FF]"}
            onClick={handlerAddGroup}
          >
            Agregar
          </Button>
        </div>
        <div className="h-[318px] w-[550px] pl-6 overflow-auto">
          {variableData.selectedGroups.map((group) => (
            <div key={group.id} className="border-b border-[#D7D7D7] pb-4 pt-4">
              <div className="flex items-center space-x-4 p-2 pb-6 pt-6">
                <div className="w-32 font-roboto text-[14px] text-gris2">
                  {group.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.slots &&
                    group.slots.map((slot) => (
                      <Button
                        key={slot.id}
                        className={`flex items-center justify-center rounded-full border border-gris2 bg-white text-[14px] text-gris2 hover:border-transparent hover:bg-[#5B89FF] hover:text-[#FBFBFB] ${
                          slot.active === 1
                            ? "border border-[#5B89FF] bg-transparent text-primarioBotones"
                            : ""
                        }`}
                        onClick={() => handleSlotButtonClick(group.id, slot.id)}
                      >
                        {slot.name}
                      </Button>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Segunda columna con carrusel para imágenes */}
      <div className="relative col-span-1 p-8">
        {variableData.images.length > 0 ? (
          <Carousel className="w-full">
            <CarouselContent className="ml-0 h-[318px] w-full">
              {variableData.images.map((image, index) => (
                <CarouselItem
                  key={"carousel-item-" + index}
                  className="relative h-full pl-0"
                >
                  <Button
                    type="button"
                    className="absolute right-2 top-2 h-6 w-6 cursor-pointer rounded-full bg-[#44444F]/[0.8] p-1"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <IonIcon
                      icon={closeCircle}
                      className="h-6 w-6 text-white"
                    ></IonIcon>
                  </Button>
                  <img
                    loading="lazy"
                    src={image.preview || image.image}
                    alt="Imagen"
                    className="inset-0 h-full w-full object-cover"
                  />
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
          </Carousel>
        ) : (
          <div
            {...getRootProps()}
            className="flex h-[300px] flex-col items-center justify-center border-2 border-dashed p-4 pb-8"
          >
            <IonIcon icon={imageOutline} className="h-12 w-12 text-gray-500" />
            <span className="ml-2 text-gray-500">
              Galería de Imagenes (Arrastra o selecciona imágenes)
            </span>
            <input {...getInputProps()} />
          </div>
        )}
      </div>
    </div>
  );
};

export default VariableForm;