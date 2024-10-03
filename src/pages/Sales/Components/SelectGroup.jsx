import React, { useState } from "react";
import InputForm from "@/components/InputForm/InputForm";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const SelectsQuote = ({ id, sl1, sl2, sl3, isEditable }) => {
  const [inputValue, setInputValue] = useState(id || "1");
  const [select1Value, setSelect1Value] = useState(sl1 || "");
  const [select2Value, setSelect2Value] = useState(sl2 || "");
  const [select3Value, setSelect3Value] = useState(sl3 || "");

  const handleChange = (value, name) => {
    if (isEditable) {
      switch (name) {
        case "user":
          setSelect1Value(value);
          break;
        case "costCenter":
          setSelect2Value(value);
          break;
        case "stored":
          setSelect3Value(value);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="rounded-xl bg-white p-4">
      <div className="grid w-full grid-cols-12 gap-2">
        <div className="col-span-2">
          <InputForm
            name="list"
            placeholder="Lista de precios"
            value={inputValue}
            disabled={!isEditable}
            onChange={(e) => setInputValue(e.target.value)}
            readOnly
          />
        </div>

        <div className="col-span-4">
          <SelectRouter
            value={
              [
                { id: "opcion1", name: "Usuario 1" },
                { id: "opcion2", name: "Usuario 2" },
                { id: "opcion3", name: "Usuario 3" },
              ].find((user) => user.id == select1Value) || null
            }
            name={"user"}
            options={[
              { id: "opcion1", name: "Usuario 1" },
              { id: "opcion2", name: "Usuario 2" },
              { id: "opcion3", name: "Usuario 3" },
            ]}
            placeholder="Usuario"
            required={true}
            disabled={!isEditable}
            onChange={(value) => handleChange(value.id, "user")}
            getOptionValue={(e) => e.id}
            getOptionLabel={(e) => e.name}
          />
        </div>

        <div className="col-span-4">
          <SelectRouter
            value={
              [
                { id: "opcion1", name: "Centro de costos 1" },
                { id: "opcion2", name: "Centro de costos 2" },
                { id: "opcion3", name: "Centro de costos 3" },
              ].find((cc) => cc.id == select2Value) || null
            }
            name={"ccost"}
            options={[
              { id: "opcion1", name: "Centro de costos 1" },
              { id: "opcion2", name: "Centro de costos 2" },
              { id: "opcion3", name: "Centro de costos 3" },
            ]}
            placeholder="Centro de Costos"
            required={true}
            disabled={!isEditable}
            onChange={(value) => handleChange(value.id, "costCenter")}
            getOptionValue={(e) => e.id}
            getOptionLabel={(e) => e.name}
          />
        </div>
        <div className="col-span-2"></div>

        <div className="col-span-2">
          <InputForm
            type={"date"}
            name="expiration"
            placeholder="Vencimiento"
            value={inputValue}
            disabled={!isEditable}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="col-span-4">
          <SelectRouter
            value={
              [
                { id: "opcion1", name: "Cliente 1" },
                { id: "opcion2", name: "Cliente 2" },
                { id: "opcion3", name: "Cliente 3" },
              ].find((store) => store.id == select3Value) || null
            }
            name={"stored"}
            options={[
              { id: "opcion1", name: "Cliente 1" },
              { id: "opcion2", name: "Cliente 2" },
              { id: "opcion3", name: "Cliente 3" },
            ]}
            placeholder="Cliente"
            required={true}
            disabled={!isEditable}
            onChange={(value) => handleChange(value.id, "customer")}
            getOptionValue={(e) => e.id}
            getOptionLabel={(e) => e.name}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectsQuote;
