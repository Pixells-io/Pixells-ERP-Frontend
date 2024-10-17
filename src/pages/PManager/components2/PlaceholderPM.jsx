import React from "react";
import NavigationHeader from "@/components/navigation-header";

function PlaceholderPM() {
  return (
    <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 bg-[#FBFBFB] px-14 py-3">
      {/* navigation inside */}
      <NavigationHeader />
      {/* top content */}
      <div className="flex items-center gap-8">
        <h2 className="font-poppins font-bold text-[#44444F]">
          PROJECT MANAGER
        </h2>
        {/* <div className="flex items-center gap-3 text-[#8F8F8F]">
          <div className="text-xs">3 Objetivos</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">27 Activities</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">8 Proyectos</div>
        </div> */}
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center pb-60">
        <img src="./img/pmanager.png" alt="" className="w-[80%]" />
        <h2 className="font-poppins text-[40px] text-grisHeading">
          ¡Selecciona un Espacio de Trabajo y un Objetivo!
        </h2>
      </div>
    </div>
  );
}

export default PlaceholderPM;
