import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import React, { useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";

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

const deleteTicket = (ticket, tickets) => {
  localStorage.removeItem("products-" + ticket);
  localStorage.setItem("tickets", JSON.stringify(tickets));
};
//-----------------------------------------------------------------------------------------

function MainPos() {
  const { id } = useParams();

  const [tickets, setTickets] = useState(getTickets);

  const navigate = useNavigate();

  const addTickets = () => {
    const ticketsBd = saveTickets();
    setTickets(ticketsBd);
  };

  const cancelTicket = () => {
    const auxTickets = tickets.filter((ticket) => ticket.id != id);
    setTickets(auxTickets);
    deleteTicket(id, auxTickets);
    navigate("/pos");
  };

  return (
    <div className="flex h-full w-full flex-col overflow-auto rounded-lg bg-[#F9F9F9] px-4 py-4">
      <div className="flex w-fit gap-x-3 rounded-none bg-inherit">
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

      <Outlet context={[cancelTicket]} />
    </div>
  );
}

export default MainPos;
