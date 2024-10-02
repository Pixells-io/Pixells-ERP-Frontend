import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import ModalPeriod from "../Modals/ModalPeriod";
import { format } from "date-fns";
import { useDropzone } from "react-dropzone";
import { IonIcon } from "@ionic/react";
import { imageOutline, closeCircle } from "ionicons/icons";

const GeneralTab = ({ informationDetails, store_id }) => {
  const navigation = useNavigation();

  const [information, setInformation] = useState({
    id: informationDetails?.id || "",
    street: informationDetails?.street || "",
    ext: informationDetails?.ext || "",
    int: informationDetails?.int || "",
    cologne: informationDetails?.cologne || "",
    city: informationDetails?.city || "",
    state: informationDetails?.state || "",
    cp: informationDetails?.cp || "",
    country: informationDetails?.country || "",
    status: informationDetails?.status || "",
    start: informationDetails?.start || "",
    end: informationDetails?.end || "",
  });

  useEffect(() => {
    changeValueInformation();
  }, [informationDetails]);

  const changeValueInformation = () => {
    setInformation({
      id: informationDetails?.id,
      street: informationDetails?.street,
      ext: informationDetails?.ext,
      int: informationDetails?.int,
      cologne: informationDetails?.cologne,
      city: informationDetails?.city,
      state: informationDetails?.state,
      cp: informationDetails?.cp,
      country: informationDetails?.country,
      status: informationDetails?.status,
      start: informationDetails?.start,
      end: informationDetails?.end,
    });
  };

  const [imagePreview, setImagePreview] = useState(null); // Cambié a null para más claridad

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      handleImageUpload(acceptedFiles[0]);
    },
  });

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  const clearPeriod = () => {
    setInformation((prevFormData) => ({
      ...prevFormData,
      start: "",
      end: "",
    }));
  };

  const addDate = (dateI, dateF) => {
    setInformation((prevFormData) => ({
      ...prevFormData,
      start: dateI,
      end: dateF,
    }));
  };

  const handleInputChange = (value, name) => {
    setInformation((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Form
      className="flex h-full w-full flex-col py-4"
      action={`/inventory/branch-points-sale/edit/${store_id}`}
      method="post"
    >
      <div className="max-h-screen overflow-auto px-6">
        <h2 className="font-poppins text-sm font-medium text-[#44444F]">
          GENERAL
        </h2>
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="store_id"
          value={store_id}
        />
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="type_option"
          value="generalBranchTab"
        />
        <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="info_id"
          value={information?.id}
        />
        <div className="col-span-12 pt-4">
          <h2 className="text-xs font-normal text-grisSubText">
            CONFIGURACION
          </h2>
          <div className="mt-1 flex w-full justify-between border-b border-t border-[#D7D7D7] py-3 pl-4">
            <div className="flex items-center gap-x-3">
              <Switch
                className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                name="status"
                checked={information?.taxes == "1"}
                onCheckedChange={(e) =>
                  handleInputChange(e ? "1" : "0", "status")
                }
              />
              <label className="font-roboto text-xs font-normal text-grisText">
                Sujeto a impuesto
              </label>
            </div>
          </div>
          <div className="flex w-full justify-between border-b border-[#D7D7D7] py-3 pl-4">
            <div className="flex items-center gap-x-3">
              <Switch
                className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                name="status"
                checked={information?.return == "1"}
                onCheckedChange={(e) =>
                  handleInputChange(e ? "1" : "0", "status")
                }
              />
              <label className="font-roboto text-xs font-normal text-grisText">
                Disponible para devolución
              </label>
            </div>
          </div>
          <div className="flex w-full justify-between border-b border-[#D7D7D7] py-3 pl-4">
            <div className="flex items-center gap-x-3">
              <Switch
                className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                name="status"
                checked={information?.returnfactory == "1"}
                onCheckedChange={(e) =>
                  handleInputChange(e ? "1" : "0", "status")
                }
              />
              <label className="font-roboto text-xs font-normal text-grisText">
                Disponible para fabricar
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8 grid w-full grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-12">
            <InputForm
              name="fabricante"
              type="text"
              placeholder={"fabricante"}
              value={information?.manufacturer}
              onChange={(e) =>
                handleInputChange(e.target.value, "manufacturer")
              }
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="comentarios"
              type="text"
              placeholder={"Comentarios"}
              value={information?.comments}
              onChange={(e) => handleInputChange(e.target.value, "comments")}
            />
          </div>
          <div className="col-span-12">
            <h2 className="text-xs font-normal text-grisSubText">ESTATUS</h2>
            <div className="mt-1 flex w-full justify-between border-b border-t border-[#D7D7D7] py-3 pl-4">
              <div className="flex items-center gap-x-3">
                <Switch
                  className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                  name="status"
                  checked={information?.status == "1"}
                  onCheckedChange={(e) =>
                    handleInputChange(e ? "1" : "0", "status")
                  }
                />
                <label className="font-roboto text-xs font-normal text-grisText">
                  Activo
                </label>

                {!!information?.start && !!information?.end ? (
                  <div className="flex items-center gap-x-2">
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="start"
                        className="hidden"
                        value={format(information?.start, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(information?.start, "PP")}
                      </label>
                    </div>
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        hidden
                        name="end"
                        className="hidden"
                        value={format(information?.end, "PP")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(information?.end, "PP")}
                      </label>
                    </div>
                  </div>
                ) : (
                  <label className="font-roboto text-xs font-light text-grisSubText">
                    (Sin periodo de tiempo)
                  </label>
                )}
              </div>
              <div className="flex items-center">
                {!!information?.start && !!information?.end ? (
                  <Button
                    type="button"
                    className="flex h-[24px] items-center justify-center rounded-[10px] border border-[#D7586B] bg-inherit px-1 text-xs text-[#D7586B] hover:bg-inherit"
                    onClick={() => clearPeriod()}
                  >
                    Restablecer
                  </Button>
                ) : (
                  <ModalPeriod setFunctionParent={addDate} />
                )}
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <h2 className="text-xs font-normal text-grisSubText">IMAGEN</h2>
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
                      src={imagePreview} // Mostrar la vista previa de la imagen
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
                <input
                  {...getInputProps()}
                  name="imagenPrincipal"
                  type="file"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex w-full flex-1 items-end px-6">
        <div className="flex w-full justify-between">
          <label className="text-xs font-light text-[#8F8F8F]">
            Actualizado 07 septiembre 2024
          </label>
          <Button
            className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default GeneralTab;
