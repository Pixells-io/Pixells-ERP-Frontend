import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";
import { IonIcon } from "@ionic/react";
import { imageOutline, closeCircle } from "ionicons/icons";

const VariableForm = ({ attrb, onDataChange }) => {
  const allSlots = attrb.data;
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [image, setImage] = useState(null);

  const selectClasses =
    "border-gris2-transparent ml-4 w-[50px] rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones sm:w-96 lg:w-[500px] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleSelectChange = (value) => {
    setSelectedSlot(value);
  };

  const handlerAddGroup = () => {
    if (
      selectedSlot &&
      !selectedGroups.some((group) => group.id === selectedSlot)
    ) {
      const newGroup = allSlots.find((slot) => slot.id === selectedSlot);
      const groupWithActiveStatus = {
        id: newGroup.id,
        name: newGroup.name,
        slots: newGroup.slots.map((slot) => ({
          id: slot.id,
          name: slot.name,
          active: 0,
        })),
      };
      setSelectedGroups([...selectedGroups, groupWithActiveStatus]);
      setSelectedSlot("");
    }
  };

  const handleSlotButtonClick = (groupId, slotId) => {
    setSelectedGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              slots: group.slots.map((slot) =>
                slot.id === slotId
                  ? { ...slot, active: slot.active === 1 ? 0 : 1 }
                  : slot
              ),
            }
          : group
      )
    );
  };

  useEffect(() => {
    const formattedGroups = selectedGroups.map((group) => ({
      id: group.id,
      name: group.name,
      slots: group.slots
        .filter((slot) => slot.active === 1)
        .map((slot) => ({
          id: slot.id,
          name: slot.name,
        })),
    }));
  
    // Pasa los datos a través de la prop onDataChange para que se actualicen en el FormGroup
    onDataChange({
      selectedGroups: formattedGroups,
      image: image,
    });
  }, [selectedGroups, image, onDataChange]);
  

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Primera columna */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Select value={selectedSlot} onValueChange={handleSelectChange}>
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
        <div className="h-[200px] w-auto overflow-auto">
          {selectedGroups.map((group) => (
            <div key={group.id} className="border-b border-[#D7D7D7] pb-4 pt-4">
              <div className="flex items-center space-x-4 p-2 pt-6 pb-6">
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
                            ? "border-[#5B89FF] border bg-transparent text-primarioBotones"
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

      {/* Segunda columna */}
      <div className="relative col-span-1 flex grid items-center justify-center p-8">
        <div {...getRootProps()} className="flex flex-col items-center">
          {image ? (
            <div className="rounded-xl border border-primarioBotones p-4">
              <button
                onClick={handleRemoveImage}
                className="absolute right-[200px] top-2 rounded-full"
              >
                <IonIcon
                  icon={closeCircle}
                  className="size-8 text-primarioBotones"
                />
              </button>
              <img
                src={image}
                alt="Uploaded"
                className="max-h-48 max-w-full object-contain"
              />
            </div>
          ) : (
            <>
              <IonIcon
                icon={imageOutline}
                className="h-12 w-12 text-gray-500"
              />
              <span className="ml-2 text-gray-500">Agregar Imagen</span>
            </>
          )}
          <input {...getInputProps()} />
        </div>
      </div>
    </div>
  );
};

export default VariableForm;