import React, { useState } from "react";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { IonIcon } from "@ionic/react";
import {
  chevronForward,
} from "ionicons/icons";
import ModalItemGranel from "../Modal/ModalItemGranel";
import PosGridMenuInfo from "./PosGridMenuInfo";

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

          {!categorySelect?.name ? (
            categories.map((c, index) => (
              <div
                key={index}
                className="text-roboto flex h-[100px] w-[169px] cursor-pointer items-center justify-center rounded-xl bg-primarioBotones text-xl font-semibold text-white"
                onClick={() => getProductsCategory(c)}
              >
                {c.name}
              </div>
            ))
          ) : (
            <>
              {/* category select and categories more populater */}
              <div className="text-roboto flex h-[100px] w-[169px] cursor-pointer items-center justify-center rounded-xl bg-[#44444F] text-xl font-semibold text-white">
                {categorySelect.name}
              </div>
              {categories
                .filter((c) => c.id != categorySelect.id)
                .map((c, index) => (
                  <div
                    key={index}
                    className="text-roboto flex h-[100px] w-[169px] cursor-pointer items-center justify-center rounded-xl bg-primarioBotones text-xl font-semibold text-white"
                    onClick={() => getProductsCategory(c)}
                  >
                    {c.name}
                  </div>
                ))}
            </>
          )}
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
      <PosGridMenuInfo 
      clientSelect={clientSelect}
      setClientSelect={setClientSelect}
      products={products}
      setTotalProducts={setTotalProducts}
      setProducts={setProducts}
      cancelTicket={cancelTicket}
      openConfirmSale={openConfirmSale}
      totalProducts={totalProducts}
      clientsOptions={clientsOptions}
      ticketSelect={ticketSelect}
      setProductSelect={setProductSelect}
      setModalItemGranel={setModalItemGranel}
      setIndexProductSelec={setIndexProductSelec}
      />
    </div>
  );
}

export default ProductsPosGrid;
