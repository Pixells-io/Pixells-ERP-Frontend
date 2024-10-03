import React, { useState, useEffect } from "react";
import { Form, useNavigation,useParams } from "react-router-dom";
import { format } from "date-fns";
import { useDropzone } from "react-dropzone";
import { IonIcon } from "@ionic/react";
import { imageOutline, closeCircle } from "ionicons/icons";
import InputForm from "@/components/InputForm/InputForm";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import ModalPeriod from "../Modals/ModalPeriod";

const GeneralTab = ({ info }) => {
  const navigation = useNavigation();
  const {id}=useParams();
  const [information, setInformation] = useState({
    id: info?.id || "",
    manufacturer: info?.manufacturer || "",
    comments: info?.comments||"",
    taxes: info?.taxes === 1,
    return: info?.return === 1,
    returnfactory: info?.processes === 1,
    status: info?.status === 1,
    start: info.start ? new Date(info.start) : null,
    end: info.end ? new Date(info.end) : null,
    image: info.image || null,
    
  });
  
  const isEdit = info?.taxes || info?.return || info?.processes || info?.comments || info?.image;
  const option= isEdit ? "update_generalform" : "create_generalform";
  useEffect(() => {
    if (info) {
      setInformation((prev) => ({
        ...prev,
        ...info,
        start: info.start ? new Date(info.start) : null,
        end: info.end ? new Date(info.end) : null,
      }));
    }
  }, [info]);

  const handleInputChange = (value, name) => {
    setInformation((prev) => ({ ...prev, [name]: value }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: ([file]) => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setInformation((prev) => ({ ...prev, image: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    },
  });

  const handleRemoveImage = () => {
    setInformation((prev) => ({ ...prev, image: null }));
  };

  const clearPeriod = () => {
    setInformation((prev) => ({ ...prev, start: null, end: null }));
  };

  const addDate = (dateI, dateF) => {
    setInformation((prev) => ({ ...prev, start: dateI, end: dateF }));
  };
console.log(option)
  return (
    <Form
      className="flex h-full w-full flex-col py-4"
      action={"/inventory/general-services/service/edit/"+id}
      method="post"
      encType="multipart/form-data"
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
              name="info_id"
              value={information.id}
            />
         <input
          type="text"
          className="hidden"
          hidden
          readOnly
          name="type_option"
          value={option}
        />

        <div className="col-span-12 pt-4">
          <h2 className="text-xs font-normal text-grisSubText">
            CONFIGURACION
          </h2>
          <div className="mt-1 flex w-full justify-between border-b border-t border-[#D7D7D7] py-3 pl-4">
            <div className="flex items-center gap-x-3">
              <Switch
                className="data-[state=checked]:bg-primarioBotones data-[state=unchecked]:bg-grisDisabled"
                name="taxes"
                checked={information.taxes}
                onCheckedChange={(e) => handleInputChange(e, "taxes")}
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
                name="return"
                checked={information.return}
                onCheckedChange={(e) => handleInputChange(e, "return")}
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
                name="processes"
                checked={information.returnfactory}
                onCheckedChange={(e) => handleInputChange(e, "returnfactory")}
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
              name="manufacturer"
              type="text"
              placeholder="Fabricante"
              value={information.manufacturer||""}
              onChange={(e) => handleInputChange(e.target.value, "manufacturer")}
            />
          </div>
          <div className="col-span-12">
            <InputForm
              name="comments"
              type="text"
              placeholder="comments"
              value={information.comments||""}
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
                  checked={information.status}
                  onCheckedChange={(e) => handleInputChange(e, "status")}
                />
                <label className="font-roboto text-xs font-normal text-grisText">
                  Activo
                </label>

                {information.start && information.end ? (
                  <div className="flex items-center gap-x-2">
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        name="start"
                        value={format(information.start, "yyyy-MM-dd")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(information.start, "PP")}
                      </label>
                    </div>
                    <div className="rounded-[8px] bg-gris px-2 py-1">
                      <input
                        type="hidden"
                        name="end"
                        value={format(information.end, "yyyy-MM-dd")}
                      />
                      <label className="text-xs font-light text-[#44444F]">
                        {format(information.end, "PP")}
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
                {information.start && information.end ? (
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

          <div className="col-span-12">
            <h2 className="text-xs font-normal text-grisSubText">IMAGEN</h2>
            <div className="flex w-full flex-col justify-center space-y-2">
              <div
                {...getRootProps()}
                className="relative flex cursor-pointer justify-center"
              >
                {information.image ? (
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
                      src={information.image|| info?.image}
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
              </div>
            </div>
            <input {...getInputProps()} name="image" type="file" />
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
