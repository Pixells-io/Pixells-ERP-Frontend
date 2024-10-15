import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { IonIcon } from "@ionic/react";
import { add, chevronBack, chevronForward, trashOutline } from "ionicons/icons";
import { useParams } from "react-router-dom";

function PosGridMenuInfo({
  clientSelect,
  setClientSelect,
  products,
  setTotalProducts,
  setProducts,
  cancelTicket,
  openConfirmSale,
  totalProducts,
  clientsOptions,
  ticketSelect,
  setProductSelect,
  setModalItemGranel,
  setIndexProductSelec,
}) {
  const [ultimateLengthtableData, setUltimateLengthtableData] = useState(
    products.length,
  );
  const [ultimateProductAdd, setUltimateProductAdd] = useState(null);


  const tablePosRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const TotalP = products.reduce(
      (sum, row) =>
        sum +
        (parseFloat(
          (Number(row?.price) + calculateIva(row?.price)) * row?.quantity,
        ) || 0),
      0,
    );

    setTotalProducts(TotalP.toFixed(2));
  }, [products]);

  useEffect(() => {
    if (!!tablePosRef.current && products.length > ultimateLengthtableData) {
      tablePosRef.current.scrollTop = tablePosRef.current.scrollHeight;
      showUltimateProductAdd(products.length - 1);
    }
    setUltimateLengthtableData(products.length);
  }, [products]);

  const showUltimateProductAdd = (index) => {
    setUltimateProductAdd(index);
    setTimeout(() => {
        setUltimateProductAdd(null);
    }, 500);
  };

  const deleteAllProductSelects = (event) => {
    event.stopPropagation();
    const updateProducts = products.filter((p) => p?.isSelected !== true);
    localStorage.setItem("products-" + id, JSON.stringify(updateProducts));
    setProducts(updateProducts);
  };

  const incrementProduct = (event, index) => {
    event.stopPropagation();
    const updateProducts = products.map((product, index_p) => {
      if (index_p == index) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    setProducts(updateProducts);
  };

  const decrementProduct = (event, index) => {
    event.stopPropagation();
    const updateProducts = products.map((product, index_p) => {
      if (index_p == index && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
    setProducts(updateProducts);
  };

  const openModalGranel = (event, index, isGranel, isSelected) => {
    if (!isGranel || !isSelected) {
      return;
    } else {
      event.stopPropagation();
      setIndexProductSelec(index);
      let productFind = products.find((product, index_p) => index_p == index);
      setProductSelect(productFind);
      setModalItemGranel(true);
    }
  };

  const calculateIva = (price) => {
    return Number(price) * 0.16;
  };

  const selectedRow = (index) => {
    const updateProducts = products.map((product, index_p) => {
      if (index_p == index) {
        return {
          ...product,
          isSelected: !product.isSelected,
        };
      }
      return product;
    });
    setProducts(updateProducts);
  };

  return (
    <div className="flex w-fit min-w-[413px] flex-col border-l border-[#D7D7D7] px-4 pb-0.5 pt-1">
      {/* info clients and tickets */}
      <div className="">
        <div className="flex w-full flex-row justify-between gap-x-8">
          <div className="flex w-full items-center gap-x-4">
            <div className="w-fit font-poppins text-lg font-normal text-grisHeading">
              Cliente
            </div>
            <div className="w-full font-poppins text-base font-medium text-grisText">
              <SelectRouter
                name="client"
                options={clientsOptions}
                value={clientSelect}
                onChange={(e) => setClientSelect(e)}
              />
            </div>
          </div>
          <div className="flex w-fit items-end">
            <Button
              type="button"
              className="flex h-[24px] w-fit cursor-pointer items-center justify-center gap-x-2 rounded-xl bg-primarioBotones px-2 py-0 text-[11px] font-medium"
            >
              <IonIcon icon={add} className="h-4 w-4"></IonIcon>
              Cliente
            </Button>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-12">
          <div className="col-span-6 flex min-h-[34px] gap-x-7">
            <div className="w-fit font-poppins text-lg font-normal text-grisHeading">
              Ticket
            </div>
            <div className="w-fit font-poppins text-base font-medium text-grisText">
              {ticketSelect}
            </div>
          </div>

          {products.filter((p) => p.isSelected).length > 0 && (
            <div className="col-span-6 grid h-[32px] grid-cols-12 rounded-xl bg-grisBg py-0.5">
              <div className="col-span-7 flex items-center justify-center">
                <h4 className="text-xs font-normal text-[#44444F]">
                  {products.filter((p) => p.isSelected).length}{" "}
                  {products.filter((p) => p.isSelected).length > 1
                    ? "Seleccionados"
                    : "Seleccionado"}
                </h4>
              </div>
              <div className="col-span-5 flex justify-center">
                <div
                  className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-xl hover:bg-blancoBox"
                  onClick={(e) => deleteAllProductSelects(e)}
                >
                  <IonIcon icon={trashOutline} className="h-5 w-5"></IonIcon>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* products */}
      <div className="flex w-full flex-1 flex-col overflow-auto">
        <div className="mt-3 grid grid-cols-12 gap-x-2 border-b border-[#D7D7D7] p-2">
          <div className="col-span-5 text-xs font-medium text-grisText">
            Producto
          </div>
          <div className="col-span-1 text-xs font-medium text-grisText">
            Qty
          </div>
          <div className="col-span-3 text-xs font-medium text-grisText">
            Each
          </div>
          <div className="col-span-3 text-xs font-medium text-grisText">
            Total
          </div>
        </div>
        <div className="overflow-auto" ref={tablePosRef}>
          {products.map((p, index) => (
            <div
              key={index}
              className={`grid grid-cols-12 gap-x-2 px-2 hover:bg-primario/10 ${p.isSelected ? (p?.isGranel == false ? "bg-primario/25 py-0.5 hover:bg-primario/20" : "bg-primario/25 py-1.5 hover:bg-primario/20") : "py-1.5"}
              ${(index == ultimateProductAdd) && "bg-primario/10"}`}
              onClick={() => selectedRow(index)}
            >
              <div className="col-span-5 flex items-center text-sm font-normal text-grisHeading">
                {p.article}
              </div>
              <div
                className="gap col-span-1 flex cursor-pointer flex-col items-center justify-center gap-y-1 px-2 text-sm font-normal text-grisHeading"
                onClick={(event) =>
                  openModalGranel(event, index, p?.isGranel, p?.isSelected)
                }
              >
                {p?.isSelected && !p?.isGranel && (
                  <IonIcon
                    icon={chevronBack}
                    className="h-7 w-7 rotate-90 cursor-pointer rounded-full text-primarioBotones hover:bg-primarioBotones/10"
                    onClick={(event) => incrementProduct(event, index)}
                  ></IonIcon>
                )}
                {p.quantity}
                {p?.isSelected && !p?.isGranel && (
                  <IonIcon
                    icon={chevronForward}
                    className="h-7 w-7 rotate-90 cursor-pointer rounded-full text-primarioBotones hover:bg-primarioBotones/10"
                    onClick={(event) => decrementProduct(event, index)}
                  ></IonIcon>
                )}
              </div>
              <div className="col-span-3 flex items-center text-sm font-normal text-grisHeading">
                ${p.price.toFixed(2)}
              </div>
              <div className="col-span-3 flex items-center justify-between">
                <div className="flex h-fit items-center justify-center rounded-3xl border border-[#44444F] px-2 py-0 text-sm font-medium text-grisHeading">
                  $
                  {(
                    (Number(p.price) + Number(p.price) * 0.16) *
                    Number(p.quantity)
                  ).toFixed(2)}
                </div>
                {/* {p?.isSelected && (
                    <button
                      type="button"
                      onClick={(event) => deleteProduct(event, index)}
                      className="flex items-center"
                    >
                      <IonIcon
                        icon={closeCircle}
                        className="h-5 w-5 cursor-pointer text-[#8F8F8F]"
                      ></IonIcon>
                    </button>
                  )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* info */}
      <div className="grid grid-cols-12 gap-y-2.5 border-t border-[#D7D7D7] pt-2">
        <div className="col-span-7 text-sm font-medium text-grisHeading">
          ITEMS
        </div>
        <div className="col-span-5 text-sm font-medium text-grisHeading">
          {products.reduce(
            (a, c) => a + (c.isGranel ? 1 : Number(c.quantity)),
            0,
          )}
        </div>
        <div className="col-span-7 text-sm font-medium text-grisHeading">
          SUBTOTAL
        </div>
        <div className="col-span-5 text-sm font-medium text-grisHeading">
          $
          {products
            .reduce((a, c) => a + Number(c.price) * Number(c.quantity), 0)
            .toFixed(2)}
        </div>
        <div className="col-span-7 text-sm font-medium text-grisHeading">
          DESCUENTO
        </div>
        <div className="col-span-5 text-sm font-medium text-[#D7586B]">
          $0.00
        </div>
        <div className="col-span-7 text-sm font-medium text-grisHeading">
          IMPUESTO
        </div>
        <div className="col-span-5 text-sm font-medium text-grisHeading">
          $
          {products
            .reduce(
              (a, c) => a + Number(c.quantity) * (Number(c.price) * 0.16),
              0,
            )
            .toFixed(2)}
        </div>
        <div className="col-span-12 grid grid-cols-12 rounded-md bg-[#00A25940]/25 px-2 py-0.5">
          <div className="col-span-7 flex items-center text-base font-semibold text-grisHeading">
            TOTAL
          </div>
          <div className="col-span-5 flex items-center text-xl font-semibold text-grisHeading">
            ${totalProducts}
          </div>
        </div>
        <div className="col-span-12 flex w-full justify-between">
          <Button
            type="button"
            className="h-[54px] w-[138px] rounded-3xl bg-[#D7586B] p-0 text-xl font-semibold text-white"
            onClick={() => cancelTicket()}
          >
            CANCELAR
          </Button>
          <Button
            type="button"
            className="h-[54px] w-[194px] rounded-3xl bg-[#00A259] p-0 text-xl font-semibold text-white"
            onClick={() =>
              openConfirmSale(
                products.reduce(
                  (a, c) => a + (c.isGranel ? 1 : Number(c.quantity)),
                  0,
                ),
              )
            }
          >
            PAGAR
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PosGridMenuInfo;
