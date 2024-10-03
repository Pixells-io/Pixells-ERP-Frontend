import React, { useState } from "react";
import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const SelectsQuote = ({
  data,
  isEditable,
  clientsList,
  listPriceList,
  costCenterList,
  usersList,
}) => {
  const [inputValue, setInputValue] = useState({
    id: data?.id,
    code: data?.code,
    priceList: data?.priceList,
    ccost: data?.ccost,
    condition: data?.condition,
    date: data?.date,
    stored: data?.stored,
    seller: data?.seller,
  });

  return (
    <div className="rounded-xl bg-white p-4">
      <div className="grid w-full grid-cols-12 gap-2">
        <div className="col-span-2">
          <InputForm
            name="code"
            placeholder="Código de Ticket"
            value={inputValue?.code}
            disabled={!isEditable}
            // onChange={(e) => setInputValue(e.target.value)}
            readOnly
          />
        </div>
        <div className="col-span-4">
          <SelectRouter
            value={listPriceList.find((cc) => cc.id == inputValue?.priceList) || null}
            name={"priceList"}
            options={listPriceList}
            placeholder="Lista de Precios"
            required={true}
            disabled={!isEditable}
            // onChange={(value) => handleChange(value.id, "costCenter")}
            getOptionValue={(e) => e.id}
            getOptionLabel={(e) => e.name}
          />
        </div>

        <div className="col-span-4">
          <SelectRouter
            value={costCenterList.find((cc) => cc.id == inputValue?.ccost) || null}
            name={"ccost"}
            options={costCenterList}
            placeholder="Centro de Costos"
            required={true}
            disabled={!isEditable}
            // onChange={(value) => handleChange(value.id, "costCenter")}
            getOptionValue={(e) => e.id}
            getOptionLabel={(e) => e.name}
          />
        </div>
        <div className="col-span-2">
          <InputForm
            name="condition"
            placeholder="Condición de Pago"
            value={""}
            disabled={!isEditable}
            readOnly
          />
        </div>

        <div className="col-span-2">
          <InputForm
            type={"date"}
            name="expiration"
            placeholder="Vencimiento"
            value={inputValue}
            disabled={!isEditable}
            // onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="col-span-4">
          <SelectRouter
            value={
              clientsList.find((store) => store.id == inputValue?.stored) || null
            }
            name={"stored"}
            options={clientsList}
            placeholder="Cliente"
            required={true}
            disabled={!isEditable}
            // onChange={(value) => handleChange(value.id, "customer")}
            getOptionValue={(e) => e.id}
            getOptionLabel={(e) => e.name}
          />
        </div>
        <div className="col-span-4">
          <SelectRouter
            value={usersList.find((store) => store.id == inputValue?.seller) || null}
            name={"seller"}
            options={usersList}
            placeholder="Vendedor"
            required={true}
            disabled={!isEditable}
            getOptionValue={(e) => e.id}
            getOptionLabel={(e) => e.name}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectsQuote;
