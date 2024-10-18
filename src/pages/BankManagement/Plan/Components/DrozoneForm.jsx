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
import { Button } from "@/components/ui/button";
import InputForm from "@/components/InputForm/InputForm";

const InputWithDropzone = ({ input, onInputChange, onFilesChange, onRemoveFile, onSubmit }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,application/pdf",
    onDrop: (acceptedFiles) => {
      onFilesChange(input.id, acceptedFiles);
    },
  });

  return (
    <div className="mb-2 flex flex-col">
      <InputForm
        type="text"
        value={input.value}
        onChange={(e) => onInputChange(input.id, e.target.value)}
        className="mb-2 h-[54px] flex-grow rounded-[20px]"
        placeholder="Agregar titulo"
      />
      {input.value && (
        <>
          {input.files.length > 0 && (
            <div className="mb-2 flex h-[54px] items-center space-x-2 overflow-x-auto">
              {input.files.map((file, index) => (
                <div key={index} className="relative group">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="h-[48px] w-[46px] rounded-[8px] object-cover"
                  />
                  <button
                    onClick={() => onRemoveFile(input.id, index)}
                    className="absolute top-0 right-0 hidden group-hover:block"
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
              <IonIcon
                icon={imageOutline}
                className="h-[20px] w-[20px] text-[#44444F]"
              />
            </div>
            <Button className="flex bg-[#5B89FF] rounded-full" onClick={() => onSubmit(input)}>
              <IonIcon
                icon={chevronForwardOutline}
                className="h-[20px] w-[20px] text-white"
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
  const [showNewButton, setShowNewButton] = useState(true);
  const [inputs, setInputs] = useState([]);
  const [submittedInputs, setSubmittedInputs] = useState([]);

  const handleAddInput = () => {
    setShowNewButton(false);
    const newInput = { id: Date.now(), value: "", files: [] };
    setInputs([newInput]);
  };

  const handleInputChange = (id, value) => {
    setInputs(
      inputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };

  const handleFilesChange = (id, files) => {
    setInputs(
      inputs.map((input) =>
        input.id === id
          ? { ...input, files: [...input.files, ...files] }
          : input
      )
    );
  };

  const handleRemoveFile = (inputId, fileIndex) => {
    setInputs(
      inputs.map((input) =>
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
    setSubmittedInputs([...submittedInputs, input]);
    setInputs([]);
    setShowNewButton(true);
    setIsOpen(true);
  };

  return (
    <div>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button onClick={() => setIsOpen(true)} className="bg-transparent hover:bg-transparent">
            <IonIcon icon={add} className="size-12 text-[#44444F]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex max-h-[400px] w-[450px] flex-col gap-2 overflow-scroll rounded-[10px]">
          <div className="mb-4 flex w-full justify-start border-b pb-2">
            <span className="font-poppins text-sm">Documentos</span>
          </div>
          <div className="flex w-full flex-col">
            {submittedInputs.map((input, index) => (
              <div key={index} className="mb-4 flex flex-col items-start">
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
            ))}
            {showNewButton  ? (
              <Button
                onClick={handleAddInput}
                className="mb-4 flex h-[32px] w-[58px] rounded-[10px] bg-[#5B89FF] text-xs text-[#FFFFFF] self-end"
              >
                Nuevo
              </Button>
            ) : (
              inputs.map((input) => (
                <InputWithDropzone
                  key={input.id}
                  input={input}
                  onInputChange={handleInputChange}
                  onFilesChange={handleFilesChange}
                  onRemoveFile={handleRemoveFile}
                  onSubmit={handleSubmit}
                />
              ))
            )}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DynamicForm;