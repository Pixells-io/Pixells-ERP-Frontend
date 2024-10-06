import React, { useEffect, useState } from "react";
import SelectsQuote from "../../Components/SelectGroup";
import Total from "@/components/TotalSection/TotalSection";
import { Button } from "@/components/ui/button";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import QuoteTable from "../Table/QuoteTable";
import { getProductsByWharehouse, saveNewTicketSale } from "../utils";
import { Checkbox } from "@/components/ui/checkbox";

const TicketForm = () => {
  const navigation = useNavigation();

  const { infoCreateSales } = useLoaderData();

  const [items, setItems] = useState([]);
  const [isEditable, setisEditable] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [productOrService, setProductOrService] = useState("service");
  const [wharehouseSelect, setWharehouseSelect] = useState(null);
  const [productsListMap, setProductsListMap] = useState([]);
  const [productsListInfo, setProductsListInfo] = useState([]);

  const getProducts = async () => {
    const auxProducts = await getProductsByWharehouse(wharehouseSelect);
    setProductsListMap([...auxProducts?.data?.map]);
    setProductsListInfo([...auxProducts?.data?.info]);
  };

  useEffect(() => {
    if (wharehouseSelect != null) {
      getProducts();
    }
  }, [wharehouseSelect]);

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">
            <div>Invoice - General</div>
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            Ventas
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Nueva Venta Ticket/Remisión
          </p>
        </div>
        {/* content */}
        <Form
          method="post"
          className="flex flex-col space-y-4 overflow-auto rounded-xl bg-white p-4 pr-12"
          action={`/sales/tickets/new`}
        >
          <div className="overflow-auto">
            <div className="rounded-xl border border-blancoBox p-4">
              <SelectsQuote
                isEditable={isEditable}
                clientsList={infoCreateSales?.data?.clients}
                listPriceList={infoCreateSales?.data?.price_list}
                costCenterList={infoCreateSales?.data?.cost_center}
                sellersList={infoCreateSales?.data?.sellers}
                defaultSeller={infoCreateSales?.data?.default_seller}
              />
            </div>

            <div className="my-6 grid w-full grid-cols-12 gap-2 px-9">
              <div className="col-span-2">
                <SelectRouter
                  value={
                    [
                      { value: "product", label: "Productos" },
                      { value: "service", label: "Servicios" },
                    ].find((ps) => ps.value == productOrService) || null
                  }
                  name={"productService"}
                  options={[
                    { value: "product", label: "Productos" },
                    { value: "service", label: "Servicios" },
                  ]}
                  placeholder="Producto o Servicio"
                  required={true}
                  disabled={!isEditable}
                  onChange={(e) => setProductOrService(e?.value)}
                />
              </div>
              {productOrService == "product" && (
                <div className="col-span-2">
                  <SelectRouter
                    value={
                      infoCreateSales?.data?.wharehouses.find(
                        (wharehouse) => wharehouse.value == wharehouseSelect,
                      ) || null
                    }
                    name={"wharehouse"}
                    options={infoCreateSales?.data?.wharehouses}
                    placeholder="Almacén"
                    required={true}
                    disabled={!isEditable}
                    onChange={(e) => setWharehouseSelect(e?.value)}
                  />
                </div>
              )}
              <div className="col-span-2 flex items-center gap-x-2 justify-center pt-2">
                <Checkbox
                  className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
                  name="shipping"
                  checked={infoCreateSales?.data?.shipping}
                />
                <label className="text-[11px] font-light text-grisHeading">
                  Envio
                </label>
              </div>
            </div>

            <div>
              <div className="mt-6">
                <QuoteTable
                  initialItems={items}
                  isEditable={isEditable}
                  allProducts={allProducts}
                  setTableData={setTableData}
                  tableData={tableData}
                  productOrService={productOrService}
                  services_map={infoCreateSales?.data?.services_map}
                  services_data={infoCreateSales?.data?.services_data}
                  products_map={productsListMap}
                  products_info={productsListInfo}
                  wharehouseSelect={wharehouseSelect}
                />
              </div>
              <Total tableData={tableData} comment={""} />
            </div>
          </div>

          <div>
            <StatusInformation
              status={"inProgress"}
              imgUser={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            >
              {/* <Button
                type="button"
                variant="outline"
                className="w-[120px] rounded-lg border-2 border-primarioBotones text-xs text-primarioBotones hover:text-primarioBotones"
              >
                Save
              </Button> */}
              <Button
                className={`rounded-lg bg-primarioBotones px-10 text-xs hover:bg-primarioBotones`}
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Save"}
              </Button>
            </StatusInformation>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TicketForm;

export async function Action({ request }) {
  const formData = await request.formData();
  await saveNewTicketSale(formData);

  return redirect("/sales/tickets");
}
