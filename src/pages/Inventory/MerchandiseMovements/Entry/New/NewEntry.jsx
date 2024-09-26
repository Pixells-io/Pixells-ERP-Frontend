import React, { useState, useEffect } from "react";
import { Link, useLoaderData, Form } from "react-router-dom";
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
  const { warehouses, categories, catalogs, products, locations } = data;
  const [selectedCatalog, setSelectedCatalog] = useState(null);

  const [initialData, setInitialData] = useState({
    category: "1",
    requestNumber: "",
    movement_type: "1",
    urgency: "",
    receive_date: "",
    fromWarehouse: "",
    toWarehouse: "",
  });

  const [commodity, setCommodity] = useState([
    {
      idAux: 1,
      type: "",
      articleNumber: "",
      variation: "",
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

  useEffect(() => {
    async function fetchCatalog() {
      if (selectedCatalog) {
        const catalogData = await getCatalogById(selectedCatalog);
        if (Array.isArray(catalogData.data.slots)) {
          const formattedData = catalogData.data.slots.map((item, index) => {
            let product = products.data.find(
              (p) => p.id === parseInt(item.master_product),
            );
            let unitPrice = product ? parseFloat(product.price) : 0;
            return {
              type: item.type,
              idAux: index,
              articleNumber: item.master_product || "",
              variation: item.variations || "",
              variation_id: item.id || "",
              description: item.master_product.toString() || "",
              rel_id: item.id,
              eQuantity: item.quantity || 0,
              receivedQuantity: "",
              unitPrice: unitPrice,
              total: 0,
              batches: item.batches || [],
              ubication: null,
            };
          });
          setCommodity(formattedData);
        }
      }
    }

    fetchCatalog();
  }, [selectedCatalog]);
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <ModalQrCode setModal={setModalQr} modal={modalQr} />

        {/* Navigation inside */}
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

        {/* Top content */}
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

        <div className="md:h-90 flex h-full w-full flex-col space-y-8 rounded-xl bg-blancoBg p-6">
          <div className="h-full w-full overflow-auto">
            <div className="flex flex-wrap gap-4 border p-4">
              <div className="flex-1">
                <Label className="font-roboto text-[14px] text-[#696974]">
                  Categoría
                </Label>
                <Select
                  name="category"
                  value={initialData.category}
                  onValueChange={(value) =>
                    handleSelectChange("category", value)
                  }
                >
                  <SelectTrigger className="border-gris2-transparent h-[32px] w-full rounded-xl">
                    <SelectValue placeholder="Seleccionar categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Almacén</SelectItem>
                    <SelectItem value="2">Transferencia</SelectItem>
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
                  <SelectTrigger className="border-gris2-transparent h-[32px] w-full rounded-xl">
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

              {initialData.category !== "1" && (
                <>
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
                      <SelectTrigger className="border-gris2-transparent h-[32px] w-full rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.isArray(warehouses.data) &&
                          warehouses.data.map((item) => (
                            <SelectItem
                              key={item.id}
                              value={item.id.toString()}
                            >
                              {item.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
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
                  <SelectTrigger className="border-gris2-transparent h-[32px] w-full rounded-xl bg-[#E0E0E0]">
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
              {initialData.category !== "1" && (
                <>
                  <div className="flex-1">
                    <Label className="font-roboto text-[14px] text-[#696974]">
                      Urgencia
                    </Label>
                    <Select
                      name="urgency"
                      value={initialData.urgency}
                      onValueChange={(value) =>
                        handleSelectChange("urgency", value)
                      }
                    >
                      <SelectTrigger className="border-gris2-transparent h-[32px] w-full rounded-xl">
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
                      className="border-gris2-transparent w-full rounded-xl"
                      name="receive_date"
                      value={initialData.receive_date}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              )}
              {initialData.category !== "2" && (
                <>
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
                </>
              )}
            </div>

            <div className="h-[100px] pt-4">
              <TableForm
                products={products.data}
                locations={locations.data}
                tableData={commodity}
                setTableData={setCommodity}
                isEditable={true}
              />
            </div>
          </div>
          <div className={"w-full lg:mt-40"}>
            <StatusInformation
              status="inProgress"
              comments={comments}
              setComments={setComments}
              imgUser={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            >
              <Form
                action="/inventory/merchandise-movements/entry/new"
                method="POST"
              >
                <input
                  type="hidden"
                  name="category"
                  value={initialData.category}
                />
                <input
                  type="hidden"
                  name="rel_id"
                  value={initialData.requestNumber}
                />
                <input
                  type="hidden"
                  name="movement_type"
                  value={initialData.movement_type}
                />
                <input
                  type="hidden"
                  name="inventory_in"
                  value={initialData.fromWarehouse}
                />
                <input
                  type="hidden"
                  name="inventory_out"
                  value={initialData.toWarehouse}
                />
                <input type="hidden" name="comment" value={comments} />
                <input
                  type="hidden"
                  name="urgency"
                  value={initialData.urgency}
                />
                <input
                  type="hidden"
                  name="receive_date"
                  value={initialData.receive_date}
                />
                <input
                  type="hidden"
                  name="products"
                  value={JSON.stringify(
                    commodity.map((item) => ({
                      type: parseInt(item.type) || 0,
                      product_master_id: parseInt(item.articleNumber) || 0,
                      variation: parseInt(item.variation_id) || 0,
                      variation_id: null,
                      inventory_in: parseInt(item.ubication_id) || null,
                      rel_id: selectedCatalog?.id || 0,
                      expected_quantity: parseInt(item.eQuantity) || 0,
                      batches: item.batches || [],
                    })),
                  )}
                />
                <div className="justify-between gap-3 lg:flex">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-[120px] rounded-lg border-2 border-[#E0E0E0] text-xs text-[#8F8F8F] hover:text-primarioBotones"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className={`rounded-lg bg-[#E0E0E0] px-10 text-xs text-[#44444F] hover:bg-[#E0E0E0]`}
                  >
                    Crear
                  </Button>
                </div>
              </Form>
            </StatusInformation>
          </div>
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
