import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { IonIcon } from "@ionic/react";
import {
  imagesOutline,
  closeCircle,
} from "ionicons/icons";

const InputWithDropzone = ({
  input,
  onInputChange,
  onFilesChange,
  onRemoveFile,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".pdf", ".doc", ".docx", ".jpeg", ".jpg", ".png"] },
    onDrop: (acceptedFiles) => {
      onFilesChange(input.id, acceptedFiles);
    },
  });
  return (
    <div className="flex flex-col rounded-[8px] p-0 bg-grisBg">
      <div className={`${input.value ? "h-[54px] border-b" : "h-[40px]"} flex items-center px-2`}>
        <input
          type="text"
          value={input.value}
          onChange={(e) => onInputChange(input.id, e.target.value)}
          className={`mb-2 mt-[7px] flex h-[25px] w-full font-roboto text-xs text-[#8F8F8F] flex-grow rounded-[12px] border-none bg-transparent pl-2 text-[11px] text-[#44444F] placeholder:mt-4 placeholder:font-poppins placeholder:text-[11px] placeholder:font-normal placeholder:text-[#CCCCCC] placeholder:text-[#D7D7D7] focus:outline-none focus:ring-0${!input.value ? "h-[50px]" : "h-[54px]"}`}
          placeholder="Agregar Comentario"
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

const CommentsForm = ({ }) => {
  const [inputs, setInputs] = useState([
    { id: Date.now(), value: "", files: [] },
  ]);

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

  return (
    <div>
      {inputs.map((input) => (
        <InputWithDropzone
          key={input.id}
          input={input}
          onInputChange={handleInputChange}
          onFilesChange={handleFilesChange}
          onRemoveFile={handleRemoveFile}
        />
      ))}
    </div>
  );
};

export default CommentsForm;
