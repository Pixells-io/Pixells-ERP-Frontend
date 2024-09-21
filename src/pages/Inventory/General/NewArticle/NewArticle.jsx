import React, { useState, useEffect, useCallback } from "react";
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
import { Form, useNavigate, useLoaderData } from "react-router-dom";
import { saveNewProduct } from "../utils";
import { Button } from "@/components/ui/button";

const CreateArticle = () => {
  const navigate = useNavigate();
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

  const selectClasses =
    "w-50 px-4 rounded-xl border border-[#44444F] bg-[#F2F2F2] text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  const [errors, setErrors] = useState({});
  const [errorTimer, setErrorTimer] = useState(null);
  const clearErrors = useCallback(() => {
    setErrors({});
    setErrorTimer(null);
  }, []);
  useEffect(() => {
    if (Object.keys(errors).length > 0 && !errorTimer) {
      const timer = setTimeout(clearErrors, 5000);
      setErrorTimer(timer);
    }
    return () => {
      if (errorTimer) {
        clearTimeout(errorTimer);
      }
    };
  }, [errors, errorTimer, clearErrors]);
  const validateForm = () => {
    let newErrors = {};

    // Validar campos requeridos
    if (!initialValues.codigoDeArticulo.trim())
      newErrors.codigoDeArticulo = "El código de artículo es requerido";
    if (!initialValues.nombreODescripcion.trim())
      newErrors.nombreODescripcion = "El nombre o descripción es requerido";
    if (!initialValues.precio.trim())
      newErrors.precio = "El precio es requerido";
    if (!initialValues.almacen) newErrors.almacen = "El almacén es requerido";
    if (!initialValues.categoria)
      newErrors.categoria = "La categoría es requerida";

    // Validar que el precio sea un número válido
    if (isNaN(parseFloat(initialValues.precio)))
      newErrors.precio = "El precio debe ser un número válido";

    // Validar que el código de barras solo contenga números (si está presente)
    if (
      initialValues.codigoDeBarras &&
      !/^\d+$/.test(initialValues.codigoDeBarras)
    ) {
      newErrors.codigoDeBarras =
        "El código de barras solo debe contener números";
    }

    // Validar fechas (si están presentes)
    if (inputsData.from && inputsData.to) {
      const fromDate = new Date(inputsData.from);
      const toDate = new Date(inputsData.to);
      if (fromDate > toDate) {
        newErrors.dateRange =
          "La fecha 'desde' no puede ser posterior a la fecha 'hasta'";
      }
    }

    // Validar imagen principal
    if (!inputsData.imagenPrincipal) {
      newErrors.image = "La imagen principal es requerida";
    }

    //Validamos variables
    if (
      initialValues.productType === "2" &&
      variableData.variables_add.length === 0
    ) {
      newErrors.valoracion = "Se necesita agregar variables al producto";
    }

    // Validar método de valoración
    if (!inventory.metodoValoracion) {
      newErrors.valoracion = "El método de valoración es requerido";
    }

    // Validar stock mínimo y máximo
    if (!inventory.stockMinimo.trim() || !inventory.stockMaximo.trim()) {
      newErrors.stockMin = "Los valores de Stock son requeridos";
    } else {
      const minStock = parseInt(inventory.stockMinimo);
      const maxStock = parseInt(inventory.stockMaximo);
      if (isNaN(minStock) || isNaN(maxStock)) {
        newErrors.stockMin = "Los valores de Stock deben ser números válidos";
      } else if (minStock >= maxStock) {
        newErrors.stock = "El Stock Mínimo debe ser menor que el Stock Máximo";
      }
    }

    // Validar unidades de medida
    if (!initialValues.unidadesDeMedida.trim()) {
      newErrors.unidadesDeMedida = "La unidad de medida es requerida";
    }

    // Validar centro de costos
    if (!initialValues.centroDeCostos.trim()) {
      newErrors.centroDeCostos = "El centro de costos es requerido";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      if (errorTimer) {
        clearTimeout(errorTimer);
      }
      const timer = setTimeout(clearErrors, 5000);
      setErrorTimer(timer);
    }

    return Object.keys(newErrors).length === 0;
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

        <div className="rounded-xl bg-white overflow-auto">
          <div className="flex items-center border-b border-[#E8E8E8] px-6 py-3 gap-x-10">
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
          {Object.keys(errors).length > 0 && (
            <div className="mt-4 text-red-500">
              {Object.values(errors).map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
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
    </div>
  );
};

export default CreateArticle;
