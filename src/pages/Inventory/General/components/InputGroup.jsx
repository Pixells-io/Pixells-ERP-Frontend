import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const Inputs = () => {
  const [inputsData, setInputsData] = useState({
    codigoDeArticulo: '', nombreODescripcion: '', centroDeCostos: '',
    listaDePrecios: '', almacen: '', unidadesDeMedida: '',
    categoria: '', codigoDeBarras: '', precioUnitario: '',
    inventario: false, compra: false, venta: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputsData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setInputsData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (name, checked) => {
    setInputsData(prevData => ({ ...prevData, [name]: checked }));
  };

  const inputClass = "w-full rounded-xl border border-[#696974] font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent";
  const selectClass = "w-full rounded-xl border border-grisText font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <section className="bg-white rounded-xl p-4 w-full flex">
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input type="text" className={inputClass} placeholder="Código de Articulo" name="codigoDeArticulo" value={inputsData.codigoDeArticulo} onChange={handleInputChange} />
        <Input type="text" className={inputClass} placeholder="Nombre o descripcion" name="nombreODescripcion" value={inputsData.nombreODescripcion} onChange={handleInputChange} />
        <Select name="centroDeCostos" value={inputsData.centroDeCostos} onValueChange={(value) => handleSelectChange("centroDeCostos", value)}>
          <SelectTrigger className={selectClass}><SelectValue placeholder="Centro de costos" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
        <Select name="listaDePrecios" value={inputsData.listaDePrecios} onValueChange={(value) => handleSelectChange("listaDePrecios", value)}>
          <SelectTrigger className={selectClass}><SelectValue placeholder="Lista de precios" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
        <Select name="almacen" value={inputsData.almacen} onValueChange={(value) => handleSelectChange("almacen", value)}>
          <SelectTrigger className={selectClass}><SelectValue placeholder="Almacén" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
        <Select name="unidadesDeMedida" value={inputsData.unidadesDeMedida} onValueChange={(value) => handleSelectChange("unidadesDeMedida", value)}>
          <SelectTrigger className={selectClass}><SelectValue placeholder="Unidades de medida" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
        <Select name="categoria" value={inputsData.categoria} onValueChange={(value) => handleSelectChange("categoria", value)}>
          <SelectTrigger className={selectClass}><SelectValue placeholder="Categoría" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
        <Input className={inputClass} placeholder="Código de barras" name="codigoDeBarras" value={inputsData.codigoDeBarras} onChange={handleInputChange} />
        <Input className={inputClass} placeholder="Precio unitario" name="precioUnitario" value={inputsData.precioUnitario} onChange={handleInputChange} />
      </div>
      <div className="flex-shrink-0 ml-6 flex flex-col space-y-4">
        {['inventario', 'compra', 'venta'].map((item) => (
          <label key={item} className="flex items-center">
            <Checkbox
              id={item}
              name={item}
              checked={inputsData[item]}
              onCheckedChange={(checked) => handleCheckboxChange(item, checked)}
              className="border-primarioBotones data-[state=checked]:bg-primarioBotones data-[state=checked]:text-white"
            />
            <span className="ml-2 text-sm font-roboto text-gris2 capitalize">{item}</span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default Inputs;