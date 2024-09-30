import React, { useState } from "react";
import NavigationHeader from "@/components/navigation-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataTable from "../Table/Datatable";
import { StockWarehouseColumns } from "../Table/StockWarehouseColumns";
import { MaterialColumns } from "../Table/MaterialRawColumns";
import { useLoaderData } from "react-router-dom";

function TableRowProduct({ product }) {
  const [showVariations, setShowVariations] = useState(false);

  return (
    <div>
      <div className="flex w-full border-b border-[#D7D7D7]">
        <div className="w-1/12 py-4">
          <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
            {product.code}
          </span>
        </div>
        <div className="w-3/12 py-4">
          <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
            {product.name}
          </span>
        </div>
        <div className="w-2/12 py-4">
          <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
            {product.ubication}
          </span>
        </div>
        <div className="w-1/12 bg-[#69D8B34D] py-4 text-center">
          <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
            {product.stock}
          </span>
        </div>
        <div className="w-1/12 bg-[#D8A4694D] py-4 text-center">
          <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
            {product.engaged}
          </span>
        </div>
        <div className="w-1/12 bg-[#CBD8694D] py-4 text-center">
          <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
            {product.order}
          </span>
        </div>
        <div className="w-1/12 bg-[#69D8D64D] py-4 text-center">
          <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
            {product.available}
          </span>
        </div>
        <div className="w-1/12 py-4">
          <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
            {product.cost}
          </span>
        </div>
        <div className="w-1/12 py-4">
          {product.variations_val === true ? (
            <span
              className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
              onClick={() => setShowVariations(true)}
            >
              Ver Mas
            </span>
          ) : (
            false
          )}
        </div>
      </div>
      {showVariations === true ? (
        <>
          {product.variations((variation, i) => (
            <div className="flex w-full border-b border-[#D7D7D7]" key={i}>
              <div className="w-1/12 py-4">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {product.code}
                </span>
              </div>
              <div className="w-3/12 py-4">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.name}
                </span>
              </div>
              <div className="w-2/12 py-4">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.ubication}
                </span>
              </div>
              <div className="w-1/12 bg-[#69D8B34D] py-4 text-center">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.stock}
                </span>
              </div>
              <div className="w-1/12 bg-[#D8A4694D] py-4 text-center">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.engaged}
                </span>
              </div>
              <div className="w-1/12 bg-[#CBD8694D] py-4 text-center">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.order}
                </span>
              </div>
              <div className="w-1/12 bg-[#69D8D64D] py-4 text-center">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.available}
                </span>
              </div>
              <div className="w-1/12 py-4">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.cost}
                </span>
              </div>
              <div className="w-1/12 py-4"></div>
            </div>
          ))}
        </>
      ) : (
        false
      )}
    </div>
  );
}

export default TableRowProduct;
