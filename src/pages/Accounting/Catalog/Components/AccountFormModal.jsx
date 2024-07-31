import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const AccountFormModal = () => {
  const [newItem, setNewItem] = useState({
    rubro: "",
    ccontable: "",
    nombre: "",
    nivel: "",
    moneda: "",
    saldo: "",
    tcuenta: "",
    sat: "",
    descripcion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IonIcon
          icon={addCircleOutline}
          size="large"
          className="h-7 w-7 cursor-pointer text-blue-500"
        />
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-auto sm:max-w-[425px]">
        <div className="-mx-6 border-b pb-4 pl-0">
          <DialogHeader className="px-6">
            <DialogTitle className="font-poppins text-sm font-semibold text-grisHeading">
              Agregar Cuenta Contable
            </DialogTitle>
          </DialogHeader>
        </div>
        <form className="px-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="rubro"
                className="font-roboto text-sm font-light text-grisText"
              >
                Rubro
              </Label>
              <InputRouter
                id="rubro"
                name="rubro"
                value={newItem.rubro}
                onChange={handleInputChange}
                type="text"
              />
            </div>
            <div>
              <Label
                htmlFor="ccontable"
                className="font-roboto text-sm font-light text-grisText"
              >
                Cuenta contable
              </Label>
              <InputRouter
                id="ccontable"
                name="ccontable"
                value={newItem.ccontable}
                onChange={handleInputChange}
                type="text"
              />
            </div>
            <div>
              <Label
                htmlFor="nivel"
                className="font-roboto text-sm font-light text-grisText"
              >
                Nivel
              </Label>
              <InputRouter
                id="nivel"
                name="nivel"
                value={newItem.nivel}
                onChange={handleInputChange}
                type="text"
              />
            </div>
            <div>
              <Label
                htmlFor="moneda"
                className="font-roboto text-sm font-light text-grisText"
              >
                Moneda
              </Label>
              <SelectRouter
                name="moneda"
                options={[
                  { label: "MXN", value: "MXN" },
                  { label: "USD", value: "USD" },
                ]}
                placeholder="Moneda"
              />
            </div>
          </div>

          <div className="mt-4">
            <Label
              htmlFor="nombre"
              className="font-roboto text-sm font-light text-grisText"
            >
              Nombre
            </Label>
            <InputRouter
              id="nombre"
              name="nombre"
              value={newItem.nombre}
              onChange={handleInputChange}
              type="text"
            />
          </div>

          <div className="mt-4">
            <Label
              htmlFor="saldo"
              className="font-roboto text-sm font-light text-grisText"
            >
              Saldo
            </Label>
            <InputRouter
              id="saldo"
              name="saldo"
              value={newItem.saldo}
              onChange={handleInputChange}
              type="number"
            />
          </div>

          <div className="mt-4">
            <Label
              htmlFor="tcuenta"
              className="font-roboto text-sm font-light text-grisText"
            >
              Tipo de Cuenta
            </Label>
            <SelectRouter
              name="tcuenta"
              options={[]}
              placeholder="Tipo de Cuenta"
            />
          </div>

          <div className="mt-4">
            <Label
              htmlFor="sat"
              className="font-roboto text-sm font-light text-grisText"
            >
              Código Agrupador SAT (Contabilidad Electrónica)
            </Label>
            <InputRouter
              id="sat"
              name="sat"
              value={newItem.sat}
              onChange={handleInputChange}
              type="text"
            />
          </div>

          <div className="mt-4">
            <Label
              htmlFor="descripcion"
              className="font-roboto text-sm font-light text-grisText"
            >
              Descripción
            </Label>
            <InputRouter
              id="descripcion"
              name="descripcion"
              value={newItem.descripcion}
              onChange={handleInputChange}
              type="text"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              type="submit"
              className="rounded-full bg-primarioBotones px-8"
            >
              Guardar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AccountFormModal;
