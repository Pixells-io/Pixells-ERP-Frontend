import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Inputs from "../components/InputGroup";
import FormGroup from "../components/FormGroup";
import { Form, redirect, useLoaderData } from "react-router-dom";
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
  const [inventory,setInventory] = useState({
    metodoValoracion: "",
    costo: "",
    stockMinimo:"",
    stockMaximo: "",
  });

  const [variableData, setVariableData] = useState({
    selectedGroups: [],
    images: [], // Array de imágenes secundarias
  });
  const [buyData,setBuyData] =useState({proveedor:"",})

  const handleSelectChange = (name, value) => {
    setInitialValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const selectClasses =
    "w-50 px-4 rounded-xl border border-[#44444F] bg-[#F2F2F2] text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      const convertToBoolean = (value) =>
        value === true ? 1 : value === false ? 0 : 0;
      
      const info = {
        type: parseInt(initialValues.productType) || 1,
        code: initialValues.codigoDeArticulo || "",
        name: initialValues.nombreODescripcion || "",
        cost_center_id:parseInt(initialValues.centroDeCostos) || "",
        preferred_warehouse_id: parseInt( initialValues.almacen) || "",
        price: initialValues.precio || "",
        category_id: parseInt(initialValues.categoria) || "",
        barcode: initialValues.codigoDeBarras || "",
        measure: initialValues.unidadesDeMedida || "",
        raw_material: convertToBoolean(initialValues.inventario) || 0,
        buys: convertToBoolean(initialValues.compra) || 0,
        sale: convertToBoolean(initialValues.venta) || 0,
        subject_to_tax: convertToBoolean(inputsData.sujetoAImpuesto) || 0,
        available_for_return: convertToBoolean(inputsData.disponibleParaDevolucion) || 0,
        manufacturing_available: convertToBoolean(inputsData.manufacturaDisponible) || 0,
        manufacturer: inputsData.fabricantes || "",
        active: convertToBoolean(inputsData.activos) || 0,
        from_active: inputsData.from || "",
        to_active: inputsData.to || "",
        valuation_method: inventory.metodoValoracion || "",
        min_stock: inventory.stockMinimo || "",
        max_stock: inventory.stockMaximo || "",
        default_supplier: parseInt(buyData.proveedor) || "",
      };
    
      if (initialValues.productType === "2") {
        info.variables = variableData.selectedGroups;
        variableData.images.forEach((image) => {
          formData.append("second_images[]", image.file);
        });;
      }
    
      formData.append("info", JSON.stringify(info));
    console.log(info)
      if (inputsData.imagenPrincipal) {
        formData.append("primary_img", inputsData.imagenPrincipal);
      }
  
   const response = await saveNewProduct(formData);
      return redirect("/inventory");
    
    };
    
    

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
              value={initialValues.productType || "1"}
              onValueChange={(value) =>
                handleSelectChange("productType", value)
              }
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Producto Simple</SelectItem>
                <SelectItem value="2">Producto Variable</SelectItem>
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
            inventory={inventory}
            setInventory={setInventory}
            buyData={buyData}
            setBuyData={setBuyData}
          />

          <Form onSubmit={handleSubmit}>
            {/* Otros campos del formulario */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded bg-blue-500 px-4 py-2 text-white"
              >
                Enviar
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;


