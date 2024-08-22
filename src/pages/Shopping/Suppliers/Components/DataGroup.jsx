import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigation } from "react-router-dom";

const InputsGroup = ({ fields, initialValues }) => {
  const navigation = useNavigation();
  // Estado para mantener los valores de los campos
  const [values, setValues] = useState(initialValues);

  // Maneja los cambios en los campos de entrada
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Maneja los cambios en los campos de selección
  const handleSelectChange = (value, name) => {
    setValues({ ...values, [name]: value });
  };

  const selectStyle =
    "w-full rounded-xl border border-grisText-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="w-full rounded-xl bg-white p-4">
      <div className="grid grid-cols-12">
        <div className="col-span-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {fields.map((field) => {
            if (field.type === "input") {
              return (
                <div key={field.name}>
                  <Input
                    name={field.name}
                    className="w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    onChange={handleInputChange}
                  />
                </div>
              );
            } else if (field.type === "select") {
              return (
                <div key={field.name}>
                  <Select
                    value={values[field.name]}
                    name={field.name}
                    onValueChange={(value) =>
                      handleSelectChange(value, field.name)
                    }
                  >
                    <SelectTrigger className={selectStyle}>
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="col-span-2 flex items-end justify-center">
          <Button
            className="rounded-3xl bg-primarioBotones"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Guardar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputsGroup;
