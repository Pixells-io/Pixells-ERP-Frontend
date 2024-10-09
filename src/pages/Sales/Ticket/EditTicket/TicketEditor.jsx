import React, { useState } from "react";
import SelectsQuote from "../../Components/SelectGroup";
import { Button } from "@/components/ui/button";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Form, Link, useLoaderData } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  closeCircle,
  copy,
  print,
} from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";
import Total from "../TotalSection/TotalSection";
import QuoteTable from "../Table/QuoteTable";

const TicketDetails = () => {
  const { infoCreateSales, ticketSale } = useLoaderData();

  const url = "/sales/tickets/document/" + ticketSale?.data?.id;
  const [items, setItems] = useState([]);
  const [isEditable, setisEditable] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [tableData, setTableData] = useState(ticketSale?.data?.slots);
  // const [productOrService, setProductOrService] = useState("service");
  // const [wharehouseSelect, setWharehouseSelect] = useState(null);
  // const [wharehouseName, setWharehouseName] = useState("");
  // const [productsListMap, setProductsListMap] = useState([]);
  // const [productsListInfo, setProductsListInfo] = useState([]);
  const [discountGeneral, setDiscountGeneral] = useState(ticketSale?.data?.discount);
  const [isShipping, setIsShipping] = useState(!ticketSale?.data?.shipping == "0.00");
  const [expirationDate, setExpirationDate] = useState(
    ticketSale?.data?.expiration_date,
  );

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
            TICKETS/REMSION
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Consultando Ticket/Remisión: sin agregar aun
          </p>
          <div className="flex flex-row">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0 active:bg-primarioBotones active:bg-opacity-20"
            >
              <IonIcon
                icon={copy}
                size="small"
                className="cursor-pointer text-[#696974]"
              />
            </Button>
            <Link to={url}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0 active:bg-primarioBotones active:bg-opacity-20"
              >
                <IonIcon
                  icon={print}
                  size="small"
                  className="cursor-pointer text-[#696974]"
                />
              </Button>
            </Link>
            <Link to="/sales/tickets">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
              >
                <IonIcon
                  icon={closeCircle}
                  size="small"
                  className="cursor-pointer text-grisDisabled"
                />
              </Button>
            </Link>
          </div>
        </div>

        {/* content */}
        <Form className="flex flex-col space-y-4 overflow-auto rounded-xl bg-white p-4 pr-12">
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
                expirationDate={expirationDate}
                setExpirationDate={setExpirationDate}
              />
            </div>

            <div className="my-6 grid w-full grid-cols-12 gap-2 px-9">
              <div className="col-span-2 flex items-center justify-center gap-x-2 pt-2">
                <Checkbox
                  className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
                  checked={isShipping}
                  onCheckedChange={(e) => {
                    setIsShipping(e);
                  }}
                  disabled={true}
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
                  // productOrService={productOrService}
                  // services_map={infoCreateSales?.data?.services_map}
                  // services_data={infoCreateSales?.data?.services_data}
                  // products_map={productsListMap}
                  // products_info={productsListInfo}
                  // wharehouseSelect={wharehouseSelect}
                  // discountGeneral={discountGeneral}
                  // wharehouseName={wharehouseName}
                  // expirationDate={expirationDate}
                />
              </div>
              <Total
                tableData={tableData}
                comment={ticketSale?.data?.comment}
                isShipping={isShipping}
                shipping={ticketSale?.data?.shipping}
              />
            </div>
          </div>

          <div className="flex">
            <StatusInformation
              status={"inProgress"}
              imgUser={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            ></StatusInformation>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TicketDetails;
