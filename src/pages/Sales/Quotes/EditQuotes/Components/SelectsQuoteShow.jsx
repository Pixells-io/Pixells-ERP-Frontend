import React from "react";
import InputForm from "@/components/InputForm/InputForm";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const SelectsQuoteShow = ({ data }) => {
  return (
    <div className="rounded-xl bg-white p-4">
      <div className="grid w-full grid-cols-12 gap-2">
        <div className="col-span-2">
          <InputForm
            placeholder="Folio de Venta"
            value={data?.id}
            onChange={() => {}}
            readOnly
          />
        </div>
        <div className="col-span-4">
          <InputForm
            placeholder="Cliente"
            value={data?.client}
            onChange={() => {}}
            readOnly
          />
        </div>

        <div className={"col-span-4"}>
          <InputForm
            placeholder="Lista de Precio"
            value={data?.price_list}
            onChange={() => {}}
            readOnly
          />
        </div>

        <div className="col-span-2">
          <InputForm
            placeholder="Vencimiento"
            value={data?.expiration_date}
            onChange={() => {}}
            readOnly
          />
        </div>

        <div className="col-span-3 flex items-center gap-x-2">
          <Avatar className="mt-5 size-7">
            <AvatarImage src={data?.seller?.img} title={data?.seller?.name} />
          </Avatar>
          <InputForm
            placeholder="Vendedor"
            value={data?.seller?.name}
            onChange={() => {}}
            readOnly
          />
        </div>
        <div className="col-span-3 flex items-center gap-x-2">
          <Avatar className="mt-5 size-7">
            <AvatarImage src={data?.creator?.img} title={data?.creator?.name} />
          </Avatar>
          <InputForm
            placeholder="Creador"
            value={data?.creator?.name}
            onChange={() => {}}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default SelectsQuoteShow;
