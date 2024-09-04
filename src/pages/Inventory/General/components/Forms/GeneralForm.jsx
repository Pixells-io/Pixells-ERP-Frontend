import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Checkbox } from "@/components/ui/checkbox";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IonIcon } from "@ionic/react";
import { imageOutline, closeCircle } from "ionicons/icons";

const GeneralForm = ({ data, setData }) => {
  const [image, setImage] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (name) => {
    setData({ ...data, [name]: !data[name] });
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 flex items-center space-x-3">
        <Label
          htmlFor="sImpuesto"
          className="font-roboto text-[14px] text-gris2"
        >
          Sujeto a impuestos
        </Label>
        <Checkbox
          id="sImpuesto"
          name="sImpuesto"
          checked={data.sImpuesto}
          onCheckedChange={() => handleCheckboxChange("sImpuesto")}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>

      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="activo"
          className="flex font-roboto text-[14px] text-gris2"
        >
          Activo
        </Label>
        <Checkbox
          id="activo"
          name="activo"
          checked={data.activo}
          onCheckedChange={() => handleCheckboxChange("activo")}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>
      <div className="col-span-1 ml-[-100px] flex w-[200px] items-center space-x-6">
        <Label
          htmlFor="desde"
          className="pt-2 font-roboto text-[14px] text-gris2"
        >
          Desde:
        </Label>
        <InputRouter
          type="date"
          name="desde"
          value={data.desde}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-1 ml-[-100px] flex w-[200px] items-center space-x-6">
        <Label
          htmlFor="hasta"
          className="pt-2 font-roboto text-[14px] text-gris2"
        >
          Hasta:
        </Label>
        <InputRouter
          type="date"
          name="hasta"
          value={data.hasta}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="sImpuesto"
          className="font-roboto text-[14px] text-gris2"
        >
          Disponible para devolución
        </Label>
        <Checkbox
          id="debo"
          name="debo"
          checked={data.debo}
          onCheckedChange={() => handleCheckboxChange("devo")}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>

      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="inactivo"
          className="font-roboto text-[14px] text-gris2"
        >
          Inactivo
        </Label>
        <Checkbox
          id="inactivo"
          name="inactivo"
          checked={data.inactivo}
          onCheckedChange={() => handleCheckboxChange("inactivo")}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>
      <div></div>
      <div></div>
      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="fabricante"
          className="mr-3 pt-2 font-roboto text-[14px] text-gris2"
        >
          Fabricante:
        </Label>
        <InputRouter
          type="text"
          name="fabricante"
          value={data.fabricante}
          onChange={handleChange}
        />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="comentarios"
          className="mb-1 font-roboto text-[14px] text-gris2"
        >
          Comentarios:
        </Label>
        <Textarea
          name="comentarios"
          value={data.comentarios}
          onChange={handleChange}
          className="border-gris2-transparent rounded-xl border border-none bg-grisBg font-roboto text-gris2 placeholder:text-grisHeading focus-visible:ring-primarioBotones"
        />
      </div>

      <div className="relative col-span-3 mt-[-100px] flex grid items-center justify-center p-8">
        <div {...getRootProps()} className="flex flex-col items-center">
          {image ? (
            <div className="rounded-xl border border-primarioBotones p-4">
              <button
                onClick={handleRemoveImage}
                className="absolute right-[200px] top-2 rounded-full"
              >
                <IonIcon
                  icon={closeCircle}
                  className="h-5 w-5 text-primarioBotones"
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

export default GeneralForm;
