import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Checkbox } from "@/components/ui/checkbox";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IonIcon } from "@ionic/react";
import { imageOutline, closeCircle } from "ionicons/icons";

const GeneralForm = ({ data, setData }) => {
  const [formData, setFormData] = useState({
    sujetoAImpuesto: data.sujetoAImpuesto || false,
    disponibleParaDevolucion: data.disponibleParaDevolucion || false,
    fabricantes: data.fabricantes || "",
    comentario: data.comentario || "",
    activos: data.activos || false,
    inactivo: !data.activos,
    from: data.from || "",
    to: data.to || "",
    imagenPrincipal: data.imagenPrincipal || null,
  });
  
  const [imagePreview, setImagePreview] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      handleImageUpload(acceptedFiles[0]);
    },
  });

  const handleImageUpload = (file) => {
    if (file) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        imagenPrincipal: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setData(formData);
  }, [formData, setData]);

  const handleCheckboxChange = (name) => {
    if (name === "activos") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        activos: !prevFormData.activos,
        inactivo: prevFormData.activos,
      }));
    } else if (name === "inactivo") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        activos: !prevFormData.inactivo,
        inactivo: prevFormData.inactivo,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: !prevFormData[name],
      }));
    }
  };

  const handleRemoveImage = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      imagenPrincipal: null,
    }));
    setImagePreview("");

  };
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 flex items-center space-x-3">
        <Label
          htmlFor="sujetoAImpuesto"
          className="font-roboto text-[14px] text-gris2"
        >
          Sujeto a impuestos
        </Label>
        <Checkbox
          id="sujetoAImpuesto"
          name="sujetoAImpuesto"
          checked={formData.sujetoAImpuesto}
          onCheckedChange={() => handleCheckboxChange("sujetoAImpuesto")}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>

      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="activos"
          className="flex font-roboto text-[14px] text-gris2"
        >
          Activo
        </Label>
        <Checkbox
          id="activos"
          name="activos"
          checked={formData.activos}
          onCheckedChange={() => handleCheckboxChange("activos")}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>
      <div className="col-span-1 ml-[-100px] flex w-[200px] items-center space-x-6">
        <Label
          htmlFor="from"
          className="pt-2 font-roboto text-[14px] text-gris2"
        >
          Desde:
        </Label>
        <InputRouter
          type="date"
          name="from"
          value={formData.from}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-1 ml-[-100px] flex w-[200px] items-center space-x-6">
        <Label
          htmlFor="to"
          className="pt-2 font-roboto text-[14px] text-gris2"
        >
          Hasta:
        </Label>
        <InputRouter
          type="date"
          name="to"
          value={formData.to}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="disponibleParaDevolucion"
          className="font-roboto text-[14px] text-gris2"
        >
          Disponible para devolución
        </Label>
        <Checkbox
          id="disponibleParaDevolucion"
          name="disponibleParaDevolucion"
          checked={formData.disponibleParaDevolucion}
          onCheckedChange={() => handleCheckboxChange("disponibleParaDevolucion")}
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
          checked={formData.inactivo}
          onCheckedChange={() => handleCheckboxChange("inactivo")}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
        />
      </div>
      <div></div>
      <div></div>
      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="fabricantes"
          className="mr-3 pt-2 font-roboto text-[14px] text-gris2"
        >
          Fabricante:
        </Label>
        <InputRouter
          type="text"
          name="fabricantes"
          value={formData.fabricantes}
          onChange={handleChange}
        />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div className="col-span-1 flex items-center space-x-6">
        <Label
          htmlFor="comentario"
          className="mb-1 font-roboto text-[14px] text-gris2"
        >
          Comentarios:
        </Label>
        <Textarea
          name="comentario"
          value={formData.comentario}
          onChange={handleChange}
          className="border-gris2-transparent rounded-xl border border-none bg-grisBg font-roboto text-gris2 placeholder:text-grisHeading focus-visible:ring-primarioBotones"
        />
      </div>
      <div></div>
      <div></div>
      <div className="col-span-1 flex flex-col justify-start items-start pr-8 space-y-2">
        <div {...getRootProps()} className="relative flex items-end cursor-pointer">
          {imagePreview ? (
            <div className="relative rounded-xl border border-primarioBotones p-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveImage();
                }}
                className="absolute right-2 top-2 z-10 rounded-full p-1"
              >
                <IonIcon
                  icon={closeCircle}
                  className="h-5 w-5 text-primarioBotones"
                />
              </button>
              <img
                src={imagePreview}
                alt="Imagen cargada"
                className="max-h-48 max-w-full object-contain"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <IonIcon icon={imageOutline} className="h-12 w-12 text-gray-500" />
              <span className="ml-2 text-gray-500">Agregar Imagen</span>
            </div>
          )}
          <input {...getInputProps()} name="imagenPrincipal" type="file" />
        </div>
      </div>
    </div>
  );
};

export default GeneralForm;
