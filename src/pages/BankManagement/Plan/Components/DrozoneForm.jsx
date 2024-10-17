import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IonIcon } from "@ionic/react";
import { add,imageOutline,chevronForwardOutline } from "ionicons/icons";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import InputForm from '@/components/InputForm/InputForm';

const InputWithDropzone = ({ input, onInputChange, onFilesChange }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*,application/pdf',
    onDrop: (acceptedFiles) => {
      onFilesChange(input.id, acceptedFiles);
    },
  });

  return (
    <div className="flex flex-col mb-2">
      <InputForm
        type="text"
        value={input.value}
        onChange={(e) => onInputChange(input.id, e.target.value)}
        className="flex-grow h-[54px] rounded-[20px] mb-2"
        placeholder="Agrega un titulo"
      />
      {/* Mostrar carga de archivos solo si hay texto en el input */}
      {input.value && (<>
         <div className="flex items-center h-[54px] overflow-x-auto space-x-2">
         {input.files&&input.files.map((file, index) => (
           <img
             key={index}
             src={URL.createObjectURL(file)}
             alt={file.name}
             className="w-[46px] h-[48px] object-cover rounded-[8px]"
           />
         ))}
       </div>
        <div className="flex justify-between space-x-2">
          <div {...getRootProps()} className="flex items-center cursor-pointer">
            <input {...getInputProps()} />
            <IonIcon icon={imageOutline} className="w-[20px] h-[20px] text-[#44444F]" />
          </div>
         <Button className="bg-[#5B89FF] flex">
         <IonIcon icon={chevronForwardOutline} className="w-[20px] h-[20px]  text-white " />
         </Button>
        </div></>
      )}
    </div>
  );
};

const DynamicForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState([]);

  const handleAddInput = () => {
    const newInput = { id: Date.now(), value: '', files: [] };
    setInputs([...inputs, newInput]);
  };

  const handleInputChange = (id, value) => {
    setInputs(inputs.map(input => 
      input.id === id ? { ...input, value } : input
    ));
  };

  const handleFilesChange = (id, files) => {
    setInputs(inputs.map(input => 
      input.id === id ? { ...input, files: [...input.files, ...files] } : input
    ));
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <IonIcon icon={add} className="size-12 text-[#44444F]" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col flex max-h-[400px] w-[450px] flex-col gap-2 overflow-scroll rounded-[10px]">
        <div className="flex w-full justify-start border-b pb-2 mb-4">
          <span className="font-poppins text-sm">Documentos</span>
        </div>
        <div className="flex flex-col w-full">
            <div className="flex justify-end">
          <Button onClick={handleAddInput} className="flex w-[58px] mb-4 rounded-[10px] h-[32px] bg-[#5B89FF] text-xs text-[#FFFFFF]">
            Nuevo
          </Button>
          </div>
          {inputs.map((input) => (
            <InputWithDropzone
              key={input.id}
              input={input}
              onInputChange={handleInputChange}
              onFilesChange={handleFilesChange}
            />
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DynamicForm;
