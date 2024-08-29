import React,{useEffect,useState} from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {useLoaderData } from "react-router-dom";
import { getsubLocation } from "../utils";
import { createPusherClient } from "@/lib/pusher";

const FormLocation = () => {
  const selectClasses =
    "w-full rounded-xl border border-gris2-transparent text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  const { data } = useLoaderData();
  const [configInfo, setConfigInfo] = useState(data);

  const pusherClient = createPusherClient();

  async function getSubLocationFunction() {
    let newData = await getsubLocation();
    setConfigInfo(newData);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-sub-ubications");

    pusherClient.bind("fill-sub-ubications", ({ message }) => {
      getSubLocationFunction();
    });

    return () => {
      pusherClient.unsubscribe("private-get-sub-ubications");
    };
  }, []);

  return (
    <div className="w-full space-y-4 overflow-auto rounded-xl bg-white px-6 py-6">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <Label
            htmlFor="almacen"
            className="font-roboto text-[14px] text-gris2"
          >
            Selecciona Almacén
          </Label>
          <Select>
            <SelectTrigger name="almacen" className={selectClasses}>
              <SelectValue placeholder="Seleccionar..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="almacen1">Almacén 1</SelectItem>
              <SelectItem value="almacen2">Almacén 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label
            htmlFor="descripcion"
            className="font-roboto text-[14px] text-gris2"
          >
            Descripción de la Ubicación
          </Label>
          <Input
            id="descripcion"
            className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <Label className="w-32 pt-6 font-roboto text-[14px] text-gris2">
            AREA
          </Label>
          <div className="flex flex-grow gap-4">
            <div className="flex-1">
              <Label className="pb-2 font-roboto text-[14px] text-gris2">
                Desde
              </Label>
              <Input className="border-gris2-transparent ml-[-40px] w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]" />
            </div>
            <div className="flex-1">
              <Label className="pb-2 font-roboto text-[14px] text-gris2">
                Hasta
              </Label>
              <Input className="border-gris2-transparent ml-[-40px] w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]" />
            </div>
          </div>
        </div>

        {["PASILLO", "ESTANTE"].map((field, index) => (
          <div key={index} className="flex items-center">
            <Label className="w-32 font-roboto text-[14px] text-gris2">
              {field}
            </Label>
            <div className="flex flex-grow gap-4">
              <div className="flex-1">
                <Input className="border-gris2-transparent ml-[-40px] w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]" />
              </div>
              <div className="flex-1">
                <Input className="border-gris2-transparent ml-[-40px] w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-4">
            <Label
              htmlFor="activo"
              className="font-roboto text-[14px] text-gris2"
            >
              Activo
            </Label>
            <Checkbox
              id="activo"
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            />
          </div>
          <div className="flex items-center gap-2">
            <Label
              htmlFor="inactivo"
              className="font-roboto text-[14px] text-gris2"
            >
              Inactivo
            </Label>
            <Checkbox
              id="inactivo"
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Label
            htmlFor="disponible"
            className="font-roboto text-[14px] text-gris2"
          >
            Disponible para venta
          </Label>
          <Checkbox
            id="disponible"
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <Label
            htmlFor="cantidadMinima"
            className="font-roboto text-[14px] text-gris2"
          >
            Cantidad mínima
          </Label>
          <Input
            id="cantidadMinima"
            type="number"
            className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
          />
        </div>
        <div className="flex-1">
          <Label
            htmlFor="cantidadMaxima"
            className="font-roboto text-[14px] text-gris2"
          >
            Cantidad máxima
          </Label>
          <Input
            id="cantidadMaxima"
            type="number"
            className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
          />
        </div>
      </div>

      <div>
        <Label
          htmlFor="pesoMaximo"
          className="font-roboto text-[14px] text-gris2"
        >
          Peso Máximo
        </Label>
        <Input
          id="pesoMaximo"
          type="number"
          className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
        />
      </div>

      <div>
        <Label
          htmlFor="codigoBarras"
          className="font-roboto text-[14px] text-gris2"
        >
          Código de Barras
        </Label>
        <Input
          id="codigoBarras"
          className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
        />
      </div>
      <div className="flex justify-end p-4">
        <Button className="rounded-full bg-primarioBotones px-8 py-3 hover:bg-none">
          Crear
        </Button>
      </div>
    </div>
  );
};

export default FormLocation;
