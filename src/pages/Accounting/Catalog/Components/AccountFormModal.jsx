import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const AccountFormModal = () => {
  const [newItem, setNewItem] = useState({
    rubro: '',
    ccontable: '',
    nombre: '',
    nivel: '',
    moneda: '',
    saldo: '',
    tcuenta: '',
    sat: '',
    descripcion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IonIcon
          icon={addCircleOutline}
          size="large"
          className="w-7 h-7 text-blue-500 cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="border-b pl-2 pb-4 -mx-6">
          <DialogHeader className="px-6">
            <DialogTitle className="font-poppins">Agregar Cuenta Contable</DialogTitle>
          </DialogHeader>
        </div>
        <form >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="rubro" className="text-sm text-grisText font-roboto">
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
            <Label htmlFor="ccontable" className="text-sm text-grisText font-roboto">
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
              <Label htmlFor="nivel" className="text-sm text-grisText font-roboto">
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
              <Label htmlFor="moneda" className="text-sm text-grisText font-roboto">
                Moneda
              </Label>
             
            </div>
          </div>
          
          <div className="mt-4">
            <Label htmlFor="nombre" className="text-sm text-grisText font-roboto">
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
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="saldo" className="text-sm text-grisText font-roboto">
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
            <div>
              <Label htmlFor="tcuenta" className="text-sm text-grisText font-roboto">
                Tipo de Cuenta
              </Label>
            
            </div>
          </div>
          
          <div className="mt-4">
            <Label htmlFor="sat" className="text-sm text-grisText font-roboto">
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
            <Label htmlFor="descripcion" className="text-sm text-grisText font-roboto">
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

          <div className="flex justify-end mt-6">
            <Button type="submit" className="rounded-full bg-primarioBotones px-8">
              Guardar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AccountFormModal;