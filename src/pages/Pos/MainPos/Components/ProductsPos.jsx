import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import PosTableForm from "../Table/PosTableForm";
import { useOutletContext, useParams } from "react-router-dom";
import ModalScanItemNum from "../Modal/ModalScanItemNum";
import PaymentMethods from "../Modal/PaymentMethods/PaymentMethods";
import ModalItemGranel from "../Modal/ModalItemGranel";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

//datos simulando guardado bd-----------------------------------------------------------
const productsOptions = [
  {
    id: 1,
    isGranel: true,
    image: "https://picsum.photos/id/237/200/300",
    article: "Balon Brazuca",
    sku: "0345444",
    description: "Balon profesional mundial 2014",
    quantity: 1,
    price: 300,
    discount: 0,
    iva: 16,
  },
  {
    id: 2,
    isGranel: false,
    image: "https://picsum.photos/id/180/200/300",
    article: "Playera Femenil",
    sku: "123321",
    description: "Playera de algodón rosita",
    quantity: 1,
    price: 740,
    discount: 0,
    iva: 16,
  },
  {
    id: 3,
    isGranel: false,
    image: "https://picsum.photos/200/300?grayscale",
    article: "Calzado",
    sku: "0345432",
    description: "Calzado adidas",
    quantity: 1,
    price: 800,
    discount: 0,
    iva: 16,
  },
  {
    id: 4,
    isGranel: false,
    image: "https://picsum.photos/id/200/200/300",
    article: "PLAYERA",
    sku: "07863548",
    description: "Playera de algodón azul",
    quantity: 1,
    price: 95,
    discount: 0,
    iva: 16,
  },
  {
    id: 5,
    isGranel: true,
    image: "https://picsum.photos/id/203/200/300",
    article: "Naranja",
    sku: "0433422",
    description: "Naranja Chihuahua",
    quantity: 1,
    price: 20,
    discount: 0,
    iva: 16,
  },
];

const clientsOptions = [
  {
    value: "1",
    label: "Agustin Hdez",
  },
  {
    value: "2",
    label: "Luis Daniel",
  },
  {
    value: "3",
    label: "Antonio",
  },
];

const saveProducts = (products, product, ticket) => {
  let newId = (products[products.length - 1]?.id || 0) + 1;
  let auxProducts = [...products, { ...product, id: newId, isSelected: false }];
  localStorage.setItem("products-" + ticket, JSON.stringify(auxProducts));
  return auxProducts;
};

const getProducts = (ticket) => {
  let productsBD = JSON.parse(localStorage.getItem("products-" + ticket));
  if (!productsBD) {
    productsBD = [];
  }
  return productsBD;
};
//----------------------------------------------------------------------------------------

function ProductsPos() {
  const { id } = useParams();
  const [products, setProducts] = useState(getProducts(id));
  const [cancelTicket] = useOutletContext();
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalInProducts, setTotalInProducts] = useState(0);
  const [modalScanItemN, setModalScanItemN] = useState(false);
  const [modalPaymentMethod, setModalPaymentMethod] = useState(false);
  const [modalItemGranel, setModalItemGranel] = useState(false);
  const [productSelect, setProductSelect] = useState({});
  const [clientSelect, setClientSelect] = useState({});

  useEffect(() => {
    setProducts(getProducts(id));
  }, [id]);

  const openConfirmSale = (tProducts) => {
    setTotalInProducts(tProducts);
    setModalScanItemN(true);
  };

  const validateIsGranel = (value) => {
    if (value.isGranel) {
      setProductSelect(value);
      setModalItemGranel(true);
    } else {
      addProduct(value);
    }
  };

  const addProduct = (value) => {
    let productBd = saveProducts(products, value, id);
    setProducts(productBd);
  };

  return (
    <div className="mt-2 flex h-full w-full flex-col overflow-auto">
      {/* modals */}
      <ModalScanItemNum
        modal={modalScanItemN}
        setModal={setModalScanItemN}
        totalProducts={totalInProducts}
        setModalPaymentMethod={setModalPaymentMethod}
      />
      <ModalItemGranel
        modal={modalItemGranel}
        setModal={setModalItemGranel}
        functionModal={addProduct}
        product={productSelect}
      />
      <PaymentMethods
        modal={modalPaymentMethod}
        setModal={setModalPaymentMethod}
        information={{
          totalArticles: products.reduce(
            (a, c) => a + (c.isGranel ? 1 : Number(c.quantity)),
            0,
          ),
          subTotal: products
            .reduce((a, c) => a + Number(c.price) * Number(c.quantity), 0)
            .toFixed(2),
          iva: products
            .reduce(
              (a, c) => a + Number(c.price) * 0.16 * Number(c.quantity),
              0,
            )
            .toFixed(2),
          total: totalProducts,
        }}
      />

      {/* add */}
      <div className="grid w-full grid-cols-12 gap-10">
        <div className="col-span-7 flex flex-col">
          <h2 className="font-poppins text-lg font-normal text-grisHeading">
            Productos
          </h2>
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
        </div>
        <div className="col-span-5 flex flex-col">
          <h2 className="font-poppins text-lg font-normal text-grisHeading">
            Cliente &nbsp;&nbsp;&nbsp;
            <span className="font-poppins text-xl font-normal text-[#5B89FF]">
              {clientSelect.label}
            </span>
          </h2>
          <SelectRouter
            className="w-full rounded-3xl border-0 bg-[#FBFBFB] font-roboto text-xs font-light text-grisText shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)] !ring-0 !ring-offset-0 focus:border-primarioBotones"
            name={"clients"}
            options={clientsOptions}
            onChange={(e) => setClientSelect(e)}
          />
        </div>
      </div>

      {/* table */}
      <div className="mt-4 flex-1 overflow-auto">
        <div className="flex h-full w-full flex-col justify-between">
          <PosTableForm
            tableData={products}
            setTotalProducts={setTotalProducts}
            setProducts={setProducts}
          />
          <div className="mt-2 w-full">
            <div className="grid w-full grid-cols-9 px-2 py-2">
              <div className="col-span-4 flex items-center">
                <Button
                  type="button"
                  className="text-md rounded-3xl bg-grisDisabled px-6 py-7 font-medium text-white shadow-[0px_0px_6px_1px_rgba(0,0,0,0.2)]"
                  onClick={() => cancelTicket()}
                >
                  CANCELAR
                </Button>
              </div>
              <div className="col-span-1 flex items-center">
                <h2 className="font-poppins text-lg font-medium text-[#44444F]">
                  ARTICULOS:&nbsp;
                  {products.reduce(
                    (a, c) => a + (c.isGranel ? 1 : Number(c.quantity)),
                    0,
                  )}
                </h2>
              </div>
              <div className="col-span-4 flex items-center justify-end">
                <Button
                  type="button"
                  className="flex min-w-[260px] justify-between rounded-3xl bg-primarioBotones py-7 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)]"
                  onClick={() =>
                    openConfirmSale(
                      products.reduce(
                        (a, c) => a + (c.isGranel ? 1 : Number(c.quantity)),
                        0,
                      ),
                    )
                  }
                >
                  <span className="text-lg font-medium text-white">COBRAR</span>
                  <span className="font-poppins text-xl font-semibold text-white">
                    ${totalProducts}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPos;
