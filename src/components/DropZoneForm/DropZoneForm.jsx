import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { IonIcon } from "@ionic/react";
import {
  add,
  imagesOutline,
  chevronForwardOutline,
  closeCircle,
  chatbubbleEllipsesOutline,
  ellipsisHorizontal,
} from "ionicons/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const InputWithDropzone = ({
  input,
  onInputChange,
  onFilesChange,
  onRemoveFile,
  onSubmit,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".pdf", ".doc", ".docx", ".jpeg", ".jpg", ".png"] },
    onDrop: (acceptedFiles) => {
      onFilesChange(input.id, acceptedFiles);
    },
  });
  return (
    <div className="flex flex-col rounded-[20px] border p-0">
      <div className={`${input.value ? "h-[54px] border-b" : "h-[40px]"}`}>
        <input
          type="text"
          value={input.value}
          onChange={(e) => onInputChange(input.id, e.target.value)}
          className={`mb-2 mt-[7px] flex h-[25px] w-full flex-grow rounded-[12px] border-none bg-transparent pl-2 text-[11px] text-[#44444F] placeholder:mt-4 placeholder:font-poppins placeholder:text-[11px] placeholder:font-normal placeholder:text-[#CCCCCC] placeholder:text-[#D7D7D7] focus:outline-none focus:ring-0${!input.value ? "h-[50px]" : "h-[54px]"}`}
          placeholder="Agregar titulo"
        />
      </div>
      <div
        className={`${input.value && !input.files.length > 0 ? "mx-2 mt-1" : "mx-2"}`}
      >
        {input.files.length > 0 && (
          <div className="mb-2 ml-3 mt-2 flex h-[54px] items-center space-x-2 overflow-x-auto bg-transparent">
            {input.files.map((file, index) => (
              <div key={index} className="group relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="h-[48px] w-[46px] rounded-[8px] object-cover"
                />
                <button
                  onClick={() => onRemoveFile(input.id, index)}
                  className="absolute right-0 top-0 hidden group-hover:block"
                >
                  <IonIcon
                    icon={closeCircle}
                    className="size-5 text-[#44444F]"
                  />
                </button>
              </div>
            ))}
          </div>
        )}
        <div
          className={` ${!input.value ? "mt-[1px] flex justify-end" : "mt-1 flex h-[40px] justify-between space-x-4"}`}
        >
          {input.value && (
            <div
              {...getRootProps()}
              className="flex cursor-pointer items-center"
            >
              <input {...getInputProps()} />
              <div className="mb-2 flex h-[26px] items-center rounded-[6px] p-1 hover:bg-[#F2F2F2]">
                <IonIcon
                  icon={imagesOutline}
                  className="h-[16px] w-[16px] text-[#44444F]"
                />
              </div>
            </div>
          )}
          <IonIcon
            icon={chevronForwardOutline}
            className={`h-[26px] w-[26px] rounded-full text-xs ${!input.value ? "mr-2 mt-[-35px] flex justify-end bg-[#E8E8E8] text-white" : "bg-[#5B89FF] text-white"}`}
            onClick={() => {
              if (input.value) {
                onSubmit(input);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

const DropZoneForm = ({ comments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [submittedInputs, setSubmittedInputs] = useState([]);
  const [indexEdit, setIndexEdit] = useState(null);
  {
    /*Add New input */
  }
  const handleAddInput = () => {
    const newInput = { id: Date.now(), value: "", files: [] };
    setInputs((prevInputs) => [...prevInputs, newInput]);
    setShowButton(false);
    setShowContent(false);
  };

  const handleInputChange = (id, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, value } : input,
      ),
    );
  };

  const handleFilesChange = (id, files) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id
          ? { ...input, files: [...input.files, ...files] }
          : input,
      ),
    );
  };
  {
    /*Remove to files in new row */
  }
  const handleRemoveFile = (inputId, fileIndex) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === inputId
          ? {
              ...input,
              files: input.files.filter((_, index) => index !== fileIndex),
            }
          : input,
      ),
    );
  };
  {
    /*Remove to files in submittedInputs */
  }
  const handleRemoveSubmittedFile = (inputId, fileIndex) => {
    setSubmittedInputs((prevSubmitted) =>
      prevSubmitted.map((input) =>
        input.id === inputId
          ? {
              ...input,
              files: input.files.filter((_, index) => index !== fileIndex),
            }
          : input,
      ),
    );
  };

  const handleSubmit = (input) => {
    setSubmittedInputs((prevSubmitted) => [
      ...prevSubmitted,
      { ...input, id: Date.now() },
    ]);
    setIsOpen(true);
    setInputs([]);
    const newInput = { id: Date.now(), value: "", files: [] };
    setInputs((prevInputs) => [...prevInputs, newInput]);
    setShowContent(true);
  };

  return (
    <HoverCard>
      <HoverCardTrigger>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <div className="flex h-8 w-8 items-center justify-center rounded-full rounded-bl-none bg-grisDisabled">
              <Avatar className="size-6" onClick={() => setIsOpen(true)}>
                <AvatarImage src={comments?.slice(-1)[0]?.img} />
                <AvatarFallback>
                  <IonIcon src={chatbubbleEllipsesOutline} className="size-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={`flex max-h-[400px] w-[450px] flex-col overflow-hidden rounded-[20px] p-0 ${!showContent ? "border-none bg-none" : ""}`}
          >
            {!showContent ? (
              <div>
                {inputs.map((input) => (
                  <InputWithDropzone
                    key={input.id}
                    input={input}
                    onInputChange={handleInputChange}
                    onFilesChange={handleFilesChange}
                    onRemoveFile={handleRemoveFile}
                    onSubmit={handleSubmit}
                  />
                ))}
              </div>
            ) : (
              <>
                <div className="flex h-[40px] items-center border-b">
                  <span className="w-full p-4 font-poppins text-[12px] font-medium text-[#44444F]">
                    Documentos
                  </span>
                </div>

                <div className="flex max-h-[400px] w-full flex-col overflow-auto p-6">
                  {submittedInputs.map((input, index) => (
                    <div
                      key={index}
                      className={`mb-4 flex flex-col items-start pb-3 ${index === submittedInputs.length - 1 || submittedInputs.length === 1 ? "" : "border-b"}`}
                    >
                      <div className="flex w-full justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="flex h-[22px] w-[22px]">
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              alt="@shadcn"
                            />
                            <AvatarFallback>??</AvatarFallback>
                          </Avatar>
                          <p className="text-[13px] font-medium text-[#696974]">
                            Don Formulario &bull;
                            <span className="ml-1 text-[12px] font-normal text-[#ABABAB]">
                              Hace 3 días
                            </span>
                          </p>
                        </div>
                        {/* edit */}
                        <div>
                          <DropdownMenu>
                            <DropdownMenuTrigger className="flex h-full w-8 items-center justify-center text-grisDisabled">
                              <IonIcon
                                icon={ellipsisHorizontal}
                                className="h-4 w-4"
                              ></IonIcon>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-36 rounded-3xl px-0 pb-4 pt-4 text-start">
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                                onClick={() => setIndexEdit(index)}
                              >
                                Editar
                              </button>
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                              >
                                Eliminar
                              </button>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      {index == indexEdit ? (
                        <div
                          className={`flex max-w-[250px] flex-col pt-[8px] ${index == indexEdit && "mt-1 w-full max-w-full rounded-[14px] border border-black p-2"}`}
                        >
                          <span className="break-words font-roboto text-[12px] font-normal text-[#44444F]">
                            {input.value}
                          </span>
                          <div className="flex space-x-2">
                            {input.files.map((file, fileIndex) => (
                              <div
                                key={fileIndex}
                                className="group relative pt-[17px]"
                              >
                                <img
                                  src={URL.createObjectURL(file)}
                                  alt={file.name}
                                  className="h-[48px] w-[46px] rounded-[8px] object-cover"
                                />
                                <button
                                  onClick={() =>
                                    handleRemoveSubmittedFile(
                                      input.id,
                                      fileIndex,
                                    )
                                  }
                                  className="absolute right-0 top-0 hidden pt-4 group-hover:block"
                                >
                                  <IonIcon
                                    icon={closeCircle}
                                    className="size-5 text-[#44444F]"
                                  />
                                </button>
                              </div>
                            ))}
                          </div>

                          <div className="flex justify-between">
                            <div></div>
                            <div className="flex justify-end gap-x-3">
                              <Button
                                type="button"
                                className="h-[21px] rounded-lg bg-blancoBox text-[10px] font-normal text-grisHeading hover:bg-blancoBox"
                                onClick={() => setIndexEdit(null)}
                              >
                                Cancelar
                              </Button>
                              <Button
                                type="button"
                                className="h-[21px] rounded-lg bg-primarioBotones text-[10px] font-normal text-white hover:bg-primarioBotones"
                              >
                                Guardar
                              </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex max-w-[250px] flex-col pt-[8px]">
                          <span className="break-words font-roboto text-[12px] font-normal text-[#44444F]">
                            {input.value}
                          </span>
                          <div className="flex space-x-2">
                            {input.files.map((file, fileIndex) => (
                              <div
                                key={fileIndex}
                                className="group relative pt-[17px]"
                              >
                                <img
                                  src={URL.createObjectURL(file)}
                                  alt={file.name}
                                  className="h-[48px] w-[46px] rounded-[8px] object-cover"
                                />
                                <button
                                  onClick={() =>
                                    handleRemoveSubmittedFile(
                                      input.id,
                                      fileIndex,
                                    )
                                  }
                                  className="absolute right-0 top-0 hidden pt-4 group-hover:block"
                                >
                                  <IonIcon
                                    icon={closeCircle}
                                    className="size-5 text-[#44444F]"
                                  />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {showButton && submittedInputs.length === 0 && (
                    <Button
                      onClick={handleAddInput}
                      className="mb-4 flex h-[32px] w-[58px] self-end rounded-[10px] bg-[#5B89FF] text-xs text-[#FFFFFF]"
                    >
                      Nuevo
                    </Button>
                  )}
                  {inputs.map((input) => (
                    <InputWithDropzone
                      key={input.id}
                      input={input}
                      onInputChange={handleInputChange}
                      onFilesChange={handleFilesChange}
                      onRemoveFile={handleRemoveFile}
                      onSubmit={handleSubmit}
                    />
                  ))}
                </div>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </HoverCardTrigger>
      {open != true && submittedInputs.length > 0 ? (
        <HoverCardContent
          className="h-[99px] w-80 rounded-[20px]"
          style={{ boxShadow: "0px 0px 8px 0px #00000033" }}
        >
          <div className="mx-2 flex flex-col">
            {submittedInputs.length > 0 && (
              <div className="mb-4 flex flex-col items-start pb-3 pl-2 pr-2 pt-1">
                <div className="flex items-center gap-3">
                  <Avatar className="flex h-[22px] w-[22px]">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>??</AvatarFallback>
                  </Avatar>
                  <p className="text-[13px] font-medium text-[#696974]">
                    Don Formulario &bull;
                    <span className="ml-1 text-[12px] font-normal text-[#ABABAB]">
                      Hace 3 días
                    </span>
                  </p>
                </div>
                <div className="flex max-w-[250px] flex-col pt-[8px]">
                  <span className="break-words font-roboto text-[12px] font-normal text-[#44444F]">
                    {submittedInputs[submittedInputs.length - 1].value}
                  </span>
                  {/* <div className="flex space-x-2">
              {submittedInputs[submittedInputs.length - 1].files.map(
                (file, fileIndex) => (
                  <div key={fileIndex} className="group relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="h-[48px] w-[46px] rounded-[8px] object-cover"
                    />
                  </div>
                ),
              )}
            </div> */}
                </div>
              </div>
            )}
          </div>
        </HoverCardContent>
      ) : (
        false
      )}
    </HoverCard>
  );
};

export default DropZoneForm;
