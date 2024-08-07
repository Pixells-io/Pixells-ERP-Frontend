import React, { useState } from "react";

import { IonIcon } from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function StepOne({ setStepped }) {
  const [formValues, setFormValues] = useState({
    title: "",
    subtitle: "",
    category: "",
  });

  const validateStep1 = () => {
    if (!formValues.title || !formValues.subtitle || !formValues.category) {
      return;
    }
    setStepped(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="w-full px-4 pt-4">
      <div className="grid grid-cols-12 gap-x-8 gap-y-4">
        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <div className="flex items-center gap-x-2">
            <img
              src={"https://picsum.photos/id/237/200/300"}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-semibold text-grisText">
              Don Formularo
            </span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <Select
            name={"category"}
            value={formValues.category}
            onValueChange={(value) => {
              setFormValues({
                ...formValues,
                category: value,
              });
            }}
          >
            <SelectTrigger className="rounded-full border border-[#D9D9D9] text-xs font-light text-[#44444F]">
              <SelectValue placeholder={"Selecciona Categoría"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="1" value="global">
                Global
              </SelectItem>
              <SelectItem key="2" value="notice">
                Noticias
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-12">
          <Input
            value={formValues.title}
            onChange={handleChange}
            required
            name="title"
            placeholder="Agrega Título"
            type="text"
            className="border-0 bg-inherit text-sm font-light text-[#44444f] placeholder:text-grisSubText focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className="col-span-12">
          <Input
            required
            onChange={handleChange}
            value={formValues.subtitle}
            name="subtitle"
            placeholder={"Que deseas compartir, Arturo Sánchez?"}
            type="text"
            className="border-0 bg-inherit text-sm font-light text-[#44444f] placeholder:text-grisSubText focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className="col-span-12">
          <div className="flex w-full justify-end">
            <Button
              type="button"
              className="rounded-xl bg-primarioBotones"
              onClick={() => validateStep1()}
            >
              <IonIcon
                icon={arrowForward}
                className="h-5 w-5 text-white"
              ></IonIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
