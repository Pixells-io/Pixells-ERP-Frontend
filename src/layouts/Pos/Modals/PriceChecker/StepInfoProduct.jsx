import React from "react";

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function StepInfoProduct({ setSection }) {
  return (
    <>
      <DialogHeader className="border-b">
        <DialogTitle className="px-4 py-4">
          <div className="flex justify-between font-poppins text-sm font-semibold text-grisHeading">
            Verificar Precio
          </div>
        </DialogTitle>
      </DialogHeader>
      <DialogDescription className="hidden"></DialogDescription>
      <div className="flex justify-center h-full my-[60px]">
        <div className="flex flex-col gap-y-2">
          <p className="font-roboto font-semibold	text-[22px] text-grisHeading">Naranja Chihuahua</p>
          <div className="flex gap-x-6">
            <p className="font-roboto text-base text-primarioBotones">Precio Unitario </p>
            <p className="font-roboto text-base text-primarioBotones">$20.00 </p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <Button type="button" className="bg-primarioBotones rounded-3xl	h-[31px] w-[110px]"
            onClick={() => setSection("menu")}>Listo</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepInfoProduct;
