import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { IonIcon } from "@ionic/react";
import {
  add,
  imageOutline,
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
import InputForm from "@/components/InputForm/InputForm";

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
    <div className="mb-2 flex flex-col rounded-[12px]">
      <InputForm
        type="text"
        value={input.value}
        onChange={(e) => onInputChange(input.id, e.target.value)}
        className="mb-2 h-[31px] flex-grow rounded-[12px] bg-[#F6F6F6]"
        placeholder="Agregar titulo"
      />
      {input.value && (
        <>
          {input.files.length > 0 && (
            <div className="mb-2 flex h-[54px] bg-[#F6F6F6] items-center space-x-2 overflow-x-auto">
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
          <div className="flex justify-between space-x-2">
            <div
              {...getRootProps()}
              className="flex cursor-pointer items-center"
            >
              <input {...getInputProps()} />
              <IonIcon icon={imageOutline} className="h-[16px] w-[16px] text-[#44444F]" />
            </div>
            <IonIcon
              icon={chevronForwardOutline}
              className="h-[30px] w-[30px] rounded-full text-xs text-white bg-[#5B89FF]"
              onClick={() => onSubmit(input)}
            />
          </div>
        </>
      )}
    </div>
  );
};

const DynamicForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [submittedInputs, setSubmittedInputs] = useState([]);


  {/*Add New input */}
  const handleAddInput = () => {
    const newInput = { id: Date.now(), value: "", files: [] };
    setInputs((prevInputs) => [...prevInputs, newInput]);
    setShowButton(false);
    setShowContent(false);
  };

  const handleInputChange = (id, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, value } : input
      )
    );
  };

  const handleFilesChange = (id, files) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id
          ? { ...input, files: [...input.files, ...files] }
          : input
      )
    );
  };
 {/*Remove to files in new row */}
  const handleRemoveFile = (inputId, fileIndex) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === inputId
          ? {
              ...input,
              files: input.files.filter((_, index) => index !== fileIndex),
            }
          : input
      )
    );
  };
{/*Remove to files in submittedInputs */}
  const handleRemoveSubmittedFile = (inputId, fileIndex) => {
    setSubmittedInputs((prevSubmitted) =>
      prevSubmitted.map((input) =>
        input.id === inputId
          ? {
              ...input,
              files: input.files.filter((_, index) => index !== fileIndex),
            }
          : input
      )
    );
  };

  const handleSubmit = (input) => {
    setSubmittedInputs((prevSubmitted) => [...prevSubmitted, { ...input, id: Date.now() }]);
    setIsOpen(true);
    setInputs([]);
    const newInput = { id: Date.now(), value: "", files: [] };
    setInputs((prevInputs) => [...prevInputs, newInput]);
    setShowContent(true);
  };

  return (
    <div>
      <DropdownMenu
        open={isOpen}
        onOpenChange={setIsOpen}
        className={"rounded-[20px]"}
        style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <DropdownMenuTrigger asChild>
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-transparent hover:bg-transparent"
          >
            <IonIcon icon={add} className="size-12 text-[#44444F]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex max-h-[400px] w-[450px] flex-col gap-2 overflow-scroll rounded-[10px]">
          {!showContent  ? (<>
            {inputs.map((input) => (
              <InputWithDropzone
                key={input.id}
                input={input}
                onInputChange={handleInputChange}
                onFilesChange={handleFilesChange}
                onRemoveFile={handleRemoveFile}
                onSubmit={handleSubmit}
              />
            ))}</>):(<>
             <div className="mb-4 flex w-full justify-start border-b pb-2">
            <span className="ml-2 mt-2 font-poppins font-medium h-[19px] text-[11px]">Documentos</span>
          </div>
          <div className="flex w-full flex-col overflow-auto">
            {submittedInputs.map((input, index) => (
              <div key={index} className="mb-4 flex flex-col pl-2 pr-2 pt-1 pb-3  border-b items-start">
                <div className="flex items-center gap-2">
                  <Avatar className="flex h-6 w-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>??</AvatarFallback>
                  </Avatar>
                  <p className="text-[12px] text-grisText">
                    "Don Formulario" &bull;{" "}
                    <span className="text-[10px] text-[#ABABAB]">
                      Hace 3 días
                    </span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="font-light text-[11px] font-roboto text-[#44444F]">{input.value}</span>
                  <div className="flex space-x-2">
                    {input.files.map((file, fileIndex) => (
                      <div key={fileIndex} className="group relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="h-[48px] w-[46px] rounded-[8px] object-cover"
                        />
                        <button
                          onClick={() => handleRemoveSubmittedFile(input.id, fileIndex)}
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
            </>)}
          
         
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DynamicForm;