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
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { saveNewProduct } from "../utils";

const CreateArticle = () => {
  const data = useLoaderData();
  const { categories, warehouses, suppliers, attributes } = data;
  const [initialValues, setInitialValues] = useState({
    productType: "0",
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
  });

  const [inputsData, setInputsData] = useState({
    sujetoAImpuesto: false,
    disponibleParaDevolucion: false,
    manufacturaDisponible: false,
    fabricantes: "",
    comentario: "",
    activos: false,
    from: "",
    to: "",
    imagenPrincipal: null,
    metodoValoracion: "",
    costo: "",
    stockMinimo: "",
    stockMaximo: "",
    proveedor: "",
  });

  const [variableData, setVariableData] = useState({
    selectedGroups: [],
    images: [],
  });

  const handleSelectChange = (name, value) => {
    setInitialValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const getActiveSlots = (groups) => {
    return groups.map((group) => ({
      ...group,
      slots: group.slots.filter(
        (slot) => slot.active === 1 || slot.active === 0,
      ),
    }));
  };

  const selectClasses =
    "w-50 px-4 rounded-xl border border-[#44444F] bg-[#F2F2F2] text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  const hiddenInputs = [
    { name: "type", value: initialValues.productType || "" },
    { name: "code", value: initialValues.codigoDeArticulo || "" },
    { name: "name", value: initialValues.nombreODescripcion || "" },
    { name: "cost_center_id", value: initialValues.centroDeCostos || "" },
    { name: "preferred_warehouse_id", value: initialValues.almacen || "" },
    { name: "price", value: initialValues.precio || "" },
    { name: "category_id", value: initialValues.categoria || "" },
    { name: "barcode", value: initialValues.codigoDeBarras || "" },
    { name: "measure", value: initialValues.unidadesDeMedida || "" },
    { name: "raw_material", value: initialValues.inventario || false },
    { name: "buys", value: initialValues.compra || false },
    { name: "sale", value: initialValues.venta || false },
    { name: "subject_to_tax", value: inputsData.sujetoAImpuesto || false },
    {
      name: "available_for_return",
      value: inputsData.disponibleParaDevolucion || false,
    },
    {
      name: "manufacturing_available",
      value: inputsData.disponibleParaDevolucion || false,
    },
    { name: "manufacturer", value: inputsData.fabricantes || "" },
    { name: "active", value: inputsData.activos || false },
    { name: "from_active", value: inputsData.from || "" },
    { name: "to_active", value: inputsData.to || "" },
    { name: "principal_image", value: inputsData.imagenPrincipal || "" },
    { name: "valuation_method", value: inputsData.metodoValoracion || "" },
    { name: "min_stock", value: inputsData.stockMinimo || "" },
    { name: "max_stock", value: inputsData.stockMaximo || "" },
    { name: "default_supplier", value: inputsData.proveedor || "" },
    {
      name: "variable_groups",
      value: JSON.stringify(getActiveSlots(variableData.selectedGroups)),
    },
    { name: "images", value: JSON.stringify(variableData.images) },
  ];
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
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
              value={initialValues.productType || "0"}
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

        <div className="relative w-full space-y-4 overflow-auto">
          <Inputs
            categories={categories}
            warehouses={warehouses}
            inputsData={initialValues}
            setInputsData={setInitialValues}
          />

          <FormGroup
            productType={initialValues.productType}
            suppliers={suppliers}
            attrb={attributes}
            inputsData={inputsData}
            setInputsData={setInputsData}
            variableData={variableData}
            setVariableData={setVariableData}
          />

          <Form
            method="post"
            action="/inventory/create"
            encType="multipart/form-data"
          >
            {/* Inputs ocultos */}
            {hiddenInputs.map((input) => (
              <input
                key={input.name}
                type="hidden"
                name={input.name}
                value={input.value}
              />
            ))}
            {inputsData.imagenPrincipal && (
              <input
                type="file"
                name="principal_image"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => setInputsData({ ...inputsData, imagenPrincipal: e.target.files[0].path })}
              />
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
  console.log(response)
  return "Datos procesados correctamente";
}
