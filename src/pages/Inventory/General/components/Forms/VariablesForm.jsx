import React, { useState } from "react";
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
const VariableForm = () => {
  const selectClasses =
    "border-gris2-transparent ml-4 w-[50px] rounded-xl border border-gris2-transparent font-roboto placeholder:text-grisHeading focus-visible:ring-primarioBotones sm:w-96 lg:w-[500px] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  const [image, setImage] = useState(null);

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

  const handleSelectChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Primera columna */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Select name="proveedor">
            <SelectTrigger className={selectClasses}>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Producto Simple</SelectItem>
            </SelectContent>
          </Select>
          <Button
            className={"rounded-full bg-[#5B89FF] px-5 py-4 hover:bg-[#5B89FF]"}
          >
            Agregar
          </Button>
        </div>
        <div className="flex w-[550px] border-b border-[#D7D7D7] pb-4 pl-2 pt-4">
          MODEL
        </div>
        <div className="flex w-[550px] border-b border-[#D7D7D7] pb-4 pl-2 pt-4">
          MODEL
        </div>
        <div className="flex w-[550px] border-b border-[#D7D7D7] pb-4 pl-2 pt-4">
          MODEL
        </div>
      </div>
      <div className="col-span-1 relative flex grid items-center justify-center p-8">
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
