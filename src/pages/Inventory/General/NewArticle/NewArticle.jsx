import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Inputs from "../components/InputGroup";
import FormGroup from "../components/FormGroup";
import { Form, useLoaderData } from "react-router-dom";
import { saveNewProduct } from "../utils";

const CreateArticle = () => {
  const data = useLoaderData();
  const { categories, warehouses, suppliers, attributes } = data;

  const [inputsData, setInputsData] = useState({
    productType: 0,
    codigoDeArticulo: "",
    nombreODescripcion: "",
    centroDeCostos: "",  
    listaDePrecios: "",  
    precio: "",          
    almacen: "",         
    unidadesDeMedida: "",
    categoria: "",       
    codigoDeBarras: "",
    inventario: false,
    compra: false,
    venta: false,
    sujetoAImpuesto: false,
    disponibleParaDevolucion: false,
    manufacturaDisponible: false,
    fabricantes: "",
    comentario:"",
    activos: false,
    from: "",
    to: "",
    imagenPrincipal: "",
    metodoValoracion: "",
    costo:"",
    stockMinimo: "",     
    stockMaximo: "",     
    proveedor: "",
  });

  const [variableData, setVariableData] = useState({
    selectedGroups: [],
    images: [],
  });

  const handleSelectChange = (name, value) => {
    setInputsData((prevData) => ({ ...prevData, [name]: value }));
  };


  const selectClasses =
    "w-50 px-4 rounded-xl border border-[#44444F] bg-[#F2F2F2] text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* Navegación */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              />
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              />
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            <div>Inventory - General</div>
          </div>
        </div>

        {/* Formulario de nuevo artículo */}
        <div>
          <p className="mb-4 font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Artículo
          </p>
          <div className="flex items-center">
            <span className="pr-4 pt-2 font-roboto text-[14px] text-[#696974]">
              Tipo de producto
            </span>
            <Select
              name="productType"
              value={inputsData.productType}
              onValueChange={(value) =>
                handleSelectChange("productType", value)
              }
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Producto Simple</SelectItem>
                <SelectItem value="1">Producto Variable</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Contenido */}
        <div className="relative w-full space-y-4 overflow-auto">
          <Inputs
            categories={categories}
            warehouses={warehouses}
            inputsData={inputsData}
            setInputsData={setInputsData}
          />

          <FormGroup
            productType={inputsData.productType}
            suppliers={suppliers}
            attrb={attributes}
            inputsData={inputsData}
            setInputsData={setInputsData}
            variableData={variableData}
            setVariableData={setVariableData}
          />

          {/* Formulario de envío */}
          <Form
            method="post"
            action="/inventory/create"
            encType="multipart/form-data"
          >
            {/* Inputs ocultos */}
            <input
              type="hidden"
              name="type"
              value={inputsData.productType}
            />
            <input
              type="hidden"
              name="code"
              value={inputsData.codigoDeArticulo}
            />
            <input
              type="hidden"
              name="name"
              value={inputsData.nombreODescripcion}
            />
            <input
              type="hidden"
              name="cost_center_id"
              value={inputsData.centroDeCostos}
            />
            <input
              type="hidden"
              name="preferred_warehouse_id"
              value={inputsData.almacen}
            />
            <input
              type="hidden"
              name="price"
              value={inputsData.precio}
            />
            <input
              type="hidden"
              name="category_id"
              value={inputsData.categoria}
            />
            <input
              type="hidden"
              name="barcode"
              value={inputsData.codigoDeBarras}
            />
            <input
              type="hidden"
              name="measure"
              value={inputsData.unidadesDeMedida}
            />
            <input
              type="hidden"
              name="raw_material"
              value={inputsData.inventario}
            />
            <input
              type="hidden"
              name="buys"
              value={inputsData.compra}
            />
            <input
              type="hidden"
              name="sale"
              value={inputsData.venta}
            />
            <input
              type="hidden"
              name="subject_to_tax"
              value={inputsData.sujetoAImpuesto}
            />
            <input
              type="hidden"
              name="available_for_return"
              value={inputsData.disponibleParaDevolucion}
            />
            <input
              type="hidden"
              name="manufacturing_available"
              value={inputsData.manufacturaDisponible}
            />
            <input
              type="hidden"
              name="manufacturer"
              value={inputsData.fabricante}
            />
            <input
              type="hidden"
              name="active"
              value={inputsData.activo}
            />
            <input
              type="hidden"
              name="from_active"
              value={inputsData.desde}
            />
            <input
              type="hidden"
              name="to_active"
              value={inputsData.hasta}
            />
            <input
              type="hidden"
              name="principal_image"
              value={inputsData.imagenPrincipal}
            />
            <input
              type="hidden"
              name="valuation_method"
              value={inputsData.metodoValoracion}
            />
            <input
              type="hidden"
              name="min_stock"
              value={inputsData.stockMinimo}
            />
            <input
              type="hidden"
              name="max_stock"
              value={inputsData.stockMaximo}
            />
            <input
              type="hidden"
              name="default_supplier"
              value={inputsData.proveedorDefault}
            />

            {/* Si el producto es de tipo variable, enviar datos adicionales */}
            {inputsData.productType === "1" && (
              <>
                <input
                  type="hidden"
                  name="variable_groups"
                  value={JSON.stringify(variableData.selectedGroups)}
                />
                <input
                  type="hidden"
                  name="images"
                  value={JSON.stringify(variableData.images)}
                />
              </>
            )}

            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Enviar
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;



export async function Action({ request }) {
  const formData = await request.formData();
  const response = await saveNewProduct(formData);
  return "Datos procesados correctamente";
}
