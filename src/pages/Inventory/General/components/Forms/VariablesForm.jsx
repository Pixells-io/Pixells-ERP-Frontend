import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { IonIcon } from "@ionic/react";
import { imageOutline, closeCircle } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const VariableForm = ({ attrb, variableData, setVariableData }) => {
  const [initialLoadDone, setInitialLoadDone] = useState(false);

  useEffect(() => {
    if (variableData.Groups?.length > 0 && !initialLoadDone) {
      const initialSelectedGroups = attrb.data
        .map(slot => {
          const matchingGroup = variableData.Groups.find(group => group.attribute_name === slot.name);
          if (!matchingGroup) return null;
          return {
            id: slot.id,
            name: slot.name,
            slots: slot.slots.map(slotItem => ({
              id: slotItem.id,
              name: slotItem.name,
              active: variableData.Groups.some(group => group.product_attribute_id === slotItem.id.toString()) ? 1 : 0
            }))
          };
        })
        .filter(Boolean);

      setVariableData(prevData => ({
        ...prevData,
        selectedGroups: initialSelectedGroups,
        variables_destroy: [],
        variables_add: []
      }));
      setInitialLoadDone(true);
    }
  }, [variableData.Groups, attrb.data, initialLoadDone]);

  const updateVariableData = (updater) => {
    setVariableData(prevData => ({
      ...prevData,
      ...updater(prevData)
    }));
  };

  const handleSelectChange = (value) => updateVariableData(() => ({ selectedSlot: value }));

  const handlerAddGroup = () => {
    if (!variableData.selectedSlot) return;

    const newGroup = attrb.data.find(slot => slot.id === variableData.selectedSlot);
    if (!newGroup || variableData.selectedGroups.some(group => group.id === variableData.selectedSlot)) return;

    const groupWithActiveStatus = {
      id: newGroup.id,
      name: newGroup.name,
      slots: newGroup.slots.map(slot => ({ ...slot, active: 0 }))
    };

    updateVariableData(prevData => ({
      selectedGroups: [...prevData.selectedGroups, groupWithActiveStatus],
      selectedSlot: "",
      variables_add: initialLoadDone ? [...prevData.variables_add, groupWithActiveStatus.id] : prevData.variables_add
    }));
  };

  const handleDeleteGroup = (groupId) => {
    updateVariableData(prevData => ({
      selectedGroups: prevData.selectedGroups.filter(group => group.id !== groupId),
      variables_destroy: [...prevData.variables_destroy, groupId]
    }));
  };

  const handleSlotButtonClick = (groupId, slotId) => {
    updateVariableData(prevData => ({
      selectedGroups: prevData.selectedGroups.map(group =>
        group.id === groupId
          ? {
              ...group,
              slots: group.slots.map(slot =>
                slot.id === slotId ? { ...slot, active: slot.active === 1 ? 0 : 1 } : slot
              )
            }
          : group
      )
    }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const newImages = acceptedFiles.map(file => ({
        file,
        preview: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
        type: file.type,
      }));
      updateVariableData(prevData => ({ images: [...prevData.images, ...newImages] }));
    },
  });

  const handleRemoveImage = (index) => {
    updateVariableData(prevData => {
      const removedImage = prevData.images[index];
      const updatedImages = prevData.images.filter((_, i) => i !== index);
      const updatedImagesDestroy = removedImage.id
        ? [...(prevData.images_destroy || []), removedImage.id]
        : prevData.images_destroy;

      return {
        images: updatedImages,
        images_destroy: updatedImagesDestroy,
      };
    });
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Select value={variableData.selectedSlot} onValueChange={handleSelectChange}>
            <SelectTrigger className="border-gris2-transparent ml-4 w-2 rounded-xl border font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones sm:w-96 lg:w-[500px] focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              {attrb.data.map((slot) => (
                <SelectItem key={slot.id} value={slot.id}>
                  {slot.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            className="rounded-full bg-[#5B89FF] px-5 py-4 hover:bg-[#5B89FF]"
            onClick={handlerAddGroup}
          >
            Agregar
          </Button>
        </div>
        <div className="h-[318px] w-[550px] pl-6 overflow-y-auto">
          {variableData.selectedGroups.map((group) => (
            <div key={group.id} className="border-b border-[#D7D7D7] pb-4 pt-4">
              <div className="flex items-center justify-between p-2 pb-6 pt-6">
                <div className="w-24 font-roboto text-[14px] text-gris2 flex-shrink-0">
                  {group.name}
                </div>
                <div className="flex-grow overflow-x-auto mx-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <div className="flex gap-2 min-w-max">
                    {group.slots?.map((slot) => (
                      <Button
                        key={slot.id}
                        className={`flex-shrink-0 items-center justify-center rounded-full border border-gris2 bg-white text-[14px] text-gris2 hover:border-transparent hover:bg-[#5B89FF] hover:text-[#FBFBFB] ${
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
                <Button
                  className="rounded-full p-2 bg-transparent hover:bg-transparent flex-shrink-0"
                  onClick={() => handleDeleteGroup(group.id)}
                >
                  <IonIcon
                    icon={closeCircle}
                    className="h-6 w-6 text-gris2"
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="relative col-span-1 p-8">
        {variableData.images.length > 0 ? (
          <Carousel className="w-full">
            <CarouselContent className="ml-0 h-[318px] w-full">
              {variableData.images.map((image, index) => (
                <CarouselItem
                  key={`carousel-item-${index}`}
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
                    />
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