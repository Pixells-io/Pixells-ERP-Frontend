import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import PosTableForm from "../Table/PosTableForm";
import { useOutletContext } from "react-router-dom";
import ModalScanItemNum from "../Modal/ModalScanItemNum";
import PaymentMethods from "../Modal/PaymentMethods/PaymentMethods";

function ProductsPos() {
  const [products, setProducts, cancelTicket] = useOutletContext();

  const [subTotalProducts, setSubTotalProducts] = useState(0);
  const [totalInProducts, setTotalInProducts] = useState(0);
  const [modalScanItemN, setModalScanItemN] = useState(false);
  const [modalPaymentMethod, setModalPaymentMethod] = useState(false);

  const openConfirmSale = (tProducts) => {
    setTotalInProducts(tProducts);
    setModalScanItemN(true);
  };

  return (
    <div className="flex-1 overflow-auto p-2">
      <ModalScanItemNum
        modal={modalScanItemN}
        setModal={setModalScanItemN}
        totalProducts={totalInProducts}
        setModalPaymentMethod={setModalPaymentMethod}
      />
       <PaymentMethods
        modal={modalPaymentMethod}
        setModal={setModalPaymentMethod}
      />
      <div className="flex h-full w-full flex-col justify-between">
        <PosTableForm
          tableData={products}
          setTotalProducts={setSubTotalProducts}
          setProducts={setProducts}
        />
        <div className="mt-4 w-full">
          <div className="grid w-full grid-cols-9">
            <div className="col-span-4 flex items-center">
              <Button
                type="button"
                className="text-md rounded-3xl bg-grisDisabled px-6 py-7 font-medium text-white shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)]"
                onClick={() => cancelTicket()}
              >
                CANCELAR
              </Button>
            </div>
            <div className="col-span-1 flex items-center">
              <h2 className="font-poppins text-lg font-medium text-[#44444F]">
                ARTICULOS:&nbsp;
                {products.reduce((a, c) => a + c.quantity, 0)}
              </h2>
            </div>
            <div className="col-span-4 flex items-center justify-end">
              <Button
                type="button"
                className="flex min-w-[260px] justify-between rounded-3xl bg-primarioBotones py-7 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)]"
                onClick={() =>
                  openConfirmSale(products.reduce((a, c) => a + c.quantity, 0))
                }
              >
                <span className="text-lg font-medium text-white">COBRAR</span>
                <span className="font-poppins text-xl font-semibold text-white">
                  ${subTotalProducts}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPos;
