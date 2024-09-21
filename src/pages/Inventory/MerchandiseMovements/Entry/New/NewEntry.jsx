import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
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
import AlertMessage from "./Modal/AlertMessage";
import AlertConfirmation from "./Modal/AlertConfirmation";
import AlertDoNotComply from "./Modal/AlertDoNotComply";
import ModalQrCode from "./Modal/ModalQrCode";
import InputForm from "@/components/InputForm/InputForm";
import { Label } from "@/components/ui/label";
import { getCatalogById } from "../../utils";
function NewEntry() {
  const data = useLoaderData();

  //CATALOGS
  const { catalogs, products, locations } = data;
  const [selectedCatalog, setSelectedCatalog] = useState(null);

  const [commodity, setCommodity] = useState([]);
  const [modalQuantityOverCome, setModalQuantityOverCome] = useState(false);
  const [modalAlertConfirmation, setModalAlertConfirmation] = useState(false);
  const [modalDoNotComply, setModalDoNotComply] = useState(false);
  const [modalQr, setModalQr] = useState(false);

  const handleSelectChange = (value) => {
    const selected = catalogs.data.find((item) => item.id.toString() === value);
    setSelectedCatalog(selected);
  };
  useEffect(() => {
    async function fetchCatalog() {
      try {
        if (selectedCatalog) {
          const catalogData = await getCatalogById(selectedCatalog);
          console.log(catalogData)
          if (Array.isArray(catalogData.slots)) {
            const formattedData = catalogData.slots.map((item,index) => ({
              idAux:index,
              articleNumber:  "",
              description: item?.master_product || "",
              expectedQuantity: item?.quantity || 0,
              receivedQuantity: "",
              unitPrice: 0,
              total: 0,
              ubication: null,
            }));
            setCommodity(formattedData);
          } else {
            return;
          }
        }
      } catch (error) {
        console.error("Error fetching catalog:", error);
      }
    }

    fetchCatalog();
  }, [selectedCatalog]);
  console.log(commodity);
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
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">tickets </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              INVENTARIO
            </h2>
          </div>
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

            <div className="flex items-end justify-center">
              <Link to={"/inventory/merchandise-movements"}>
                <IonIcon
                  icon={closeCircle}
                  size="small"
                  className="cursor-pointer text-grisDisabled"
                ></IonIcon>
              </Link>
            </div>
          </div>
        </div>
        {/*CONTENT */}
        <div className="rounded-xl bg-blancoBg p-6">
          <div className="flex w-full flex-wrap gap-4 rounded-xl border p-4">
            <div>
              <Label className="font-roboto text-[14px] text-[#696974]">
                Código de Articulo
              </Label>
              <InputForm
                className="border-gris2-transparent w-[243px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
                name="documentNumber"
                type="number"
              />
            </div>
            <div>
              <Label className="font-roboto text-[14px] text-[#696974]">
                Lista de Precios
              </Label>
              <Select name="priceList">
                <SelectTrigger className="border-gris2-transparent h-[32px] w-[243px] rounded-xl border font-roboto text-[14px] text-gris2 placeholder:font-roboto placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label className="font-roboto text-[14px] text-[#696974]">
                Número de pedido
              </Label>
              <Select
                name="requestNumber"
                value={selectedCatalog ? selectedCatalog.id.toString() : ""}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="border-gris2-transparent h-[32px] w-[243px] rounded-xl border font-roboto text-[14px] text-gris2 placeholder:font-roboto placeholder:text-[#8F8F8F] focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
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
              <div className="ml-[160px] flex justify-center">
                <button
                  type="button"
                  className="h-16 w-16 rounded-md bg-[#E0E0E0] pt-2"
                  onClick={() => setModalQr(true)}
                >
                  <IonIcon
                    icon={qrCodeOutline}
                    size={"large"}
                    className="text-[#44444F]"
                  ></IonIcon>
                </button>
              </div>
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
              className={`rounded-lg bg-[#E0E0E0] px-10 text-xs text-[#44444F] hover:bg-[#E0E0E0]`}
            >
              Crear
            </Button>
          </StatusInformation>
        </div>
      </div>
      <AlertMessage
        setModal={setModalQuantityOverCome}
        modal={modalQuantityOverCome}
      />
      <AlertConfirmation
        setModal={setModalAlertConfirmation}
        modal={modalAlertConfirmation}
      />
      <AlertDoNotComply
        setModal={setModalDoNotComply}
        modal={modalDoNotComply}
      />
    </div>
  );
}

export default NewEntry;
