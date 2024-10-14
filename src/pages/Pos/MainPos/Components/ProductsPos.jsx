import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import ModalScanItemNum from "../Modal/ModalScanItemNum";
import PaymentMethods from "../Modal/PaymentMethods/PaymentMethods";
import ModalItemGranel from "../Modal/ModalItemGranel";
import ProductsPosList from "./ProductPosList";
import ProductsPosGrid from "./ProductPosGrid";

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
  const [cancelTicket, isGrid] = useOutletContext();
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
    <div className="flex h-full w-full flex-col overflow-auto">
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

      {isGrid ? (
        <ProductsPosGrid
          productsOptions={productsOptions}
          validateIsGranel={validateIsGranel}
          clientSelect={clientSelect}
          setClientSelect={setClientSelect}
          products={products}
          setTotalProducts={setTotalProducts}
          setProducts={setProducts}
          cancelTicket={cancelTicket}
          openConfirmSale={openConfirmSale}
          totalProducts={totalProducts}
          clientsOptions={clientsOptions}
        />
      ) : (
        <ProductsPosList
          productsOptions={productsOptions}
          validateIsGranel={validateIsGranel}
          clientSelect={clientSelect}
          setClientSelect={setClientSelect}
          products={products}
          setTotalProducts={setTotalProducts}
          setProducts={setProducts}
          cancelTicket={cancelTicket}
          openConfirmSale={openConfirmSale}
          totalProducts={totalProducts}
          clientsOptions={clientsOptions}
        />
      )}
    </div>
  );
}

export default ProductsPos;
