import React, { useState } from "react";
import {
  useNavigate,
  useLoaderData,
  useNavigation,
  useSubmit,
  redirect,
} from "react-router-dom";

import NavigationHeader from "@/components/navigation-header";

import { Button } from "@/components/ui/button";
import FormGroup from "../components/FormGroup";

import { saveNewProduct } from "../utils";

const CreateArticle = () => {
  const navigate = useNavigate();
  const submit = useSubmit();
  const navigation = useNavigation();
  const data = useLoaderData();
  const { categories, warehouses, suppliers, attributes } = data;

  const [initialValues, setInitialValues] = useState({
    productType: "1",
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

  const [inventory, setInventory] = useState({
    metodoValoracion: "",
    costo: "",
    stockMinimo: "",
    stockMaximo: "",
  });

  const [variableData, setVariableData] = useState({
    selectedGroups: [],
    Groups: [],
    images: [], // Array de imágenes secundarias
    variables_add: [],
    variables_destroy: [],
    images_destroy: [],
  });

  const [buyData, setBuyData] = useState({ proveedor: "" });

  const handleSelectChange = (name, value) => {
    setInitialValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    const formData = new FormData();
    const convertToBoolean = (value) =>
      value === true ? 1 : value === false ? 0 : 0;

    const info = {
      type: parseInt(initialValues.productType) || 1,
      code: initialValues.codigoDeArticulo || "",
      name: initialValues.nombreODescripcion || "",
      cost_center_id: parseInt(initialValues.centroDeCostos) || "",
      preferred_warehouse_id: parseInt(initialValues.almacen) || "",
      price: initialValues.precio || "",
      category_id: parseInt(initialValues.categoria) || "",
      barcode: initialValues.codigoDeBarras || "",
      measure: initialValues.unidadesDeMedida || "",
      raw_material: convertToBoolean(initialValues.inventario) || 0,
      buys: convertToBoolean(initialValues.compra) || 0,
      sale: convertToBoolean(initialValues.venta) || 0,
      subject_to_tax: convertToBoolean(inputsData.sujetoAImpuesto) || 0,
      available_for_return:
        convertToBoolean(inputsData.disponibleParaDevolucion) || 0,
      manufacturing_available:
        convertToBoolean(inputsData.manufacturaDisponible) || 0,
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
      });
    }

    formData.append("info", JSON.stringify(info));
    if (inputsData.imagenPrincipal) {
      formData.append("primary_img", inputsData.imagenPrincipal);
    }
    try {
      const response = await saveNewProduct(formData);
      if (response.code === 201) {
        navigate("/inventory"); // Redirige a "/inventory" usando navigate
      } else {
        console.error("Error al crear el producto", response);
      }
    } catch (error) {
      console.error("Error al crear el producto", error);
    }
  };

  function handleSubmitForm() {
    const formData = new FormData();
    const convertToBoolean = (value) =>
      value === true ? 1 : value === false ? 0 : 0;
    if (initialValues.productType == "1") {
      const info = {
        type: parseInt(initialValues.productType) || 1,
        code: initialValues.codigoDeArticulo || "",
        name: initialValues.nombreODescripcion || "",
        cost_center_id: parseInt(initialValues.centroDeCostos) || "",
        preferred_warehouse_id: parseInt(initialValues.almacen) || "",
        price: initialValues.precio || "",
        category_id: parseInt(initialValues.categoria) || "",
        barcode: initialValues.codigoDeBarras || "",
        measure: initialValues.unidadesDeMedida || "",
        raw_material: convertToBoolean(initialValues.inventario) || 0,
        buys: convertToBoolean(initialValues.compra) || 0,
        sale: convertToBoolean(initialValues.venta) || 0,
        subject_to_tax: convertToBoolean(inputsData.sujetoAImpuesto) || 0,
        available_for_return:
          convertToBoolean(inputsData.disponibleParaDevolucion) || 0,
        manufacturing_available:
          convertToBoolean(inputsData.manufacturaDisponible) || 0,
        manufacturer: inputsData.fabricantes || "",
        active: convertToBoolean(inputsData.activos) || 0,
        from_active: inputsData.from || "",
        to_active: inputsData.to || "",
        valuation_method: inventory.metodoValoracion || "",
        min_stock: inventory.stockMinimo || "",
        max_stock: inventory.stockMaximo || "",
        default_supplier: parseInt(buyData.proveedor) || "",
      };
      formData.append("info", JSON.stringify(info));
      if (inputsData.imagenPrincipal) {
        formData.append("primary_img", inputsData.imagenPrincipal);
      }
      formData.append("action", "create");
      console.log(formData);
      submit(formData, {
        method: "post",
        action: `/inventory/create`,
      });
    } else {
      const info = {
        type: parseInt(initialValues.productType) || 2,
        code: initialValues.codigoDeArticulo || "",
        name: initialValues.nombreODescripcion || "",
        cost_center_id: parseInt(initialValues.centroDeCostos) || "",
        preferred_warehouse_id: parseInt(initialValues.almacen) || "",
        price: initialValues.precio || "",
        category_id: parseInt(initialValues.categoria) || "",
        barcode: initialValues.codigoDeBarras || "",
        measure: initialValues.unidadesDeMedida || "",
        raw_material: convertToBoolean(initialValues.inventario) || 0,
        buys: convertToBoolean(initialValues.compra) || 0,
        sale: convertToBoolean(initialValues.venta) || 0,
        subject_to_tax: convertToBoolean(inputsData.sujetoAImpuesto) || 0,
        available_for_return:
          convertToBoolean(inputsData.disponibleParaDevolucion) || 0,
        manufacturing_available:
          convertToBoolean(inputsData.manufacturaDisponible) || 0,
        manufacturer: inputsData.fabricantes || "",
        active: convertToBoolean(inputsData.activos) || 0,
        from_active: inputsData.from || "",
        to_active: inputsData.to || "",
        valuation_method: inventory.metodoValoracion || "",
        min_stock: inventory.stockMinimo || "",
        max_stock: inventory.stockMaximo || "",
        default_supplier: parseInt(buyData.proveedor) || "",
      };
      info.variables = variableData.selectedGroups;
      variableData.images.forEach((image) => {
        formData.append("second_images[]", image.file);
      });
    }
  }

  return (
    <div className="flex h-full w-full">
      <div className="ml-4 flex h-full w-full flex-col gap-4 rounded-lg bg-gris px-8 py-4">
        <NavigationHeader />

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-base font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="mb-4 font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Artículo
          </p>
        </div>

        <div className="flex h-full flex-1 flex-col overflow-auto rounded-xl bg-white">
          <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
            <span className="font-poppins text-lg font-medium text-[#44444F]">
              INFORMACIÓN DEL ARTÍCULO
            </span>
            <div className="flex items-center gap-x-4">
              <span className="font-roboto text-xs font-normal text-[#44444F]">
                Tipo de producto
              </span>

              <div className="flex gap-x-1 rounded-md bg-[#F2F2F2] p-1">
                <Button
                  type="button"
                  className={`h-[22px] text-xs font-normal duration-300 ease-out hover:bg-white ${initialValues.productType == "1" ? "bg-white text-[#44444F]" : "bg-inherit text-[#8F8F8F]"}`}
                  onClick={() => handleSelectChange("productType", "1")}
                >
                  Simple
                </Button>
                <Button
                  type="button"
                  className={`h-[22px] text-xs font-normal duration-300 ease-out hover:bg-white ${initialValues.productType == "2" ? "bg-white text-[#44444F]" : "bg-inherit text-[#8F8F8F]"}`}
                  onClick={() => handleSelectChange("productType", "2")}
                >
                  Variable
                </Button>
              </div>
            </div>
          </div>

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
            categories={categories}
            warehouses={warehouses}
            principalInputs={initialValues}
            setPrincipalInputs={setInitialValues}
          />

          <div className="flex w-full items-end px-6 py-4">
            <div className="flex w-full items-center justify-between">
              <label className="pl-[370px] text-xs font-light text-[#8F8F8F]">
                Actualizado 07 septiembre 2024
              </label>
              <Button
                className="h-[31px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
                disabled={navigation.state === "submitting"}
                onClick={() => handleSubmitForm()}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Guardar"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;

export async function Action({ request }) {
  const formData = await request.formData();
  const action = formData.get("action");

  switch (action) {
    case "create":
      const res = await saveNewProduct(formData);
      return redirect(`/inventory/edit/${res.data}`);

    default:
      return redirect(`/inventory`);
  }
}
