import React, { useState } from 'react';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

const ConfirmationButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    const form = document.getElementById('fileinfo');
    const formElements = Array.from(form.elements);
    
    const formDataArray = formElements.map(element => {
      if (element.name) {
        return {
          name: element.name,
          value: element.value,
        };
      }
      return null;
    }).filter(item => item !== null);
    console.log(formDataArray);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-100 flex items-center justify-center">
          <div className="w-80 p-4 bg-black text-white rounded-lg">
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-roboto font-semibold">Confirmación</h4>
              <p className="text-sm font-roboto">Una vez realizada esta acción, el documento no podrá modificarse</p>
              <div className='space-x-3'>
                <Button
                  className="h-12 w-32 font-roboto bg-primario"
                  onClick={handleSubmit}
                >
                  Confirmar
                </Button>
                <Button
                  className="h-12 w-32 font-roboto border border-primario-500 text-white bg-black hover:border-blue-800"
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end mt-4 space-x-6">
        <Button
          className="h-12 w-32 font-roboto border border-primario-500 text-primarioBotones bg-white hover:bg-white"
        >
          Guardar Borrador
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="h-12 w-32 font-roboto border bg-primario text-white hover:bg-primario"
              onClick={() => setIsOpen(true)}
            >
              Aplicar
            </Button>
          </PopoverTrigger>
        </Popover>
      </div>
    </>
  );
};

export default ConfirmationButtons;