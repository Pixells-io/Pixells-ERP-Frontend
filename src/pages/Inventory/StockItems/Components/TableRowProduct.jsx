import React, { useState } from "react";

function TableRowProduct({ product }) {
  const [showVariations, setShowVariations] = useState(false);

  return (
    <div>
      <div className="flex w-full border-b border-[#D7D7D7]">
        <div className="mx-2 w-1/12 py-4">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={product.code}
          >
            {product.code}
          </span>
        </div>
        <div className="mx-2 w-3/12 py-4">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={product.cost}
          >
            {product.name}
          </span>
        </div>
        <div className="mx-2 w-2/12 py-4">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={product.cost}
          >
            {product.ubication}
          </span>
        </div>
        <div className="mx-2 w-1/12 bg-[#69D8B34D] py-4 text-center">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={product.cost}
          >
            {product.stock}
          </span>
        </div>
        <div className="mx-2 w-1/12 bg-[#D8A4694D] py-4 text-center">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={product.cost}
          >
            {product.engaged}
          </span>
        </div>
        <div className="mx-2 w-1/12 bg-[#CBD8694D] py-4 text-center">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={product.cost}
          >
            {product.order}
          </span>
        </div>
        <div className="mx-2 w-1/12 bg-[#69D8D64D] py-4 text-center">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={product.cost}
          >
            {product.available}
          </span>
        </div>
        <div className="mx-2 w-1/12 py-4">
          {product.variations_val === true ? (
            <>
              {showVariations === false ? (
                <span
                  className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-semibold text-[#44444F]"
                  title={product.cost}
                >
                  {product.cost}
                </span>
              ) : (
                false
              )}
            </>
          ) : (
            <span
              className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-semibold text-[#44444F]"
              title={product.cost}
            >
              {product.cost}
            </span>
          )}
        </div>
        <div className="mx-2 w-1/12 py-4">
          {product.variations_val === true ? (
            <span
              className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-semibold text-primario"
              onClick={() => setShowVariations(!showVariations)}
            >
              {showVariations === false ? "Ver Mas" : "Contraer"}
            </span>
          ) : (
            false
          )}
        </div>
      </div>
      {showVariations === true ? (
        <>
          {product.variations.map((variation, i) => (
            <div
              className="flex w-full border-b border-[#D7D7D7] bg-[#D7D7D733]"
              key={i}
            >
              <div className="mx-2 w-1/12 py-4">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {product.code}
                </span>
              </div>
              <div className="mx-2 w-3/12 py-4">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.name}
                </span>
              </div>
              <div className="mx-2 w-2/12 py-4">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.ubication}
                </span>
              </div>
              <div className="mx-2 w-1/12 bg-[#69D8B34D] py-4 text-center">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.stock}
                </span>
              </div>
              <div className="mx-2 w-1/12 bg-[#D8A4694D] py-4 text-center">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.engaged}
                </span>
              </div>
              <div className="mx-2 w-1/12 bg-[#CBD8694D] py-4 text-center">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.order}
                </span>
              </div>
              <div className="mx-2 w-1/12 bg-[#69D8D64D] py-4 text-center">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]">
                  {variation.available}
                </span>
              </div>
              <div className="mx-2 w-1/12 py-4">
                <span className="h-full items-center whitespace-nowrap font-roboto text-sm font-semibold text-[#44444F]">
                  {variation.cost}
                </span>
              </div>
              <div className="mx-2 w-1/12 py-4"></div>
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
