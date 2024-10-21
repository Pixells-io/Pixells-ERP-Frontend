import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { IonIcon } from "@ionic/react";
import {
  add,
  imagesOutline,
  chevronForwardOutline,
  closeCircle,
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
      <div className={`${input.value ? "border-b" : ""}`}>
        <input
          type="text"
          value={input.value}
          onChange={(e) => onInputChange(input.id, e.target.value)}
          className={`mb-2 mt-[6px] flex w-full text-[11px] text-[#44444F] flex-grow rounded-[12px] border-none bg-transparent pl-2 placeholder:font-poppins placeholder:text-[11px] placeholder:font-normal placeholder:text-[#CCCCCC] placeholder:text-[#D7D7D7] focus:outline-none focus:ring-0${!input.value ? "h-[50px]" : "h-[54px]"}`}
          placeholder="Agregar titulo"
        />
      </div>
      <div className={`${input.value ? "p-2" : ""}`}>
        {input.files.length > 0 && (
          <div className="mb-2 flex h-[54px] items-center space-x-2 overflow-x-auto bg-transparent">
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
          className={` ${!input.value ? "mt-[1px] flex justify-end" : "flex h-[40px] justify-between space-x-4"}`}
        >
          {input.value && (
            <div
              {...getRootProps()}
              className="flex cursor-pointer items-center"
            >
              <input {...getInputProps()} />
              <div className="flex h-[26px] items-center rounded-[6px] p-1 hover:bg-[#F2F2F2]">
                <IonIcon
                  icon={imagesOutline}
                  className="h-[16px] w-[16px] text-[#44444F]"
                />
              </div>
            </div>
          )}
          <IonIcon
            icon={chevronForwardOutline}
            className={`h-[30px] w-[30px] rounded-full text-xs ${!input.value ? "mr-2 mt-[-35px] flex justify-end bg-[#E8E8E8] text-white" : "bg-[#5B89FF] text-white"}`}
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

const DynamicForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [submittedInputs, setSubmittedInputs] = useState([]);
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
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-transparent hover:bg-transparent"
            >
              <IonIcon icon={add} className="size-12 text-[#44444F]" />
            </Button>
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
                <div className="flex h-[40px] w-full items-center border-b">
                  <span className="w-full px-4 font-poppins text-[12px] text-[#44444F] font-medium">
                    Documentos
                  </span>
                </div>
                <div className="flex w-full flex-col overflow-auto p-4">
                  {submittedInputs.map((input, index) => (
                    <div
                      key={index}
                      className={`mb-4 flex flex-col items-start pb-3 ${index === submittedInputs.length - 1 || submittedInputs.length === 1 ? "" : "border-b"}`}
                    >
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
                          <span className="text-[13px] font-normal text-[#ABABAB]">
                            Hace 3 días
                          </span>
                        </p>
                      </div>
                      <div className="flex max-w-[250px] flex-col pt-[6px]">
                        <span className="break-words font-roboto text-[12px] font-medium text-[#44444F]">
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
                                  handleRemoveSubmittedFile(input.id, fileIndex)
                                }
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
                      </div>
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
                    <span className="text-[13px] font-normal text-[#ABABAB]">
                      Hace 3 días
                    </span>
                  </p>
                </div>
                <div className="flex max-w-[250px] flex-col">
                  <span className="break-words font-roboto text-[11px] font-light text-[#44444F]">
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

export default DynamicForm;
