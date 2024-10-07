import React from "react";
import NavigationHeader from "@/components/navigation-header";
import { useParams } from "react-router-dom";

const DeliveryDetails = () => {
  const { id } = useParams();

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="text-md font-poppins font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="mt-1 h-[30px] font-poppins text-xl font-bold text-grisHeading">
            Entrega Pendiente: {id}
          </p>
        </div>


        
      </div>
    </div>
  );
};

export default DeliveryDetails;
