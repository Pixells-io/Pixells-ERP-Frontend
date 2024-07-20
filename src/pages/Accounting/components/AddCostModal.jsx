import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import { Textarea } from "@/components/ui/textarea";
import InputRouter from "@/layouts/Masters/FormComponents/input";

const AddCostForm = ({ onAddItem }) => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${day}-${month}-${year}`;
  };

  const [newItem, setNewItem] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    creacion: getCurrentDate()
  });
  const [errors, setErrors] = useState({
    codigo: false,
    nombre: false,
    descripcion: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: value.trim() === '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar campos antes de guardar
    if (newItem.codigo.trim() === '' || newItem.nombre.trim() === '' || newItem.descripcion.trim() === '') {
      // Marcar campos faltantes como errores
      setErrors({
        codigo: newItem.codigo.trim() === '',
        nombre: newItem.nombre.trim() === '',
        descripcion: newItem.descripcion.trim() === ''
      });
      return;
    }
    
    onAddItem(newItem);
    setNewItem({ codigo: '', nombre: '', descripcion: '', creacion: getCurrentDate() });
    setErrors({ codigo: false, nombre: false, descripcion: false });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
       
        <IonIcon
          icon={addCircleOutline}
          size="large"
          className="w-12 h-12 text-blue-500 cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <div className="border-b pl-2 pb-4 -mx-6">
        <DialogHeader className="px-6">
          <DialogTitle className="font-poppins">Agregar nuevo Centro de Costos</DialogTitle>
        </DialogHeader>
        </div>
        <DialogHeader>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
          <Label htmlFor="codigo" className="text-sm text-grisText font-roboto">
            Código
          </Label>
          <InputRouter 
                id="codigo"
                name="codigo"
                value={newItem.codigo}
                onChange={handleInputChange} 
                type="text" />
        </div>
        <br />
          <div className="flex flex-col space-y-1">
          <Label htmlFor="nombre" className="text-sm text-grisText font-roboto">
            Nombre
          </Label>
          <InputRouter 
                id="nombre"
                name="nombre"
                value={newItem.nombre}
                onChange={handleInputChange}
                type="text" />
        </div>
          <br />
        <div className="flex flex-col space-y-1">
          <Label htmlFor="descripcion" className="text-sm text-grisText font-roboto">
            Descripción
          </Label>
          <Textarea rows={4} 
                id="descripcion"
                name="descripcion"
                value={newItem.descripcion}
                onChange={handleInputChange} 
                className="rounded-lg border-none bg-grisBg focus-visible:ring-primarioBotones"/>
        </div>

        <div className="flex justify-end mt-4">
          <Button type="submit" className="rounded-full bg-primarioBotones px-8">
            Guardar
          </Button>
        </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCostForm;

