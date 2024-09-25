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

const VariableForm = ({ attrb, variableData, setVariableData }) => {
  const [formData, setFormData] = useState(variableData);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const [originalGroupIds, setOriginalGroupIds] = useState([]);

  useEffect(() => {
    if (formData.Groups.length > 0 && !initialLoadDone) {
      const initialSelectedGroups = attrb.data
        .map((slot) => {
          const matchingGroup = formData.Groups.find(
            (group) => group.attribute_name === slot.name,
          );
          if (!matchingGroup) return null;
          return {
            id: slot.id,
            name: slot.name,
            slots: slot.slots.map((slotItem) => ({
              id: slotItem.id,
              name: slotItem.name,
              active: formData.Groups.some(
                (group) =>
                  group.product_attribute_id === slotItem.id.toString(),
              )
                ? 1
                : 0,
            })),
          };
        })
        .filter(Boolean);

      setFormData((prevData) => ({
        ...prevData,
        selectedGroups: initialSelectedGroups,
      }));
      setOriginalGroupIds(initialSelectedGroups.map((group) => group.id));
      setInitialLoadDone(true);
    }
  }, [formData.Groups, attrb.data, initialLoadDone]);

  useEffect(() => {
    setVariableData(formData);
  }, [formData, setVariableData]);

  const updateFormData = (updater) => {
    setFormData((prevData) => ({
      ...prevData,
      ...updater(prevData),
    }));
  };

  const handleSelectChange = (value) => setSelectedSlot(value);

  const handlerAddGroup = () => {
    if (!selectedSlot) return;

    const newGroup = attrb.data.find((slot) => slot.id === selectedSlot);
    if (
      !newGroup ||
      formData.selectedGroups.some((group) => group.id === selectedSlot)
    )
      return;

    const groupWithActiveStatus = {
      id: newGroup.id,
      name: newGroup.name,
      slots: newGroup.slots.map((slot) => ({ ...slot, active: 0 })),
    };

    updateFormData((prevData) => ({
      selectedGroups: [...prevData.selectedGroups, groupWithActiveStatus],
      variables_add: [...prevData.variables_add, groupWithActiveStatus.id],
    }));
    setSelectedSlot("");
  };

  const handleDeleteGroup = (groupId) => {
    updateFormData((prevData) => {
      const updatedSelectedGroups = prevData.selectedGroups.filter(
        (group) => group.id !== groupId,
      );
      let updatedVariablesAdd = prevData.variables_add;
      let updatedVariablesDestroy = prevData.variables_destroy;

      if (originalGroupIds.includes(groupId)) {
        // Si es un grupo original, lo añadimos a variables_destroy
        updatedVariablesDestroy = [...updatedVariablesDestroy, groupId];
      } else {
        // Si no es un grupo original, lo removemos de variables_add
        updatedVariablesAdd = updatedVariablesAdd.filter(
          (id) => id !== groupId,
        );
      }

      return {
        selectedGroups: updatedSelectedGroups,
        variables_add: updatedVariablesAdd,
        variables_destroy: updatedVariablesDestroy,
      };
    });
  };

  const handleSlotButtonClick = (groupId, slotId) => {
    updateFormData((prevData) => ({
      selectedGroups: prevData.selectedGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              slots: group.slots.map((slot) =>
                slot.id === slotId
                  ? { ...slot, active: slot.active === 1 ? 0 : 1 }
                  : slot,
              ),
            }
          : group,
      ),
    }));
  };

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
      updateFormData((prevData) => ({
        images: [...prevData.images, ...newImages],
      }));
    },
  });

  const handleRemoveImage = (index) => {
    updateFormData((prevData) => {
      const removedImage = prevData.images[index];
      const updatedImages = prevData.images.filter((_, i) => i !== index);
      const updatedImagesDestroy = removedImage.id
        ? [...prevData.images_destroy, removedImage.id]
        : prevData.images_destroy;

      return {
        images: updatedImages,
        images_destroy: updatedImagesDestroy,
      };
    });
  };

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <div className="flex w-full items-center gap-4 px-4">
        <div className="flex w-full flex-col">
          <p className="mb-1 text-[10px] font-normal text-grisText">
            Agrega Atributos
          </p>
          <Select value={selectedSlot} onValueChange={handleSelectChange}>
            <SelectTrigger className="h-[32px] w-full rounded-[10px] border border-[#D7D7D7] bg-inherit font-roboto text-sm font-light text-[#44444f] placeholder:text-[#44444f] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
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
        </div>
        <div className="flex pt-5">
          <button
            type="button"
            className="shrink-0 rounded-lg bg-[#5B89FF] px-2 py-1 text-[11px] text-white hover:bg-[#5B89FF]"
            onClick={handlerAddGroup}
          >
            + Agregar
          </button>
        </div>
      </div>

      <div className="overflow-y-auto pl-6">
        {formData.selectedGroups.map((group) => (
          <div key={group.id} className="border-b border-[#D7D7D7] py-1">
            <div className="flex items-center justify-between p-2">
              <div className="w-24 flex-shrink-0 font-roboto text-[14px] text-gris2">
                {group.name}
              </div>
              <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mx-2 flex-grow overflow-x-auto">
                <div className="flex min-w-max gap-2">
                  {group.slots?.map((slot) => (
                    <button
                      type="button"
                      key={slot.id}
                      className={`min-w-16 flex-shrink-0 items-center justify-center rounded-3xl px-4 py-[6px] text-[12px] font-light text-gris2 hover:border-transparent hover:bg-[#5B89FF] hover:text-[#FBFBFB] ${
                        slot.active === 1
                          ? "bg-primarioBotones text-white"
                          : "bg-[#f1f1f1]"
                      }`}
                      onClick={() => handleSlotButtonClick(group.id, slot.id)}
                    >
                      {slot.name}
                    </button>
                  ))}
                </div>
              </div>
              <Button
                className="flex-shrink-0 rounded-full bg-transparent p-2 hover:bg-transparent"
                onClick={() => handleDeleteGroup(group.id)}
              >
                <IonIcon icon={closeCircle} className="h-6 w-6 text-gris2" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative p-8">
        {formData.images.length > 0 ? (
          <Carousel className="w-full">
            <CarouselContent className="ml-0 h-[318px] w-full">
              {formData.images.map((image, index) => (
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
            className="flex h-[300px] flex-col items-center justify-center rounded-3xl border-2 border-dashed p-4 pb-8"
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
