import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { addCircle, closeCircle } from "ionicons/icons";
import { Form } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ConfigureSublv = () => {
  const [sublevels, setSublevels] = useState([
    { id: 1, status: "0", name: "" },
  ]);

  const handleStatusChange = (id, checked) => {
    setSublevels(
      sublevels.map((sublevel) =>
        sublevel.id === id
          ? { ...sublevel, status: checked ? "1" : "0" }
          : sublevel,
      ),
    );
  };
  
  
  const handleNameChange = (id, name) => {
    setSublevels(
      sublevels.map((sublevel) =>
        sublevel.id === id ? { ...sublevel, name } : sublevel,
      ),
    );
  };

  const handleAddSublevel = () => {
    const newId = Math.max(...sublevels.map((s) => s.id), 0) + 1;
    setSublevels([...sublevels, { id: newId, status: "0", name: "" }]);
  };

  const handleRemoveSublevel = (id) => {
    if (sublevels.length > 1) {
      setSublevels(sublevels.filter((sublevel) => sublevel.id !== id));
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="rounded-full border border-[#44444F] bg-transparent px-6 py-4 text-sm text-[#44444F] hover:bg-transparent"
        >
          Configurar
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-auto sm:max-w-[550px]">
        <DialogHeader className="border-b border-[#D7D7D7] px-6 pb-4">
          <DialogTitle className="font-poppins text-sm font-semibold text-[#44444F]">
            Configuración de Subniveles de Ubicación
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 py-4">
          <Form
            id="form-warehouses"
            action="/inventory/warehouse-locations"
            method="POST"
          >
            <div className="mb-2 flex justify-between border-b border-[#D7D7D7]">
              <label className="flex font-roboto text-[14px] text-gris2">
                Subnivel
              </label>
              <label className="flex font-roboto text-[14px] text-gris2">
                Nombre o Descripción
              </label>
              <label className="flex font-roboto text-[14px] text-gris2">
                Estatus
              </label>
            </div>
            {
  sublevels.map((sublevel) => (
    <div
      key={sublevel.id}
      className="mb-4 flex items-center space-x-4 border-b border-[#D7D7D7] pb-4"
    >
      <span className="w-20 font-roboto text-[14px] text-gris2">
        Subnivel {sublevel.id}
      </span>
      <Input
        name="name[]"
        type="text"
        value={sublevel.name}
        onChange={(e) => handleNameChange(sublevel.id, e.target.value)}
        placeholder="Agrega"
        className="flex-grow rounded-xl border border-[#D7D7D7] font-roboto text-sm text-[#696974] placeholder:text-[#8F8F8F] focus:border-[#5B89FF] focus-visible:ring-[#5B89FF]"
      />
      <div className="flex items-center justify-between gap-x-2">
        <Checkbox
          name={`status-${sublevel.id}`}
          value="1"
          checked={sublevel.status === "1"}
          onCheckedChange={(checked) => handleStatusChange(sublevel.id, checked)}
          className="border-primarioBotones data-[state=checked]:bg-primarioBotones"
        />
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones"
          onClick={() => handleRemoveSublevel(sublevel.id)}
          disabled={sublevels.length === 1}
        >
          <IonIcon
            icon={closeCircle}
            size="small"
            className="cursor-pointer text-grisDisabled"
          />
        </Button>
      </div>
    </div>
  ))
}


            <Button
              variant="ghost"
              className="mt-2 rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
              onClick={handleAddSublevel}
              type="button"
            >
              <IonIcon
                icon={addCircle}
                className="hover:text-primarioBotones-dark active:text-primarioBotones-darker h-5 w-5 text-primarioBotones transition-colors duration-300"
              />
            </Button>
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Crear
              </Button>
            </div>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfigureSublv;
