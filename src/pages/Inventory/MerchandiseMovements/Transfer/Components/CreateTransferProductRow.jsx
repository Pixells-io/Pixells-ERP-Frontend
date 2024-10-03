import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";

import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const CreareTransferProductRow = ({ product, map }) => {
  function selectProducts(id) {
    const info = product.find((prod) => prod.toLowerCase() === id.toLowerCase);
  }

  return (
    <div className="flex w-full">
      <div className="w-2/12 border-b border-b-[#44444F40] py-4 text-xs font-medium text-[#44444F]">
        <span>Codigo</span>
      </div>
      <div className="w-8/12 border-b border-b-[#44444F40] py-4">
        <SelectRouter
          name={"product[]"}
          placeholder={"Producto"}
          options={map}
          className="w-full text-sm font-light"
          onChange={(e) => selectProducts(e.value)}
        />
      </div>
      <div className="w-1/12 border-b border-b-[#44444F40] py-4 text-xs font-medium text-[#44444F]">
        <span>Inventario</span>
      </div>
      <div className="w-1/12 border-b border-b-[#44444F40] py-4 text-xs font-medium text-[#44444F]">
        <span>A Transferir</span>
      </div>
    </div>
  );
};

export default CreareTransferProductRow;
