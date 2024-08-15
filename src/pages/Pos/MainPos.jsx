import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import React, { useState } from "react";
import PosTableForm from "./Table/PosTableForm";
import { Button } from "@/components/ui/button";
import ModalScanItemNum from "./Modal/ModalScanItemNum";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import ModalItemGranel from "./Modal/ModalItemGranel";

const productsOptions = [
  {
    id: 1,
    isGranel: true,
    image: "https://picsum.photos/200/300?grayscale",
    article: "Balon Brazuca",
    sku: "0345444",
    description: "Balon profesional mundial 2014",
    quantity: 1,
    price: 300,
    discount: 0,
    iva: 16,
    subTotal: 20,
  },
  {
    id: 2,
    isGranel: false,
    image: "https://picsum.photos/200/300?grayscale",
    article: "Calzado",
    sku: "0345432",
    description: "Calzado adidas",
    quantity: 1,
    price: 800,
    discount: 0,
    iva: 16,
    subTotal: 800,
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

function MainPos() {
  const [tickets, setTickets] = useState([
    {
      products: [
        {
          image: "https://picsum.photos/200/300?grayscale",
          article: "PLAYERA",
          sku: "07863548",
          description: "Playera de algodón azul",
          quantity: 6,
          price: 95,
          discount: 0,
          iva: 16,
          subTotal: 106,
        },
        {
          image: "https://picsum.photos/id/237/200/300",
          article: "PLAYERA",
          sku: "07863548",
          description: "Playera de algodón azul",
          quantity: 7,
          price: 95,
          discount: 0,
          iva: 16,
          subTotal: 106,
        },
      ],
    },
    {
      products: [],
    },
  ]);
  const [subTotalProducts, setSubTotalProducts] = useState(0);
  const [totalInProducts, setTotalInProducts] = useState(0);
  const [modalScanItemN, setModalScanItemN] = useState(false);
  const [modalItemGranel, setModalItemGranel] = useState(false);
  const [productSelect, setProductSelect] = useState({});
  const [onSelectTab, setOnSelectTab] = useState(null);

  let productsArray = [];
  productsOptions?.map((product, i) => {
    let newObj = {
      ...product,
      label: product.article,
      value: product.id,
    };
    productsArray.push(newObj);
  });

  const addTickets = () => {
    setTickets([...tickets, { products: [] }]);
  };

  const validateIsGranel = (value) => {
    if (onSelectTab === null) return;
    setProductSelect(value);

    if (value.isGranel) {
      setModalItemGranel(true);
    } else {
      addProduct(value);
    }
  };

  const addProduct = (value) => {
    let ticketsAux = tickets.map((ticket, i) => {
      if (i == onSelectTab) {
        return {
          ...ticket,
          products: [...ticket.products, value],
        };
      }
      return ticket;
    });

    setTickets(ticketsAux);
  };

  const openConfirmSale = (tProducts) => {
    setTotalInProducts(tProducts);
    setModalScanItemN(true);
  };

  return (
    <div className="flex w-full flex-col rounded-lg bg-[#F9F9F9] px-4 py-4">
      {/* Modals */}
      <ModalScanItemNum
        modal={modalScanItemN}
        setModal={setModalScanItemN}
        totalProducts={totalInProducts}
      />
      <ModalItemGranel
        modal={modalItemGranel}
        setModal={setModalItemGranel}
        functionModal={addProduct}
        product={productSelect}
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
            options={productsArray}
            onChange={(e) => validateIsGranel(e)}
          />
        </div>
        <div className="col-span-5 flex flex-col">
          <h2 className="font-poppins text-lg font-normal text-grisHeading">
            Cliente
          </h2>
          <SelectRouter
            className="w-full rounded-3xl border-0 bg-[#FBFBFB] font-roboto text-xs font-light text-grisText shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)] !ring-0 !ring-offset-0 focus:border-primarioBotones"
            name={"clients"}
            options={clientsOptions}
            // onChange={(e) => addProduct(e)}
          />
        </div>
      </div>

      {/* tickets */}
      <Tabs
        defaultValue="crm"
        className="mt-2 h-full w-full rounded-lg bg-inherit"
        onValueChange={(value) => setOnSelectTab(value)}
      >
        <TabsList className="flex w-fit gap-x-3 rounded-none bg-inherit">
          <IonIcon
            onClick={() => addTickets()}
            icon={addCircleOutline}
            className="h-6 w-6 cursor-pointer text-primarioBotones"
          ></IonIcon>
          {tickets.map((ticket, index) => (
            <TabsTrigger
              key={index}
              value={index}
              className="rounded-3xl bg-[#F0F0F0] px-4 py-2 text-xs font-medium text-grisText data-[state=active]:bg-[#44444F] data-[state=active]:text-white data-[state=active]:shadow-[0px_0px_8px_1px_rgba(0,0,0,0.25)]"
            >
              T {index}
            </TabsTrigger>
          ))}
        </TabsList>
        {tickets.map((ticket, index) => (
          <TabsContent key={index} value={index} className="h-full p-2">
            <div className="w-full">
              <PosTableForm
                tableData={ticket.products}
                setTotalProducts={setSubTotalProducts}
              />
              <div className="mt-4 w-full">
                <div className="grid w-full grid-cols-9">
                  <div className="col-span-4"></div>
                  <div className="col-span-1">
                    <h2 className="text-md font-poppins font-medium text-[#44444F]">
                      ARTICULOS:
                      {ticket.products.reduce((a, c) => a + c.quantity, 0)}
                    </h2>
                  </div>
                  <div className="col-span-3"></div>
                  <div className="col-span-1">
                    <h2 className="text-md font-poppins font-semibold text-[#44444F]">
                      Total: {subTotalProducts}
                    </h2>
                  </div>
                </div>

                <div className="my-4 flex w-full justify-between">
                  <Button
                    type="button"
                    className="text-md rounded-3xl bg-grisDisabled font-medium text-white shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)]"
                  >
                    CANCELAR
                  </Button>
                  <Button
                    type="button"
                    className="text-md rounded-3xl bg-primarioBotones font-medium text-white shadow-[0px_0px_8px_1px_rgba(0,0,0,0.2)]"
                    onClick={() =>
                      openConfirmSale(
                        ticket.products.reduce((a, c) => a + c.quantity, 0),
                      )
                    }
                  >
                    COBRAR
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default MainPos;