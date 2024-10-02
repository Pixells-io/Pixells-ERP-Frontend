import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Checkbox } from "@/components/ui/checkbox";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IonIcon } from "@ionic/react";
import { imageOutline, closeCircle } from "ionicons/icons";
import { Switch } from "@/components/ui/switch";
import InputForm from "@/components/InputForm/InputForm";
import { format } from "date-fns";
import ModalPeriod from "../../Modals/ModalPeriod";
import { Button } from "@/components/ui/button";

const GeneralForm = ({ data, setData }) => {
  const [formData, setFormData] = useState({
    sujetoAImpuesto: data.sujetoAImpuesto || false,
    disponibleParaDevolucion: data.disponibleParaDevolucion || false,
    manufacturaDisponible: data.manufacturaDisponible || false,
    fabricantes: data.fabricantes || "",
    comentario: data.comentario || "",
    activos: data.activos || false,
    inactivo: !data.activos,
    from: data.from || "",
    to: data.to || "",
    imagenPrincipal: data.imagenPrincipal || null,
  });

  const clearPeriod = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      from: "",
      to: "",
    }));
  };

  const addDate = (dateI, dateF) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      from: dateI,
      to: dateF,
    }));
  };

  const [imagePreview, setImagePreview] = useState(
    formData?.imagenPrincipal || "",
  );

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
    console.log(e);
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
        activos: prevFormData.inactivo,
        inactivo: !prevFormData.inactivo,
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

  const handleStatusCheck = () => {
    if (formData.activos == "1") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        activos: "0",
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        activos: "1",
      }));
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex h-full w-full flex-col gap-3">
        <div className="flex w-full border-b border-grisDisabled">
          <p className="px-4 py-2 text-[10px] text-grisSubText">
            CONFIGURACIÓN
          </p>
        </div>
        <div className="flex w-full items-center gap-2 border-b border-grisDisabled">
          <Switch
            name="sujetoAImpuesto"
            checked={formData.sujetoAImpuesto}
            onCheckedChange={() => handleCheckboxChange("sujetoAImpuesto")}
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
          <p className="py-2 text-[12px] text-grisText">Sujeto a impuesto</p>
        </div>

        <div className="flex w-full items-center gap-2 border-b border-grisDisabled">
          <Switch
            name="disponibleParaDevolucion"
            checked={formData.disponibleParaDevolucion}
            onCheckedChange={() =>
              handleCheckboxChange("disponibleParaDevolucion")
            }
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
          <p className="py-2 text-[12px] text-grisText">
            Disponible para devolución
          </p>
        </div>

        <div className="flex w-full items-center gap-2 border-b border-grisDisabled">
          <Switch
            name="manufacturaDisponible"
            checked={formData.manufacturaDisponible}
            onCheckedChange={() =>
              handleCheckboxChange("manufacturaDisponible")
            }
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
          <p className="py-2 text-[12px] text-grisText">
            Disponible para fabricar
          </p>
        </div>

        <InputForm
          type="text"
          placeholder="Fabricante"
          name="fabricantes"
          value={formData.fabricantes}
          onChange={handleChange}
        />

        <div>
          <p className="mb-1 text-[10px] font-normal text-grisText">
            Comentarios
          </p>
          <Textarea
            type="text"
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            className="h-[32px] rounded-[10px] border border-[#D7D7D7] text-sm text-[#44444f]"
          />
        </div>

        <div className="flex w-full border-b border-grisDisabled">
          <p className="px-4 py-2 text-[10px] text-grisSubText">ESTATUS</p>
        </div>

        {/* <div className="flex w-full items-center justify-between gap-2 border-b border-grisDisabled">
          <div className="flex items-center gap-2">
            <Switch />
            <p className="py-2 text-[12px] text-grisText">Activo</p>
            <p className="text-xs font-light text-grisSubText">
              (Sin periodo de tiempo)
            </p>
          </div>

          <div className="p-2">
            <button
              type="button"
              className="flex items-center self-end rounded-lg bg-blancoBox px-3 py-1 text-[11px] text-grisHeading"
            >
              + Periodo
            </button>
          </div>
        </div> */}

        <div className="flex w-full justify-between py-2">
          <div className="flex items-center gap-x-3">
            <Switch
              className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
              name="activos"
              checked={formData?.activos == "1"}
              onCheckedChange={handleStatusCheck}
            />
            <label className="font-roboto text-xs font-normal text-grisText">
              Activo
            </label>
            {!!formData.from && !!formData.to ? (
              <div className="flex items-center gap-x-2">
                <div className="rounded-[8px] bg-gris px-2 py-1">
                  <input
                    type="hidden"
                    hidden
                    name="from"
                    className="hidden"
                    value={format(formData.from, "PP")}
                  />
                  <label className="text-xs font-light text-[#44444F]">
                    {format(formData.from, "PP")}
                  </label>
                </div>
                <div className="rounded-[8px] bg-gris px-2 py-1">
                  <input
                    type="hidden"
                    hidden
                    name="to"
                    className="hidden"
                    value={format(formData.to, "PP")}
                  />
                  <label className="text-xs font-light text-[#44444F]">
                    {format(formData.to, "PP")}
                  </label>
                </div>
              </div>
            ) : (
              <label className="font-roboto text-xs font-light text-grisSubText">
                (Sin periodo de tiempo)
              </label>
            )}
          </div>
          <div>
            {!!formData.from && !!formData.to ? (
              <Button
                type="button"
                className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                onClick={clearPeriod}
              >
                Restablecer
              </Button>
            ) : (
              <ModalPeriod setFunctionParent={addDate} />
            )}
          </div>
        </div>
      </div>

      {/* old */}
      <div className="flex w-full flex-col gap-4">
        {/* <div className="flex items-center space-x-3">
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
        </div> */}

        {/* <div className="flex items-center space-x-6">
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
        </div> */}

        {/* <div className="flex w-[200px] items-center space-x-6">
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

        <div className="flex w-[200px] items-center space-x-6">
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
        </div> */}

        {/* <div className="flex items-center space-x-6">
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
            onCheckedChange={() =>
              handleCheckboxChange("disponibleParaDevolucion")
            }
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
        </div> */}

        {/* <div className="flex items-center space-x-6">
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
        </div> */}

        {/* <div className="flex items-center space-x-10">
          <Label
            htmlFor="disponibleParaDevolucion"
            className="font-roboto text-[14px] text-gris2"
          >
            Manufactura Disponible:
          </Label>
          <Checkbox
            id="manufacturaDisponible"
            name="manufacturaDisponible"
            checked={formData.manufacturaDisponible}
            onCheckedChange={() =>
              handleCheckboxChange("manufacturaDisponible")
            }
            className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
          />
        </div> */}

        {/* <div className="flex items-center space-x-6">
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
        </div> */}

        {/* <div className="flex items-center space-x-6">
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
        </div> */}

        <div className="flex w-full border-b border-grisDisabled">
          <p className="px-4 py-2 text-[10px] text-grisSubText">ARCHIVO</p>
        </div>
        {/* imagen */}
        <div className="flex w-full flex-col justify-center space-y-2">
          <div
            {...getRootProps()}
            className="relative flex cursor-pointer justify-center"
          >
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
              <div className="flex flex-col items-center rounded-xl border-2 border-dashed p-20">
                <IonIcon
                  icon={imageOutline}
                  className="h-12 w-12 text-gray-500"
                />
                <span className="ml-2 text-gray-500">Agregar Imagen</span>
              </div>
            )}
            <input {...getInputProps()} name="imagenPrincipal" type="file" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralForm;
