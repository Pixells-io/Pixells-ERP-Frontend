import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IonIcon } from "@ionic/react";
import {
  imagesOutline,
  closeCircle,
  ellipsisHorizontal,
} from "ionicons/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
    <div className="flex flex-col rounded-lg bg-grisBg p-0">
      <div
        className={`${input.value ? "h-[54px] border-b" : "h-[40px]"} flex items-center px-2`}
      >
        <input
          type="text"
          value={input.value}
          onChange={(e) => onInputChange(input.id, e.target.value)}
          className={`mb-2 mt-[7px] flex h-[25px] w-full flex-grow rounded-[12px] border-none bg-transparent text-[10px] font-light text-[#44444F] placeholder:mt-4 placeholder:font-poppins placeholder:text-[11px] placeholder:font-normal placeholder:text-[#CCCCCC] placeholder:text-[#D7D7D7] focus:outline-none focus:ring-0${!input.value ? "h-[50px]" : "h-[54px]"}`}
          placeholder="Agregar comentario"
          name="comment"
        />
        <button
          className="h-4 rounded-md bg-primarioBotones px-2 font-roboto text-[10px] font-normal text-white"
          type="submit"
        >
          Enviar
        </button>
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
        </div>
      </div>
    </div>
  );
};

const IconWithDropzone = ({ input, onFilesChange }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".pdf", ".doc", ".docx", ".jpeg", ".jpg", ".png"] },
    onDrop: (acceptedFiles) => {
      onFilesChange(input.id, acceptedFiles);
    },
  });
  return (
    <div
      className={`h-fit ${!input.value ? "mt-[1px] flex justify-end" : "flex h-[40px] justify-between space-x-4"}`}
    >
      {input.value && (
        <div {...getRootProps()} className="flex cursor-pointer items-center">
          <input {...getInputProps()} />
          <div className="flex h-[26px] items-center rounded-[6px] hover:bg-[#F2F2F2]">
            <IonIcon
              icon={imagesOutline}
              className="h-[16px] w-[16px] text-[#44444F]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const CommentsForm = ({ comments }) => {
  const [inputs, setInputs] = useState([
    { id: Date.now(), value: "", files: [] },
  ]);
  const [submittedInputs, setSubmittedInputs] = useState([]);
  const [indexEdit, setIndexEdit] = useState(null);

  useEffect(() => {
    setSubmittedInputs(comments);
  }, [comments]);

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
    // setSubmittedInputs((prevSubmitted) =>
    //   prevSubmitted.map((input) =>
    //     input.id === inputId
    //       ? {
    //           ...input,
    //           files: input.files.filter((_, index) => index !== fileIndex),
    //         }
    //       : input,
    //   ),
    // );
  };

  const handleFilesChangeSubmit = (id, files) => {
    // setSubmittedInputs((prevInputs) =>
    //   prevInputs.map((input) =>
    //     input.id === id
    //       ? { ...input, files: [...input.files, ...files] }
    //       : input,
    //   ),
    // );
  };

  const handleSubmit = (input) => {
    // setSubmittedInputs((prevSubmitted) => [
    //   ...prevSubmitted,
    //   { ...input, id: Date.now() },
    // ]);
    // setIsOpen(true);
    // setInputs([]);
    // const newInput = { id: Date.now(), value: "", files: [] };
    // setInputs((prevInputs) => [...prevInputs, newInput]);
    // setShowContent(true);
  };

  return (
    <div className={`flex h-full flex-col overflow-auto py-2 pl-4`}>
      <div className="flex-1 overflow-auto">
        {submittedInputs.map((input, index) => (
          <div
            key={index}
            className={`mb-4 flex flex-col items-start pb-3 ${index === submittedInputs.length - 1 || submittedInputs.length === 1 ? "" : "border-b"}`}
          >
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="flex h-[22px] w-[22px]">
                  <AvatarImage src={input.img} alt="@shadcn" />
                  <AvatarFallback>??</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-x-2">
                  <p className="text-xs font-medium text-grisText">
                    {input?.name}
                  </p>
                  <div className="text-xs font-medium text-grisText">
                    &bull;
                  </div>

                  <span className="text-[10px] font-normal text-[#ABABAB]">
                    Hace {input?.diff} días
                  </span>
                </div>
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
                className={`flex max-w-[250px] flex-col pt-[8px] ${index == indexEdit && "mt-1 w-full max-w-full rounded-[14px] border-[1px] border-grisDisabled p-2"}`}
              >
                <input
                  type="text"
                  defaultValue={input?.comment}
                  className={`break-words font-roboto text-[12px] font-normal text-[#44444F] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0`}
                />

                {/* <div className="flex space-x-2">
                  {input.files.map((file, fileIndex) => (
                    <div key={fileIndex} className="group relative mt-[17px]">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="h-[48px] w-[46px] rounded-[8px] object-cover"
                      />
                      <button
                        onClick={() =>
                          handleRemoveSubmittedFile(input.id, fileIndex)
                        }
                        className="absolute right-[-3px] top-[-3px] flex h-4 w-4 items-center justify-center rounded-full bg-[#44444F] opacity-0 group-hover:opacity-100"
                      >
                        <IonIcon icon={close} className="size-3 text-white" />
                      </button>
                    </div>
                  ))}
                </div> */}

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <IconWithDropzone
                      input={input}
                      onFilesChange={handleFilesChangeSubmit}
                    />
                  </div>
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
                  {input.comment}
                </span>
                {/* <div className="flex space-x-2">
                  {input.files.map((file, fileIndex) => (
                    <div key={fileIndex} className="group relative pt-[17px]">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="h-[48px] w-[46px] rounded-[8px] object-cover"
                      />
                    </div>
                  ))}
                </div> */}
              </div>
            )}
          </div>
        ))}
      </div>
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
    </div>
  );
};

export default CommentsForm;
