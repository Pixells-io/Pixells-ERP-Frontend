import React, { useState } from "react";

function TableRowInventory({ inventory }) {
  const [showUbication, setShowUbication] = useState(false);

  return (
    <div>
      <div className="ml-1 flex w-full border-b border-[#D7D7D7]">
        <div className="mx-2 w-2/12 py-4">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={inventory.code}
          >
            {inventory.code}
          </span>
        </div>
        <div className="mx-2 w-3/12 py-4">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={inventory.name}
          >
            {inventory.name}
          </span>
        </div>
        <div className="mx-2 w-2/12 bg-[#69D8D64D] py-4 text-center">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={inventory.stock}
          >
            {inventory.stock}
          </span>
        </div>
        <div className="mx-2 w-2/12 bg-[#69D8D666] py-4 text-center">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={inventory.engaged}
          >
            {inventory.engaged}
          </span>
        </div>
        <div className="mx-2 w-1/12 bg-[#69D8D680] py-4 text-center">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={inventory.order}
          >
            {inventory.order}
          </span>
        </div>
        <div className="mx-2 w-2/12 bg-[#69D8D699] py-4 text-center">
          <span
            className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
            title={inventory.available}
          >
            {inventory.available}
          </span>
        </div>
        <div className="mx-2 w-2/12 py-4">
          {inventory.variations_val === true ? (
            <>
              {showUbication === false ? (
                <span
                  className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-semibold text-[#44444F]"
                  title={inventory.cost}
                >
                  {inventory.cost}
                </span>
              ) : (
                false
              )}
            </>
          ) : (
            <span
              className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-semibold text-[#44444F]"
              title={inventory.cost}
            >
              {inventory.cost}
            </span>
          )}
        </div>
        <div className="mx-2 w-2/12 py-4">
          {inventory.ubications_val === true ? (
            <span
              className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-semibold text-primario"
              onClick={() => setShowUbication(!showUbication)}
            >
              {showUbication === false ? "Ver Mas" : "Contraer"}
            </span>
          ) : (
            false
          )}
        </div>
      </div>
      {showUbication === true ? (
        <>
          {inventory.ubications.map((ubication, i) => (
            <div
              className="ml-1 flex w-full border-b border-[#D7D7D7] bg-[#D7D7D733]"
              key={i}
            >
              <div className="mx-2 w-2/12 py-4">
                <span
                  className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
                  title={ubication.code}
                >
                  {ubication.code}
                </span>
              </div>
              <div className="mx-2 w-3/12 py-4">
                <span
                  className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
                  title={ubication.name}
                >
                  {ubication.name}
                </span>
              </div>
              <div className="mx-2 w-2/12 bg-[#69D8D64D] py-4 text-center">
                <span
                  className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
                  title={ubication.stock}
                >
                  {ubication.stock}
                </span>
              </div>
              <div className="mx-2 w-2/12 bg-[#69D8D666] py-4 text-center">
                <span
                  className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
                  title={ubication.engaged}
                >
                  {ubication.engaged}
                </span>
              </div>
              <div className="mx-2 w-1/12 bg-[#69D8D680] py-4 text-center">
                <span
                  className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
                  title={ubication.order}
                >
                  {ubication.order}
                </span>
              </div>
              <div className="mx-2 w-2/12 bg-[#69D8D699] py-4 text-center">
                <span
                  className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-normal text-[#44444F]"
                  title={ubication.available}
                >
                  {ubication.available}
                </span>
              </div>
              <div className="mx-2 w-2/12 py-4">
                {ubication.ubications_val === true ? (
                  <>
                    {showUbication === false ? (
                      <span
                        className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-semibold text-[#44444F]"
                        title={ubication.cost}
                      >
                        {ubication.cost}
                      </span>
                    ) : (
                      false
                    )}
                  </>
                ) : (
                  <span
                    className="line-clamp-1 h-full items-center whitespace-nowrap font-roboto text-sm font-semibold text-[#44444F]"
                    title={ubication.cost}
                  >
                    {ubication.cost}
                  </span>
                )}
              </div>
              <div className="mx-2 w-2/12 py-4"></div>
            </div>
          ))}
        </>
      ) : (
        false
      )}
    </div>
  );
}

export default TableRowInventory;
