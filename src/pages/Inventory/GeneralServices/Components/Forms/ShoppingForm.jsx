import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Button } from "@/components/ui/button";

const ShoppingTab = () => {
  return (
    <Form
    className="flex h-full w-full flex-col py-4"
     action={``}
     method="post"
   >
     <div className="max-h-screen overflow-auto px-6">
       <h2 className="font-poppins text-sm font-medium text-[#44444F]">
         COMPRAS
       </h2>
       
       <div className="pt-4 col-span-12">
            <SelectRouter
              name="name"
              type="text"
              placeholder={"Proveedor predeterminado:"}
       
            />
          </div>
      </div>
     <div className="mt-10 flex w-full flex-1 items-end px-6">
       <div className="flex w-full justify-between">
         <label className="text-xs font-light text-[#8F8F8F]">
           Actualizado 07 septiembre 2024
         </label>
         <Button
           className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
           disabled={navigation.state === "submitting"}
         >
           {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
         </Button>
       </div>
     </div>

   </Form>
  );
};

export default ShoppingTab;
