import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import ModalItemGranel from "./Modal/ModalItemGranel";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";

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

//datos simulando guardado bd-----------------------------------------------------------
const saveTickets = () => {
  let ticketsBd = JSON.parse(localStorage.getItem("tickets"));
  if (!ticketsBd) {
    ticketsBd = [];
  }

  let newId = (ticketsBd[ticketsBd.length - 1]?.id || 0) + 1;
  ticketsBd.push({ id: newId, name: "T-" + newId });
  localStorage.setItem("tickets", JSON.stringify(ticketsBd));
  return ticketsBd;
};

const getTickets = () => {
  let ticketsBd = JSON.parse(localStorage.getItem("tickets"));
  if (!ticketsBd) {
    ticketsBd = [];
  }
  return ticketsBd;
};

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

const deleteTicket = (ticket, tickets) => {
  localStorage.removeItem("products-" + ticket);
  localStorage.setItem("tickets", JSON.stringify(tickets));
};
//-----------------------------------------------------------------------------------------

function MainPos() {
  const { id } = useParams();
  const [products, setProducts] = useState(getProducts(id));

  const [tickets, setTickets] = useState(getTickets);
  const [modalItemGranel, setModalItemGranel] = useState(false);
  const [productSelect, setProductSelect] = useState({});
  const [clientSelect, setClientSelect] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(getProducts(id));
  }, [id]);

  const addTickets = () => {
    const ticketsBd = saveTickets();
    setTickets(ticketsBd);
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

  const cancelTicket = () => {
    const auxTickets = tickets.filter((ticket) => ticket.id != id);
    setTickets(auxTickets);
    deleteTicket(id, auxTickets);
    navigate("/pos");
  };

  return (
    <div className="flex h-full w-full flex-col overflow-auto rounded-lg bg-[#F9F9F9] px-4 py-4">
      {/* Modals */}
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

      <div className="mt-2 flex w-fit gap-x-3 rounded-none bg-inherit">
        <IonIcon
          onClick={() => addTickets()}
          icon={addCircleOutline}
          className="h-6 w-6 cursor-pointer text-primarioBotones"
        ></IonIcon>
        {tickets.map((ticket, index) => (
          <NavLink
            key={"tickets" + index}
            to={"/pos/" + ticket.id}
            className={({ isActive }) =>
              isActive
                ? "rounded-3xl bg-[#44444F] px-4 py-2 text-xs font-medium text-white shadow-[0px_0px_8px_1px_rgba(0,0,0,0.25)]"
                : "rounded-3xl bg-[#F0F0F0] px-4 py-2 text-xs font-medium text-grisText"
            }
          >
            <span>{ticket.name}</span>
          </NavLink>
        ))}
      </div>

      <Outlet context={[products, setProducts, cancelTicket]} />
    </div>
  );
}

export default MainPos;
