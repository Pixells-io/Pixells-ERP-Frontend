import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { IonIcon } from "@ionic/react";
import { add, chevronForward, closeCircle } from "ionicons/icons";
import { useParams } from "react-router-dom";
import ModalItemGranel from "../Modal/ModalItemGranel";

function ProductsPosGrid({
  productsOptions,
  validateIsGranel,
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
}) {
  const [categories, setCategories] = useState([
    { id: 1, name: "Calzado" },
    { id: 2, name: "Ropa" },
    { id: 3, name: "Accesorios" },
    { id: 4, name: "Ropa de cama" },
  ]);
  const [categorySelect, setCategorySelect] = useState({});
  const [productsFilter, setProductsFilter] = useState([]);

  const getProductsCategory = (c) => {
    const getProducts = productsOptions.filter((p) => p.category == c.id);
    setCategorySelect(c);
    setProductsFilter([...getProducts]);
  };

  const clearCategorySelect = () => {
    setCategorySelect({});
    setProductsFilter([]);
  };

  const [modalItemGranel, setModalItemGranel] = useState(false);
  const [productSelect, setProductSelect] = useState({});
  const [indexProductSelect, setIndexProductSelec] = useState(null);
  const [ultimateLengthtableData, setUltimateLengthtableData] = useState(
    products.length,
  );

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
    }
    setUltimateLengthtableData(products.length);
  }, [products]);

  const deleteProduct = (event, index) => {
    event.stopPropagation();
    const updateProducts = products.filter((_, index_p) => index_p !== index);
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

  const editProductGranel = (newProduct) => {
    const updateProducts = products.map((product, index_p) => {
      if (index_p == indexProductSelect) {
        return {
          ...newProduct,
        };
      }
      return product;
    });
    setProducts(updateProducts);
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
    <div className="flex h-full w-full">
      {/* add */}
      <ModalItemGranel
        modal={modalItemGranel}
        setModal={setModalItemGranel}
        functionModal={editProductGranel}
        product={productSelect}
      />
      <div className="flex w-full flex-col gap-y-4 p-4">
        <div className="flex flex-col gap-y-4">
          <SelectRouter
            className="w-full rounded-3xl border-0 bg-[#FBFBFB] font-roboto text-xs font-light text-grisText shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)] !ring-0 !ring-offset-0 focus:border-primarioBotones"
            name={"article"}
            options={productsOptions}
            onChange={(e) => validateIsGranel(e)}
            getOptionLabel={(option) => option.article + " - " + option.sku}
            getOptionValue={(option) => option.id}
            filterOption={(option, value) => {
              return (
                option.data.article
                  .toLowerCase()
                  .includes(value.toLowerCase()) ||
                option.data.sku.toLowerCase().includes(value.toLowerCase()) ||
                option.data.description
                  .toLowerCase()
                  .includes(value.toLowerCase())
              );
            }}
          />
          <h2 className="text-md flex items-center gap-x-3 font-roboto font-semibold text-grisHeading">
            <label
              className="cursor-pointer"
              onClick={() => clearCategorySelect()}
            >
              Categorías
            </label>
            {!!categorySelect?.name && (
              <>
                <IonIcon icon={chevronForward} className="h-4 w-4"></IonIcon>
                {categorySelect?.name}
              </>
            )}
          </h2>
        </div>
        {/* categorias */}
        <div className="flex flex-wrap gap-4 overflow-auto">
          {/* all categories */}
          {categories.map((c, index) => (
            <div
              key={index}
              className="text-roboto flex h-[100px] w-[169px] cursor-pointer items-center justify-center rounded-xl bg-primarioBotones text-xl font-semibold text-white"
              onClick={() => getProductsCategory(c)}
            >
              {c.name}
            </div>
          ))}
        </div>
        {/* products filter by category */}
        <div className="flex flex-wrap gap-8 overflow-auto">
          {/* all products */}
          {productsFilter.map((p, index) => (
            <div
              key={index}
              className="flex h-[164px] w-[160px] cursor-pointer flex-col items-center justify-center rounded-xl border-[1px] border-[##D7D7D7] bg-white"
              onClick={() => validateIsGranel(p)}
            >
              <div className="h-[115px] w-full rounded-t-xl">
                <img
                  loading="lazy"
                  src={p?.image}
                  className="h-full w-full rounded-t-xl object-cover"
                />
              </div>
              <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-1 border-t border-[#D7D7D7]">
                <p className="text-center text-xs font-normal text-grisHeading">
                  {p?.article}
                </p>
                <p className="text-center text-xs font-medium text-grisHeading">
                  ${(p?.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* menu right */}
      <div className="flex w-fit min-w-[413px] flex-col border-l border-[#D7D7D7] p-4">
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
            <div className="flex w-fit items-center">
              <Button
                type="button"
                className="flex h-[24px] w-fit cursor-pointer items-center justify-center gap-x-2 rounded-xl bg-primarioBotones px-2 py-0 text-[11px] font-medium"
              >
                <IonIcon icon={add} className="h-4 w-4"></IonIcon>
                Cliente
              </Button>
            </div>
          </div>
          <div className="mt-2 flex gap-x-7">
            <div className="w-fit font-poppins text-lg font-normal text-grisHeading">
              Ticket
            </div>
            <div className="w-fit font-poppins text-base font-medium text-grisText">
              {ticketSelect}
            </div>
          </div>
        </div>
        {/* products */}
        <div className="flex w-full flex-1 flex-col overflow-auto">
          <div className="mt-4 grid grid-cols-12 gap-x-2 border-b border-[#D7D7D7] p-2">
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
                className={`grid grid-cols-12 gap-x-2 px-2 py-2.5 hover:bg-primario/10 ${p.isSelected && "bg-primario/25 hover:bg-primario/20"}`}
                onClick={() => selectedRow(index)}
              >
                <div className="col-span-5 flex items-center text-sm font-normal text-grisHeading">
                  {p.article}
                </div>
                <div
                  className="col-span-1 flex items-center justify-center text-sm font-normal text-grisHeading hover:cursor-pointer px-2"
                  onClick={(event) =>
                    openModalGranel(event, index, p?.isGranel, p?.isSelected)
                  }
                >
                  {p.quantity}
                </div>
                <div className="col-span-3 flex items-center text-sm font-normal text-grisHeading">
                  ${p.price.toFixed(2)}
                </div>
                <div className="col-span-3 flex justify-between">
                  <div className="flex items-center justify-center rounded-3xl border border-[#44444F] px-2 py-1 text-sm font-medium text-grisHeading">
                    $
                    {(
                      (Number(p.price) + Number(p.price) * 0.16) *
                      Number(p.quantity)
                    ).toFixed(2)}
                  </div>
                  {p?.isSelected && (
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* info */}
        <div className="grid grid-cols-12 gap-y-4 border-t border-[#D7D7D7] py-4">
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
          <div className="col-span-12 mt-6 flex w-full justify-between">
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
    </div>
  );
}

export default ProductsPosGrid;
