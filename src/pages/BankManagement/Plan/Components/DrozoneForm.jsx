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
    accept: "image/*,application/pdf",
    onDrop: (acceptedFiles) => {
      onFilesChange(input.id, acceptedFiles);
    },
  });

  return (
    <div className="mb-2 flex flex-col rounded-[12px] bg-[#F6F6F6] p-2">
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
            <div className="mb-2 flex h-[54px] items-center space-x-2 overflow-x-auto">
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
              <IonIcon icon={imageOutline} className="text-[#44444F]" />
            </div>
            <Button
              className="flex items-center justify-center rounded-full bg-[#5B89FF]"
              onClick={() => onSubmit(input)}
            >
              <IonIcon
                icon={chevronForwardOutline}
                className="size-6 text-white"
              />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

const DynamicForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [submittedInputs, setSubmittedInputs] = useState([]);
console.log(inputs.length)
  const handleAddInput = () => {
    const newInput = { id: Date.now(), value: "", files: [] };
    setInputs((prevInputs) => [...prevInputs, newInput]);
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

  const handleSubmit = (input) => {
    setSubmittedInputs((prevSubmitted) => [...prevSubmitted, input]);
    setIsOpen(true);
    setInputs([]);
    const newInput = { id: Date.now(), value: "", files: [] };
    setInputs((prevInputs) => [...prevInputs, newInput]);
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
          <div className="mb-4 flex w-full justify-start border-b pb-2">
            <span className="font-poppins text-sm">Documentos</span>
          </div>
          <div className="flex w-full flex-col">
            {submittedInputs.map((input, index) => (
              <div key={index} className="mb-4 flex flex-col pb-3 items-start border-t">
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
                      Hace 3 días &bull; 2hr
                    </span>
                  </p>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="font-semibold">{input.value}</span>
                  <div className="flex space-x-2">
                    {input.files.map((file, fileIndex) => (
                      <img
                        key={fileIndex}
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="h-[48px] w-[46px] rounded-[8px] object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {submittedInputs.length === 0 && (
              <Button
                onClick={handleAddInput}
                className="mb-4 flex h-[32px] w-[58px] self-end rounded-[10px] bg-[#5B89FF] text-xs text-[#FFFFFF]"
              >
                Nuevo
              </Button>
            )}
            { inputs.map((input) => (
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DynamicForm;
