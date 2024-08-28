import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  closeCircle,
  chevronBack,
  chevronForward,
} from "ionicons/icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AreaForm = () => {
  const [inputs, setInputs] = useState([
    { codigo: "", nombre: "", ubicaciones: "" },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const inputsPerPage = 5;

  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index][event.target.name] = event.target.value;
    setInputs(values);
  };

  const handleAddFields = () => {
    setInputs([...inputs, { codigo: "", nombre: "", ubicaciones: "" }]);
    if (inputs.length % inputsPerPage === 0) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRemoveFields = (index) => {
    if (inputs.length > 1) {
      const values = [...inputs];
      values.splice(index, 1);
      setInputs(values);
      if ((inputs.length - 1) % inputsPerPage === 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const indexOfLastInput = currentPage * inputsPerPage;
  const indexOfFirstInput = indexOfLastInput - inputsPerPage;
  const currentInputs = inputs.slice(indexOfFirstInput, indexOfLastInput);

  const totalPages = Math.ceil(inputs.length / inputsPerPage);

  return (
    <div className="space-y-4 p-4">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label className="font-roboto text-[14px] text-gris2">Codigo</Label>
        </div>
        <div>
          <Label className="items-center font-roboto text-[14px] text-gris2">
            Nombre o Descripción
          </Label>
        </div>
        <div className="flex items-center justify-between">
          <Label className="font-roboto text-[14px] text-gris2">
            Ubicaciones
          </Label>
        </div>
      </div>
      {currentInputs.map((input, index) => (
        <div
          key={indexOfFirstInput + index}
          className="grid grid-cols-3 items-center gap-4"
        >
          <div>
            <Input
              id={`codigo-${indexOfFirstInput + index}`}
              name="codigo"
              value={input.codigo}
              className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              onChange={(e) => handleInputChange(indexOfFirstInput + index, e)}
            />
          </div>
          <div>
            <Input
              id={`nombre-${indexOfFirstInput + index}`}
              name="nombre"
              value={input.nombre}
              className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              onChange={(e) => handleInputChange(indexOfFirstInput + index, e)}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-grow">
              <Input
                id={`ubicaciones-${indexOfFirstInput + index}`}
                name="ubicaciones"
                value={input.ubicaciones}
                className="w-full rounded-xl border border-none bg-[#F6F6F6] font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
                onChange={(e) =>
                  handleInputChange(indexOfFirstInput + index, e)
                }
              />
            </div>
            {inputs.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones"
                onClick={() => handleRemoveFields(indexOfFirstInput + index)}
              >
                <IonIcon
                  icon={closeCircle}
                  size="small"
                  className="cursor-pointer text-grisDisabled"
                />
              </Button>
            )}
          </div>
        </div>
      ))}
      <div className="mt-4 flex items-center justify-between">
        <Button
          variant="ghost"
          className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          onClick={handleAddFields}
          type="button"
        >
          <IonIcon
            icon={addCircle}
            className="hover:text-primarioBotones-dark active:text-primarioBotones-darker h-5 w-5 text-primarioBotones transition-colors duration-300"
          />
        </Button>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            variant="outline"
            className="rounded-full border-gris2 bg-transparent hover:bg-none"
          >
            <IonIcon icon={chevronBack} />
          </Button>
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            variant="outline"
            className="rounded-full border-gris2 bg-transparent hover:bg-none"
          >
            <IonIcon icon={chevronForward} />
          </Button>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="rounded-full bg-primarioBotones px-6 py-4 text-white hover:bg-primarioBotones">
          Crear
        </Button>
      </div>
    </div>
  );
};

export default AreaForm;
