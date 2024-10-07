import React, { useState } from "react";
import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { HoverExclamation } from "@/components/Hovers/HoverExclamation";
import { alertCircleOutline } from "ionicons/icons";
import DatePicker from "@/components/DatePickerStyle/DatePicker";

const SelectsQuote = ({
  data,
  isEditable,
  clientsList,
  listPriceList,
  costCenterList,
  sellersList,
  defaultSeller,
  discountGeneral,
  setDiscountGeneral,
  expirationDate,
  setExpirationDate,
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
            placeholder="Código de Cotización"
            value={inputValue?.code}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.target.value, "code")}
            readOnly
          />
        </div>
        <div className="col-span-4">
          <SelectRouter
            value={
              clientsList.find(
                (store) => store.value == inputValue?.client_id,
              ) || null
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
        <div className="col-span-2 flex items-center gap-x-4">
          <SelectRouter
            value={
              [
                { value: "0", label: "Crédito" },
                { value: "1", label: "Contado" },
              ].find((credit) => credit.value == inputValue?.credit) || null
            }
            name={"credit"}
            options={[
              { value: "0", label: "Crédito" },
              { value: "1", label: "Contado" },
            ]}
            placeholder="Condiciones de Pago"
            required={true}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.value, "credit")}
            getOptionLabel={(e) => {
              return (
                <div className="text-roboto text-xs font-normal">
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
          <DatePicker
            title={"MM/DD/YYYY"}
            value={expirationDate}
            name={`expiration_date`}
            className={"w-full text-xs font-normal"}
            required={false}
            onChange={(e) => setExpirationDate(e)}
            placeholder={"Vencimiento"}
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
            required={false}
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
            required={false}
            disabled={!isEditable}
            onChange={(e) => handleInputChange(e.value, "ccost")}
          />
        </div>
        <div className="col-span-2">
          <InputForm
            type={"number"}
            name="discountGeneral"
            placeholder="Descuento %"
            value={discountGeneral}
            disabled={!isEditable}
            onChange={(e) => setDiscountGeneral(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectsQuote;
