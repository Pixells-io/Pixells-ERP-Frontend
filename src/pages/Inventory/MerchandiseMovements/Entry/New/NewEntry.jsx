import React, { useState, useEffect } from "react";
import { Link, useLoaderData,useSubmit, redirect } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  closeCircle,
  qrCodeOutline,
} from "ionicons/icons";

import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TableForm from "./Table/TableForm";
import ModalQrCode from "./Modal/ModalQrCode";
import InputForm from "@/components/InputForm/InputForm";
import { Label } from "@/components/ui/label";
import { getCatalogById, saveStockMovement } from "../../utils";

function NewEntry() {
  const data = useLoaderData();
  const submit = useSubmit();
  const { warehouses, categories, catalogs, products, locations } = data;
  const [selectedCatalog, setSelectedCatalog] = useState(null);

  const [initialData, setInitialData] = useState({
    category: "",
    requestNumber: "",
    movement_type: 1,
    urgency: "",
    receive_date: "",
    fromWarehouse: "",
    toWarehouse: "",
  });

  const [commodity, setCommodity] = useState([
    {
      idAux: 1,
      type:"",
      articleNumber: "",
      variation:"",
      description: "",
      eQuantity: "",
      receivedQuantity: "",
      unitPrice: "",
      total: "",
      batches: [],
      ubication: null,
    },
  ]);
  const [modalQr, setModalQr] = useState(false);

  const [comments, setComments] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInitialData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setInitialData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "requestNumber") {
      const selected = catalogs.data.find(
        (item) => item.id.toString() === value,
      );
      setSelectedCatalog(selected);
    }
  };

  //Fetch to Order
  useEffect(() => {
    async function fetchCatalog() {

      try {

        if (selectedCatalog) {
          const catalogData = await getCatalogById(selectedCatalog);

          if (Array.isArray(catalogData.data.slots)) {
            const formattedData = catalogData.data.slots.map((item, index) => {
              let product = products.data.find(
                (p) => p.product_master_id === parseInt(item.master_product),
              );
              let unitPrice = product ? parseFloat(product.price) : 0;
              return {
                type:item.type,
                idAux: index,
                articleNumber: item.master_product || "",
                variation: item.variations||"",
                description: item.master_product.toString() || "",
                eQuantity: item.quantity || 0,
                receivedQuantity:  "",
                unitPrice: unitPrice,
                total: 0,
                batches: item.batches || [],
                ubication: null,
              };
            });
            setCommodity(formattedData);
          }
        }
      } catch (error) {
        console.error("Error fetching catalog:", error);
      }
    }

    fetchCatalog();
  }, [selectedCatalog]);

  const handleSubmit = async (event) => {
    const formData = new FormData();
    const info = {
      category: parseInt(initialData.category),
      rel_id: parseInt(initialData.requestNumber),
      movement_type: initialData.movement_type,
      inventory_in: parseInt(initialData.fromWarehouse),
      inventory_out: parseInt(initialData.toWarehouse),
      comment: comments,
      urgency: parseInt(initialData.urgency),
      receive_date: initialData.receive_date,
      products: commodity.map(item => ({
        type: parseInt(item.type),
        product_master_id: parseInt(item.articleNumber),
        variation: parseInt(item.variation),
        inventory_in: parseInt(item.ubication_id),
        rel_id: selectedCatalog.id,
        expected_quantity: parseInt(item.eQuantity),
        batches: item.batches,
      })),
    };
  
   formData.append("info", JSON.stringify(info));
  
    submit(formData, {
      action: `/inventory/merchandise-movements/entry/new`,
      method: "POST",
    });
  };


  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <ModalQrCode setModal={setModalQr} modal={modalQr} />

        {/* navigation inside */}
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
          <div className="font-roboto text-sm text-grisText">tickets </div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-grisHeading">
            INVENTARIO
          </h2>
          <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Nueva Entrada de Mercancía
          </p>

          <div className="flex justify-end gap-5">
            <Button
              type={"button"}
              className="gap-2 rounded-xl bg-primarioBotones font-roboto text-sm text-white hover:bg-primario"
            >
              Convertir a Pedido
            </Button>
            <Link
              to={"/inventory/merchandise-movements"}
              className="flex items-end justify-center"
            >
              <IonIcon
                icon={closeCircle}
                size="small"
                className="cursor-pointer text-grisDisabled"
              />
            </Link>
          </div>
        </div>

        {/* CONTENT */}
        <div className="rounded-xl bg-blancoBg p-6">
          <div className="flex flex-wrap gap-4 border p-4">
            <div className="flex-1">
              <Label className="font-roboto text-[14px] text-[#696974]">
                Categoria
              </Label>
              <Select
                name="category"
                value={initialData.category}
                onValueChange={(value) => handleSelectChange("category", value)}
              >
                <SelectTrigger className="border-gris2-transparent h-[32px] w-full rounded-xl border font-roboto text-[14px] text-gris2 placeholder:font-roboto placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                {Array.isArray(categories.data) &&
                    categories.data.map((item) => (
                      <SelectItem key={item.id} value={item.id.toString()}>
                        {item.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <Label className="font-roboto text-[14px] text-[#696974]">
                Número de pedido
              </Label>
              <Select
                name="requestNumber"
                value={initialData.requestNumber}
                onValueChange={(value) =>
                  handleSelectChange("requestNumber", value)
                }
              >
                <SelectTrigger className="border-gris2-transparent h-[32px] w-full rounded-xl border font-roboto text-[14px] text-gris2 placeholder:font-roboto placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.isArray(catalogs.data) &&
                    catalogs.data.map((item) => (
                      <SelectItem key={item.id} value={item.id.toString()}>
                        {item.number}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <Label className="font-roboto text-[14px] text-[#696974]">
                De Almacén
              </Label>
              <Select
                name="fromWarehouse"
                value={initialData.fromWarehouse}
                onValueChange={(value) =>
                  handleSelectChange("fromWarehouse", value)
                }
              >
                <SelectTrigger className="border-gris2-transparent h-[32px] w-full rounded-xl border font-roboto text-[14px] text-gris2 placeholder:font-roboto placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.isArray(warehouses.data) &&
                    warehouses.data.map((item) => (
                      <SelectItem key={item.id} value={item.id.toString()}>
                        {item.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <Label className="font-roboto text-[14px] text-[#696974]">
                Almacén Destino
              </Label>
              <Select
                name="toWarehouse"
                value={initialData.toWarehouse}
                onValueChange={(value) =>
                  handleSelectChange("toWarehouse", value)
                }
              >
                <SelectTrigger className="border-gris2-transparent h-[32px] w-full rounded-xl border bg-[#D7D7D7] font-roboto text-[14px] text-gris2 placeholder:font-roboto placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.isArray(warehouses.data) &&
                    warehouses.data.map((item) => (
                      <SelectItem key={item.id+1} value={item.id.toString()}>
                        {item.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label className="font-roboto text-[14px] text-[#696974]">
                Urgencia
              </Label>
              <Select
                name="urgency"
                value={initialData.urgency}
                onValueChange={(value) => handleSelectChange("urgency", value)}
              >
                <SelectTrigger className="border-gris2-transparent h-[32px] w-full rounded-xl border font-roboto text-[14px] text-gris2 placeholder:font-roboto placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue placeholder="Seleccionar urgencia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Baja</SelectItem>
                  <SelectItem value="2">Media</SelectItem>
                  <SelectItem value="3">Alta</SelectItem>
                  <SelectItem value="4">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label className="font-roboto text-[14px] text-[#696974]">
                Fecha Esperada
              </Label>
              <InputForm
                type="date"
                className="border-gris2-transparent w-full rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
                name="receive_date"
                value={initialData.receive_date}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-1 items-end justify-center">
              <button
                type="button"
                className="h-16 w-16 rounded-md bg-[#E0E0E0] pt-2"
                onClick={() => setModalQr(true)}
              >
                <IonIcon
                  icon={qrCodeOutline}
                  size={"large"}
                  className="text-[#44444F]"
                />
              </button>
            </div>
          </div>
          <div className="pt-4">
            <TableForm
              products={products.data}
              locations={locations.data}
              tableData={commodity}
              setTableData={setCommodity}
              isEditable={true}
            />
          </div>

          <StatusInformation
            status="inProgress"
            comments={comments}
            setComments={setComments}
            imgUser={
              "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
          >
            <Button
              type="button"
              variant="outline"
              className="w-[120px] rounded-lg border-2 border-[#E0E0E0] text-xs text-[#8F8F8F] hover:text-primarioBotones"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              className={`rounded-lg bg-[#E0E0E0] px-10 text-xs text-[#44444F] hover:bg-[#E0E0E0]`}
            >
              Crear
            </Button>
          </StatusInformation>
        </div>
      </div>
    </div>
  );
}

export default NewEntry;

export async function Action({ request }) {
  const formData = await request.formData();
  const response = await saveStockMovement(formData);
  return "0";
  //return redirect("/inventory");
}

