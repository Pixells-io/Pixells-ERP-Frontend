import React, { useState } from "react";
import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { HoverExclamation } from "@/components/Hovers/HoverExclamation";
import { alertCircleOutline } from "ionicons/icons";

const SelectsQuote = ({
  data,
  isEditable,
  clientsList,
  listPriceList,
  costCenterList,
  sellersList,
  defaultSeller,
}) => {
  const [inputValue, setInputValue] = useState({
    id: data?.id,
    code: data?.code,
    priceList: data?.priceList,
    ccost: data?.ccost,
    condition: data?.condition,
    date: data?.date,
    stored: data?.stored,
    seller: defaultSeller?.value || data?.seller,
    expiration: data?.expiration,
  });

  const handleInputChange = (value, name) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="rounded-xl bg-white p-4">
      <div className="grid w-full grid-cols-12 gap-2">
        <div className="col-span-2">
          <InputForm
            name="code"
            placeholder="Código de Ticket"
            value={inputValue?.code}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.target.value, "code")}
            readOnly
          />
        </div>
        <div className="col-span-4">
          <SelectRouter
            value={
              listPriceList.find((cc) => cc.value == inputValue?.priceList) ||
              null
            }
            name={"priceList"}
            options={listPriceList}
            placeholder="Lista de Precios"
            required={true}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.value, "priceList")}
          />
        </div>

        <div className="col-span-4">
          <SelectRouter
            value={
              costCenterList.find((cc) => cc.value == inputValue?.ccost) || null
            }
            name={"ccost"}
            options={costCenterList}
            placeholder="Centro de Costos"
            required={true}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.value, "ccost")}
          />
        </div>
        <div className="col-span-2 flex items-center gap-x-4">
          <SelectRouter
            value={
              [
                { value: "cash", label: "Contado" },
                { value: "credit", label: "Crédito" },
              ].find((condition) => condition.value == inputValue?.condition) ||
              null
            }
            name={"condition"}
            options={[
              { value: "cash", label: "Contado" },
              { value: "credit", label: "Crédito" },
            ]}
            placeholder="Condición de Pago"
            required={true}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.value, "condition")}
            getOptionLabel={(e) => {
              return (
                <div className="text-roboto text-xs font-normal text-grisText">
                  <span>{e.label}</span>
                  {false && (
                    <>
                      <span> - </span>
                      <span className="text-[#D7586B]">Límite superado</span>
                    </>
                  )}
                </div>
              );
            }}
          />
          <HoverExclamation
            message={"Para agregar crédito, ve a las condiciones del cliente"}
            icon={alertCircleOutline}
            classNameContent={"w-[142px]"}
          />
        </div>

        <div className="col-span-2">
          <InputForm
            type={"date"}
            name="expiration"
            placeholder="Vencimiento"
            value={inputValue?.expiration}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.target.value, "expiration")}
          />
        </div>
        <div className="col-span-4">
          <SelectRouter
            value={
              clientsList.find((store) => store.value == inputValue?.stored) ||
              null
            }
            name={"stored"}
            options={clientsList}
            placeholder="Cliente"
            required={true}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.value, "stored")}
          />
        </div>
        <div className="col-span-4">
          <SelectRouter
            value={
              sellersList.find(
                (seller) => seller.value == inputValue?.seller,
              ) || null
            }
            name={"seller"}
            options={sellersList}
            placeholder="Vendedor"
            required={true}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.value, "seller")}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectsQuote;
