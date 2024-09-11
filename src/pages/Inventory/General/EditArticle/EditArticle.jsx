import React, { useState, useEffect,useCallback} from "react";
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
import {
  useLoaderData,
  useParams,
  useLocation,
  useSubmit,
} from "react-router-dom";
import { createPusherClient } from "@/lib/pusher";
import { editProduct, getProductById } from "../utils";

const EditArticle = () => {
  const { id } = useParams();
  const location = useLocation();
  const data = useLoaderData();
  const { products, categories, warehouses, suppliers, attributes } = data;

  const [productId, setProductId] = useState(id);
  const [product, setProduct] = useState(products.data);
  const submit = useSubmit();

  //WEBSOCKET
  const pusherClient = createPusherClient();

  async function getProductFunction(id) {
    const newData = await getProductById(id);
    setProduct(newData.data);
  }

  useEffect(() => {
    setProductId(id);
    let channel = pusherClient.subscribe(`private-get-products.${productId}`);

    channel.bind("fill-products", ({ warehouse }) => {
      getProductFunction(warehouse);
    });

    return () => {
      pusherClient.unsubscribe(`private-get-products.${productId}`);
    };
  }, [location, productId]);

  const [errors, setErrors] = useState({});
  const [initialValues, setInitialValues] = useState({
    productType: product?.images.length > 0 ? "2" : "1",
    codigoDeArticulo: product?.code || "",
    nombreODescripcion: product?.name || "",
    centroDeCostos: product?.cost_center?.value.toString() || "",
    listaDePrecios: "",
    precio: product?.price || "",
    almacen: product?.preferred_warrehouse?.id?.toString() || "",
    unidadesDeMedida: product?.measure || "",
    categoria: product?.category_id?.id || "",
    codigoDeBarras: product?.barcode || "",
    inventario:
      product?.raw_materials?.toString() === "1" ? true : false || false,
    compra: product?.buys?.toString() === "1" ? true : false || false,
    venta: product?.sale?.toString() === "1" ? true : false || false,
  });

  const [inputsData, setInputsData] = useState({
    sujetoAImpuesto:
      product?.subject_to_tax?.toString() === "1" ? true : false || false,
    disponibleParaDevolucion:
      product?.available_for_return?.toString() === "1" ? true : false || false,
    manufacturaDisponible:
      product?.manufacturing_avalaible?.toString() === "1"
        ? true
        : false || false,
    fabricantes: product?.manufacturer || "",
    comentario: "",
    activos: product?.active?.toString() === "1" ? true : false || false,
    from: product?.from_active || "",
    to: product?.to_active || "",
    imagenPrincipal: product?.principal_image || null,
  });
  const [inventory, setInventory] = useState({
    metodoValoracion: product?.valuation_method || "",
    costo: "",
    stockMinimo: product?.min_stock || "",
    stockMaximo: product?.max_stock || "",
  });

  const [variableData, setVariableData] = useState({
    selectedGroups: product?.slots || [],
    images:
      product?.images?.map((img) => ({
        id: img.id,
        image: img.image,
        preview: img.image,
      })) || [],
    images_destroy: [],
  });

  const [buyData, setBuyData] = useState({
    proveedor: product?.default_supplier || "",
  });

  const handleSelectChange = (name, value) => {
    setInitialValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const selectClasses =
    "w-50 px-4 rounded-xl border border-[#44444F] bg-[#F2F2F2] text-[14px] font-roboto text-[#8F8F8F] placeholder:text-[#44444F] focus:ring-2 focus:ring-primarioBotones focus:border-transparent";
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
      info.images_destroy = variableData.images_destroy;
      info.variables = variableData.selectedGroups;
      variableData.images.forEach((image) => {
        formData.append("second_images", image.file);
      });
    }

    formData.append("info", JSON.stringify(info));
    console.log(info)
    if (inputsData.imagenPrincipal) {
      formData.append("primary_img", inputsData.imagenPrincipal);
    }
    submit(formData, { action: `/inventory/edit/${id}`, method: "POST" });
  };
  console.log(product);
  console.log(variableData.images_destroy);
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
            Editor de Artículo
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
        
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded bg-blue-500 px-4 py-2 text-white"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditArticle;

export async function Action({ request }) {
  const formData = await request.formData();
 const response = await editProduct(formData)
  return "0";
}
