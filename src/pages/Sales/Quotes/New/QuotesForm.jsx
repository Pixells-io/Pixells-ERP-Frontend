import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import QuoteTable from "../Table/QuoteTable";
import { Checkbox } from "@/components/ui/checkbox";
import Total from "../TotalSection/TotalSection";
import { saveNewQuoteSale } from "../utils";
import SelectsQuote from "../SelectGroup/SelectGroup";
import { WrappedMain } from "@/layouts/Masters/WrappedMain/WrappedMain";
import NavigationHeader from "@/components/navigation-header";

const OrderForm = () => {
  const navigation = useNavigation();

  const { infoCreateSales, products } = useLoaderData();

  const [items, setItems] = useState([]);
  const [isEditable, setisEditable] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [productOrService, setProductOrService] = useState("service");
  const [discountGeneral, setDiscountGeneral] = useState(0);
  const [isShipping, setIsShipping] = useState(false);
  const [deliveryDateGlobal, setDeliveryDateGlobal] = useState("");

  return (
   <WrappedMain>
        {/* navigation inside */}
      <NavigationHeader/>
        {/* top content */}
        <div className="flex items-center gap-16">
        <h2 className="font-poppins font-bold text-[#44444F]">VENTAS</h2>
        <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
          <div className="text-xs">&bull; 4 objective </div>
          <div className="text-xs">&bull; 25 SFC </div>
          <div className="text-xs">&bull; 43 Activities</div>
        </div>
      </div>


        <div className="flex items-center justify-between">
          <p className="font-poppins text-[20px] font-bold text-[#44444F]">
            Nueva Cotización
          </p>
        </div>
        {/* content */}
        <Form
          method="post"
          className="flex flex-col space-y-4 overflow-auto rounded-xl bg-white p-4 pr-12"
          action={`/sales/quotes/new`}
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
                discountGeneral={discountGeneral}
                setDiscountGeneral={setDiscountGeneral}
                deliveryDateGlobal={deliveryDateGlobal}
                setDeliveryDateGlobal={setDeliveryDateGlobal}
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
              <div className="col-span-2 flex items-center justify-center gap-x-2 pt-2">
                <Checkbox
                  className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
                  checked={isShipping}
                  onCheckedChange={(e) => {
                    setIsShipping(e);
                  }}
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
                  products_map={products?.data?.map}
                  products_info={products?.data?.info}
                  discountGeneral={discountGeneral}
                  deliveryDateGlobal={deliveryDateGlobal}
                />
              </div>
              <Total
                tableData={tableData}
                comment={""}
                isShipping={isShipping}
              />
            </div>
          </div>

          <div>
            <StatusInformation
              status={"inProgress"}
              imgUser={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            >
              <Button
                className={`rounded-lg bg-primarioBotones px-10 text-xs hover:bg-primarioBotones`}
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Save"}
              </Button>
            </StatusInformation>
          </div>
        </Form>
     </WrappedMain>
  );
};

export default OrderForm;

export async function Action({ request }) {
  const formData = await request.formData();
  await saveNewQuoteSale(formData);

  return redirect("/sales/quotes");
}
