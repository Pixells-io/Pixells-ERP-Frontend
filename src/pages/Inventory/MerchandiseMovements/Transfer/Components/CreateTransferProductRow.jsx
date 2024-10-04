import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, closeCircle } from "ionicons/icons";

import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const CreareTransferProductRow = ({ products, map }) => {
  const [productCode, setProductCode] = useState([]);
  const [productInventory, setProductInventory] = useState([]);

  function selectProducts(id) {
    const info = products.find((prod) => prod.id === id);
    setProductCode(info.code);
    setProductInventory(info.quantity);
  }

  return (
    <div className="flex w-full gap-6 border-b border-b-[#44444F40]">
      <div className="mt-1 w-2/12 py-4">
        <InputRouter
          name={"code[]"}
          type={"number"}
          disabled={true}
          value={productCode}
          titlePlaceholder={productCode}
        />
      </div>
      <div className="w-8/12 py-4">
        <SelectRouter
          name={"product[]"}
          options={map}
          className="w-full text-sm font-light"
          onChange={(e) => selectProducts(e.value)}
        />
      </div>
      <div className="mt-1 w-1/12 py-4">
        <InputRouter
          name={"inventory[]"}
          type={"number"}
          disabled={true}
          value={productInventory}
        />
      </div>
      <div className="mt-1 w-1/12 py-4">
        <InputRouter
          name={"to_transfer[]"}
          type={"number"}
          maxValue={productInventory}
          minValue={0}
        />
      </div>
    </div>
  );
};

export default CreareTransferProductRow;
