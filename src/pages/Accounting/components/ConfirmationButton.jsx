import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ConfirmationButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="z-100 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-60 rounded-lg bg-black p-4 text-white">
            <div className="flex flex-col gap-y-6">
              <h4 className="text-md text-roboto font-medium">Confirmación</h4>
              <p className="text-xs font-medium text-grisSubText">
                Una vez realizada esta acción, el documento no podrá modificarse
              </p>
              <div className="flex justify-evenly gap-x-2">
                <Button
                  className="h-8 w-28 bg-[#343434] text-xs font-semibold text-[#D9D9D9] hover:border-blue-800"
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
                <Button
                  className="h-8 w-28 bg-primarioBotones text-xs font-semibold"
                  onClick={handleSubmit}
                >
                  Confirmar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-4 flex justify-end space-x-6">
        <Button className="h-9 w-28 border-2 border-[##E0E0E0] rounded-xl	 bg-white text-xs font-semibold text-[#8F8F8F] hover:bg-white">
          Guardar Borrador
        </Button>

        <Button
          className="h-9 w-28 rounded-xl border bg-[#E0E0E0] text-xs font-semibold text-[#44444f] hover:bg-[#E0E0E0]"
          onClick={() => setIsOpen(true)}
        >
          Aplicar
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationButtons;
