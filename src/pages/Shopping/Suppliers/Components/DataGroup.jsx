import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "@/components/ui/select";

const InputsGroup = ({ fields, initialValues }) => {
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

  const selectStyle = "w-full rounded-xl border border-grisText font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="w-full bg-white rounded-xl p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {fields.map((field) => {
          if (field.type === "input") {
            return (
              <div key={field.name}>
                <Input
                  name={field.name}
                  className="w-full rounded-xl border border-[#696974] font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
                  placeholder={field.placeholder}
                  value={values[field.name]}
                  onChange={handleInputChange}
                />
              </div>
            );
          } else if (field.type === "select") {
            return (
              <div key={field.name}>
                <Select value={values[field.name]} onValueChange={(value) => handleSelectChange(value, field.name)}>
                  <SelectTrigger name={field.name} className={selectStyle}>
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
    </div>
  );
};

export default InputsGroup;
