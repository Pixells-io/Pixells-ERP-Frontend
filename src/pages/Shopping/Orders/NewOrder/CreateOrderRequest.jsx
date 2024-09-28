import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import CardCarousel from "./Components/CardCarousel";
import { getProducts, saveNewPurchase, saveNewQuoteOrder } from "../../utils";
import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import InputsGroup from "./Components/ElementGroup";
import OrderTable from "./Components/OrderFom";
import QuoteTable from "@/components/table/Quote/QuoteTable";
import Total from "@/components/TotalSection/TotalSection";
import StatusInformation from "@/components/StatusInformation/status-information";
import { Button } from "@/components/ui/button";
const CreateRequest = () => {
  const { data } = useLoaderData();
  const [documentNumber, setDocumentNumber] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState(undefined);
  const [selectedCostCenter, setSelectedCostCenter] = useState(undefined);
  const [selectedProveedor, setSelectedProveedor] = useState(undefined);
  const [allProducts, setAllProducts] = useState(data?.products);
  const [tableData, setTableData] = useState([]);
  const navigation = useNavigation();

  const getTitle = "Nueva orden de compra";

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <Header title={getTitle} />
        <div className="flex justify-end">
          {/* 
          <CardCarousel />
          */}
        </div>
        <Form
          method="post"
          className="flex flex-col space-y-4 overflow-auto rounded-xl bg-white p-4 pr-12"
          action={`/shopping/purchase/create`}
        >
          <div className="overflow-auto">
            <div className="rounded-xl border border-blancoBox p-4">
              <InputsGroup
                documentNumber={documentNumber}
                setDocumentNumber={setDocumentNumber}
                selectedWarehouse={selectedWarehouse}
                setSelectedWarehouse={setSelectedWarehouse}
                selectedCostCenter={selectedCostCenter}
                setSelectedCostCenter={setSelectedCostCenter}
                isEditable={true}
                infoSelects={data}
              />
              <OrderTable
                selectedProveedor={selectedProveedor}
                setSelectedProveedor={setSelectedProveedor}
                isEditable={true}
                suppliers={data.suppliers}
              />
            </div>

            <div>
              <div className="mt-6">
                <QuoteTable
                  isEditable={true}
                  allProducts={data}
                  setTableData={setTableData}
                  tableData={tableData}
                />
              </div>
              <Total tableData={tableData} />
            </div>
          </div>

          <div className="flex justify-end">
            <StatusInformation
              status={"inProgress"}
              imgUser={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
            >
              <Button
                type="button"
                variant="outline"
                className="w-[120px] rounded-lg border-2 border-primarioBotones text-xs text-primarioBotones hover:text-primarioBotones"
              >
                Save
              </Button>
              <Button
                type="submit"
                className={`rounded-lg bg-primarioBotones px-10 text-xs hover:bg-primarioBotones`}
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Save for Aproval"}{" "}
              </Button>
            </StatusInformation>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateRequest;

export async function Action({ request }) {
  const formData = await request.formData();
  const response = await saveNewPurchase(formData);

  return redirect("/shopping/purchase");
}
