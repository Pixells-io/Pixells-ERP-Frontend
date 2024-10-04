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
    price_list: data?.price_list,
    seller_id: defaultSeller?.value || data?.seller_id,
    client_id: data?.client_id,
    ccost: data?.ccost,
    credit: data?.credit,
    date: data?.date,
    expiration_date: data?.expiration_date,
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
              listPriceList.find((cc) => cc.value == inputValue?.price_list) ||
              null
            }
            name={"price_list"}
            options={listPriceList}
            placeholder="Lista de Precios"
            required={true}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.value, "price_list")}
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
                { value: "0", label: "Crédito" },
                { value: "1", label: "Contado" },
              ].find((credit) => credit.value == inputValue?.credit) ||
              null
            }
            name={"credit"}
            options={[
              { value: "0", label: "Crédito" },
              { value: "1", label: "Contado" },
            ]}
            placeholder="Condición de Pago"
            required={true}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.value, "credit")}
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
            name="expiration_date"
            placeholder="Vencimiento"
            value={inputValue?.expiration_date}
            disabled={!isEditable}
            required={true}
            onChange={(e) => handleInputChange(e.target.value, "expiration_date")}
          />
        </div>
        <div className="col-span-4">
          <SelectRouter
            value={
              clientsList.find((store) => store.value == inputValue?.client_id) ||
              null
            }
            name={"client_id"}
            options={clientsList}
            placeholder="Cliente"
            required={true}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.value, "client_id")}
          />
        </div>
        <div className="col-span-4">
          <SelectRouter
            value={
              sellersList.find(
                (seller) => seller.value == inputValue?.seller_id,
              ) || null
            }
            name={"seller_id"}
            options={sellersList}
            placeholder="Vendedor"
            required={true}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.value, "seller_id")}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectsQuote;
